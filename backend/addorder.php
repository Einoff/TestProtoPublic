<?php 

    if(!empty($_POST)){
        //данные заказа
        $idR = time();
        $id = $_POST["id"];
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
        $oimg = $_POST["oimg"];

        //заказ с новым пользователем
        if(empty($id)){
            $pass = $_POST["pass"];
            $lname = $_POST["lname"];
            $fname = $_POST["fname"];
            $email = $_POST["email"];
            $login = $_POST["login"];
            $tel = $_POST["tel"];
            $tcontact = $_POST["tcontact"];
            $tclient = $_POST["tclient"];
            $ucomments = $_POST["ucomments"];
            $dbirth = $_POST["d-birth"];
            $inst = $_POST["inst"];
            $address = $_POST["address"];
            $img = "";

            if(!empty($_FILES["photo"]["size"])){
                $photoUrlFrom = $_FILES["photo"]["tmp_name"];
                $photoType = explode("/", $_FILES["photo"]["type"]);
                $photoType = $photoType[1];
                $img = $idR . "." . $photoType;
            
                $photoUrlTo = "../src/assets/image/templ-img/avatars/" . $idR . "." . $photoType;
            
                $moveStatus = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );
            }else{
                $img = "1595777852.png";
            }

            // подключаем базу дынных
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
    
            // проверяет есть ли пользователь с таким email в базе
            $result = $mysqli->query("SELECT * FROM `cab_users` WHERE `login` = '$login'");
            $user = $result->fetch_assoc();

            // добовляем пользователя
            if(count($user) == 0){
                    mysqli_query($mysqli, 
                    "INSERT INTO `cab_users` (`id`, `fname`, `lname`, `email`, `tel`, `login, `pass`, `birthday`, `insta`, `tcontact`, `tclient`, `ucomments`,`img`, `address`) 
                    VALUES ('$idR', '$fname', '$lname', '$email', '$tel', $login, '$pass', '$dbirth', '$inst', '$tcontact', '$tclient', '$ucomments','$img', '$address');"
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
            echo("существующий");
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            mysqli_query($mysqli, 
            "INSERT INTO `cab_orders` (`id`, `onum`, `oname`, `cdate`, `fdate`, `ostatus`, `fullprice`, `itemprice`, `edate`, `glink`, `vlink`, `loclink`, `prevarchiv`, `fullarchiv`, `tsession`, `osource`, `oimg`, `currency`, `ocomments`) 
            VALUES ('$id', NULL, '$oname', '$cdate', '$fdata', '$ostatus', '$fullprice', '$itemprice', '$edate', '', '', '', '', '', '$tsession', '$osource', 'oimg', 'грн', '$ocomments');"
            );
            $mysqli -> close();
            
        }

    }
    
    
   
?>

