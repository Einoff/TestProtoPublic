<?php
        if(!empty($_POST)){
            
            if(!empty($_COOKIE["authkey"])){
                $cookie = $_COOKIE["authkey"];
                $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
                $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
                $user = $findUser->fetch_assoc();
                if($user["id"] == 1595783635){
                    $id = $_POST["id"];
                    $table = $_POST["table"];
                    $name = "";
                    $result = $mysqli->query("SELECT * FROM `$table` WHERE `id` = '$id'");
                    $result = mysqli_fetch_assoc($result);  

                    if(!empty($_POST["name"])){
                        $name = $_POST["name"];
                    }else{
                        $name = $result["name"];
                    }

                   $update = $mysqli->query("UPDATE `$table` SET name='$name' WHERE id='$id'");

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