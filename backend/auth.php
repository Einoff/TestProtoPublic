<?php 
    if(!empty($_POST)){

        if(empty($_POST["login"])){
            exit('empty login');
        }
        if(empty($_POST["pass"])){
            exit('empty pass');
        }



        $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
        $login = $_POST["login"];
        $pass = $_POST["pass"];

   


        //поиск авторизуемого поьзователя в базе данных
        $result = $mysqli->query("SELECT * FROM `cab_users` WHERE `login` = '$login' AND `pass` = '$pass' ");
        $user = $result->fetch_assoc();
        // $user = json_encode($user);
        // print_r($user['id']);    

        if(count($user) == 0){
            exit('0');

        }elseif($user["id"] == 1595783635){

            $authkey = md5(time());
            mysqli_query($mysqli, "UPDATE cab_users SET authkey='$authkey' WHERE id=1595783635");
            setcookie("authkey", $authkey);
            print_r('3');

        }else{
            print_r("user");
        }

        // mysqli_query($mysqli, "INSERT INTO `users` (`login`, `password`) VALUES ('$login', '$password')");
        $mysqli -> close();
    }
   
?>

