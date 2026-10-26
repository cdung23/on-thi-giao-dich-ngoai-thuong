import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

CH1_SOLUTIONS = {
    1: {
        "answer": "A",
        "explanation": "Căn cứ vào giáo trình Giao dịch ngoại thương, xét theo số bên tham gia, hợp đồng gia công quốc tế được chia thành: Gia công hai bên (song phương) và Gia công chuyển tiếp (đa phương - từ 3 bên trở lên, trong đó bên nhận gia công giao thành phẩm trực tiếp cho một bên thứ ba theo chỉ định của bên đặt gia công). Các phương án B, C, D là phân loại theo quyền sở hữu nguyên liệu hoặc hình thức thanh toán thù lao."
    },
    2: {
        "answer": "A",
        "explanation": "Theo Điều 14 Công ước Viên 1980 (CISG) và Luật Thương mại 2005, chào bán hàng (Offer/Chào hàng) xét về mặt pháp lý là một đề nghị giao kết hợp đồng xuất phát từ phía người bán, gửi cho một hoặc nhiều đối tượng xác định, thể hiện rõ ý chí chịu sự ràng buộc theo các điều kiện đã nêu ra khi bên mua chấp nhận."
    },
    3: {
        "answer": "A",
        "explanation": "Theo Luật Thương mại 2005 và nghiệp vụ đại lý quốc tế, Đại lý kinh tiêu (Merchant Dealer/Merchant Agent) là thương nhân mua đứt bán đoạn, hoạt động với danh nghĩa và chi phí của chính mình, tự chịu rủi ro và hưởng lợi nhuận từ khoản chênh lệch giữa giá mua và giá bán lại."
    },
    4: {
        "answer": "A",
        "explanation": "Đặt mua hàng (Order/Đơn đặt hàng) thường được bên mua sử dụng khi hai bên đã có mối quan hệ làm ăn từ trước, thông hiểu về uy tín, chủng loại hàng hóa, giá cả và các điều kiện giao dịch khung đã được thỏa thuận trước đó."
    },
    5: {
        "answer": "A",
        "explanation": "Xét theo số lượng người tham gia, đấu thầu quốc tế được phân loại thành: Đấu thầu rộng rãi (mở rộng), Đấu thầu hạn chế, và Chỉ định thầu (đấu thầu riêng lẻ). Đấu thầu sơ tuyển là cách phân loại theo giai đoạn/quy trình kỹ thuật tổ chức thầu."
    },
    6: {
        "answer": "A",
        "explanation": "Phân loại du lịch theo mục đích chuyến đi gồm có: Du lịch văn hóa, du lịch thương gia (công vụ), du lịch nghỉ dưỡng, du lịch thể thao, du lịch quá cảnh, v.v. 'Du lịch cá nhân' là phân loại theo hình thức tổ chức chuyến đi hoặc quy mô đoàn khách."
    },
    7: {
        "answer": "A",
        "explanation": "Giao dịch tái xuất (Re-export) về bản chất luôn có sự tham gia của ít nhất 3 bên: Người xuất khẩu ban đầu, Người kinh doanh tái xuất (ở giữa, vừa đóng vai trò người mua từ nước xuất khẩu vừa là người bán sang nước thứ ba), và Người nhập khẩu cuối cùng. Do đó nhận định 'Thường có 2 bên tham gia' là sai."
    },
    8: {
        "answer": "A",
        "explanation": "Các loại hình giao dịch mua bán hàng hóa tiêu chuẩn tại Sở giao dịch hàng hóa (Commodity Exchange) bao gồm: Giao dịch giao ngay (Spot), Giao dịch kỳ hạn (Forward), Hợp đồng tương lai (Futures), và Hợp đồng quyền chọn (Options). 'Nghiệp vụ bảo hiểm' chỉ là mục đích phòng ngừa rủi ro giá (Hedging) chứ không phải một loại hình hợp đồng mua bán tại sở giao dịch."
    },
    9: {
        "answer": "A",
        "explanation": "Du lịch quốc tế là một ngành kinh tế tổng hợp mang tính liên ngành sâu sắc (gắn liền với giao thông vận tải, lưu trú, ăn uống, văn hóa, tài chính ngân hàng), chứ không phải là một hoạt động kinh tế chuyên ngành đơn lẻ."
    },
    10: {
        "answer": "A",
        "explanation": "Khi thành lập công ty con tại nước ngoài (doanh nghiệp 100% vốn đầu tư nước ngoài), rào cản gia nhập thị trường rất lớn và doanh nghiệp phải tự gánh chịu toàn bộ chi phí ban đầu, nên khả năng cạnh tranh thời kỳ đầu thường rất khó khăn chứ không thể 'cao do đã tính toán kỹ'."
    },
    11: {
        "answer": "A",
        "explanation": "Công ty liên doanh (Joint Venture) là hình thức thành lập một pháp nhân mới do hai hoặc nhiều bên thuộc các quốc gia khác nhau cùng góp vốn, chia sẻ rủi ro, tận dụng tài nguyên nước sở tại và cùng quản lý. Phát biểu A dùng từ ngữ sai lệch về bản chất liên doanh."
    },
    12: {
        "answer": "A",
        "explanation": "Đại lý gửi bán (Consignment agent) là hình thức phổ biến nhất của đại lý hoa hồng, theo đó bên giao đại lý gửi hàng cho bên đại lý để bán, bên đại lý nhận thù lao hoa hồng trên doanh số bán và không phải bỏ vốn mua đứt lô hàng."
    },
    13: {
        "answer": "A",
        "explanation": "Phắc tơ (Factor / Đại lý bao thanh toán - quản lý hàng) là thương nhân trung gian tài chính và ủy thác đặc biệt, được phép đứng tên chính mình bán hoặc cầm cố hàng hóa, quản lý sổ sách nợ và ứng trước tiền cho người ủy thác với giá cả có lợi nhất."
    },
    14: {
        "answer": "A",
        "explanation": "Công ty đa quốc gia (MNCs - Multinational Corporations) là doanh nghiệp có cơ sở sản xuất hoặc cung cấp dịch vụ tại ít nhất hai quốc gia, ngân sách lớn và chi phối chuỗi giá trị toàn cầu. Khái niệm 'xí nghiệp liên hợp toàn cầu tương ứng thương mại hóa' là sai lý thuyết quản trị kinh doanh quốc tế."
    },
    15: {
        "answer": "A",
        "explanation": "Trong tập đoàn xuyên quốc gia (TNCs - Transnational Corporations), công ty mẹ và các công ty con tại các quốc gia liên kết chặt chẽ theo chiến lược toàn cầu thống nhất, chia sẻ công nghệ, R&D và chịu ảnh hưởng qua lại sâu sắc, không thể 'không ảnh hưởng lẫn nhau'."
    },
    16: {
        "answer": "A",
        "explanation": "Mua bán tại Sở giao dịch hàng hóa bắt buộc phải tuân theo Hợp đồng mẫu chuẩn hóa (Standardized Contract) của Sở về quy cách, phẩm chất, khối lượng và điều kiện giao nhận; các bên không được phép tự do thỏa thuận hợp đồng riêng."
    },
    17: {
        "answer": "A",
        "explanation": "Đặt chi nhánh (Branch) là bước đi ban đầu hoặc trung gian trong chiến lược thâm nhập thị trường trực tiếp, sau văn phòng đại diện và trước bước thành lập công ty con/công ty liên doanh độc lập."
    },
    18: {
        "answer": "A",
        "explanation": "Giá gia công (thù lao gia công) bao gồm: Tiền thù lao lao động, chi phí khấu hao máy móc thiết bị, chi phí nguyên phụ liệu phụ, và các chi phí tiếp nhận/vận chuyển mà bên nhận gia công ứng trước. Sản phẩm gia công thuộc sở hữu của bên đặt gia công nên không có việc 'bên nhận gia công bán sản phẩm'."
    },
    19: {
        "answer": "A",
        "explanation": "Theo Điều 29 Luật Thương mại 2005: Tái xuất khẩu là việc xuất khẩu hàng hóa đã được nhập khẩu trước đó ra khỏi lãnh thổ Việt Nam mà chưa qua chế biến, nhằm mục đích thu về ngoại tệ lớn hơn chi phí đã bỏ ra để nhập khẩu."
    },
    20: {
        "answer": "A",
        "explanation": "Mua lại sản phẩm (Buy-back / Product Buy-back agreement) là hình thức mua bán đối lưu trong đó bên xuất khẩu thiết bị/nhà máy đồng ý nhận lại khoản thanh toán (toàn bộ hoặc một phần) bằng chính các sản phẩm do nhà máy/thiết bị đó sản xuất ra."
    },
    21: {
        "answer": "A",
        "explanation": "Theo Điều 150 Luật Thương mại 2005: Môi giới thương mại là hoạt động thương mại theo đó thương nhân làm trung gian (bên môi giới) cho các bên mua bán hàng hóa đàm phán, giao kết hợp đồng và được hưởng thù lao, bên môi giới không đứng tên trên hợp đồng và không chịu trách nhiệm về việc thực hiện hợp đồng của các bên."
    },
    22: {
        "answer": "A",
        "explanation": "Hỏi hàng (Inquiry) là việc người mua đề nghị người bán cho biết giá cả và các điều kiện thương mại để mua một lô hàng xác định. Lời hỏi hàng không có tính ràng buộc pháp lý và người hỏi hàng không cam kết bắt buộc phải mua."
    },
    23: {
        "answer": "A",
        "explanation": "Theo quy chuẩn tổ chức đấu giá thương mại quốc tế, trình tự tiến hành cuộc đấu giá gồm: Trưng bày/cho xem hàng hóa được đấu giá -> Tiến hành mở cuộc đấu giá -> Thực hiện phương thức đấu giá (trả giá tăng dần hoặc đặt giá giảm dần) và gõ búa tuyên bố người mua được hàng."
    },
    24: {
        "answer": "B",
        "explanation": "Theo quy tắc Hiệp hội Quốc tế các Kỹ sư Tư vấn (FIDIC), quy trình tiến hành đấu thầu chính thức bao gồm: Mời thầu (Tendering) -> Nộp và Mở thầu (Opening) -> Đánh giá hồ sơ dự thầu -> Trao thầu và Ký kết hợp đồng. Giai đoạn Sơ tuyển (Prequalification) thuộc bước chuẩn bị đấu thầu."
    },
    25: {
        "answer": "A",
        "explanation": "Giai đoạn chuẩn bị đấu giá bao gồm: Chuẩn bị hàng hóa, phân lô, xây dựng thể lệ/quy chế đấu giá, định giá khởi điểm và thông báo công khai cuộc đấu giá. Việc 'Cho người mua xem hàng/trưng bày hàng' diễn ra ngay trước giờ mở phiên đấu giá."
    },
    26: {
        "answer": "C",
        "explanation": "Một trong những nhược điểm lớn nhất của việc mua bán qua trung gian thương mại là doanh nghiệp xuất khẩu bị mất liên hệ trực tiếp với người tiêu dùng và giảm khả năng kiểm soát thị trường so với kênh phân phối trực tiếp."
    },
    27: {
        "answer": "D",
        "explanation": "Chuẩn bị đấu thầu là công việc của bên mời thầu (lập hồ sơ mời thầu, dự toán, tiêu chuẩn đánh giá, thông báo mời thầu). 'Nộp hồ sơ dự thầu' là hành động của các nhà thầu tham gia khi nhận được thông báo mời thầu."
    },
    28: {
        "answer": "C",
        "explanation": "Tại sàn giao dịch hàng hóa, quy trình bắt đầu từ khách hàng gửi lệnh cho người môi giới -> Môi giới ra đài (khu vực khớp lệnh) tiến hành giao dịch theo phương thức đấu giá mở -> Ký kết hợp đồng giao dịch và công bố giá khớp trên bảng điện tử."
    },
    29: {
        "answer": "A",
        "explanation": "Theo quy định pháp luật về gia công thương mại, hợp đồng gia công bắt buộc phải có các điều khoản về: Tên hàng, số lượng, định mức nguyên liệu, thù lao gia công, cách giải quyết nguyên vật liệu thừa, nhãn hiệu bao bì. 'Điều khoản về bán sản phẩm' không bắt buộc vì thành phẩm thuộc quyền sở hữu của bên đặt gia công."
    },
    30: {
        "answer": "A",
        "explanation": "Theo Điều 166 Luật Thương mại 2005: 'Đại lý thương mại là hoạt động thương mại, theo đó bên giao đại lý và bên đại lý thoả thuận việc bên đại lý nhân danh chính mình mua, bán hàng hoá cho bên giao đại lý hoặc cung ứng dịch vụ của bên giao đại lý đến khách hàng để hưởng thù lao'."
    },
    31: {
        "answer": "A",
        "explanation": "Xuất nhập khẩu trực tiếp là phương thức trao đổi hàng hóa trực tiếp giữa doanh nghiệp trong nước với khách hàng nước ngoài nhằm khai thác tối đa lợi thế so sánh (Comparative Advantage) quốc gia và tối ưu hóa lợi nhuận kinh doanh."
    },
    32: {
        "answer": "A",
        "explanation": "Theo Điều 393 Bộ luật Dân sự 2015 và CISG 1980, chấp nhận giao kết hợp đồng chỉ có hiệu lực pháp lý khi nó được truyền đạt và thông báo đến người đề nghị trong thời hạn quy định."
    },
    33: {
        "answer": "A",
        "explanation": "Trong phương thức đấu thầu hai giai đoạn hai túi hồ sơ, ở giai đoạn 1, bên mời thầu sẽ mở phong bì hồ sơ đề xuất kỹ thuật sơ bộ để xem xét, thảo luận và đánh giá trước mà chưa mở hồ sơ đề xuất tài chính."
    },
    34: {
        "answer": "A",
        "explanation": "Theo pháp luật thương mại, bên đại lý chỉ nắm giữ hàng hóa để thực hiện việc mua bán theo ủy thác, quyền sở hữu hàng hóa vẫn thuộc về bên giao đại lý cho đến khi hàng hóa được chuyển giao hợp pháp cho người mua."
    },
    35: {
        "answer": "A",
        "explanation": "Trong các dự án đấu thầu mua sắm quốc tế quy mô lớn, khoảng thời gian từ khi phát hành hồ sơ mời thầu đến khi kết thúc mở thầu và chấm thầu giai đoạn mở thầu thường kéo dài từ 3 đến 6 tháng để các nhà thầu chuẩn bị và nộp hồ sơ."
    },
    36: {
        "answer": "A",
        "explanation": "Đấu thầu mở rộng (Đấu thầu rộng rãi - Open Bidding) là hình thức đấu thầu không hạn chế số lượng nhà thầu tham gia; bên mời thầu công khai thông báo rộng rãi trên các phương tiện thông tin đại chúng."
    },
    37: {
        "answer": "A",
        "explanation": "Mua đối lưu (Counter-purchase) là hình thức thỏa thuận hai bên trong đó bên xuất khẩu bán hàng hóa/dịch vụ cho bên nhập khẩu, đồng thời cam kết mua lại một lượng hàng hóa khác của bên nhập khẩu trong một thời hạn nhất định (thường từ 1 đến 5 năm) qua hai hợp đồng riêng biệt."
    },
    38: {
        "answer": "A",
        "explanation": "Đại lý kinh tiêu (Merchant Dealer) nhân danh chính mình mua bán hàng hóa và hưởng khoản chênh lệch giữa giá mua vào và giá bán ra cho khách hàng."
    },
    39: {
        "answer": "A",
        "explanation": "Văn phòng đại diện (Representative Office) ở nước ngoài là đơn vị phụ thuộc của thương nhân, có nhiệm vụ nghiên cứu thị trường, xúc tiến thương mại và tư vấn khách hàng, không được trực tiếp thực hiện hoạt động sinh lợi (không trực tiếp ký hợp đồng mua bán)."
    },
    40: {
        "answer": "C",
        "explanation": "Theo quy chế đấu thầu quốc tế, sau khi tổng hợp điểm kỹ thuật và điểm tài chính theo thang điểm chuẩn trong hồ sơ mời thầu, nhà thầu đạt tổng điểm đánh giá cao nhất (hoặc giá đánh giá thấp nhất đạt chuẩn kỹ thuật) sẽ là người thắng thầu."
    },
    41: {
        "answer": "A",
        "explanation": "Theo thông lệ quốc tế và quy chế đấu thầu hai phong bì, hồ sơ đề xuất kỹ thuật của nhà thầu phải đạt tối thiểu từ 70% tổng số điểm kỹ thuật trở lên mới được xem xét mở tiếp phong bì đề xuất tài chính."
    },
    42: {
        "answer": "A",
        "explanation": "Chương V Luật Thương mại 2005 quy định 4 hoạt động trung gian thương mại: (1) Đại diện cho thương nhân; (2) Môi giới thương mại; (3) Ủy thác mua bán hàng hóa; (4) Đại lý thương mại. Luật không có khái niệm 'đại diện cho cá nhân' trong hoạt động thương mại."
    },
    43: {
        "answer": "A",
        "explanation": "Tòa thánh Vatican (Holy See) là một thực thể độc lập có chủ quyền được công nhận theo công pháp quốc tế, tham gia vào các quan hệ quốc tế với tư cách là một quốc gia/chủ thể đặc biệt."
    },
    44: {
        "answer": "A",
        "explanation": "Mức độ tự chủ và hoàn thiện pháp lý tăng dần từ thấp đến cao: Văn phòng đại diện (chỉ nghiên cứu, xúc tiến) -> Chi nhánh (được thực hiện hoạt động kinh doanh nhưng không có tư cách pháp nhân riêng) -> Công ty con (pháp nhân độc lập có vốn, tài sản và tự chịu trách nhiệm)."
    },
    45: {
        "answer": "C",
        "explanation": "Cấu trúc chuẩn của một bức thư hỏi hàng (Letter of Inquiry): (1) Lời chào; (2) Nêu lý do biết đến công ty; (3) Giới thiệu tóm tắt về doanh nghiệp mình; (4) Đưa ra yêu cầu cụ thể về chủng loại, giá cả, điều kiện giao hàng; (5) Lời cảm ơn và mong đợi hồi âm."
    },
    46: {
        "answer": "A",
        "explanation": "Khi doanh nghiệp đã chính thức thành lập chi nhánh trực tiếp tại nước sở tại và đã có cơ sở khách hàng sẵn có qua mạng, việc sử dụng thêm trung gian thương mại sẽ làm tăng chi phí phân phối và chồng chéo kênh bán hàng."
    },
    47: {
        "answer": "A",
        "explanation": "Xuất khẩu tại chỗ qua du lịch quốc tế mang lại hiệu quả kinh tế rất cao vì: Hàng hóa được bán trực tiếp cho khách du lịch theo giá bán lẻ, thu ngoại tệ ngay tại chỗ, tiết kiệm tối đa chi phí vận chuyển quốc tế, bao bì đóng gói đường biển và thủ tục hải quan phức tạp."
    },
    48: {
        "answer": "A",
        "explanation": "WCO (World Customs Organization - Tổ chức Hải quan Thế giới) là một tổ chức liên chính phủ quốc tế độc lập, chuyên nghiên cứu chuẩn hóa các quy tắc phân loại hàng hóa (hệ thống HS), thủ tục hải quan và an ninh thương mại toàn cầu."
    }
}

with open(r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\parsed_questions_raw.json", "r", encoding="utf-8") as f:
    qs = json.load(f)

for q in qs:
    if q["id"] in CH1_SOLUTIONS:
        q["answer"] = CH1_SOLUTIONS[q["id"]]["answer"]
        q["explanation"] = CH1_SOLUTIONS[q["id"]]["explanation"]

with open(r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\ch1_solved.json", "w", encoding="utf-8") as f:
    json.dump([q for q in qs if 1 <= q["id"] <= 48], f, ensure_ascii=False, indent=2)

print("Chương 1 (48 câu) đã được giải hoàn chỉnh 100%!")
