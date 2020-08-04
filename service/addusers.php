<?php 
    if(!empty($_POST)){

        if(empty($_POST["pass"])){
            exit('password empty');
        }
        if(empty($_POST["fname"])){
            exit('fname empty');
        }
        if(empty($_POST["lname"])){
            exit('lname empty');
        }
        if(empty($_POST["email"])){
            exit('email empty');
        }

        $id = time();   
        $pass = $_POST["pass"];
        $lname = $_POST["lname"];
        $fname = $_POST["fname"];
        $email = $_POST["email"];
        $tel = $_POST["tel"];
        $tcontact = $_POST["tcontact"];
        $tclient = $_POST["tclient"];
        $ucomments = $_POST["ucomments"];
        $dbirth = $_POST["d-birth"];
        $inst = $_POST["inst"];
        $photoUrlFrom = $_FILES["photo"]["tmp_name"];
        $photoType = explode("/", $_FILES["photo"]["type"]);
        $photoType = $photoType[1];
        $img = $id . "." . $photoType;
    
        $photoUrlTo = "../assets/image/templ-img/avatars/" . $id . "." . $photoType;
    
        $moveStatus = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );
    
        $mysqli = new mysqli("localhost", "bezleplp_cabinet", "zB5GO%bh", "bezleplp_cabinet"); 
    
        // проверяет есть ли пользователь с таким email в базе
        $result = $mysqli->query("SELECT * FROM `cab_users` WHERE `email` = '$email'");
        $user = $result->fetch_assoc();
    
        if(count($user) == 0){
            echo('успешное добовление');
                mysqli_query($mysqli, 
                "INSERT INTO `cab_users` (`id`, `fname`, `lname`, `email`, `tel`, `pass`, `birthday`, `insta`, `tcontact`, `tclient`, `ucomments`,`img`) 
                VALUES ('$id', '$fname', '$lname', '$email', '$tel', '$pass', '$dbirth', '$inst', '$tcontact', '$tclient', '$ucomments','$img');"
    
            );
    
        }else{
            echo('такой пользователь существует');
        }
    }
    
    $mysqli -> close();
   
?>

