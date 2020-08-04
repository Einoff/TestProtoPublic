<?php
        if(!empty($_COOKIE["authkey"])){
            $authkeyinit = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            $result = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$authkeyinit'");
            $user = $result->fetch_assoc();
            if($user['id'] == 1595783635){
                echo('3');
            }
            else{
                echo('0');
            }
            
        }else{
            echo("0");
        }
?>