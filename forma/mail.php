<?php 

require_once ("param.php");
//require_once('phpmailer/PHPMailerAutoload.php');
//$mail = new PHPMailer;
//$mail->CharSet = 'utf-8';
//
//$name = $_POST['user_name'];
//$phone = $_POST['user_phone'];
//$email = $_POST['user_email'];
//$address = $_POST['user_address'];
//$comment = $_POST['user_comment'];
//$buy = $_POST['user_buy'];
//$auto = $_POST['user_auto'];
//$time = $_POST['user_time'];
//$location = $_POST['user_location'];
//
//
//$mail->isSMTP();
//$mail->Host = 'smtp.gmail.com';
//$mail->SMTPAuth = true;
//$mail->Username = 'sez.shini@gmail.com';
//$mail->Password = 'garagenomer26';
//$mail->SMTPSecure = 'ssl';
//$mail->Port = 465;
//
//$mail->setFrom('sez.shini@gmail.com');
//$mail->addAddress('illiakuzhim@gmail.com');
//$mail->isHTML(true);
//
//$mail->Subject = 'Заявка на test-drive';
//$mail->Body    = 'Имя : ' .$name . '<br>Телефон : ' .$phone. '<br>Почта этого пользователя: ' .$email. '<br>Адрес : ' .$address. '<br>Дата предпологаемои покупки : ' .$buy. '<br>Желанная марка авто : ' .$auto. '<br>Дата и время test-drive : ' .$time. '<br>Место test-drive : ' .$location. '<br>Коментарии : ' .$comment;
//$mail->AltBody = '';

if(isset($_POST['user_name'], $_POST['user_phone'], $_POST['user_address'], $_POST['user_email'], $_POST['user_location'], $_POST['user_time'], $_POST['user_auto'], $_POST['user_buy'], $_POST['user_comment'])
    && !empty($_POST['user_name']) && !empty($_POST['user_phone']) && !empty($_POST['user_address']) && !empty($_POST['user_email']) && !empty($_POST['user_location']) && !empty($_POST['user_time']) && !empty($_POST['user_auto']) && !empty($_POST['user_buy']) && !empty($_POST['user_comment'])){
//    echo 'test';
    $query = "insert into client_request(name, phoneNumber, address, email, testDrive_place, testDrive_date, testDrive_auto, testDrive_desc, Comments) values('{$_POST['user_name']}', '{$_POST['user_phone']}', '{$_POST['user_address']}', '{$_POST['user_email']}', '{$_POST['user_location']}', '{$_POST['user_time']}', '{$_POST['user_auto']}', '{$_POST['user_buy']}', '{$_POST['user_comment']}')";
    mysqli_query($dbc, $query) or die("ERROR QUERY111");
    header('location: forma.html');//эту строку закомменти когда раскомментишь все остальное
}

//if(!$mail->send()) {
//    echo 'Error';
//}
 else {
    header('location: forma.html');
}
?>