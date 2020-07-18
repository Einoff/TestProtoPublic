<?php 
    
    $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
    // $connect = mysqli_connect("127.0.0.1", "root", "root", "photo_bd");
    $email = $_POST["email"];
    $pass = $_POST["pass"];

    // if(!$connect){
    //     die("ошибка подключения к MySQL");
    // };

    // if (mysqli_connect_errno()) {
    //     printf("Не удалось подключиться: %s\n", mysqli_connect_error());
    //     exit();
    // }

    //поиск авторизуемого поьзователя в базе данных
    $result = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$email' AND `pass` = '$pass' ");
    $user = $result->fetch_assoc();
    // $user = json_encode($user);
    

    if(count($user) == 0){
        echo(0);

    }elseif($user["pass"] == "admin"){
        print_r(3);

    }else{
        print_r("user");
    }

    // mysqli_query($mysqli, "INSERT INTO `users` (`login`, `password`) VALUES ('$login', '$password')");
    $mysqli -> close();
   
?>

