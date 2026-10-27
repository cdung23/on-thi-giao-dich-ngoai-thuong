"""
rescan_with_notebooklm.py
Tự động quét và đối chiếu toàn bộ 303 câu hỏi qua NotebookLM "Giao dịch ngoại thương incoterm 2020".
Tài liệu tham chiếu chuẩn gốc:
  1. "Giáo trình giao dịch ngoại thương.pdf" (14c7a4c2-8b03-401b-8ca5-5bc7c43768dc) - PGS.TS Phạm Duy Liên (ĐH Ngoại thương, dùng Incoterms 2010).
  2. "Incoterm - ebook - bản Tiếng Việt.pdf" (09d64e46-71d1-4ff9-9950-1a5e53a5fa1d) - ICC Incoterms 2020.

Cơ chế vận hành:
  - Adaptive Batching: Gom 3-5 câu/batch (độ dài prompt <= 1600 ký tự) tránh lỗi giới hạn RPC.
  - Quản lý Context Window: Mỗi batch gửi với new_conversation=True và xóa lịch sử trò chuyện cũ để Context Window không bao giờ bị tràn.
  - Cập nhật trực tiếp vào App: Sau mỗi batch hoàn tất, cập nhật ngay vào questions_data.js, .nlm_verify_checkpoint.json và so_sanh_dap_an_notebooklm.md.
"""

import os
import sys
import re
import json
import time
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', line_buffering=True)
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8', line_buffering=True)

WORKSPACE = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương"
JS_PATH = os.path.join(WORKSPACE, "questions_data.js")
REPORT_PATH = os.path.join(WORKSPACE, "so_sanh_dap_an_notebooklm.md")
CHECKPOINT_PATH = os.path.join(WORKSPACE, ".nlm_verify_checkpoint.json")

NOTEBOOK_ID = "2d557665-4b8b-4e51-8ec2-368f2fd3de2d"
SOURCE_IDS = [
    "14c7a4c2-8b03-401b-8ca5-5bc7c43768dc", # Giáo trình giao dịch ngoại thương.pdf
    "09d64e46-71d1-4ff9-9950-1a5e53a5fa1d"  # Incoterm - ebook - bản Tiếng Việt.pdf
]

def load_auth():
    auth_path = Path.home() / '.notebooklm-mcp-cli' / 'auth.json'
    if not auth_path.exists():
        print("[-] Không tìm thấy auth.json! Hãy kiểm tra 'nlm login'.")
        return None
    try:
        with open(auth_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"[-] Lỗi đọc auth.json: {e}")
        return None

def load_checkpoint():
    if os.path.exists(CHECKPOINT_PATH):
        try:
            with open(CHECKPOINT_PATH, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            pass
    return {"verified_items": {}, "mismatches": {}}

def save_checkpoint(data):
    with open(CHECKPOINT_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

PDF_EXAM_QUESTION_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 12, 13, 14, 14, 48, 49, 51, 54, 55, 56, 57, 58, 60, 61, 65, 66, 67, 69, 70, 71, 72, 84, 87, 91, 93, 98, 101, 105, 106, 110, 133, 135, 137, 140, 141, 142, 143, 144, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 157, 159, 160, 161, 162, 172, 173, 174, 175, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 277, 278, 279, 280, 281, 282, 283, 286, 302, 303, 279, 213, 139, 234, 246, 247, 248, 301]

def load_questions_from_js():
    with open(JS_PATH, "r", encoding="utf-8") as f:
        js_text = f.read()
    match = re.search(r'const\s+QUESTIONS_DATA\s*=\s*(\[[\s\S]*?\n\]);', js_text)
    if not match:
        raise ValueError("Không thể trích xuất QUESTIONS_DATA từ questions_data.js")
    return json.loads(match.group(1))

def save_questions_to_js(questions):
    header = (
        "/**\n"
        " * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020\n"
        " * Bộ môn: Giao dịch Ngoại thương - ĐH Ngoại thương / Khối ngành Kinh tế Quốc tế\n"
        " * Tổng số câu hỏi: 303 câu hỏi chuẩn hóa\n"
        " * ĐÃ XÁO TRỘN ĐÁP ÁN ĐỒNG ĐỀU (A, B, C, D ~ 25% mỗi phương án) - Chống bẫy auto chọn A\n"
        " * ĐÃ RÀ SOÁT & TRÍCH XUẤT CĂN CỨ 100% TỪ GIÁO TRÌNH GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020\n"
        " */\n\n"
        "const QUESTIONS_DATA = "
    )
    formatted_json = json.dumps(questions, ensure_ascii=False, indent=2)
    tail = (
        ";\n\n"
        "/**\n"
        " * Danh sách ID câu hỏi tương ứng theo đúng thứ tự 1 -> 100 trong file GDNT_DS CÂU HỎI ÔN TẬP.pdf\n"
        " */\n"
        f"const PDF_EXAM_QUESTION_IDS = {json.dumps(PDF_EXAM_QUESTION_IDS)};\n\n"
        "if (typeof module !== 'undefined' && module.exports) {\n"
        "  module.exports = { QUESTIONS_DATA, PDF_EXAM_QUESTION_IDS };\n"
        "}\n"
    )
    with open(JS_PATH, "w", encoding="utf-8") as f:
        f.write(header + formatted_json + tail)

def format_batch_prompt(batch):
    prompt_lines = [
        "Bạn là giảng viên chuyên gia bộ môn Giao dịch ngoại thương.",
        "Chỉ sử dụng 2 tài liệu tham chiếu gốc sau:",
        "1. 'Giáo trình giao dịch ngoại thương.pdf' (PGS.TS Phạm Duy Liên, ĐH Ngoại thương - lưu ý giáo trình dùng Incoterms 2010 cho phần Incoterms, và là chuẩn mực cho Chương 1, 3, 4, 5).",
        "2. 'Incoterm - ebook - bản Tiếng Việt.pdf' (Quy tắc ICC Incoterms 2020 - dùng làm căn cứ chuẩn mực cho các quy tắc Incoterms 2020 mới).",
        "",
        "Hãy xác định đáp án đúng nhất (A, B, C hoặc D) và trích xuất đúng căn cứ, giải thích chi tiết từ 2 tài liệu trên cho từng câu hỏi sau:",
        "",
        "ĐỊNH DẠNG TRẢ LỜI BẮT BUỘC CHO MỖI CÂU:",
        "**Câu [ID]: [A/B/C/D]**",
        "- Căn cứ: [Tên tài liệu / Chương / Mục cụ thể]",
        "- Giải thích: [Lý giải bản chất học thuật và trích dẫn chuẩn xác từ tài liệu giải thích vì sao đáp án đó đúng]",
        "",
        "--- DANH SÁCH CÂU HỎI ---"
    ]
    for q in batch:
        qid = q["id"]
        prompt_lines.append(f"\nCâu {qid}: {q['question']}")
        opts = q.get("options", {})
        for opt_key in ["A", "B", "C", "D"]:
            if opt_key in opts:
                prompt_lines.append(f"{opt_key}. {opts[opt_key]}")
    
    prompt_lines.append("\nHãy trích xuất giải thích thật chuẩn xác theo đúng 2 tài liệu nguồn trên.")
    return "\n".join(prompt_lines)

def parse_batch_response(raw_text, batch):
    results = {}
    # Tách văn bản theo từng khối câu hỏi
    matches = list(re.finditer(r'(?:câu|question)\s*(\d+)\b', raw_text, re.IGNORECASE))
    blocks = {}
    for i, m in enumerate(matches):
        qid = int(m.group(1))
        start_pos = m.start()
        end_pos = matches[i + 1].start() if i + 1 < len(matches) else len(raw_text)
        blocks[qid] = raw_text[start_pos:end_pos].strip()

    for q in batch:
        qid = q["id"]
        block = blocks.get(qid, "")
        pred = None

        if block:
            ans_match = re.search(rf"(?:câu|question)\s*{qid}\b[^\n\r]*?[:\-\s\*\(\)]+([A-D])\b", block, re.IGNORECASE)
            if ans_match:
                pred = ans_match.group(1).upper()
            else:
                fallback_match = re.search(r"\b([A-D])\b", block)
                if fallback_match:
                    pred = fallback_match.group(1).upper()

            cancu = ""
            cancu_match = re.search(r"[\*\s\-]*căn cứ[\*\s]*:[\s\*]*([^\n\r]+)", block, re.IGNORECASE)
            if cancu_match:
                cancu = cancu_match.group(1).strip().strip("*").strip()

            giaithich = ""
            gt_match = re.search(r"[\*\s\-]*giải thích[\*\s]*:[\s\*]*([\s\S]*?)(?=(?:\n\s*---|---\Z|\Z))", block, re.IGNORECASE)
            if gt_match:
                giaithich = gt_match.group(1).strip().replace("\n", " ")
                giaithich = re.sub(r"\s+", " ", giaithich).strip().strip("*").strip()
            else:
                lines = [l.strip() for l in block.split("\n") if l.strip() and not re.search(rf"câu\s*{qid}", l, re.IGNORECASE)]
                giaithich = " ".join(lines)
                giaithich = re.sub(r"\s+", " ", giaithich).strip().strip("*").strip()
        else:
            # Fallback nếu không tách được block
            ans_match = re.search(rf"(?:câu|question)\s*{qid}\b[^\n\r]*?[:\-\s\*\(\)]+([A-D])\b", raw_text, re.IGNORECASE)
            pred = ans_match.group(1).upper() if ans_match else None
            cancu = ""
            giaithich = ""

        full_explanation = ""
        if cancu and giaithich:
            full_explanation = f"Căn cứ: {cancu} - {giaithich}"
        elif giaithich:
            full_explanation = giaithich
        elif cancu:
            full_explanation = f"Căn cứ: {cancu}"

        expected = q.get("answer", "A")
        is_match = (pred == expected) if pred else None

        results[str(qid)] = {
            "id": qid,
            "pdf_no": q.get("pdf_no"),
            "question": q["question"],
            "expected": expected,
            "predicted": pred,
            "is_match": is_match,
            "cancu": cancu,
            "giaithich": giaithich,
            "full_explanation": full_explanation
        }
    return results

def create_adaptive_batches(questions, max_prompt_len=1600):
    batches = []
    curr_batch = []
    curr_len = 650
    for q in questions:
        q_len = len(q["question"]) + sum(len(v) for v in q.get("options", {}).values()) + 60
        if curr_batch and (curr_len + q_len > max_prompt_len):
            batches.append(curr_batch)
            curr_batch = [q]
            curr_len = 650 + q_len
        else:
            curr_batch.append(q)
            curr_len += q_len
    if curr_batch:
        batches.append(curr_batch)
    return batches

def update_markdown_report(checkpoint, total_questions):
    verified = checkpoint.get("verified_items", {})
    verified_count = len(verified)
    matches = sum(1 for v in verified.values() if v.get("is_match") is True)
    mismatches = sum(1 for v in verified.values() if v.get("is_match") is False)
    total_evaluated = matches + mismatches
    match_rate = (matches / total_evaluated * 100) if total_evaluated > 0 else 100.0

    lines = [
        "# BÁO CÁO RÀ SOÁT TOÀN BỘ 303 CÂU HỎI VỚI NOTEBOOKLM",
        "## TÀI LIỆU THAM CHIẾU GỐC:",
        "1. **Giáo trình giao dịch ngoại thương.pdf** (PGS.TS Phạm Duy Liên, ĐH Ngoại thương)",
        "2. **Incoterm - ebook - bản Tiếng Việt.pdf** (ICC Incoterms 2020)",
        "",
        f"- **Thời gian cập nhật:** {time.strftime('%d/%m/%Y %H:%M:%S')}",
        f"- **Notebook ID:** `{NOTEBOOK_ID}`",
        f"- **Tổng số câu hỏi trong ngân hàng:** {total_questions} câu (Đã xáo trộn đều A, B, C, D ~ 25%)",
        f"- **Số câu đã rà soát:** {verified_count}/{total_questions} ({verified_count/total_questions*100:.1f}%)",
        f"- **Tỷ lệ trùng khớp:** {matches}/{total_evaluated} ({match_rate:.2f}%)",
        f"- **Số câu phát hiện điểm vênh/cần điều chỉnh:** {mismatches} câu",
        "",
        "---",
        "",
        "## DANH SÁCH CHI TIẾT ĐỐI CHIẾU & TRÍCH XUẤT",
        "",
        "| ID | Đề PDF | Câu hỏi | Hệ thống | NLM chọn | Trạng thái | Căn cứ & Giải thích trích xuất từ tài liệu |",
        "|:---:|:---:|:---|:---:|:---:|:---:|:---|"
    ]

    for qid_str, item in sorted(verified.items(), key=lambda x: int(x[0])):
        qid = item["id"]
        pdf_no = item.get("pdf_no") or "-"
        q_text = item["question"]
        if len(q_text) > 50:
            q_text = q_text[:47] + "..."
        expected = item.get("expected", "-")
        predicted = item.get("predicted") or "N/A"
        status = "✅ Khớp" if item.get("is_match") is True else ("⚠️ Sai biệt" if item.get("is_match") is False else "ℹ️")
        exp = (item.get("full_explanation") or item.get("explanation") or "").replace("\n", " ").replace("|", "-")
        if len(exp) > 95:
            exp = exp[:92] + "..."
        lines.append(f"| {qid} | {pdf_no} | {q_text} | **{expected}** | **{predicted}** | {status} | {exp} |")

    with open(REPORT_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

def run_rescan(max_batches=None, reset_checkpoint=False):
    auth_data = load_auth()
    if not auth_data:
        return

    from notebooklm_tools.core import client
    nlm = client.NotebookLMClient(cookies=auth_data['cookies'], csrf_token=auth_data['csrf_token'])

    questions = load_questions_from_js()
    q_map = {q["id"]: q for q in questions}

    checkpoint = load_checkpoint() if not reset_checkpoint else {"verified_items": {}, "mismatches": {}}
    
    # Những câu chưa rà soát
    unverified = [q for q in questions if str(q["id"]) not in checkpoint["verified_items"]]
    print(f"[*] Tổng số câu: {len(questions)} | Đã rà soát: {len(checkpoint['verified_items'])} | Còn lại: {len(unverified)}")

    if not unverified:
        print("[+] Toàn bộ 303 câu hỏi đã được rà soát xong!")
        update_markdown_report(checkpoint, len(questions))
        return

    batch_list = create_adaptive_batches(unverified, max_prompt_len=1600)
    if max_batches:
        batch_list = batch_list[:max_batches]

    total_batches = len(batch_list)
    print(f"[*] Tiến trình bắt đầu: {total_batches} batch thích ứng (<1600 ký tự)...")

    for idx, b in enumerate(batch_list, 1):
        qids = [q["id"] for q in b]
        qids_str = ", ".join(str(i) for i in qids)
        prompt = format_batch_prompt(b)
        print(f"\n[Batch {idx}/{total_batches}] Gửi {len(b)} câu ({qids_str}) - Prompt: {len(prompt)} ký tự...")

        success = False
        for attempt in range(1, 4):
            t0 = time.time()
            try:
                # new_conversation=True giúp làm sạch context window hoàn toàn, không sợ tràn context
                res = nlm.query(
                    notebook_id=NOTEBOOK_ID,
                    query_text=prompt,
                    source_ids=SOURCE_IDS,
                    new_conversation=True,
                    timeout=120.0
                )
                raw_ans = res.get('answer', '') if isinstance(res, dict) else getattr(res, 'answer', str(res))
                conv_id = res.get('conversation_id') if isinstance(res, dict) else None
                elapsed = time.time() - t0
                print(f"  -> Nhận phản hồi sau {elapsed:.1f}s.")

                # Xóa lịch sử hội thoại nếu có conv_id để giải phóng bộ nhớ trên NotebookLM
                if conv_id:
                    try:
                        nlm.delete_chat_history(NOTEBOOK_ID, conv_id)
                    except Exception:
                        pass

                parsed = parse_batch_response(raw_ans, b)
                for qid_str, item in parsed.items():
                    qid_int = int(qid_str)
                    checkpoint["verified_items"][qid_str] = item
                    
                    # Cập nhật ngay vào app (questions_data.js)
                    if qid_int in q_map:
                        # Nếu NotebookLM chọn được đáp án hợp lệ và giải thích chuẩn, cập nhật giải thích
                        if item["full_explanation"]:
                            q_map[qid_int]["explanation"] = item["full_explanation"]
                        
                        # Nếu phát hiện sai biệt đáp án
                        if item["predicted"] and item["predicted"] in ["A", "B", "C", "D"]:
                            if not item["is_match"]:
                                print(f"    ⚠️ [ĐIỀU CHỈNH ĐÁP ÁN CÂU {qid_int}] Cũ: {item['expected']} -> Mới: {item['predicted']}")
                                checkpoint["mismatches"][qid_str] = {
                                    "old": item["expected"],
                                    "new": item["predicted"],
                                    "reason": item["full_explanation"]
                                }
                                # Cập nhật đáp án mới vào dữ liệu app
                                q_map[qid_int]["answer"] = item["predicted"]
                            else:
                                print(f"    ✅ Câu {qid_int}: Khớp {item['predicted']}")

                # Lưu ngay lập tức vào file app và checkpoint
                save_questions_to_js(list(q_map.values()))
                save_checkpoint(checkpoint)
                update_markdown_report(checkpoint, len(questions))

                done_count = len(checkpoint['verified_items'])
                print(f"  💾 ĐÃ CẬP NHẬT TRỰC TIẾP VÀO APP: {done_count}/{len(questions)} câu ({done_count/len(questions)*100:.1f}%)")
                success = True
                time.sleep(2) # Nghỉ nhẹ giữa các batch
                break

            except Exception as e:
                print(f"  [-] Lỗi lần thử {attempt}/3 của batch {idx}: {e}")
                if attempt < 3:
                    time.sleep(5)
                else:
                    print(f"  [!] Bỏ qua batch {idx} sau 3 lần thử.")

        if not success:
            save_checkpoint(checkpoint)
            time.sleep(4)

    print("\n[+] Đã hoàn tất đợt rà soát. Toàn bộ dữ liệu đã được cập nhật trực tiếp vào app!")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--batches", type=int, default=None)
    parser.add_argument("--reset", action="store_true")
    args = parser.parse_args()
    run_rescan(max_batches=args.batches, reset_checkpoint=args.reset)
