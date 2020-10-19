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

                        // get images type
                        $photoType = explode("/", $fileImg["type"][$i])[1];

                        // get images url from
                        $photoUrlFrom = $fileImg["tmp_name"][$i];

                        // make url to folder
                        $url = "../src/assets/image/orders/". $onum . "/";
                        $urlPrev = "../src/assets/image/orders/". $onum . '_p' . "/";
                        $id += $i;

                        // make url to new img file
                        $photoUrlTo = $url . $onum . "_" . $id . "." . $photoType;
                        $moveFileError = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );

                        $gimgData = $gimgData . $onum . "_" . $id . "." . $photoType . ",";
                       
                        
                    }
                    
                    $resultGallery = mysqli_query($mysqli, "SELECT * FROM `gallery` WHERE `id` = '$onum'");
                    $resultGallery = mysqli_fetch_assoc($resultGallery);
                    
                    if(!empty($resultGallery)){

                        $gimgData = $resultGallery["gallery"] . $gimgData;
                        mysqli_query($mysqli, "UPDATE `gallery` SET gallery='$gimgData' WHERE id='$onum'");
                        print_r($gimgData);

                    }else{
                        mysqli_query($mysqli, 
                            "INSERT INTO `gallery` (`id`, `gallery`) 
                            VALUES ('$onum', '$gimgData');"
                        );
                    }
                  
                }
            }  
            
            $mysqli -> close();
        }
    }
?>

