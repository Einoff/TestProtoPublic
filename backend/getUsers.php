<?php

    // if(!empty($_GET)){
        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            if($user["id"] == 1595783635){
                $result = $mysqli->query("SELECT id, fname, lname, email, tel, birthday, insta, tcontact, tclient, ucomments, img, `address` FROM `cab_users` WHERE id <> 1595783635");
                $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
                $users = json_encode($users); 
                echo($users);
            }
            $mysqli -> close();
           
        }
        exit('');
        $cookie = $_COOKIE["authkey"];
        $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
        $user = $result->fetch_assoc();
        if($user["id"] == 1595783635){
            $result = $mysqli->query("SELECT id, email, fname, lname, tel, img FROM `users` WHERE id <> 1595783635");
            $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
            $users = json_encode($users); 
            print_r($users);
        }
        $mysqli -> close();
    // }
    
?>