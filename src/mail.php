<?php

$project_name = trim($_POST["project_name"]);
$admin_email  = trim($_POST["admin_email"]);
$form_subject = trim($_POST["form_subject"]);
$alert_message = trim($_POST["alert_message"]);
$wrong_summ = trim($_POST["wrong_sum"]);

foreach ( $_POST as $key => $value ) {
	if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" && $key != "sum" ) {
		$message .= "
		" . '<tr">' . "
		<td style='padding: 10px; background-color: #f0f0f0; width: 20%;'><b>$key</b></td>
		<td style='padding: 10px; background-color: #f9f9f9;'>$value</td>
	</tr>
	";
}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'."root".'>' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );

?>