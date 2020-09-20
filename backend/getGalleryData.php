<?php
        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            if($user["id"] == 1595783635){
                $result = $mysqli->query("SELECT * FROM `gallery`");
                $allprod = mysqli_fetch_all($result, MYSQLI_ASSOC);
                $allprod = json_encode($allprod); 
                print_r($allprod);
            }
            $mysqli -> close();
           
        }
        exit('');
?>