<?php
        if(!empty($_POST)){
            
            if(!empty($_COOKIE["authkey"])){
                $cookie = $_COOKIE["authkey"];
                $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
                $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
                $user = $findUser->fetch_assoc();
                if($user["id"] == 1595783635){
                        $targetTable = $_POST['targetTable'];
                        $id = $_POST['id'];
                        $idName = 'id';
                        $_POST['idname'] ? $idName = $_POST['idname'] : $idName = 'id';
                        $mysqli->query("DELETE FROM $targetTable WHERE $idName='$id'");
                       
                        if($_POST['delFolder']){

                            //удалить оригинальную папку
                            $urlrmoveDir = "../src/assets/image/orders/".$id;
                            $dirList = scandir($urlrmoveDir);
                            foreach($dirList as $item){
                                if ($item != "." && $item != ".."){
                                    unlink($urlrmoveDir . "/". $item);
                                }
                            }
                            rmdir($urlrmoveDir);

                            //удалить папку превью
                            $urlrmoveDirPrev = "../src/assets/image/orders/".$id."p";
                            $dirList = scandir($urlrmoveDirPrev);
                            foreach($dirList as $item){
                                if ($item != "." && $item != ".."){
                                    unlink($urlrmoveDirPrev . "/". $item);
                                }
                            }
                            rmdir($urlrmoveDirPrev);
                        }
                        echo('ok');
                        
                 }
                    
                

                $mysqli -> close();
            }
        }
?>