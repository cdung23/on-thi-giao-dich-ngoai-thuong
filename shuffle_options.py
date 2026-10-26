"""
shuffle_options.py
Thuật toán tái phân bố vị trí đáp án A, B, C, D cho kho 303 câu hỏi Giao dịch ngoại thương & Incoterms 2020.
Mục tiêu: Đạt tỷ lệ cân bằng ~25% cho mỗi phương án (A: ~76, B: ~76, C: ~76, D: ~75).
Triệt tiêu hoàn toàn bẫy 'auto chọn A', chống học vẹt vị trí.
"""

import sys
import re
import json
import random
from collections import Counter

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

JS_PATH = 'questions_data.js'
MD_PATH = 'Trắc nghiệm - Đáp án và Giải thích.md'
PDF_MD_PATH = 'GDNT_DAP_AN_DE_ON_TAP_100_CAU_PDF.md'

with open(JS_PATH, 'r', encoding='utf-8') as f:
    js_text = f.read()

match = re.search(r'const\s+QUESTIONS_DATA\s*=\s*(\[[\s\S]*?\]);', js_text)
if not match:
    raise ValueError("Không tìm thấy QUESTIONS_DATA trong questions_data.js")

questions = json.loads(match.group(1))
total = len(questions)
print(f"[*] Đang xử lý {total} câu hỏi...")

# Thống kê trước khi đảo
before_counts = Counter(q['answer'] for q in questions)
print(f"[*] Phân bố TRƯỚC KHI ĐẢO: {dict(before_counts)}")

# Tạo danh sách đáp án mục tiêu cân đối 25% mỗi lựa chọn
# 303 câu = 76 A + 76 B + 76 C + 75 D
targets = ['A'] * 76 + ['B'] * 76 + ['C'] * 76 + ['D'] * 75
rng = random.Random(20261026) # Seed cố định để kết quả xác định và kiểm soát được
rng.shuffle(targets)

shuffled_questions = []

for idx, q in enumerate(questions):
    target_letter = targets[idx]
    current_ans = q['answer']
    current_opts = q['options']
    correct_text = current_opts[current_ans]
    wrong_texts = [v for k, v in current_opts.items() if k != current_ans]

    # Kiểm tra phương án phụ thuộc như 'Tất cả các đáp án đều...'
    has_all_above = any(re.search(r'(tất cả các đáp án|tất cả phương án)', v, re.IGNORECASE) for v in current_opts.values())
    
    # Nếu câu có phương án 'Tất cả...'
    # Ta phải giữ phương án 'Tất cả...' ở vị trí D để văn phong logic tiếng Việt không bị ngược
    all_above_key = None
    for k, v in current_opts.items():
        if re.search(r'(tất cả các đáp án|tất cả phương án)', v, re.IGNORECASE):
            all_above_key = k
            break

    new_options = {}
    if all_above_key:
        all_above_text = current_opts[all_above_key]
        is_all_above_correct = (current_ans == all_above_key)
        
        if is_all_above_correct:
            # Nếu chính phương án 'Tất cả...' là đúng -> bắt buộc nó nằm ở D
            other_wrongs = [v for k, v in current_opts.items() if k != all_above_key]
            rng.shuffle(other_wrongs)
            new_options = {'A': other_wrongs[0], 'B': other_wrongs[1], 'C': other_wrongs[2], 'D': all_above_text}
            new_ans = 'D'
        else:
            # 'Tất cả...' là sai -> nó vẫn nằm ở D. Đáp án đúng được xếp vào A, B hoặc C
            chosen_letter = target_letter if target_letter in ['A', 'B', 'C'] else rng.choice(['A', 'B', 'C'])
            other_wrongs = [v for k, v in current_opts.items() if k != all_above_key and k != current_ans]
            rng.shuffle(other_wrongs)
            
            slots = ['A', 'B', 'C']
            slots.remove(chosen_letter)
            new_options[chosen_letter] = correct_text
            new_options[slots[0]] = other_wrongs[0]
            new_options[slots[1]] = other_wrongs[1]
            new_options['D'] = all_above_text
            new_ans = chosen_letter
    else:
        # Trường hợp thông thường: Đặt đáp án đúng vào target_letter, 3 đáp án sai vào các vị trí còn lại
        other_slots = [letter for letter in ['A', 'B', 'C', 'D'] if letter != target_letter]
        rng.shuffle(wrong_texts)
        
        new_options[target_letter] = correct_text
        for slot, w_text in zip(other_slots, wrong_texts):
            new_options[slot] = w_text
            
        # Sắp xếp lại dict options theo thứ tự A, B, C, D
        new_options = {k: new_options[k] for k in ['A', 'B', 'C', 'D']}
        new_ans = target_letter

    new_q = dict(q)
    new_q['options'] = new_options
    new_q['answer'] = new_ans
    shuffled_questions.append(new_q)

# Thống kê sau khi đảo
after_counts = Counter(q['answer'] for q in shuffled_questions)
print(f"[+] Phân bố SAU KHI ĐẢO: {dict(after_counts)}")

# Cập nhật questions_data.js
# Lấy lại phần PDF_EXAM_QUESTION_IDS
pdf_match = re.search(r'(const\s+PDF_EXAM_QUESTION_IDS\s*=\s*\[[\s\S]*?\];)', js_text)
pdf_part = pdf_match.group(1) if pdf_match else "const PDF_EXAM_QUESTION_IDS = [];"

header_text = """/**
 * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020
 * Bộ môn: Giao dịch Ngoại thương - ĐH Ngoại thương / Khối ngành Kinh tế Quốc tế
 * Tổng số câu hỏi: 303 câu hỏi chuẩn hóa
 * ĐÃ XÁO TRỘN ĐÁP ÁN ĐỒNG ĐỀU (A, B, C, D ~ 25% mỗi phương án) - Chống bẫy auto chọn A
 */

const QUESTIONS_DATA = """

new_js = header_text + json.dumps(shuffled_questions, ensure_ascii=False, indent=2) + ";\n\n/**\n * Danh sách ID câu hỏi tương ứng theo đúng thứ tự 1 -> 100 trong file GDNT_DS CÂU HỎI ÔN TẬP.pdf\n */\n" + pdf_part + "\n"

with open(JS_PATH, 'w', encoding='utf-8') as f:
    f.write(new_js)
print(f"[+] Đã cập nhật thành công {JS_PATH}")

# Tái tạo tệp Trắc nghiệm - Đáp án và Giải thích.md
md_lines = [
    "# NGÂN HÀNG CÂU HỎI VÀ ĐÁP ÁN TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020",
    "## BỘ TÀI LIỆU ÔN THI KẾT THÚC HỌC PHẦN (CHUẨN HÓA 303 CÂU - ĐÃ ĐẢO ĐÁP ÁN ĐỒNG ĐỀU)",
    "- **Tổng số câu hỏi:** 303 câu hỏi chính quy (Gồm 300 câu ngân hàng gốc + 3 câu bổ sung từ Đề thi PDF)",
    f"- **Phân bố tỷ lệ đáp án:** A: {after_counts['A']} câu ({after_counts['A']/total*100:.1f}%) | B: {after_counts['B']} câu ({after_counts['B']/total*100:.1f}%) | C: {after_counts['C']} câu ({after_counts['C']/total*100:.1f}%) | D: {after_counts['D']} câu ({after_counts['D']/total*100:.1f}%)",
    "- **Căn cứ pháp lý & học thuật:** Incoterms® 2020 (ICC), UCP 600, CISG 1980, Luật Thương mại 2005 & Luật Hải quan 2014.",
    "",
    "---",
    ""
]

curr_ch = ""
for q in shuffled_questions:
    ch = q.get('chapter', 'Chương chung')
    if ch != curr_ch:
        curr_ch = ch
        md_lines.extend([
            f"\n## {curr_ch.upper()}",
            "=" * 70,
            ""
        ])
    
    pdf_badge = f" *(Đề thi PDF: Câu {q['pdf_no']})*" if q.get('pdf_no') else ""
    md_lines.append(f"### Câu {q['id']}{pdf_badge}")
    md_lines.append(f"**Câu hỏi:** {q['question']}\n")
    for letter in ['A', 'B', 'C', 'D']:
        md_lines.append(f"- **{letter}.** {q['options'][letter]}")
    md_lines.append(f"\n👉 **Đáp án đúng:** **[{q['answer']}] - {q['options'][q['answer']]}**")
    md_lines.append(f"💡 **Căn cứ pháp lý & Phân tích chuyên môn:** {q['explanation']}\n")
    md_lines.append("---\n")

with open(MD_PATH, 'w', encoding='utf-8') as f:
    f.write("\n".join(md_lines))
print(f"[+] Đã cập nhật thành công {MD_PATH}")

# Tái tạo tệp GDNT_DAP_AN_DE_ON_TAP_100_CAU_PDF.md
pdf_questions = [q for q in shuffled_questions if q.get('pdf_no')]
pdf_questions.sort(key=lambda x: x.get('pdf_no', 0))

pdf_lines = [
    "# BỘ ĐỀ ÔN TẬP 100 CÂU TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG",
    "## NGUỒN: GDNT_DS CÂU HỎI ÔN TẬP.pdf (ĐÃ ĐỐI CHIẾU VÀ ĐỒNG BỘ ĐÁP ÁN)",
    f"- **Số lượng câu hỏi:** {len(pdf_questions)} câu",
    "- **Đáp án đã được xáo trộn tự nhiên, triệt tiêu bẫy auto chọn A**",
    "",
    "---",
    ""
]

for q in pdf_questions:
    pdf_lines.append(f"### Câu {q['pdf_no']} *(Mã hệ thống: ID {q['id']})*")
    pdf_lines.append(f"**Câu hỏi:** {q['question']}\n")
    for letter in ['A', 'B', 'C', 'D']:
        pdf_lines.append(f"- **{letter}.** {q['options'][letter]}")
    pdf_lines.append(f"\n👉 **Đáp án đúng:** **[{q['answer']}] - {q['options'][q['answer']]}**")
    pdf_lines.append(f"💡 **Giải thích:** {q['explanation']}\n")
    pdf_lines.append("---\n")

with open(PDF_MD_PATH, 'w', encoding='utf-8') as f:
    f.write("\n".join(pdf_lines))
print(f"[+] Đã cập nhật thành công {PDF_MD_PATH}")

print("\n[+] HOÀN TẤT ĐẢO THỨ TỰ PHƯƠNG ÁN 100% THÀNH CÔNG!")
