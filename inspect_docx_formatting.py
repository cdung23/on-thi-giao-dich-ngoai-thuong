import docx
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

doc = docx.Document(r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\GDNT_ÔN TẬP.docx")

print(f"Tổng số đoạn trong docx: {len(doc.paragraphs)}")

# Kiểm tra 10 đoạn đầu tiên xem định dạng bold, underline, color thế nào
for i, p in enumerate(doc.paragraphs[:30]):
    text = p.text.strip()
    if not text:
        continue
    runs_info = []
    for r in p.runs:
        styles = []
        if r.bold:
            styles.append("BOLD")
        if r.underline:
            styles.append("UNDERLINE")
        if r.font.color and r.font.color.rgb:
            styles.append(f"COLOR({r.font.color.rgb})")
        if r.font.highlight_color:
            styles.append(f"HIGHLIGHT({r.font.highlight_color})")
        if styles:
            runs_info.append(f"'{r.text}' [{' '.join(styles)}]")
    if runs_info:
        print(f"P{i}: {text[:50]} --> {runs_info}")
