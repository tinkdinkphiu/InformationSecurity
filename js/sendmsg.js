// Hàm gửi tin nhắn
function sendMsg() {
	// Khai báo biến trong form
	$message = $('#formSendMsg input[id="inputMsg"]').val()
    $key = $('#formSendMsg input[id="inputKey"]').val();
    let finalMessage = ""
    // Kiểm tra xem tin nhắn có cần mã hóa không, nếu có key thì mã hóa
    if ($key.length != 0) {
        // Thực hiện quá trình mã hóa
        // Tạo key sao cho phù hợp với plain text
        let geneKey = generateKey($message, $key)
        // Tiến hành mã hóa thông điệp đầu vào
        finalMessage = encrypt($message, geneKey)
    }
    // Không có key thì không mã hóa
    else {
        finalMessage = $message
    }

	// Gửi dữ liệu
	$.ajax({
		url : 'sendmsg.php', // đường dẫn file xử lý
		type : 'POST', // phương thức
		// dữ liệu
		data : {
			body_msg : finalMessage
		// thực thi khi gửi dữ liệu thành công
		}, success : function() {
			$('#formSendMsg input[id="inputMsg"]').val(''); // làm trống thanh trò chuyện
			$('#formSendMsg input[id="inputKey"]').val(''); // làm trống thanh key
		}
	});
}

// Bắt sự kiện gõ phím enter trong thanh trò chuyện
$('#formSendMsg input[id="inputMsg"]').keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		// Chạy hàm gửi tin nhắn
		sendMsg();
	}
});

// Bắt sự kiện click vào thanh trò chuyện
$('#formSendMsg input[type="text"]').click(function(e) {
	// Kéo hết thanh cuộn trình duyệt đến cuối
	window.scrollBy(0, $(document).height());
});