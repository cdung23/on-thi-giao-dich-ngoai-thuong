import sys
import os
import json
import re

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

workspace = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương"
solved_data_path = os.path.join(workspace, "questions_data.js")

# 1. Load current 300 questions from questions_data.js
with open(solved_data_path, "r", encoding="utf-8") as f:
    js_content = f.read()

json_str = js_content[js_content.find("["):js_content.rfind("]")+1]
questions = json.loads(json_str)
assert len(questions) == 300, f"Expected 300 questions, got {len(questions)}"

# 2. Define the 3 new questions
q301 = {
    "id": 301,
    "orig_no": "301",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty Nhập khẩu A chuẩn bị ký hợp đồng mua 10.000 tấn thép nguyên liệu từ một tập đoàn đa quốc gia. Khi nghiên cứu thị trường để làm căn cứ đàm phán, Giám đốc Kinh doanh thu thập được 4 báo giá khác nhau. Mức giá nào đáp ứng đầy đủ nhất bản chất và thuộc tính của \"Giá quốc tế\" theo quy chuẩn ngoại thương:",
    "options": {
        "A": "Mức giá 1: Mức giá ưu đãi do đối tác giảm 15% vì hai bên có thỏa thuận tài trợ vốn vay ưu đãi dài hạn.",
        "B": "Mức giá 2: Mức giá giao dịch thông thường niêm yết trên Sàn Giao dịch Hàng hóa Quốc tế, thanh toán bằng Đồng Nhân dân tệ (thỏa thuận thanh toán nội bộ giữa 2 nước).",
        "C": "Mức giá 3: Mức giá chào trên thị trường quốc tế đối với các giao dịch mua bán thông thường, không kèm theo bất kỳ điều kiện ràng buộc đặc biệt nào và thanh toán bằng Đồng Đô la Mỹ (USD).",
        "D": "Mức giá 4: Mức giá xả hàng tồn kho thanh lý khẩn cấp do một nhà máy tại Châu Âu phá sản."
    },
    "answer": "C",
    "explanation": "Theo giáo trình Giao dịch Ngoại thương, một mức giá được coi là 'Giá quốc tế' khi thỏa mãn đầy đủ 3 thuộc tính cơ bản: (1) Tính chất thương mại thông thường, công khai, phổ biến trên thị trường tự do, không kèm theo các điều kiện ưu đãi hay ràng buộc cá biệt (như tài trợ tín dụng ở Mức giá 1 hoặc xả hàng thanh lý phá sản ở Mức giá 4); (2) Được thanh toán bằng đồng tiền tự do chuyển đổi mạnh (Freely Convertible Currency như USD, EUR...) chứ không phải đồng tiền thanh toán nội bộ hay bù trừ song phương (như Mức giá 2); (3) Đại diện cho khối lượng giao dịch mua bán lớn trên thị trường thế giới. Do đó, Mức giá 3 là phương án đáp ứng trọn vẹn nhất định nghĩa và thuộc tính của Giá quốc tế."
}

q302 = {
    "id": 302,
    "orig_no": "302",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Thông tin nào sau đây về đối tượng tham gia KHÔNG xuất hiện trực tiếp trên đơn mở L/C?",
    "options": {
        "A": "Tên ngân hàng thông báo",
        "B": "Tên và địa chỉ của người thụ hưởng",
        "C": "Tên và địa chỉ của người xin mở L/C",
        "D": "Tên và địa chỉ của hãng vận tải/chủ tàu"
    },
    "answer": "D",
    "explanation": "Trên Đơn yêu cầu mở L/C (Application for Opening Documentary Credit) gửi đến Ngân hàng phát hành (Issuing Bank), các chủ thể tham gia trực tiếp trong quan hệ thanh toán tín dụng chứng từ bắt buộc phải được kê khai gồm: Người yêu cầu mở L/C (Applicant - Bên mua), Người thụ hưởng (Beneficiary - Bên bán) và Ngân hàng thông báo (Advising Bank). Còn hãng vận tải/chủ tàu (Carrier) là bên phát hành Vận đơn (B/L) trong hợp đồng vận chuyển, tên của hãng tàu xuất hiện trên B/L chứ không phải là chủ thể tham gia trực tiếp ghi tên/địa chỉ cố định trên đơn mở L/C (tại thời điểm mở L/C, người nhập khẩu chưa ký hợp đồng thuê tàu hoặc chỉ quy định yêu cầu về chứng từ vận tải)."
}

q303 = {
    "id": 303,
    "orig_no": "303",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty Nông sản K nhập khẩu một lô hạt giống cây trồng. Lô hàng thuộc diện phải kiểm tra dịch hại thực vật trước khi thông quan. Để tránh phát sinh chi phí lưu container/lưu bãi cao tại cảng, Công ty K muốn đưa toàn bộ lô hàng ra khỏi khu vực hải quan để đưa về kho riêng của công ty. Lô hàng của Công ty K chỉ đủ điều kiện đưa ra khỏi khu vực hải quan về kho riêng khi nào?",
    "options": {
        "A": "Doanh nghiệp tự viết đơn cam kết chịu trách nhiệm và chở hàng về kho bất kỳ lúc nào",
        "B": "Cơ quan Hải quan chấp nhận quyết định cho phép đưa hàng về bảo quản sau khi đã lấy mẫu kiểm tra dịch hại và doanh nghiệp đáp ứng đủ điều kiện niêm phong/giám sát hải quan",
        "C": "Ngay khi kiểm dịch viên hoàn thành việc lấy mẫu tại cảng mà không cần sự đồng ý của Cơ quan Hải quan",
        "D": "Doanh nghiệp chỉ cần thông báo bằng miệng cho cơ quan kiểm dịch và cơ quan hải quan tại cảng"
    },
    "answer": "B",
    "explanation": "Căn cứ Điều 32 Luật Hải quan 2014 và Điều 32 Thông tư 38/2015/TT-BTC (sửa đổi bởi Thông tư 39/2018/TT-BTC) về việc đưa hàng về bảo quản: Đối với hàng hóa phải kiểm tra chuyên ngành (kiểm dịch thực vật), người khai hải quan chỉ được đưa hàng về địa điểm bảo quản (kho riêng) khi cơ quan hải quan chấp thuận bằng văn bản/quyết định phê duyệt trên hệ thống sau khi đã thực hiện lấy mẫu kiểm dịch và địa điểm bảo quản đáp ứng yêu cầu giám sát, niêm phong hải quan. Doanh nghiệp tuyệt đối không được tự ý đưa hàng ra khỏi cảng khi chưa có sự chấp thuận của cơ quan hải quan."
}

# Add new questions to total
all_questions = questions + [q301, q302, q303]
print(f"Total questions after addition: {len(all_questions)}")

# 3. Load PDF questions and map to IDs
with open(os.path.join(workspace, "extracted_pdf_raw.txt"), "r", encoding="utf-8") as f:
    raw_text = f.read()

cleaned_lines = [l.strip() for l in raw_text.splitlines() if not re.match(r"^---\s*TRANG\s+\d+\s*---$", l.strip())]
full_content = "\n".join(cleaned_lines)
splits = re.split(r"(?:^|\n)(Câu\s+\d+[\.:])\s*", full_content)

def normalize_text(text):
    if not text:
        return ""
    text = text.lower()
    text = re.sub(r"[^\w\s]", "", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

pdf_questions = []
idx = 1
while idx < len(splits):
    q_header = splits[idx].strip()
    q_body = splits[idx+1].strip() if idx + 1 < len(splits) else ""
    idx += 2
    num_match = re.search(r"\d+", q_header)
    q_num = int(num_match.group(0)) if num_match else len(pdf_questions) + 1
    
    opt_splits = re.split(r"(?:^|\n)([A-D]\.\s*)", q_body)
    q_text = opt_splits[0].strip().replace("\n", " ")
    
    options = {}
    opt_idx = 1
    while opt_idx < len(opt_splits):
        letter = opt_splits[opt_idx].strip()[0]
        val = opt_splits[opt_idx+1].strip().replace("\n", " ") if opt_idx + 1 < len(opt_splits) else ""
        options[letter] = val
        opt_idx += 2
        
    pdf_questions.append({
        "pdf_id": q_num,
        "question": q_text,
        "options": options
    })

print(f"Loaded {len(pdf_questions)} questions from PDF.")

# Map PDF questions to all_questions IDs
# Special new ones:
# PDF Q91 -> 302
# PDF Q92 -> 303
# PDF Q100 -> 301
pdf_to_app_map = {}
app_to_pdf_map = {}

# Pre-map manual new questions
pdf_to_app_map[91] = 302
app_to_pdf_map[302] = 91

pdf_to_app_map[92] = 303
app_to_pdf_map[303] = 92

pdf_to_app_map[100] = 301
app_to_pdf_map[301] = 100

for pq in pdf_questions:
    p_num = pq["pdf_id"]
    if p_num in pdf_to_app_map:
        continue
    pn_q = normalize_text(pq["question"])
    matched = None
    for aq in all_questions:
        an_q = normalize_text(aq["question"])
        if pn_q == an_q or (len(pn_q) > 30 and pn_q[:40] in an_q) or (len(an_q) > 30 and an_q[:40] in pn_q):
            matched = aq
            break
    if matched:
        pdf_to_app_map[p_num] = matched["id"]
        app_to_pdf_map[matched["id"]] = p_num
    else:
        print(f"Warning: PDF Q{p_num} not mapped!")

print(f"Total mapped PDF questions: {len(pdf_to_app_map)} / {len(pdf_questions)}")

# Add 'pdf_no' to all_questions
for q in all_questions:
    q_id = q["id"]
    if q_id in app_to_pdf_map:
        q["pdf_no"] = app_to_pdf_map[q_id]
    else:
        q["pdf_no"] = None

# Create PDF ordered list of question IDs for the 100-question exam mode
pdf_order = [pdf_to_app_map[p["pdf_id"]] for p in pdf_questions]

# 4. Write updated questions_data.js
output_js = f"""/**
 * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020
 * Bộ môn: Giao dịch Ngoại thương - ĐH Ngoại thương / Khối ngành Kinh tế Quốc tế
 * Tổng số câu hỏi: {len(all_questions)} câu hỏi chuẩn hóa (Bao gồm 300 câu ngân hàng gốc + 3 câu bổ sung từ Đề thi PDF)
 * Tích hợp bộ đề 100 câu trích từ: GDNT_DS CÂU HỎI ÔN TẬP.pdf
 */

const QUESTIONS_DATA = {json.dumps(all_questions, ensure_ascii=False, indent=2)};

/**
 * Danh sách ID câu hỏi tương ứng theo đúng thứ tự 1 -> 100 trong file GDNT_DS CÂU HỎI ÔN TẬP.pdf
 */
const PDF_EXAM_QUESTION_IDS = {json.dumps(pdf_order)};
"""

with open(solved_data_path, "w", encoding="utf-8") as f:
    f.write(output_js)

print(f"Successfully updated {solved_data_path} with {len(all_questions)} questions!")
print(f"PDF exam order contains {len(pdf_order)} questions.")
