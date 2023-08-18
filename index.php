<?php
	// Kết nối database
	include('includes/general.php');
	// Kết nối header
	include('includes/header.php');

	// Nếu tồn tại $user
	if ($user)
	{
		// Hiển thị trò chuyện
		echo '
            <div class="box-chat-wrapper">
                <div class="content-wrapper mx-5 d-flex">
                    <div class="main-chat">
                    </div>
                    <div class="main-decrypt d-flex flex-column">
                        <input id="decryptMsg" type="text" oninput="beginDecrypt()" placeholder="Nhập tin nhắn để giải mã...">
                        <input id="decryptKey" type="text" oninput="beginDecrypt()" placeholder="Nhập khóa...">
                        <div id="decryptPlain">Nhập tin và khóa để giải mã</div>
                    </div>
                </div>
                <div class="box-chat">
                    <form method="POST" id="formSendMsg" onsubmit="return false" class="d-flex flex-column">
                        <input id="inputKey" type="text" placeholder="Nhập key...">
                        <input id="inputMsg" type="text" placeholder="Nhập nội dung tin nhắn ...">
                    </form>
                </div>
            </div>
		';
	}
	// Ngược lại
	else
	{
		// Hiển thị đăng nhập
		echo '
            <div class="box-join-wrapper">
                <div class="box-join">
                    <h3 class="text-white">Đăng nhập để bắt đầu</h3>
                    <form method="POST" id="formJoin" onsubmit="return false;">
                        <input type="text" placeholder="Tên đăng nhập" class="data-input" id="username">
                        <input type="password" placeholder="Mật khẩu" class="data-input" id="password">
                        <button class="btn-submit btn">Bắt đầu</button>
                        <div class="alert danger"></div>
                    </form>
                </div>
            </div>
		';
	}
	// Kết nối footer
	include('includes/footer.php');
?>