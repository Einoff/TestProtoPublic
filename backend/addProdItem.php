<?php 

    if(!empty($_POST)){
        $proditem = $_POST["proditem"];
        $prodprice = $_POST["prodprice"] || 1;
        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            if($user["id"] == 1595783635){
                mysqli_query($mysqli, 
                "INSERT INTO `itemprice` (`id`, `product`, `price`) 
                VALUES (NULL, '$proditem', '$prodprice');"
                );
            }
            $mysqli -> close();
        }
    }
    
?>

