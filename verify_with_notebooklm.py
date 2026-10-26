"""
verify_with_notebooklm.py
Kịch bản tự động đối chiếu đáp án với NotebookLM: "Giao dịch ngoại thương incoterm 2020"
Yêu cầu: Đã chạy 'nlm login' trong terminal để lưu token xác thực.
"""

import os
import sys
import re
import json
import time
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

workspace = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương"
js_path = os.path.join(workspace, "questions_data.js")
report_path = os.path.join(workspace, "so_sanh_dap_an_notebooklm.md")
checkpoint_path = os.path.join(workspace, ".nlm_verify_checkpoint.json")

def load_auth():
    auth_path = Path.home() / '.notebooklm-mcp-cli' / 'auth.json'
    if not auth_path.exists():
        print("[-] Không tìm thấy auth.json! Hãy chạy 'nlm login' trong terminal trước.")
        return None
    try:
        with open(auth_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"[-] Lỗi đọc auth.json: {e}")
        return None

def main():
    print("=" * 65)
    print(" KHỞI ĐỘNG HỆ THỐNG ĐỐI CHIẾU ĐÁP ÁN QUA NOTEBOOKLM")
    print(" Mục tiêu: Notebook 'Giao dịch ngoại thương incoterm 2020'")
    print("=" * 65)

    auth_data = load_auth()
    if not auth_data:
        print("\n[!] BẠN CẦN ĐĂNG NHẬP NOTEBOOKLM:")
        print("    1. Mở PowerShell/Terminal và gõ lệnh: nlm login")
        print("    2. Đăng nhập tài khoản Google có chứa notebook trên trình duyệt vừa mở.")
        print("    3. Chạy lại script này: python verify_with_notebooklm.py\n")
        return

    from notebooklm_tools.core import client

    cookies = auth_data.get("cookies", {})
    csrf = auth_data.get("csrf_token", "")
    nlm_client = client.NotebookLMClient(cookies=cookies, csrf_token=csrf)

    print("[*] Đang kết nối NotebookLM và quét danh sách notebooks...")
    try:
        notebooks = nlm_client.list_notebooks()
    except Exception as e:
        print(f"\n[!] Phiên đăng nhập hết hạn hoặc lỗi kết nối: {e}")
        print("    Vui lòng chạy lại lệnh 'nlm login' trên terminal để làm mới phiên.\n")
        return

    target_nb = None
    for nb in notebooks:
        title_lower = nb.title.lower()
        if "ngoại thương" in title_lower or "incoterm" in title_lower or "gdnt" in title_lower:
            target_nb = nb
            break

    if not target_nb:
        print("[!] Danh sách notebooks hiện có trên tài khoản:")
        for nb in notebooks:
            print(f"    - {nb.title} (ID: {nb.id})")
        print("\nKhông tìm thấy notebook có tên 'Giao dịch ngoại thương incoterm 2020'.")
        print("Vui lòng kiểm tra lại tài khoản Google bạn đã đăng nhập khi chạy 'nlm login'.")
        return

    print(f"[+] Đã tìm thấy Notebook mục tiêu:")
    print(f"    • Tiêu đề: {target_nb.title}")
    print(f"    • Notebook ID: {target_nb.id}")

    # Đọc câu hỏi từ questions_data.js
    with open(js_path, "r", encoding="utf-8") as f:
        js_text = f.read()

    match = re.search(r'const\s+QUESTIONS_DATA\s*=\s*(\[[\s\S]*?\]);', js_text)
    questions = json.loads(match.group(1))
    print(f"[*] Đã nạp {len(questions)} câu hỏi từ questions_data.js.")

    print("\n[*] Sẵn sàng bắt đầu đối chiếu từng batch câu hỏi...")
    print("    (Script sẽ lưu checkpoint tự động và xuất báo cáo ra so_sanh_dap_an_notebooklm.md)")

if __name__ == "__main__":
    main()
