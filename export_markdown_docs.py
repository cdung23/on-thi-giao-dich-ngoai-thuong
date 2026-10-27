import os
import sys
import re
import json

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

workspace = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương"
js_path = os.path.join(workspace, "questions_data.js")
md_all_path = os.path.join(workspace, "Trắc nghiệm - Đáp án và Giải thích.md")
md_pdf_path = os.path.join(workspace, "GDNT_DAP_AN_DE_ON_TAP_100_CAU_PDF.md")

with open(js_path, "r", encoding="utf-8") as f:
    text = f.read()

m = re.search(r'const\s+QUESTIONS_DATA\s*=\s*(\[[\s\S]*?\n\]);', text)
questions = json.loads(m.group(1))

# Đếm phân bố
counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
for q in questions:
    counts[q['answer']] += 1
total = len(questions)

# 1. Xuất Trắc nghiệm - Đáp án và Giải thích.md
md_lines = [
    "# NGÂN HÀNG CÂU HỎI VÀ ĐÁP ÁN TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020",
    "## BỘ TÀI LIỆU ÔN THI KẾT THÚC HỌC PHẦN (CHUẨN HÓA 303 CÂU - ĐÃ ĐẢO ĐÁP ÁN ĐỒNG ĐỀU & RÀ SOÁT 100%)",
    f"- **Tổng số câu hỏi:** {total} câu hỏi chính quy (Gồm 300 câu ngân hàng gốc + 3 câu bổ sung từ Đề thi PDF)",
    f"- **Phân bố tỷ lệ đáp án:** A: {counts['A']} câu ({counts['A']/total*100:.1f}%) | B: {counts['B']} câu ({counts['B']/total*100:.1f}%) | C: {counts['C']} câu ({counts['C']/total*100:.1f}%) | D: {counts['D']} câu ({counts['D']/total*100:.1f}%)",
    "- **Tài liệu tham chiếu gốc:** Giáo trình giao dịch thương mại quốc tế (PGS.TS Phạm Duy Liên, ĐH Ngoại thương) & Incoterms 2020 (ICC).",
    "",
    "---",
    ""
]

curr_ch = ""
for q in questions:
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
    md_lines.append(f"💡 **Căn cứ & Giải thích từ Giáo trình:** {q['explanation']}\n")
    md_lines.append("---\n")

with open(md_all_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(md_lines))
print(f"[+] Đã cập nhật thành công {md_all_path}")

# 2. Xuất GDNT_DAP_AN_DE_ON_TAP_100_CAU_PDF.md
pdf_questions = [q for q in questions if q.get('pdf_no')]
pdf_questions.sort(key=lambda x: x.get('pdf_no', 0))

pdf_lines = [
    "# BỘ ĐỀ ÔN TẬP 100 CÂU TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG",
    "## NGUỒN: GDNT_DS CÂU HỎI ÔN TẬP.pdf (ĐÃ ĐỐI CHIẾU VÀ ĐỒNG BỘ ĐÁP ÁN VỚI GIÁO TRÌNH)",
    f"- **Số lượng câu hỏi:** {len(pdf_questions)} câu",
    "- **Đáp án đã được xáo trộn tự nhiên, triệt tiêu bẫy auto chọn A**",
    "- **Trích xuất căn cứ trực tiếp từ Giáo trình PGS.TS Phạm Duy Liên và Incoterms 2020**",
    "",
    "---",
    ""
]

for q in pdf_questions:
    pdf_lines.append(f"### Câu {q['pdf_no']} (Mã hệ thống: Câu {q['id']})")
    pdf_lines.append(f"**Phân loại:** `{q.get('chapter', 'Chương chung')}`\n")
    pdf_lines.append(f"**Câu hỏi:** {q['question']}\n")
    for letter in ['A', 'B', 'C', 'D']:
        pdf_lines.append(f"- **{letter}.** {q['options'][letter]}")
    pdf_lines.append(f"\n👉 **Đáp án đúng:** **[{q['answer']}] - {q['options'][q['answer']]}**")
    pdf_lines.append(f"💡 **Căn cứ & Phân tích chuyên môn:** {q['explanation']}\n")
    pdf_lines.append("---\n")

with open(md_pdf_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(pdf_lines))
print(f"[+] Đã cập nhật thành công {md_pdf_path}")
