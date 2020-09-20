<?php 
    
    if(!empty($_POST)){

        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");

            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            if($user["id"] == 1595783635){

                $onum = $_POST["onum"];   
                $findorder = $mysqli->query("SELECT * FROM `cab_orders` WHERE `onum` = '$onum'");
                $resultOrder = mysqli_fetch_assoc($findorder);
            
                $onum = $_POST["onum"];
                $oname = $_POST["oname"] ? $_POST["oname"] : $resultOrder["oname"];
                $cdate = $_POST["cdate"] ? $_POST["cdate"] : $resultOrder["cdate"];
                $edate = $_POST["edate"] ? $_POST["edate"] : $resultOrder["edate"];
                $fdate = $_POST["fdate"] ? $_POST["fdate"] : $resultOrder["fdate"];
                $ostatus = $_POST["ostatus"] ? $_POST["ostatus"] : $resultOrder["ostatus"];
                $fullprice = $_POST["fullprice"] ? $_POST["fullprice"] : $resultOrder["fullprice"];
                $itemprice = $_POST["itemprice"];
                $itemprice = !empty($itemprice) ? implode(',', $_POST["itemprice"]) : $resultOrder["itemprice"];
                $tsession = $_POST["tsession"] ? $_POST["tsession"] : $resultOrder["tsession"];
                $osource = $_POST["osource"] ? $_POST["osource"] : $resultOrder["osource"];
                $ocomments = $_POST["ocomments"] ? $_POST["ocomments"] : $resultOrder["ocomments"];
                $oimg = "";

                if(!empty($_FILES["oimg"]["size"])){
                    $url = "../src/assets/image/orders/". $onum . "/";
                    $photoUrlFrom = $_FILES["oimg"]["tmp_name"];
                    $photoType = explode("/", $_FILES["oimg"]["type"]);
                    $photoType = $photoType[1];
                    $oimg = $onum . "(title)" . "." . $photoType;
                    $photoUrlTo = $url . $oimg;
                
                    $moveStatus = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );
                }else{
                    $oimg = $resultOrder["oimg"];
                }

                $mysqli->query("UPDATE `cab_orders` SET 
                `oname`='$oname',
                `cdate`='$cdate',
                `fdate`='$fdate',
                `ostatus`='$ostatus',
                `fullprice`='$fullprice',
                `itemprice`='$itemprice',
                `edate`='$edate',
                -- `glink`=[value-10],
                -- `vlink`=[value-11],
                -- `loclink`=[value-12],
                -- `prevarchiv`=[value-13],
                -- `fullarchiv`=[value-14],
                `tsession`='$tsession',
                `osource`='$osource',
                `oimg`='$oimg',
                `ocomments`='$ocomments' 
                WHERE `onum` = '$onum'");

                $mysqli -> close();
            }    
        }
    }
?>

