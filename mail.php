<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$age = $_POST['user_age'];
$textarea = $_POST['user_textarea'];
$level = $_POST['user_level'];
$time = $_POST['user_time'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'fdsfadfds@mail.ua'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'facter123'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('fdsfadfds@mail.ua'); // от кого будет уходить письмо?
$mail->addAddress('venchesters.2002@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = 'Пользователь с именем ' .$name . ' оставил заявку<br>Возраст ' .$age. '<br>Письмо: ' .$textarea. '<br>Знание языка: ' .$level. '<br>Время занятий: ' .$time;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>