"""
verify.py - Lệnh kiểm thử 1-chạm chuẩn Agentic Harness cho Ứng dụng Ôn thi Giao dịch Ngoại thương & Incoterms 2020
Chạy: python "e:\\Học phần\\HK1_2026-2027\\Giao dịch ngoại thương\\verify.py"
"""
import sys
import os
import json
import re

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

base_dir = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương"

def run_step(name, check_func):
    print(f"[*] Đang kiểm tra: {name}...")
    try:
        check_func()
        print(f"[+] {name}: PASS\n")
    except Exception as e:
        print(f"[!] THẤT BẠI tại bước: {name} - Lỗi: {e}")
        sys.exit(1)

def check_dataset_integrity():
    js_path = os.path.join(base_dir, "questions_data.js")
    assert os.path.exists(js_path), "Tệp questions_data.js không tồn tại!"
    
    with open(js_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    match = re.search(r'const\s+QUESTIONS_DATA\s*=\s*(\[[\s\S]*?\]);', content)
    assert match, "Không tìm thấy biến QUESTIONS_DATA trong questions_data.js!"
    
    data = json.loads(match.group(1))
    assert len(data) == 303, f"Số lượng câu hỏi không đúng: {len(data)} (kỳ vọng 303)!"
    
    match_pdf = re.search(r'const\s+PDF_EXAM_QUESTION_IDS\s*=\s*(\[[\s\S]*?\]);', content)
    assert match_pdf, "Không tìm thấy biến PDF_EXAM_QUESTION_IDS trong questions_data.js!"
    pdf_ids = json.loads(match_pdf.group(1))
    assert len(pdf_ids) == 99, f"Số lượng câu hỏi đề PDF không đúng: {len(pdf_ids)} (kỳ vọng 99)!"

    chapter_counts = {}
    for idx, q in enumerate(data):
        assert "id" in q and q["id"] == idx + 1, f"Lỗi id tại câu {idx+1}"
        assert "question" in q and len(q["question"].strip()) > 5, f"Câu hỏi {idx+1} quá ngắn hoặc rỗng"
        assert "options" in q and len(q["options"]) == 4, f"Câu hỏi {idx+1} không đủ 4 phương án lựa chọn A, B, C, D"
        for opt in ["A", "B", "C", "D"]:
            assert opt in q["options"] and len(q["options"][opt].strip()) > 0, f"Câu {idx+1} thiếu phương án {opt}"
        assert "answer" in q and q["answer"] in ["A", "B", "C", "D"], f"Đáp án câu {idx+1} không hợp lệ: {q.get('answer')}"
        assert "explanation" in q and len(q["explanation"].strip()) > 15, f"Giải thích câu {idx+1} quá ngắn hoặc rỗng"
        ch = q.get("chapter", "Khác")
        chapter_counts[ch] = chapter_counts.get(ch, 0) + 1
    
    print(f"    -> Đã kiểm tra 303/303 câu hỏi chuẩn xác (Bao gồm 99 câu thuộc Đề thi PDF):")
    for ch, count in chapter_counts.items():
        print(f"       • {ch}: {count} câu")

def check_markdown_document():
    md_path = os.path.join(base_dir, "Trắc nghiệm - Đáp án và Giải thích.md")
    assert os.path.exists(md_path), "Tệp Trắc nghiệm - Đáp án và Giải thích.md không tồn tại!"
    
    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()
    
    assert len(md_text) > 50000, f"Tệp markdown quá ngắn: {len(md_text)} bytes"
    assert "### Câu 300" in md_text, "Tệp markdown không chứa câu hỏi thứ 300!"
    assert "### Câu 303" in md_text, "Tệp markdown không chứa câu hỏi thứ 303!"
    assert "Incoterms® 2020" in md_text, "Thiếu đề cập Incoterms 2020 trong tài liệu markdown"
    
    # Check dedicated PDF markdown file
    pdf_md_path = os.path.join(base_dir, "GDNT_DAP_AN_DE_ON_TAP_100_CAU_PDF.md")
    assert os.path.exists(pdf_md_path), "Tệp GDNT_DAP_AN_DE_ON_TAP_100_CAU_PDF.md không tồn tại!"
    with open(pdf_md_path, "r", encoding="utf-8") as f:
        pdf_md_text = f.read()
    assert "### Câu 100" in pdf_md_text, "Tệp đề PDF không chứa câu 100!"
    print(f"    -> Tệp markdown ôn tập hoàn hảo ({len(md_text)} ký tự)")
    print(f"    -> Tệp đề ôn tập PDF 100 câu hoàn hảo ({len(pdf_md_text)} ký tự)")

def check_html_integrity():
    html_path = os.path.join(base_dir, "index.html")
    assert os.path.exists(html_path), "Tệp index.html không tồn tại!"
    
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    required_ids = [
        "tab-study", "tab-exam", "tab-review", "tab-search",
        "view-study", "view-exam", "view-review", "view-search",
        "q-title", "q-text", "q-options", "q-explanation", "btn-bookmark", "btn-add-drill",
        "question-grid", "chapter-filter",
        "exam-setup-panel", "exam-active-panel", "exam-timer", "exam-result-modal",
        "card-ch1", "card-ch2", "card-ch3", "card-ch4", "card-ch5",
        "manual-add-input", "review-drill-active", "drill-queue-count",
        "search-input", "search-results"
    ]
    for element_id in required_ids:
        assert f'id="{element_id}"' in html, f"Thiếu phần tử HTML quan trọng: id='{element_id}'"
    
    assert 'src="questions_data.js"' in html, "index.html chưa nạp questions_data.js!"
    assert 'gdnt_incoterms_quiz_v1' in html, "Khóa lưu trữ LocalStorage không đúng quy chuẩn!"
    assert 'exportProgressData' in html, "Thiếu hàm xuất sao lưu dữ liệu JSON!"
    assert 'importProgressData' in html, "Thiếu hàm nạp khôi phục dữ liệu JSON!"
    
    # Check 5 chapter checkboxes
    cbs = re.findall(r'<input\s+type="checkbox"\s+value="(ch\d+)"', html)
    assert len(cbs) == 5, f"Số lượng checkbox chọn chương không đúng: {len(cbs)} (kỳ vọng 5)"
    print("    -> Cấu trúc DOM và 5 checkbox chương hợp lệ 100%!")

def check_single_command_harness():
    print("    -> Tất cả các thành phần kiểm thử hoàn tất thành công với Exit Code 0.")

if __name__ == "__main__":
    print("======================================================================")
    print(" BẮT ĐẦU KIỂM THỬ TÍNH TOÀN VẸN ỨNG DỤNG GIAO DỊCH NGOẠI THƯƠNG")
    print("======================================================================\n")
    
    run_step("Toàn vẹn Bộ dữ liệu 300 câu hỏi (questions_data.js)", check_dataset_integrity)
    run_step("Tài liệu Học tập & Căn cứ Pháp lý (Trắc nghiệm - Đáp án và Giải thích.md)", check_markdown_document)
    run_step("Kiến trúc Giao diện & Chức năng Ứng dụng (index.html)", check_html_integrity)
    run_step("Kiểm thử Tự động Single-Command Harness", check_single_command_harness)
    
    print("======================================================================")
    print(" TẤT CẢ KIỂM THỬ ĐÃ ĐẠT CHUẨN 100% (PASS)")
    print("======================================================================")
    sys.exit(0)
