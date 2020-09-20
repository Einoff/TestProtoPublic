<?php 
    
    if(!empty($_POST)){

        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");

            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            if($user["id"] == 1595783635){

                
                $onum = $_POST["onum"];
                $fileImg = $_FILES["gimg"];
                // print_r($onum);  

                $countFiles = count($_FILES["gimg"]["name"]);
                

                
                if($countFiles > 0){
                    $id = time();
                    $gimgData = "";

                    for($i = 0; $i < $countFiles; $i++){
                        $photoType = explode("/", $fileImg["type"][$i])[1];
                        $photoUrlFrom = $fileImg["tmp_name"][$i];
                        $url = "../src/assets/image/orders/". $onum . "/";
                        $id += $i;
                        $photoUrlTo = $url . $onum . "_" . $id . "." . $photoType;
                        $moveFileError = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );
                        print_r($moveFileError);
                        // if($countFiles - 1 != $i){
                            $gimgData = $gimgData . $onum . "_" . $id . "." . $photoType . ",";
                        // }else{
                            // $gimgData = $gimgData . $onum . "_" . $id . "." . $photoType;
                        // }
                    }
                    
                    
                    $resultGallery = mysqli_query($mysqli, "SELECT * FROM `gallery` WHERE `id` = '$onum'");
                    $resultGallery = mysqli_fetch_assoc($resultGallery);
                    
                    if(!empty($resultGallery)){

                        $gimgData = $resultGallery["gallery"] . $gimgData;
                        mysqli_query($mysqli, "UPDATE `gallery` SET gallery='$gimgData' WHERE id='$onum'");

                    }else{
                        mysqli_query($mysqli, 
                            "INSERT INTO `gallery` (`id`, `gallery`) 
                            VALUES ('$onum', '$gimgData');"
                        );
                    }

                  
                    print_r($resultGallery["gallery"]);
                }
            }  
            
            $mysqli -> close();
        }
    }
?>

