<?php
        if(!empty($_POST)){
            
            if(!empty($_COOKIE["authkey"])){
                $cookie = $_COOKIE["authkey"];
                $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
                $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
                $user = $findUser->fetch_assoc();
                if($user["id"] == 1595783635){
                    $id = $_POST["id"];
                    $result = $mysqli->query("SELECT * FROM `itemprice` WHERE `id` = '$id'");
                    $result=mysqli_fetch_assoc($result);

                    $prod = "";
                    $price = "";

                    if(!empty($_POST["prod"])){
                        $prod = $_POST["prod"];
                    }else{
                        $prod = $result["product"];
                    }

                    if(!empty($_POST["price"])){
                        $price = $_POST["price"];
                    }else{
                        $price = $result["price"];
                    }

                   $update = $mysqli->query("UPDATE `itemprice` SET product='$prod', price='$price' WHERE id='$id'");
                    if($update){
                        echo("update");
                    }else{
                        echo("not update");
                    }
                }
                $mysqli -> close();
            }
        }
?>