<?php 

    if(!empty($_POST)){
       
        //данные заказа
        $idR = time();
        $id = $_POST["id"];
        $oname = $_POST["oname"];
        $cdate = $_POST["cdate"];
        $edate = $_POST["edate"];
        // $fdate = $_POST["fdate"];
        $ostatus = $_POST["ostatus"];
        $fullprice = $_POST["fullprice"];
        $itemprice = implode(',', $_POST["itemprice"]);
        $tsession = $_POST["tsession"];
        $osource = $_POST["osource"];
        $ocomments = $_POST["ocomments"];
        $oimg = "";
        // $oimg = $_POST["oimg"];

        //заказ с новым пользователем
        if(empty($_POST["id"])){
            $pass = $_POST["pass"];
            $lname = $_POST["lname"];
            $fname = $_POST["fname"];
            $email = $_POST["email"];
            $tel = $_POST["tel"];
            $tcontact = $_POST["tcontact"];
            $tclient = $_POST["tclient"];
            $ucomments = $_POST["ucomments"];
            $dbirth = $_POST["d-birth"];
            $inst = $_POST["inst"];
            $img = "";

            if(!empty($_FILES["photo"])){
                $photoUrlFrom = $_FILES["photo"]["tmp_name"];
                $photoType = explode("/", $_FILES["photo"]["type"]);
                $photoType = $photoType[1];
                $img = $idR . "." . $photoType;
            
                $photoUrlTo = "../src/assets/image/templ-img/avatars/" . $idR . "." . $photoType;
            
                $moveStatus = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );
            }

            // подключаем базу дынных
            $mysqli = new mysqli("localhost", "bezleplp_cabinet", "zB5GO%bh", "bezleplp_cabinet");
    
            // проверяет есть ли пользователь с таким email в базе
            $result = $mysqli->query("SELECT * FROM `cab_users` WHERE `email` = '$email'");
            $user = $result->fetch_assoc();
            var_dump($result->fetch_assoc());
            exit();

            // добовляем пользователя
            if(!$user){
                echo('успешное добовление');
                    mysqli_query($mysqli, 
                    "INSERT INTO `cab_users` (`id`, `fname`, `lname`, `email`, `tel`, `pass`, `birthday`, `insta`, `tcontact`, `tclient`, `ucomments`,`img`) 
                    VALUES ('$idR', '$fname', '$lname', '$email', '$tel', '$pass', '$dbirth', '$inst', '$tcontact', '$tclient', '$ucomments','$img');"
                    );
                    
                    mysqli_query($mysqli, 
                    "INSERT INTO `cab_orders` (`id`, `onum`, `oname`, `cdate`, `fdate`, `ostatus`, `fullprice`, `itemprice`, `edate`, `glink`, `vlink`, `loclink`, `prevarchiv`, `fullarchiv`, `tsession`, `osource`, `oimg`, `currency`, `ocomments`) 
                    VALUES ('$idR', NULL, '$oname', '$cdate', '', '$ostatus', '$fullprice', '$itemprice', '$edate', '', '', '', '', '', '$tsession', '$osource', 'oimg', 'грн', '$ocomments');"
                    );
        
            }else{
                echo('такой пользователь существует');
                
            }

            $mysqli -> close();
        }

        //заказ с существующим пользователем
        else{
            $mysqli = new mysqli("localhost", "bezleplp_cabinet", "zB5GO%bh", "bezleplp_cabinet");
            mysqli_query($mysqli, 
            "INSERT INTO `cab_orders` (`id`, `onum`, `oname`, `cdate`, `fdate`, `ostatus`, `fullprice`, `itemprice`, `edate`, `glink`, `vlink`, `loclink`, `prevarchiv`, `fullarchiv`, `tsession`, `osource`, `oimg`, `currency`, `ocomments`) 
            VALUES ('$id', NULL, '$oname', '$cdate', '', '$ostatus', '$fullprice', '$itemprice', '$edate', '', '', '', '', '', '$tsession', '$osource', 'oimg', 'грн', '$ocomments');"
            );
            $mysqli -> close();
            
        }

    }
    
    
   
?>

