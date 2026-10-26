import sys
import os
import json
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

auth_path = Path.home() / '.notebooklm-mcp-cli' / 'auth.json'
with open(auth_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

print("Auth loaded successfully.")

from notebooklm_tools.core import client

cookies = data.get("cookies", {})
csrf = data.get("csrf_token", "")

nlm_client = client.NotebookLMClient(cookies=cookies, csrf_token=csrf)

try:
    notebooks = nlm_client.list_notebooks()
    print(f"Tổng số notebooks tìm thấy: {len(notebooks)}")
    target_nb = None
    for nb in notebooks:
        print(f"- ID: {nb.id} | Tiêu đề: '{nb.title}'")
        if "giao dịch ngoại thương" in nb.title.lower() or "incoterm" in nb.title.lower():
            target_nb = nb
            
    if target_nb:
        print(f"\n==> ĐÃ TÌM THẤY NOTEBOOK MỤC TIÊU:")
        print(f"ID: {target_nb.id}")
        print(f"Tiêu đề: {target_nb.title}")
    else:
        print("\nKhông tìm thấy notebook nào có tên 'Giao dịch ngoại thương incoterm 2020'")
except Exception as e:
    print("Lỗi khi kết nối NotebookLM:", e)
