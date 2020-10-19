<?php
        if(!empty($_POST)){
            
            if(!empty($_COOKIE["authkey"])){
                $cookie = $_COOKIE["authkey"];
                $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
                $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
                $user = $findUser->fetch_assoc();
                if($user["id"] == 1595783635){
                    $id = $_POST["onum"];
                    $gimg = $_POST["gimg"];
                    // $simg = $_POST["simg"];
                    // print_r($simg);
                    $table = "gallery";
                    $update = $mysqli->query("UPDATE `$table` SET gallery='$gimg' WHERE id='$id'");

                    $urlrmoveDir = "../src/assets/image/orders/".$id;
                    $dirList = scandir($urlrmoveDir);
                    $gimg = explode(',', $gimg);

                    foreach($dirList as $item){
                        
                        if(!in_array($item, $gimg)){
                            unlink($urlrmoveDir . "/". $item);
                        }
                        // if ($item != "." && $item != ".."){
                            // unlink($urlrmoveDir . "/". $item);
                        // }
                    }
                    
                    // $urlrmoveDirPrev = "../src/assets/image/orders/".$id. "p";
                    // $dirListPrev = scandir($urlrmoveDirPrev);
                    // $gimg = explode(',', $gimg);

                    // foreach($dirListPrev as $item){
                        
                    //     if(!in_array($item, $gimg)){
                    //         unlink($urlrmoveDirPrev . "/". $item);
                    //     }
                    //     // if ($item != "." && $item != ".."){
                    //         // unlink($urlrmoveDir . "/". $item);
                    //     // }
                    // }

                    
                    // if($update){
                    //     echo("update");
                    // }else{
                    //     echo("not update");
                    // }
                }

                $mysqli -> close();
            }
        }
?>