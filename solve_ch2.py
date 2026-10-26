import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Solutions for Chapter 2: Questions 49 to 136 (88 questions)
CH2_SOLUTIONS = {
    49: {"answer": "A", "explanation": "Theo Incoterms® 2020, CIF (Cost, Insurance and Freight) là điều kiện chỉ áp dụng riêng cho phương thức vận tải đường biển và đường thủy nội địa."},
    50: {"answer": "A", "explanation": "CIP là viết tắt của 'Carriage and Insurance Paid To' (Cước phí và bảo hiểm trả tới...), áp dụng cho mọi phương thức vận tải, kể cả vận tải đa phương thức."},
    51: {"answer": "D", "explanation": "Theo CPT (Carriage Paid To), rủi ro về mất mát hoặc hư hỏng hàng hóa được chuyển từ người bán sang người mua ngay khi người bán giao hàng cho người chuyên chở (carrier) đầu tiên được chỉ định tại nơi đi (Hà Nội). Khi hàng bị hư hỏng trên đường tới Paris, rủi ro thuộc về người mua."},
    52: {"answer": "A", "explanation": "CPT là điều kiện thuộc nhóm vận tải đa phương thức, có thể sử dụng cho mọi phương thức vận tải (đường bộ, đường sắt, đường hàng không, đường biển, vận tải kết hợp)."},
    53: {"answer": "A", "explanation": "CPT là viết tắt của thuật ngữ 'Carriage Paid To' theo Incoterms®."},
    54: {"answer": "D", "explanation": "DAP là viết tắt của thuật ngữ 'Delivered At Place' (Giao tại nơi đến) theo Incoterms®."},
    55: {"answer": "B", "explanation": "DDP là viết tắt của thuật ngữ 'Delivered Duty Paid' (Giao đã nộp thuế) theo Incoterms®."},
    56: {"answer": "D", "explanation": "Khác biệt cốt lõi: Theo DAP, người mua có nghĩa vụ làm thủ tục nhập khẩu và nộp thuế nhập khẩu; còn theo DDP, người bán có nghĩa vụ làm thủ tục thông quan nhập khẩu và nộp thuế nhập khẩu."},
    57: {"answer": "D", "explanation": "Khác biệt lớn nhất giữa DAP và DPU: Theo DAP, người bán giao hàng trên phương tiện vận tải đến, sẵn sàng để dỡ (người mua dỡ hàng); còn theo DPU, người bán bắt buộc phải hoàn thành việc dỡ hàng xuống khỏi phương tiện vận tải tại nơi đến thỏa thuận."},
    58: {"answer": "C", "explanation": "Khác biệt cốt lõi: Theo CPT, người bán không có nghĩa vụ mua bảo hiểm; còn theo CIP, người bán bắt buộc phải mua bảo hiểm cho hàng hóa (theo Incoterms 2020, CIP yêu cầu bảo hiểm loại A - mọi rủi ro Institute Cargo Clauses A)."},
    59: {"answer": "D", "explanation": "DPU (Delivered at Place Unloaded - điều kiện duy nhất thay thế DAT của Incoterms 2010) yêu cầu người bán phải dỡ hàng khỏi phương tiện vận tải tại nơi đến chỉ định."},
    60: {"answer": "D", "explanation": "Trong Incoterms 2020, chỉ có 2 điều kiện bắt buộc người bán phải thu xếp bảo hiểm là CIF và CIP. CFR (Cost and Freight) người bán không có nghĩa vụ mua bảo hiểm, việc mua bảo hiểm do người mua tự quyết định."},
    61: {"answer": "C", "explanation": "EXW (Ex Works - Giao tại xưởng) thể hiện mức nghĩa vụ tối thiểu (thấp nhất) của người bán: người bán chỉ cần đặt hàng dưới quyền định đoạt của người mua tại cơ sở của mình, không phải bốc hàng lên xe và không phải làm thủ tục xuất khẩu."},
    62: {"answer": "A", "explanation": "FAS là viết tắt của 'Free Alongside Ship' (Giao dọc mạn tàu), chỉ áp dụng cho vận tải đường biển và đường thủy nội địa."},
    63: {"answer": "D", "explanation": "FCA là viết tắt của 'Free Carrier' (Giao cho người chuyên chở), áp dụng cho mọi phương thức vận tải."},
    64: {"answer": "D", "explanation": "FOB là viết tắt của 'Free On Board' (Giao trên tàu), chỉ áp dụng cho vận tải đường biển và đường thủy nội địa."},
    65: {"answer": "B", "explanation": "Incoterms® 2020 phân chia 11 điều kiện thương mại thành 2 nhóm chính xét theo phương thức vận tải: (1) Nhóm áp dụng cho mọi phương thức vận tải (7 điều kiện: EXW, FCA, CPT, CIP, DAP, DPU, DDP); (2) Nhóm chỉ áp dụng cho vận tải biển và thủy nội địa (4 điều kiện: FAS, FOB, CFR, CIF)."},
    66: {"answer": "B", "explanation": "Incoterms® chỉ là tập quán thương mại quốc tế điều chỉnh việc phân chia nghĩa vụ, chi phí và rủi ro giao nhận hàng hóa giữa người mua và người bán, không thể thay thế cho bản hợp đồng mua bán hàng hóa hoàn chỉnh."},
    67: {"answer": "A", "explanation": "Incoterms® không trực tiếp điều chỉnh thời điểm chuyển quyền sở hữu hàng hóa, việc vi phạm hợp đồng hay hậu quả của việc vi phạm hợp đồng (những vấn đề này do luật áp dụng và thỏa thuận trong hợp đồng điều chỉnh)."},
    68: {"answer": "D", "explanation": "Incoterms® không trực tiếp quy định về phẩm chất, quy cách, chất lượng hàng hóa hay giá cả hàng hóa, mà các nội dung này phải do các bên quy định rõ trong hợp đồng mua bán."},
    69: {"answer": "D", "explanation": "Incoterms® là viết tắt của cụm từ 'International Commercial Terms' (Các điều kiện thương mại quốc tế) do Phòng Thương mại Quốc tế (ICC) ban hành."},
    70: {"answer": "C", "explanation": "Khác biệt duy nhất giữa CFR và CIF là nghĩa vụ bảo hiểm: Trong CFR, người bán không phải mua bảo hiểm; trong CIF, người bán bắt buộc phải mua bảo hiểm hàng hải cho lô hàng (tối thiểu loại C)."},
    71: {"answer": "C", "explanation": "Incoterms® không điều chỉnh phương thức, thời hạn và đồng tiền thanh toán; do đó các bên bắt buộc phải quy định điều khoản thanh toán riêng trong hợp đồng."},
    72: {"answer": "C", "explanation": "Hàng rời đi đường biển, người mua thuê tàu, người bán đưa hàng đặt dọc mạn tàu tại cảng xếp thỏa thuận phù hợp chính xác với điều kiện FAS (Free Alongside Ship)."},
    73: {"answer": "D", "explanation": "Nếu người bán vận chuyển đường biển, giao hàng lên tàu tại cảng đi và còn phải thu xếp mua bảo hiểm cho hàng hóa tới cảng đích thì điều kiện phù hợp là CIF (Cost, Insurance and Freight)."},
    74: {"answer": "A", "explanation": "Bốn điều kiện truyền thống chỉ áp dụng cho vận tải biển và đường thủy nội địa trong Incoterms 2020 là: FAS, FOB, CFR, CIF."},
    75: {"answer": "C", "explanation": "Phạm vi điều chỉnh cốt lõi nhất của Incoterms® là xác định điểm chuyển rủi ro về mất mát hoặc hư hỏng hàng hóa, phân chia chi phí và nghĩa vụ làm thủ tục hải quan giữa người bán và người mua."},
    76: {"answer": "D", "explanation": "Theo CFR, người bán hoàn thành nghĩa vụ giao hàng khi hàng đã được xếp lên tàu tại cảng bốc hàng (cảng đi). Cước phí vận tải tới cảng đích do người bán trả, nhưng rủi ro đã chuyển sang người mua ngay tại cảng bốc."},
    77: {"answer": "C", "explanation": "Trong CFR, rủi ro chuyển từ người bán sang người mua ngay khi hàng được giao an toàn lên boong tàu tại cảng bốc hàng thỏa thuận (on board the vessel)."},
    78: {"answer": "C", "explanation": "Theo CFR, người bán chỉ có nghĩa vụ trả cước vận tải biển tới cảng đích quy định, hoàn toàn không có nghĩa vụ mua bảo hiểm hàng hải."},
    79: {"answer": "B", "explanation": "Theo CIF, người bán bắt buộc phải mua bảo hiểm hàng hải cho hàng hóa nhưng người hưởng thụ bảo hiểm khi hàng gặp rủi ro trên biển là người mua (vì rủi ro đã chuyển cho người mua từ cảng bốc)."},
    80: {"answer": "C", "explanation": "Trong CIF, điểm chuyển rủi ro là khi hàng được đặt lên boong tàu tại cảng bốc hàng (cảng đi), hoàn toàn tách biệt với cảng đích mà người bán trả cước và mua bảo hiểm."},
    81: {"answer": "B", "explanation": "Theo CIF Incoterms® 2020, người bán có nghĩa vụ mua bảo hiểm ở mức bảo hiểm tối thiểu là Điều kiện (C) của Viện những người bảo hiểm Luân Đôn (Institute Cargo Clauses C - ICC C) hoặc điều kiện tương đương."},
    82: {"answer": "B", "explanation": "Trong CIP Incoterms® 2020, quy định mới nâng cấp nghĩa vụ bảo hiểm của người bán lên mức tối đa là Điều kiện (A) - Mọi rủi ro (Institute Cargo Clauses A - ICC A)."},
    83: {"answer": "B", "explanation": "Theo CPT, người bán ký hợp đồng vận tải và trả cước phí vận chuyển hàng hóa tới địa điểm đến thỏa thuận."},
    84: {"answer": "A", "explanation": "Trong CPT, rủi ro chuyển sang người mua ngay khi người bán giao hàng cho người chuyên chở (carrier) đầu tiên tại địa điểm giao hàng ở nước xuất khẩu."},
    85: {"answer": "A", "explanation": "Theo FOB, người bán hoàn thành nghĩa vụ khi hàng được đặt lên tàu do người mua chỉ định tại cảng xếp hàng thỏa thuận và làm thủ tục thông quan xuất khẩu."},
    86: {"answer": "C", "explanation": "Theo DAP, người bán giao hàng khi hàng hóa được đặt dưới quyền định đoạt của người mua trên phương tiện vận tải đến và sẵn sàng để dỡ tại nơi đến quy định."},
    87: {"answer": "A", "explanation": "Theo DAP, người bán chịu trách nhiệm đưa hàng đến nơi đến nhưng KHÔNG có nghĩa vụ dỡ hàng khỏi phương tiện vận tải; nghĩa vụ dỡ hàng thuộc về người mua."},
    88: {"answer": "B", "explanation": "Trong DAP, người mua có nghĩa vụ làm thủ tục thông quan nhập khẩu, nộp thuế và các lệ phí nhập khẩu."},
    89: {"answer": "D", "explanation": "Theo DDP, người bán có nghĩa vụ giao hàng đã thông quan nhập khẩu nhưng trên phương tiện vận tải sẵn sàng để dỡ; nghĩa vụ mặc định của DDP không bắt buộc người bán dỡ hàng (trừ khi có thỏa thuận riêng)."},
    90: {"answer": "D", "explanation": "Trong DPU (cũng như DAP), người mua chịu trách nhiệm làm thủ tục thông quan nhập khẩu và nộp thuế nhập khẩu; người bán chịu trách nhiệm dỡ hàng tại nơi đến."},
    91: {"answer": "B", "explanation": "Trong FAS, người mua có nghĩa vụ thuê phương tiện vận tải chính (thuê tàu) để nhận hàng tại mạn tàu."},
    92: {"answer": "A", "explanation": "Trong FOB, người mua có trách nhiệm thu xếp và ký hợp đồng vận tải chính (chỉ định tàu và trả cước vận tải biển)."},
    93: {"answer": "A", "explanation": "Tình huống này minh họa rõ nét nguyên tắc hai điểm (two critical points) của nhóm C: điểm chuyển giao rủi ro (tại cảng đi) tách biệt hoàn toàn với điểm phân chia chi phí vận tải (tại cảng đến)."},
    94: {"answer": "B", "explanation": "Trong CIP, rủi ro đã chuyển sang người mua ngay khi người bán giao hàng cho người chuyên chở đầu tiên, mặc dù người bán vẫn có nghĩa vụ trả cước phí vận tải tới Munich."},
    95: {"answer": "A", "explanation": "Cách dẫn chiếu chuẩn xác theo khuyến nghị của ICC: [Tên điều kiện] [Tên địa điểm/cảng cụ thể], [Tên quốc gia], Incoterms® 2020. Ví dụ: 'FOB Hai Phong Port, Vietnam, Incoterms® 2020'."},
    96: {"answer": "D", "explanation": "Khi người bán muốn chịu mọi chi phí và rủi ro đưa hàng đến tận Paris nhưng không thể làm thủ tục nhập khẩu tại nước sở tại thì điều kiện tối ưu thay thế DDP là DAP (Delivered At Place)."},
    97: {"answer": "D", "explanation": "Lập luận của người mua không đúng vì trong CIF, rủi ro chuyển giao ngay khi hàng qua lan can/được xếp lên tàu tại cảng bốc (Hải Phòng); bảo hiểm do người bán mua nhưng là vì lợi ích của người mua để khiếu nại bảo hiểm."},
    98: {"answer": "C", "explanation": "DPU quy định người bán bắt buộc phải hoàn thành việc dỡ hàng tại nơi đến; nếu tại địa điểm đó không có sẵn cần cẩu/thiết bị dỡ hàng phù hợp, người bán sẽ không thể hoàn thành nghĩa vụ giao hàng và phát sinh chi phí phạt lưu xe/container rất lớn."},
    99: {"answer": "B", "explanation": "Từ EXW sang CIF, người bán phải gánh thêm nhiều nghĩa vụ: bốc hàng lên xe tại xưởng, vận tải nội địa, thủ tục hải quan xuất khẩu, cước vận tải biển quốc tế và phí mua bảo hiểm; do đó phải tính toán lại giá để cộng thêm các khoản này."},
    100: {"answer": "D", "explanation": "ICC khuyến cáo mạnh mẽ: Với hàng đóng trong container giao tại bến bãi container (CY/CFS) trước khi bốc lên tàu, các bên nên sử dụng FCA thay vì FOB để điểm chuyển rủi ro phản ánh đúng thời điểm bàn giao hàng cho hãng tàu."},
    101: {"answer": "A", "explanation": "Incoterms® 2020 bổ sung điều khoản mới cho FCA: Người mua và người bán có thể thỏa thuận rằng người mua chỉ thị người chuyên chở phát hành vận đơn có ghi chú hàng đã xếp lên tàu (On Board B/L) cho người bán để thanh toán L/C."},
    102: {"answer": "D", "explanation": "DDP đặt toàn bộ trách nhiệm và rủi ro tối đa lên người bán; mức độ phù hợp của DDP phụ thuộc vào việc người bán có tư cách pháp lý và năng lực thực hiện thủ tục hải quan nhập khẩu, nộp thuế tại nước người mua hay không."},
    103: {"answer": "D", "explanation": "Vấn đề cốt lõi nhất phân biệt giữa DAP và DDP là trách nhiệm thực hiện thủ tục thông quan nhập khẩu và nộp thuế nhập khẩu (DAP do người mua làm, DDP do người bán làm)."},
    104: {"answer": "D", "explanation": "Câu hỏi quan trọng nhất phân biệt DAP và DPU là: Ai chịu trách nhiệm dỡ hàng khỏi phương tiện vận tải tại địa điểm đến? (DAP: người mua dỡ; DPU: người bán dỡ)."},
    105: {"answer": "D", "explanation": "Khi phân tích một điều kiện Incoterms, ngoài điểm giao hàng và chuyển rủi ro, cần xem xét đồng thời 3 yếu tố trụ cột: Phân chia chi phí, Nghĩa vụ thu xếp bảo hiểm và Trách nhiệm thực hiện thủ tục hải quan thông quan xuất nhập khẩu."},
    106: {"answer": "A", "explanation": "Trong Incoterms® 2020, chỉ có 2 điều kiện quy định nghĩa vụ người bán phải mua bảo hiểm hàng hóa là CIF (mức bảo hiểm C) và CIP (mức bảo hiểm A)."},
    107: {"answer": "A", "explanation": "Khi sử dụng Incoterms® 2020, điều quan trọng hàng đầu là phải ghi kèm tên địa điểm hoặc cảng quy định càng chi tiết, cụ thể càng tốt để tránh tranh chấp về điểm giao hàng và chuyển giao rủi ro."},
    108: {"answer": "A", "explanation": "Trong FOB, người bán chịu mọi chi phí và rủi ro cho đến khi hàng đã được xếp an toàn lên boong tàu tại cảng bốc hàng thỏa thuận."},
    109: {"answer": "A", "explanation": "Trong FAS, người bán hoàn thành nghĩa vụ giao hàng khi hàng được đặt dọc mạn tàu (trên cầu cảng hoặc trên sà lan) do người mua chỉ định tại cảng xếp hàng quy định."},
    110: {"answer": "A", "explanation": "Trong FCA, khi điểm giao hàng là tại cơ sở của người bán (xưởng/kho), người bán có nghĩa vụ bốc hàng lên phương tiện vận tải tiếp nhận do người mua phái đến."},
    111: {"answer": "A", "explanation": "Trong FCA, nếu việc giao hàng diễn ra tại một địa điểm khác ngoài cơ sở người bán (như bến xe, kho CFS, bãi CY), người bán giao hàng khi hàng vẫn ở trên phương tiện vận tải của người bán và sẵn sàng để dỡ cho người chuyên chở."},
    112: {"answer": "A", "explanation": "Trong EXW, người bán không có nghĩa vụ bốc hàng lên phương tiện vận tải do người mua cử đến (nếu người bán bốc hộ thì rủi ro và chi phí vẫn do người mua chịu, trừ khi có thỏa thuận khác)."},
    113: {"answer": "A", "explanation": "Trong DDP, người bán chịu mức nghĩa vụ và rủi ro cao nhất: vận chuyển hàng tới nơi đến quy định, làm thủ tục thông quan xuất khẩu, trả cước vận tải quốc tế, làm thủ tục hải quan nhập khẩu và nộp toàn bộ các loại thuế nhập khẩu."},
    114: {"answer": "A", "explanation": "DAP và DDP đều là các điều kiện thuộc nhóm D áp dụng cho mọi phương thức vận tải, trong đó người bán chịu chi phí và rủi ro đưa hàng tới phương tiện vận tải đến tại điểm đích quy định, sẵn sàng để dỡ."},
    115: {"answer": "A", "explanation": "Incoterms® 2020 quy định rõ mức bảo hiểm mặc định cho CIF là ICC (C) - bảo hiểm tổn thất rủi ro cơ bản, còn CIP là ICC (A) - bảo hiểm mọi rủi ro."},
    116: {"answer": "A", "explanation": "Theo Incoterms 2020, việc tự ý thay đổi chữ cái mà không dẫn chiếu rõ ràng sẽ gây nhầm lẫn; quy tắc chuẩn khuyến cáo sử dụng đúng 11 điều kiện chuẩn của ICC kèm theo phiên bản Incoterms 2020."},
    117: {"answer": "A", "explanation": "Điều kiện DPU (Delivered at Place Unloaded) thay thế cho điều kiện DAT (Delivered at Terminal) của Incoterms 2010 để nhấn mạnh địa điểm đến có thể là bất kỳ nơi nào chứ không nhất thiết phải là nhà ga/bến bãi (terminal)."},
    118: {"answer": "D", "explanation": "Ghi 'FOB Vietnam' là quá mơ hồ và sai chuẩn thực tiễn logistics, vì Việt Nam có rất nhiều cảng biển khác nhau (Hải Phòng, Đà Nẵng, Cát Lái...); hợp đồng bắt buộc phải chỉ định cụ thể tên cảng xếp hàng."},
    119: {"answer": "D", "explanation": "Quy định cơ chế xuất trình On-board B/L trong FCA của Incoterms 2020 cho phép người mua chỉ thị hãng tàu cấp vận đơn có xác nhận xếp hàng lên tàu cho người bán để thanh toán ngân hàng."},
    120: {"answer": "A", "explanation": "CIF chỉ áp dụng cho vận tải đường biển và đường thủy nội địa. Đối với vận tải hàng không đến sân bay Nội Bài, điều kiện tương đương chuẩn phải sử dụng là CIP Nội Bài Airport."},
    121: {"answer": "B", "explanation": "Khi giao hàng FCA ngoài cơ sở người bán, việc xác định chính xác địa chỉ bãi container (CY) hoặc kho CFS cụ thể là vô cùng quan trọng để xác định thời điểm chuyển rủi ro và chi phí dỡ hàng."},
    122: {"answer": "D", "explanation": "Khi chuyển từ EXW sang CIP, cơ cấu chi phí tăng thêm rất lớn: phí vận tải nội địa, phí hải quan xuất khẩu, cước vận tải quốc tế và phí bảo hiểm mọi rủi ro loại A."},
    123: {"answer": "B", "explanation": "Khi người bán chọn EXW, cần phải cân nhắc năng lực thực tế của người mua nước ngoài có thể trực tiếp làm thủ tục xuất khẩu và xin giấy phép xuất khẩu tại nước người bán hay không."},
    124: {"answer": "D", "explanation": "Nhóm C (CPT, CIP, CFR, CIF) phản ánh chính xác logic: người bán trả chi phí vận tải chính đến nơi đến nhưng rủi ro hàng hóa chuyển giao cho người mua ngay tại nơi gửi hàng ở nước xuất khẩu."},
    125: {"answer": "D", "explanation": "Vận chuyển đường biển, người bán trả cước đến cảng đích, rủi ro chuyển giao khi hàng xếp lên tàu tại cảng đi và không bắt buộc mua bảo hiểm là điều kiện CFR (Cost and Freight)."},
    126: {"answer": "A", "explanation": "Vận tải đa phương thức, người bán trả cước đến đích, rủi ro chuyển ngay khi giao cho người chuyên chở đầu tiên, không bắt buộc mua bảo hiểm là điều kiện CPT (Carriage Paid To)."},
    127: {"answer": "A", "explanation": "Nếu người bán trong CFR tự nguyện mua bảo hiểm cho lô hàng theo thỏa thuận riêng thì hợp đồng vẫn giữ nguyên điều kiện CFR và không làm thay đổi bản chất điểm chuyển rủi ro của CFR."},
    128: {"answer": "B", "explanation": "Việc thỏa thuận người bán mua hộ bảo hiểm không tự động biến FOB thành CIF nếu các bên không sửa đổi tên điều kiện cơ sở giao hàng."},
    129: {"answer": "A", "explanation": "Nhận định của người mua là sai lầm phổ biến nhất trong thực tế thương mại; trong CIF, điểm chuyển rủi ro là tại cảng bốc hàng (cảng đi) chứ không phải tại cảng đích."},
    130: {"answer": "D", "explanation": "Sau khi xác định phương thức vận tải và địa điểm, bước tiếp theo là xác định chính xác điểm giao hàng, thời điểm chuyển rủi ro và phân định rõ ai chịu trách nhiệm tổ chức vận tải."},
    131: {"answer": "C", "explanation": "Trong CFR, rủi ro đã chuyển sang người mua ngay khi hàng được giao lên tàu tại cảng bốc; do đó khi tàu gặp sự cố tổn thất trên biển thì người mua là bên gánh chịu rủi ro và tổn thất đó."},
    132: {"answer": "C", "explanation": "Nghĩa vụ mua bảo hiểm của người bán theo CIP chỉ nhằm bồi hoàn tài chính cho người mua khi rủi ro xảy ra; rủi ro thực tế đối với hàng hóa đã chuyển cho người mua ngay từ khi giao cho người chuyên chở đầu tiên."},
    133: {"answer": "A", "explanation": "Mục đích duy nhất của điều khoản On-Board B/L trong FCA Incoterms 2020 là gỡ rối cho người bán xuất khẩu khi thanh toán bằng L/C yêu cầu xuất trình vận đơn đường biển đã xếp hàng."},
    134: {"answer": "A", "explanation": "Người mua có khả năng làm thủ tục nhập khẩu, còn người bán chịu chi phí và rủi ro vận tải tới kho người mua thì điều kiện chuẩn xác nhất là DAP (Delivered At Place)."},
    135: {"answer": "B", "explanation": "Hàng container nên dùng FCA vì điểm giao hàng và chuyển rủi ro tại bến CY/kho CFS phù hợp hoàn hảo với quy trình giao nhận thực tế của các hãng tàu container hiện đại."},
    136: {"answer": "D", "explanation": "Đường biển, người bán trả cước đến cảng đích, rủi ro chuyển tại cảng đi và người bán có nghĩa vụ mua bảo hiểm theo quy tắc Incoterms là điều kiện CIF (Cost, Insurance and Freight)."}
}

with open(r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\parsed_questions_raw.json", "r", encoding="utf-8") as f:
    qs = json.load(f)

for q in qs:
    if q["id"] in CH2_SOLUTIONS:
        q["answer"] = CH2_SOLUTIONS[q["id"]]["answer"]
        q["explanation"] = CH2_SOLUTIONS[q["id"]]["explanation"]

with open(r"e:\Học phần\HK1_2026-2027\Giao dịch ngoại thương\ch2_solved.json", "w", encoding="utf-8") as f:
    json.dump([q for q in qs if 49 <= q["id"] <= 136], f, ensure_ascii=False, indent=2)

print("Chương 2 (88 câu Incoterms 2020) đã được giải hoàn chỉnh 100%!")
