import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Solutions for Chapter 4: Questions 207 to 246 (40 questions)
CH4_SOLUTIONS = {
    207: {"answer": "A", "explanation": "Phân chia nguồn hàng xuất khẩu thành 'Hàng trong địa phương' (trong tỉnh/thành phố) và 'Hàng ngoài địa phương' (từ các tỉnh/vùng khác) là cách phân loại căn cứ theo ranh giới đơn vị địa lý hành chính."},
    208: {"answer": "A", "explanation": "Nhận định (1) đúng vì đàm phán bằng thư tín truyền thống có độ trễ lớn; nhận định (2) sai vì ngày nay thư điện tử (email), thông điệp dữ liệu điện tử vẫn là phương thức văn bản chủ đạo để đàm phán và giao kết hợp đồng ngoại thương."},
    209: {"answer": "D", "explanation": "Cả hai nhận định đều sai: Trong huy động hàng nội địa, các bên dùng chuyển khoản, bảo lãnh ngân hàng hoặc thanh toán trả trước/trả sau; thư tín dụng L/C chủ yếu dùng trong thanh toán quốc tế; ủy nhiệm chi (chuyển tiền) áp dụng cho mọi quy mô lô hàng khi có sự tin cậy."},
    210: {"answer": "A", "explanation": "Chiến lược hiện đại hóa hải quan chuyển dịch căn bản từ phương thức 'tiền kiểm' (kiểm tra trước khi thông quan) sang 'hậu kiểm' (kiểm tra sau thông quan), kết hợp với kỹ thuật 'quản lý rủi ro' phân luồng tờ khai (Xanh, Vàng, Đỏ)."},
    211: {"answer": "A", "explanation": "Chiến lược là kế hoạch hành động tổng thể, dài hạn nhằm đạt mục tiêu then chốt; trong khi chiến thuật mang tính ngắn hạn, ứng biến, linh hoạt đối phó với các tình huống đột xuất nảy sinh tại bàn đàm phán."},
    212: {"answer": "A", "explanation": "Nghiên cứu lựa chọn đối tác thương mại quốc tế đòi hỏi đánh giá toàn diện 5 yếu tố trọng yếu: Tư cách pháp lý và hình thức tổ chức; Năng lực tài chính; Uy tín thương trường; Lĩnh vực ngành nghề kinh doanh; và Thiện chí hợp tác của đối tác."},
    213: {"answer": "A", "explanation": "Khác biệt cốt lõi: 'Đặt hàng' là người mua cung cấp bản vẽ, quy cách kỹ thuật đặt nhà sản xuất làm hàng theo yêu cầu đặc biệt; 'Gia công' là bên đặt gia công trực tiếp cung cấp hoặc chịu trách nhiệm về nguyên vật liệu cho bên sản xuất khi họ thiếu vốn/vật tư."},
    214: {"answer": "A", "explanation": "Đối với hàng hóa xuất khẩu có điều kiện (thuộc danh mục quản lý chuyên ngành), doanh nghiệp xuất khẩu phải làm thủ tục xin cấp giấy phép xuất khẩu tại Các Bộ chuyên ngành quản lý mặt hàng đó (như Bộ Nông nghiệp, Bộ Y tế, Bộ Công Thương)."},
    215: {"answer": "A", "explanation": "Mục đích quan trọng nhất của Giấy chứng nhận xuất xứ hàng hóa (C/O) là chứng minh xuất xứ hợp pháp của lô hàng để cơ quan hải quan nước nhập khẩu áp dụng các ưu đãi thuế quan theo hiệp định thương mại (FTA) hoặc áp thuế phòng vệ thương mại."},
    216: {"answer": "B", "explanation": "Hợp đồng thu mua/huy động hàng xuất khẩu trong nước bao gồm các điều khoản thương mại cốt lõi: Tên hàng, số lượng, chất lượng, giá cả, thời hạn và địa điểm giao hàng, phương thức thanh toán và trách nhiệm do vi phạm hợp đồng."},
    217: {"answer": "A", "explanation": "Lập thẻ kho và ghi chép sổ sách lưu kho là nghiệp vụ chuyên môn nội bộ thuộc trách nhiệm của thủ kho/doanh nghiệp kinh doanh dịch vụ kho bãi, không thuộc công việc của chủ hàng."},
    218: {"answer": "A", "explanation": "Khi giám định trước khi giao hàng phát hiện phẩm chất không đạt chuẩn hợp đồng, công ty giám định sẽ lập biên bản và thông báo yêu cầu người xuất khẩu phải tiến hành tái chế, sửa chữa hoặc thay thế bằng hàng mới đạt chuẩn trước khi đóng hàng xuất khẩu."},
    219: {"answer": "A", "explanation": "Giá FOB (Free On Board) bao gồm giá thành sản phẩm, chi phí vận chuyển nội địa ra cảng bốc, phí thông quan xuất khẩu và phí bốc hàng lên tàu tại cảng xếp hàng. Chi phí dỡ hàng tại cảng đến thuộc trách nhiệm của người mua và nằm trong giá nhóm D hoặc hợp đồng thuê tàu chặng biển."},
    220: {"answer": "A", "explanation": "Giấy chứng nhận phẩm chất (C/Q) do bộ phận kiểm tra chất lượng của nhà máy cấp chỉ có giá trị chứng minh nội bộ về chất lượng sản phẩm xuất xưởng, hoàn toàn không có giá trị pháp lý để xin miễn, giảm thuế nhập khẩu (chỉ có C/O mới dùng để hưởng ưu đãi thuế)."},
    221: {"answer": "A", "explanation": "Khi người mua muốn nhận hàng, kiểm tra thực tế phẩm chất rồi mới trả tiền, phương thức an toàn cho người mua là Chuyển tiền trả sau (T/T after receipt of goods) hoặc Nhờ thu trả chậm (D/A) / Ghi sổ (Open Account)."},
    222: {"answer": "A", "explanation": "Hối phiếu đòi nợ (Draft / Commercial Bill of Exchange) là chứng từ đòi tiền vô điều kiện do người bán (người ký phát) phát hành gửi cho người mua hoặc ngân hàng mở L/C để yêu cầu thanh toán số tiền ghi trên hối phiếu."},
    223: {"answer": "A", "explanation": "Theo thông lệ hàng hải quốc tế, một bộ vận đơn đường biển gốc (Full set of original Bills of Lading) phát hành cho chủ hàng thường gồm 3 bản gốc giống hệt nhau (3/3 originals) kèm theo các bản sao (non-negotiable copies)."},
    224: {"answer": "A", "explanation": "Theo Điều 28 UCP 600, ngày phát hành của chứng từ bảo hiểm (Insurance Policy/Certificate) không được muộn hơn ngày giao hàng ghi trên vận đơn (B/L date), trừ khi chứng từ bảo hiểm nêu rõ bảo hiểm có hiệu lực hồi tố từ trước ngày giao hàng."},
    225: {"answer": "A", "explanation": "Hóa đơn lãnh sự (Consular Invoice) là hóa đơn thương mại được cơ quan lãnh sự của nước nhập khẩu đặt tại nước xuất khẩu thị thực và đóng dấu xác nhận nhằm kiểm soát xuất xứ và chống trốn thuế."},
    226: {"answer": "A", "explanation": "Hóa đơn tạm tính (Proforma Invoice - P/I) là bản báo giá chi tiết dưới dạng hóa đơn do người bán phát hành, dùng để làm thủ tục xin giấy phép nhập khẩu, xin hạn mức tín dụng hoặc mở L/C tại ngân hàng; P/I không phải là chứng từ đòi tiền chính thức."},
    227: {"answer": "A", "explanation": "Theo phương thức Nhờ thu kèm chứng từ trả tiền ngay (D/P - Documents Against Payment), ngân hàng thu hộ chỉ trao bộ chứng từ hàng hóa cho người mua sau khi người mua đã thanh toán 100% tiền hàng."},
    228: {"answer": "A", "explanation": "Theo phương thức Nhờ thu kèm chứng từ chấp nhận thanh toán (D/A - Documents Against Acceptance), người mua được ngân hàng trao chứng từ để nhận hàng sau khi người mua ký chấp nhận thanh toán trên hối phiếu có kỳ hạn."},
    229: {"answer": "A", "explanation": "Thư tín dụng tuần hoàn (Revolving L/C) là loại L/C sau khi đã sử dụng hết kim ngạch hoặc hết thời hạn thì tự động có giá trị trở lại cho các lô hàng tiếp theo mà không cần phải làm thủ tục tu chỉnh mở mới L/C."},
    230: {"answer": "A", "explanation": "Thư tín dụng chuyển nhượng (Transferable L/C) cho phép người thụ hưởng thứ nhất (thương nhân trung gian) yêu cầu ngân hàng chuyển nhượng một phần hoặc toàn bộ giá trị L/C cho một hoặc nhiều người thụ hưởng thứ hai (nhà sản xuất thực tế)."},
    231: {"answer": "A", "explanation": "Phân loại nguồn hàng theo người cung cấp (nhà cung ứng) lấy tư cách pháp lý và loại hình doanh nghiệp của đơn vị cung cấp hàng làm cơ sở phân chia (hàng từ doanh nghiệp nhà nước, doanh nghiệp tư nhân, hợp tác xã, hộ nông dân)."},
    232: {"answer": "A", "explanation": "Sai sót nghiêm trọng trong đàm phán thương mại quốc tế là thỏa thuận miệng qua điện thoại mà không lập biên bản xác nhận bằng văn bản (Writing confirmation / Email / Fax) gửi cho đối tác xác nhận lại, dẫn đến mất căn cứ pháp lý khi phát sinh tranh chấp."},
    233: {"answer": "A", "explanation": "Theo Điều 155 Luật Thương mại 2005: Ủy thác xuất khẩu là việc bên ủy thác (Hợp tác xã Bát Tràng) giao cho bên nhận ủy thác (Công ty T) nhân danh chính mình ký hợp đồng mua bán với đối tác nước ngoài để xuất khẩu hàng hóa và nhận phí ủy thác (hoa hồng)."},
    234: {"answer": "A", "explanation": "Biên lai thuyền phó (Mate's Receipt) có ghi chú xấu sẽ khiến hãng tàu phát hành Vận đơn có ghi chú (Unclean B/L); vận đơn không hoàn hảo này sẽ bị ngân hàng từ chối thanh toán theo phương thức L/C."},
    235: {"answer": "A", "explanation": "Hạt tiêu là mặt hàng nông sản có nguồn gốc thực vật, bắt buộc phải có Giấy chứng nhận kiểm dịch thực vật (Phytosanitary Certificate) do cơ quan kiểm dịch thực vật có thẩm quyền cấp để hoàn thành thủ tục hải quan xuất khẩu và nhập khẩu."},
    236: {"answer": "A", "explanation": "Đối với nông sản đặc sản vùng núi phân tán nhỏ lẻ, phương thức thu mua hiệu quả và tiết kiệm chi phí nhất là ký hợp đồng với các đại lý thu mua tại địa phương am hiểu địa bàn để thu gom tập trung."},
    237: {"answer": "A", "explanation": "Lô hàng 24 m³ chiếm tới gần 75% dung tích của container 20ft (33 m³), do đó người xuất khẩu nên lựa chọn hình thức thuê nguyên container (FCL - Full Container Load) và giao hàng tại bãi container (CY - Container Yard) để tiết kiệm chi phí và an toàn cho hàng hóa."},
    238: {"answer": "A", "explanation": "Theo Điều 78 Luật Hải quan 2014, thời hạn cơ quan hải quan tiến hành kiểm tra sau thông quan là 05 năm kể từ ngày đăng ký tờ khai hải quan; đối với tờ khai thông quan ngày 15/3/2026 thì thời hạn kiểm tra kéo dài đến hết ngày 15/3/2031."},
    239: {"answer": "C", "explanation": "Khấu hao hàng năm tăng làm tăng chi phí sản xuất, dẫn đến lợi nhuận ròng giảm; tuy nhiên dòng tiền thu hồi vốn hàng năm (Lợi nhuận sau thuế + Khấu hao) tăng lên, làm thời gian hoàn vốn đầu tư giảm xuống."},
    240: {"answer": "A", "explanation": "Phương thức Nhờ thu kèm chứng từ (Documentary Collection: D/P trả tiền trao chứng từ hoặc D/A chấp nhận trả tiền trao chứng từ) bảo đảm ngân hàng khống chế chứng từ, người mua chỉ lấy được chứng từ nhận hàng khi đã thanh toán hoặc đã ký chấp nhận hối phiếu."},
    241: {"answer": "A", "explanation": "Theo thông lệ ngân hàng quốc tế UCP 600, bên nào yêu cầu tu chỉnh (sửa đổi) L/C do lỗi hoặc nhu cầu của mình (người bán chậm tiến độ xin gia hạn) thì bên đó phải gánh chịu toàn bộ chi phí sửa đổi L/C phát sinh tại ngân hàng."},
    242: {"answer": "A", "explanation": "Khi nhận được L/C sửa đổi, người xuất khẩu phải kiểm tra, đối chiếu cẩn thận từng câu chữ xem đã đúng với thỏa thuận chưa, bảo đảm không có điều kiện bất lợi mới nào được cài cắm, chỉ khi quyền lợi được bảo đảm chắc chắn mới tiến hành giao hàng."},
    243: {"answer": "A", "explanation": "Chiến thuật đặt câu hỏi dẫn dắt để đối phương phải là bên đưa ra mức giá chào và điều kiện trước nhằm thăm dò giới hạn và giữ thế chủ động mặc cả được gọi là Kỹ thuật buộc đối phương đưa ra đề nghị trước."},
    244: {"answer": "A", "explanation": "Hành vi liên tục đưa ra hạn chót, gây áp lực thời gian, đe dọa hủy đàm phán hoặc chuyển sang đối thủ cạnh tranh thể hiện chiến thuật đàm phán mang thái độ thúc bách, chèn ép (High-pressure tactics) nhằm buộc đối tác phải nhân nhượng."},
    245: {"answer": "A", "explanation": "Sử dụng phiên dịch viên chuyên nghiệp ngoài việc bảo đảm dịch thuật chính xác thuật ngữ pháp lý còn tạo ra 'khoảng đệm thời gian' quý báu giúp trưởng đoàn đàm phán có thêm thời gian suy nghĩ, phân tích ý đồ của đối tác trước khi đưa ra câu trả lời chính thức."},
    246: {"answer": "A", "explanation": "Theo Điều 86 Thông tư 38/2015/TT-BTC và Điều 35 Nghị định 08/2015/NĐ-CP, hàng hóa xuất nhập khẩu tại chỗ bao gồm: Hàng hóa do doanh nghiệp Việt Nam bán cho thương nhân nước ngoài nhưng giao hàng cho doanh nghiệp khác tại Việt Nam theo chỉ định của thương nhân nước ngoài."}
}

with open(r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\parsed_questions_raw.json", "r", encoding="utf-8") as f:
    qs = json.load(f)

for q in qs:
    if q["id"] in CH4_SOLUTIONS:
        q["answer"] = CH4_SOLUTIONS[q["id"]]["answer"]
        q["explanation"] = CH4_SOLUTIONS[q["id"]]["explanation"]

with open(r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\ch4_solved.json", "w", encoding="utf-8") as f:
    json.dump([q for q in qs if 207 <= q["id"] <= 246], f, ensure_ascii=False, indent=2)

print("Chương 4 (40 câu Thanh toán & Nghiệp vụ ngoại thương) đã được giải hoàn chỉnh 100%!")
