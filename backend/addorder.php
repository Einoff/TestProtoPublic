<?php 

    if(!empty($_POST)){

        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            
            if($user["id"] == 1595783635){
                $mysqli -> close();   
                //данные заказа
                $idR = time();
                $id = $_POST["id"];
                $onum = "";
                $oname = $_POST["oname"];
                $cdate = $_POST["cdate"];
                $edate = $_POST["edate"];
                $fdata = $_POST["fdata"];
                $ostatus = $_POST["ostatus"];
                $fullprice = $_POST["fullprice"];
                $itemprice = $_POST["itemprice"];
                $itemprice = !empty($itemprice) ? implode(',', $_POST["itemprice"]) : "";
                $tsession = $_POST["tsession"];
                $osource = $_POST["osource"];
                $ocomments = $_POST["ocomments"];
                $oimg = "";
                $oimg = $_FILES["oimg"];

                

                //заказ с новым пользователем
                if(empty($id)){
                    $pass = $_POST["pass"];
                    $lname = $_POST["lname"];
                    $fname = $_POST["fname"];
                    $email = $_POST["email"];
                    $login = $_POST["login"];
                    $tel = $_POST["tel"];
                    $tcontact = $_POST["tcontact"];
                    $ucontact = $_POST["ucontact"];
                    $tclient = $_POST["tclient"];
                    $ucomments = $_POST["ucomments"];
                    $dbirth = $_POST["d-birth"];
                    $inst = $_POST["inst"];
                    $address = $_POST["address"];
                    $img = "";

 

                    // подключаем базу дынных
                    $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            
                    // проверяет есть ли пользователь с таким email в базе
                    $result = $mysqli->query("SELECT * FROM `cab_users` WHERE `login` = '$login'");
                    $user = $result->fetch_assoc();

                    // добовляем пользователя
                    if(count($user) == 0){
                        mysqli_query($mysqli, 
                        "INSERT INTO `cab_users` (`id`, `fname`, `lname`, `email`, `tel`, `login`, `pass`, `birthday`, `insta`, `tcontact`, `tclient`, `ucomments`, `img`, `address`, `ucontact`) 
                        VALUES ('$idR', '$fname', '$lname', '$email', '$tel', '$login', '$pass', '$dbirth', '$inst', '$tcontact', '$tclient', '$ucomments', '$img', '$address', '$ucontact');"
                        );
                    
                        mysqli_query($mysqli, 
                        "INSERT INTO `cab_orders` (`id`, `onum`, `oname`, `cdate`, `fdate`, `ostatus`, `fullprice`, `itemprice`, `edate`, `glink`, `vlink`, `loclink`, `prevarchiv`, `fullarchiv`, `tsession`, `osource`, `oimg`, `currency`, `ocomments`) 
                        VALUES ('$idR', NULL, '$oname', '$cdate', '$fdata', '$ostatus', '$fullprice', '$itemprice', '$edate', '', '', '', '', '', '$tsession', '$osource', 'oimg', 'грн', '$ocomments');"
                        );
            
                    }else{
                        echo('такой пользователь существует');
                        
                    }

                    $mysqli -> close();
                }

                //заказ с существующим пользователем
                else{
                    $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
                    mysqli_query($mysqli, 
                    "INSERT INTO `cab_orders` (`id`, `onum`, `oname`, `cdate`, `fdate`, `ostatus`, `fullprice`, `itemprice`, `edate`, `glink`, `vlink`, `loclink`, `prevarchiv`, `fullarchiv`, `tsession`, `osource`, `oimg`, `currency`, `ocomments`) 
                    VALUES ('$id', NULL, '$oname', '$cdate', '$fdata', '$ostatus', '$fullprice', '$itemprice', '$edate', '', '', '', '', '', '$tsession', '$osource', 'oimg', 'грн', '$ocomments');"
                    );
                    $mysqli -> close();
                    
                }

                // создание каталога фото
                $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
                $lastOrder = mysqli_query($mysqli, 
                "SELECT * FROM `cab_orders` ORDER BY onum DESC LIMIT 1"
                );

                $onum = mysqli_fetch_array($lastOrder, MYSQLI_ASSOC)["onum"];
                $url = "../src/assets/image/orders/". $onum . "/";
                $urlprev = "../src/assets/image/orders/". $onum . "p" . "/";
                mkdir($url, 0600, true);
                mkdir($urlprev, 0600, true);

                if(!empty($_FILES["oimg"]["size"])){
                    $photoUrlFrom = $_FILES["oimg"]["tmp_name"];
                    $photoType = explode("/", $_FILES["oimg"]["type"]);
                    $photoType = $photoType[1];
                    $oimg = $onum . "(title)" . "." . $photoType;
                
                    $photoUrlTo = $url . $oimg;
                    $photoUrlToPrev = $urlprev . $oimg;
                    
                    

                    //creat preview images
                    print_r($photoType);
                    $quality = 60;
                    switch($photoType){
                        case 'jpeg': $source = imagecreatefromjpeg($photoUrlFrom); break; //Создаём изображения по
                        case 'png': $source = imagecreatefrompng($photoUrlFrom); break;  //образцу загруженного  
                        case 'gif': $source = imagecreatefromgif($photoUrlFrom); break; //исходя из его формата
                        default: return false;
                    }

                    imagejpeg($source, $photoUrlToPrev, $quality); //Сохраняем созданное изображение по указанному пути в формате jpg
                    imagedestroy($source);//Чистим память

                    //original images
                    $moveStatus = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );

                }else{
                    $oimg = "1595777852.png";
                }

                $mysqli->query("UPDATE `cab_orders` SET 
                `oimg`='$oimg'
                WHERE `onum` = '$onum'");

                $mysqli -> close();
            }
                    
        }

    }
    
    
   
?>

