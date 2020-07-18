<?php 

    $id = time();   
    $pass = $_POST["pass"];
    $lname = $_POST["lname"];
    $fname = $_POST["fname"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $photoUrlFrom = $_FILES["photo"]["tmp_name"];
    $photoType = explode("/", $_FILES["photo"]["type"]);
    $photoType = $photoType[1];
    $img = $id . "." . $photoType;

    $photoUrlTo = "../src/assets/image/templ-img/avatars/" . $id . "." . $photoType;

    $moveStatus = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );

    $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");

    $result = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$email'");
    $user = $result->fetch_assoc();

    if(count($user) == 0){
        echo('успешное добовление');
            mysqli_query($mysqli, 
            "INSERT INTO `users` (`id`, `email`, `pass`, `fname`, `lname`, `tel`, `img`) 
            VALUES ('$id', '$email', '$pass', '$fname', '$lname', '$tel', '$img');");

    }else{
        echo('такой пользователь существует');
    }




    // print_r("photoUrlTo -> " . $photoUrlTo);
    // var_dump($photoUrlTo);

    // mkdir("../src/assets/image/templ-img/avatars/" . $id);
    // mkdir("../src/assets/image/templ-img/avatars/" . $id);


    // $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
    
    // if (mysqli_connect_errno()) {
    //     printf("Не удалось подключиться: %s\n", mysqli_connect_error());
    //     exit();
    // }

    // $result = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$email'");
    // $user = $result->fetch_assoc();

    // if(count($user) == 0){
    //     echo('успешное добовление');
    // }else{
    //     echo('такой пользователь существует');
    // }

    // if(count($user) == 0){
    //     mysqli_query($mysqli, 
    //     "INSERT INTO `users` (`id`, `email`, `pass`, `fname`, `lname`, `tel`, `photo`) 
    //     VALUES (NULL, '$email', '$pass', '$fname', '$lname', '$tel', 'http://image.image')");


    // }else{
    //     echo(0)
    // }


    // INSERT INTO `users` (`id`, `email`, `pass`, `fname`, `lname`, `tel`, `photo`) VALUES (NULL, 'arnov@.gmail.com', 'admin', 'Александр', 'Эинов', '777777777', 'http://image.image');
    // mysqli_query($mysqli, "INSERT INTO `users` (`login`, `password`) VALUES ('$login', '$password')");

    //поиск авторизуемого поьзователя в базе данных
    
    // $user = json_encode($user);
    
   
    $mysqli -> close();
   
?>

