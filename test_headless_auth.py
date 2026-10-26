import sys
import os
import json

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

try:
    from notebooklm_tools.utils.auth_browser import run_headless_auth
    from notebooklm_tools.core import client
    
    print("Đang thử trích xuất token qua headless browser...")
    tokens = run_headless_auth(profile_name="default", timeout=15)
    print("Kết quả tokens:", tokens)
    if tokens:
        nlm_client = client.NotebookLMClient(cookies=tokens.cookies, csrf_token=tokens.csrf_token)
        notebooks = nlm_client.list_notebooks()
        print(f"Tổng số notebooks: {len(notebooks)}")
        for nb in notebooks:
            print(f"- ID: {nb.id} | Tiêu đề: {nb.title}")
    else:
        print("Không thể tự động headless re-auth do phiên đăng nhập Chrome chưa lưu hoặc đã hết hạn.")
except Exception as e:
    print("Lỗi re-auth:", e)
