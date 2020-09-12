<?php 
    
    if(!empty($_POST)){

        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");

            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            if($user["id"] == 1595783635){

            $id = $_POST["id"];   
            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `id` = '$id'");
            $result = mysqli_fetch_assoc($findUser);
       
            // $pass = $_POST["pass"];
            $lname = $_POST["lname"] ? $_POST["lname"] : $result["lname"];
            $fname = $_POST["fname"] ? $_POST["fname"] : $result["fname"];
            $email = $_POST["email"] ? $_POST["email"] : $result["email"];
            // $login = $_POST["login"];
            $tel = $_POST["tel"] ? $_POST["tel"] : $result["tel"];
            $tcontact = $_POST["tcontact"] ? $_POST["tcontact"] : $result["tcontact"];
            $ucontact = $_POST["ucontact"] ? $_POST["ucontact"] : $result["ucontact"];
            $tclient = $_POST["tclient"] ? $_POST["tclient"] : $result["tclient"];
            $ucomments = $_POST["ucomments"] ? $_POST["ucomments"] : $result["ucomments"];
            $dbirth = $_POST["d-birth"] ? $_POST["d-birth"] : $result["birthday"];
            $inst = $_POST["inst"] ? $_POST["inst"] : $result["inst"];
            $address = $_POST["address"] ? $_POST["address"] : $result["address"];
            $img = $_FILES["photo"];
                if($img["size"] != 0){
                    $photoUrlFrom = $_FILES["photo"]["tmp_name"];
                    $photoType = explode("/", $_FILES["photo"]["type"]);
                    $photoType = $photoType[1];
                    $img = $id . "." . $photoType;
                
                    $photoUrlTo = "../src/assets/image/templ-img/avatars/" . $id . "." . $photoType;
                
                    $moveStatus = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );
                }else{
                    $img = $result["img"];
                    // $img = "1595777852.png";
                }
            }

            $mysqli->query("UPDATE `cab_users` 
            SET `fname`='$fname',`lname`='$lname',`email`='$email',`tel`='$tel',`birthday`='$dbirth',`insta`='$inst',`tcontact`='$tcontact',`tclient`='$tclient',`ucomments`='$ucomments',`img`='$img', `address`='$address',`ucontact`='$ucontact' WHERE `id` = '$id'");

            $mysqli -> close();
        }

        // if(empty($_POST["pass"])){
        //     exit('password empty');
        // }
        // if(empty($_POST["fname"])){
        //     exit('fname empty');
        // }
        // if(empty($_POST["lname"])){
        //     exit('lname empty');
        // }
        // if(empty($_POST["email"])){
        //     exit('email empty');
        // }

        // $id = $_POST["id"];   
        // // $pass = $_POST["pass"];
        // $lname = $_POST["lname"];
        // $fname = $_POST["fname"];
        // $email = $_POST["email"];
        // // $login = $_POST["login"];
        // $tel = $_POST["tel"];
        // $tcontact = $_POST["tcontact"];
        // $ucontact = $_POST["ucontact"];
        // $tclient = $_POST["tclient"];
        // $ucomments = $_POST["ucomments"];
        // $dbirth = $_POST["d-birth"];
        // $inst = $_POST["inst"];
        // $address = $_POST["address"];
        // $img = $_FILES["photo"];

        // if($img["size"] != 0){
        //     $photoUrlFrom = $_FILES["photo"]["tmp_name"];
        //     $photoType = explode("/", $_FILES["photo"]["type"]);
        //     $photoType = $photoType[1];
        //     $img = $id . "." . $photoType;
        
        //     $photoUrlTo = "../src/assets/image/templ-img/avatars/" . $id . "." . $photoType;
        
        //     $moveStatus = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );
        // }else{
        //     $img = "1595777852.png";
        // }
    
    //     $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
    
    //     // проверяет есть ли пользователь с таким email в базе
    //     $result = $mysqli->query("SELECT * FROM `cab_users` WHERE `login` = '$login'");
    //     $user = $result->fetch_assoc();
    
    //     if(count($user) == 0){
    //             echo('добовляем пользователя');
    //             mysqli_query($mysqli, 
    //             "INSERT INTO `cab_users` (`id`, `fname`, `lname`, `email`, `tel`, `login`, `pass`, `birthday`, `insta`, `tcontact`, `tclient`, `ucomments`, `img`, `address`, `ucontact`) 
    //             VALUES ('$id', '$fname', '$lname', '$email', '$tel', '$login', '$pass', '$dbirth', '$inst', '$tcontact', '$tclient', '$ucomments', '$img', '$address', '$ucontact');"
    
    //         );
    
    //     }else{
    //         echo('такой пользователь существует');
    //     }
    }
    
   
?>

