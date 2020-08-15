<?php
        if(!empty($_POST)){
            
            if(!empty($_COOKIE["authkey"])){
                $cookie = $_COOKIE["authkey"];
                $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
                $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
                $user = $findUser->fetch_assoc();
                if($user["id"] == 1595783635){
                    // if($_POST['targetTable'] == 'prod'){
                        $targetTable = $_POST['targetTable'];
                        $id = $_POST['id'];
                        // echo('prod');
                        $mysqli->query("DELETE FROM $targetTable WHERE id='$id'");
                    }
                    
                // }

                $mysqli -> close();
            }
        }
?>