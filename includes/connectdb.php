<?php
	$namehost = 'containers-us-west-141.railway.app:6081';
	$userhost = 'root';
	$passhost = 'yBrNLoyQS2TtwAJJfg45';
	$database = 'railway';

	// Lệnh kết nối tới database
	$cn = mysqli_connect($namehost, $userhost, $passhost, $database);

	// Nếu kết nối database thất bạn sẽ báo lỗi
	if (!$cn)
	{
		echo 'Could not connect to database.';
	}
?>