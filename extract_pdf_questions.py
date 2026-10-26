import pdfplumber
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\GDNT_DS CÂU HỎI ÔN TẬP.pdf"

print(f"Đang mở file: {pdf_path}")
with pdfplumber.open(pdf_path) as pdf:
    print(f"Tổng số trang: {len(pdf.pages)}")
    full_text = []
    for idx, page in enumerate(pdf.pages):
        text = page.extract_text() or ""
        print(f"Trang {idx + 1}: {len(text)} ký tự")
        full_text.append(f"--- TRANG {idx + 1} ---\n" + text)

raw_output_path = r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\extracted_pdf_raw.txt"
with open(raw_output_path, "w", encoding="utf-8") as f:
    f.write("\n\n".join(full_text))

print(f"Đã lưu toàn bộ văn bản trích xuất vào: {raw_output_path}")
