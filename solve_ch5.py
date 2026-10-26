import json
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Đáp án và giải thích 54 câu hỏi Chương 5 (Q247 - Q300)
# Nghiệp vụ thực hiện hợp đồng nhập khẩu, kiểm tra chất lượng, hải quan, khiếu nại, đàm phán ngoại thương

ch5_data = {
    247: {
        "answer": "A",
        "explanation": "Chào hàng tự do (Free offer) là loại chào hàng không có thời hạn ràng buộc người phát ra chào hàng, người bán có quyền chào hàng cùng lúc cho nhiều người và có quyền từ chối giao kết hoặc điều chỉnh nội dung mà không chịu trách nhiệm pháp lý, khác với chào hàng cố định (Firm offer) bị ràng buộc nghĩa vụ pháp lý trong thời hạn hiệu lực."
    },
    248: {
        "answer": "A",
        "explanation": "Điều khoản chất lượng (Quality clause) quy định các chỉ tiêu kỹ thuật, phẩm chất hàng hóa làm cơ sở pháp lý để người mua kiểm tra, nghiệm thu và đánh giá sự phù hợp của hàng hóa khi nhận hàng, cũng như làm căn cứ pháp lý để khiếu nại nếu hàng không đạt chuẩn."
    },
    249: {
        "answer": "A",
        "explanation": "Điều khoản số lượng (Quantity clause) xác định cụ thể khối lượng, số lượng hoặc số kiện hàng hóa giao nhận cùng đơn vị tính và dung sai cho phép (nếu có)."
    },
    250: {
        "answer": "A",
        "explanation": "Nhập khẩu qua trung gian (đại lý, ủy thác, môi giới) khiến người mua bị ngăn cách thông tin với nhà sản xuất và thị trường nước ngoài, dễ bị phụ thuộc vào trung gian và mất đi mối liên kết kinh doanh trực tiếp."
    },
    251: {
        "answer": "A",
        "explanation": "Hợp đồng nhập khẩu là văn bản pháp lý cao nhất ghi nhận sự thỏa thuận, xác định rõ quyền và nghĩa vụ ràng buộc của người mua và người bán trong toàn bộ quá trình giao dịch."
    },
    252: {
        "answer": "A",
        "explanation": "Theo Điều 19 CISG 1980 và Luật Thương mại 2005, phản hồi chào hàng có chứa các điểm sửa đổi, bổ sung về giá cả hoặc các điều kiện giao dịch cơ bản cấu thành việc từ chối chào hàng ban đầu và trở thành một chào hàng mới (gọi là Hoàn giá - Counter-offer)."
    },
    253: {
        "answer": "A",
        "explanation": "Hàng hóa, giá cả, giao hàng, thanh toán và giải quyết tranh chấp là 5 điều khoản thương mại và pháp lý cốt lõi của hợp đồng ngoại thương, quyết định trực tiếp đến quyền lợi và hạn chế rủi ro cho doanh nghiệp."
    },
    254: {
        "answer": "A",
        "explanation": "Đánh giá hiệu quả thương vụ nhập khẩu đòi hỏi xem xét tổng thể: tổng chi phí nhập khẩu (giá mua, cước vận chuyển, bảo hiểm, thuế, chi phí logistics kho bãi), doanh thu, biên lợi nhuận, khả năng tiêu thụ hàng hóa và các rủi ro phát sinh."
    },
    255: {
        "answer": "A",
        "explanation": "Khi doanh nghiệp chưa có nhiều kinh nghiệm trên thị trường quốc tế, nhập khẩu qua trung gian thương mại (như ủy thác nhập khẩu hoặc đại lý) giúp doanh nghiệp tận dụng chuyên môn, giảm thiểu sai sót thủ tục pháp lý, hải quan và logistics."
    },
    256: {
        "answer": "A",
        "explanation": "Mục đích cốt lõi của các điều kiện giao hàng (Incoterms) trong hợp đồng là phân định rõ ràng nghĩa vụ, phân chia chi phí và xác định điểm chuyển giao rủi ro mất mát hoặc hư hỏng hàng hóa giữa người bán và người mua."
    },
    257: {
        "answer": "A",
        "explanation": "Phương thức nhập khẩu trực tiếp đòi hỏi doanh nghiệp phải tự mình chủ động toàn bộ các khâu: nghiên cứu thị trường, tìm kiếm và thẩm định đối tác, đàm phán ký kết hợp đồng, mở L/C, thuê tàu, mua bảo hiểm và làm thủ tục thông quan nhận hàng."
    },
    258: {
        "answer": "A",
        "explanation": "Khi phát hiện hàng hóa không phù hợp với hợp đồng, bước đầu tiên mang tính bắt buộc là kiểm tra, lập biên bản chứng cứ (mời cơ quan giám định độc lập lập Giám định thư) và gửi thông báo khiếu nại (Claim notice) kịp thời theo thời hạn quy định trong hợp đồng hoặc luật áp dụng."
    },
    259: {
        "answer": "A",
        "explanation": "Nếu chỉ chọn nhà cung cấp giá rẻ mà bỏ qua năng lực sản xuất và logistics, rủi ro lớn nhất là đối tác giao hàng chậm trễ, giao thiếu hoặc hủy giao hàng, làm đình trệ hoạt động sản xuất kinh doanh của doanh nghiệp nhập khẩu."
    },
    260: {
        "answer": "A",
        "explanation": "Quyết định chọn nhà cung ứng giá cao hơn nhưng có uy tín và chất lượng ổn định thể hiện tư duy quản trị hiện đại: đánh giá hiệu quả thương vụ dựa trên tổng chi phí sở hữu (TCO) và mức độ an toàn chuỗi cung ứng, không mua hàng thuần túy theo giá rẻ."
    },
    261: {
        "answer": "A",
        "explanation": "Với đối tác nước ngoài mới, biện pháp phòng ngừa rủi ro hàng đầu là tiến hành thẩm định kỹ lưỡng (Due Diligence) về tư cách pháp nhân, tình hình tài chính, uy tín thương mại và năng lực thực hiện hợp đồng."
    },
    262: {
        "answer": "A",
        "explanation": "Điều khoản giải quyết tranh chấp (Dispute resolution clause) quy định cơ chế và trình tự xử lý (thương lượng, hòa giải, trọng tài thương mại hay tòa án) cùng luật áp dụng khi hai bên phát sinh mâu thuẫn trong quá trình thực hiện hợp đồng."
    },
    263: {
        "answer": "A",
        "explanation": "Chứng từ hàng hóa (Hóa đơn, Vận đơn, Phiếu đóng gói, C/O...) đại diện cho hàng hóa và thông tin pháp lý; không kiểm tra kỹ sẽ dẫn đến sai lệch thông tin, gây ách tắc thủ tục hải quan hoặc nhận sai hàng hóa/số lượng."
    },
    264: {
        "answer": "A",
        "explanation": "Nhập khẩu trực tiếp là phương thức giao dịch mà bên mua trong nước và bên bán nước ngoài trực tiếp thiết lập quan hệ, trao đổi, đàm phán và ký kết thực hiện hợp đồng mà không qua bên thứ ba trung gian."
    },
    265: {
        "answer": "A",
        "explanation": "Nhược điểm của nhập khẩu trực tiếp là đòi hỏi chi phí giao dịch, nhân sự nghiệp vụ chuyên trách, đồng thời doanh nghiệp phải tự gánh chịu toàn bộ rủi ro về thị trường, khoảng cách địa lý, rủi ro vận tải và pháp lý quốc tế."
    },
    266: {
        "answer": "A",
        "explanation": "Xác định nhu cầu nhập khẩu là bước tiền đề trong quy trình kinh doanh, nhằm xác định chính xác chủng loại hàng, thông số kỹ thuật, số lượng cần thiết và thời điểm hàng về phù hợp với nhu cầu sản xuất/tiêu thụ."
    },
    267: {
        "answer": "A",
        "explanation": "Điều khoản bất khả kháng (Force Majeure clause) quy định các trường hợp sự kiện khách quan, không thể lường trước và không thể khắc phục được (chiến tranh, thiên tai, dịch bệnh...) giúp miễn trừ trách nhiệm hợp đồng và xác định cách thức giải quyết tiếp theo."
    },
    268: {
        "answer": "A",
        "explanation": "Điều khoản thanh toán cần quy định cụ thể phương thức thanh toán (L/C, T/T, D/P, D/A), đồng tiền thanh toán, thời hạn thanh toán và bộ chứng từ xuất trình làm căn cứ thanh toán."
    },
    269: {
        "answer": "A",
        "explanation": "Hỏi hàng (Inquiry) là hành động của người mua chủ động tiếp cận người bán để yêu cầu cung cấp thông tin chi tiết về sản phẩm, giá cả, thời gian giao hàng và các điều kiện mua bán."
    },
    270: {
        "answer": "A",
        "explanation": "Việc lựa chọn phương thức nhập khẩu (trực tiếp hay gián tiếp qua ủy thác) phải căn cứ vào năng lực tài chính, trình độ nghiệp vụ ngoại thương của nhân sự, mục tiêu chiến lược và mức độ phức tạp của thị trường."
    },
    271: {
        "answer": "A",
        "explanation": "Kiểm tra kỹ bộ chứng từ trước khi nhận hàng giúp phát hiện sớm các điểm bất hợp lệ, sai sót thông tin để kịp thời yêu cầu bên bán chỉnh sửa, tránh phát sinh chi phí lưu kho bãi (DEM/DET) và đảm bảo thông quan thuận lợi."
    },
    272: {
        "answer": "A",
        "explanation": "Mục đích của việc kiểm tra hàng hóa trước khi nhận là nhằm xác định sự phù hợp về số lượng, trọng lượng, phẩm chất, bao bì của hàng hóa thực tế so với các điều khoản đã thỏa thuận trong hợp đồng."
    },
    273: {
        "answer": "A",
        "explanation": "Thuê phương tiện vận tải thích hợp (đúng tuyến đường, đúng loại tàu, cước phí hợp lý) bảo đảm hàng hóa được chuyên chở an toàn, đúng thời gian và tuân thủ các điều kiện bảo quản kỹ thuật."
    },
    274: {
        "answer": "A",
        "explanation": "Trước khi nhập khẩu mặt hàng thương mại như máy pha cà phê, khảo sát nhu cầu thị trường và khả năng tiêu thụ trong nước là thông tin quan trọng nhất để tránh nguy cơ ế ẩm và chôn vốn."
    },
    275: {
        "answer": "C",
        "explanation": "Theo Incoterms 2020, điều kiện giao hàng luôn phải gắn liền với một địa điểm cụ thể (named place/port). Nếu không ghi rõ địa điểm giao hàng, các bên sẽ rơi vào tranh chấp gay gắt về điểm phân chia chi phí và chuyển giao rủi ro."
    },
    276: {
        "answer": "A",
        "explanation": "Thiếu sự phối hợp đồng bộ giữa mua hàng, kế toán và logistics sẽ dẫn đến việc mở L/C chậm, không thu xếp kịp tàu xe, chậm trễ thông quan và gây đình trệ toàn bộ quá trình thực hiện hợp đồng."
    },
    277: {
        "answer": "A",
        "explanation": "Sau khi hàng về, đánh giá hiệu quả thương vụ phải căn cứ trên tổng thể chi phí (Landed Cost), doanh thu lợi nhuận thực tế, các rủi ro tổn thất phát sinh và tốc độ giải phóng hàng hóa trên thị trường."
    },
    278: {
        "answer": "A",
        "explanation": "Khi thị trường đang cần hàng gấp, thời gian giao hàng quyết định cơ hội kinh doanh; do đó doanh nghiệp cần so sánh tổng lợi ích đem lại từ việc đáp ứng kịp thời thị trường so với chi phí chênh lệch giá mua."
    },
    279: {
        "answer": "A",
        "explanation": "Khi chưa am hiểu quy định quản lý xuất nhập khẩu tại nước sở tại, doanh nghiệp phải chủ động tra cứu văn bản pháp luật, chính sách chuyên ngành hoặc thuê chuyên gia tư vấn pháp lý/hải quan để tránh vi phạm."
    },
    280: {
        "answer": "A",
        "explanation": "Khi đã chấp nhận chào hàng vô điều kiện, hợp đồng đã có hiệu lực pháp lý ràng buộc. Doanh nghiệp không thể tự ý đổi giá mà phải xem xét các cam kết đã hình thành và chỉ có thể thay đổi nếu được đối tác đồng thuận sửa đổi hợp đồng."
    },
    281: {
        "answer": "A",
        "explanation": "Để tránh tranh chấp về chất lượng, hợp đồng cần quy định cụ thể tiêu chuẩn kỹ thuật (thông số, nhãn hiệu, quy cách kiểm định) và phương thức kiểm tra chất lượng (cơ quan giám định, thời điểm và địa điểm giám định)."
    },
    282: {
        "answer": "A",
        "explanation": "Đề nghị thay đổi giá từ 100 USD xuống 92 USD là hành động Hoàn giá (Counter-offer). Theo luật quốc tế, hành động này hủy bỏ chào hàng ban đầu và trở thành một đề nghị giao kết hợp đồng mới từ phía người mua."
    },
    283: {
        "answer": "A",
        "explanation": "Nhập 2.000 máy nhưng chỉ tiêu thụ được 800 máy là hệ quả trực tiếp của việc dự báo nhu cầu thị trường thiếu chính xác dẫn đến quyết định quy mô lô hàng nhập khẩu không phù hợp."
    },
    284: {
        "answer": "A",
        "explanation": "Thanh toán trước 100% (Advance payment) cho một nhà cung cấp mới tiềm ẩn rủi ro cực lớn: người bán có thể lừa đảo, không giao hàng hoặc giao hàng không đúng chất lượng mà người mua không có công cụ bảo đảm để thu hồi tiền."
    },
    285: {
        "answer": "A",
        "explanation": "Quy định minh bạch phương thức thanh toán, thời hạn thanh toán và bộ chứng từ bắt buộc là biện pháp then chốt để hạn chế tranh chấp phát sinh trong quá trình chuyển giao tiền tệ."
    },
    286: {
        "answer": "A",
        "explanation": "Rà soát lại quy mô lô hàng đặt mua (áp dụng mô hình đặt hàng tối ưu EOQ) và tinh gọn quy trình giao dịch giúp giảm bớt chi phí vận chuyển, thủ tục hành chính và chi phí logistics trên mỗi đơn vị hàng hóa."
    },
    287: {
        "answer": "A",
        "explanation": "Đối với doanh nghiệp nhỏ chưa có mạng lưới quốc tế, hợp tác với trung gian am hiểu thị trường giúp tận dụng mối quan hệ sẵn có, kinh nghiệm đàm phán và sự am hiểu nguồn hàng của trung gian."
    },
    288: {
        "answer": "A",
        "explanation": "Theo quy tắc UCP 600, ngân hàng chỉ kiểm tra sự phù hợp trên bề mặt của chứng từ. Nếu không rà soát kỹ các điều khoản chứng từ quy định trong L/C, bên mua có thể đối mặt với rủi ro chứng từ xuất trình không phù hợp và bị từ chối thanh toán."
    },
    289: {
        "answer": "A",
        "explanation": "Khi xảy ra tranh chấp tổn thất hàng hóa, căn cứ pháp lý cao nhất và duy nhất có giá trị giải quyết là các điều khoản của hợp đồng đã ký kết cùng các chứng cứ pháp lý độc lập (như Giám định thư, Biên bản kết toán hàng hóa ROROC, Kháng nghị hàng hải)."
    },
    290: {
        "answer": "A",
        "explanation": "Khi giá thành tương đương nhau, doanh nghiệp cần ưu tiên đối tác có lịch sử giao hàng ổn định và đúng hạn nhằm đảm bảo kế hoạch kinh doanh và giảm thiểu rủi ro gián đoạn chuỗi cung ứng."
    },
    291: {
        "answer": "A",
        "explanation": "Quy định chất lượng bằng từ ngữ định tính mơ hồ như 'loại tốt' mà không có tiêu chuẩn kỹ thuật cụ thể sẽ khiến người mua thiếu căn cứ khách quan để chứng minh hàng hóa không đạt yêu cầu khi khiếu nại."
    },
    292: {
        "answer": "A",
        "explanation": "Khi phát hiện giao thiếu hàng, bước đầu tiên là kiểm tra đối chiếu vận đơn, packing list và lập biên bản ghi nhận sự thiếu hụt có xác nhận của các bên liên quan (biên bản dỡ hàng COR/ROROC) để làm bằng chứng khiếu nại bên bán hoặc bên vận tải."
    },
    293: {
        "answer": "A",
        "explanation": "Điều khoản chất lượng đã thỏa thuận trong hợp đồng là căn cứ pháp lý đầu tiên và quan trọng nhất để đối chiếu thông số kỹ thuật thực tế và quy kết trách nhiệm vi phạm hợp đồng của bên bán."
    },
    294: {
        "answer": "A",
        "explanation": "Hàng về đến kho mới chỉ là hoàn thành khâu tiếp nhận logistics; một thương vụ chỉ thực sự thành công khi hàng hóa được tiêu thụ thuận lợi, đạt mục tiêu doanh thu, chi phí hợp lý và sinh lời cho doanh nghiệp."
    },
    295: {
        "answer": "A",
        "explanation": "Quy trình nghiệp vụ nhập khẩu chuẩn mực bao gồm 4 bước tuần tự: Nghiên cứu nhu cầu thị trường → Lựa chọn nguồn hàng và đối tác → Đàm phán các điều khoản giao dịch → Ký kết và tổ chức thực hiện hợp đồng."
    },
    296: {
        "answer": "A",
        "explanation": "Bỏ qua khâu kiểm tra chuyên ngành theo luật định (như kiểm dịch thực vật/động vật, kiểm tra an toàn thực phẩm, hợp chuẩn hợp quy) sẽ khiến lô hàng không đủ điều kiện thông quan và có thể bị phạt, tịch thu hoặc buộc tái xuất."
    },
    297: {
        "answer": "A",
        "explanation": "Thời hạn hiệu lực trong chào hàng cố định (Firm offer) xác định khoảng thời gian người chào hàng cam kết bị ràng buộc trách nhiệm pháp lý theo các nội dung đã chào nếu đối tác chấp nhận vô điều kiện trong thời hạn đó."
    },
    298: {
        "answer": "A",
        "explanation": "Đề nghị thay đổi giá cấu thành một Hoàn giá (Counter-offer). Hành vi này làm chấm dứt hiệu lực của chào hàng ban đầu và biến bên mua thành bên đưa ra lời đề nghị giao kết hợp đồng mới."
    },
    299: {
        "answer": "A",
        "explanation": "Theo dõi sát sao tiến độ sản xuất và hành trình phương tiện vận tải giúp doanh nghiệp kịp thời phát hiện nguy cơ chậm giao hàng để đôn đốc đối tác hoặc chủ động điều chỉnh kế hoạch kinh doanh nhằm hạn chế thiệt hại."
    },
    300: {
        "answer": "A",
        "explanation": "Thời hạn giao hàng là điều khoản chủ yếu (essential term) của hợp đồng mua bán ngoại thương. Khi chưa đạt được sự đồng thuận về điều khoản này, hai bên chưa thể ký kết hợp đồng mà phải tiếp tục đàm phán để tìm tiếng nói chung."
    }
}

# Đọc câu hỏi gốc từ parsed_questions_raw.json
with open(r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\parsed_questions_raw.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

solved_ch5 = []
for q in questions:
    qid = q["id"]
    if qid in ch5_data:
        sol = ch5_data[qid]
        q_copy = dict(q)
        q_copy["answer"] = sol["answer"]
        q_copy["explanation"] = sol["explanation"]
        q_copy["chapter"] = "Chương 5: Thực hiện hợp đồng nhập khẩu, kiểm định, hải quan & đàm phán ngoại thương"
        solved_ch5.append(q_copy)

print(f"Tổng số câu hỏi Chương 5 đã giải: {len(solved_ch5)}/54")

with open(r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\ch5_solved.json", "w", encoding="utf-8") as f:
    json.dump(solved_ch5, f, ensure_ascii=False, indent=2)

print("Đã lưu ch5_solved.json thành công 100%!")
