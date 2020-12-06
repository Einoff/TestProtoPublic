<?php 

    if(!empty($_POST)){
        $name = $_POST["name"];
        $table =  $_POST["table"];
        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            if($user["id"] == 1595783635){
                mysqli_query($mysqli, 
                "INSERT INTO `$table` (`id`, `name`) 
                VALUES (NULL, '$name');"
                );
            }
            $mysqli -> close();
        }
    }
    
?>

