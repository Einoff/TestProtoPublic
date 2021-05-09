<?php

    // if(!empty($_GET)){
        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            $findUser = $mysqli->query("SELECT fname, lname, img FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            $user = json_encode($user); 
            echo($user);
 
            $mysqli -> close();
        }
?>