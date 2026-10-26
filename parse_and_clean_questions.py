import os
import sys
import re
import json
import docx

sys.stdout.reconfigure(encoding='utf-8')

DOCX_PATH = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\GDNT_ÔN TẬP.docx"
OUT_MD = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\Trắc nghiệm.md"
OUT_JSON = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\parsed_questions_raw.json"

doc = docx.Document(DOCX_PATH)
paragraphs = [p.text.strip() for p in doc.paragraphs if p.text.strip()]

# Chapter mapping by question number:
# Chương 1: 1 - 48
# Chương 2: 49 - 136
# Chương 3: 137 - 206
# Chương 4: 207 - 246
# Chương 5: 247 - 300
CHAPTER_TITLES = {
    1: "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    2: "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    3: "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    4: "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    5: "Chương 5: Thực hiện hợp đồng xuất nhập khẩu và giải quyết tranh chấp"
}

def get_chapter(q_num):
    if 1 <= q_num <= 48:
        return 1
    elif 49 <= q_num <= 136:
        return 2
    elif 137 <= q_num <= 206:
        return 3
    elif 207 <= q_num <= 246:
        return 4
    elif 247 <= q_num <= 300:
        return 5
    return 1

questions = []
current_q = None

for p in paragraphs:
    if re.match(r'^CHƯƠNG\s*\d+', p, re.IGNORECASE):
        continue
    
    q_match = re.match(r'^Câu\s*(\d+)[\.:]\s*(.*)', p, re.IGNORECASE)
    if q_match:
        if current_q:
            questions.append(current_q)
        q_num = int(q_match.group(1))
        q_text = q_match.group(2).strip()
        ch_idx = get_chapter(q_num)
        current_q = {
            "id": q_num,
            "orig_no": str(q_num),
            "chapter_id": ch_idx,
            "chapter": CHAPTER_TITLES[ch_idx],
            "question": q_text,
            "options": {}
        }
        continue
    
    # Check options: A) or A.
    opt_match = re.match(r'^([A-D])[\)\.]\s*(.*)', p)
    if opt_match and current_q:
        opt_key = opt_match.group(1).upper()
        opt_val = opt_match.group(2).strip()
        current_q["options"][opt_key] = opt_val
        continue
    
    # If no option match but inside question, maybe question text wraps or option wraps
    if current_q:
        if not current_q["options"]:
            current_q["question"] += " " + p
        else:
            # Append to last option
            last_opt = list(current_q["options"].keys())[-1]
            current_q["options"][last_opt] += " " + p

if current_q:
    questions.append(current_q)

print(f"Total parsed questions: {len(questions)}")

# Verify each question has 4 options
missing_opts = []
for q in questions:
    if len(q["options"]) != 4:
        missing_opts.append((q["id"], list(q["options"].keys())))

print(f"Questions without exactly 4 options: {len(missing_opts)}")
if missing_opts:
    for item in missing_opts[:10]:
        print("  Q:", item)

with open(OUT_JSON, "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

# Write formatted Trắc nghiệm.md
with open(OUT_MD, "w", encoding="utf-8") as f:
    f.write("# TỔNG HỢP 300 CÂU HỎI TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020\n\n")
    cur_ch = None
    for q in questions:
        if q["chapter_id"] != cur_ch:
            cur_ch = q["chapter_id"]
            f.write(f"\n## {CHAPTER_TITLES[cur_ch]}\n\n")
        f.write(f"### Câu {q['id']}. {q['question']}\n\n")
        for opt_k in ["A", "B", "C", "D"]:
            if opt_k in q["options"]:
                f.write(f"- {opt_k}. {q['options'][opt_k]}\n")
        f.write("\n")

print(f"Saved {OUT_MD} and {OUT_JSON} successfully!")
