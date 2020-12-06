<?php

        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            if($user["id"] == 1595783635){
                $result = $mysqli->query("SELECT id, fname, lname, email, tel, birthday, insta, tcontact, tclient, ucomments, img, `address`, `ucontact` FROM `cab_users` WHERE id <> 1595783635");
                $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
                $users = json_encode($users); 
                echo($users);
            }
            $mysqli -> close();
           
        }
        exit('');
    
?>