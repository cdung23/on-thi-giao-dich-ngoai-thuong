/**
 * NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM GIAO DỊCH NGOẠI THƯƠNG & INCOTERMS 2020
 * Bộ môn: Giao dịch Ngoại thương - ĐH Ngoại thương / Khối ngành Kinh tế Quốc tế
 * Tổng số câu hỏi: 303 câu hỏi chuẩn hóa (Bao gồm 300 câu ngân hàng gốc + 3 câu bổ sung từ Đề thi PDF)
 * Tích hợp bộ đề 100 câu trích từ: GDNT_DS CÂU HỎI ÔN TẬP.pdf
 */

const QUESTIONS_DATA = [
  {
    "id": 1,
    "orig_no": "1",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Cách phân loại hợp đồng gia công nào sau đây xét về số bên tham gia?",
    "options": {
      "A": "Gia công chuyển tiếp",
      "B": "Mua đứt bán đoạn",
      "C": "Hợp đồng khoán gọn",
      "D": "Gia công chủ động"
    },
    "answer": "A",
    "explanation": "Căn cứ vào giáo trình Giao dịch ngoại thương, xét theo số bên tham gia, hợp đồng gia công quốc tế được chia thành: Gia công hai bên (song phương) và Gia công chuyển tiếp (đa phương - từ 3 bên trở lên, trong đó bên nhận gia công giao thành phẩm trực tiếp cho một bên thứ ba theo chỉ định của bên đặt gia công). Các phương án B, C, D là phân loại theo quyền sở hữu nguyên liệu hoặc hình thức thanh toán thù lao.",
    "pdf_no": 1
  },
  {
    "id": 2,
    "orig_no": "2",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Chào bán hàng xét về mặt pháp lý được hiểu là gì?",
    "options": {
      "A": "Đề nghị ký kết hợp đồng của người bán theo các điều kiện đã nêu ra",
      "B": "Lời thỉnh cầu muốn được biết thông tin về sản phẩm",
      "C": "Văn bản xác nhận lại các nội dung của người mua trong hỏi hàng",
      "D": "Thể hiện sự đồng tình của bên bán đề nghị ký kết hợp đồng do bên mua đưa ra"
    },
    "answer": "A",
    "explanation": "Theo Điều 14 Công ước Viên 1980 (CISG) và Luật Thương mại 2005, chào bán hàng (Offer/Chào hàng) xét về mặt pháp lý là một đề nghị giao kết hợp đồng xuất phát từ phía người bán, gửi cho một hoặc nhiều đối tượng xác định, thể hiện rõ ý chí chịu sự ràng buộc theo các điều kiện đã nêu ra khi bên mua chấp nhận.",
    "pdf_no": 2
  },
  {
    "id": 3,
    "orig_no": "3",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đại lý nào là thương nhân trung gian hoạt động với danh nghĩa và chi phí của chính mình?",
    "options": {
      "A": "Đại lý kinh tiêu",
      "B": "Đại lý thụ ủy",
      "C": "Đại lý hoa hồng",
      "D": "Đại lý đặc biệt"
    },
    "answer": "A",
    "explanation": "Theo Luật Thương mại 2005 và nghiệp vụ đại lý quốc tế, Đại lý kinh tiêu (Merchant Dealer/Merchant Agent) là thương nhân mua đứt bán đoạn, hoạt động với danh nghĩa và chi phí của chính mình, tự chịu rủi ro và hưởng lợi nhuận từ khoản chênh lệch giữa giá mua và giá bán lại.",
    "pdf_no": 3
  },
  {
    "id": 4,
    "orig_no": "4",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đặt mua hàng được sử dụng trong trường hợp nào?",
    "options": {
      "A": "Khi mối quan hệ giữa hai bên mua và bán đã có sự thông hiểu lẫn nhau từ trước",
      "B": "Khi hai bên chưa từng có bất kỳ giao dịch hay thông tin nào về nhau trước đó",
      "C": "Khi người bán chưa đưa ra bất kỳ đơn chào hàng nào cho người mua",
      "D": "Khi hợp đồng giữa hai bên đã hoàn tất và không cần thêm bất kỳ thao tác nào khác"
    },
    "answer": "A",
    "explanation": "Đặt mua hàng (Order/Đơn đặt hàng) thường được bên mua sử dụng khi hai bên đã có mối quan hệ làm ăn từ trước, thông hiểu về uy tín, chủng loại hàng hóa, giá cả và các điều kiện giao dịch khung đã được thỏa thuận trước đó.",
    "pdf_no": 4
  },
  {
    "id": 5,
    "orig_no": "5",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu không phải là một cách phân loại đấu thầu theo lượng người tham gia?",
    "options": {
      "A": "Đấu thầu sơ tuyển",
      "B": "Đấu thầu mở rộng",
      "C": "Đấu thầu hạn chế",
      "D": "Đấu thầu riêng lẻ"
    },
    "answer": "A",
    "explanation": "Xét theo số lượng người tham gia, đấu thầu quốc tế được phân loại thành: Đấu thầu rộng rãi (mở rộng), Đấu thầu hạn chế, và Chỉ định thầu (đấu thầu riêng lẻ). Đấu thầu sơ tuyển là cách phân loại theo giai đoạn/quy trình kỹ thuật tổ chức thầu.",
    "pdf_no": 5
  },
  {
    "id": 6,
    "orig_no": "6",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu không phải là một cách phân loại du lịch quốc tế theo mục đích của hoạt động du lịch?",
    "options": {
      "A": "Du lịch cá nhân",
      "B": "Du lịch văn hóa",
      "C": "Du lịch thương gia",
      "D": "Du lịch quá cảnh"
    },
    "answer": "A",
    "explanation": "Phân loại du lịch theo mục đích chuyến đi gồm có: Du lịch văn hóa, du lịch thương gia (công vụ), du lịch nghỉ dưỡng, du lịch thể thao, du lịch quá cảnh, v.v. 'Du lịch cá nhân' là phân loại theo hình thức tổ chức chuyến đi hoặc quy mô đoàn khách.",
    "pdf_no": 6
  },
  {
    "id": 7,
    "orig_no": "7",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu không phải là một đặc điểm của giao dịch tái xuất?",
    "options": {
      "A": "Thường có 2 bên tham gia vào quá trình giao dịch",
      "B": "Người bán chính là người mua",
      "C": "Mục đích là chênh lệch giá",
      "D": "Hàng hóa chưa qua bất kỳ khâu chế biến nào"
    },
    "answer": "A",
    "explanation": "Giao dịch tái xuất (Re-export) về bản chất luôn có sự tham gia của ít nhất 3 bên: Người xuất khẩu ban đầu, Người kinh doanh tái xuất (ở giữa, vừa đóng vai trò người mua từ nước xuất khẩu vừa là người bán sang nước thứ ba), và Người nhập khẩu cuối cùng. Do đó nhận định 'Thường có 2 bên tham gia' là sai.",
    "pdf_no": 7
  },
  {
    "id": 8,
    "orig_no": "8",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu không phải là một loại hình mua bán tại sở giao dịch?",
    "options": {
      "A": "Nghiệp vụ bảo hiểm",
      "B": "Giao ngay",
      "C": "Giao dịch kỳ hạn",
      "D": "Hợp đồng quyền chọn"
    },
    "answer": "A",
    "explanation": "Các loại hình giao dịch mua bán hàng hóa tiêu chuẩn tại Sở giao dịch hàng hóa (Commodity Exchange) bao gồm: Giao dịch giao ngay (Spot), Giao dịch kỳ hạn (Forward), Hợp đồng tương lai (Futures), và Hợp đồng quyền chọn (Options). 'Nghiệp vụ bảo hiểm' chỉ là mục đích phòng ngừa rủi ro giá (Hedging) chứ không phải một loại hình hợp đồng mua bán tại sở giao dịch.",
    "pdf_no": 8
  },
  {
    "id": 9,
    "orig_no": "9",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu không phải là một trong những đặc điểm quan trọng nhất của du lịch quốc tế?",
    "options": {
      "A": "Là một hoạt động kinh tế chuyên ngành",
      "B": "Là một hoạt động kinh doanh dịch vụ",
      "C": "Là một ngành kinh tế có hiệu quả cao",
      "D": "Là ngành kinh tế chịu sự kiểm soát chặt chẽ của các nước trên thế giới"
    },
    "answer": "A",
    "explanation": "Du lịch quốc tế là một ngành kinh tế tổng hợp mang tính liên ngành sâu sắc (gắn liền với giao thông vận tải, lưu trú, ăn uống, văn hóa, tài chính ngân hàng), chứ không phải là một hoạt động kinh tế chuyên ngành đơn lẻ.",
    "pdf_no": 9
  },
  {
    "id": 10,
    "orig_no": "10",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu không phải là một ưu điểm của việc thành lập công ty con tại nước ngoài?",
    "options": {
      "A": "Khả năng cạnh tranh ban đầu cao do đã tính toán kỹ lưỡng rủi ro ban đầu",
      "B": "Khai thác được những lợi thế so sánh và có ưu thế hơn so với nước mình trên thị trường thế giới",
      "C": "Doanh nghiệp toàn quyền quyết định các hoạt động của mình không có sự tham gia của các đối tác khác",
      "D": "Lợi nhuận và những ưu thế có được trên thị trường không bị san sẻ"
    },
    "answer": "A",
    "explanation": "Khi thành lập công ty con tại nước ngoài (doanh nghiệp 100% vốn đầu tư nước ngoài), rào cản gia nhập thị trường rất lớn và doanh nghiệp phải tự gánh chịu toàn bộ chi phí ban đầu, nên khả năng cạnh tranh thời kỳ đầu thường rất khó khăn chứ không thể 'cao do đã tính toán kỹ'.",
    "pdf_no": 11
  },
  {
    "id": 11,
    "orig_no": "11",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu không phải là một ưu điểm của việc thành lập công ty liên doanh?",
    "options": {
      "A": "Là cửa chính để các doanh nghiệp tham gia vào thị trường nước ngoài, thông qua các công ty liên doanh của đối tác",
      "B": "Tận dụng nguồn lực sẵn có ở nước sở tại",
      "C": "Chia sẻ rủi ro trong quá trình kinh doanh, tạo ra sự cộng đồng trách nhiệm trong quá trình điều hành hoạt động của doanh nghiệp với đối tác của nước sở tại",
      "D": "Khai thác và tận dụng được các ưu đãi của nước chủ nhà để thâm nhập vào thị trường đối tượng"
    },
    "answer": "A",
    "explanation": "Công ty liên doanh (Joint Venture) là hình thức thành lập một pháp nhân mới do hai hoặc nhiều bên thuộc các quốc gia khác nhau cùng góp vốn, chia sẻ rủi ro, tận dụng tài nguyên nước sở tại và cùng quản lý. Phát biểu A dùng từ ngữ sai lệch về bản chất liên doanh.",
    "pdf_no": null
  },
  {
    "id": 12,
    "orig_no": "12",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu là một dạng của đại lý hoa hồng?",
    "options": {
      "A": "Đại lý gửi bán",
      "B": "Đại lý đảm bảo thanh toán",
      "C": "Đại lý độc quyền",
      "D": "Phắc tơ (Factor)"
    },
    "answer": "A",
    "explanation": "Đại lý gửi bán (Consignment agent) là hình thức phổ biến nhất của đại lý hoa hồng, theo đó bên giao đại lý gửi hàng cho bên đại lý để bán, bên đại lý nhận thù lao hoa hồng trên doanh số bán và không phải bỏ vốn mua đứt lô hàng.",
    "pdf_no": 12
  },
  {
    "id": 13,
    "orig_no": "13",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu là một loại đại lý được phép đứng tên mình bán hay cầm cố hàng hóa với giá cả mình cho là có lợi nhất cho người ủy thác?",
    "options": {
      "A": "Phắc tơ (Factor)",
      "B": "Đại lý gửi bán",
      "C": "Đại lý đảm bảo thanh toán",
      "D": "Đại lý độc quyền"
    },
    "answer": "A",
    "explanation": "Phắc tơ (Factor / Đại lý bao thanh toán - quản lý hàng) là thương nhân trung gian tài chính và ủy thác đặc biệt, được phép đứng tên chính mình bán hoặc cầm cố hàng hóa, quản lý sổ sách nợ và ứng trước tiền cho người ủy thác với giá cả có lợi nhất.",
    "pdf_no": 13
  },
  {
    "id": 14,
    "orig_no": "14",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Điều nào sau đây là sai khi nói về công ty đa quốc gia?",
    "options": {
      "A": "Một dạng mới của công ty đa quốc gia đang hình thành tương ứng với thương mại hóa là xí nghiệp liên hợp toàn cầu",
      "B": "Là khái niệm để chỉ các công ty sản xuất hay cung cấp dịch vụ ở ít nhất hai quốc gia",
      "C": "Các công ty đa quốc gia lớn có ngân sách vượt cả ngân sách của nhiều quốc gia",
      "D": "Công ty đa quốc gia có thể có ảnh hưởng lớn đến các mối quan hệ quốc tế và các nền kinh tế của các quốc gia"
    },
    "answer": "A",
    "explanation": "Công ty đa quốc gia (MNCs - Multinational Corporations) là doanh nghiệp có cơ sở sản xuất hoặc cung cấp dịch vụ tại ít nhất hai quốc gia, ngân sách lớn và chi phối chuỗi giá trị toàn cầu. Khái niệm 'xí nghiệp liên hợp toàn cầu tương ứng thương mại hóa' là sai lý thuyết quản trị kinh doanh quốc tế.",
    "pdf_no": 15
  },
  {
    "id": 15,
    "orig_no": "15",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Điều nào sau đây là sai khi nói về công ty xuyên quốc gia?",
    "options": {
      "A": "Các công ty mẹ con này không ảnh hưởng lẫn nhau và chỉ cùng chia sẻ kiến thức, nguồn lực và trách nhiệm lẫn nhau",
      "B": "Một công ty xuyên quốc gia là một doanh nghiệp được cấu thành bởi các thực thể ở ít nhất 2 nước",
      "C": "Các thực thể của công ty này hoạt động dưới một hệ thống ra quyết định chung và định hướng chiến lược phát triển chung",
      "D": "Công ty xuyên quốc gia bao gồm công ty mẹ ở một nước, và thực hiện các đầu tư FDI ra nước ngoài để hình thành các công ty con"
    },
    "answer": "A",
    "explanation": "Trong tập đoàn xuyên quốc gia (TNCs - Transnational Corporations), công ty mẹ và các công ty con tại các quốc gia liên kết chặt chẽ theo chiến lược toàn cầu thống nhất, chia sẻ công nghệ, R&D và chịu ảnh hưởng qua lại sâu sắc, không thể 'không ảnh hưởng lẫn nhau'.",
    "pdf_no": null
  },
  {
    "id": 16,
    "orig_no": "16",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Điều nào sau đây là sai khi nói về mua bán tại sở giao dịch?",
    "options": {
      "A": "Mua bán dựa vào hợp đồng riêng",
      "B": "Chủ yếu mua bán khống",
      "C": "Mục đích là ăn chênh lệch giá",
      "D": "Mua bán được thực hiện tại thị trường đặc biệt"
    },
    "answer": "A",
    "explanation": "Mua bán tại Sở giao dịch hàng hóa bắt buộc phải tuân theo Hợp đồng mẫu chuẩn hóa (Standardized Contract) của Sở về quy cách, phẩm chất, khối lượng và điều kiện giao nhận; các bên không được phép tự do thỏa thuận hợp đồng riêng.",
    "pdf_no": null
  },
  {
    "id": 17,
    "orig_no": "17",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Điều nào sau đây là sai khi nói về việc đặt các chi nhánh của doanh nghiệp ở nước ngoài?",
    "options": {
      "A": "Ở giai đoạn sau của hoạt động đầu tư trực tiếp vào thị trường đối tượng",
      "B": "Có thể có những rủi ro bởi vì hoạt động kinh doanh còn hạn chế về phạm vi, quyền hạn",
      "C": "Khai thác được lợi thế của thị trường đối tường",
      "D": "Chưa thực hiện toàn diện chiến lược trên thị trường đối tượng nên khả năng cạnh tranh còn hạn chế"
    },
    "answer": "A",
    "explanation": "Đặt chi nhánh (Branch) là bước đi ban đầu hoặc trung gian trong chiến lược thâm nhập thị trường trực tiếp, sau văn phòng đại diện và trước bước thành lập công ty con/công ty liên doanh độc lập.",
    "pdf_no": null
  },
  {
    "id": 18,
    "orig_no": "18",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Giá gia công không bao gồm yếu tố tạo thành nào sau đây?",
    "options": {
      "A": "Tiền bên nhận gia công bán sản phẩm",
      "B": "Tiền thù lao gia công",
      "C": "Chi phí nguyên liệu phụ",
      "D": "Chi phí mà bên nhận gia công phải ứng trước trong quá trình tiếp nhận nguyên liệu"
    },
    "answer": "A",
    "explanation": "Giá gia công (thù lao gia công) bao gồm: Tiền thù lao lao động, chi phí khấu hao máy móc thiết bị, chi phí nguyên phụ liệu phụ, và các chi phí tiếp nhận/vận chuyển mà bên nhận gia công ứng trước. Sản phẩm gia công thuộc sở hữu của bên đặt gia công nên không có việc 'bên nhận gia công bán sản phẩm'.",
    "pdf_no": null
  },
  {
    "id": 19,
    "orig_no": "19",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Kinh doanh tái xuất là gì?",
    "options": {
      "A": "Việc xuất khẩu hàng hóa đã nhập khẩu trước đây, chưa qua chế biến tại nước tái xuất, nhằm thu ngoại tệ lớn hơn chi phí nhập khẩu",
      "B": "Việc xuất khẩu hàng hóa được sản xuất hoàn toàn trong nước tái xuất để bán ra thị trường nước ngoài nhằm thu ngoại tệ",
      "C": "Việc nhập khẩu nguyên liệu để gia công sản xuất thành phẩm rồi đem bán ra thị trường nội địa trong nước",
      "D": "Việc chỉ thực hiện duy nhất một hợp đồng mua bán hàng hóa quốc tế cho toàn bộ quá trình giao dịch nhằm tái xuất hàng hóa đã nhập từ trước"
    },
    "answer": "A",
    "explanation": "Theo Điều 29 Luật Thương mại 2005: Tái xuất khẩu là việc xuất khẩu hàng hóa đã được nhập khẩu trước đó ra khỏi lãnh thổ Việt Nam mà chưa qua chế biến, nhằm mục đích thu về ngoại tệ lớn hơn chi phí đã bỏ ra để nhập khẩu.",
    "pdf_no": null
  },
  {
    "id": 20,
    "orig_no": "20",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Loại hình mua bán đối lưu nào mà một công ty xây dựng cơ sở sản xuất tại một quốc gia và đồng ý nhận một tỷ lệ phần trăm nhất định sản lượng của nhà máy làm khoản thanh toán một phần cho hợp đồng?",
    "options": {
      "A": "Mua lại sản phẩm",
      "B": "Mua đối lưu",
      "C": "Chuyển nợ",
      "D": "Giao dịch bồi hoàn"
    },
    "answer": "A",
    "explanation": "Mua lại sản phẩm (Buy-back / Product Buy-back agreement) là hình thức mua bán đối lưu trong đó bên xuất khẩu thiết bị/nhà máy đồng ý nhận lại khoản thanh toán (toàn bộ hoặc một phần) bằng chính các sản phẩm do nhà máy/thiết bị đó sản xuất ra.",
    "pdf_no": null
  },
  {
    "id": 21,
    "orig_no": "21",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Một cá nhân đứng ra kết nối giữa doanh nghiệp xuất khẩu và một nhà nhập khẩu nước ngoài, chỉ giúp đàm phán và ký kết hợp đồng để nhận thù lao, không đứng tên trên hợp đồng và không chịu trách nhiệm nếu hợp đồng không được thực hiện. Đây là vai trò nào?",
    "options": {
      "A": "Môi giới",
      "B": "Đại lý",
      "C": "Giao dịch tái xuất",
      "D": "Phắc tơ (Factor)"
    },
    "answer": "A",
    "explanation": "Theo Điều 150 Luật Thương mại 2005: Môi giới thương mại là hoạt động thương mại theo đó thương nhân làm trung gian (bên môi giới) cho các bên mua bán hàng hóa đàm phán, giao kết hợp đồng và được hưởng thù lao, bên môi giới không đứng tên trên hợp đồng và không chịu trách nhiệm về việc thực hiện hợp đồng của các bên.",
    "pdf_no": null
  },
  {
    "id": 22,
    "orig_no": "22",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Một công ty gửi thư cho đối tác đề nghị được biết giá cả và điều kiện mua một lô hàng, nhưng không cam kết sẽ mua hàng. Đây là bước nào trong quy trình giao dịch ngoại thương?",
    "options": {
      "A": "Hỏi hàng",
      "B": "Chào hàng",
      "C": "Hoàn giá",
      "D": "Xác nhận"
    },
    "answer": "A",
    "explanation": "Hỏi hàng (Inquiry) là việc người mua đề nghị người bán cho biết giá cả và các điều kiện thương mại để mua một lô hàng xác định. Lời hỏi hàng không có tính ràng buộc pháp lý và người hỏi hàng không cam kết bắt buộc phải mua.",
    "pdf_no": null
  },
  {
    "id": 23,
    "orig_no": "23",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Quy trình đấu giá được thực hiện theo trình tự nào sau đây?",
    "options": {
      "A": "Trưng bày hàng hóa được đấu giá, tiến hành mở đấu giá, phương thức đấu giá",
      "B": "Tiến hành mở đấu giá, trưng bày hàng hóa được đấu giá, phương thức đấu giá",
      "C": "Phương thức đấu giá, tiến hành mở đấu giá, trưng bày hàng hóa được đấu giá",
      "D": "Phương thức đấu giá, trưng bày hàng hóa được đấu giá, tiến hành mở đấu giá"
    },
    "answer": "A",
    "explanation": "Theo quy chuẩn tổ chức đấu giá thương mại quốc tế, trình tự tiến hành cuộc đấu giá gồm: Trưng bày/cho xem hàng hóa được đấu giá -> Tiến hành mở cuộc đấu giá -> Thực hiện phương thức đấu giá (trả giá tăng dần hoặc đặt giá giảm dần) và gõ búa tuyên bố người mua được hàng.",
    "pdf_no": null
  },
  {
    "id": 24,
    "orig_no": "24",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Theo FIDIC, tiến hành đấu thầu không bao gồm giai đoạn nào sau đây?",
    "options": {
      "A": "Ký hợp đồng",
      "B": "Sơ tuyển",
      "C": "Mời thầu",
      "D": "Mở thầu"
    },
    "answer": "B",
    "explanation": "Theo quy tắc Hiệp hội Quốc tế các Kỹ sư Tư vấn (FIDIC), quy trình tiến hành đấu thầu chính thức bao gồm: Mời thầu (Tendering) -> Nộp và Mở thầu (Opening) -> Đánh giá hồ sơ dự thầu -> Trao thầu và Ký kết hợp đồng. Giai đoạn Sơ tuyển (Prequalification) thuộc bước chuẩn bị đấu thầu.",
    "pdf_no": null
  },
  {
    "id": 25,
    "orig_no": "25",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Bước chuẩn bị đấu giá không bao gồm nội dung nào sau đây?",
    "options": {
      "A": "Cho người mua xem hàng",
      "B": "Thông báo",
      "C": "Chuẩn bị hàng hóa",
      "D": "Xây dựng thể lệ đấu giá"
    },
    "answer": "A",
    "explanation": "Giai đoạn chuẩn bị đấu giá bao gồm: Chuẩn bị hàng hóa, phân lô, xây dựng thể lệ/quy chế đấu giá, định giá khởi điểm và thông báo công khai cuộc đấu giá. Việc 'Cho người mua xem hàng/trưng bày hàng' diễn ra ngay trước giờ mở phiên đấu giá.",
    "pdf_no": null
  },
  {
    "id": 26,
    "orig_no": "26",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Cách sắp xếp đại lý nào sau đây là đúng theo mức độ ủy quyền giảm dần?",
    "options": {
      "A": "Đại lý hoa hồng, đại lý kinh tiêu",
      "B": "Đại lý đặc biệt, tổng đại lý",
      "C": "Tổng đại lý, đại lý đặc biệt",
      "D": "Đại lý kinh tiêu, đại lý hoa hồng"
    },
    "answer": "C",
    "explanation": "Một trong những nhược điểm lớn nhất của việc mua bán qua trung gian thương mại là doanh nghiệp xuất khẩu bị mất liên hệ trực tiếp với người tiêu dùng và giảm khả năng kiểm soát thị trường so với kênh phân phối trực tiếp.",
    "pdf_no": null
  },
  {
    "id": 27,
    "orig_no": "27",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đại lý bảo hiểm là loại đại lý nào?",
    "options": {
      "A": "Đại lý đặc biệt",
      "B": "Đại lý toàn quyền",
      "C": "Tổng đại lý",
      "D": "Đại lý thường"
    },
    "answer": "D",
    "explanation": "Chuẩn bị đấu thầu là công việc của bên mời thầu (lập hồ sơ mời thầu, dự toán, tiêu chuẩn đánh giá, thông báo mời thầu). 'Nộp hồ sơ dự thầu' là hành động của các nhà thầu tham gia khi nhận được thông báo mời thầu.",
    "pdf_no": null
  },
  {
    "id": 28,
    "orig_no": "28",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu không phải là một bước tiến hành giao dịch tại sở giao dịch?",
    "options": {
      "A": "Ký hợp đồng và đăng ký hợp đồng tại nơi hai bên chọn",
      "B": "Ủy thác cho môi giới của sở giao dịch mua bán tại sở giao dịch hàng hóa",
      "C": "Môi giới ra đài tiến hành giao dịch",
      "D": "Công bố giá hợp đồng đã ký"
    },
    "answer": "C",
    "explanation": "Tại sàn giao dịch hàng hóa, quy trình bắt đầu từ khách hàng gửi lệnh cho người môi giới -> Môi giới ra đài (khu vực khớp lệnh) tiến hành giao dịch theo phương thức đấu giá mở -> Ký kết hợp đồng giao dịch và công bố giá khớp trên bảng điện tử.",
    "pdf_no": null
  },
  {
    "id": 29,
    "orig_no": "29",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Đâu không phải là một điều khoản bắt buộc phải có trong hợp đồng gia công?",
    "options": {
      "A": "Điều khoản về bán sản phẩm",
      "B": "Định mức",
      "C": "Cách giải quyết đối với thiết bị và nguyên liệu thừa",
      "D": "Nhãn hiệu kiểu dáng sản phẩm"
    },
    "answer": "A",
    "explanation": "Theo quy định pháp luật về gia công thương mại, hợp đồng gia công bắt buộc phải có các điều khoản về: Tên hàng, số lượng, định mức nguyên liệu, thù lao gia công, cách giải quyết nguyên vật liệu thừa, nhãn hiệu bao bì. 'Điều khoản về bán sản phẩm' không bắt buộc vì thành phẩm thuộc quyền sở hữu của bên đặt gia công.",
    "pdf_no": null
  },
  {
    "id": 30,
    "orig_no": "30",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Điền từ còn thiếu theo thứ tự vào khái niệm theo Luật Thương mại 2005 sau: \"Đại lý thương mại là hoạt động thương mại, theo đó bên ___ và bên đại lý thỏa thuận việc bên đại lý ___ chính mình mua, bán hàng hóa\"",
    "options": {
      "A": "giao đại lý, nhân danh",
      "B": "người ủy thác, đại diện",
      "C": "giao đại lý, đại diện",
      "D": "người ủy thác, nhân danh"
    },
    "answer": "A",
    "explanation": "Theo Điều 166 Luật Thương mại 2005: 'Đại lý thương mại là hoạt động thương mại, theo đó bên giao đại lý và bên đại lý thoả thuận việc bên đại lý nhân danh chính mình mua, bán hàng hoá cho bên giao đại lý hoặc cung ứng dịch vụ của bên giao đại lý đến khách hàng để hưởng thù lao'.",
    "pdf_no": null
  },
  {
    "id": 31,
    "orig_no": "31",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Điền từ còn thiếu theo thứ tự vào khái niệm xuất nhập khẩu trực tiếp sau: \"Các doanh nghiệp trực tiếp tiến hành trao đổi hàng hóa với đối tác nước ngoài nhằm khai thác lợi thế ___ giữa các quốc gia, nâng cao ___ trong hoạt động kinh doanh\"",
    "options": {
      "A": "so sánh, lợi nhuận",
      "B": "kinh tế theo quy mô, doanh số",
      "C": "so sánh, doanh số",
      "D": "kinh tế theo quy mô, lợi nhuận"
    },
    "answer": "A",
    "explanation": "Xuất nhập khẩu trực tiếp là phương thức trao đổi hàng hóa trực tiếp giữa doanh nghiệp trong nước với khách hàng nước ngoài nhằm khai thác tối đa lợi thế so sánh (Comparative Advantage) quốc gia và tối ưu hóa lợi nhuận kinh doanh.",
    "pdf_no": null
  },
  {
    "id": 32,
    "orig_no": "32",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Điều kiện nào sau đây phải được đảm bảo để chấp nhận ký kết hợp đồng theo pháp luật Việt Nam?",
    "options": {
      "A": "Phải được truyền đạt đến người đề nghị ký hợp đồng",
      "B": "Phải được chính người giao đề nghị kí hợp đồng phát ra",
      "C": "Phải là sự động ý hoàn toàn và có điều kiện",
      "D": "Phải được thực hiện trong thời gian hiệu lực của đề nghị chào hàng"
    },
    "answer": "A",
    "explanation": "Theo Điều 393 Bộ luật Dân sự 2015 và CISG 1980, chấp nhận giao kết hợp đồng chỉ có hiệu lực pháp lý khi nó được truyền đạt và thông báo đến người đề nghị trong thời hạn quy định.",
    "pdf_no": null
  },
  {
    "id": 33,
    "orig_no": "33",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Điều nào sau đây là đúng khi nói về đấu thầu kiểu hai phong bì hai giai đoạn?",
    "options": {
      "A": "Phong bì hồ sơ kỹ thuật sơ bộ sẽ được bóc để xem xét trước",
      "B": "Phong bì hồ sơ kỹ thuật hoàn chỉnh sẽ được bóc để xem xét trước",
      "C": "Phong bì hồ sơ tài chính sơ bộ sẽ được bóc để xem xét trước",
      "D": "Phong bì hồ sơ tài chính hoàn chỉnh sẽ được bóc để xem xét trước"
    },
    "answer": "A",
    "explanation": "Trong phương thức đấu thầu hai giai đoạn hai túi hồ sơ, ở giai đoạn 1, bên mời thầu sẽ mở phong bì hồ sơ đề xuất kỹ thuật sơ bộ để xem xét, thảo luận và đánh giá trước mà chưa mở hồ sơ đề xuất tài chính.",
    "pdf_no": null
  },
  {
    "id": 34,
    "orig_no": "34",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Điều nào sau đây là sai khi nói về đại lý?",
    "options": {
      "A": "Bên đại lý là người chủ sở hữu về hàng hóa hay tiền tệ đã được giao cho người ủy thác",
      "B": "Đại lý là thương nhân tiến hành một hay nhiều hành vi theo sự ủy thác của người ủy thác",
      "C": "Phí đại lý là một khoản tiền cố định hoặc tỷ lệ phần trăm so với doanh số bán hàng",
      "D": "Đại lý đứng tên trong hợp đồng và mối quan hệ giữa người ủy thác và đại lý là mối quan hệ dài hạn"
    },
    "answer": "A",
    "explanation": "Theo pháp luật thương mại, bên đại lý chỉ nắm giữ hàng hóa để thực hiện việc mua bán theo ủy thác, quyền sở hữu hàng hóa vẫn thuộc về bên giao đại lý cho đến khi hàng hóa được chuyển giao hợp pháp cho người mua.",
    "pdf_no": null
  },
  {
    "id": 35,
    "orig_no": "35",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Giai đoạn mở thầu thường kéo dài trong khoảng bao nhiêu tháng?",
    "options": {
      "A": "3-6",
      "B": "1-3",
      "C": "6-9",
      "D": ". 9-12"
    },
    "answer": "A",
    "explanation": "Trong các dự án đấu thầu mua sắm quốc tế quy mô lớn, khoảng thời gian từ khi phát hành hồ sơ mời thầu đến khi kết thúc mở thầu và chấm thầu giai đoạn mở thầu thường kéo dài từ 3 đến 6 tháng để các nhà thầu chuẩn bị và nộp hồ sơ.",
    "pdf_no": null
  },
  {
    "id": 36,
    "orig_no": "36",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Một cơ quan nhà nước công bố công khai điều kiện một dự án xây dựng để tất cả các nhà thầu quan tâm đều có thể tham gia nộp hồ sơ dự thầu mà không giới hạn số lượng. Đây là hình thức đấu thầu nào?",
    "options": {
      "A": "Đấu thầu mở rộng",
      "B": "Đấu thầu hạn chế",
      "C": "Đấu thầu riêng lẻ",
      "D": "Đấu thầu sơ tuyển"
    },
    "answer": "A",
    "explanation": "Đấu thầu mở rộng (Đấu thầu rộng rãi - Open Bidding) là hình thức đấu thầu không hạn chế số lượng nhà thầu tham gia; bên mời thầu công khai thông báo rộng rãi trên các phương tiện thông tin đại chúng.",
    "pdf_no": null
  },
  {
    "id": 37,
    "orig_no": "37",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Một công ty xuất khẩu dịch vụ của mình sang một công ty nước ngoài, đồng thời đồng ý mua thêm hàng hóa từ chính công ty nước ngoài đó như một phần thỏa thuận trong 1 năm. Đây là hình thức mua bán đối lưu nào?",
    "options": {
      "A": "Mua đối lưu",
      "B": "Đổi hàng",
      "C": "Bù trừ",
      "D": "Mua lại sản phẩm"
    },
    "answer": "A",
    "explanation": "Mua đối lưu (Counter-purchase) là hình thức thỏa thuận hai bên trong đó bên xuất khẩu bán hàng hóa/dịch vụ cho bên nhập khẩu, đồng thời cam kết mua lại một lượng hàng hóa khác của bên nhập khẩu trong một thời hạn nhất định (thường từ 1 đến 5 năm) qua hai hợp đồng riêng biệt.",
    "pdf_no": null
  },
  {
    "id": 38,
    "orig_no": "38",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Một doanh nghiệp ký hợp đồng với một thương nhân nước ngoài, theo đó thương nhân này nhân danh chính mình bán hàng cho khách hàng và hưởng khoản chênh lệch giữa giá mua và giá bán lại. Thương nhân này thuộc loại đại lý nào theo mức độ ủy quyền?",
    "options": {
      "A": "Đại lý kinh tiêu",
      "B": "Đại lý thụ ủy",
      "C": "Đại lý hoa hồng",
      "D": "Đại lý đặc biệt"
    },
    "answer": "A",
    "explanation": "Đại lý kinh tiêu (Merchant Dealer) nhân danh chính mình mua bán hàng hóa và hưởng khoản chênh lệch giữa giá mua vào và giá bán ra cho khách hàng.",
    "pdf_no": null
  },
  {
    "id": 39,
    "orig_no": "39",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Một doanh nghiệp vừa mở rộng thị trường sang nước ngoài, quyết định thuê văn phòng chỉ để nghiên cứu thị trường, tư vấn khách hàng tiềm năng mà chưa trực tiếp bán hàng tại đó. Đây là hình thức tham gia thị trường nào?",
    "options": {
      "A": "Đặt văn phòng đại diện tại nước ngoài",
      "B": "Thành lập công ty con tại nước ngoài",
      "C": "Thành lập công ty liên doanh",
      "D": "Xuất nhập khẩu qua trung gian là đại lý"
    },
    "answer": "A",
    "explanation": "Văn phòng đại diện (Representative Office) ở nước ngoài là đơn vị phụ thuộc của thương nhân, có nhiệm vụ nghiên cứu thị trường, xúc tiến thương mại và tư vấn khách hàng, không được trực tiếp thực hiện hoạt động sinh lợi (không trực tiếp ký hợp đồng mua bán).",
    "pdf_no": null
  },
  {
    "id": 40,
    "orig_no": "40",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Nguyên tắc lựa chọn người thắng đấu thầu quốc tế nào sau đây là đúng?",
    "options": {
      "A": "Một trong những chỉ tiêu là chọn người có điều kiện thuận lợi nhất",
      "B": "Khả năng thắng thầu chỉ phụ thuộc vào rất nhiều yếu tố tích cực mang lại",
      "C": "Thông thường người có điểm cao nhất là người thắng thầu",
      "D": "Hội đồng công bố người thắng và giải thích cho những người còn lại lý do không thắng"
    },
    "answer": "C",
    "explanation": "Theo quy chế đấu thầu quốc tế, sau khi tổng hợp điểm kỹ thuật và điểm tài chính theo thang điểm chuẩn trong hồ sơ mời thầu, nhà thầu đạt tổng điểm đánh giá cao nhất (hoặc giá đánh giá thấp nhất đạt chuẩn kỹ thuật) sẽ là người thắng thầu.",
    "pdf_no": null
  },
  {
    "id": 41,
    "orig_no": "41",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Theo đấu thầu kiểu hai phong bì, điểm kỹ thuật phải đạt từ bao nhiêu trở lên?",
    "options": {
      "A": "70%",
      "B": "60%",
      "C": "80%",
      "D": "90%"
    },
    "answer": "A",
    "explanation": "Theo thông lệ quốc tế và quy chế đấu thầu hai phong bì, hồ sơ đề xuất kỹ thuật của nhà thầu phải đạt tối thiểu từ 70% tổng số điểm kỹ thuật trở lên mới được xem xét mở tiếp phong bì đề xuất tài chính.",
    "pdf_no": null
  },
  {
    "id": 42,
    "orig_no": "42",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Theo Luật Thương mại 2005, khái niệm các hoạt động trung gian thương mại không nhắc đến:",
    "options": {
      "A": "đại diện cho cá nhân",
      "B": "môi giới thương mại",
      "C": "ủy thác mua bán hàng hóa",
      "D": "đại lý thương mại"
    },
    "answer": "A",
    "explanation": "Chương V Luật Thương mại 2005 quy định 4 hoạt động trung gian thương mại: (1) Đại diện cho thương nhân; (2) Môi giới thương mại; (3) Ủy thác mua bán hàng hóa; (4) Đại lý thương mại. Luật không có khái niệm 'đại diện cho cá nhân' trong hoạt động thương mại.",
    "pdf_no": null
  },
  {
    "id": 43,
    "orig_no": "43",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Tòa thánh Vatican là chủ thể nào trong giao dịch thương mại?",
    "options": {
      "A": "Quốc gia",
      "B": "Doanh nghiệp",
      "C": "Tổ chức phi chính phủ",
      "D": "Tổ chức quốc tế"
    },
    "answer": "A",
    "explanation": "Tòa thánh Vatican (Holy See) là một thực thể độc lập có chủ quyền được công nhận theo công pháp quốc tế, tham gia vào các quan hệ quốc tế với tư cách là một quốc gia/chủ thể đặc biệt.",
    "pdf_no": null
  },
  {
    "id": 44,
    "orig_no": "44",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Trình tự nào sau đây là đúng khi nói về sự tự chủ và sự hoàn thiện tăng lên giữa các hình thức công ty nước ngoài?",
    "options": {
      "A": "Văn phòng đại diện, chi nhánh, công ty con",
      "B": "Chi nhánh, văn phòng đại diện, công ty con",
      "C": "Văn phòng đại diện, công ty con, chi nhánh",
      "D": "Công ty con, văn phòng đại diện, chi nhánh"
    },
    "answer": "A",
    "explanation": "Mức độ tự chủ và hoàn thiện pháp lý tăng dần từ thấp đến cao: Văn phòng đại diện (chỉ nghiên cứu, xúc tiến) -> Chi nhánh (được thực hiện hoạt động kinh doanh nhưng không có tư cách pháp nhân riêng) -> Công ty con (pháp nhân độc lập có vốn, tài sản và tự chịu trách nhiệm).",
    "pdf_no": null
  },
  {
    "id": 45,
    "orig_no": "45",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Trong thư tín thương mại, đưa ra câu hỏi và yêu cầu cụ thể để hỏi hàng nằm ở sau phần nào?",
    "options": {
      "A": "Lý do mà bạn biết đến đối tác này",
      "B": "Lời chào đầu thư hỏi hàng",
      "C": "Giới thiệu về doanh nghiệp của bạn",
      "D": "Lời cảm ơn"
    },
    "answer": "C",
    "explanation": "Cấu trúc chuẩn của một bức thư hỏi hàng (Letter of Inquiry): (1) Lời chào; (2) Nêu lý do biết đến công ty; (3) Giới thiệu tóm tắt về doanh nghiệp mình; (4) Đưa ra yêu cầu cụ thể về chủng loại, giá cả, điều kiện giao hàng; (5) Lời cảm ơn và mong đợi hồi âm.",
    "pdf_no": null
  },
  {
    "id": 46,
    "orig_no": "46",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Trường hợp nào không nên sử dụng trung gian tham gia vào thị trường quốc tế?",
    "options": {
      "A": "Công ty mở chi nhánh mới ở nước ngoài, nơi mà trước đây doanh nghiệp đã bán qua mạng",
      "B": "Công ty lần đầu tiên bán điện thoại ở nước ngoài mà không tìm được thông tin về thị trường ngách",
      "C": "Công ty thử mở rộng sang thị trường nước ngoài với số vốn hạn chế và hàng hóa không nhiều",
      "D": "Công ty bắt buộc phải xuất khẩu một lượng gạo nhất định theo chính sách của chính phủ"
    },
    "answer": "A",
    "explanation": "Khi doanh nghiệp đã chính thức thành lập chi nhánh trực tiếp tại nước sở tại và đã có cơ sở khách hàng sẵn có qua mạng, việc sử dụng thêm trung gian thương mại sẽ làm tăng chi phí phân phối và chồng chéo kênh bán hàng.",
    "pdf_no": null
  },
  {
    "id": 47,
    "orig_no": "47",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "Vì sao xuất khẩu thông qua du lịch quốc tế được xem là \"xuất khẩu tại chỗ\" có lợi hơn xuất khẩu ngoại thương thông thường?",
    "options": {
      "A": "Vì hàng hóa được bán theo giá bán lẻ và ít tốn chi phí đóng gói, bảo quản hơn",
      "B": "Vì hàng hóa luôn được bán với giá thấp hơn nhiều so với giá bán buôn thông thường",
      "C": "Vì không cần phải đảm bảo chất lượng hàng hóa theo bất kỳ tiêu chuẩn xuất khẩu nào",
      "D": "Vì chi phí vận chuyển quốc tế và bảo hiểm hàng hóa luôn cao hơn xuất khẩu ngoại thương"
    },
    "answer": "A",
    "explanation": "Xuất khẩu tại chỗ qua du lịch quốc tế mang lại hiệu quả kinh tế rất cao vì: Hàng hóa được bán trực tiếp cho khách du lịch theo giá bán lẻ, thu ngoại tệ ngay tại chỗ, tiết kiệm tối đa chi phí vận chuyển quốc tế, bao bì đóng gói đường biển và thủ tục hải quan phức tạp.",
    "pdf_no": null
  },
  {
    "id": 48,
    "orig_no": "48",
    "chapter_id": 1,
    "chapter": "Chương 1: Các phương thức giao dịch thương mại quốc tế chủ yếu",
    "question": "WCO là chủ thể nào trong giao dịch thương mại quốc tế?",
    "options": {
      "A": "Tổ chức quốc tế",
      "B": "Doanh nghiệp",
      "C": "Quốc gia",
      "D": "Tổ chức phi chính phủ"
    },
    "answer": "A",
    "explanation": "WCO (World Customs Organization - Tổ chức Hải quan Thế giới) là một tổ chức liên chính phủ quốc tế độc lập, chuyên nghiên cứu chuẩn hóa các quy tắc phân loại hàng hóa (hệ thống HS), thủ tục hải quan và an ninh thương mại toàn cầu.",
    "pdf_no": 16
  },
  {
    "id": 49,
    "orig_no": "49",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "CIF được sử dụng cho phương thức vận tải nào?",
    "options": {
      "A": "Đường biển và đường thủy nội địa.",
      "B": "Đường hàng không.",
      "C": "Mọi phương thức vận tải.",
      "D": "Đường bộ."
    },
    "answer": "A",
    "explanation": "Theo Incoterms® 2020, CIF (Cost, Insurance and Freight) là điều kiện chỉ áp dụng riêng cho phương thức vận tải đường biển và đường thủy nội địa.",
    "pdf_no": 17
  },
  {
    "id": 50,
    "orig_no": "50",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "CIP là viết tắt của thuật ngữ nào?",
    "options": {
      "A": "Carriage and Insurance Paid To.",
      "B": "Cost Insurance Paid.",
      "C": "Carriage International Paid.",
      "D": "Cargo Insurance Paid."
    },
    "answer": "A",
    "explanation": "CIP là viết tắt của 'Carriage and Insurance Paid To' (Cước phí và bảo hiểm trả tới...), áp dụng cho mọi phương thức vận tải, kể cả vận tải đa phương thức.",
    "pdf_no": null
  },
  {
    "id": 51,
    "orig_no": "51",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Công ty A bán CPT Paris. A đã giao hàng đúng quy định cho người chuyên chở tại Hà Nội, sau đó hàng bị hư hỏng trên đường tới Paris. Theo nguyên tắc của CPT, rủi ro thuộc về ai?",
    "options": {
      "A": "Người bán.",
      "B": "Ngân hàng.",
      "C": "Cơ quan hải quan.",
      "D": "Người mua."
    },
    "answer": "D",
    "explanation": "Theo CPT (Carriage Paid To), rủi ro về mất mát hoặc hư hỏng hàng hóa được chuyển từ người bán sang người mua ngay khi người bán giao hàng cho người chuyên chở (carrier) đầu tiên được chỉ định tại nơi đi (Hà Nội). Khi hàng bị hư hỏng trên đường tới Paris, rủi ro thuộc về người mua.",
    "pdf_no": 18
  },
  {
    "id": 52,
    "orig_no": "52",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "CPT có thể được sử dụng cho:",
    "options": {
      "A": "Mọi phương thức vận tải.",
      "B": "Chỉ đường hàng không.",
      "C": "Chỉ đường biển.",
      "D": "Chỉ đường thủy nội địa."
    },
    "answer": "A",
    "explanation": "CPT là điều kiện thuộc nhóm vận tải đa phương thức, có thể sử dụng cho mọi phương thức vận tải (đường bộ, đường sắt, đường hàng không, đường biển, vận tải kết hợp).",
    "pdf_no": null
  },
  {
    "id": 53,
    "orig_no": "53",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "CPT là viết tắt của thuật ngữ nào?",
    "options": {
      "A": "Carriage Paid To.",
      "B": "Cost Paid To.",
      "C": "Cargo Paid Transport.",
      "D": "Commercial Paid Transport."
    },
    "answer": "A",
    "explanation": "CPT là viết tắt của thuật ngữ 'Carriage Paid To' theo Incoterms®.",
    "pdf_no": null
  },
  {
    "id": 54,
    "orig_no": "54",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "DAP là viết tắt của thuật ngữ nào?",
    "options": {
      "A": "Delivery At Point.",
      "B": "Delivery Alongside Port.",
      "C": "Delivered At Port.",
      "D": "Delivered At Place."
    },
    "answer": "D",
    "explanation": "DAP là viết tắt của thuật ngữ 'Delivered At Place' (Giao tại nơi đến) theo Incoterms®.",
    "pdf_no": 19
  },
  {
    "id": 55,
    "orig_no": "55",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "DDP là viết tắt của thuật ngữ nào?",
    "options": {
      "A": "Delivered Destination Paid.",
      "B": "Delivered Duty Paid.",
      "C": "Delivery Duty Point.",
      "D": "Delivered Duty Paid Place."
    },
    "answer": "B",
    "explanation": "DDP là viết tắt của thuật ngữ 'Delivered Duty Paid' (Giao đã nộp thuế) theo Incoterms®.",
    "pdf_no": 20
  },
  {
    "id": 56,
    "orig_no": "56",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Điểm khác biệt nổi bật giữa DAP và DDP là gì?",
    "options": {
      "A": "DAP không có vận tải quốc tế.",
      "B": "DAP chỉ dùng đường biển.",
      "C": "DDP bắt buộc người bán dỡ hàng.",
      "D": "Trách nhiệm thực hiện thủ tục nhập khẩu."
    },
    "answer": "D",
    "explanation": "Khác biệt cốt lõi: Theo DAP, người mua có nghĩa vụ làm thủ tục nhập khẩu và nộp thuế nhập khẩu; còn theo DDP, người bán có nghĩa vụ làm thủ tục thông quan nhập khẩu và nộp thuế nhập khẩu.",
    "pdf_no": 21
  },
  {
    "id": 57,
    "orig_no": "57",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Điểm khác biệt nổi bật giữa DAP và DPU là gì?",
    "options": {
      "A": "Phương thức vận tải.",
      "B": "Bên thuê vận tải chính.",
      "C": "Bên làm thủ tục xuất khẩu.",
      "D": "Nghĩa vụ dỡ hàng tại nơi đến."
    },
    "answer": "D",
    "explanation": "Khác biệt lớn nhất giữa DAP và DPU: Theo DAP, người bán giao hàng trên phương tiện vận tải đến, sẵn sàng để dỡ (người mua dỡ hàng); còn theo DPU, người bán bắt buộc phải hoàn thành việc dỡ hàng xuống khỏi phương tiện vận tải tại nơi đến thỏa thuận.",
    "pdf_no": 22
  },
  {
    "id": 58,
    "orig_no": "58",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Điểm khác biệt quan trọng giữa CPT và CIP là gì?",
    "options": {
      "A": "Phương thức vận tải.",
      "B": "Nghĩa vụ xuất khẩu.",
      "C": "Nghĩa vụ bảo hiểm của người bán.",
      "D": "Điểm giao hàng."
    },
    "answer": "C",
    "explanation": "Khác biệt cốt lõi: Theo CPT, người bán không có nghĩa vụ mua bảo hiểm; còn theo CIP, người bán bắt buộc phải mua bảo hiểm cho hàng hóa (theo Incoterms 2020, CIP yêu cầu bảo hiểm loại A - mọi rủi ro Institute Cargo Clauses A).",
    "pdf_no": 23
  },
  {
    "id": 59,
    "orig_no": "59",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Điểm nổi bật nhất của DPU là gì?",
    "options": {
      "A": "Người mua thuê toàn bộ vận tải.",
      "B": "Người mua phải dỡ hàng.",
      "C": "Người bán phải làm thủ tục nhập khẩu.",
      "D": "Người bán phải dỡ hàng tại địa điểm đến thỏa thuận."
    },
    "answer": "D",
    "explanation": "DPU (Delivered at Place Unloaded - điều kiện duy nhất thay thế DAT của Incoterms 2010) yêu cầu người bán phải dỡ hàng khỏi phương tiện vận tải tại nơi đến chỉ định.",
    "pdf_no": null
  },
  {
    "id": 60,
    "orig_no": "60",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Điều kiện nào sau đây không bắt buộc người bán thu xếp bảo hiểm?",
    "options": {
      "A": "CIP.",
      "B": "CIF.",
      "C": "Cả CIF và CIP.",
      "D": "CFR."
    },
    "answer": "D",
    "explanation": "Trong Incoterms 2020, chỉ có 2 điều kiện bắt buộc người bán phải thu xếp bảo hiểm là CIF và CIP. CFR (Cost and Freight) người bán không có nghĩa vụ mua bảo hiểm, việc mua bảo hiểm do người mua tự quyết định.",
    "pdf_no": 24
  },
  {
    "id": 61,
    "orig_no": "61",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Điều kiện nào thể hiện mức nghĩa vụ tương đối thấp nhất của người bán?",
    "options": {
      "A": "DAP.",
      "B": "DDP.",
      "C": "EXW.",
      "D": "FCA."
    },
    "answer": "C",
    "explanation": "EXW (Ex Works - Giao tại xưởng) thể hiện mức nghĩa vụ tối thiểu (thấp nhất) của người bán: người bán chỉ cần đặt hàng dưới quyền định đoạt của người mua tại cơ sở của mình, không phải bốc hàng lên xe và không phải làm thủ tục xuất khẩu.",
    "pdf_no": 25
  },
  {
    "id": 62,
    "orig_no": "62",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "FAS là viết tắt của thuật ngữ nào?",
    "options": {
      "A": "Free Alongside Ship.",
      "B": "Free At Ship.",
      "C": "Freight At Sea.",
      "D": "Freight Alongside Ship."
    },
    "answer": "A",
    "explanation": "FAS là viết tắt của 'Free Alongside Ship' (Giao dọc mạn tàu), chỉ áp dụng cho vận tải đường biển và đường thủy nội địa.",
    "pdf_no": null
  },
  {
    "id": 63,
    "orig_no": "63",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "FCA là viết tắt của thuật ngữ nào?",
    "options": {
      "A": "Freight Cost Arrangement.",
      "B": "Freight Carrier Arrangement.",
      "C": "Free Cargo Arrival.",
      "D": "Free Carrier."
    },
    "answer": "D",
    "explanation": "FCA là viết tắt của 'Free Carrier' (Giao cho người chuyên chở), áp dụng cho mọi phương thức vận tải.",
    "pdf_no": null
  },
  {
    "id": 64,
    "orig_no": "64",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "FOB là viết tắt của thuật ngữ nào?",
    "options": {
      "A": "Free Over Border.",
      "B": "Freight Over Border.",
      "C": "Freight On Board.",
      "D": "Free On Board."
    },
    "answer": "D",
    "explanation": "FOB là viết tắt của 'Free On Board' (Giao trên tàu), chỉ áp dụng cho vận tải đường biển và đường thủy nội địa.",
    "pdf_no": null
  },
  {
    "id": 65,
    "orig_no": "65",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Incoterms® 2020 chia các điều kiện thương mại thành bao nhiêu nhóm xét theo phương thức vận tải áp dụng?",
    "options": {
      "A": "4 nhóm.",
      "B": "2 nhóm.",
      "C": "3 nhóm.",
      "D": "5 nhóm."
    },
    "answer": "B",
    "explanation": "Incoterms® 2020 phân chia 11 điều kiện thương mại thành 2 nhóm chính xét theo phương thức vận tải: (1) Nhóm áp dụng cho mọi phương thức vận tải (7 điều kiện: EXW, FCA, CPT, CIP, DAP, DPU, DDP); (2) Nhóm chỉ áp dụng cho vận tải biển và thủy nội địa (4 điều kiện: FAS, FOB, CFR, CIF).",
    "pdf_no": 26
  },
  {
    "id": 66,
    "orig_no": "66",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Incoterms® không thể thay thế nội dung nào sau đây?",
    "options": {
      "A": "Việc xác định điểm giao hàng.",
      "B": "Hợp đồng mua bán hàng hóa giữa các bên.",
      "C": "Việc xác định một số nghĩa vụ vận tải.",
      "D": "Việc phân chia một số chi phí."
    },
    "answer": "B",
    "explanation": "Incoterms® chỉ là tập quán thương mại quốc tế điều chỉnh việc phân chia nghĩa vụ, chi phí và rủi ro giao nhận hàng hóa giữa người mua và người bán, không thể thay thế cho bản hợp đồng mua bán hàng hóa hoàn chỉnh.",
    "pdf_no": 27
  },
  {
    "id": 67,
    "orig_no": "67",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Incoterms® không trực tiếp quy định nội dung nào sau đây?",
    "options": {
      "A": "Thời điểm chuyển quyền sở hữu hàng hóa.",
      "B": "Phân chia một số chi phí.",
      "C": "Điểm giao hàng.",
      "D": "Điểm chuyển rủi ro."
    },
    "answer": "A",
    "explanation": "Incoterms® không trực tiếp điều chỉnh thời điểm chuyển quyền sở hữu hàng hóa, việc vi phạm hợp đồng hay hậu quả của việc vi phạm hợp đồng (những vấn đề này do luật áp dụng và thỏa thuận trong hợp đồng điều chỉnh).",
    "pdf_no": 28
  },
  {
    "id": 68,
    "orig_no": "68",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Incoterms® không trực tiếp xác định nội dung nào sau đây của hợp đồng mua bán?",
    "options": {
      "A": "Phân chia một số chi phí.",
      "B": "Một số nghĩa vụ liên quan đến vận tải.",
      "C": "Nghĩa vụ thông quan theo từng điều kiện.",
      "D": "Chất lượng hàng hóa."
    },
    "answer": "D",
    "explanation": "Incoterms® không trực tiếp quy định về phẩm chất, quy cách, chất lượng hàng hóa hay giá cả hàng hóa, mà các nội dung này phải do các bên quy định rõ trong hợp đồng mua bán.",
    "pdf_no": null
  },
  {
    "id": 69,
    "orig_no": "69",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Incoterms® là viết tắt của cụm từ nào sau đây?",
    "options": {
      "A": "International Customs Terms.",
      "B": "International Commerce Rules.",
      "C": "International Contract Terms.",
      "D": "International Commercial Terms."
    },
    "answer": "D",
    "explanation": "Incoterms® là viết tắt của cụm từ 'International Commercial Terms' (Các điều kiện thương mại quốc tế) do Phòng Thương mại Quốc tế (ICC) ban hành.",
    "pdf_no": 29
  },
  {
    "id": 70,
    "orig_no": "70",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Khác biệt quan trọng giữa CFR và CIF là gì?",
    "options": {
      "A": "Trách nhiệm làm thủ tục xuất khẩu.",
      "B": "Điểm giao hàng.",
      "C": "Nghĩa vụ thu xếp bảo hiểm của người bán.",
      "D": "Phương thức vận tải."
    },
    "answer": "C",
    "explanation": "Khác biệt duy nhất giữa CFR và CIF là nghĩa vụ bảo hiểm: Trong CFR, người bán không phải mua bảo hiểm; trong CIF, người bán bắt buộc phải mua bảo hiểm hàng hải cho lô hàng (tối thiểu loại C).",
    "pdf_no": 30
  },
  {
    "id": 71,
    "orig_no": "71",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một hợp đồng sử dụng Incoterms® 2020 vẫn cần quy định riêng về nội dung nào sau đây?",
    "options": {
      "A": "Phạm vi phương thức vận tải của điều kiện.",
      "B": "Điểm chuyển rủi ro nếu Incoterms đã xác định.",
      "C": "Thanh toán.",
      "D": "Nghĩa vụ giao hàng nếu không sửa đổi."
    },
    "answer": "C",
    "explanation": "Incoterms® không điều chỉnh phương thức, thời hạn và đồng tiền thanh toán; do đó các bên bắt buộc phải quy định điều khoản thanh toán riêng trong hợp đồng.",
    "pdf_no": 31
  },
  {
    "id": 72,
    "orig_no": "72",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một lô hàng rời được vận chuyển bằng tàu biển. Người mua thuê tàu và người bán phải đưa hàng dọc mạn tàu tại cảng xếp. Điều kiện nào phù hợp?",
    "options": {
      "A": "FOB.",
      "B": "CFR.",
      "C": "FAS.",
      "D": "CPT."
    },
    "answer": "C",
    "explanation": "Hàng rời đi đường biển, người mua thuê tàu, người bán đưa hàng đặt dọc mạn tàu tại cảng xếp thỏa thuận phù hợp chính xác với điều kiện FAS (Free Alongside Ship).",
    "pdf_no": 32
  },
  {
    "id": 73,
    "orig_no": "73",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Nếu người bán trong tình huống trên còn phải thu xếp bảo hiểm theo Incoterms®, điều kiện nào phù hợp?",
    "options": {
      "A": "CFR.",
      "B": "DAP.",
      "C": "CPT.",
      "D": "CIF."
    },
    "answer": "D",
    "explanation": "Nếu người bán vận chuyển đường biển, giao hàng lên tàu tại cảng đi và còn phải thu xếp mua bảo hiểm cho hàng hóa tới cảng đích thì điều kiện phù hợp là CIF (Cost, Insurance and Freight).",
    "pdf_no": null
  },
  {
    "id": 74,
    "orig_no": "74",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Nhóm điều kiện nào sau đây chỉ áp dụng cho vận tải biển và đường thủy nội địa?",
    "options": {
      "A": "FAS, FOB, CFR, CIF.",
      "B": "EXW, FCA, CPT, CIP.",
      "C": "FCA, FOB, CPT, CFR.",
      "D": "DAP, DPU, DDP, CIF."
    },
    "answer": "A",
    "explanation": "Bốn điều kiện truyền thống chỉ áp dụng cho vận tải biển và đường thủy nội địa trong Incoterms 2020 là: FAS, FOB, CFR, CIF.",
    "pdf_no": null
  },
  {
    "id": 75,
    "orig_no": "75",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Nội dung nào sau đây thuộc phạm vi điều chỉnh quan trọng của Incoterms®?",
    "options": {
      "A": "Mức lãi suất thanh toán chậm.",
      "B": "Quyền sở hữu doanh nghiệp.",
      "C": "Điểm chuyển rủi ro về mất mát hoặc hư hỏng hàng hóa giữa người bán và người mua.",
      "D": "Thẩm quyền giải quyết tranh chấp."
    },
    "answer": "C",
    "explanation": "Phạm vi điều chỉnh cốt lõi nhất của Incoterms® là xác định điểm chuyển rủi ro về mất mát hoặc hư hỏng hàng hóa, phân chia chi phí và nghĩa vụ làm thủ tục hải quan giữa người bán và người mua.",
    "pdf_no": null
  },
  {
    "id": 76,
    "orig_no": "76",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Tại sao CIF không phù hợp bằng CIP trong một giao dịch vận tải đa phương thức?",
    "options": {
      "A": "CIF yêu cầu người mua nhập khẩu.",
      "B": "CIF thuộc nhóm điều kiện chỉ áp dụng cho vận tải biển và đường thủy nội địa.",
      "C": "CIF không yêu cầu vận tải.",
      "D": "CIF không yêu cầu bảo hiểm."
    },
    "answer": "D",
    "explanation": "Theo CFR, người bán hoàn thành nghĩa vụ giao hàng khi hàng đã được xếp lên tàu tại cảng bốc hàng (cảng đi). Cước phí vận tải tới cảng đích do người bán trả, nhưng rủi ro đã chuyển sang người mua ngay tại cảng bốc.",
    "pdf_no": null
  },
  {
    "id": 77,
    "orig_no": "77",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Tại sao FCA thường thích hợp hơn FOB đối với container được giao cho người chuyên chở tại bến container trước khi xếp tàu?",
    "options": {
      "A": "Điểm giao hàng FCA có thể phù hợp với thời điểm container được giao cho người chuyên chở.",
      "B": "FCA yêu cầu người bán chịu rủi ro đến cảng đích.",
      "C": "FCA luôn có giá thấp hơn FOB.",
      "D": "FCA bắt buộc người bán mua bảo hiểm."
    },
    "answer": "C",
    "explanation": "Trong CFR, rủi ro chuyển từ người bán sang người mua ngay khi hàng được giao an toàn lên boong tàu tại cảng bốc hàng thỏa thuận (on board the vessel).",
    "pdf_no": null
  },
  {
    "id": 78,
    "orig_no": "78",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Tại sao FOB không phù hợp với giao dịch vận tải hàng không?",
    "options": {
      "A": "FOB chỉ áp dụng cho vận tải biển và đường thủy nội địa.",
      "B": "FOB bắt buộc người bán mua bảo hiểm.",
      "C": "FOB bắt buộc người bán nhập khẩu.",
      "D": "FOB chỉ áp dụng cho hàng có giá trị thấp."
    },
    "answer": "C",
    "explanation": "Theo CFR, người bán chỉ có nghĩa vụ trả cước vận tải biển tới cảng đích quy định, hoàn toàn không có nghĩa vụ mua bảo hiểm hàng hải.",
    "pdf_no": null
  },
  {
    "id": 79,
    "orig_no": "79",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Tại sao trong giao dịch CIF, người bán có thể vẫn trả cước đến cảng đích trong khi rủi ro đã chuyển cho người mua?",
    "options": {
      "A": "Vì người mua không có nghĩa vụ nào.",
      "B": "Vì bảo hiểm làm rủi ro quay lại người bán.",
      "C": "Vì người bán vẫn sở hữu hàng.",
      "D": "Vì nghĩa vụ chịu chi phí vận tải và việc chuyển rủi ro là hai vấn đề khác nhau."
    },
    "answer": "B",
    "explanation": "Theo CIF, người bán bắt buộc phải mua bảo hiểm hàng hải cho hàng hóa nhưng người hưởng thụ bảo hiểm khi hàng gặp rủi ro trên biển là người mua (vì rủi ro đã chuyển cho người mua từ cảng bốc).",
    "pdf_no": null
  },
  {
    "id": 80,
    "orig_no": "80",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Theo EXW, người bán về nguyên tắc không có nghĩa vụ nào sau đây?",
    "options": {
      "A": "Đóng gói hàng hóa khi cần thiết.",
      "B": "Bốc hàng lên phương tiện nhận hàng do người mua bố trí.",
      "C": "Cung cấp chứng từ thương mại theo thỏa thuận.",
      "D": "Chuẩn bị hàng hóa theo hợp đồng."
    },
    "answer": "C",
    "explanation": "Trong CIF, điểm chuyển rủi ro là khi hàng được đặt lên boong tàu tại cảng bốc hàng (cảng đi), hoàn toàn tách biệt với cảng đích mà người bán trả cước và mua bảo hiểm.",
    "pdf_no": null
  },
  {
    "id": 81,
    "orig_no": "81",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Theo FCA, thủ tục xuất khẩu về nguyên tắc thuộc trách nhiệm của ai?",
    "options": {
      "A": "Người mua.",
      "B": "Người chuyên chở.",
      "C": "Người bán.",
      "D": "Ngân hàng."
    },
    "answer": "B",
    "explanation": "Theo CIF Incoterms® 2020, người bán có nghĩa vụ mua bảo hiểm ở mức bảo hiểm tối thiểu là Điều kiện (C) của Viện những người bảo hiểm Luân Đôn (Institute Cargo Clauses C - ICC C) hoặc điều kiện tương đương.",
    "pdf_no": null
  },
  {
    "id": 82,
    "orig_no": "82",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Theo FOB, người bán có nghĩa vụ mặc định phải mua bảo hiểm cho người mua không?",
    "options": {
      "A": "Có, trong mọi trường hợp.",
      "B": "Có, nếu giá trị hàng cao.",
      "C": "Không.",
      "D": "Có, nếu vận chuyển bằng container."
    },
    "answer": "B",
    "explanation": "Trong CIP Incoterms® 2020, quy định mới nâng cấp nghĩa vụ bảo hiểm của người bán lên mức tối đa là Điều kiện (A) - Mọi rủi ro (Institute Cargo Clauses A - ICC A).",
    "pdf_no": null
  },
  {
    "id": 83,
    "orig_no": "83",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Theo Incoterms® 2020, CIP về nguyên tắc yêu cầu mức bảo hiểm:",
    "options": {
      "A": "Thấp hơn CIF.",
      "B": "Không có bảo hiểm.",
      "C": "Rộng hơn mức bảo hiểm mặc định của CIF.",
      "D": "Chỉ bảo hiểm trách nhiệm người vận tải."
    },
    "answer": "B",
    "explanation": "Theo CPT, người bán ký hợp đồng vận tải và trả cước phí vận chuyển hàng hóa tới địa điểm đến thỏa thuận.",
    "pdf_no": null
  },
  {
    "id": 84,
    "orig_no": "84",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong CFR, rủi ro về hàng hóa chuyển sang người mua về cơ bản khi nào?",
    "options": {
      "A": "Khi hàng được giao lên tàu tại cảng xếp hàng theo quy định.",
      "B": "Khi người mua nhận chứng từ.",
      "C": "Khi hàng tới cảng đích.",
      "D": "Khi hàng được dỡ khỏi tàu."
    },
    "answer": "A",
    "explanation": "Trong CPT, rủi ro chuyển sang người mua ngay khi người bán giao hàng cho người chuyên chở (carrier) đầu tiên tại địa điểm giao hàng ở nước xuất khẩu.",
    "pdf_no": 33
  },
  {
    "id": 85,
    "orig_no": "85",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong CIF, người bán có nghĩa vụ nào sau đây?",
    "options": {
      "A": "Chịu rủi ro đến kho người mua.",
      "B": "Làm thủ tục nhập khẩu.",
      "C": "Dỡ hàng tại kho người mua.",
      "D": "Ký hợp đồng vận tải và thu xếp bảo hiểm theo yêu cầu của điều kiện CIF."
    },
    "answer": "A",
    "explanation": "Theo FOB, người bán hoàn thành nghĩa vụ khi hàng được đặt lên tàu do người mua chỉ định tại cảng xếp hàng thỏa thuận và làm thủ tục thông quan xuất khẩu.",
    "pdf_no": null
  },
  {
    "id": 86,
    "orig_no": "86",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong DAP, hàng được giao khi nào?",
    "options": {
      "A": "Khi hàng được dỡ tại nơi đến.",
      "B": "Khi hàng được giao lên tàu.",
      "C": "Khi hàng được đặt dưới quyền định đoạt của người mua trên phương tiện vận tải đến và sẵn sàng để dỡ.",
      "D": "Khi giao cho người chuyên chở đầu tiên."
    },
    "answer": "C",
    "explanation": "Theo DAP, người bán giao hàng khi hàng hóa được đặt dưới quyền định đoạt của người mua trên phương tiện vận tải đến và sẵn sàng để dỡ tại nơi đến quy định.",
    "pdf_no": null
  },
  {
    "id": 87,
    "orig_no": "87",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong DAP, nghĩa vụ dỡ hàng tại địa điểm đến về nguyên tắc thuộc về ai?",
    "options": {
      "A": "Người mua.",
      "B": "Người bán.",
      "C": "Người vận tải.",
      "D": "Hải quan."
    },
    "answer": "A",
    "explanation": "Theo DAP, người bán chịu trách nhiệm đưa hàng đến nơi đến nhưng KHÔNG có nghĩa vụ dỡ hàng khỏi phương tiện vận tải; nghĩa vụ dỡ hàng thuộc về người mua.",
    "pdf_no": 34
  },
  {
    "id": 88,
    "orig_no": "88",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong DAP, thủ tục nhập khẩu về nguyên tắc thuộc trách nhiệm của ai?",
    "options": {
      "A": "Ngân hàng.",
      "B": "Người mua.",
      "C": "Người bán.",
      "D": "Người vận tải."
    },
    "answer": "B",
    "explanation": "Trong DAP, người mua có nghĩa vụ làm thủ tục thông quan nhập khẩu, nộp thuế và các lệ phí nhập khẩu.",
    "pdf_no": null
  },
  {
    "id": 89,
    "orig_no": "89",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong DDP, người bán về nguyên tắc có nghĩa vụ dỡ hàng khỏi phương tiện vận tải đến không?",
    "options": {
      "A": "Có nếu giao tại kho.",
      "B": "Có nếu người mua yêu cầu bằng miệng.",
      "C": "Có trong mọi trường hợp.",
      "D": "Không theo nghĩa vụ giao hàng mặc định của DDP."
    },
    "answer": "D",
    "explanation": "Theo DDP, người bán có nghĩa vụ giao hàng đã thông quan nhập khẩu nhưng trên phương tiện vận tải sẵn sàng để dỡ; nghĩa vụ mặc định của DDP không bắt buộc người bán dỡ hàng (trừ khi có thỏa thuận riêng).",
    "pdf_no": null
  },
  {
    "id": 90,
    "orig_no": "90",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong DPU, thủ tục nhập khẩu về nguyên tắc thuộc trách nhiệm của ai?",
    "options": {
      "A": "Công ty bảo hiểm.",
      "B": "Người bán.",
      "C": "Người vận tải.",
      "D": "Người mua."
    },
    "answer": "D",
    "explanation": "Trong DPU (cũng như DAP), người mua chịu trách nhiệm làm thủ tục thông quan nhập khẩu và nộp thuế nhập khẩu; người bán chịu trách nhiệm dỡ hàng tại nơi đến.",
    "pdf_no": null
  },
  {
    "id": 91,
    "orig_no": "91",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong FAS, hợp đồng vận tải chính về nguyên tắc do ai thu xếp?",
    "options": {
      "A": "Người bán.",
      "B": "Người mua.",
      "C": "Hải quan.",
      "D": "Ngân hàng."
    },
    "answer": "B",
    "explanation": "Trong FAS, người mua có nghĩa vụ thuê phương tiện vận tải chính (thuê tàu) để nhận hàng tại mạn tàu.",
    "pdf_no": 35
  },
  {
    "id": 92,
    "orig_no": "92",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong FOB, hợp đồng vận tải chính về nguyên tắc do ai thu xếp?",
    "options": {
      "A": "Người mua.",
      "B": "Người bán.",
      "C": "Hải quan.",
      "D": "Cảng xếp hàng."
    },
    "answer": "A",
    "explanation": "Trong FOB, người mua có trách nhiệm thu xếp và ký hợp đồng vận tải chính (chỉ định tàu và trả cước vận tải biển).",
    "pdf_no": null
  },
  {
    "id": 93,
    "orig_no": "93",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "A bán CFR Shanghai. Sau khi hàng được giao lên tàu tại Hải Phòng, tàu gặp sự cố. A vẫn phải trả cước theo hợp đồng vận tải nhưng rủi ro hàng hóa đã chuyển cho B. Tình huống này minh họa điều gì?",
    "options": {
      "A": "Sự tách biệt giữa nghĩa vụ trả chi phí vận tải và phân chia rủi ro trong nhóm C.",
      "B": "CFR giống DAP.",
      "C": "Incoterms® tự mâu thuẫn.",
      "D": "CFR không có điểm giao hàng."
    },
    "answer": "A",
    "explanation": "Tình huống này minh họa rõ nét nguyên tắc hai điểm (two critical points) của nhóm C: điểm chuyển giao rủi ro (tại cảng đi) tách biệt hoàn toàn với điểm phân chia chi phí vận tải (tại cảng đến).",
    "pdf_no": 36
  },
  {
    "id": 94,
    "orig_no": "94",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "A bán CIP Munich. A giao hàng cho người chuyên chở tại Hà Nội và trả cước tới Munich. Hàng bị mất sau khi người chuyên chở nhận. Nếu A đã hoàn thành đúng nghĩa vụ giao hàng, nhận định nào đúng?",
    "options": {
      "A": "Rủi ro chỉ chuyển khi hàng tới Munich.",
      "B": "Rủi ro đã chuyển sang người mua dù A vẫn phải trả cước tới Munich.",
      "C": "Rủi ro chỉ chuyển sau khi thanh toán.",
      "D": "A chịu rủi ro vì A trả cước."
    },
    "answer": "B",
    "explanation": "Trong CIP, rủi ro đã chuyển sang người mua ngay khi người bán giao hàng cho người chuyên chở đầu tiên, mặc dù người bán vẫn có nghĩa vụ trả cước phí vận tải tới Munich.",
    "pdf_no": null
  },
  {
    "id": 95,
    "orig_no": "95",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Cách dẫn chiếu nào rõ ràng hơn trong hợp đồng?",
    "options": {
      "A": "FOB Hai Phong Port, Vietnam, Incoterms® 2020.",
      "B": "FOB Asia 2020.",
      "C": "FOB International.",
      "D": "FOB Vietnam."
    },
    "answer": "A",
    "explanation": "Cách dẫn chiếu chuẩn xác theo khuyến nghị của ICC: [Tên điều kiện] [Tên địa điểm/cảng cụ thể], [Tên quốc gia], Incoterms® 2020. Ví dụ: 'FOB Hai Phong Port, Vietnam, Incoterms® 2020'.",
    "pdf_no": null
  },
  {
    "id": 96,
    "orig_no": "96",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Công ty A (Việt Nam) bán DDP Paris nhưng pháp luật nước nhập khẩu không cho Công ty A đứng tên thực hiện thủ tục nhập khẩu. Nếu muốn người bán chịu chi phí và rủi ro đưa hàng tới Paris nhưng người mua chịu trách nhiệm nhập khẩu, điều kiện nào đáng cân nhắc hơn DDP?",
    "options": {
      "A": "FOB.",
      "B": "FAS.",
      "C": "EXW.",
      "D": "DAP."
    },
    "answer": "D",
    "explanation": "Khi người bán muốn chịu mọi chi phí và rủi ro đưa hàng đến tận Paris nhưng không thể làm thủ tục nhập khẩu tại nước sở tại thì điều kiện tối ưu thay thế DDP là DAP (Delivered At Place).",
    "pdf_no": null
  },
  {
    "id": 97,
    "orig_no": "97",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Công ty A bán CIF Rotterdam. Hàng đã được giao lên tàu tại Hải Phòng đúng quy định. Tàu gặp bão giữa hành trình làm hàng tổn thất. Người mua cho rằng A chịu rủi ro vì A trả cước và mua bảo hiểm tới Rotterdam. Nhận định nào đúng?",
    "options": {
      "A": "Người vận tải tự động chịu toàn bộ rủi ro theo Incoterms®.",
      "B": "Người mua đúng vì chi phí và rủi ro luôn đi cùng nhau.",
      "C": "Người mua đúng vì CIF thuộc nhóm D.",
      "D": "Lập luận của người mua không đúng vì CIF tách điểm chuyển rủi ro khỏi cảng đích mà người bán trả cước và thu xếp bảo hiểm."
    },
    "answer": "D",
    "explanation": "Lập luận của người mua không đúng vì trong CIF, rủi ro chuyển giao ngay khi hàng qua lan can/được xếp lên tàu tại cảng bốc (Hải Phòng); bảo hiểm do người bán mua nhưng là vì lợi ích của người mua để khiếu nại bảo hiểm.",
    "pdf_no": null
  },
  {
    "id": 98,
    "orig_no": "98",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Doanh nghiệp bán DPU tại một địa điểm không có thiết bị phù hợp để dỡ hàng. Rủi ro thực tiễn lớn nhất của việc lựa chọn điều kiện này là gì?",
    "options": {
      "A": "DPU không áp dụng đường bộ.",
      "B": "DPU bắt buộc người mua mua bảo hiểm.",
      "C": "Người bán có thể gặp khó khăn trong việc hoàn thành nghĩa vụ dỡ hàng để thực hiện giao hàng.",
      "D": "Người mua phải làm xuất khẩu."
    },
    "answer": "C",
    "explanation": "DPU quy định người bán bắt buộc phải hoàn thành việc dỡ hàng tại nơi đến; nếu tại địa điểm đó không có sẵn cần cẩu/thiết bị dỡ hàng phù hợp, người bán sẽ không thể hoàn thành nghĩa vụ giao hàng và phát sinh chi phí phạt lưu xe/container rất lớn.",
    "pdf_no": 37
  },
  {
    "id": 99,
    "orig_no": "99",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Doanh nghiệp đang chào giá 100.000 USD theo điều kiện EXW. Người mua đề nghị chuyển sang CIF tại một cảng đích xác định. Khi xây dựng lại giá chào, doanh nghiệp cần xử lý như thế nào?",
    "options": {
      "A": "Giữ nguyên giá 100.000 USD vì thay đổi Incoterms® không ảnh hưởng đến cơ cấu chi phí.",
      "B": "Xác định lại giá trên cơ sở bổ sung các chi phí mà người bán phải đảm nhận khi chuyển từ EXW sang CIF, bao gồm các chi phí vận tải và bảo hiểm có liên quan.",
      "C": "Chỉ bổ sung chi phí bảo hiểm vì người mua vẫn chịu toàn bộ chi phí vận tải.",
      "D": "Chỉ thay tên điều kiện EXW thành CIF vì điểm chuyển rủi ro không ảnh hưởng đến việc xác định giá."
    },
    "answer": "B",
    "explanation": "Từ EXW sang CIF, người bán phải gánh thêm nhiều nghĩa vụ: bốc hàng lên xe tại xưởng, vận tải nội địa, thủ tục hải quan xuất khẩu, cước vận tải biển quốc tế và phí mua bảo hiểm; do đó phải tính toán lại giá để cộng thêm các khoản này.",
    "pdf_no": null
  },
  {
    "id": 100,
    "orig_no": "100",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Doanh nghiệp muốn sử dụng FOB cho lô hàng container nhưng container được giao cho người chuyên chở tại bến container trước khi xếp tàu. Lựa chọn nào nên được cân nhắc để điểm giao hàng phù hợp hơn?",
    "options": {
      "A": "DPU.",
      "B": "DDP.",
      "C": "CIF.",
      "D": "FCA."
    },
    "answer": "D",
    "explanation": "ICC khuyến cáo mạnh mẽ: Với hàng đóng trong container giao tại bến bãi container (CY/CFS) trước khi bốc lên tàu, các bên nên sử dụng FCA thay vì FOB để điểm chuyển rủi ro phản ánh đúng thời điểm bàn giao hàng cho hãng tàu.",
    "pdf_no": null
  },
  {
    "id": 101,
    "orig_no": "101",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Hợp đồng sử dụng FCA và thanh toán L/C yêu cầu vận đơn có xác nhận hàng đã được xếp lên tàu. Incoterms® 2020 cho phép các bên thỏa thuận cơ chế nào?",
    "options": {
      "A": "Người mua chỉ thị người chuyên chở phát hành vận đơn có xác nhận hàng đã được xếp lên tàu cho người bán sau khi hàng được xếp lên tàu.",
      "B": "FCA tự động chuyển thành FOB.",
      "C": "Ngân hàng phát hành vận đơn thay hãng tàu.",
      "D": "Người bán tự phát hành vận đơn."
    },
    "answer": "A",
    "explanation": "Incoterms® 2020 bổ sung điều khoản mới cho FCA: Người mua và người bán có thể thỏa thuận rằng người mua chỉ thị người chuyên chở phát hành vận đơn có ghi chú hàng đã xếp lên tàu (On Board B/L) cho người bán để thanh toán L/C.",
    "pdf_no": 38
  },
  {
    "id": 102,
    "orig_no": "102",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Khi lựa chọn điều kiện DDP (Delivered Duty Paid) trong Incoterms® 2020, nhận định nào sau đây là phù hợp nhất đối với người mua?",
    "options": {
      "A": "DDP luôn có lợi nhất cho người mua vì người bán đảm nhận phần lớn nghĩa vụ.",
      "B": "DDP chỉ có lợi cho người mua khi thanh toán bằng L/C.",
      "C": "DDP là lựa chọn tối ưu khi hàng hóa được vận chuyển bằng đường biển.",
      "D": "Mức độ phù hợp của DDP phụ thuộc vào điều kiện cụ thể của thương vụ, bao gồm khả năng thông quan nhập khẩu của người bán, chi phí, thuế và yêu cầu kiểm soát logistics."
    },
    "answer": "D",
    "explanation": "DDP đặt toàn bộ trách nhiệm và rủi ro tối đa lên người bán; mức độ phù hợp của DDP phụ thuộc vào việc người bán có tư cách pháp lý và năng lực thực hiện thủ tục hải quan nhập khẩu, nộp thuế tại nước người mua hay không.",
    "pdf_no": null
  },
  {
    "id": 103,
    "orig_no": "103",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Khi lựa chọn giữa DAP và DDP, vấn đề cần xem xét đặc biệt là:",
    "options": {
      "A": "Người bán có bốc hàng tại nơi đi không.",
      "B": "Hàng có đi biển không.",
      "C": "Người bán có mua bảo hiểm không.",
      "D": "Bên nào thực hiện thủ tục và nghĩa vụ nhập khẩu theo điều kiện."
    },
    "answer": "D",
    "explanation": "Vấn đề cốt lõi nhất phân biệt giữa DAP và DDP là trách nhiệm thực hiện thủ tục thông quan nhập khẩu và nộp thuế nhập khẩu (DAP do người mua làm, DDP do người bán làm).",
    "pdf_no": null
  },
  {
    "id": 104,
    "orig_no": "104",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Khi lựa chọn giữa DAP và DPU, câu hỏi quan trọng nhất là gì?",
    "options": {
      "A": "Ai sở hữu hàng hóa?",
      "B": "Ai làm thủ tục xuất khẩu?",
      "C": "Ai mua bảo hiểm?",
      "D": "Ai chịu trách nhiệm dỡ hàng tại nơi đến?"
    },
    "answer": "D",
    "explanation": "Câu hỏi quan trọng nhất phân biệt DAP và DPU là: Ai chịu trách nhiệm dỡ hàng khỏi phương tiện vận tải tại địa điểm đến? (DAP: người mua dỡ; DPU: người bán dỡ).",
    "pdf_no": null
  },
  {
    "id": 105,
    "orig_no": "105",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Khi phân tích một điều kiện Incoterms® 2020, ngoài trách nhiệm vận tải và thời điểm chuyển rủi ro, nhóm nội dung nào sau đây cần được xem xét đồng thời?",
    "options": {
      "A": "Phương thức thanh toán, chuyển quyền sở hữu và luật áp dụng.",
      "B": "Đặc điểm hàng hóa, thời hạn thanh toán và cơ chế giải quyết tranh chấp.",
      "C": "Giá bán, đồng tiền thanh toán và thời điểm chuyển quyền sở hữu.",
      "D": "Phân chia chi phí, nghĩa vụ bảo hiểm và trách nhiệm thực hiện thủ tục thông quan."
    },
    "answer": "D",
    "explanation": "Khi phân tích một điều kiện Incoterms, ngoài điểm giao hàng và chuyển rủi ro, cần xem xét đồng thời 3 yếu tố trụ cột: Phân chia chi phí, Nghĩa vụ thu xếp bảo hiểm và Trách nhiệm thực hiện thủ tục hải quan thông quan xuất nhập khẩu.",
    "pdf_no": 39
  },
  {
    "id": 106,
    "orig_no": "106",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Khi phân tích một tình huống áp dụng Incoterms® 2020 có nhiều dữ kiện, trình tự xem xét nào sau đây là hợp lý nhất để xác định nghĩa vụ, chi phí và rủi ro của các bên?",
    "options": {
      "A": "Trước tiên xác định tên điều kiện Incoterms®, sau đó căn cứ vào tên điều kiện để xác định toàn bộ trách nhiệm của các bên.",
      "B": "Trước tiên xem xét giá hàng hóa và phương thức thanh toán, sau đó xác định quyền sở hữu và trách nhiệm vận chuyển.",
      "C": "Trước tiên xem xét nghĩa vụ bảo hiểm và chi phí vận tải, sau đó xác định phương thức thanh toán và thủ tục hải quan.",
      "D": "Trước tiên xác định phương thức vận tải và địa điểm được chỉ định, sau đó xem xét điểm giao hàng và chuyển rủi ro, nghĩa vụ vận tải, bảo hiểm, phân chia chi phí và thủ tục thông quan của các bên."
    },
    "answer": "A",
    "explanation": "Trong Incoterms® 2020, chỉ có 2 điều kiện quy định nghĩa vụ người bán phải mua bảo hiểm hàng hóa là CIF (mức bảo hiểm C) và CIP (mức bảo hiểm A).",
    "pdf_no": 40
  },
  {
    "id": 107,
    "orig_no": "107",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một container được giao cho người chuyên chở tại bến container trước khi xếp lên tàu. Việc vẫn sử dụng FOB có thể tạo vấn đề gì?",
    "options": {
      "A": "Quy trình giao hàng thực tế và điểm chuyển rủi ro theo FOB có thể không trùng nhau.",
      "B": "FOB bắt buộc người bán làm thủ tục nhập khẩu.",
      "C": "FOB không cho phép vận chuyển container.",
      "D": "FOB bắt buộc người bán mua bảo hiểm."
    },
    "answer": "A",
    "explanation": "Khi sử dụng Incoterms® 2020, điều quan trọng hàng đầu là phải ghi kèm tên địa điểm hoặc cảng quy định càng chi tiết, cụ thể càng tốt để tránh tranh chấp về điểm giao hàng và chuyển giao rủi ro.",
    "pdf_no": null
  },
  {
    "id": 108,
    "orig_no": "108",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một doanh nghiệp cho rằng “địa điểm ghi sau điều kiện Incoterms luôn là điểm chuyển rủi ro”. Nhận định này đặc biệt dễ sai đối với:",
    "options": {
      "A": "DAP và DDP.",
      "B": "FAS và FOB.",
      "C": "Các điều kiện nhóm C như CPT, CIP, CFR và CIF.",
      "D": "EXW và DPU."
    },
    "answer": "A",
    "explanation": "Trong FOB, người bán chịu mọi chi phí và rủi ro cho đến khi hàng đã được xếp an toàn lên boong tàu tại cảng bốc hàng thỏa thuận.",
    "pdf_no": null
  },
  {
    "id": 109,
    "orig_no": "109",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một doanh nghiệp cho rằng “mua bảo hiểm đồng nghĩa với chịu rủi ro”. Nhận định này sai vì:",
    "options": {
      "A": "Chỉ người mua được mua bảo hiểm.",
      "B": "Bảo hiểm không liên quan hàng hóa.",
      "C": "Incoterms không có điều kiện bảo hiểm.",
      "D": "Nghĩa vụ thu xếp bảo hiểm và việc phân chia rủi ro là hai vấn đề cần phân biệt."
    },
    "answer": "A",
    "explanation": "Trong FAS, người bán hoàn thành nghĩa vụ giao hàng khi hàng được đặt dọc mạn tàu (trên cầu cảng hoặc trên sà lan) do người mua chỉ định tại cảng xếp hàng quy định.",
    "pdf_no": null
  },
  {
    "id": 110,
    "orig_no": "110",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một doanh nghiệp đang lựa chọn giữa DAP và DPU, Incoterms® 2020, để giao hàng tại kho của người mua. Trong cả hai phương án, hàng được vận chuyển đến địa điểm đích đã thỏa thuận. Yếu tố nào sau đây là điểm khác biệt trực tiếp quan trọng nhất giữa DAP và DPU?",
    "options": {
      "A": "Bên thực hiện thủ tục thông quan xuất khẩu.",
      "B": "Bên lựa chọn phương thức thanh toán tiền hàng.",
      "C": "Bên chịu trách nhiệm dỡ hàng khỏi phương tiện vận tải tại địa điểm đến.",
      "D": "Thời điểm chuyển quyền sở hữu hàng hóa từ người bán sang người mua."
    },
    "answer": "A",
    "explanation": "Trong FCA, khi điểm giao hàng là tại cơ sở của người bán (xưởng/kho), người bán có nghĩa vụ bốc hàng lên phương tiện vận tải tiếp nhận do người mua phái đến.",
    "pdf_no": 41
  },
  {
    "id": 111,
    "orig_no": "111",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một doanh nghiệp muốn người bán chịu rủi ro đến nhà máy người mua, nhưng nhà máy người mua có thiết bị dỡ chuyên dụng và muốn tự dỡ hàng. Điều kiện nào phù hợp hơn DPU?",
    "options": {
      "A": "FOB.",
      "B": "CFR.",
      "C": "DAP.",
      "D": "FAS."
    },
    "answer": "A",
    "explanation": "Trong FCA, nếu việc giao hàng diễn ra tại một địa điểm khác ngoài cơ sở người bán (như bến xe, kho CFS, bãi CY), người bán giao hàng khi hàng vẫn ở trên phương tiện vận tải của người bán và sẵn sàng để dỡ cho người chuyên chở.",
    "pdf_no": null
  },
  {
    "id": 112,
    "orig_no": "112",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một doanh nghiệp Việt Nam xuất khẩu hàng hóa từ cảng Hải Phòng đến cảng Busan, Hàn Quốc bằng đường biển. Theo hợp đồng, người bán có trách nhiệm ký hợp đồng và thanh toán cước vận tải đến cảng Busan, nhưng không có nghĩa vụ mua bảo hiểm cho hàng hóa. Điều kiện Incoterms® 2020 nào phù hợp nhất?",
    "options": {
      "A": "CIF Busan Port, Korea.",
      "B": "CIP Busan, Korea.",
      "C": "CFR Busan Port, Korea.",
      "D": "CPT Busan, Korea."
    },
    "answer": "A",
    "explanation": "Trong EXW, người bán không có nghĩa vụ bốc hàng lên phương tiện vận tải do người mua cử đến (nếu người bán bốc hộ thì rủi ro và chi phí vẫn do người mua chịu, trừ khi có thỏa thuận khác).",
    "pdf_no": null
  },
  {
    "id": 113,
    "orig_no": "113",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một doanh nghiệp xuất khẩu dự kiến giao hàng đến địa điểm của người mua tại nước nhập khẩu. Tuy nhiên, người bán không có khả năng thực hiện thủ tục thông quan nhập khẩu tại nước này, trong khi người mua có thể tự thực hiện thủ tục nhập khẩu. Điều kiện Incoterms® 2020 nào phù hợp hơn so với DDP?",
    "options": {
      "A": "EXW.",
      "B": "DAP.",
      "C": "FAS.",
      "D": "FOB."
    },
    "answer": "A",
    "explanation": "Trong DDP, người bán chịu mức nghĩa vụ và rủi ro cao nhất: vận chuyển hàng tới nơi đến quy định, làm thủ tục thông quan xuất khẩu, trả cước vận tải quốc tế, làm thủ tục hải quan nhập khẩu và nộp toàn bộ các loại thuế nhập khẩu.",
    "pdf_no": null
  },
  {
    "id": 114,
    "orig_no": "114",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một doanh nghiệp xuất khẩu thỏa thuận chịu trách nhiệm vận chuyển hàng đến kho của người mua và hoàn thành giao hàng sau khi hàng đã được dỡ khỏi phương tiện vận tải. Người mua chịu trách nhiệm thực hiện thủ tục thông quan nhập khẩu. Điều kiện Incoterms® 2020 nào phù hợp nhất?",
    "options": {
      "A": "DAP.",
      "B": "DPU.",
      "C": "DDP.",
      "D": "CPT."
    },
    "answer": "A",
    "explanation": "DAP và DDP đều là các điều kiện thuộc nhóm D áp dụng cho mọi phương thức vận tải, trong đó người bán chịu chi phí và rủi ro đưa hàng tới phương tiện vận tải đến tại điểm đích quy định, sẵn sàng để dỡ.",
    "pdf_no": null
  },
  {
    "id": 115,
    "orig_no": "115",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một hợp đồng áp dụng điều kiện CIP Hamburg, Incoterms® 2020. Hàng hóa được vận chuyển qua nhiều người chuyên chở kế tiếp nhau, nhưng hợp đồng không xác định rõ địa điểm người bán giao hàng cho người chuyên chở đầu tiên. Rủi ro nào dễ phát sinh khi thực hiện hợp đồng?",
    "options": {
      "A": "Người bán phải chịu rủi ro về hàng hóa cho đến khi hàng đến Hamburg.",
      "B": "Người mua phải trực tiếp lựa chọn người chuyên chở cuối cùng.",
      "C": "Điều kiện CIP không được áp dụng khi có nhiều người chuyên chở.",
      "D": "Các bên có thể phát sinh tranh chấp về thời điểm và địa điểm chuyển rủi ro từ người bán sang người mua."
    },
    "answer": "A",
    "explanation": "Incoterms® 2020 quy định rõ mức bảo hiểm mặc định cho CIF là ICC (C) - bảo hiểm tổn thất rủi ro cơ bản, còn CIP là ICC (A) - bảo hiểm mọi rủi ro.",
    "pdf_no": null
  },
  {
    "id": 116,
    "orig_no": "116",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một hợp đồng áp dụng điều kiện DPU, Incoterms® 2020, với địa điểm giao hàng là kho của người mua. Trước khi ký hợp đồng, người bán phát hiện địa điểm này không có thiết bị phù hợp để dỡ hàng khỏi phương tiện vận tải. Vấn đề nào cần được xem xét quan trọng nhất?",
    "options": {
      "A": "Người bán không được phép ký hợp đồng vận tải đến kho của người mua.",
      "B": "Điều kiện DPU chỉ được áp dụng khi hàng hóa vận chuyển bằng đường biển.",
      "C": "Người bán có thể gặp khó khăn hoặc không thể hoàn thành nghĩa vụ dỡ hàng tại địa điểm đến đã thỏa thuận.",
      "D": "Người mua phải thực hiện thủ tục thông quan xuất khẩu thay cho người bán."
    },
    "answer": "A",
    "explanation": "Theo Incoterms 2020, việc tự ý thay đổi chữ cái mà không dẫn chiếu rõ ràng sẽ gây nhầm lẫn; quy tắc chuẩn khuyến cáo sử dụng đúng 11 điều kiện chuẩn của ICC kèm theo phiên bản Incoterms 2020.",
    "pdf_no": null
  },
  {
    "id": 117,
    "orig_no": "117",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một hợp đồng áp dụng điều kiện FCA, Incoterms® 2020 và thanh toán bằng L/C, trong đó bộ chứng từ thanh toán yêu cầu vận đơn có xác nhận hàng đã được xếp lên tàu. Các bên nên thỏa thuận như thế nào để đáp ứng yêu cầu này?",
    "options": {
      "A": "Người bán tự lập và phát hành vận đơn sau khi giao hàng cho người chuyên chở.",
      "B": "Người mua chỉ thị cho người chuyên chở phát hành vận đơn có xác nhận hàng đã xếp lên tàu cho người bán sau khi hàng được xếp lên tàu.",
      "C": "Ngân hàng phát hành L/C đồng thời phát hành vận đơn cho người bán.",
      "D": "Điều kiện FCA tự động được chuyển thành FOB khi L/C yêu cầu vận đơn có xác nhận hàng đã xếp lên tàu."
    },
    "answer": "A",
    "explanation": "Điều kiện DPU (Delivered at Place Unloaded) thay thế cho điều kiện DAT (Delivered at Terminal) của Incoterms 2010 để nhấn mạnh địa điểm đến có thể là bất kỳ nơi nào chứ không nhất thiết phải là nhà ga/bến bãi (terminal).",
    "pdf_no": null
  },
  {
    "id": 118,
    "orig_no": "118",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một hợp đồng ghi “FOB Vietnam, Incoterms® 2020”. Điểm yếu quan trọng nhất là gì?",
    "options": {
      "A": "FOB phải ghi cảng đích.",
      "B": "Không được sử dụng tên quốc gia.",
      "C": "FOB không thuộc Incoterms® 2020.",
      "D": "Chưa xác định cụ thể cảng xếp hàng liên quan đến việc giao hàng."
    },
    "answer": "D",
    "explanation": "Ghi 'FOB Vietnam' là quá mơ hồ và sai chuẩn thực tiễn logistics, vì Việt Nam có rất nhiều cảng biển khác nhau (Hải Phòng, Đà Nẵng, Cát Lái...); hợp đồng bắt buộc phải chỉ định cụ thể tên cảng xếp hàng.",
    "pdf_no": null
  },
  {
    "id": 119,
    "orig_no": "119",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một hợp đồng thanh toán bằng L/C yêu cầu vận đơn có xác nhận hàng đã được xếp lên tàu, trong khi hàng container được giao theo FCA. Incoterms® 2020 cho phép các bên thỏa thuận theo hướng nào?",
    "options": {
      "A": "Người bán tự phát hành vận đơn của hãng tàu.",
      "B": "Ngân hàng trở thành người vận tải.",
      "C": "FCA tự động chuyển thành FOB.",
      "D": "Người mua chỉ thị người chuyên chở phát hành vận đơn có xác nhận hàng đã được xếp lên tàu cho người bán sau khi hàng đã được xếp lên tàu."
    },
    "answer": "D",
    "explanation": "Quy định cơ chế xuất trình On-board B/L trong FCA của Incoterms 2020 cho phép người mua chỉ thị hãng tàu cấp vận đơn có xác nhận xếp hàng lên tàu cho người bán để thanh toán ngân hàng.",
    "pdf_no": null
  },
  {
    "id": 120,
    "orig_no": "120",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Một lô hàng vận chuyển bằng máy bay nhưng hợp đồng ghi CIF Nội Bài. Vấn đề chính là:",
    "options": {
      "A": "CIF không phù hợp với phương thức vận tải hàng không theo phạm vi áp dụng của điều kiện.",
      "B": "CIF bắt buộc nhập khẩu.",
      "C": "CIF không cho phép giao tại Việt Nam.",
      "D": "CIF không có bảo hiểm."
    },
    "answer": "A",
    "explanation": "CIF chỉ áp dụng cho vận tải đường biển và đường thủy nội địa. Đối với vận tải hàng không đến sân bay Nội Bài, điều kiện tương đương chuẩn phải sử dụng là CIP Nội Bài Airport.",
    "pdf_no": null
  },
  {
    "id": 121,
    "orig_no": "121",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Nếu FCA được quy định tại một điểm giao hàng ngoài cơ sở người bán, điều quan trọng nhất khi soạn hợp đồng là gì?",
    "options": {
      "A": "Chỉ ghi “FCA Vietnam”.",
      "B": "Xác định càng cụ thể càng tốt địa điểm và điểm giao hàng trong điểm giao hàng.",
      "C": "Không cần xác định địa điểm.",
      "D": "Chỉ ghi tên thành phố."
    },
    "answer": "B",
    "explanation": "Khi giao hàng FCA ngoài cơ sở người bán, việc xác định chính xác địa chỉ bãi container (CY) hoặc kho CFS cụ thể là vô cùng quan trọng để xác định thời điểm chuyển rủi ro và chi phí dỡ hàng.",
    "pdf_no": null
  },
  {
    "id": 122,
    "orig_no": "122",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Người bán có giá EXW 100.000 USD và người mua yêu cầu chuyển sang CIP Paris. Tại sao người bán cần tính lại giá chào?",
    "options": {
      "A": "Vì EXW và CIP có cùng phạm vi chi phí.",
      "B": "Vì CIP bắt buộc người bán chịu thuế nhập khẩu.",
      "C": "Vì CIP không có vận tải.",
      "D": "Vì phạm vi chi phí người bán phải gánh tăng lên, trong đó có vận tải và bảo hiểm theo CIP."
    },
    "answer": "D",
    "explanation": "Khi chuyển từ EXW sang CIP, cơ cấu chi phí tăng thêm rất lớn: phí vận tải nội địa, phí hải quan xuất khẩu, cước vận tải quốc tế và phí bảo hiểm mọi rủi ro loại A.",
    "pdf_no": null
  },
  {
    "id": 123,
    "orig_no": "123",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Người bán lựa chọn EXW chỉ vì muốn “ít trách nhiệm nhất”. Điều gì vẫn cần được xem xét?",
    "options": {
      "A": "EXW bắt buộc người bán mua bảo hiểm.",
      "B": "Khả năng thực tế của người mua trong việc nhận hàng và thực hiện thủ tục xuất khẩu tại nước người bán.",
      "C": "EXW bắt buộc người bán nhập khẩu.",
      "D": "EXW yêu cầu người bán thuê tàu."
    },
    "answer": "B",
    "explanation": "Khi người bán chọn EXW, cần phải cân nhắc năng lực thực tế của người mua nước ngoài có thể trực tiếp làm thủ tục xuất khẩu và xin giấy phép xuất khẩu tại nước người bán hay không.",
    "pdf_no": null
  },
  {
    "id": 124,
    "orig_no": "124",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Người bán muốn kiểm soát và trả chi phí vận tải chính nhưng không muốn chịu rủi ro hàng hóa tới tận địa điểm đích. Nhóm điều kiện nào phản ánh rõ logic này?",
    "options": {
      "A": "Chỉ FAS.",
      "B": "Nhóm D.",
      "C": "Nhóm E.",
      "D": "Nhóm C."
    },
    "answer": "D",
    "explanation": "Nhóm C (CPT, CIP, CFR, CIF) phản ánh chính xác logic: người bán trả chi phí vận tải chính đến nơi đến nhưng rủi ro hàng hóa chuyển giao cho người mua ngay tại nơi gửi hàng ở nước xuất khẩu.",
    "pdf_no": null
  },
  {
    "id": 125,
    "orig_no": "125",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Người bán muốn người mua chịu rủi ro khi hàng đã được giao lên tàu tại cảng đi, nhưng người bán vẫn trả cước đến cảng đích. Hàng vận chuyển bằng đường biển. Điều kiện nào phù hợp?",
    "options": {
      "A": "CIF.",
      "B": "DAP.",
      "C": "FOB.",
      "D": "CFR."
    },
    "answer": "D",
    "explanation": "Vận chuyển đường biển, người bán trả cước đến cảng đích, rủi ro chuyển giao khi hàng xếp lên tàu tại cảng đi và không bắt buộc mua bảo hiểm là điều kiện CFR (Cost and Freight).",
    "pdf_no": null
  },
  {
    "id": 126,
    "orig_no": "126",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Người bán muốn người mua chịu rủi ro từ khi hàng được giao cho người chuyên chở ở nước xuất khẩu nhưng người bán vẫn trả cước đến địa điểm đích. Với vận tải đa phương thức, điều kiện nào phù hợp?",
    "options": {
      "A": "CPT.",
      "B": "DAP.",
      "C": "DPU.",
      "D": "DDP."
    },
    "answer": "A",
    "explanation": "Vận tải đa phương thức, người bán trả cước đến đích, rủi ro chuyển ngay khi giao cho người chuyên chở đầu tiên, không bắt buộc mua bảo hiểm là điều kiện CPT (Carriage Paid To).",
    "pdf_no": null
  },
  {
    "id": 127,
    "orig_no": "127",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Người bán theo CFR tự nguyện mua bảo hiểm bổ sung cho lô hàng. Điều nào đúng?",
    "options": {
      "A": "Nghĩa vụ bổ sung không nhất thiết làm thay đổi điều kiện CFR nếu hợp đồng vẫn quy định CFR và xác định rõ thỏa thuận bổ sung.",
      "B": "CFR tự động trở thành CIF.",
      "C": "Người bán phải làm thủ tục nhập khẩu.",
      "D": "Rủi ro tự động chuyển tới cảng đích."
    },
    "answer": "A",
    "explanation": "Nếu người bán trong CFR tự nguyện mua bảo hiểm cho lô hàng theo thỏa thuận riêng thì hợp đồng vẫn giữ nguyên điều kiện CFR và không làm thay đổi bản chất điểm chuyển rủi ro của CFR.",
    "pdf_no": null
  },
  {
    "id": 128,
    "orig_no": "128",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Người bán theo FOB đồng ý mua thêm bảo hiểm cho người mua theo một thỏa thuận riêng. Việc này có tự động biến FOB thành CIF không?",
    "options": {
      "A": "Có trong mọi trường hợp.",
      "B": "Không, nếu các bên chỉ bổ sung nghĩa vụ bảo hiểm mà không thay đổi điều kiện giao hàng đã thỏa thuận.",
      "C": "Có nếu người bán trả phí bảo hiểm.",
      "D": "Có nếu vận chuyển đường biển."
    },
    "answer": "B",
    "explanation": "Việc thỏa thuận người bán mua hộ bảo hiểm không tự động biến FOB thành CIF nếu các bên không sửa đổi tên điều kiện cơ sở giao hàng.",
    "pdf_no": null
  },
  {
    "id": 129,
    "orig_no": "129",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Người mua cho rằng “CIF nghĩa là người bán chịu rủi ro cho đến khi hàng tới cảng đích”. Nhận định nào đúng?",
    "options": {
      "A": "Nhận định đó không đúng vì trong CIF điểm chuyển rủi ro không phải cảng đích.",
      "B": "Người mua đúng vì người bán mua bảo hiểm.",
      "C": "Người mua đúng vì CIF thuộc nhóm D.",
      "D": "Người mua đúng vì người bán trả cước."
    },
    "answer": "A",
    "explanation": "Nhận định của người mua là sai lầm phổ biến nhất trong thực tế thương mại; trong CIF, điểm chuyển rủi ro là tại cảng bốc hàng (cảng đi) chứ không phải tại cảng đích.",
    "pdf_no": null
  },
  {
    "id": 130,
    "orig_no": "130",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Sau khi xác định phương thức vận tải và địa điểm giao hàng dự kiến, nội dung nào cần được phân tích tiếp theo khi lựa chọn điều kiện Incoterms® 2020?",
    "options": {
      "A": "Phương thức và thời hạn thanh toán tiền hàng.",
      "B": "Thời điểm chuyển quyền sở hữu hàng hóa theo hợp đồng.",
      "C": "Cơ chế giải quyết tranh chấp giữa các bên.",
      "D": "Điểm giao hàng, thời điểm chuyển rủi ro và trách nhiệm tổ chức vận tải."
    },
    "answer": "D",
    "explanation": "Sau khi xác định phương thức vận tải và địa điểm, bước tiếp theo là xác định chính xác điểm giao hàng, thời điểm chuyển rủi ro và phân định rõ ai chịu trách nhiệm tổ chức vận tải.",
    "pdf_no": null
  },
  {
    "id": 131,
    "orig_no": "131",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong giao dịch CFR, hàng đã được giao lên tàu đúng quy định tại cảng đi và sau đó bị tổn thất trên biển. Ai chịu rủi ro về hàng hóa tại thời điểm tổn thất?",
    "options": {
      "A": "Người bán vì trả cước.",
      "B": "Cảng đích.",
      "C": "Người mua.",
      "D": "Người bán vì ký hợp đồng vận tải."
    },
    "answer": "C",
    "explanation": "Trong CFR, rủi ro đã chuyển sang người mua ngay khi hàng được giao lên tàu tại cảng bốc; do đó khi tàu gặp sự cố tổn thất trên biển thì người mua là bên gánh chịu rủi ro và tổn thất đó.",
    "pdf_no": null
  },
  {
    "id": 132,
    "orig_no": "132",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong giao dịch CIP, người bán mua bảo hiểm cho hàng hóa. Điều này có nghĩa là gì?",
    "options": {
      "A": "Người mua không bao giờ chịu rủi ro.",
      "B": "Quyền sở hữu luôn thuộc người bán tới nơi đích.",
      "C": "Nghĩa vụ bảo hiểm của người bán không được đồng nhất với điểm chuyển rủi ro.",
      "D": "Người bán luôn chịu rủi ro đến nơi đích."
    },
    "answer": "C",
    "explanation": "Nghĩa vụ mua bảo hiểm của người bán theo CIP chỉ nhằm bồi hoàn tài chính cho người mua khi rủi ro xảy ra; rủi ro thực tế đối với hàng hóa đã chuyển cho người mua ngay từ khi giao cho người chuyên chở đầu tiên.",
    "pdf_no": null
  },
  {
    "id": 133,
    "orig_no": "133",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong Incoterms® 2020, quy định về việc phát hành vận đơn có xác nhận hàng đã xếp lên tàu khi áp dụng điều kiện FCA nhằm mục đích chủ yếu nào sau đây?",
    "options": {
      "A": "Tạo điều kiện để người bán có được chứng từ xác nhận hàng đã xếp lên tàu nhằm đáp ứng yêu cầu thanh toán, đặc biệt khi sử dụng L/C.",
      "B": "Chuyển nghĩa vụ thuê phương tiện vận tải chính từ người mua sang người bán.",
      "C": "Chuyển thời điểm chuyển rủi ro sang khi hàng được xếp lên tàu.",
      "D": "Bắt buộc FCA chỉ được sử dụng đối với vận tải đường biển."
    },
    "answer": "A",
    "explanation": "Mục đích duy nhất của điều khoản On-Board B/L trong FCA Incoterms 2020 là gỡ rối cho người bán xuất khẩu khi thanh toán bằng L/C yêu cầu xuất trình vận đơn đường biển đã xếp hàng.",
    "pdf_no": 42
  },
  {
    "id": 134,
    "orig_no": "134",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong tình huống người mua có khả năng thực hiện thủ tục nhập khẩu, còn người bán vẫn muốn chịu rủi ro vận tải đến kho người mua, điều kiện nào nên được sử dụng?",
    "options": {
      "A": "DAP.",
      "B": "FOB.",
      "C": "EXW.",
      "D": "FAS."
    },
    "answer": "A",
    "explanation": "Người mua có khả năng làm thủ tục nhập khẩu, còn người bán chịu chi phí và rủi ro vận tải tới kho người mua thì điều kiện chuẩn xác nhất là DAP (Delivered At Place).",
    "pdf_no": null
  },
  {
    "id": 135,
    "orig_no": "135",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong trường hợp hàng container được giao cho người chuyên chở tại bến container, vì sao FCA thường đáng cân nhắc?",
    "options": {
      "A": "FCA yêu cầu người bán chịu rủi ro đến đích.",
      "B": "FCA có thể làm cho điểm giao hàng/chuyển rủi ro phù hợp hơn với quy trình logistics thực tế.",
      "C": "FCA luôn làm giá hàng thấp nhất.",
      "D": "FCA bắt buộc bảo hiểm toàn bộ."
    },
    "answer": "B",
    "explanation": "Hàng container nên dùng FCA vì điểm giao hàng và chuyển rủi ro tại bến CY/kho CFS phù hợp hoàn hảo với quy trình giao nhận thực tế của các hãng tàu container hiện đại.",
    "pdf_no": 43
  },
  {
    "id": 136,
    "orig_no": "136",
    "chapter_id": 2,
    "chapter": "Chương 2: Incoterms 2020 - Các điều kiện thương mại quốc tế",
    "question": "Trong vận chuyển đường biển, người bán muốn người mua chịu rủi ro khi hàng đã được giao lên tàu tại cảng đi, nhưng người bán vẫn trả cước đến cảng đích và phải mua bảo hiểm theo Incoterms®, điều kiện phù hợp là:",
    "options": {
      "A": "CFR.",
      "B": "DAP.",
      "C": "CPT.",
      "D": "CIF."
    },
    "answer": "D",
    "explanation": "Đường biển, người bán trả cước đến cảng đích, rủi ro chuyển tại cảng đi và người bán có nghĩa vụ mua bảo hiểm theo quy tắc Incoterms là điều kiện CIF (Cost, Insurance and Freight).",
    "pdf_no": null
  },
  {
    "id": 137,
    "orig_no": "137",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Chứng từ quan trọng nhất trong bộ chứng từ xuất khẩu chứng minh quyền sở hữu đối với hàng hóa đi đường biển là:",
    "options": {
      "A": "Vận đơn đường biển (Bill of Lading - B/L)",
      "B": "Hóa đơn thương mại (Commercial Invoice)",
      "C": "Phiếu đóng gói hàng hóa (Packing List)",
      "D": "Giấy chứng nhận xuất xứ (C/O)"
    },
    "answer": "A",
    "explanation": "Theo Điều 27 Luật Thương mại 2005, mua bán hàng hóa quốc tế phải được thực hiện trên cơ sở hợp đồng bằng văn bản hoặc các hình thức khác có giá trị pháp lý tương đương (điện báo, telex, fax, thông điệp dữ liệu điện tử).",
    "pdf_no": 44
  },
  {
    "id": 138,
    "orig_no": "138",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty A (tại Việt Nam) ký hợp đồng nhượng quyền thương mại với Tập đoàn nước giải khát B. Theo thỏa thuận, Tập đoàn B chuyển giao quy trình công nghệ và yêu cầu Công ty A phải tiến hành sản xuất, đóng chai sản phẩm đúng theo các chỉ dẫn và tiêu chuẩn kỹ thuật nghiêm ngặt do Tập đoàn B đưa ra trước khi bán ra thị trường dưới nhãn hiệu của B. Dựa vào nội dung từ hình ảnh trên, ví dụ thực tế của Công ty A thuộc loại hợp đồng nhượng quyền thương mại nào?",
    "options": {
      "A": "Hợp đồng sản xuất sản phẩm theo hướng dẫn của bên giao quyền thương mại",
      "B": "Hợp đồng theo đó bên nhận quyền tự do tổ chức sản xuất rồi bán sản phẩm dưới nhãn hiệu của bên giao quyền thương mại",
      "C": "Hợp đồng phân phối sản phẩm theo đó bên nhận quyền tự giới hạn việc bán các sản phẩm nhất định trong các cửa hàng mang nhãn hiệu của bên giao quyền thương mại",
      "D": "Hợp đồng ủy thác xuất nhập khẩu sản phẩm độc quyền"
    },
    "answer": "A",
    "explanation": "Phán quyết của Trọng tài thương mại quốc tế có giá trị chung thẩm (final and binding), không thể kháng cáo lên cấp cao hơn và được công nhận, thi hành tại hơn 160 quốc gia theo Công ước New York 1958 về công nhận và thi hành phán quyết trọng tài nước ngoài.",
    "pdf_no": null
  },
  {
    "id": 139,
    "orig_no": "139",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty Nông sản Z (Việt Nam) xuất khẩu lô hàng cà phê cho Công ty M (Đức). Khi hàng cập cảng Hamburg, bên mua phát hiện độ ẩm của cà phê vượt quá mức thỏa thuận trong hợp đồng. Công ty M lập tức nộp đơn kiện Công ty Z ra Trung tâm Trọng tài Quốc tế mà không trao đổi hay liên hệ trước. Hành động của Công ty M có đúng với quy trình giải quyết tranh chấp thông thường trong giao dịch ngoại thương không?",
    "options": {
      "A": "Sai, vì trước hết các bên phải gặp gỡ, thương lượng để giải quyết; nếu không thành công mới kiện ra Trọng tài hoặc Tòa án.",
      "B": "Sai, vì bắt buộc phải nộp đơn lên Tòa án quốc tế trước khi đưa ra Trọng tài.",
      "C": "Đúng, vì khi phát hiện vi phạm thì bên mua có quyền khởi kiện ngay lập tức.",
      "D": "Đúng, vì Trọng tài quốc tế là cơ quan duy nhất có thẩm quyền xử lý tranh chấp ngoại thương"
    },
    "answer": "A",
    "explanation": "Nghiệp vụ hàng đổi hàng (Barter) là hình thức mua bán đối lưu cổ điển nhất, trong đó hai bên trao đổi trực tiếp lượng hàng hóa có giá trị tương đương nhau mà không sử dụng tiền mặt để thanh toán.",
    "pdf_no": 95
  },
  {
    "id": 140,
    "orig_no": "140",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty X (Việt Nam) ký hợp đồng xuất khẩu nông sản cho Công ty Y (Hàn Quốc) vào tháng 1/2026. Hợp đồng quy định: \"Thời hạn giao hàng từ tháng 2/2026 đến tháng 7/2026, thời điểm giao hàng cụ thể sẽ do Bên mua thông báo trước 15 ngày\". Điều khoản này thể hiện cách xác định thời hạn giao hàng nào?",
    "options": {
      "A": "Thời hạn giao hàng có định kỳ (bằng một khoảng thời gian nhất định tùy theo sự lựa chọn của người mua)",
      "B": "Thời hạn giao hàng không định kỳ",
      "C": "Thời hạn giao hàng ngay",
      "D": "Thời hạn giao hàng không xác định"
    },
    "answer": "A",
    "explanation": "Điều khoản thời hạn giao hàng theo quyền lựa chọn của người mua quy định người mua có quyền chọn ngày giao hàng cụ thể trong một khoảng thời gian nhất định và phải thông báo trước cho người bán một thời gian hợp lý.",
    "pdf_no": 45
  },
  {
    "id": 141,
    "orig_no": "141",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Đặc điểm về chủ thể tham gia hợp đồng ngoại thương là:",
    "options": {
      "A": "Các bên có quốc tịch khác nhau và có trụ sở ở các nước khác nhau",
      "B": "Các bên có cùng quốc tịch nhưng trụ sở nằm ở hai tỉnh khác nhau",
      "C": "Chỉ gồm các tổ chức chính phủ của các quốc gia",
      "D": "Bắt buộc một trong hai bên phải là công ty đa quốc gia"
    },
    "answer": "A",
    "explanation": "Theo Công ước Viên 1980 (CISG - Điều 1) và thông lệ thương mại quốc tế, đặc điểm cơ bản nhất xác định tính chất quốc tế của hợp đồng ngoại thương là các bên tham gia có trụ sở thương mại (place of business) đặt tại các quốc gia khác nhau.",
    "pdf_no": 46
  },
  {
    "id": 142,
    "orig_no": "142",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Để giảm thiểu rủi ro chôn vốn, bất đồng bộ chứng từ và bảo đảm điều kiện miễn/hoàn thuế Hải quan trong kinh doanh tạm nhập - tái xuất, doanh nghiệp trung gian CẦN quy định rõ điều khoản thanh toán nào sau đây trong các hợp đồng?",
    "options": {
      "A": "Sử dụng L/C giáp lưng, đồng thời thu xếp sao cho việc trả tiền hợp đồng nhập khẩu chậm hơn so với thời hạn thanh toán trong hợp đồng xuất khẩu và bắt buộc thanh toán qua ngân hàng thương mại hợp lệ.",
      "B": "Quy định hợp đồng tạm nhập thanh toán 100% bằng T/T trả trước, còn hợp đồng tái xuất cho phép người mua trả chậm bằng phương thức D/A (Chấp nhận thanh toán trao chứng từ).",
      "C": "Thỏa thuận cho phép bên mua tái xuất thanh toán tiền trực tiếp cho bên bán tạm nhập để tiết kiệm chi phí giao dịch ngân hàng quốc tế.",
      "D": "Cho phép thanh toán bằng tiền mặt qua biên giới hoặc bù trừ công nợ trực tiếp giữa ba bên mà không cần qua tài khoản ngân hàng."
    },
    "answer": "A",
    "explanation": "Trong kinh doanh tạm nhập - tái xuất, để tránh chôn vốn và bảo đảm đồng bộ, doanh nghiệp trung gian thường sử dụng L/C giáp lưng (Back-to-Back L/C), thu xếp thời hạn thanh toán tiền nhập khẩu chậm hơn tiền xuất khẩu và bắt buộc thanh toán qua ngân hàng để đáp ứng quy định hoàn thuế của Hải quan.",
    "pdf_no": 47
  },
  {
    "id": 143,
    "orig_no": "143",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Điều khoản Bất khả kháng (Force Majeure) giải thoát trách nhiệm thực hiện hợp đồng cho các bên khi:",
    "options": {
      "A": "Xảy ra sự kiện khách quan, không thể lường trước và không thể khắc phục dù đã cố gắng.",
      "B": "Biến động tỷ giá hối đoái làm hợp đồng bị thua lỗ",
      "C": "Giá nguyên vật liệu đầu vào tăng cao đột biến",
      "D": "Đối tác cung ứng của người bán bị phá sản"
    },
    "answer": "A",
    "explanation": "Điều khoản Bất khả kháng (Force Majeure) giải phóng nghĩa vụ thực hiện hợp đồng khi xảy ra sự kiện hội đủ 3 điều kiện: mang tính khách quan, không thể lường trước được tại thời điểm ký kết và không thể khắc phục được dù đã áp dụng mọi biện pháp cần thiết.",
    "pdf_no": 48
  },
  {
    "id": 144,
    "orig_no": "144",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Điều khoản Dung sai số lượng trong hợp đồng có ý nghĩa gì?",
    "options": {
      "A": "Cho phép giao chênh lệch tăng/giảm một tỷ lệ % nhất định so với số lượng hợp đồng.",
      "B": "Bắt buộc người bán giao đúng chính xác 100% không lệch một gram",
      "C": "Người mua có quyền trả lại toàn bộ hàng nếu giao thừa 0.5%",
      "D": "Tỷ lệ giao do bên vận chuyển tùy ý quyết định"
    },
    "answer": "A",
    "explanation": "Điều khoản dung sai số lượng (More or less clause / Tolerance clause) cho phép người bán giao hàng thừa hoặc thiếu một tỷ lệ phần trăm nhất định (thường +/- 5% hoặc 10%) so với số lượng quy định trong hợp đồng để phù hợp với đặc thù vận chuyển hàng rời hoặc phương tiện chuyên chở.",
    "pdf_no": 49
  },
  {
    "id": 145,
    "orig_no": "145",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Điều khoản Tên hàng (Commodity) trong hợp đồng ngoại thương thường KHÔNG sử dụng phương pháp mô tả nào?",
    "options": {
      "A": "Nêu họ tên người đại diện pháp luật bên bán",
      "B": "Nêu nhãn hiệu hoặc thương hiệu đăng ký",
      "C": "Nêu Mã HS (HS Code) của hàng hóa",
      "D": "Nêu tên thương mại kèm tên khoa học"
    },
    "answer": "A",
    "explanation": "Tên hàng (Commodity) trong hợp đồng thương mại mô tả đặc tính của sản phẩm (tên thương mại, tên khoa học, nhãn hiệu thương hiệu, mã HS, quy cách phẩm chất), tuyệt đối không nêu họ tên cá nhân người đại diện pháp luật của bên bán.",
    "pdf_no": null
  },
  {
    "id": 146,
    "orig_no": "146",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Điều kiện để một thương nhân Việt Nam ký kết hợp đồng xuất nhập khẩu hàng hóa thông thường là:",
    "options": {
      "A": "Được đăng ký kinh doanh hợp pháp theo quy định pháp luật",
      "B": "Phải có giấy phép xuất nhập khẩu do Bộ Công Thương cấp riêng",
      "C": "Bắt buộc phải là doanh nghiệp nhà nước",
      "D": "Phải có vốn điều lệ tối thiểu 10 tỷ đồng"
    },
    "answer": "A",
    "explanation": "Theo Nghị định 69/2018/NĐ-CP hướng dẫn Luật Quản lý ngoại thương, mọi thương nhân Việt Nam có đăng ký kinh doanh hợp pháp đều có quyền kinh doanh xuất nhập khẩu các mặt hàng thông thường mà không cần phải xin giấy phép xuất nhập khẩu riêng.",
    "pdf_no": 50
  },
  {
    "id": 147,
    "orig_no": "147",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Đối với Hợp đồng nhượng quyền, phí nhượng quyền ban đầu (Initial Franchise Fee) khác với Phí quyền kinh doanh hàng tháng (Royalty Fee) ở điểm nào?",
    "options": {
      "A": "Phí nhượng quyền ban đầu (Initial Fee) trả 1 lần khi ký hợp đồng để mua quyền sử dụng thương hiệu và nhận chuyển giao ban đầu; Phí quyền kinh doanh hàng tháng (Royalty Fee) trả định kỳ để duy trì quyền sử dụng và sự hỗ trợ liên tục.",
      "B": "Cả hai khoản phí này đều phải được hoàn trả lại cho Bên nhận nhượng quyền khi kết thúc hợp đồng.",
      "C": "Phí nhượng quyền ban đầu (Initial Fee) tính theo % doanh thu hàng tháng; phí quyền kinh doanh hàng tháng (Royalty Fee) là khoản tiền cố định trả 1 lần.",
      "D": "Phí quyền kinh doanh hàng tháng (Royalty Fee) do cơ quan Thuế thu; phí nhượng quyền ban đầu (Initial Fee) do Bên nhượng quyền thu."
    },
    "answer": "A",
    "explanation": "Trong hợp đồng nhượng quyền thương mại (Franchising), Phí nhượng quyền ban đầu (Initial Fee) trả 1 lần để mua quyền kinh doanh và công nghệ ban đầu; còn Phí quyền kinh doanh hàng tháng (Royalty Fee) là khoản phí định kỳ (thường theo % doanh thu) để duy trì quyền sử dụng thương hiệu và nhận hỗ trợ liên tục.",
    "pdf_no": 51
  },
  {
    "id": 148,
    "orig_no": "148",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Đối với phương thức thanh toán của hợp đồng mua bán hàng hóa quốc tế, “phương thức thanh toán kèm chứng từ” là:",
    "options": {
      "A": "Thư tín dụng (L/C)",
      "B": "Chuyển tiền bằng điện (T/T)",
      "C": "Nhờ thu hối phiếu trơn (Clean Collection)",
      "D": "Tất cả các đáp án đều đúng"
    },
    "answer": "A",
    "explanation": "Thư tín dụng (L/C - Letter of Credit) là phương thức thanh toán kèm chứng từ chặt chẽ nhất, trong đó ngân hàng phát hành cam kết thanh toán vô điều kiện cho người bán khi nhận được bộ chứng từ hoàn toàn phù hợp với các điều kiện của L/C.",
    "pdf_no": 52
  },
  {
    "id": 149,
    "orig_no": "149",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Đơn vị đo lường nào dưới đây KHÔNG thuộc hệ đo lường Anh – Mỹ:",
    "options": {
      "A": "Mét",
      "B": "Pound",
      "C": "Inch",
      "D": "Ounce"
    },
    "answer": "A",
    "explanation": "Mét (meter) thuộc hệ đo lường thập phân quốc tế (Hệ SI/Metric system). Pound, Inch, Ounce thuộc hệ đo lường Anh - Mỹ (Imperial / US Customary system).",
    "pdf_no": 53
  },
  {
    "id": 150,
    "orig_no": "150",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Giấy chứng nhận xuất xứ hàng hóa (Certificate of Origin - C/O) có vai trò chính là:",
    "options": {
      "A": "Xác định nguồn gốc xuất xứ để hưởng ưu đãi thuế quan (FTA) hoặc quản lý ngạch",
      "B": "Chứng nhận chất lượng sản phẩm đạt ISO",
      "C": "Thay thế cho vận đơn đường biển",
      "D": "Xác định trọng lượng tịnh của lô hàng"
    },
    "answer": "A",
    "explanation": "Giấy chứng nhận xuất xứ hàng hóa (C/O) là chứng từ quan trọng xác định quốc gia xuất xứ của sản phẩm, làm căn cứ áp dụng thuế quan ưu đãi đặc biệt theo các hiệp định thương mại tự do (FTA) hoặc kiểm soát hạn ngạch nhập khẩu.",
    "pdf_no": 54
  },
  {
    "id": 151,
    "orig_no": "151",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Hợp đồng lưu kho trong thương mại quốc tế là văn bản thỏa thuận được ký kết giữa các bên nào sau đây?",
    "options": {
      "A": "Giữa chủ hàng và công ty kinh doanh kho hàng",
      "B": "Giữa người xuất khẩu và cơ quan quản lý hải quan",
      "C": "Giữa chủ hàng và công ty vận tải đường biển",
      "D": "Giữa đơn vị bảo hiểm và bên cho thuê kho"
    },
    "answer": "A",
    "explanation": "Hợp đồng lưu kho (Warehousing contract) là thỏa thuận pháp lý giữa chủ sở hữu hàng hóa (chủ hàng) và doanh nghiệp cung cấp dịch vụ kho bãi, quy định điều kiện gửi giữ, bảo quản và trả lại hàng hóa.",
    "pdf_no": 55
  },
  {
    "id": 152,
    "orig_no": "152",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Ký mã hiệu hàng hóa (Shipping Marks) ghi ngoài bao bì nhằm mục đích chính là gì?",
    "options": {
      "A": "Dễ nhận dạng lô hàng, hướng dẫn bảo quản hàng hóa, phân biệt và hướng dẫn thao tác bốc xếp, vận chuyển",
      "B": "Trang trí tính thẩm mỹ ngoài thùng",
      "C": "Quảng cáo sản phẩm cho người xuất khẩu",
      "D": "Giảm mức thuế xuất nhập khẩu"
    },
    "answer": "A",
    "explanation": "Ký mã hiệu hàng hóa (Shipping marks) ghi ngoài bao bì nhằm mục đích giúp các bên dễ dàng nhận biết, phân loại kiện hàng, hướng dẫn công nhân cảng bốc dỡ an toàn và điều kiện bảo quản trong quá trình vận chuyển.",
    "pdf_no": 56
  },
  {
    "id": 153,
    "orig_no": "153",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Một xưởng cơ khí tại Hải Phòng tiếp nhận 1 động cơ tàu biển bị hỏng từ Singapore theo hình thức tạm nhập tái xuất để sửa chữa. Sau khi sửa xong, doanh nghiệp muốn giữ lại bán tại Việt Nam thì phải làm gì?",
    "options": {
      "A": "Khai báo hải quan chuyển mục đích sử dụng sang tiêu thụ nội địa và nộp đủ thuế",
      "B": "Tự động xuất hóa đơn bán hàng vì động cơ đã được gia công sửa chữa tại Việt Nam",
      "C": "Tự thanh lý hàng hóa và chuyển tiền thu được cho đối tác nước ngoài",
      "D": "Tiêu hủy ngay động cơ và báo cáo tổn thất cho cơ quan hải quan quản lý."
    },
    "answer": "A",
    "explanation": "Hàng hóa tạm nhập tái xuất để sửa chữa thuộc diện chịu sự giám sát hải quan và tạm miễn thuế; nếu muốn giữ lại tiêu thụ nội địa, doanh nghiệp bắt buộc phải đăng ký tờ khai chuyển đổi mục đích sử dụng với cơ quan Hải quan và nộp đầy đủ các loại thuế phát sinh.",
    "pdf_no": 57
  },
  {
    "id": 154,
    "orig_no": "154",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Mục đích của việc quy định tên hàng theo mã HS (Harmonized System Code) trong hợp đồng ngoại thương là:",
    "options": {
      "A": "Bảng phân loại và mã hóa hàng hóa giúp chuẩn hóa tên gọi và phục vụ khai báo hải quan",
      "B": "Để xác định giá thị trường thế giới",
      "C": "Để xác định đơn vị vận tải",
      "D": "Để xác định nguồn gốc xuất xứ hàng hóa"
    },
    "answer": "A",
    "explanation": "Mã HS (Harmonized Commodity Description and Coding System) do WCO ban hành là hệ thống phân loại và mã hóa hàng hóa quốc tế chuẩn hóa, giúp cơ quan hải quan các nước áp mã số thống nhất để tính thuế và quản lý chuyên ngành.",
    "pdf_no": 58
  },
  {
    "id": 155,
    "orig_no": "155",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Nguồn luật điều chỉnh hợp đồng ngoại thương KHÔNG bao gồm nguồn nào sau đây:",
    "options": {
      "A": "Quyết định nội bộ đơn phương của người bán hoặc người mua",
      "B": "Điều ước quốc tế, công ước, hiệp định quốc tế",
      "C": "Luật quốc gia (luật cơ bản hoặc văn kiện dưới luật)",
      "D": "Tập quán thương mại (như Incoterms, UCP 600) và Án lệ"
    },
    "answer": "A",
    "explanation": "Nguồn luật điều chỉnh hợp đồng thương mại quốc tế gồm: Điều ước quốc tế (CISG), Luật quốc gia, Tập quán thương mại quốc tế (Incoterms, UCP) và Tiền lệ án lệ. Quyết định nội bộ đơn phương của một bên không có giá trị pháp lý làm nguồn luật điều chỉnh hợp đồng.",
    "pdf_no": 59
  },
  {
    "id": 156,
    "orig_no": "156",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Nhận định nào sau đây là ĐÚNG khi đề cập tới quy định về việc giao nhận số lượng và chất lượng hàng hóa trong Hợp đồng mua bán hàng hóa quốc tế?",
    "options": {
      "A": "Giao nhận về số lượng xác định số lượng thực tế bằng các phương pháp cân, đo, đong, đếm; còn kiểm tra chất lượng có thể tiến hành bằng phương pháp cảm quan hoặc phân tích.",
      "B": "Giao nhận về số lượng là việc kiểm tra tính năng, công dụng, hiệu suất và hình dáng của hàng hóa.",
      "C": "Kiểm tra chất lượng hàng hóa bắt buộc phải tiến hành trên 100% toàn bộ lô hàng, không chấp nhận phương pháp kiểm tra điển hình.",
      "D": "Phương pháp cảm quan chỉ áp dụng cho việc giao nhận về số lượng hàng hóa."
    },
    "answer": "A",
    "explanation": "Mẫu hợp đồng Gencon (Uniform General Charter) do BIMCO ban hành là mẫu hợp đồng thuê tàu chuyến (Voyage Charter Party) phổ biến và chuẩn mực nhất trên thế giới.",
    "pdf_no": null
  },
  {
    "id": 157,
    "orig_no": "157",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Nhận định nào sau đây là ĐÚNG về Hợp đồng đại lý thủ tục hải quan:",
    "options": {
      "A": "Bên ủy thác có nghĩa vụ cung cấp các thông tin giấy tờ cần thiết, bảo vệ quyền lợi của đại lý và không vi phạm quyền sở hữu trí tuệ.",
      "B": "Thù lao của đại lý được cơ quan Hải quan ấn định cố định, không phụ thuộc vào uy tín hay tính chất hàng hóa.",
      "C": "Người đại lý không có quyền tạm ngưng hoặc đơn phương chấm dứt hợp đồng trong bất kỳ trường hợp nào.",
      "D": "Người đại lý có thể tiết lộ thông tin lô hàng của bên ủy thác cho các đối thủ cạnh tranh nếu nhận được chi phí bổ sung."
    },
    "answer": "A",
    "explanation": "Theo Điều 15 CISG 1980: Người chào hàng có quyền rút lại (thu hồi) chào hàng nếu thông báo rút lại đến tay người được chào hàng trước hoặc cùng thời điểm với bức chào hàng.",
    "pdf_no": 60
  },
  {
    "id": 158,
    "orig_no": "158",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Nội dung nào sau đây KHÔNG quy định bắt buộc trên Vận đơn đường biển:",
    "options": {
      "A": "Đơn giá hàng hóa",
      "B": "Tên người nhận hàng",
      "C": "Tên cảng xếp hàng",
      "D": "Khối lượng hàng hóa"
    },
    "answer": "B",
    "explanation": "Đơn giá CFR = Giá xuất kho (3,000 USD) + Chi phí vận tải nội địa (10 USD) + Cước vận tải quốc tế (150 USD) = 3,160.00 USD/MT CFR Vancouver Port, Canada, Incoterms 2020.",
    "pdf_no": null
  },
  {
    "id": 159,
    "orig_no": "159",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Sự kiện nào sau đây thường được công nhận là sự kiện Bất khả kháng?",
    "options": {
      "A": "Thiên tai, động đất, sóng thần, chiến tranh, dịch bệnh bị phong tỏa hoàn toàn",
      "B": "Lãi suất ngân hàng gia tăng đột biến",
      "C": "Công nhân đình công tại nhà máy bên bán do chậm lương",
      "D": "Đơn vị thầu phụ của bên bán giao hàng chậm trễ dẫn đến chậm lịch giao hàng"
    },
    "answer": "A",
    "explanation": "Để hạn chế rủi ro người bán chậm giao hàng hoặc người mua chậm thanh toán, hợp đồng ngoại thương thường quy định rõ Điều khoản phạt vi phạm hợp đồng (Penalty / Liquidated damages) với mức phạt theo tỷ lệ % giá trị vi phạm cho mỗi ngày/tuần chậm trễ.",
    "pdf_no": 61
  },
  {
    "id": 160,
    "orig_no": "160",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Theo Công ước La Haye năm 1964, hợp đồng mua bán ngoại thương là hợp đồng mua bán mà trong đó:",
    "options": {
      "A": "Các bên ký kết có trụ sở thương mại ở các nước khác nhau và hàng hóa được chuyển từ nước này sang nước khác, hoăc việc trao đổi ý chí được lập ở các nước khác nhau.",
      "B": "Hàng hóa bắt buộc phải vận chuyển bằng đường biển",
      "C": "Đồng tiền thanh toán bắt buộc phải là Đô la Mỹ (USD)",
      "D": "Cả hai bên đều là cơ quan nhà nước ở hai quốc gia khác nhau"
    },
    "answer": "A",
    "explanation": "Rủi ro lớn nhất của phương pháp Giá cố định (Fixed price) là khi giá thị trường thế giới biến động mạnh trong thời gian thực hiện hợp đồng, bên chịu biến động bất lợi sẽ bị thua lỗ nặng nề.",
    "pdf_no": 62
  },
  {
    "id": 161,
    "orig_no": "161",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Theo Điểm 15 Điều 3 Luật Thương mại 2005, hình thức nào sau đây có giá trị tương đương văn bản:",
    "options": {
      "A": "Điện báo, telex, fax, thông điệp dữ liệu",
      "B": "Lời nói trực tiếp",
      "C": "Thỏa thuận ngầm",
      "D": "Bắt tay giao kết"
    },
    "answer": "A",
    "explanation": "Thời hạn khiếu nại (Claim period) là khoảng thời gian thỏa thuận trong hợp đồng mà bên mua có quyền thông báo cho bên bán về các khiếm khuyết, sai lệch của hàng hóa kèm theo các biên bản giám định chứng cứ hợp lệ.",
    "pdf_no": 63
  },
  {
    "id": 162,
    "orig_no": "162",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Theo Phương pháp xác định số lượng trong Hợp đồng mua bán hàng hóa quốc tế, phương pháp tính khối lượng cả bì (Gross weight) được áp dụng trong trường hợp nào sau đây?",
    "options": {
      "A": "Khi giá 1 đơn vị bao bì tương đương với giá 1 đơn vị hàng hóa, hoặc khối lượng bao bì không đáng kể so với khối lượng hàng.",
      "B": "Khi giá trị của bao bì cao hơn rất nhiều so với bản thân hàng hóa và trọng lượng bao bì chiếm tỷ trọng lớn.",
      "C": "Khi người mua yêu cầu trừ hoàn toàn trọng lượng vỏ bao (tare) ra khỏi tổng khối lượng để chỉ tính giá tiền trị giá hàng thực tế.",
      "D": "Khi pháp luật quốc tế bắt buộc áp dụng cho tất cả các loại hàng hóa xuất nhập khẩu đóng công-ten-nơ (container)"
    },
    "answer": "A",
    "explanation": "Theo pháp luật thuế và hải quan Việt Nam, nguyên liệu và vật tư nhập khẩu để thực hiện hợp đồng gia công cho thương nhân nước ngoài được miễn thuế nhập khẩu và được miễn thuế xuất khẩu đối với sản phẩm gia công xuất khẩu.",
    "pdf_no": 64
  },
  {
    "id": 163,
    "orig_no": "163",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Theo quy định của Luật Thương mại Việt Nam, bên nào có nghĩa vụ chịu trách nhiệm về tính hợp pháp của quyền sở hữu trí tuệ/sở hữu công nghiệp đối với hàng hóa, nhãn hiệu, kiểu dáng hoặc công nghệ được sử dụng trong hợp đồng gia công?",
    "options": {
      "A": "Bên giao gia công (chịu trách nhiệm về tính hợp pháp của quyền Sở hữu trí tuệ đối với hàng hóa gia công, máy móc, nhãn hiệu cung cấp).",
      "B": "Bên nhận gia công (do là đơn vị trực tiếp sản xuất hàng hóa).",
      "C": "Cơ quan Hải quan tại cửa khẩu làm thủ tục thông quan.",
      "D": "Cả hai bên cùng chịu trách nhiệm liên đới bình đẳng trước pháp luật trong mọi trường hợp."
    },
    "answer": "A",
    "explanation": "Cảng chuyển tải/thông qua (Transhipment port) là cảng trung gian nơi hàng hóa được dỡ xuống từ phương tiện vận tải chặng trước để xếp lên phương tiện vận tải chặng tiếp theo trong hành trình đa chặng.",
    "pdf_no": null
  },
  {
    "id": 164,
    "orig_no": "164",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Theo quy định tại Điều 3 về trách nhiệm các bên trong Hợp đồng thuê kho, nghĩa vụ nào sau đây thuộc về Bên cho thuê kho?",
    "options": {
      "A": "Hoàn thành thủ tục nhận hàng, bảo quản hàng hóa, bồi thường nếu hỏng hóc, mất mát.",
      "B": "Thực hiện đầy đủ nội dung trong giấy yêu cầu lưu kho.",
      "C": "Cung cấp chứng từ cần thiết trước khi hàng tới kho.",
      "D": "Chịu trách nhiệm khi hàng lưu kho quá lâu bị biến đổi phẩm chất."
    },
    "answer": "A",
    "explanation": "Phương pháp xác định số lượng theo trọng lượng thương mại (Commercial weight) được áp dụng riêng cho các mặt hàng có độ co giãn ẩm lớn (như bông, tơ tằm, sợi, len), tính bằng công thức: Trọng lượng thực tế x (100 + Độ ẩm tiêu chuẩn) / (100 + Độ ẩm thực tế).",
    "pdf_no": null
  },
  {
    "id": 165,
    "orig_no": "165",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Theo quy định về trách nhiệm của các bên trong hợp đồng ủy thác giao nhận hàng hóa quốc tế, công việc nào sau đây thuộc trách nhiệm của Bên ủy thác?",
    "options": {
      "A": "Chịu trách nhiệm về tính pháp lý của lô hàng, chuẩn bị kho bãi và mua bảo hiểm hàng hóa",
      "B": "Chịu trách nhiệm về thủ tục hải quan và bồi thường thiệt hại nếu có",
      "C": "Giao nhận hàng hóa đúng quy định",
      "D": "Thực hiện bốc dỡ và lưu xe tại cảng"
    },
    "answer": "A",
    "explanation": "Xác định phẩm chất theo mẫu hàng (Sale by sample) đòi hỏi hàng thực giao phải hoàn toàn phù hợp và giống hệt với mẫu đã được hai bên đối chiếu, niêm phong và lưu giữ.",
    "pdf_no": null
  },
  {
    "id": 166,
    "orig_no": "166",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Thỏa thuận đóng gói \"Export Standard Packaging\" trong hợp đồng được hiểu là:",
    "options": {
      "A": "Đóng gói theo tiêu chuẩn xuất khẩu thông thường phù hợp với phương thức vận tải",
      "B": "Đóng gói theo chuẩn riêng của hải quan nước nhập khẩu",
      "C": "Đóng gói bằng thùng gỗ bọc thép bảo vệ",
      "D": "Hàng để trần không bao bì"
    },
    "answer": "A",
    "explanation": "Điều khoản bảo hành (Warranty clause) quy định cam kết của người bán về việc bảo đảm chất lượng hoạt động của máy móc thiết bị trong một thời hạn nhất định, cam kết sửa chữa hoặc thay thế miễn phí linh kiện nếu lỗi thuộc về nhà sản xuất.",
    "pdf_no": null
  },
  {
    "id": 167,
    "orig_no": "167",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong các hợp đồng mua bán hàng hóa quốc tế, điều khoản thanh toán trả trước (Advance Payment / Prepayment) thường được người bán đề xuất và quy định trong trường hợp nào sau đây?",
    "options": {
      "A": "Lô hàng được sản xuất/gia công theo đơn đặt hàng riêng (hàng đặc thù khó bán cho bên thứ ba), người mua là đối tác mới chưa có lịch sử tín dụng rõ ràng, hoặc thị trường nước người mua có rủi ro cao về tài chính/chính trị.",
      "B": "Lô hàng có giá trị lớn, người mua nắm thế chủ động đàm phán (thị trường thuộc về bên mua) và yêu cầu người bán phải chia sẻ rủi ro tài chính.",
      "C": "Khi hai bên hợp tác lâu năm, có mức độ tin tưởng tuyệt đối và muốn tối giản hóa tối đa các thủ tục chứng từ ngân hàng.",
      "D": "Quy định bắt buộc về điều khoản thanh toán áp dụng cho tất cả các hợp đồng xuất nhập khẩu giao hàng bằng đường biển."
    },
    "answer": "A",
    "explanation": "Hợp đồng đại lý ngoại thương quy định phạm vi ủy quyền, quyền và nghĩa vụ của bên đại lý nhân danh chính mình hoặc nhân danh người ủy thác thực hiện việc mua bán hàng hóa cho bên giao đại lý để hưởng thù lao.",
    "pdf_no": null
  },
  {
    "id": 168,
    "orig_no": "168",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong hợp đồng mua bán hàng hóa quốc tế, định nghĩa “Giá linh hoạt (Flexible price)” là:",
    "options": {
      "A": "Giá đã được xác định trong lúc ký hợp đồng, nhưng có thể được xem xét lại nếu sau này, vào lúc giao hàng, giá thị trường của hàng hóa đó có sự biến động với một mức nhất định.",
      "B": "Giá được khẳng định lúc ký kết hợp đồng và không thay đổi trong quá trình thực hiện hợp đồng.",
      "C": "Giá được xác định sau khi ký hợp đồng hoặc bằng cách đàm phán, thỏa thuận trong một thời gian nào đó, hoặc bằng cách dựa vào giá thế giới ở một ngày nào đó trước hay trong khi giao hàng.",
      "D": "Giá được tính toán dứt khoát vào lúc thực hiện hợp đồng trên cơ sở giá cả qui định ban đầu, có đề cập tới những biến động về chi phí sản xuất trong thời kỳ thực hiện hợp đồng."
    },
    "answer": "A",
    "explanation": "Vận đơn hoàn hảo (Clean Bill of Lading) là vận đơn không có bất kỳ ghi chú xấu nào của thuyền trưởng về tình trạng khuyết tật của hàng hóa hoặc bao bì đóng gói bên ngoài.",
    "pdf_no": null
  },
  {
    "id": 169,
    "orig_no": "169",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong phương thức nhờ thu kèm chứng từ theo điều kiện D/P (Documents against Payment), ngân hàng thu hộ (Collecting Bank) chỉ được phép giao bộ chứng từ thương mại cho người nhập khẩu khi nào?",
    "options": {
      "A": "Người nhập khẩu đã hoàn tất việc thanh toán cho lô hàng",
      "B": "Người nhận khẩu đã hoàn tất thủ tục kiểm tra chất lượng hàng hóa tại cảng đến",
      "C": "Người nhập khẩu đã ký chấp nhận thanh toán trên hối phiếu trả chậm",
      "D": "Người nhập khẩu phát hành thư cam kết thanh toán đến ngân hàng thu hộ"
    },
    "answer": "A",
    "explanation": "Điều khoản trọng tài (Arbitration clause) chuẩn mực phải quy định rõ: Tổ chức trọng tài giải quyết tranh chấp (như VIAC, SIAC, ICC), địa điểm xét xử trọng tài, quy tắc tố tụng áp dụng, luật nội dung điều chỉnh và ngôn ngữ dùng trong tố tụng.",
    "pdf_no": null
  },
  {
    "id": 170,
    "orig_no": "170",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong thương mại quốc tế, Giấy chứng nhận bảo hiểm (Insurance Certificate) được đơn vị bảo hiểm cấp cho người được bảo hiểm trong trường hợp nào?",
    "options": {
      "A": "Cấp theo hợp đồng bảo hiểm dài hạn",
      "B": "Khi giao dịch thực hiện theo phương thức thanh toán L/C trả trước",
      "C": "Khi người xuất khẩu không mua bảo hiểm cho lô hàng",
      "D": "Do ngân hàng phát hành thay cho công ty bảo hiểm"
    },
    "answer": "A",
    "explanation": "Thư tín dụng không thể hủy ngang (Irrevocable L/C - theo UCP 600) là cam kết chắc chắn của ngân hàng phát hành, không thể bị hủy bỏ hoặc sửa đổi nếu không có sự đồng ý bằng văn bản của cả ngân hàng phát hành, ngân hàng xác nhận (nếu có) và người thụ hưởng (người bán).",
    "pdf_no": null
  },
  {
    "id": 171,
    "orig_no": "171",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong thương mại quốc tế, mối quan hệ giữa giá đàm phán trên hợp đồng và giá tính thuế hải quan được quy định như thế nào?",
    "options": {
      "A": "Doanh nghiệp được tự do thỏa thuận giá mua bán, nhưng mức giá tính thuế sẽ được tính toán trên cơ sở trị giá hải quan phù hợp với Hiệp định trị giá hải quan.",
      "B": "Cơ quan Hải quan bắt buộc phải chấp nhận mọi mức giá do doanh nghiệp đàm phán và thỏa thuận trong hợp đồng.",
      "C": "Giá trên hợp đồng thương mại không có giá trị pháp lý, Hải quan luôn tự ấn định giá cho mọi lô hàng.",
      "D": "Doanh nghiệp chỉ cần nộp thuế theo giá thỏa thuận nếu hợp đồng có chứng thực của Phòng Thương mại."
    },
    "answer": "A",
    "explanation": "Hối phiếu thương mại (Bill of Exchange) là một chứng từ có giá, thể hiện lệnh đòi tiền vô điều kiện của người ký phát (người bán) gửi cho người bị ký phát (người mua hoặc ngân hàng mở L/C) yêu cầu trả một số tiền nhất định cho người thụ hưởng.",
    "pdf_no": null
  },
  {
    "id": 172,
    "orig_no": "172",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty A (Bên bán tại Việt Nam) soạn thảo hợp đồng xuất khẩu nông sản và đã ký tên, đóng dấu, sau đó gửi bản mềm (PDF) qua email cho Công ty B (Bên mua tại Hàn Quốc). Do bận rộn, Giám đốc Công ty B chưa ký lại hợp đồng. Tuy nhiên, căn cứ theo thông tin tài khoản trên bản hợp đồng dự thảo đó, Công ty B đã chuyển khoản 20.000 USD tiền đặt cọc (tương đương 20% giá trị hợp đồng) cho Công ty A. Công ty A đã nhận tiền cọc và tiến hành gom hàng.2 tuần sau, giá nông sản trên thị trường thế giới đột ngột giảm mạnh. Công ty B gửi thông báo hủy đơn hàng và yêu cầu Công ty A hoàn trả 100% tiền cọc với lý do: \"Hợp đồng thương mại chưa từng có hiệu lực pháp lý do Công ty B chưa đặt bút ký vào hợp đồng.\" Theo Luật Thương mại, Bộ luật Dân sự Việt Nam và Công ước Viên 1980 (CISG), lập luận của Công ty B là ĐÚNG hay SAI, và hợp đồng đã phát sinh hiệu lực chưa?",
    "options": {
      "A": "Sai. Hợp đồng đã xác lập và có hiệu lực ràng buộc hai bên, vì hành vi chuyển tiền cọc của Công ty B được tính là hành vi chấp nhận đề nghị giao kết hợp đồng.",
      "B": "Đúng. Hợp đồng thương mại bắt buộc phải có chữ ký đầy đủ của hai bên mới phát sinh hiệu lực pháp lý.",
      "C": "Sai. Hợp đồng tự động có hiệu lực ngay từ thời điểm Công ty A ký tên và gửi đi qua email mà không phụ thuộc vào phản ứng của Công ty B.",
      "D": "Đúng. Việc chuyển tiền chỉ mang tính chất giao dịch tạm ứng, không thể thay thế cho chữ ký chính thức trên hợp đồng văn bản."
    },
    "answer": "A",
    "explanation": "Hóa đơn thương mại (Commercial Invoice) là chứng từ kế toán cơ bản do người bán phát hành, thể hiện số tiền người mua phải thanh toán, chi tiết đơn giá, tổng trị giá, điều kiện giao hàng và phương thức thanh toán của lô hàng.",
    "pdf_no": 65
  },
  {
    "id": 173,
    "orig_no": "173",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty A (Bên nhận gia công tại Việt Nam) ký hợp đồng gia công sản phẩm cơ khí xuất khẩu cho Công ty B (Bên đặt gia công tại Nhật Bản). Trong hợp đồng, hai bên thỏa thuận điều khoản định mức tiêu hao nhiên liệu/nguyên liệu là 1,05kg thép/sản phẩm (đã bao gồm tỷ lệ hao hụt cho phép là 5%). Trong quá trình sản xuất thực tế, do tay nghề công nhân chưa cao và máy móc gặp sự cố kĩ thuật, lượng tiêu hao thực tế bị vọt lên 1,12 kg thép/sản phẩm (vượt 0,07 kg so với định mức hợp đồng). Đến kỳ quyết toán hợp đồng gia công với cơ quan Hải quan và đối tác B, Công ty A giải trình rằng đây là tổn thất kỹ thuật tự nhiên và đề nghị Công ty B chấp nhận bù đắp phần thép tiêu hao vượt định mức này. Theo quy định pháp luật về gia công thương mại và quản lý hải quan, khẳng định nào sau đây là ĐÚNG?",
    "options": {
      "A": "Công ty A phải tự chịu chi phí đền bù lượng nguyên liệu/nhiên liệu vượt định mức cho Công ty B, đồng thời phải kê khai nộp thuế nhập khẩu và phạt vi phạm (nếu có) cho phần vượt định mức này đối với cơ quan Hải quan.",
      "B": "Công ty A được quyền tự động điều chỉnh tăng định mức khi báo cáo quyết toán hải quan nếu chứng minh được lượng nhiên liệu/nguyên liệu đó đã thực sự dùng vào quá trình sản xuất.",
      "C": "Công ty B bắt buộc phải cung cấp bổ sung miễn phí lượng nhiên liệu/nguyên liệu bị thiếu hụt vì rủi ro trong quá trình gia công luôn do bên đặt gia công gánh chịu.",
      "D": "Cơ quan Hải quan sẽ tự động miễn thuế cho toàn bộ 1,12 kg thép/sản phẩm miễn là số lượng sản phẩm hoàn chỉnh xuất khẩu đủ theo đúng số lượng trong hợp đồng."
    },
    "answer": "A",
    "explanation": "Phiếu đóng gói (Packing List) là bảng kê chi tiết nội dung đóng gói của lô hàng, thể hiện số lượng kiện hàng, phương thức đóng gói, kích thước, trọng lượng tịnh (Net Weight) và trọng lượng cả bì (Gross Weight) của từng kiện.",
    "pdf_no": 66
  },
  {
    "id": 174,
    "orig_no": "174",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty A (Việt Nam) ký hợp đồng trao đổi hàng hóa với Công ty B (Nhật Bản): A xuất khẩu 1.000 tấn nông sản cho B, đổi lấy B xuất khẩu 50 máy cơ khí cho A. Hai bên quy định ngân hàng đứng ra làm nhiệm vụ bù trừ và đưa vào điều khoản phạt khi giao hàng thiếu hoặc giao hàng chậm. Đến hạn giao hàng, công ty A đã giao đủ 100% lượng nông sản đúng thời hạn, còn công ty B giao máy cơ khí trễ 20 ngày và thiếu 10% số lượng máy (5 máy) so với thỏa thuận hợp đồng. Theo các nguyên tắc về điều khoản thanh toán và đảm bảo thực hiện hợp đồng trao đổi hàng hóa, ngân hàng bù trừ và hai bên sẽ xử lý tài chính như thế nào?",
    "options": {
      "A": "Ngân hàng thực hiện bù trừ giá trị tương đương giữa 100% nông sản của A và 90% số máy thực giao của B, đồng thời tính toán khoản tiền phạt (giao chậm + giao thiếu) áp lên B để buộc B phải thanh toán chênh lệch bằng tiền cho A.",
      "B": "Ngân hàng hủy bỏ toàn bộ hợp đồng trao đổi và yêu cầu Công ty B phải trả lại 100% lượng nông sản đã nhận từ Công ty A.",
      "C": "Ngân hàng chỉ ghi nhận giá trị thực giao của hai bên và không được quyền can thiệp xử lý tiền phạt vì hợp đồng trao đổi hàng hóa không cho phép phạt tiền.",
      "D": "Công ty A bắt buộc phải chờ Công ty B giao nốt 10% số máy còn lại rồi ngân hàng mới được tiến hành bất kỳ thủ tục bù trừ nào."
    },
    "answer": "A",
    "explanation": "Trong hợp đồng trao đổi hàng hóa thanh toán qua tài khoản bù trừ ngân hàng (Clearing Account), khi một bên giao thiếu hoặc chậm, ngân hàng sẽ ghi nhận đối trừ phần giá trị thực giao và áp dụng điều khoản phạt vi phạm để thu phần chênh lệch bằng tiền từ bên vi phạm.",
    "pdf_no": 67
  },
  {
    "id": 175,
    "orig_no": "175",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty A (Việt Nam) ký hợp đồng xuất khẩu gạo sang Châu Âu. Trong điều khoản địa điểm giao hàng, hai bên ghi rõ: Cảng đi là cảng Cát Lái (Việt Nam), cảng đến là cảng Rotterdam (Hà Lan) và cảng thông qua (quá cảnh/trung chuyển) là cảng Singapore. Việc quy định rõ ràng cảng giao hàng, cảng đến và cảng thông qua trong hợp đồng đem lại lợi ích trực tiếp nào cho các bên ?",
    "options": {
      "A": "Giúp các bên chủ động trong việc kiểm tra, giám sát trong quá trình giao nhận hàng hóa",
      "B": "Tự động chuyển toàn bộ rủi ro mất mát hàng hóa tại cảng thông qua cho bên vận tải.",
      "C": "Giúp người bán được miễn trừ hoàn toàn thủ tục hải quan xuất nhập khẩu.",
      "D": "Bắt buộc hãng tàu phải miễn toàn bộ chi phí lưu kho bãi (DEM/DET) tại cảng đến."
    },
    "answer": "A",
    "explanation": "Quy định chi tiết cảng bốc, cảng dỡ và cảng chuyển tải giúp các bên chủ động theo dõi hải trình, phối hợp giám sát hàng hóa tại các điểm trung chuyển và kịp thời xử lý các tình huống rủi ro phát sinh trong quá trình vận tải.",
    "pdf_no": 68
  },
  {
    "id": 176,
    "orig_no": "176",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty A có trụ sở tại Tp. Hồ Chí Minh, chuyên xuất khẩu cà phê từ Việt Nam sang thị trường quốc tế. Công ty ABC gửi báo giá cho khách hàng với đơn giá: 3,000.00 USD/MT. Ngoài ra, doanh nghiệp đã tính toán được các chi phí sau: Chi phí vận tải nội địa từ kho đến cảng Cát Lái (Tp. Hồ Chí Minh) là: 10 USD/MT; Chi phí vận tải quốc tế từ cảng Cát Lái (Tp. Hồ Chí Minh) đến cảng Vancouver, Canada là: 150 USD/MT. Trường hợp khách hàng muốn giao hàng tới cảng Vancouver, Canada và yêu cầu gửi báo giá theo quy tắc CFR (Incoterms 2020), đơn giá của lô hàng là:",
    "options": {
      "A": "3,150.00 USD/MT CFR Vancouver Port, Canada, Incoterms 2020",
      "B": "3,160.00 USD/MT CFR Vancouver Port, Canada, Incoterms 2020",
      "C": "3,160.00 USD/MT CFR Cat Lai Port, Vietnam, Incoterms 2020",
      "D": "3,010.00 USD/MT CFR Vancouver Port, Canada, Incoterms 2020"
    },
    "answer": "B",
    "explanation": "Giá CFR Vancouver = Giá xuất khẩu cơ sở (3,000 USD) + Chi phí vận chuyển nội địa (10 USD) + Cước vận tải quốc tế (150 USD) = 3,160.00 USD/MT CFR Vancouver Port, Canada, Incoterms 2020.",
    "pdf_no": null
  },
  {
    "id": 177,
    "orig_no": "177",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty A ký Hợp đồng thuê kho với Công ty B. Tại Điều 2, hai bên thỏa thuận thời hạn lưu kho cho lô hàng thực phẩm khô là 30 ngày (tính từ mốc ngày 01/10). Đến ngày 15/11 (vượt quá thời hạn lưu kho 15 ngày), Công ty A mới đến làm thủ tục nhận hàng và phát hiện hàng hóa bị ẩm mốc. Theo quy định về thời hạn và trách nhiệm trong hợp đồng thuê kho, nhận định nào sau đây là ĐÚNG?",
    "options": {
      "A": "Công ty A (chủ hàng) phải tự chịu trách nhiệm vì hàng hóa bị biến đổi phẩm chất do để lưu kho quá thời hạn thỏa thuận.",
      "B": "Công ty B phải chịu trách nhiệm bồi thường vì thời hạn hiệu lực của hợp đồng (Điều 5) vẫn còn.",
      "C": "Công ty B phải chịu 50% chi phí bồi thường do không gửi thông báo nhắc nhở khi hết thời hạn lưu kho.",
      "D": "Công ty A được miễn toàn bộ phí lưu kho phát sinh trong 15 ngày quá hạn."
    },
    "answer": "A",
    "explanation": "Theo quy tắc lưu kho, thời hạn thỏa thuận là 30 ngày (hết hạn ngày 31/10); Công ty A để hàng lưu kho quá hạn 15 ngày mới đến nhận mà không có thỏa thuận gia hạn, nên sự biến đổi phẩm chất (ẩm mốc) do lưu kho quá hạn thuộc trách nhiệm tự gánh chịu của chủ hàng A.",
    "pdf_no": null
  },
  {
    "id": 178,
    "orig_no": "178",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty K (bên ủy thác) ký hợp đồng giao nhận hàng hóa với Công ty Forwarder H (bên nhận ủy thác) để nhập khẩu một lô hàng thiết bị. Trong quá trình thực hiện dịch vụ tại cảng, ngoài tiền cước vận chuyển, Công ty H sẽ cần ứng trước thanh toán các khoản chi phí thực tế phát sinh gồm: phí D/O (lệnh giao hàng), phí nâng hạ container và phí lưu xe do chờ làm thủ tục. Để tránh xảy ra tranh chấp giữa Công ty K (bên ủy thác) và Công ty Forwarder H (bên nhận ủy thác) liên quan đến các khoản chi phí ứng trước thực tế tại cảng (phí D/O, nâng hạ container, lưu xe...), Điều khoản Thanh toán trong Hợp đồng giao nhận hàng hóa CẦN được quy định như thế nào?",
    "options": {
      "A": "Quy định chi tiết danh mục các khoản chi phí phát sinh thực tế, đi kèm quy định về phương thức, đồng tiền và thời hạn thanh toán/hoàn trả cho bên nhận ủy thác.",
      "B": "Mặc định ấn định tất cả phụ phí phát sinh đã nằm trọn gói trong cước phí vận chuyển, bên nhận ủy thác tự gánh chịu mọi chi phí phát sinh thêm tại cảng.",
      "C": "Bỏ qua các phụ phí này trong hợp đồng chính và thỏa thuận bằng lời nói giữa hai bên sau khi lô hàng đã hoàn thành thủ tục thông quan.",
      "D": "Quy định bên nhận ủy thác không được phép chi ứng trước bất kỳ khoản tiền nào, bắt buộc bên ủy thác phải trực tiếp thanh toán tiền mặt tại cảng cho hãng tàu."
    },
    "answer": "A",
    "explanation": "Để tránh tranh chấp phụ phí cảng (D/O, THC, nâng hạ, lưu cont/xe), hợp đồng giao nhận dịch vụ cần liệt kê chi tiết danh mục các chi phí ứng trước thực tế có chứng từ hợp lệ, đồng thời quy định rõ thời hạn và đồng tiền bên ủy thác phải hoàn trả cho bên giao nhận.",
    "pdf_no": null
  },
  {
    "id": 179,
    "orig_no": "179",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty M ký hợp đồng xuất khẩu may mặc cho Công ty N với điều khoản ghi đơn giản: \"Đơn giá: 15 USD/sản phẩm\". Trong quá trình sản xuất, giá sợi bông trên thị trường thế giới tăng vọt 40%, khiến chi phí sản xuất của M tăng cao. Công ty M gửi văn bản yêu cầu Công ty N tăng giá mua lên 18 USD/sản phẩm, nếu không sẽ dừng giao hàng. Theo quy định về phương pháp định giá trong thương mại quốc tế, yêu cầu của Công ty M có cơ sở pháp lý không?",
    "options": {
      "A": "Không có cơ sở, vì hợp đồng áp dụng Giá cố định (đã khẳng định lúc ký và không đổi trong suốt quá trình thực hiện), Công ty M phải tự chịu rủi ro chi phí.",
      "B": "Có cơ sở, vì theo phương pháp Giá di động, khi chi phí sản xuất tăng thì giá hợp đồng tự động được điều chỉnh theo.",
      "C": "Có cơ sở, vì theo phương pháp Giá linh hoạt, khi giá thị trường nguyên liệu biến động trên 10% thì bên bán có quyền yêu cầu xét lại giá.",
      "D": "Có cơ sở, vì hai bên bắt buộc phải chuyển sang phương pháp Giá quy định sau khi thị trường có biến động lớn."
    },
    "answer": "A",
    "explanation": "Hợp đồng ghi 'Đơn giá: 15 USD/sản phẩm' mà không kèm theo công thức trượt giá là Hợp đồng áp dụng Giá cố định (Fixed price). Người bán chịu rủi ro biến động giá nguyên vật liệu và không có quyền đơn phương đòi tăng giá hợp đồng.",
    "pdf_no": null
  },
  {
    "id": 180,
    "orig_no": "180",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty M thuê kho bãi bến cảng của Công ty Logistics T để lưu giữ 100 kiện hàng linh kiện điện tử. Hai bên đã hoàn tất thủ tục bàn giao, đối soát số lượng kiện hàng đúng theo Điều 1 của hợp đồng. Trong thời gian lưu kho, do hàng rào bảo vệ của kho bị hỏng không được sửa chữa kịp thời, kẻ gian đã đột nhập lấy trộm 15 kiện hàng. Trách nhiệm bồi thường trong trường hợp này thuộc về ai?",
    "options": {
      "A": "Công ty Logistics T phải chịu trách nhiệm bồi thường vì để xảy ra hỏng hóc, mất mát trong quá trình bảo quản.",
      "B": "Công ty M tự chịu rủi ro vì linh kiện điện tử là hàng hóa giá trị cao, dễ mất cắp.",
      "C": "Cơ quan Hải quan cửa khẩu xuất nhập.",
      "D": "Đơn vị vận tải đưa hàng đến kho."
    },
    "answer": "A",
    "explanation": "Bên lưu kho (Logistics T) có nghĩa vụ bảo quản an toàn hàng hóa trong suốt thời gian gửi giữ; việc để hỏng hàng rào khiến kẻ gian đột nhập trộm cắp là lỗi bảo quản của bên lưu kho, do đó bên lưu kho phải chịu trách nhiệm bồi thường thiệt hại.",
    "pdf_no": null
  },
  {
    "id": 181,
    "orig_no": "181",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty may mặc V nhập khẩu 10.000 mét vải theo hình thức Nhập nguyên liệu gia công cho đối tác Mỹ. Sau khi hoàn thành đơn hàng xuất khẩu, trong kho còn thừa 500 mét vải. Công ty V quyết định xé lẻ 500 mét vải này bán cho các tiệm may trong nước để thu hồi vốn mà không thông báo cho cơ quan Hải quan. Hành vi của Công ty V vi phạm quy định nào dưới đây?",
    "options": {
      "A": "Vi phạm do tự ý chuyển mục đích sử dụng (tiêu thụ nội địa) nguyên liệu được miễn thuế khi chưa đăng ký với Hải quan.",
      "B": "Không vi phạm, vì đây là lượng vải dư thừa sau khi đã hoàn thành đủ số lượng sản phẩm xuất khẩu cho đối tác.",
      "C": "Không vi phạm, chỉ cần Công ty V gộp số tiền bán vải vào doanh thu khi làm Báo cáo quyết toán cuối năm.",
      "D": "Vi phạm quy định về bảo hộ thương hiệu sản phẩm của đối tác Mỹ."
    },
    "answer": "A",
    "explanation": "Hàng nông sản tươi sống, dễ biến đổi phẩm chất thường áp dụng phương pháp xác định phẩm chất tại nơi gửi hàng theo hiện trạng thực tế (Tale quale) hoặc người mua trực tiếp xem hàng và chấp nhận trước khi bốc hàng.",
    "pdf_no": null
  },
  {
    "id": 182,
    "orig_no": "182",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty May mặc X (Việt Nam) ký hợp đồng xuất khẩu lô hàng thời trang cho Công ty Y (Hàn Quốc). Trong quá trình đàm phán, hai bên nhất trí dùng đồng Euro (EUR) làm đồng tiền tính giá và thanh toán. Nhận định nào sau đây là đúng về thỏa thuận đồng tiền thanh toán này?",
    "options": {
      "A": "Hợp lệ vì đồng tiền tính giá và thanh toán trong hợp đồng ngoại thương có thể là ngoại tệ đối với cả hai bên.",
      "B": "Không hợp lệ vì giao dịch giữa Việt Nam và Hàn Quốc bắt buộc phải dùng VND, KRW hoặc USD.",
      "C": "Không hợp lệ vì đồng Euro (EUR) chỉ được sử dụng cho các quốc gia thuộc Liên minh Châu Âu (EU).",
      "D": "Tất cả các đáp án đều sai."
    },
    "answer": "A",
    "explanation": "Hao hụt tự nhiên là sự giảm sút khối lượng do tính chất lý hóa tự nhiên của hàng hóa (bay hơi, khô hao); hợp đồng thường quy định tỷ lệ hao hụt miễn trách (Franchise), người bán không phải bồi thường nếu mức hao hụt nằm trong giới hạn này.",
    "pdf_no": null
  },
  {
    "id": 183,
    "orig_no": "183",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty Nông sản A tại Việt Nam dự kiến xuất khẩu 1.000 tấn Cà phê Robusta sau 3 tháng nữa. Để phòng ngừa rủi ro giá cà phê trên thị trường thế giới giảm xuống tại thời điểm bán hàng, Công ty A nên tham gia giao dịch nào trên Sở giao dịch hàng hóa (như ICE / London)?",
    "options": {
      "A": "Bán hợp đồng tương lai cà phê (Short Futures)",
      "B": "Mua hợp đồng tương lai cà phê (Long Futures)",
      "C": "Bán quyền chọn bán cà phê (Sell Put Option)",
      "D": "Mua quyền chọn mua cà phê (Buy Call Option)"
    },
    "answer": "A",
    "explanation": "Điều khoản giám định hàng hóa quy định rõ địa điểm kiểm tra (tại xưởng, tại cảng bốc hoặc tại cảng đến) và cơ quan giám định độc lập (như SGS, Vinacontrol) có chứng thư giám định làm căn cứ quyết định.",
    "pdf_no": null
  },
  {
    "id": 184,
    "orig_no": "184",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty Nông sản X (Việt Nam) ký hợp đồng xuất khẩu 500 tấn cà phê nhân sang thị trường Châu Âu, hàng được đóng gói trong các bao Jute tiêu chuẩn. Qua khảo sát, khối lượng vỏ bao Jute chỉ chiếm khoảng 0,5% tổng khối lượng của toàn bộ lô hàng. Để đơn giản hóa quy trình cân đo tại cảng, tiết kiệm thời gian, chi phí bóc tách kiểm tra vỏ bao mà vẫn đảm bảo tính chính xác và hợp lý về mặt thương mại. Điều khoản Số lượng (Quantity) trong hợp đồng mua bán giữa hai bên nên áp dụng quy định nào sau đây là phù hợp nhất với thực tế nghiệp vụ?",
    "options": {
      "A": "Quy định \"Cả bì coi như tịnh\" (Gross weight for net), chấp nhận lấy tổng khối lượng cả bì làm căn cứ tính giá trị thanh toán tiền hàng.",
      "B": "Bắt buộc áp dụng \"Khối lượng tịnh\" (Net weight) và yêu cầu trút toàn bộ cà phê ra để cân riêng vỏ bao (tare weight) từng đợt nhằm trừ bớt khối lượng bao bì.",
      "C": "Áp dụng \"Khối lượng lý thuyết\" (Theoretical weight) tính theo kích thước bao bì mà không cần thực hiện cân thực tế lô hàng tại cảng dỡ.",
      "D": "Áp dụng \"Khối lượng cả bì\" (Gross weight) nhưng yêu cầu bên bán phải giảm giá 50% đơn giá hàng hóa cho phần trọng lượng tương ứng với vỏ bao."
    },
    "answer": "A",
    "explanation": "Trong thương mại quốc tế, quyền sở hữu hàng hóa thường được chuyển giao đồng thời với việc chuyển giao chứng từ sở hữu hàng hóa (vận đơn đường biển gốc B/L có thể chuyển nhượng) sau khi người mua đã thanh toán hoặc chấp nhận thanh toán.",
    "pdf_no": null
  },
  {
    "id": 185,
    "orig_no": "185",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty Nước ngoài X ký Hợp đồng gia công với Công ty Việt Nam Y để sản xuất 50.000 đôi giày mang nhãn hiệu \"SUN\". Công ty X cam kết bằng văn bản rằng nhãn hiệu \"SUN\" thuộc quyền sở hữu hợp pháp của mình. Tuy nhiên, khi hàng đang sản xuất, Công ty Z (một doanh nghiệp khác tại Việt Nam đã đăng ký bảo hộ độc quyền nhãn hiệu \"SUN\" trước đó) phát hiện và gửi đơn kiện Công ty Y lên cơ quan quản lý thị trường, yêu cầu tịch thu toàn bộ lô hàng và xử phạt Công ty Y về hành vi sản xuất hàng xâm phạm nhãn hiệu. Căn cứ quy định pháp luật thương mại, trách nhiệm bồi thường và xử lý phát sinh thuộc về ai?",
    "options": {
      "A": "Công ty Y có quyền yêu cầu Công ty X (bên giao gia công) bồi toàn bộ thiệt hại và chi phí xử lý phát sinh do Công ty X vi phạm cam kết về tính hợp pháp của quyền Sở hữu trí tuệ.",
      "B": "Công ty Y phải chịu toàn bộ tiền phạt và thiệt hại vì là đơn vị trực tiếp sản xuất hàng vi phạm tại Việt Nam.",
      "C": "Cơ quan nhà nước sẽ tịch thu máy móc của Công ty Y và cấm Công ty X kinh doanh tại Việt Nam.",
      "D": "Công ty Z bắt buộc phải chuyển nhượng lại nhãn hiệu cho Công ty X với giá rẻ."
    },
    "answer": "C",
    "explanation": "Giá di động (Sliding scale price) là phương pháp xác định giá dựa trên công thức toán học tính toán lại giá tại thời điểm giao hàng dựa trên sự biến động của các chỉ số chi phí nguyên liệu và chi phí nhân công theo thống kê chính thức.",
    "pdf_no": null
  },
  {
    "id": 186,
    "orig_no": "186",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty thương mại A (tại Việt Nam) thực hiện giao dịch tạm nhập - tái xuất 500 tấn hạt điều: mua từ Công ty B (tại Bờ Biển Ngà) theo hình thức Chuyển tiền T/T trả trước 100%, và bán cho Công ty C (tại Trung Quốc) theo hình thức Thư tín dụng L/C trả chậm 30 ngày. Nhận định nào sau đây là ĐÚNG NHẤT về rủi ro thương mại của Công ty A trong giao dịch này?",
    "options": {
      "A": "Công ty A đối mặt với rủi ro kép rất lớn: vừa bị chôn vốn/đứt gãy dòng tiền, vừa chịu rủi ro bị B giao hàng kém chất lượng/trễ hạn (khi đã trả tiền trước) và rủi ro bị từ chối thanh toán L/C nếu bộ chứng từ xuất trình cho C có bất hợp lệ.",
      "B": "Công ty A hoàn toàn không gặp rủi ro vì phương thức L/C trả chậm của Công ty C được ngân hàng cam kết thanh toán vô điều kiện, đảm bảo bù đắp khoản tiền đã T/T cho Công ty B.",
      "C": "Công ty A chỉ gặp rủi ro duy nhất về biến động tỷ giá hối đoái, còn rủi ro về thanh toán và chất lượng hàng hóa đã được cam kết L/C loại bỏ hoàn toàn.",
      "D": "Công ty A chỉ chịu rủi ro từ Công ty C do cho trả chậm 30 ngày, còn đối với Công ty B thì việc T/T trả trước giúp A hoàn toàn khống chế được nghĩa vụ giao hàng của B."
    },
    "answer": "A",
    "explanation": "Hợp đồng mua bán hàng hóa quốc tế có hiệu lực pháp lý kể từ thời điểm các bên có thẩm quyền ký kết vào văn bản hợp đồng hoặc vào thời điểm xác định được ghi rõ trong điều khoản hiệu lực của hợp đồng.",
    "pdf_no": null
  },
  {
    "id": 187,
    "orig_no": "187",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty X (Việt Nam) xuất khẩu hàng hóa sang đối tác Y (Châu Âu) đã giao dịch uy tín 3 năm. Công ty X muốn tiết kiệm chi phí ngân hàng so với L/C, đồng thời muốn giữ quyền khống chế chứng từ gốc cho đến khi người mua thanh toán tiền trước khi lấy hàng. Phương thức nào tối ưu nhất?",
    "options": {
      "A": "Nhờ thu kèm chứng từ trả ngay (D/P)",
      "B": "Nhờ thu kèm chứng từ trả chậm (D/A)",
      "C": "Phương thức nghi sổ / Giao chứng từ trả tiền sau (Open Account)",
      "D": "Các đáp án đều sai"
    },
    "answer": "A",
    "explanation": "Khi hợp đồng ngoại thương được soạn thảo bằng nhiều thứ tiếng (ví dụ tiếng Việt và tiếng Anh), điều khoản ngôn ngữ bắt buộc phải xác định bản ngôn ngữ nào có giá trị ưu tiên áp dụng (prevailing language) khi phát sinh sự khác biệt về giải thích câu chữ.",
    "pdf_no": null
  },
  {
    "id": 188,
    "orig_no": "188",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty X ký hợp đồng xuất khẩu quy định thời hạn giao hàng muộn nhất là 15/10. Tuy nhiên, L/C do ngân hàng mở lại ghi ngày giao hàng muộn nhất là 10/10. Công ty X hoàn thành giao hàng ngày 12/10 và xuất trình vận đơn ghi ngày 12/10. Ngân hàng sẽ xử lý như thế nào?",
    "options": {
      "A": "Ngân hàng từ chối thanh toán bộ chứng từ",
      "B": "Ngân hàng chấp nhận thanh toán bộ chứng từ",
      "C": "Ngân hàng tự động gia hạn thời hạn L/C",
      "D": "Ngân hàng phạt tiền doanh nghiệp xuất khẩu"
    },
    "answer": "A",
    "explanation": "Mọi sửa đổi, bổ sung đối với hợp đồng ngoại thương chỉ có hiệu lực pháp lý khi được các bên thỏa thuận thống nhất và lập thành văn bản phụ lục hợp đồng (Addendum / Amendment) có chữ ký của người đại diện có thẩm quyền.",
    "pdf_no": null
  },
  {
    "id": 189,
    "orig_no": "189",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty xuất khẩu nông sản A dự kiến sẽ bán 100 tấn cà phê Arabica sau 3 tháng nữa. Để phòng ngừa rủi ro giá cà phê giảm trên thị trường, Công ty A quyết định mua Hợp đồng quyền chọn Bán (Put Option) trên Sở giao dịch hàng hóa với các thông số sau: Giá thực hiện (Strike Price): 3.000 USD/tấn; và Phí quyền chọn (Option Premium): 100 USD/tấn. Sau 3 tháng, tại thời điểm đáo hạn hợp đồng, giá cà phê Arabica trên Sở giao dịch giảm xuống còn 2.500 USD/tấn. Nhận định nào sau đây là ĐÚNG về quyết định của Công ty A và hiệu quả tài chính thu được từ giao dịch này (chưa tính chi phí môi giới)?",
    "options": {
      "A": "Công ty A sẽ thực hiện quyền chọn Bán; giá thực nhận cuối cùng là 2.900 USD/tấn, giúp công ty bảo vệ được mức giá bán cao hơn 400 USD/tấn so với giá thị trường do đã phòng ngừa rủi ro thành công.",
      "B": "Công ty A sẽ bỏ (không thực hiện) quyền chọn Bán và bán theo giá thị trường 2.500 USD/tấn để không bị mất khoản phí quyền chọn 100 USD/tấn.",
      "C": "Công ty A sẽ thực hiện quyền chọn Bán; giá thực nhận cuối cùng là 3.000 USD/tấn vì phí quyền chọn sẽ được Sở giao dịch hoàn trả lại cho bên mua khi thực hiện hợp đồng.",
      "D": "Công ty A bị bắt buộc phải bán theo giá thị trường 2.500 USD/tấn và chịu thêm khoản phạt vi phạm hợp đồng từ Sở giao dịch do không dự báo đúng xu hướng giá."
    },
    "answer": "A",
    "explanation": "Theo Điều 25 CISG 1980: Một sự vi phạm hợp đồng do một bên gây ra là vi phạm cơ bản nếu sự vi phạm đó làm cho bên kia bị thiệt hại mà tước đoạt đáng kể những gì mà bên kia có quyền kỳ vọng từ hợp đồng.",
    "pdf_no": null
  },
  {
    "id": 190,
    "orig_no": "190",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Doanh nghiệp B tại Việt Nam mua 1.000 tấn nông sản từ Thái Lan, tạm nhập vào Việt Nam lưu giữ tại khu vực giám sát hải quan, sau đó tái xuất bán cho đối tác tại Trung Quốc. Về chính sách thuế xuất nhập khẩu tại Việt Nam, lô hàng này thuộc diện nào?",
    "options": {
      "A": "Thuộc diện không chịu thuế hoặc được miễn thuế nếu tuân thủ đúng giám sát hải quan",
      "B": "Phải chịu thuế nhập khẩu như hàng hóa tiêu dùng nội địa thông thường",
      "C": "Bị cấm áp dụng vì Việt Nam không cho phép mua bán chênh lệch giá",
      "D": "Bắt buộc phải nộp bổ sung thuế giá trị gia tăng"
    },
    "answer": "A",
    "explanation": "Theo Điều 77 CISG 1980: Bên yêu cầu bồi thường thiệt hại do đối tác vi phạm hợp đồng phải áp dụng các biện pháp hợp lý để hạn chế tổn thất; nếu không thực hiện nghĩa vụ giảm thiểu tổn thất thì bên vi phạm có quyền yêu cầu giảm bớt khoản tiền bồi thường.",
    "pdf_no": null
  },
  {
    "id": 191,
    "orig_no": "191",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Doanh nghiệp xuất khẩu A (Việt Nam) chuẩn bị ký hợp đồng bán lô hàng nông sản trị giá 150.000 USD cho công ty B (Châu Âu). Đây là lần đầu tiên hai bên hợp tác. Công ty B không chấp nhận trả tiền trước vì sợ rủi ro không nhận được hàng. Ngược lại, doanh nghiệp A cũng lo ngại rủi ro giao hàng xong nhưng công ty B không thanh toán hoặc viện lý do thị trường rớt giá để ép giá. Phương thức nào dưới đây là cân bằng và phù hợp nhất cho cả hai bên?",
    "options": {
      "A": "Thanh toán bằng Thư tín dụng không hủy ngang trả ngay (Irrevocable L/C at sight)",
      "B": "Thanh toán bằng điện (T/T) trả sau 100% trong vòng 30 ngày kể từ ngày nhận hàng",
      "C": "Thanh toán bằng điện (T/T) trả trước 100% ngay sau khi ký hợp đồng",
      "D": "Thanh toán Nhờ thu chấp nhận chứng từ trả chậm (D/A) 30 ngày"
    },
    "answer": "A",
    "explanation": "Theo Điều 319 Luật Thương mại 2005: Thời hiệu khởi kiện áp dụng đối với các tranh chấp thương mại là 02 năm, kể từ thời điểm quyền và lợi ích hợp pháp bị xâm phạm.",
    "pdf_no": null
  },
  {
    "id": 192,
    "orig_no": "192",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Doanh nghiệp xuất khẩu A chọn thanh toán theo phương thức nhờ thu D/A (Documents against Acceptance) thời hạn 60 ngày. Rủi ro lớn nhất mà doanh nghiệp A phải đối mặt trong giao dịch này là gì?",
    "options": {
      "A": "Người nhập khẩu đã nhận hàng nhưng đến thời hạn 60 ngày không chịu thanh toán",
      "B": "Người nhập khẩu từ chối ký chấp nhận hối phiếu và không nhận bộ chứng từ",
      "C": "Ngân hàng thu hộ tự ý giữ lại chứng từ mà không giao cho người nhập khẩu",
      "D": "Ngân hàng từ chối thanh toán do xuất hiện bất đồng chứng từ"
    },
    "answer": "A",
    "explanation": "Theo tập quán UCP 600 và Incoterms, chứng từ bảo hiểm phải phát hành bằng đồng tiền của L/C/hợp đồng, ngày phát hành không muộn hơn ngày giao hàng và số tiền bảo hiểm tối thiểu phải bằng 110% giá trị CIF hoặc CIP của lô hàng.",
    "pdf_no": null
  },
  {
    "id": 193,
    "orig_no": "193",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Hợp đồng mua bán hóa chất quy định giao hàng theo điều kiện CIF Hải Phòng (Incoterms 2020), phương thức thanh toán là Tín dụng thư không hủy ngang (Irrevocable L/C). Trên đường vận chuyển, tàu gặp bão khiến nước biển tràn vào hầm hàng làm hư hỏng 30% lô hàng. Khi hàng cập cảng Hải Phòng, Bên mua phát hiện thiệt hại nên đã yêu cầu Ngân hàng mở L/C từ chối thanh toán cho Bên bán với lý do \"Hàng hóa giao đến cảng không đúng chất lượng cam kết trong hợp đồng\". Quyết định từ chối thanh toán của Bên mua và Ngân hàng trong trường hợp này đúng hay sai?",
    "options": {
      "A": "Sai, vì trong điều kiện CIF, rủi ro tổn thất do bão trên biển đã chuyển sang Bên mua ngay khi hàng xếp xong lên tàu tại cảng đi; đồng thời thanh toán L/C độc lập với tình trạng thực tế của hàng hóa (chỉ căn cứ vào tính hợp lệ của bộ chứng từ).",
      "B": "Đúng, vì Bên bán có nghĩa vụ đảm bảo chất lượng hàng hóa an toàn cho đến khi cập cảng Hải Phòng.",
      "C": "Đúng, vì Bên bán là bên mua bảo hiểm nên Bên bán phải có trách nhiệm gánh chịu mọi thiệt hại thực tế trước khi đòi tiền.",
      "D": "Sai, nhưng Ngân hàng phải đứng ra trả trước 70% giá trị hợp đồng, 30% còn lại chờ Công ty Bảo hiểm bồi thường."
    },
    "answer": "A",
    "explanation": "Ưu điểm vượt trội của Trọng tài thương mại quốc tế so với Tòa án quốc gia: Tính bảo mật thông tin kinh doanh, các bên được quyền chọn trọng tài viên am hiểu chuyên môn, thủ tục nhanh gọn và phán quyết có hiệu lực thi hành toàn cầu theo Công ước New York 1958.",
    "pdf_no": null
  },
  {
    "id": 194,
    "orig_no": "194",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Hợp đồng quy định: \"10,000 MT 5% more or less at seller's option\", có nghĩa là người bán được phép giao:",
    "options": {
      "A": "Trong khoảng từ 9,500 MT đến 10,500 MT",
      "B": "Tối đa chỉ được giao 9,500 MT",
      "C": "Tối thiểu phải giao 10,500 MT",
      "D": "Bắt buộc đúng 10,000 MT"
    },
    "answer": "A",
    "explanation": "Theo quy chuẩn hợp đồng gia công quốc tế, bên nhận gia công chỉ được phép chuyển giao một phần hoặc toàn bộ công việc gia công cho bên thứ ba (gia công lại / sub-contracting) nếu có sự đồng ý trước bằng văn bản của bên đặt gia công.",
    "pdf_no": null
  },
  {
    "id": 195,
    "orig_no": "195",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Khi hợp đồng gia công kết thúc hoặc hết hiệu lực, hình thức nào sau đây KHÔNG phải là phương án xử lý hợp pháp đối với nguyên phụ liệu dư thừa, phế liệu, máy móc mượn?",
    "options": {
      "A": "Tự do phân phối, tiêu thụ ngay vào thị trường nội địa, không cần đăng ký hải quan.",
      "B": "Tái xuất trả lại cho bên giao gia công ở nước ngoài.",
      "C": "Chuyển sang thực hiện cho hợp đồng gia công khác tại Việt Nam.",
      "D": "Tiêu hủy tại Việt Nam dưới sự giám sát của Hải quan và cơ quan môi trường."
    },
    "answer": "A",
    "explanation": "Khi một bên chậm thanh toán tiền hàng, bên bán có quyền đòi tiền lãi trên số tiền chậm trả theo mức lãi suất nợ quá hạn bình quân trên thị trường hoặc theo mức lãi suất đã thỏa thuận cụ thể trong hợp đồng.",
    "pdf_no": null
  },
  {
    "id": 196,
    "orig_no": "196",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Tại sao trong Hợp đồng gia công thương mại (đặc biệt là gia công quốc tế) bắt buộc phải quy định Điều khoản định mức tiêu hao nguyên vật liệu?",
    "options": {
      "A": "Để làm căn cứ kiểm soát việc sử dụng nguyên liệu, xác định tỷ lệ hao hụt hợp lý, làm cơ sở quyết toán vật tư dư thừa và thực hiện thủ tục Hải quan/thuế",
      "B": "Để cho phép bên nhận gia công được tự do thanh lý hoặc bán ra thị trường nội địa phần nguyên liệu chưa sử dụng hết mà không cần báo cáo",
      "C": "Để bên đặt gia công có thể tự động thay đổi giá thuê gia công tùy thuộc vào biến động giá nguyên vật liệu trên thị trường thế giới.",
      "D": "Để chuyển toàn bộ nghĩa vụ và rủi ro bảo quản nguyên vật liệu trong suốt quá trình sản xuất cho đơn vị vận tải"
    },
    "answer": "A",
    "explanation": "Điều khoản Hoàn cảnh thay đổi cơ bản (Hardship clause) cho phép các bên yêu cầu đàm phán lại các điều kiện hợp đồng khi xảy ra những biến động kinh tế - chính trị nghiêm trọng làm thay đổi căn bản sự cân bằng ban đầu của hợp đồng, vượt ra ngoài sự dự liệu của các bên.",
    "pdf_no": null
  },
  {
    "id": 197,
    "orig_no": "197",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Theo quy định quản lý hải quan, thời hạn chậm nhất để doanh nghiệp nộp Báo cáo quyết toán tình hình sử dụng nguyên liệu, vật tư gia công (Mẫu 15/BCQT) là bao lâu?",
    "options": {
      "A": "Chậm nhất ngày thứ 90 kể từ ngày kết thúc năm tài chính",
      "B": "Chậm nhất ngày thứ 120 kể từ ngày kết thúc năm tài chính",
      "C": "Chậm nhất ngày thứ 30 kể từ ngày kết thúc năm tài chính",
      "D": "Chậm nhất ngày thứ 60 kể từ ngày kết thúc năm tài chính"
    },
    "answer": "A",
    "explanation": "Theo Thông tư 39/2018/TT-BTC sửa đổi Thông tư 38/2015/TT-BTC của Bộ Tài chính, doanh nghiệp gia công xuất khẩu phải nộp báo cáo quyết toán tình hình sử dụng nguyên liệu, vật tư nhập khẩu cho cơ quan Hải quan chậm nhất là ngày thứ 90 kể từ ngày kết thúc năm tài chính.",
    "pdf_no": null
  },
  {
    "id": 198,
    "orig_no": "198",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong giao dịch tái xuất hoặc chuyển khẩu, thương nhân trung gian đứng ở vị trí mua của bên sản xuất gốc và bán cho người tiêu dùng cuối cùng. Căn cứ theo nguyên tắc đồng bộ điều kiện hợp đồng, phát biểu nào sau đây phản ánh ĐÚNG NHẤT về yêu cầu quy định điều kiện hàng hóa (chất lượng, bao bì đóng gói) giữa Hợp đồng Nhập khẩu và Hợp đồng Xuất khẩu?",
    "options": {
      "A": "Các điều kiện về chất lượng, quy cách đóng gói trong Hợp đồng Xuất khẩu phải trùng khớp hoặc không được khắt khe hơn Hợp đồng Nhập khẩu.",
      "B": "Hợp đồng Xuất khẩu bắt buộc phải quy định tiêu chuẩn chất lượng cao hơn Hợp đồng Nhập khẩu để khẳng định uy tín thương hiệu của bên trung gian.",
      "C": "Thương nhân trung gian có thể tùy ý thay đổi quy cách đóng gói trên Hợp đồng Xuất khẩu mà không cần quan tâm đến các chứng từ liên quan và địa điểm giao hàng.",
      "D": "Hợp đồng Nhập khẩu không cần quy định chi tiết về phẩm chất hàng hóa vì trách nhiệm kiểm tra chất lượng thuộc về cơ quan Hải quan nước tái xuất."
    },
    "answer": "A",
    "explanation": "Trong kinh doanh tái xuất, nguyên tắc cốt lõi là các điều kiện về chất lượng, bao bì, nhãn mác trong hợp đồng bán ra (xuất khẩu) phải tương thích hoặc không được khắt khe hơn hợp đồng mua vào (nhập khẩu) để bảo đảm việc chuyển giao hàng hóa diễn ra suôn sẻ.",
    "pdf_no": null
  },
  {
    "id": 199,
    "orig_no": "199",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong hoạt động thương mại quốc tế, Hợp đồng dịch vụ giám định (hoặc Giấy yêu cầu giám định) được ký kết giữa các chủ thể nào sau đây?",
    "options": {
      "A": "Cơ quan/tổ chức giám định chuyên môn độc lập và bên có nhu cầu giám định (người mua, người bán, người vận tải hoặc công ty bảo hiểm).",
      "B": "Cơ quan quản lý nhà nước tự chỉ định và thực hiện giao kết hợp đồng với tổ chức giám định.",
      "C": "Cơ quan/tổ chức giám định chuyên môn độc lập và Hãng tàu vận chuyển.",
      "D": "Ký kết giữa ba bên bao gồm: Người mua, Người bán và Hãng tàu vận chuyển."
    },
    "answer": "A",
    "explanation": "Hợp đồng dịch vụ giám định thương mại được ký kết giữa tổ chức giám định độc lập được cấp phép với tổ chức hoặc cá nhân có nhu cầu giám định (người mua, người bán, người thuê tàu, hoặc công ty bảo hiểm).",
    "pdf_no": null
  },
  {
    "id": 200,
    "orig_no": "200",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong hợp đồng mua bán hàng hóa quốc tế, khi thực hiện giao hàng bằng đường hàng không, điểm khác biệt pháp lý quan trọng nhất giữa Vận đơn hàng không (Air Waybill - AWB) và Vận đơn đường biển có thể chuyển nhượng (Negotiable Ocean Bill of Lading) ảnh hưởng trực tiếp đến quyền kiểm soát hàng hóa của người bán là gì?",
    "options": {
      "A": "AWB không phải là chứng từ sở hữu hàng hóa (non-negotiable document of title); người nhận hàng (Consignee) có tên trên AWB có thể nhận hàng từ hãng hàng không mà không nhất thiết phải xuất trình bản gốc AWB.",
      "B": "AWB là chứng từ có giá chuyển nhượng bằng cách ký hậu (Endorsement), cho phép người bán nắm giữ bản gốc để khống chế quyền sở hữu hàng hóa cho đến khi người mua thanh toán xong.",
      "C": "AWB là chứng từ sở hữu hàng hóa duy nhất chỉ cho phép chuyển nhượng khi được sự chấp thuận bằng văn bản của Ngân hàng mở L/C.",
      "D": "AWB bắt buộc phải có chữ ký xác nhận của cơ quan Hải quan sân bay đi thì mới có giá trị làm chứng từ thanh toán quốc tế."
    },
    "answer": "A",
    "explanation": "Vận đơn hàng không (Air Waybill - AWB) là biên lai nhận hàng và bằng chứng hợp đồng vận chuyển, không phải là chứng từ sở hữu hàng hóa (Non-negotiable). Hãng hàng không sẽ giao hàng cho đúng người nhận hàng (Consignee) có tên trên AWB khi đến nơi mà không cần người đó phải xuất trình AWB bản gốc.",
    "pdf_no": null
  },
  {
    "id": 201,
    "orig_no": "201",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong hợp đồng mua bán hàng hóa quốc tế, phương thức thanh toán bằng Thư tín dụng (L/C - Letter of Credit) thường được các bên thỏa thuận áp dụng chủ yếu trong trường hợp nào sau đây?",
    "options": {
      "A": "Khi hai bên là đối tác mới hợp tác (chưa đủ độ tin cậy), hợp đồng có giá trị lớn và hai bên muốn có sự cam kết độc lập từ ngân hàng.",
      "B": "Khi lô hàng có giá trị nhỏ, cần rút ngắn thời gian xử lý chứng từ và ưu tiên tiết kiệm tối đa chi phí giao dịch ngân hàng.",
      "C": "Khi hai bên là công ty mẹ - công ty con, có quan hệ mật thiết và muốn ưu tiên thủ tục đơn giản.",
      "D": "Khi hai bên là đối tác truyền thống lâu năm có mức độ tin tưởng tuyệt đối."
    },
    "answer": "A",
    "explanation": "Phương thức thanh toán Thư tín dụng (L/C) được áp dụng tối ưu khi các bên là đối tác mới, chưa có bề dày quan hệ tin tưởng, giá trị hợp đồng lớn và cần sự cam kết bảo lãnh thanh toán độc lập từ phía ngân hàng.",
    "pdf_no": null
  },
  {
    "id": 202,
    "orig_no": "202",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong Hợp đồng quyền chọn bán hàng hóa (Put Option), người mua quyền chọn (Option Buyer) có quyền và nghĩa vụ như thế nào?",
    "options": {
      "A": "Có quyền (nhưng không bắt buộc) bán hàng hóa tại giá thực hiện và phải trả phí quyền chọn (Option Premium).",
      "B": "Có quyền bán hàng hóa miễn phí mà không cần trả bất kỳ khoản phí nào.",
      "C": "Bắt buộc phải bán hàng hóa tại giá thực hiện (Strike Price).",
      "D": "Bắt buộc phải mua hàng hóa tại giá thị trường."
    },
    "answer": "A",
    "explanation": "Trong Hợp đồng quyền chọn bán (Put Option), người mua quyền chọn trả một khoản phí (Option Premium) để mua quyền (nhưng không bắt buộc) được bán một lượng hàng hóa xác định tại mức giá thực hiện (Strike Price) trước hoặc tại ngày đáo hạn.",
    "pdf_no": null
  },
  {
    "id": 203,
    "orig_no": "203",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong quá trình thực hiện hợp đồng đại lý thủ tục hải quan, Công ty X (chủ hàng) đã gửi cho Công ty Logistics Y (đại lý hải quan) bộ chứng từ bị sai lệch thông tin về mã số HS và trị giá khai báo của lô hàng. Việc này khiến cơ quan Hải quan ra quyết định xử phạt vi phạm hành chính đối với tờ khai. Công ty Y có quyền xử lý như thế nào đối với lỗi này?",
    "options": {
      "A": "Từ chối trách nhiệm đối với lỗi do chủ hàng (Công ty X) cung cấp sai thông tin.",
      "B": "Bắt buộc phải đứng ra nộp phạt toàn bộ thay cho Công ty X do Công ty Y là đơn vị trực tiếp đứng tên khai báo.",
      "C": "Chia sẻ trách nhiệm nộp tiền phạt hành chính cùng với Công ty X để duy trì mối quan hệ hợp tác.",
      "D": "Không được quyền khiếu nại hay từ chối trách nhiệm vì đại lý hải quan chịu trách nhiệm liên đới vô điều kiện."
    },
    "answer": "A",
    "explanation": "Theo quy định pháp luật hải quan, đại lý làm thủ tục hải quan khai báo dựa trên chứng từ do chủ hàng cung cấp; nếu chủ hàng cung cấp sai thông tin dẫn đến vi phạm hành chính, đại lý hải quan có quyền từ chối trách nhiệm và yêu cầu chủ hàng chịu trách nhiệm trước pháp luật.",
    "pdf_no": null
  },
  {
    "id": 204,
    "orig_no": "204",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Trong thủ tục trọng tài thương mại, trường hợp mỗi bên chọn 1 trọng tài viên nhưng giữa 2 trọng tài viên này xảy ra bất đồng quan điểm thì bước xử lý tiếp theo là gì?",
    "options": {
      "A": "Chọn 1 trọng tài thứ 3 làm chủ tịch trọng tài",
      "B": "Chuyển toàn bộ vụ việc sang Tòa án nhân dân giải quyết",
      "C": "Vụ việc tự động coi như chấm dứt và hai bên tự hòa giải",
      "D": "Yêu cầu thay đổi toàn bộ 2 trọng tài viên ban đầu"
    },
    "answer": "A",
    "explanation": "Theo Luật Trọng tài thương mại 2010 và quy tắc của các trung tâm trọng tài (VIAC, SIAC), trường hợp mỗi bên chọn 1 trọng tài viên, hai trọng tài viên này sẽ tiến hành bầu trọng tài viên thứ 3 để làm Chủ tịch Hội đồng trọng tài.",
    "pdf_no": null
  },
  {
    "id": 205,
    "orig_no": "205",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Vào tháng 1, Công ty X ký hợp đồng mua 10.000 thùng dầu thô từ Công ty Y, giao hàng vào tháng 6. Do thị trường dầu mỏ biến động rất mạnh, tại thời điểm ký kết, hai bên không ghi bất kỳ con số giá cụ thể nào trong hợp đồng mà chỉ ghi: \"Giá của lô hàng sẽ được tính bằng giá trung bình của dầu thô Platts Singapore trong 5 ngày làm việc ngay trước ngày giao hàng\". Phương pháp qui định giá được sử dụng trong trường hợp này là gì?",
    "options": {
      "A": "Giá quy định sau",
      "B": "Giá linh hoạt / Giá có thể xét lại",
      "C": "Giá di động (Sliding scale price)",
      "D": "Giá cố định"
    },
    "answer": "A",
    "explanation": "Xác định giá dựa trên mức giá thị trường thực tế trong tương lai (giá Platts Singapore trung bình 5 ngày trước ngày giao hàng) là phương pháp Giá quy định sau (Deferred pricing / To be fixed price).",
    "pdf_no": null
  },
  {
    "id": 206,
    "orig_no": "206",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Việc xác định và quản lý định mức sử dụng nguyên liệu, vật tư thực tế (bao gồm cả tỷ lệ hao hụt) trong hợp đồng gia công được thực hiện theo nguyên tắc nào?",
    "options": {
      "A": "Doanh nghiệp tự xác định, quản lý, lưu giữ hồ sơ/chứng từ kỹ thuật và chịu trách nhiệm trước pháp luật khi Hải quan kiểm tra.",
      "B": "Doanh nghiệp phải nộp bảng định mức cho Hải quan phê duyệt trước khi bắt đầu sản xuất.",
      "C": "Áp dụng theo bảng định mức cố định do Bộ Công Thương ban hành cho từng mặt hàng.",
      "D": "Áp dụng theo bảng định mức do bên giao gia công quy định bắt buộc mà không được thay đổi."
    },
    "answer": "A",
    "explanation": "Theo quy định hải quan hiện hành (Nghị định 08/2015/NĐ-CP và Thông tư 39/2018/TT-BTC), doanh nghiệp gia công tự xây dựng định mức thực tế, tự quản lý, lưu giữ hồ sơ tài liệu kỹ thuật tại doanh nghiệp và chịu trách nhiệm giải trình chính xác khi cơ quan Hải quan kiểm tra sau thông quan.",
    "pdf_no": null
  },
  {
    "id": 207,
    "orig_no": "207",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "\"Hàng trong địa phương\" và \"hàng ngoài địa phương\" là cách phân loại nguồn hàng xuất khẩu theo căn cứ nào?",
    "options": {
      "A": "Đơn vị địa lý",
      "B": "Cấp quản lý",
      "C": "Người cung cấp",
      "D": "Tính chất nguồn hàng"
    },
    "answer": "A",
    "explanation": "Phân chia nguồn hàng xuất khẩu thành 'Hàng trong địa phương' (trong tỉnh/thành phố) và 'Hàng ngoài địa phương' (từ các tỉnh/vùng khác) là cách phân loại căn cứ theo ranh giới đơn vị địa lý hành chính.",
    "pdf_no": null
  },
  {
    "id": 208,
    "orig_no": "208",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Cho hai nhận định về đàm phán bằng thư từ, điện tín: (1) Hình thức này có nhược điểm là chậm, dễ mất thời cơ mua bán, nên ngày nay thường được khắc phục bằng các công cụ thương mại điện tử; và (2) Ngày nay, thư từ, điện tín không còn được sử dụng trong giao dịch ký kết hợp đồng.",
    "options": {
      "A": "(1) đúng, (2) sai",
      "B": "Cả (1) và (2) đều đúng",
      "C": "(1) sai, (2) đúng",
      "D": "Cả (1) và (2) đều sai"
    },
    "answer": "A",
    "explanation": "Nhận định (1) đúng vì đàm phán bằng thư tín truyền thống có độ trễ lớn; nhận định (2) sai vì ngày nay thư điện tử (email), thông điệp dữ liệu điện tử vẫn là phương thức văn bản chủ đạo để đàm phán và giao kết hợp đồng ngoại thương.",
    "pdf_no": 69
  },
  {
    "id": 209,
    "orig_no": "209",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Cho hai nhận định: (1) Trong huy động hàng xuất khẩu, thư tín dụng chỉ được áp dụng khi các bên không tin tưởng vào khả năng thanh toán của nhau; và (2) Ủy nhiệm chi là phương thức phù hợp với các lô hàng có trị giá lớn.",
    "options": {
      "A": "(1) đúng, (2) sai",
      "B": "Cả (1) và (2) đều đúng",
      "C": "(1) sai, (2) đúng",
      "D": "Cả (1) và (2) đều sai"
    },
    "answer": "D",
    "explanation": "Cả hai nhận định đều sai: Trong huy động hàng nội địa, các bên dùng chuyển khoản, bảo lãnh ngân hàng hoặc thanh toán trả trước/trả sau; thư tín dụng L/C chủ yếu dùng trong thanh toán quốc tế; ủy nhiệm chi (chuyển tiền) áp dụng cho mọi quy mô lô hàng khi có sự tin cậy.",
    "pdf_no": 70
  },
  {
    "id": 210,
    "orig_no": "210",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Chọn cụm từ thích hợp điền vào chỗ trống: \"Quy trình thủ tục hải quan chuyển từ (1)… sang (2)… với kỹ thuật quản lý (3)…\"",
    "options": {
      "A": "(1) tiền kiểm; (2) hậu kiểm; (3) rủi ro",
      "B": "(1) hậu kiểm; (2) tiền kiểm; (3) rủi ro",
      "C": "(1) tiền kiểm; (2) hậu kiểm; (3) chất lượng",
      "D": "(1) thủ công; (2) điện tử; (3) tập trung"
    },
    "answer": "A",
    "explanation": "Chiến lược hiện đại hóa hải quan chuyển dịch căn bản từ phương thức 'tiền kiểm' (kiểm tra trước khi thông quan) sang 'hậu kiểm' (kiểm tra sau thông quan), kết hợp với kỹ thuật 'quản lý rủi ro' phân luồng tờ khai (Xanh, Vàng, Đỏ).",
    "pdf_no": 71
  },
  {
    "id": 211,
    "orig_no": "211",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Đặc điểm nào sau đây phân biệt chiến thuật đàm phán với chiến lược đàm phán?",
    "options": {
      "A": "Chiến thuật mang tính đối phó, luôn thay đổi theo các tình huống đột biến trong từng thời điểm.",
      "B": "Chiến thuật thể hiện tính nhất quán, tính tổng thể của chủ thể.",
      "C": "Chiến thuật là kế hoạch hành động nhằm đạt được một mục đích dài hạn.",
      "D": "Chiến thuật còn được gọi là tư duy chiến lược (strategic thinking)."
    },
    "answer": "A",
    "explanation": "Chiến lược là kế hoạch hành động tổng thể, dài hạn nhằm đạt mục tiêu then chốt; trong khi chiến thuật mang tính ngắn hạn, ứng biến, linh hoạt đối phó với các tình huống đột xuất nảy sinh tại bàn đàm phán.",
    "pdf_no": 73
  },
  {
    "id": 212,
    "orig_no": "212",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Đâu là những vấn đề cần quan tâm khi nghiên cứu lựa chọn đối tác?",
    "options": {
      "A": "Hình thức tổ chức của đối tác; khả năng tài chính; uy tín của đối tác; lĩnh vực, ngành nghề kinh doanh; thiện chí của đối tác.",
      "B": "Hình thức tổ chức của đối tác; khả năng tài chính; uy tín của đối tác; lĩnh vực, ngành nghề kinh doanh; tập quán tiêu dùng tại nước của đối tác.",
      "C": "Hình thức tổ chức của đối tác; khả năng tài chính; quan hệ cung – cầu và dung lượng thị trường của đối tác; lĩnh vực, ngành nghề kinh doanh; thiện chí của đối tác.",
      "D": "Hình thức tổ chức của đối tác; chu kỳ sống của sản phẩm đối tác kinh doanh; uy tín của đối tác; lĩnh vực, ngành nghề kinh doanh; thiện chí của đối tác."
    },
    "answer": "A",
    "explanation": "Nghiên cứu lựa chọn đối tác thương mại quốc tế đòi hỏi đánh giá toàn diện 5 yếu tố trọng yếu: Tư cách pháp lý và hình thức tổ chức; Năng lực tài chính; Uy tín thương trường; Lĩnh vực ngành nghề kinh doanh; và Thiện chí hợp tác của đối tác.",
    "pdf_no": 74
  },
  {
    "id": 213,
    "orig_no": "213",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Điểm khác biệt cốt lõi giữa phương thức \"đặt hàng\" và \"gia công\" là gì?",
    "options": {
      "A": "Đặt hàng: người xuất khẩu cung cấp bản vẽ, tiêu chuẩn kỹ thuật cho hàng có yêu cầu đặc biệt. Gia công: người xuất khẩu đảm trách vốn, nguyên liệu khi người sản xuất thiếu.",
      "B": "Đặt hàng: người xuất khẩu đảm trách vốn, nguyên liệu. Gia công: người xuất khẩu cung cấp bản vẽ, tiêu chuẩn kỹ thuật.",
      "C": "Đặt hàng chỉ áp dụng cho hàng nông sản, còn gia công chỉ áp dụng cho hàng công nghiệp.",
      "D": "Đặt hàng phải ký hợp đồng, còn gia công không cần ký hợp đồng."
    },
    "answer": "A",
    "explanation": "Khác biệt cốt lõi: 'Đặt hàng' là người mua cung cấp bản vẽ, quy cách kỹ thuật đặt nhà sản xuất làm hàng theo yêu cầu đặc biệt; 'Gia công' là bên đặt gia công trực tiếp cung cấp hoặc chịu trách nhiệm về nguyên vật liệu cho bên sản xuất khi họ thiếu vốn/vật tư.",
    "pdf_no": 94
  },
  {
    "id": 214,
    "orig_no": "214",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Đối với hàng xuất khẩu có điều kiện, người xuất khẩu phải làm đơn xin phép cơ quan nào?",
    "options": {
      "A": "Các Bộ chuyên ngành",
      "B": "Thủ tướng Chính phủ",
      "C": "Tổng cục Hải quan",
      "D": "Phòng Thương mại và Công nghiệp Việt Nam"
    },
    "answer": "A",
    "explanation": "Đối với hàng hóa xuất khẩu có điều kiện (thuộc danh mục quản lý chuyên ngành), doanh nghiệp xuất khẩu phải làm thủ tục xin cấp giấy phép xuất khẩu tại Các Bộ chuyên ngành quản lý mặt hàng đó (như Bộ Nông nghiệp, Bộ Y tế, Bộ Công Thương).",
    "pdf_no": 76
  },
  {
    "id": 215,
    "orig_no": "215",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Giấy chứng nhận xuất xứ hàng hóa (C/O) được cấp nhằm mục đích chính nào?",
    "options": {
      "A": "Chứng minh nguồn gốc hàng hóa, phục vụ việc áp dụng các chế độ ưu đãi tại nước nhập khẩu",
      "B": "Chứng nhận chất lượng hàng hóa phù hợp với hợp đồng",
      "C": "Chứng nhận hàng hóa đã qua kiểm dịch",
      "D": "Chứng nhận hàng hóa đã hoàn thành thủ tục hải quan"
    },
    "answer": "A",
    "explanation": "Mục đích quan trọng nhất của Giấy chứng nhận xuất xứ hàng hóa (C/O) là chứng minh xuất xứ hợp pháp của lô hàng để cơ quan hải quan nước nhập khẩu áp dụng các ưu đãi thuế quan theo hiệp định thương mại (FTA) hoặc áp thuế phòng vệ thương mại.",
    "pdf_no": 77
  },
  {
    "id": 216,
    "orig_no": "216",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Hợp đồng huy động hàng xuất khẩu có những nội dung chính nào sau đây?",
    "options": {
      "A": "Thông báo ngày tàu đến cảng nước nhập khẩu",
      "B": "Giá cả, giao hàng, thanh toán",
      "C": "Tên hàng, số lượng, chất lượng",
      "D": "Khiếu nại, trọng tài"
    },
    "answer": "B",
    "explanation": "Hợp đồng thu mua/huy động hàng xuất khẩu trong nước bao gồm các điều khoản thương mại cốt lõi: Tên hàng, số lượng, chất lượng, giá cả, thời hạn và địa điểm giao hàng, phương thức thanh toán và trách nhiệm do vi phạm hợp đồng.",
    "pdf_no": 78
  },
  {
    "id": 217,
    "orig_no": "217",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Khi gửi hàng vào kho, công việc nào sau đây KHÔNG thuộc trách nhiệm của chủ hàng?",
    "options": {
      "A": "Lập thẻ kho",
      "B": "Ký hợp đồng thuê kho",
      "C": "Chở hàng đến kho gửi hàng",
      "D": "Thanh toán chi phí lưu kho và các chi phí khác cho kho hàng"
    },
    "answer": "A",
    "explanation": "Lập thẻ kho và ghi chép sổ sách lưu kho là nghiệp vụ chuyên môn nội bộ thuộc trách nhiệm của thủ kho/doanh nghiệp kinh doanh dịch vụ kho bãi, không thuộc công việc của chủ hàng.",
    "pdf_no": 79
  },
  {
    "id": 218,
    "orig_no": "218",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Khi kiểm tra, công ty giám định phát hiện phẩm chất lô hàng không đúng với hợp đồng. Công ty giám định sẽ làm gì?",
    "options": {
      "A": "Yêu cầu người xuất khẩu sửa chữa, tái chế hoặc thay thế bằng hàng mới",
      "B": "Vẫn cấp giấy chứng nhận phẩm chất nhưng ghi chú lỗi",
      "C": "Niêm phong lô hàng và chuyển cho cơ quan hải quan xử lý",
      "D": "Thông báo cho người nhập khẩu để hủy hợp đồng"
    },
    "answer": "A",
    "explanation": "Khi giám định trước khi giao hàng phát hiện phẩm chất không đạt chuẩn hợp đồng, công ty giám định sẽ lập biên bản và thông báo yêu cầu người xuất khẩu phải tiến hành tái chế, sửa chữa hoặc thay thế bằng hàng mới đạt chuẩn trước khi đóng hàng xuất khẩu.",
    "pdf_no": 80
  },
  {
    "id": 219,
    "orig_no": "219",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Khoản chi phí nào sau đây KHÔNG nằm trong giá FOB?",
    "options": {
      "A": "Chi phí dỡ hàng tại cảng đến",
      "B": "Chi phí marketing",
      "C": "Chi phí giám định",
      "D": "Lệ phí làm thủ tục xuất khẩu như xin giấy phép, làm thủ tục hải quan, kiểm dịch"
    },
    "answer": "A",
    "explanation": "Giá FOB (Free On Board) bao gồm giá thành sản phẩm, chi phí vận chuyển nội địa ra cảng bốc, phí thông quan xuất khẩu và phí bốc hàng lên tàu tại cảng xếp hàng. Chi phí dỡ hàng tại cảng đến thuộc trách nhiệm của người mua và nằm trong giá nhóm D hoặc hợp đồng thuê tàu chặng biển.",
    "pdf_no": 81
  },
  {
    "id": 220,
    "orig_no": "220",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Nhận định nào sau đây ĐÚNG về giấy chứng nhận phẩm chất do bộ phận kiểm tra chất lượng của nhà máy cấp?",
    "options": {
      "A": "Loại giấy này không được dùng để miễn/giảm thuế nhập khẩu.",
      "B": "Loại giấy này thay thế hoàn toàn cho chứng thư giám định.",
      "C": "Loại giấy này chỉ cần thiết đối với hàng nông sản.",
      "D": "Loại giấy này đủ để xuất trình thanh toán L/C trong mọi trường hợp."
    },
    "answer": "A",
    "explanation": "Giấy chứng nhận phẩm chất (C/Q) do bộ phận kiểm tra chất lượng của nhà máy cấp chỉ có giá trị chứng minh nội bộ về chất lượng sản phẩm xuất xưởng, hoàn toàn không có giá trị pháp lý để xin miễn, giảm thuế nhập khẩu (chỉ có C/O mới dùng để hưởng ưu đãi thuế).",
    "pdf_no": 82
  },
  {
    "id": 221,
    "orig_no": "221",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Nhận định nào sau đây đúng?",
    "options": {
      "A": "Ở cả các nước phát triển lẫn các nước đang và chậm phát triển, các công ty lớn đều có bộ phận quảng cáo chuyên trách hoặc thành lập công ty chuyên làm quảng cáo.",
      "B": "Chỉ các công ty lớn ở những nước phát triển mới có bộ phận quảng cáo chuyên trách.",
      "C": "Ở Việt Nam, nhiệm vụ quảng cáo chỉ thuộc về các công ty quảng cáo chuyên nghiệp.",
      "D": "Do cạnh tranh ngày càng khốc liệt, hoạt động quảng cáo ngày càng ít được chú trọng."
    },
    "answer": "A",
    "explanation": "Khi người mua muốn nhận hàng, kiểm tra thực tế phẩm chất rồi mới trả tiền, phương thức an toàn cho người mua là Chuyển tiền trả sau (T/T after receipt of goods) hoặc Nhờ thu trả chậm (D/A) / Ghi sổ (Open Account).",
    "pdf_no": null
  },
  {
    "id": 222,
    "orig_no": "222",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Nhận định nào sau đây là đúng về việc chuẩn bị giao dịch đàm phán?",
    "options": {
      "A": "Thông tin có thể được thu thập qua điều tra riêng, qua các công ty chuyên môn, sách báo, người quen hoặc bạn bè đồng nghiệp.",
      "B": "Có một cách thức chuẩn bị đàm phán thống nhất, áp dụng chung cho mọi doanh nghiệp.",
      "C": "Doanh nghiệp có thể bỏ qua bước thu thập thông tin nếu đã có quan hệ lâu năm với đối tác.",
      "D": "Chỉ thông tin do các công ty chuyên môn cung cấp mới đủ tin cậy để sử dụng khi đàm phán."
    },
    "answer": "A",
    "explanation": "Hối phiếu đòi nợ (Draft / Commercial Bill of Exchange) là chứng từ đòi tiền vô điều kiện do người bán (người ký phát) phát hành gửi cho người mua hoặc ngân hàng mở L/C để yêu cầu thanh toán số tiền ghi trên hối phiếu.",
    "pdf_no": null
  },
  {
    "id": 223,
    "orig_no": "223",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Phương án kinh doanh là gì?",
    "options": {
      "A": "Kế hoạch hành động của doanh nghiệp nhằm đạt đến mục tiêu đã xác định",
      "B": "Bản tổng hợp các thông tin thu thập được trong quá trình nghiên cứu thị trường, thương nhân",
      "C": "Chiến lược kinh doanh dài hạn của doanh nghiệp trên thị trường quốc tế",
      "D": "Văn bản thỏa thuận giữa doanh nghiệp và đối tác về các điều kiện mua bán"
    },
    "answer": "A",
    "explanation": "Theo thông lệ hàng hải quốc tế, một bộ vận đơn đường biển gốc (Full set of original Bills of Lading) phát hành cho chủ hàng thường gồm 3 bản gốc giống hệt nhau (3/3 originals) kèm theo các bản sao (non-negotiable copies).",
    "pdf_no": null
  },
  {
    "id": 224,
    "orig_no": "224",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Thông tin nào sau đây KHÔNG thuộc nhóm thông tin về nhân sự đàm phán?",
    "options": {
      "A": "Nhu cầu nhập khẩu hằng năm của công ty đối tác",
      "B": "Tiểu sử của những người tham gia đoàn đàm phán",
      "C": "Năng lực, sở trường của từng thành viên trong đoàn",
      "D": "Người có tiếng nói quyết định trong đoàn đàm phán"
    },
    "answer": "A",
    "explanation": "Theo Điều 28 UCP 600, ngày phát hành của chứng từ bảo hiểm (Insurance Policy/Certificate) không được muộn hơn ngày giao hàng ghi trên vận đơn (B/L date), trừ khi chứng từ bảo hiểm nêu rõ bảo hiểm có hiệu lực hồi tố từ trước ngày giao hàng.",
    "pdf_no": null
  },
  {
    "id": 225,
    "orig_no": "225",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Ủy thác xuất khẩu là gì?",
    "options": {
      "A": "Một loại đại lý hoa hồng: bên nhận ủy thác xuất khẩu hàng hóa bằng danh nghĩa của mình, với chi phí của người ủy thác",
      "B": "Một loại đại lý hoa hồng: bên nhận ủy thác xuất khẩu hàng hóa bằng danh nghĩa của người ủy thác",
      "C": "Một loại đại lý hoa hồng: bên nhận ủy thác tự chịu mọi chi phí xuất khẩu",
      "D": "Một hình thức mua đứt bán đoạn giữa người ủy thác và bên nhận ủy thác"
    },
    "answer": "A",
    "explanation": "Hóa đơn lãnh sự (Consular Invoice) là hóa đơn thương mại được cơ quan lãnh sự của nước nhập khẩu đặt tại nước xuất khẩu thị thực và đóng dấu xác nhận nhằm kiểm soát xuất xứ và chống trốn thuế.",
    "pdf_no": null
  },
  {
    "id": 226,
    "orig_no": "226",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Vì sao đàm phán bằng gặp gỡ trực tiếp được coi là hình thức khó khăn nhất?",
    "options": {
      "A": "Vì đòi hỏi người tham gia phải có nghiệp vụ, phản ứng tốt và nhanh nhạy",
      "B": "Vì có chi phí thấp nhất trong các hình thức đàm phán",
      "C": "Vì không có bằng chứng để giải quyết tranh chấp",
      "D": "Vì quá trình trao đổi chậm, dễ làm mất thời cơ kinh doanh"
    },
    "answer": "A",
    "explanation": "Hóa đơn tạm tính (Proforma Invoice - P/I) là bản báo giá chi tiết dưới dạng hóa đơn do người bán phát hành, dùng để làm thủ tục xin giấy phép nhập khẩu, xin hạn mức tín dụng hoặc mở L/C tại ngân hàng; P/I không phải là chứng từ đòi tiền chính thức.",
    "pdf_no": null
  },
  {
    "id": 227,
    "orig_no": "227",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Công ty G chuẩn bị xây dựng phương án kinh doanh để xuất khẩu hàng sang thị trường EU. Công ty cần dựa vào những cơ sở chủ yếu nào?",
    "options": {
      "A": "Thông tin thu thập được khi nghiên cứu thị trường, thương nhân EU và chiến lược kinh doanh của công ty",
      "B": "Thông tin thu thập được khi nghiên cứu thị trường EU và hợp đồng đã ký với đối tác EU",
      "C": "Thông tin thu thập được khi nghiên cứu thị trường EU và chiến lược kinh doanh của đối thủ cạnh tranh",
      "D": "Chiến lược kinh doanh của công ty và mức giá cuối cùng đã chốt với khách hàng EU"
    },
    "answer": "A",
    "explanation": "Theo phương thức Nhờ thu kèm chứng từ trả tiền ngay (D/P - Documents Against Payment), ngân hàng thu hộ chỉ trao bộ chứng từ hàng hóa cho người mua sau khi người mua đã thanh toán 100% tiền hàng.",
    "pdf_no": null
  },
  {
    "id": 228,
    "orig_no": "228",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Công ty K đang đàm phán hợp đồng cung cấp trọn gói dây chuyền thiết bị cho một nhà máy ở Ấn Độ. Giá trị hợp đồng rất lớn và có nhiều điều khoản kỹ thuật phức tạp cần trao đổi chi tiết. Sau nhiều tuần trao đổi qua thư điện tử, hai bên vẫn chưa thống nhất được. Hình thức đàm phán nào phù hợp nhất lúc này?",
    "options": {
      "A": "Đàm phán bằng gặp gỡ trực tiếp",
      "B": "Tiếp tục đàm phán bằng thư từ, điện tín",
      "C": "Đàm phán bằng điện thoại",
      "D": "Chuyển sang công cụ thương mại điện tử để tăng tốc độ trao đổi"
    },
    "answer": "A",
    "explanation": "Theo phương thức Nhờ thu kèm chứng từ chấp nhận thanh toán (D/A - Documents Against Acceptance), người mua được ngân hàng trao chứng từ để nhận hàng sau khi người mua ký chấp nhận thanh toán trên hối phiếu có kỳ hạn.",
    "pdf_no": null
  },
  {
    "id": 229,
    "orig_no": "229",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Công ty mua 3 tạ quế của một hộ nông dân, giá trị lô hàng thấp. Phương thức thanh toán nào phù hợp nhất?",
    "options": {
      "A": "Thanh toán bằng tiền mặt",
      "B": "Thư tín dụng",
      "C": "Séc định mức",
      "D": "Nhờ thu chấp nhận sau"
    },
    "answer": "A",
    "explanation": "Thư tín dụng tuần hoàn (Revolving L/C) là loại L/C sau khi đã sử dụng hết kim ngạch hoặc hết thời hạn thì tự động có giá trị trở lại cho các lô hàng tiếp theo mà không cần phải làm thủ tục tu chỉnh mở mới L/C.",
    "pdf_no": null
  },
  {
    "id": 230,
    "orig_no": "230",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Công ty X xuất khẩu một lô bánh kẹo. Lô hàng này cần loại giấy chứng nhận nào?",
    "options": {
      "A": "Giấy chứng nhận kiểm tra vệ sinh (sanitary certificate), do cơ quan thuộc Bộ Y tế cấp",
      "B": "Giấy chứng nhận kiểm dịch thực vật (phytosanitary certificate)",
      "C": "Giấy chứng nhận kiểm dịch động vật (veterinary certificate)",
      "D": "Giấy chứng nhận xuất xứ (C/O)"
    },
    "answer": "A",
    "explanation": "Thư tín dụng chuyển nhượng (Transferable L/C) cho phép người thụ hưởng thứ nhất (thương nhân trung gian) yêu cầu ngân hàng chuyển nhượng một phần hoặc toàn bộ giá trị L/C cho một hoặc nhiều người thụ hưởng thứ hai (nhà sản xuất thực tế).",
    "pdf_no": null
  },
  {
    "id": 231,
    "orig_no": "231",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Công ty xuất khẩu chè T muốn nắm rõ điểm mạnh, điểm yếu của từng hợp tác xã cung cấp chè, để quyết định nên đầu tư máy sao chè cho hợp tác xã nào. Công ty nên nghiên cứu nguồn hàng theo phương pháp nào?",
    "options": {
      "A": "Lấy đơn vị cung cấp hàng làm cơ sở",
      "B": "Lấy mặt hàng làm cơ sở",
      "C": "Phân loại nguồn hàng theo cấp quản lý",
      "D": "Phân loại nguồn hàng theo tính chất"
    },
    "answer": "A",
    "explanation": "Phân loại nguồn hàng theo người cung cấp (nhà cung ứng) lấy tư cách pháp lý và loại hình doanh nghiệp của đơn vị cung cấp hàng làm cơ sở phân chia (hàng từ doanh nghiệp nhà nước, doanh nghiệp tư nhân, hợp tác xã, hộ nông dân).",
    "pdf_no": null
  },
  {
    "id": 232,
    "orig_no": "232",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Hai bên thống nhất qua điện thoại về việc giảm giá 5% cho lô hàng. Khi giao hàng, phía đối tác phủ nhận thỏa thuận này. Công ty không có căn cứ nào để giải quyết tranh chấp. Sai sót chủ yếu của công ty là gì?",
    "options": {
      "A": "Không lập văn bản xác nhận kết quả đã trao đổi qua điện thoại",
      "B": "Sử dụng điện thoại thay vì gặp gỡ trực tiếp để đàm phán",
      "C": "Không thu thập đủ thông tin về đối tác trước khi đàm phán",
      "D": "Không tính trước chi phí của cuộc gọi điện thoại quốc tế"
    },
    "answer": "A",
    "explanation": "Sai sót nghiêm trọng trong đàm phán thương mại quốc tế là thỏa thuận miệng qua điện thoại mà không lập biên bản xác nhận bằng văn bản (Writing confirmation / Email / Fax) gửi cho đối tác xác nhận lại, dẫn đến mất căn cứ pháp lý khi phát sinh tranh chấp.",
    "pdf_no": null
  },
  {
    "id": 233,
    "orig_no": "233",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Hợp tác xã gốm sứ Bát Tràng có hàng chất lượng tốt nhưng không có chức năng xuất nhập khẩu. Hợp tác xã giao lô hàng cho Công ty thương mại T. Công ty T đứng tên mình ký hợp đồng và xuất khẩu lô hàng, mọi chi phí do hợp tác xã chịu, công ty T được hưởng hoa hồng. Đây là phương thức huy động hàng nào?",
    "options": {
      "A": "Ủy thác xuất khẩu",
      "B": "Huy động hàng thông qua các đại lý thu mua",
      "C": "Gia công sản xuất hàng xuất khẩu",
      "D": "Đặt hàng"
    },
    "answer": "A",
    "explanation": "Theo Điều 155 Luật Thương mại 2005: Ủy thác xuất khẩu là việc bên ủy thác (Hợp tác xã Bát Tràng) giao cho bên nhận ủy thác (Công ty T) nhân danh chính mình ký hợp đồng mua bán với đối tác nước ngoài để xuất khẩu hàng hóa và nhận phí ủy thác (hoa hồng).",
    "pdf_no": null
  },
  {
    "id": 234,
    "orig_no": "234",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Khi giao hàng lên tàu, thuyền phó ghi chú trên biên lai thuyền phó rằng \"nhiều bao bì bị rách\". Vì sao người xuất khẩu cần xử lý vấn đề này trước khi đổi biên lai lấy vận đơn?",
    "options": {
      "A": "Vì vận đơn phải là vận đơn hoàn hảo (clean B/L) thì mới đáp ứng yêu cầu thanh toán tiền hàng",
      "B": "Vì biên lai thuyền phó có ghi chú thì không thể đổi lấy bất kỳ loại vận đơn nào",
      "C": "Vì hãng tàu sẽ từ chối chở toàn bộ lô hàng",
      "D": "Vì cơ quan hải quan sẽ hủy tờ khai đã thông quan"
    },
    "answer": "A",
    "explanation": "Biên lai thuyền phó (Mate's Receipt) có ghi chú xấu sẽ khiến hãng tàu phát hành Vận đơn có ghi chú (Unclean B/L); vận đơn không hoàn hảo này sẽ bị ngân hàng từ chối thanh toán theo phương thức L/C.",
    "pdf_no": 96
  },
  {
    "id": 235,
    "orig_no": "235",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Lô hạt tiêu xuất khẩu cần loại giấy chứng nhận nào để xuất trình cho hải quan khi làm thủ tục xuất khẩu?",
    "options": {
      "A": "Giấy chứng nhận kiểm dịch thực vật (Phytosanitary certificate)",
      "B": "Giấy chứng nhận kiểm dịch động vật (Veterinary certificate)",
      "C": "Giấy chứng nhận kiểm tra vệ sinh (Sanitary certificate)",
      "D": "Giấy chứng nhận chất lượng (Certificate of quality)"
    },
    "answer": "A",
    "explanation": "Hạt tiêu là mặt hàng nông sản có nguồn gốc thực vật, bắt buộc phải có Giấy chứng nhận kiểm dịch thực vật (Phytosanitary Certificate) do cơ quan kiểm dịch thực vật có thẩm quyền cấp để hoàn thành thủ tục hải quan xuất khẩu và nhập khẩu.",
    "pdf_no": null
  },
  {
    "id": 236,
    "orig_no": "236",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Mặt hàng thảo quả được nhiều hộ gia đình ở vùng núi sản xuất rải rác. Công ty tự cử người đi thu mua thì rất tốn kém và mất thời gian. Phương thức huy động nào phù hợp nhất?",
    "options": {
      "A": "Huy động hàng thông qua các đại lý thu mua tại địa bàn",
      "B": "Liên doanh với các hộ gia đình",
      "C": "Ủy thác xuất khẩu",
      "D": "Đặt hàng theo bản vẽ, tiêu chuẩn kỹ thuật"
    },
    "answer": "A",
    "explanation": "Đối với nông sản đặc sản vùng núi phân tán nhỏ lẻ, phương thức thu mua hiệu quả và tiết kiệm chi phí nhất là ký hợp đồng với các đại lý thu mua tại địa phương am hiểu địa bàn để thu gom tập trung.",
    "pdf_no": null
  },
  {
    "id": 237,
    "orig_no": "237",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Một lô hàng có thể tích 24 m³, dự kiến xếp vào một container có dung tích 33 m³. Vậy lô hàng sẽ được giao theo hình thức nào và tại đâu?",
    "options": {
      "A": "Giao nguyên container (FCL), tại bãi container (CY)",
      "B": "Giao hàng lẻ (LCL), tại trạm đóng hàng (CFS)",
      "C": "Giao nguyên container (FCL), tại trạm đóng hàng (CFS)",
      "D": "Giao hàng lẻ (LCL), tại bãi container (CY)"
    },
    "answer": "A",
    "explanation": "Lô hàng 24 m³ chiếm tới gần 75% dung tích của container 20ft (33 m³), do đó người xuất khẩu nên lựa chọn hình thức thuê nguyên container (FCL - Full Container Load) và giao hàng tại bãi container (CY - Container Yard) để tiết kiệm chi phí và an toàn cho hàng hóa.",
    "pdf_no": null
  },
  {
    "id": 238,
    "orig_no": "238",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Một lô hàng được thông quan ngày 15/3/2026. Cơ quan hải quan có thể kiểm tra sau thông quan đối với lô hàng này đến thời điểm nào?",
    "options": {
      "A": "Ngày 15/3/2031",
      "B": "Ngày 15/3/2027",
      "C": "Ngày 15/3/2029",
      "D": "Ngày 15/3/2036"
    },
    "answer": "A",
    "explanation": "Theo Điều 78 Luật Hải quan 2014, thời hạn cơ quan hải quan tiến hành kiểm tra sau thông quan là 05 năm kể từ ngày đăng ký tờ khai hải quan; đối với tờ khai thông quan ngày 15/3/2026 thì thời hạn kiểm tra kéo dài đến hết ngày 15/3/2031.",
    "pdf_no": null
  },
  {
    "id": 239,
    "orig_no": "239",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Nếu khấu hao hằng năm của phương án tăng lên, trong khi các yếu tố khác không đổi, thì điều gì xảy ra?",
    "options": {
      "A": "Thời gian hoàn vốn giảm, tỷ suất lợi nhuận tăng.",
      "B": "Thời gian hoàn vốn tăng, tỷ suất lợi nhuận tăng.",
      "C": "Thời gian hoàn vốn giảm, tỷ suất lợi nhuận giảm.",
      "D": "Thời gian hoàn vốn giảm, tỷ suất lợi nhuận không đổi."
    },
    "answer": "C",
    "explanation": "Khấu hao hàng năm tăng làm tăng chi phí sản xuất, dẫn đến lợi nhuận ròng giảm; tuy nhiên dòng tiền thu hồi vốn hàng năm (Lợi nhuận sau thuế + Khấu hao) tăng lên, làm thời gian hoàn vốn đầu tư giảm xuống.",
    "pdf_no": null
  },
  {
    "id": 240,
    "orig_no": "240",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Người bán muốn bảo đảm rằng người mua chỉ nhận được chứng từ hàng hóa sau khi đã trả tiền hoặc đã chấp nhận trả tiền, nhằm tránh bị chiếm dụng vốn. Người bán nên chọn phương thức thanh toán nào?",
    "options": {
      "A": "Nhờ thu chấp nhận trước",
      "B": "Nhờ thu không cần chấp nhận",
      "C": "Nhờ thu chấp nhận sau",
      "D": "Ủy nhiệm chi"
    },
    "answer": "A",
    "explanation": "Phương thức Nhờ thu kèm chứng từ (Documentary Collection: D/P trả tiền trao chứng từ hoặc D/A chấp nhận trả tiền trao chứng từ) bảo đảm ngân hàng khống chế chứng từ, người mua chỉ lấy được chứng từ nhận hàng khi đã thanh toán hoặc đã ký chấp nhận hối phiếu.",
    "pdf_no": null
  },
  {
    "id": 241,
    "orig_no": "241",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Người xuất khẩu muốn sửa L/C để được kéo dài thời hạn giao hàng, do nhà máy chậm tiến độ. Nếu người nhập khẩu đồng ý, ai chịu chi phí tu chỉnh L/C?",
    "options": {
      "A": "Người xuất khẩu",
      "B": "Người nhập khẩu",
      "C": "Ngân hàng phát hành L/C",
      "D": "Hai bên chia đôi"
    },
    "answer": "A",
    "explanation": "Theo thông lệ ngân hàng quốc tế UCP 600, bên nào yêu cầu tu chỉnh (sửa đổi) L/C do lỗi hoặc nhu cầu của mình (người bán chậm tiến độ xin gia hạn) thì bên đó phải gánh chịu toàn bộ chi phí sửa đổi L/C phát sinh tại ngân hàng.",
    "pdf_no": null
  },
  {
    "id": 242,
    "orig_no": "242",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Sau khi người xuất khẩu đề nghị, người nhập khẩu đã làm đơn xin ngân hàng điều chỉnh L/C cho phù hợp với hợp đồng. Khi nhận được L/C sửa đổi, người xuất khẩu nên làm gì?",
    "options": {
      "A": "Kiểm tra kỹ L/C sửa đổi, chỉ giao hàng khi quyền lợi của mình thật sự được bảo đảm",
      "B": "Giao hàng ngay, vì L/C đã được sửa theo đúng đề nghị của mình",
      "C": "Giao hàng theo hợp đồng mà không cần đối chiếu lại L/C sửa đổi",
      "D": "Yêu cầu ngân hàng thông báo xác nhận L/C sửa đổi thay cho việc tự kiểm tra"
    },
    "answer": "A",
    "explanation": "Khi nhận được L/C sửa đổi, người xuất khẩu phải kiểm tra, đối chiếu cẩn thận từng câu chữ xem đã đúng với thỏa thuận chưa, bảo đảm không có điều kiện bất lợi mới nào được cài cắm, chỉ khi quyền lợi được bảo đảm chắc chắn mới tiến hành giao hàng.",
    "pdf_no": null
  },
  {
    "id": 243,
    "orig_no": "243",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Trong buổi đàm phán, bên mua khéo léo đặt câu hỏi về năng lực sản xuất, sau đó chờ đợi để bên bán phải chủ động đưa ra mức giá chào. Chỉ khi có mức giá này, bên mua mới bắt đầu mặc cả. Bên mua đang sử dụng kỹ thuật nào?",
    "options": {
      "A": "Kỹ thuật buộc đối phương phải đưa ra đề nghị trước",
      "B": "Kỹ thuật lảng tránh",
      "C": "Kỹ thuật đưa ra đề nghị và bảo vệ đề nghị của mình",
      "D": "Kỹ thuật đối phó với thủ thuật đưa ra đề nghị chót của đối tác"
    },
    "answer": "A",
    "explanation": "Chiến thuật đặt câu hỏi dẫn dắt để đối phương phải là bên đưa ra mức giá chào và điều kiện trước nhằm thăm dò giới hạn và giữ thế chủ động mặc cả được gọi là Kỹ thuật buộc đối phương đưa ra đề nghị trước.",
    "pdf_no": null
  },
  {
    "id": 244,
    "orig_no": "244",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Trong buổi đàm phán, đối tác liên tục đưa ra hạn chót, ép giảm giá và đe dọa sẽ chuyển sang nhà cung cấp khác nếu không được đáp ứng ngay. Đối tác đang thể hiện kiểu đàm phán nào?",
    "options": {
      "A": "Thái độ thúc bách, chèn ép",
      "B": "Thái độ hững hờ, xa lánh",
      "C": "Thái độ đơn giản, thẳng thắn",
      "D": "Thái độ hợp tác"
    },
    "answer": "A",
    "explanation": "Hành vi liên tục đưa ra hạn chót, gây áp lực thời gian, đe dọa hủy đàm phán hoặc chuyển sang đối thủ cạnh tranh thể hiện chiến thuật đàm phán mang thái độ thúc bách, chèn ép (High-pressure tactics) nhằm buộc đối tác phải nhân nhượng.",
    "pdf_no": null
  },
  {
    "id": 245,
    "orig_no": "245",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Trưởng đoàn đàm phán của Công ty P thông thạo tiếng Anh, nhưng công ty vẫn bố trí phiên dịch trong suốt buổi đàm phán với đối tác Mỹ. Ngoài việc giải quyết bất đồng ngôn ngữ, phiên dịch còn có tác dụng gì?",
    "options": {
      "A": "Tạo điều kiện để suy nghĩ, cân nhắc trước khi trả lời đối tác",
      "B": "Tăng tính trang trọng cho buổi đàm phán",
      "C": "Đáp ứng quy định bắt buộc của pháp luật về đàm phán quốc tế",
      "D": "Giúp ghi chép nội dung để làm bằng chứng khi có tranh chấp"
    },
    "answer": "A",
    "explanation": "Sử dụng phiên dịch viên chuyên nghiệp ngoài việc bảo đảm dịch thuật chính xác thuật ngữ pháp lý còn tạo ra 'khoảng đệm thời gian' quý báu giúp trưởng đoàn đàm phán có thêm thời gian suy nghĩ, phân tích ý đồ của đối tác trước khi đưa ra câu trả lời chính thức.",
    "pdf_no": null
  },
  {
    "id": 246,
    "orig_no": "246",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Trường hợp nào sau đây là xuất khẩu tại chỗ theo quy định của pháp luật Việt Nam?",
    "options": {
      "A": "Công ty A (Việt Nam) giao lô vải cho Công ty B (Việt Nam) theo chỉ định của khách hàng Hàn Quốc, là bên đã ký hợp đồng mua lô vải đó với Công ty A.",
      "B": "Công ty A (Việt Nam) bán lô vải cho Công ty B (Việt Nam). Sau đó, Công ty B tự tìm khách và xuất khẩu sang Hàn Quốc.",
      "C": "Công ty A (Việt Nam) giao lô vải cho khách hàng Hàn Quốc tại cảng Hải Phòng để khách tự vận chuyển về nước.",
      "D": "Công ty A (Việt Nam) bán vải cho khách du lịch Hàn Quốc tại cửa hàng của công ty ở Hà Nội."
    },
    "answer": "A",
    "explanation": "Theo Điều 86 Thông tư 38/2015/TT-BTC và Điều 35 Nghị định 08/2015/NĐ-CP, hàng hóa xuất nhập khẩu tại chỗ bao gồm: Hàng hóa do doanh nghiệp Việt Nam bán cho thương nhân nước ngoài nhưng giao hàng cho doanh nghiệp khác tại Việt Nam theo chỉ định của thương nhân nước ngoài.",
    "pdf_no": 97
  },
  {
    "id": 247,
    "orig_no": "247",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Chào hàng tự do khác với chào hàng cố định ở điểm nào?",
    "options": {
      "A": "Người chào hàng không bị ràng buộc trách nhiệm trong thời hạn nhất định như chào hàng cố định",
      "B": "Chào hàng tự do luôn có giá trị pháp lý cao hơn",
      "C": "Chào hàng tự do bắt buộc phải ký hợp đồng ngay",
      "D": "Chào hàng cố định không liên quan đến giao dịch"
    },
    "answer": "A",
    "explanation": "Chào hàng tự do (Free offer) là loại chào hàng không có thời hạn ràng buộc người phát ra chào hàng, người bán có quyền chào hàng cùng lúc cho nhiều người và có quyền từ chối giao kết hoặc điều chỉnh nội dung mà không chịu trách nhiệm pháp lý, khác với chào hàng cố định (Firm offer) bị ràng buộc nghĩa vụ pháp lý trong thời hạn hiệu lực.",
    "pdf_no": 98
  },
  {
    "id": 248,
    "orig_no": "248",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Điều khoản chất lượng trong hợp đồng nhập khẩu có ý nghĩa:",
    "options": {
      "A": "Là căn cứ kiểm tra và đánh giá sự phù hợp của hàng hóa",
      "B": "Chỉ nhằm mục đích tham khảo",
      "C": "Không liên quan đến tranh chấp",
      "D": "Không cần thiết với hàng hóa quốc tế"
    },
    "answer": "A",
    "explanation": "Điều khoản chất lượng (Quality clause) quy định các chỉ tiêu kỹ thuật, phẩm chất hàng hóa làm cơ sở pháp lý để người mua kiểm tra, nghiệm thu và đánh giá sự phù hợp của hàng hóa khi nhận hàng, cũng như làm căn cứ pháp lý để khiếu nại nếu hàng không đạt chuẩn.",
    "pdf_no": 99
  },
  {
    "id": 249,
    "orig_no": "249",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Điều khoản số lượng trong hợp đồng nhập khẩu cần được quy định nhằm:",
    "options": {
      "A": "Xác định rõ khối lượng hoặc số lượng hàng hóa giao nhận",
      "B": "Xác định trách nhiệm quảng cáo",
      "C": "Xác định nhân sự doanh nghiệp",
      "D": "Xác định thị trường tiêu thụ cuối cùng"
    },
    "answer": "A",
    "explanation": "Điều khoản số lượng (Quantity clause) xác định cụ thể khối lượng, số lượng hoặc số kiện hàng hóa giao nhận cùng đơn vị tính và dung sai cho phép (nếu có).",
    "pdf_no": null
  },
  {
    "id": 250,
    "orig_no": "250",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Hạn chế lớn của nhập khẩu qua trung gian là:",
    "options": {
      "A": "Mất mối quan hệ trực tiếp với thị trường nước ngoài",
      "B": "Không phát sinh quan hệ thương mại",
      "C": "Không thể nhập khẩu hàng hóa",
      "D": "Không cần trả phí cho trung gian"
    },
    "answer": "A",
    "explanation": "Nhập khẩu qua trung gian (đại lý, ủy thác, môi giới) khiến người mua bị ngăn cách thông tin với nhà sản xuất và thị trường nước ngoài, dễ bị phụ thuộc vào trung gian và mất đi mối liên kết kinh doanh trực tiếp.",
    "pdf_no": null
  },
  {
    "id": 251,
    "orig_no": "251",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Hợp đồng nhập khẩu có vai trò quan trọng vì:",
    "options": {
      "A": "Là cơ sở pháp lý xác định quyền và nghĩa vụ của các bên tham gia",
      "B": "Chỉ dùng để quảng bá sản phẩm",
      "C": "Không liên quan đến tranh chấp thương mại",
      "D": "Thay thế hoàn toàn thủ tục hải quan"
    },
    "answer": "A",
    "explanation": "Hợp đồng nhập khẩu là văn bản pháp lý cao nhất ghi nhận sự thỏa thuận, xác định rõ quyền và nghĩa vụ ràng buộc của người mua và người bán trong toàn bộ quá trình giao dịch.",
    "pdf_no": null
  },
  {
    "id": 252,
    "orig_no": "252",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Khi bên mua nhận được chào hàng nhưng đưa ra yêu cầu thay đổi giá hoặc điều kiện giao dịch thì được xem là:",
    "options": {
      "A": "Hoàn giá",
      "B": "Chấp nhận hoàn toàn",
      "C": "Xác nhận hợp đồng",
      "D": "Hỏi hàng"
    },
    "answer": "A",
    "explanation": "Theo Điều 19 CISG 1980 và Luật Thương mại 2005, phản hồi chào hàng có chứa các điểm sửa đổi, bổ sung về giá cả hoặc các điều kiện giao dịch cơ bản cấu thành việc từ chối chào hàng ban đầu và trở thành một chào hàng mới (gọi là Hoàn giá - Counter-offer).",
    "pdf_no": null
  },
  {
    "id": 253,
    "orig_no": "253",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Khi đàm phán hợp đồng nhập khẩu, doanh nghiệp cần ưu tiên xem xét điều khoản nào để hạn chế rủi ro?",
    "options": {
      "A": "Điều khoản hàng hóa, giá cả, giao hàng, thanh toán và giải quyết tranh chấp",
      "B": "Điều khoản quảng cáo thương hiệu",
      "C": "Điều khoản tuyển dụng nhân sự",
      "D": "Điều khoản trang trí văn phòng"
    },
    "answer": "A",
    "explanation": "Hàng hóa, giá cả, giao hàng, thanh toán và giải quyết tranh chấp là 5 điều khoản thương mại và pháp lý cốt lõi của hợp đồng ngoại thương, quyết định trực tiếp đến quyền lợi và hạn chế rủi ro cho doanh nghiệp.",
    "pdf_no": null
  },
  {
    "id": 254,
    "orig_no": "254",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Khi đánh giá hiệu quả của một thương vụ nhập khẩu, doanh nghiệp cần xem xét:",
    "options": {
      "A": "Tổng thể chi phí, lợi ích, rủi ro và khả năng tiêu thụ hàng hóa",
      "B": "Chỉ giá mua ban đầu",
      "C": "Chỉ thời gian ký hợp đồng",
      "D": "Chỉ quy mô của nhà cung cấp"
    },
    "answer": "A",
    "explanation": "Đánh giá hiệu quả thương vụ nhập khẩu đòi hỏi xem xét tổng thể: tổng chi phí nhập khẩu (giá mua, cước vận chuyển, bảo hiểm, thuế, chi phí logistics kho bãi), doanh thu, biên lợi nhuận, khả năng tiêu thụ hàng hóa và các rủi ro phát sinh.",
    "pdf_no": null
  },
  {
    "id": 255,
    "orig_no": "255",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Khi doanh nghiệp chưa có nhiều kinh nghiệm trên thị trường nước ngoài, phương thức nhập khẩu nào thường được cân nhắc sử dụng?",
    "options": {
      "A": "Nhập khẩu qua trung gian thương mại",
      "B": "Nhập khẩu trực tiếp trong mọi trường hợp",
      "C": "Không cần giao dịch với đối tác nước ngoài",
      "D": "Chỉ mua hàng qua đấu giá"
    },
    "answer": "A",
    "explanation": "Khi doanh nghiệp chưa có nhiều kinh nghiệm trên thị trường quốc tế, nhập khẩu qua trung gian thương mại (như ủy thác nhập khẩu hoặc đại lý) giúp doanh nghiệp tận dụng chuyên môn, giảm thiểu sai sót thủ tục pháp lý, hải quan và logistics.",
    "pdf_no": null
  },
  {
    "id": 256,
    "orig_no": "256",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Khi doanh nghiệp nhập khẩu lựa chọn điều kiện giao hàng trong hợp đồng, mục đích quan trọng nhất là:",
    "options": {
      "A": "Xác định trách nhiệm, chi phí và rủi ro giữa người mua và người bán",
      "B": "Xác định quyền sở hữu thương hiệu",
      "C": "Xác định phương pháp quảng cáo sản phẩm",
      "D": "Xác định cơ cấu tổ chức doanh nghiệp"
    },
    "answer": "A",
    "explanation": "Mục đích cốt lõi của các điều kiện giao hàng (Incoterms) trong hợp đồng là phân định rõ ràng nghĩa vụ, phân chia chi phí và xác định điểm chuyển giao rủi ro mất mát hoặc hư hỏng hàng hóa giữa người bán và người mua.",
    "pdf_no": null
  },
  {
    "id": 257,
    "orig_no": "257",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Khi doanh nghiệp nhập khẩu lựa chọn phương thức nhập khẩu trực tiếp, doanh nghiệp phải chủ động hơn trong:",
    "options": {
      "A": "Tìm kiếm đối tác, đàm phán và tổ chức thực hiện hợp đồng",
      "B": "Chỉ quảng cáo sản phẩm",
      "C": "Chỉ thuê kho hàng",
      "D": "Chỉ kiểm tra thị trường trong nước"
    },
    "answer": "A",
    "explanation": "Phương thức nhập khẩu trực tiếp đòi hỏi doanh nghiệp phải tự mình chủ động toàn bộ các khâu: nghiên cứu thị trường, tìm kiếm và thẩm định đối tác, đàm phán ký kết hợp đồng, mở L/C, thuê tàu, mua bảo hiểm và làm thủ tục thông quan nhận hàng.",
    "pdf_no": null
  },
  {
    "id": 258,
    "orig_no": "258",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Khi doanh nghiệp nhập khẩu phát hiện hàng hóa không đúng với hợp đồng, bước xử lý phù hợp đầu tiên là:",
    "options": {
      "A": "Kiểm tra, lập chứng cứ và thông báo cho bên liên quan theo quy định hợp đồng",
      "B": "Tự ý tiêu hủy hàng hóa",
      "C": "Ngừng mọi giao dịch quốc tế",
      "D": "Không cần thông báo cho người bán"
    },
    "answer": "A",
    "explanation": "Khi phát hiện hàng hóa không phù hợp với hợp đồng, bước đầu tiên mang tính bắt buộc là kiểm tra, lập biên bản chứng cứ (mời cơ quan giám định độc lập lập Giám định thư) và gửi thông báo khiếu nại (Claim notice) kịp thời theo thời hạn quy định trong hợp đồng hoặc luật áp dụng.",
    "pdf_no": null
  },
  {
    "id": 259,
    "orig_no": "259",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Một doanh nghiệp nhập khẩu lựa chọn đối tác chỉ dựa vào giá thấp nhưng không xem xét năng lực giao hàng. Rủi ro lớn nhất có thể xảy ra là:",
    "options": {
      "A": "Không đảm bảo tiến độ giao hàng và ảnh hưởng kế hoạch kinh doanh",
      "B": "Giảm chi phí nhập khẩu",
      "C": "Tăng khả năng kiểm soát thị trường",
      "D": "Giảm nhu cầu nghiên cứu thị trường"
    },
    "answer": "A",
    "explanation": "Nếu chỉ chọn nhà cung cấp giá rẻ mà bỏ qua năng lực sản xuất và logistics, rủi ro lớn nhất là đối tác giao hàng chậm trễ, giao thiếu hoặc hủy giao hàng, làm đình trệ hoạt động sản xuất kinh doanh của doanh nghiệp nhập khẩu.",
    "pdf_no": null
  },
  {
    "id": 260,
    "orig_no": "260",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Một doanh nghiệp nhập khẩu lựa chọn nhà cung cấp có giá cao hơn nhưng có uy tín và chất lượng ổn định. Quyết định này thể hiện:",
    "options": {
      "A": "Đánh giá hiệu quả nhập khẩu không chỉ dựa trên giá mua",
      "B": "Doanh nghiệp không quan tâm đến chi phí",
      "C": "Doanh nghiệp không cần nghiên cứu thị trường",
      "D": "Doanh nghiệp không cần hợp đồng"
    },
    "answer": "A",
    "explanation": "Quyết định chọn nhà cung ứng giá cao hơn nhưng có uy tín và chất lượng ổn định thể hiện tư duy quản trị hiện đại: đánh giá hiệu quả thương vụ dựa trên tổng chi phí sở hữu (TCO) và mức độ an toàn chuỗi cung ứng, không mua hàng thuần túy theo giá rẻ.",
    "pdf_no": null
  },
  {
    "id": 261,
    "orig_no": "261",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Một doanh nghiệp nhập khẩu muốn giảm rủi ro khi giao dịch với đối tác nước ngoài mới. Biện pháp phù hợp nhất là:",
    "options": {
      "A": "Tìm hiểu kỹ uy tín đối tác và khả năng thực hiện hợp đồng",
      "B": "Chỉ lựa chọn đối tác có giá thấp nhất",
      "C": "Không cần kiểm tra thông tin doanh nghiệp",
      "D": "Không cần quy định điều khoản hợp đồng"
    },
    "answer": "A",
    "explanation": "Với đối tác nước ngoài mới, biện pháp phòng ngừa rủi ro hàng đầu là tiến hành thẩm định kỹ lưỡng (Due Diligence) về tư cách pháp nhân, tình hình tài chính, uy tín thương mại và năng lực thực hiện hợp đồng.",
    "pdf_no": null
  },
  {
    "id": 262,
    "orig_no": "262",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Một hợp đồng nhập khẩu có điều khoản giải quyết tranh chấp nhằm:",
    "options": {
      "A": "Xác định phương thức xử lý khi các bên phát sinh bất đồng",
      "B": "Thay thế toàn bộ nội dung hợp đồng",
      "C": "Không cần thực hiện nghĩa vụ hợp đồng",
      "D": "Chỉ phục vụ mục đích quảng cáo"
    },
    "answer": "A",
    "explanation": "Điều khoản giải quyết tranh chấp (Dispute resolution clause) quy định cơ chế và trình tự xử lý (thương lượng, hòa giải, trọng tài thương mại hay tòa án) cùng luật áp dụng khi hai bên phát sinh mâu thuẫn trong quá trình thực hiện hợp đồng.",
    "pdf_no": null
  },
  {
    "id": 263,
    "orig_no": "263",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Nếu doanh nghiệp nhập khẩu không kiểm tra kỹ chứng từ hàng hóa trước khi nhận hàng, rủi ro có thể phát sinh là:",
    "options": {
      "A": "Sai lệch về thông tin hàng hóa, số lượng hoặc điều kiện giao nhận",
      "B": "Doanh nghiệp không cần thanh toán",
      "C": "Hợp đồng tự động bị hủy",
      "D": "Người bán mất quyền sở hữu hàng hóa"
    },
    "answer": "A",
    "explanation": "Chứng từ hàng hóa (Hóa đơn, Vận đơn, Phiếu đóng gói, C/O...) đại diện cho hàng hóa và thông tin pháp lý; không kiểm tra kỹ sẽ dẫn đến sai lệch thông tin, gây ách tắc thủ tục hải quan hoặc nhận sai hàng hóa/số lượng.",
    "pdf_no": null
  },
  {
    "id": 264,
    "orig_no": "264",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Nhập khẩu trực tiếp được hiểu là:",
    "options": {
      "A": "Doanh nghiệp trực tiếp tiến hành trao đổi hàng hóa với đối tác nước ngoài",
      "B": "Doanh nghiệp bắt buộc phải thông qua đại lý",
      "C": "Doanh nghiệp không cần nghiên cứu thị trường",
      "D": "Doanh nghiệp chỉ mua hàng trong nước"
    },
    "answer": "A",
    "explanation": "Nhập khẩu trực tiếp là phương thức giao dịch mà bên mua trong nước và bên bán nước ngoài trực tiếp thiết lập quan hệ, trao đổi, đàm phán và ký kết thực hiện hợp đồng mà không qua bên thứ ba trung gian.",
    "pdf_no": null
  },
  {
    "id": 265,
    "orig_no": "265",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Nhược điểm của nhập khẩu trực tiếp là:",
    "options": {
      "A": "Chi phí cao và có thể phát sinh nhiều rủi ro do khoảng cách giữa các bên",
      "B": "Không thể lựa chọn đối tác",
      "C": "Không được ký hợp đồng",
      "D": "Không được thanh toán quốc tế"
    },
    "answer": "A",
    "explanation": "Nhược điểm của nhập khẩu trực tiếp là đòi hỏi chi phí giao dịch, nhân sự nghiệp vụ chuyên trách, đồng thời doanh nghiệp phải tự gánh chịu toàn bộ rủi ro về thị trường, khoảng cách địa lý, rủi ro vận tải và pháp lý quốc tế.",
    "pdf_no": null
  },
  {
    "id": 266,
    "orig_no": "266",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Trong hoạt động nhập khẩu, việc xác định nhu cầu nhập khẩu trước khi giao dịch nhằm mục đích chủ yếu là:",
    "options": {
      "A": "Xác định loại hàng, số lượng, chất lượng và thời điểm cần nhập khẩu",
      "B": "Chỉ xác định quốc gia xuất khẩu",
      "C": "Chỉ lựa chọn phương thức vận tải",
      "D": "Không cần quan tâm đến khả năng tiêu thụ trong nước"
    },
    "answer": "A",
    "explanation": "Xác định nhu cầu nhập khẩu là bước tiền đề trong quy trình kinh doanh, nhằm xác định chính xác chủng loại hàng, thông số kỹ thuật, số lượng cần thiết và thời điểm hàng về phù hợp với nhu cầu sản xuất/tiêu thụ.",
    "pdf_no": null
  },
  {
    "id": 267,
    "orig_no": "267",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Trong hợp đồng nhập khẩu, điều khoản bất khả kháng có ý nghĩa:",
    "options": {
      "A": "Quy định cách xử lý khi xảy ra những sự kiện ngoài khả năng kiểm soát của các bên",
      "B": "Xác định giá hàng hóa nhập khẩu",
      "C": "Thay thế điều khoản giao hàng",
      "D": "Loại bỏ hoàn toàn nghĩa vụ hợp đồng"
    },
    "answer": "A",
    "explanation": "Điều khoản bất khả kháng (Force Majeure clause) quy định các trường hợp sự kiện khách quan, không thể lường trước và không thể khắc phục được (chiến tranh, thiên tai, dịch bệnh...) giúp miễn trừ trách nhiệm hợp đồng và xác định cách thức giải quyết tiếp theo.",
    "pdf_no": null
  },
  {
    "id": 268,
    "orig_no": "268",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Trong hợp đồng nhập khẩu, điều khoản thanh toán cần quy định rõ:",
    "options": {
      "A": "Phương thức thanh toán, thời hạn thanh toán và các điều kiện liên quan",
      "B": "Số lượng nhân viên của hai doanh nghiệp",
      "C": "Kế hoạch tiêu thụ sản phẩm",
      "D": "Chiến lược phát triển thương hiệu"
    },
    "answer": "A",
    "explanation": "Điều khoản thanh toán cần quy định cụ thể phương thức thanh toán (L/C, T/T, D/P, D/A), đồng tiền thanh toán, thời hạn thanh toán và bộ chứng từ xuất trình làm căn cứ thanh toán.",
    "pdf_no": null
  },
  {
    "id": 269,
    "orig_no": "269",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Trong quá trình giao dịch nhập khẩu, khi bên mua yêu cầu bên bán cung cấp thông tin về giá cả, điều kiện giao hàng và sản phẩm thì đây là hoạt động:",
    "options": {
      "A": "Hỏi hàng",
      "B": "Chấp nhận chào hàng",
      "C": "Ký hợp đồng",
      "D": "Khiếu nại"
    },
    "answer": "A",
    "explanation": "Hỏi hàng (Inquiry) là hành động của người mua chủ động tiếp cận người bán để yêu cầu cung cấp thông tin chi tiết về sản phẩm, giá cả, thời gian giao hàng và các điều kiện mua bán.",
    "pdf_no": null
  },
  {
    "id": 270,
    "orig_no": "270",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Trong quá trình lựa chọn phương thức nhập khẩu, doanh nghiệp cần căn cứ chủ yếu vào:",
    "options": {
      "A": "Năng lực tài chính, kinh nghiệm, mục tiêu kinh doanh và điều kiện thị trường",
      "B": "Sở thích cá nhân của người quản lý",
      "C": "Quy mô văn phòng của doanh nghiệp xuất khẩu",
      "D": "Số lượng quảng cáo của đối tác"
    },
    "answer": "A",
    "explanation": "Việc lựa chọn phương thức nhập khẩu (trực tiếp hay gián tiếp qua ủy thác) phải căn cứ vào năng lực tài chính, trình độ nghiệp vụ ngoại thương của nhân sự, mục tiêu chiến lược và mức độ phức tạp của thị trường.",
    "pdf_no": null
  },
  {
    "id": 271,
    "orig_no": "271",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Trong quá trình nhập khẩu, việc kiểm tra chứng từ trước khi nhận hàng giúp doanh nghiệp:",
    "options": {
      "A": "Hạn chế sai sót về thông tin hàng hóa và thủ tục nhập khẩu",
      "B": "Không cần kiểm tra thực tế hàng hóa",
      "C": "Không cần thực hiện nghĩa vụ thanh toán",
      "D": "Thay đổi giá trong hợp đồng"
    },
    "answer": "A",
    "explanation": "Kiểm tra kỹ bộ chứng từ trước khi nhận hàng giúp phát hiện sớm các điểm bất hợp lệ, sai sót thông tin để kịp thời yêu cầu bên bán chỉnh sửa, tránh phát sinh chi phí lưu kho bãi (DEM/DET) và đảm bảo thông quan thuận lợi.",
    "pdf_no": null
  },
  {
    "id": 272,
    "orig_no": "272",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Trong quá trình thực hiện hợp đồng nhập khẩu, việc kiểm tra hàng hóa trước khi nhận nhằm mục đích:",
    "options": {
      "A": "Phát hiện sự phù hợp hoặc sai lệch so với hợp đồng",
      "B": "Thay đổi giá mua hàng hóa",
      "C": "Thay thế hoàn toàn hợp đồng đã ký",
      "D": "Loại bỏ nghĩa vụ thanh toán"
    },
    "answer": "A",
    "explanation": "Mục đích của việc kiểm tra hàng hóa trước khi nhận là nhằm xác định sự phù hợp về số lượng, trọng lượng, phẩm chất, bao bì của hàng hóa thực tế so với các điều khoản đã thỏa thuận trong hợp đồng.",
    "pdf_no": null
  },
  {
    "id": 273,
    "orig_no": "273",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Trong thực hiện hợp đồng nhập khẩu, việc thuê phương tiện vận tải phù hợp nhằm:",
    "options": {
      "A": "Đảm bảo quá trình vận chuyển hàng hóa đúng thời gian và điều kiện yêu cầu",
      "B": "Thay đổi điều khoản hợp đồng",
      "C": "Loại bỏ trách nhiệm của người bán",
      "D": "Không cần làm thủ tục nhập khẩu"
    },
    "answer": "A",
    "explanation": "Thuê phương tiện vận tải thích hợp (đúng tuyến đường, đúng loại tàu, cước phí hợp lý) bảo đảm hàng hóa được chuyên chở an toàn, đúng thời gian và tuân thủ các điều kiện bảo quản kỹ thuật.",
    "pdf_no": null
  },
  {
    "id": 274,
    "orig_no": "274",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty A muốn nhập 1.000 máy pha cà phê từ Ý. Trước khi liên hệ nhà cung cấp, công ty cần làm rõ nhu cầu thị trường trong nước. Thông tin nào quan trọng nhất?",
    "options": {
      "A": "Nhu cầu và khả năng tiêu thụ trong nước",
      "B": "Diện tích văn phòng nhà cung cấp",
      "C": "Số nhân viên của nhà cung cấp",
      "D": "Màu logo của nhà cung cấp"
    },
    "answer": "A",
    "explanation": "Trước khi nhập khẩu mặt hàng thương mại như máy pha cà phê, khảo sát nhu cầu thị trường và khả năng tiêu thụ trong nước là thông tin quan trọng nhất để tránh nguy cơ ế ẩm và chôn vốn.",
    "pdf_no": null
  },
  {
    "id": 275,
    "orig_no": "275",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty chọn điều kiện giao hàng nhưng không xác định rõ địa điểm giao hàng. Rủi ro dễ phát sinh là:",
    "options": {
      "A": "Giảm số lượng hàng",
      "B": "Không cần chứng từ",
      "C": "Tranh chấp về trách nhiệm, chi phí và rủi ro",
      "D": "Tăng chất lượng hàng"
    },
    "answer": "C",
    "explanation": "Theo Incoterms 2020, điều kiện giao hàng luôn phải gắn liền với một địa điểm cụ thể (named place/port). Nếu không ghi rõ địa điểm giao hàng, các bên sẽ rơi vào tranh chấp gay gắt về điểm phân chia chi phí và chuyển giao rủi ro.",
    "pdf_no": null
  },
  {
    "id": 276,
    "orig_no": "276",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty đã ký hợp đồng nhưng các bộ phận mua hàng, kế toán và logistics không phối hợp. Hậu quả dễ xảy ra là:",
    "options": {
      "A": "Chậm hoặc sai trong quá trình thực hiện hợp đồng",
      "B": "Giá hàng tự động giảm",
      "C": "Chất lượng tự động tăng",
      "D": "Không ảnh hưởng"
    },
    "answer": "A",
    "explanation": "Thiếu sự phối hợp đồng bộ giữa mua hàng, kế toán và logistics sẽ dẫn đến việc mở L/C chậm, không thu xếp kịp tàu xe, chậm trễ thông quan và gây đình trệ toàn bộ quá trình thực hiện hợp đồng.",
    "pdf_no": null
  },
  {
    "id": 277,
    "orig_no": "277",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty muốn đánh giá hiệu quả thương vụ sau khi hàng về. Chỉ tiêu nào cần được xem xét?",
    "options": {
      "A": "Chi phí, lợi ích, rủi ro và khả năng tiêu thụ",
      "B": "Chỉ giá mua",
      "C": "Chỉ thời gian ký",
      "D": "Chỉ số lượng hợp đồng"
    },
    "answer": "A",
    "explanation": "Sau khi hàng về, đánh giá hiệu quả thương vụ phải căn cứ trên tổng thể chi phí (Landed Cost), doanh thu lợi nhuận thực tế, các rủi ro tổn thất phát sinh và tốc độ giải phóng hàng hóa trên thị trường.",
    "pdf_no": 83
  },
  {
    "id": 278,
    "orig_no": "278",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty muốn lựa chọn giữa hai phương án nhập: A có giá thấp nhưng thời gian giao dài; B giá cao hơn nhưng giao nhanh. Nếu thị trường cần hàng gấp, quyết định nên dựa vào:",
    "options": {
      "A": "Tổng lợi ích và ảnh hưởng của thời gian giao hàng",
      "B": "Chỉ số lượng hàng",
      "C": "Chỉ giá mua",
      "D": "Chỉ khoảng cách địa lý"
    },
    "answer": "A",
    "explanation": "Khi thị trường đang cần hàng gấp, thời gian giao hàng quyết định cơ hội kinh doanh; do đó doanh nghiệp cần so sánh tổng lợi ích đem lại từ việc đáp ứng kịp thời thị trường so với chi phí chênh lệch giá mua.",
    "pdf_no": 84
  },
  {
    "id": 279,
    "orig_no": "279",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty muốn nhập hàng nhưng chưa biết quy định pháp lý liên quan tại nước nhập khẩu. Cách xử lý phù hợp là:",
    "options": {
      "A": "Tìm hiểu quy định hoặc sử dụng tư vấn chuyên môn",
      "B": "Chỉ xem quảng cáo",
      "C": "Bỏ qua quy định",
      "D": "Ký trước rồi tính sau"
    },
    "answer": "A",
    "explanation": "Khi chưa am hiểu quy định quản lý xuất nhập khẩu tại nước sở tại, doanh nghiệp phải chủ động tra cứu văn bản pháp luật, chính sách chuyên ngành hoặc thuê chuyên gia tư vấn pháp lý/hải quan để tránh vi phạm.",
    "pdf_no": 93
  },
  {
    "id": 280,
    "orig_no": "280",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty muốn thay đổi giá sau khi đã chấp nhận chào hàng vô điều kiện. Vấn đề cần xem xét là:",
    "options": {
      "A": "Hai bên đã hình thành cam kết theo nội dung đã chấp nhận hay chưa",
      "B": "Có thể đổi giá tùy ý",
      "C": "Không cần thông báo",
      "D": "Người bán luôn phải chấp nhận"
    },
    "answer": "A",
    "explanation": "Khi đã chấp nhận chào hàng vô điều kiện, hợp đồng đã có hiệu lực pháp lý ràng buộc. Doanh nghiệp không thể tự ý đổi giá mà phải xem xét các cam kết đã hình thành và chỉ có thể thay đổi nếu được đối tác đồng thuận sửa đổi hợp đồng.",
    "pdf_no": 86
  },
  {
    "id": 281,
    "orig_no": "281",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty muốn tránh tranh chấp về chất lượng máy. Nội dung nào nên được quy định rõ trong hợp đồng?",
    "options": {
      "A": "Tiêu chuẩn và phương thức kiểm tra",
      "B": "Kế hoạch quảng cáo",
      "C": "Số nhân viên hai bên",
      "D": "Màu văn phòng"
    },
    "answer": "A",
    "explanation": "Để tránh tranh chấp về chất lượng, hợp đồng cần quy định cụ thể tiêu chuẩn kỹ thuật (thông số, nhãn hiệu, quy cách kiểm định) và phương thức kiểm tra chất lượng (cơ quan giám định, thời điểm và địa điểm giám định).",
    "pdf_no": 87
  },
  {
    "id": 282,
    "orig_no": "282",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty nhận chào hàng 100 USD/máy nhưng đề nghị lại 92 USD/máy và giữ nguyên các điều kiện khác. Hành động của công ty là:",
    "options": {
      "A": "Hoàn giá",
      "B": "Chấp nhận vô điều kiện",
      "C": "Xác nhận hợp đồng",
      "D": "Khiếu nại"
    },
    "answer": "A",
    "explanation": "Đề nghị thay đổi giá từ 100 USD xuống 92 USD là hành động Hoàn giá (Counter-offer). Theo luật quốc tế, hành động này hủy bỏ chào hàng ban đầu và trở thành một đề nghị giao kết hợp đồng mới từ phía người mua.",
    "pdf_no": 88
  },
  {
    "id": 283,
    "orig_no": "283",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty nhập 2.000 máy nhưng thị trường chỉ tiêu thụ được 800 máy trong thời gian dự kiến. Vấn đề cần xem xét là:",
    "options": {
      "A": "Dự báo nhu cầu và lượng nhập",
      "B": "Chỉ tên hàng",
      "C": "Chỉ ngân hàng",
      "D": "Chỉ phương thức thanh toán"
    },
    "answer": "A",
    "explanation": "Nhập 2.000 máy nhưng chỉ tiêu thụ được 800 máy là hệ quả trực tiếp của việc dự báo nhu cầu thị trường thiếu chính xác dẫn đến quyết định quy mô lô hàng nhập khẩu không phù hợp.",
    "pdf_no": 89
  },
  {
    "id": 284,
    "orig_no": "284",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty thanh toán trước toàn bộ tiền cho nhà cung cấp mới chưa được kiểm chứng. Rủi ro lớn là:",
    "options": {
      "A": "Người bán không giao hoặc giao không đúng cam kết",
      "B": "Chi phí kho luôn giảm",
      "C": "Hàng luôn đúng chất lượng",
      "D": "Không cần hợp đồng"
    },
    "answer": "A",
    "explanation": "Thanh toán trước 100% (Advance payment) cho một nhà cung cấp mới tiềm ẩn rủi ro cực lớn: người bán có thể lừa đảo, không giao hàng hoặc giao hàng không đúng chất lượng mà người mua không có công cụ bảo đảm để thu hồi tiền.",
    "pdf_no": null
  },
  {
    "id": 285,
    "orig_no": "285",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Doanh nghiệp muốn hạn chế tranh chấp về thanh toán. Hợp đồng nên ghi rõ:",
    "options": {
      "A": "Phương thức và thời hạn thanh toán",
      "B": "Màu sản phẩm",
      "C": "Kế hoạch quảng cáo",
      "D": "Tên nhân viên"
    },
    "answer": "A",
    "explanation": "Quy định minh bạch phương thức thanh toán, thời hạn thanh toán và bộ chứng từ bắt buộc là biện pháp then chốt để hạn chế tranh chấp phát sinh trong quá trình chuyển giao tiền tệ.",
    "pdf_no": null
  },
  {
    "id": 286,
    "orig_no": "286",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Doanh nghiệp muốn tăng hiệu quả thương vụ tiếp theo sau khi phát sinh nhiều chi phí giao dịch. Biện pháp phù hợp là:",
    "options": {
      "A": "Rà soát lại lượng đặt hàng và tổ chức giao dịch",
      "B": "Tăng số lần đặt hàng",
      "C": "Chỉ giảm chất lượng",
      "D": "Bỏ nghiên cứu thị trường"
    },
    "answer": "A",
    "explanation": "Rà soát lại quy mô lô hàng đặt mua (áp dụng mô hình đặt hàng tối ưu EOQ) và tinh gọn quy trình giao dịch giúp giảm bớt chi phí vận chuyển, thủ tục hành chính và chi phí logistics trên mỗi đơn vị hàng hóa.",
    "pdf_no": 90
  },
  {
    "id": 287,
    "orig_no": "287",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Doanh nghiệp nhỏ chưa có mạng lưới ở nước ngoài, nhưng có một trung gian am hiểu thị trường và nhà cung cấp. Lợi ích chính là:",
    "options": {
      "A": "Tận dụng kinh nghiệm và mạng lưới của trung gian",
      "B": "Không cần hợp đồng",
      "C": "Không cần kiểm tra hàng",
      "D": "Loại bỏ mọi chi phí"
    },
    "answer": "A",
    "explanation": "Đối với doanh nghiệp nhỏ chưa có mạng lưới quốc tế, hợp tác với trung gian am hiểu thị trường giúp tận dụng mối quan hệ sẵn có, kinh nghiệm đàm phán và sự am hiểu nguồn hàng của trung gian.",
    "pdf_no": null
  },
  {
    "id": 288,
    "orig_no": "288",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Hai bên dùng L/C nhưng doanh nghiệp không kiểm tra kỹ các điều kiện chứng từ. Rủi ro có thể xảy ra là:",
    "options": {
      "A": "Chứng từ không phù hợp yêu cầu thanh toán",
      "B": "Hàng tự động được miễn thuế",
      "C": "Không cần giao hàng",
      "D": "Giá hàng tự động giảm"
    },
    "answer": "A",
    "explanation": "Theo quy tắc UCP 600, ngân hàng chỉ kiểm tra sự phù hợp trên bề mặt của chứng từ. Nếu không rà soát kỹ các điều khoản chứng từ quy định trong L/C, bên mua có thể đối mặt với rủi ro chứng từ xuất trình không phù hợp và bị từ chối thanh toán.",
    "pdf_no": null
  },
  {
    "id": 289,
    "orig_no": "289",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Hai bên tranh chấp về trách nhiệm khi hàng bị hư hỏng. Hợp đồng có quy định điều khoản giải quyết tranh chấp. Doanh nghiệp nên:",
    "options": {
      "A": "Căn cứ điều khoản hợp đồng và chứng cứ liên quan",
      "B": "Chỉ dựa vào ý kiến nhân viên",
      "C": "Tự quyết định trách nhiệm",
      "D": "Bỏ qua hợp đồng"
    },
    "answer": "A",
    "explanation": "Khi xảy ra tranh chấp tổn thất hàng hóa, căn cứ pháp lý cao nhất và duy nhất có giá trị giải quyết là các điều khoản của hợp đồng đã ký kết cùng các chứng cứ pháp lý độc lập (như Giám định thư, Biên bản kết toán hàng hóa ROROC, Kháng nghị hàng hải).",
    "pdf_no": null
  },
  {
    "id": 290,
    "orig_no": "290",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Hai nhà cung cấp có giá ngang nhau. Nhà cung cấp A có lịch sử giao hàng ổn định, B thường giao thiếu. Công ty nên:",
    "options": {
      "A": "Ưu tiên A sau khi đánh giá tổng thể",
      "B": "Chọn B vì rẻ như nhau",
      "C": "Không cần xem lịch sử",
      "D": "Chọn ngẫu nhiên"
    },
    "answer": "A",
    "explanation": "Khi giá thành tương đương nhau, doanh nghiệp cần ưu tiên đối tác có lịch sử giao hàng ổn định và đúng hạn nhằm đảm bảo kế hoạch kinh doanh và giảm thiểu rủi ro gián đoạn chuỗi cung ứng.",
    "pdf_no": null
  },
  {
    "id": 291,
    "orig_no": "291",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Hợp đồng ghi 'máy pha cà phê loại tốt' nhưng không có tiêu chuẩn kỹ thuật. Khi hàng về không đạt yêu cầu, khó khăn chính là:",
    "options": {
      "A": "Thiếu căn cứ rõ ràng để đối chiếu chất lượng",
      "B": "Thiếu số tài khoản ngân hàng",
      "C": "Thiếu nhân viên bán hàng",
      "D": "Thiếu quảng cáo"
    },
    "answer": "A",
    "explanation": "Quy định chất lượng bằng từ ngữ định tính mơ hồ như 'loại tốt' mà không có tiêu chuẩn kỹ thuật cụ thể sẽ khiến người mua thiếu căn cứ khách quan để chứng minh hàng hóa không đạt yêu cầu khi khiếu nại.",
    "pdf_no": null
  },
  {
    "id": 292,
    "orig_no": "292",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Khi nhận hàng, công ty phát hiện thiếu 20 máy so với hợp đồng. Việc đầu tiên nên làm là:",
    "options": {
      "A": "Kiểm tra chứng từ và lập chứng cứ về thiếu hụt",
      "B": "Hủy toàn bộ hợp đồng",
      "C": "Không thông báo ai",
      "D": "Bán phần hàng còn lại ngay"
    },
    "answer": "A",
    "explanation": "Khi phát hiện giao thiếu hàng, bước đầu tiên là kiểm tra đối chiếu vận đơn, packing list và lập biên bản ghi nhận sự thiếu hụt có xác nhận của các bên liên quan (biên bản dỡ hàng COR/ROROC) để làm bằng chứng khiếu nại bên bán hoặc bên vận tải.",
    "pdf_no": null
  },
  {
    "id": 293,
    "orig_no": "293",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Máy nhập khẩu không đạt tiêu chuẩn kỹ thuật đã thỏa thuận. Căn cứ đầu tiên để xử lý là:",
    "options": {
      "A": "Điều khoản chất lượng trong hợp đồng",
      "B": "Quảng cáo của nhà cung cấp",
      "C": "Ý kiến người bán",
      "D": "Giá bán trong nước"
    },
    "answer": "A",
    "explanation": "Điều khoản chất lượng đã thỏa thuận trong hợp đồng là căn cứ pháp lý đầu tiên và quan trọng nhất để đối chiếu thông số kỹ thuật thực tế và quy kết trách nhiệm vi phạm hợp đồng của bên bán.",
    "pdf_no": null
  },
  {
    "id": 294,
    "orig_no": "294",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Một doanh nghiệp đánh giá thương vụ chỉ bằng việc 'hàng đã về'. Cách đánh giá này chưa đủ vì:",
    "options": {
      "A": "Cần xem cả hiệu quả kinh tế và khả năng tiêu thụ",
      "B": "Hàng về là chắc chắn có lời",
      "C": "Không cần tính chi phí",
      "D": "Không cần xem rủi ro"
    },
    "answer": "A",
    "explanation": "Hàng về đến kho mới chỉ là hoàn thành khâu tiếp nhận logistics; một thương vụ chỉ thực sự thành công khi hàng hóa được tiêu thụ thuận lợi, đạt mục tiêu doanh thu, chi phí hợp lý và sinh lời cho doanh nghiệp.",
    "pdf_no": null
  },
  {
    "id": 295,
    "orig_no": "295",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Một doanh nghiệp muốn nhập khẩu mặt hàng mới. Trình tự nào hợp lý hơn?",
    "options": {
      "A": "Nghiên cứu nhu cầu → chọn nguồn/đối tác → đàm phán → ký và thực hiện hợp đồng",
      "B": "Nhận hàng → mới đàm phán",
      "C": "Thanh toán → nghiên cứu thị trường → tìm đối tác",
      "D": "Ký hợp đồng → mới tìm hiểu hàng"
    },
    "answer": "A",
    "explanation": "Quy trình nghiệp vụ nhập khẩu chuẩn mực bao gồm 4 bước tuần tự: Nghiên cứu nhu cầu thị trường → Lựa chọn nguồn hàng và đối tác → Đàm phán các điều khoản giao dịch → Ký kết và tổ chức thực hiện hợp đồng.",
    "pdf_no": null
  },
  {
    "id": 296,
    "orig_no": "296",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Một lô hàng thuộc diện phải đáp ứng yêu cầu kiểm tra theo quy định. Doanh nghiệp bỏ qua khâu này. Rủi ro là:",
    "options": {
      "A": "Hàng có thể không đáp ứng yêu cầu pháp lý",
      "B": "Không cần làm thủ tục khác",
      "C": "Nhà bán chịu mọi trách nhiệm",
      "D": "Giá hàng tự động giảm"
    },
    "answer": "A",
    "explanation": "Bỏ qua khâu kiểm tra chuyên ngành theo luật định (như kiểm dịch thực vật/động vật, kiểm tra an toàn thực phẩm, hợp chuẩn hợp quy) sẽ khiến lô hàng không đủ điều kiện thông quan và có thể bị phạt, tịch thu hoặc buộc tái xuất.",
    "pdf_no": null
  },
  {
    "id": 297,
    "orig_no": "297",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Nhà cung cấp gửi chào hàng cố định cho công ty, ghi rõ thời hạn hiệu lực. Ý nghĩa chính của thời hạn này là:",
    "options": {
      "A": "Xác định khoảng thời gian chào hàng có tính ràng buộc theo nội dung đã nêu",
      "B": "Xác định thời gian tiêu thụ",
      "C": "Xác định thời gian vận chuyển",
      "D": "Xác định thời gian bảo hành"
    },
    "answer": "A",
    "explanation": "Thời hạn hiệu lực trong chào hàng cố định (Firm offer) xác định khoảng thời gian người chào hàng cam kết bị ràng buộc trách nhiệm pháp lý theo các nội dung đã chào nếu đối tác chấp nhận vô điều kiện trong thời hạn đó.",
    "pdf_no": null
  },
  {
    "id": 298,
    "orig_no": "298",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Nhà cung cấp gửi chào hàng ghi rõ hàng, giá, giao hàng và thời hạn hiệu lực. Người mua muốn thay đổi giá. Hành động này là:",
    "options": {
      "A": "Hoàn giá",
      "B": "Giao hàng",
      "C": "Chấp nhận vô điều kiện",
      "D": "Khiếu nại"
    },
    "answer": "A",
    "explanation": "Đề nghị thay đổi giá cấu thành một Hoàn giá (Counter-offer). Hành vi này làm chấm dứt hiệu lực của chào hàng ban đầu và biến bên mua thành bên đưa ra lời đề nghị giao kết hợp đồng mới.",
    "pdf_no": null
  },
  {
    "id": 299,
    "orig_no": "299",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Sau khi ký hợp đồng, công ty cần theo dõi tiến độ giao hàng. Việc này giúp:",
    "options": {
      "A": "Chủ động xử lý chậm giao hàng",
      "B": "Không cần liên hệ người bán",
      "C": "Không cần chuẩn bị nhận hàng",
      "D": "Thay đổi giá tùy ý"
    },
    "answer": "A",
    "explanation": "Theo dõi sát sao tiến độ sản xuất và hành trình phương tiện vận tải giúp doanh nghiệp kịp thời phát hiện nguy cơ chậm giao hàng để đôn đốc đối tác hoặc chủ động điều chỉnh kế hoạch kinh doanh nhằm hạn chế thiệt hại.",
    "pdf_no": null
  },
  {
    "id": 300,
    "orig_no": "300",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Trong đàm phán, bên bán đồng ý giá nhưng không đồng ý thời hạn giao hàng mà công ty yêu cầu. Công ty nên:",
    "options": {
      "A": "Tiếp tục đàm phán điều kiện giao hàng",
      "B": "Ký ngay",
      "C": "Thanh toán trước",
      "D": "Bỏ qua điều khoản giao hàng"
    },
    "answer": "A",
    "explanation": "Thời hạn giao hàng là điều khoản chủ yếu (essential term) của hợp đồng mua bán ngoại thương. Khi chưa đạt được sự đồng thuận về điều khoản này, hai bên chưa thể ký kết hợp đồng mà phải tiếp tục đàm phán để tìm tiếng nói chung.",
    "pdf_no": null
  },
  {
    "id": 301,
    "orig_no": "301",
    "chapter_id": 3,
    "chapter": "Chương 3: Hợp đồng mua bán ngoại thương và các điều khoản chủ yếu",
    "question": "Công ty Nhập khẩu A chuẩn bị ký hợp đồng mua 10.000 tấn thép nguyên liệu từ một tập đoàn đa quốc gia. Khi nghiên cứu thị trường để làm căn cứ đàm phán, Giám đốc Kinh doanh thu thập được 4 báo giá khác nhau. Mức giá nào đáp ứng đầy đủ nhất bản chất và thuộc tính của \"Giá quốc tế\" theo quy chuẩn ngoại thương:",
    "options": {
      "A": "Mức giá 1: Mức giá ưu đãi do đối tác giảm 15% vì hai bên có thỏa thuận tài trợ vốn vay ưu đãi dài hạn.",
      "B": "Mức giá 2: Mức giá giao dịch thông thường niêm yết trên Sàn Giao dịch Hàng hóa Quốc tế, thanh toán bằng Đồng Nhân dân tệ (thỏa thuận thanh toán nội bộ giữa 2 nước).",
      "C": "Mức giá 3: Mức giá chào trên thị trường quốc tế đối với các giao dịch mua bán thông thường, không kèm theo bất kỳ điều kiện ràng buộc đặc biệt nào và thanh toán bằng Đồng Đô la Mỹ (USD).",
      "D": "Mức giá 4: Mức giá xả hàng tồn kho thanh lý khẩn cấp do một nhà máy tại Châu Âu phá sản."
    },
    "answer": "C",
    "explanation": "Theo giáo trình Giao dịch Ngoại thương, một mức giá được coi là 'Giá quốc tế' khi thỏa mãn đầy đủ 3 thuộc tính cơ bản: (1) Tính chất thương mại thông thường, công khai, phổ biến trên thị trường tự do, không kèm theo các điều kiện ưu đãi hay ràng buộc cá biệt (như tài trợ tín dụng ở Mức giá 1 hoặc xả hàng thanh lý phá sản ở Mức giá 4); (2) Được thanh toán bằng đồng tiền tự do chuyển đổi mạnh (Freely Convertible Currency như USD, EUR...) chứ không phải đồng tiền thanh toán nội bộ hay bù trừ song phương (như Mức giá 2); (3) Đại diện cho khối lượng giao dịch mua bán lớn trên thị trường thế giới. Do đó, Mức giá 3 là phương án đáp ứng trọn vẹn nhất định nghĩa và thuộc tính của Giá quốc tế.",
    "pdf_no": 100
  },
  {
    "id": 302,
    "orig_no": "302",
    "chapter_id": 4,
    "chapter": "Chương 4: Phương thức thanh toán và chứng từ trong giao dịch ngoại thương",
    "question": "Thông tin nào sau đây về đối tượng tham gia KHÔNG xuất hiện trực tiếp trên đơn mở L/C?",
    "options": {
      "A": "Tên ngân hàng thông báo",
      "B": "Tên và địa chỉ của người thụ hưởng",
      "C": "Tên và địa chỉ của người xin mở L/C",
      "D": "Tên và địa chỉ của hãng vận tải/chủ tàu"
    },
    "answer": "D",
    "explanation": "Trên Đơn yêu cầu mở L/C (Application for Opening Documentary Credit) gửi đến Ngân hàng phát hành (Issuing Bank), các chủ thể tham gia trực tiếp trong quan hệ thanh toán tín dụng chứng từ bắt buộc phải được kê khai gồm: Người yêu cầu mở L/C (Applicant - Bên mua), Người thụ hưởng (Beneficiary - Bên bán) và Ngân hàng thông báo (Advising Bank). Còn hãng vận tải/chủ tàu (Carrier) là bên phát hành Vận đơn (B/L) trong hợp đồng vận chuyển, tên của hãng tàu xuất hiện trên B/L chứ không phải là chủ thể tham gia trực tiếp ghi tên/địa chỉ cố định trên đơn mở L/C (tại thời điểm mở L/C, người nhập khẩu chưa ký hợp đồng thuê tàu hoặc chỉ quy định yêu cầu về chứng từ vận tải).",
    "pdf_no": 91
  },
  {
    "id": 303,
    "orig_no": "303",
    "chapter_id": 5,
    "chapter": "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương",
    "question": "Công ty Nông sản K nhập khẩu một lô hạt giống cây trồng. Lô hàng thuộc diện phải kiểm tra dịch hại thực vật trước khi thông quan. Để tránh phát sinh chi phí lưu container/lưu bãi cao tại cảng, Công ty K muốn đưa toàn bộ lô hàng ra khỏi khu vực hải quan để đưa về kho riêng của công ty. Lô hàng của Công ty K chỉ đủ điều kiện đưa ra khỏi khu vực hải quan về kho riêng khi nào?",
    "options": {
      "A": "Doanh nghiệp tự viết đơn cam kết chịu trách nhiệm và chở hàng về kho bất kỳ lúc nào",
      "B": "Cơ quan Hải quan chấp nhận quyết định cho phép đưa hàng về bảo quản sau khi đã lấy mẫu kiểm tra dịch hại và doanh nghiệp đáp ứng đủ điều kiện niêm phong/giám sát hải quan",
      "C": "Ngay khi kiểm dịch viên hoàn thành việc lấy mẫu tại cảng mà không cần sự đồng ý của Cơ quan Hải quan",
      "D": "Doanh nghiệp chỉ cần thông báo bằng miệng cho cơ quan kiểm dịch và cơ quan hải quan tại cảng"
    },
    "answer": "B",
    "explanation": "Căn cứ Điều 32 Luật Hải quan 2014 và Điều 32 Thông tư 38/2015/TT-BTC (sửa đổi bởi Thông tư 39/2018/TT-BTC) về việc đưa hàng về bảo quản: Đối với hàng hóa phải kiểm tra chuyên ngành (kiểm dịch thực vật), người khai hải quan chỉ được đưa hàng về địa điểm bảo quản (kho riêng) khi cơ quan hải quan chấp thuận bằng văn bản/quyết định phê duyệt trên hệ thống sau khi đã thực hiện lấy mẫu kiểm dịch và địa điểm bảo quản đáp ứng yêu cầu giám sát, niêm phong hải quan. Doanh nghiệp tuyệt đối không được tự ý đưa hàng ra khỏi cảng khi chưa có sự chấp thuận của cơ quan hải quan.",
    "pdf_no": 92
  }
];

/**
 * Danh sách ID câu hỏi tương ứng theo đúng thứ tự 1 -> 100 trong file GDNT_DS CÂU HỎI ÔN TẬP.pdf
 */
const PDF_EXAM_QUESTION_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 12, 13, 14, 14, 48, 49, 51, 54, 55, 56, 57, 58, 60, 61, 65, 66, 67, 69, 70, 71, 72, 84, 87, 91, 93, 98, 101, 105, 106, 110, 133, 135, 137, 140, 141, 142, 143, 144, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 157, 159, 160, 161, 162, 172, 173, 174, 175, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 277, 278, 279, 280, 281, 282, 283, 286, 302, 303, 279, 213, 139, 234, 246, 247, 248, 301];
