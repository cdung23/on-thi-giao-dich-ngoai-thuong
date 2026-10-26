import json
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Đường dẫn các file
base_dir = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương"

ch_files = [
    f"{base_dir}\\ch1_solved.json",
    f"{base_dir}\\ch2_solved.json",
    f"{base_dir}\\ch3_solved.json",
    f"{base_dir}\\ch4_solved.json",
    f"{base_dir}\\ch5_solved.json"
]

all_questions = []

for idx, fpath in enumerate(ch_files, 1):
    with open(fpath, "r", encoding="utf-8") as f:
        data = json.load(f)
        print(f"Chương {idx}: {len(data)} câu hỏi")
        all_questions.extend(data)

print(f"Tổng cộng: {len(all_questions)} câu hỏi")

# Kiểm tra tính toàn vẹn (Integrity check)
assert len(all_questions) == 300, f"Mong đợi 300 câu hỏi, nhưng có {len(all_questions)}"

for i, q in enumerate(all_questions, 1):
    assert q["id"] == i, f"Câu hỏi vị trí {i} có id={q['id']}"
    assert q["answer"] in ["A", "B", "C", "D"], f"Câu {i} có đáp án không hợp lệ: {q['answer']}"
    assert len(q["explanation"].strip()) > 10, f"Câu {i} giải thích quá ngắn"
    for opt in ["A", "B", "C", "D"]:
        assert opt in q["options"] and len(q["options"][opt].strip()) > 0, f"Câu {i} thiếu phương án {opt}"

print("Kiểm tra toàn vẹn dữ liệu: HOÀN HẢO 300/300 CÂU!")

# 1. Ghi questions_data.js
js_content = "/**\n * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020\n"
js_content += " * Bộ môn: Giao dịch Ngoại thương - ĐH Ngoại thương / Khối ngành Kinh tế Quốc tế\n"
js_content += f" * Tổng số câu hỏi: {len(all_questions)} câu hỏi chuẩn hóa\n"
js_content += " */\n\n"
js_content += "const QUESTIONS_DATA = " + json.dumps(all_questions, ensure_ascii=False, indent=2) + ";\n"

with open(f"{base_dir}\\questions_data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Đã xuất thành công: {base_dir}\\questions_data.js")

# 2. Ghi Trắc nghiệm - Đáp án và Giải thích.md
md_content = """# TÀI LIỆU ÔN TẬP VÀ ĐÁP ÁN CHI TIẾT: GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020

> **Bộ môn:** Giao dịch Thương mại Quốc tế / Giao dịch Ngoại thương  
> **Cơ sở pháp lý & Chuẩn tắc quốc tế:**  
> - Quy tắc Incoterms® 2020 (ICC Publication No. 723)  
> - Công ước Viên 1980 về Hợp đồng Mua bán Hàng hóa Quốc tế (CISG 1980)  
> - Quy tắc Thực hành Thống nhất về Tín dụng Chứng từ (UCP 600 - ICC Pub. 600)  
> - Luật Thương mại Việt Nam năm 2005 & Bộ luật Hàng hải Việt Nam  
> **Tổng quy mô:** 300 câu hỏi trắc nghiệm kèm đáp án và phân tích học thuật chuyên sâu.

---

"""

current_chapter = ""
for q in all_questions:
    if q.get("chapter") != current_chapter:
        current_chapter = q.get("chapter", "Tổng hợp")
        md_content += f"\n## {current_chapter}\n\n"
    
    md_content += f"### Câu {q['id']} (Gốc: Câu {q.get('orig_no', q['id'])})\n\n"
    md_content += f"**Câu hỏi:** {q['question']}\n\n"
    for opt_key in ["A", "B", "C", "D"]:
        opt_text = q["options"].get(opt_key, "")
        if opt_key == q["answer"]:
            md_content += f"- **{opt_key}. {opt_text}** *(Đáp án đúng)*\n"
        else:
            md_content += f"- {opt_key}. {opt_text}\n"
    md_content += f"\n- **Đáp án chính xác:** `{q['answer']}`\n"
    md_content += f"- **Phân tích giảng viên / Căn cứ pháp lý:** {q['explanation']}\n\n"
    md_content += "---\n\n"

with open(f"{base_dir}\\Trắc nghiệm - Đáp án và Giải thích.md", "w", encoding="utf-8") as f:
    f.write(md_content)

print(f"Đã xuất thành công: {base_dir}\\Trắc nghiệm - Đáp án và Giải thích.md")
