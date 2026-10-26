# ỨNG DỤNG ÔN THI TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS® 2020

> Hệ thống ôn tập và luyện thi trắc nghiệm học phần **Giao dịch Ngoại thương** (Foreign Trade Transactions) chuẩn Đại học Ngoại thương và các trường khối ngành Kinh tế Quốc tế. Tích hợp trọn bộ **303 câu hỏi chuẩn hóa**, phân loại theo 5 chương học và **Bộ đề ôn tập 100 câu chọn lọc** từ tệp khảo sát PDF.

---

## 🌟 TÍNH NĂNG NỔI BẬT

1. **4 Tab Chức năng Chuyên sâu:**
   - 📖 **Luyện Tập (Practice):** Làm bài theo từng câu, xem tức thì giải thích căn cứ pháp lý (Incoterms 2020, UCP 600, CISG 1980, Luật Hải quan...). Hỗ trợ lọc theo 5 chương và lọc riêng **Đề PDF 100 câu**.
   - ⏱️ **Thi Thử (Exam Mode):** Tùy chọn cấu hình thi 20, 30, 40 câu hoặc làm trọn vẹn **Đề chuẩn PDF 100 câu** có đếm ngược thời gian, chấm điểm tự động thang điểm 10 và bảng phân tích kết quả.
   - ⚡ **Luyện Cuốn Chiếu (Active Recall Drill):** Thuật toán tự động đưa câu làm sai vào hàng đợi lặp lại cho đến khi trả lời đúng 100%.
   - 🔍 **Tra Cứu Từ Khóa (Instant Search):** Tìm kiếm tức thì trong toàn bộ 303 câu hỏi và nội dung giải thích với cơ chế đánh dấu từ khóa (highlight).

2. **Tiện ích Học tập Toàn diện:**
   - 🌓 **Đổi giao diện:** Dark Mode (Hải quân sang trọng) và Light Mode (Thanh lịch hiện đại).
   - ⭐ **Ghim câu hỏi & Sổ tay câu sai:** Tự động lưu tiến độ vào `LocalStorage`, hỗ trợ xuất (Export) và nạp (Import) dữ liệu dạng JSON.
   - ⌨️ **Phím tắt nhanh:** Sử dụng phím `1-4`, `A-D` để chọn đáp án; `← / →` để chuyển câu.

---

## 📚 CẤU TRÚC NGÂN HÀNG CÂU HỎI (303 CÂU)

| Chương | Nội dung chuyên môn | Số lượng | Căn cứ pháp lý chủ yếu |
|:---:|:---|:---:|:---|
| **Chương 1** | Các phương thức giao dịch thương mại quốc tế chủ yếu | **48 câu** | Luật Thương mại 2005, CISG 1980 |
| **Chương 2** | Incoterms® 2020 - Các điều kiện thương mại quốc tế | **88 câu** | Incoterms® 2020 (ICC Publication No. 723) |
| **Chương 3** | Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu | **71 câu** | CISG 1980, Giáo trình GDNT |
| **Chương 4** | Phương thức thanh toán và chứng từ trong giao dịch ngoại thương | **41 câu** | UCP 600, ISBP 745, Swift MT700 |
| **Chương 5** | Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán | **55 câu** | Luật Hải quan 2014, TT 38/2015/TT-BTC |
| **Tổng cộng** | **Toàn bộ ngân hàng câu hỏi** | **303 câu** | |

*(Bao gồm **99 câu hỏi** trích từ `GDNT_DS CÂU HỎI ÔN TẬP.pdf` được gắn huy hiệu `📄 Đề PDF: Câu X` trên giao diện).*

---

## 🚀 HƯỚNG DẪN SỬ DỤNG

### 1. Sử dụng ứng dụng trên máy tính (Offline)
Không cần cài đặt NodeJS hay web server phức tạp:
- Nhấp đúp chuột vào file **`index.html`** để mở ngay ứng dụng trên bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Brave...).

### 2. Kiểm thử tự động (Verification Harness)
Chạy script kiểm tra tính toàn vẹn của dữ liệu và giao diện:
```powershell
python verify.py
```

### 3. Tự động đối chiếu với NotebookLM (Tùy chọn)
Nếu muốn đối chiếu lại câu hỏi với NotebookLM:
```powershell
# Bước 1: Đăng nhập tài khoản Google trên CLI
nlm login

# Bước 2: Chạy script đối chiếu tự động
python verify_with_notebooklm.py
```

---

## 📂 DANH MỤC TÀI LIỆU CUNG CẤP

- **`index.html`**: Mã nguồn giao diện ứng dụng web Single-Page Responsive.
- **`questions_data.js`**: Cơ sở dữ liệu 303 câu hỏi chuẩn hóa có phân tích và ánh xạ Đề PDF.
- **`Trắc nghiệm - Đáp án và Giải thích.md`**: Sách tra cứu chi tiết 303 câu với phân tích giảng viên.
- **`GDNT_DAP_AN_DE_ON_TAP_100_CAU_PDF.md`**: Bản đối chiếu chuẩn 100 câu theo số thứ tự của tệp PDF ôn tập.
- **`verify.py`**: Harness kiểm thử tự động 1-chạm chuẩn Agentic Engineering.
