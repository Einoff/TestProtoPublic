<?php 
    
    if(!empty($_POST)){

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

        $id = time();   
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
        $address = $_POST["address"];
        $img = $_FILES["photo"];

        if($img["size"] != 0){
            $photoUrlFrom = $_FILES["photo"]["tmp_name"];
            $photoType = explode("/", $_FILES["photo"]["type"]);
            $photoType = $photoType[1];
            $img = $id . "." . $photoType;
        
            $photoUrlTo = "../src/assets/image/templ-img/avatars/" . $id . "." . $photoType;
        
            $moveStatus = move_uploaded_file ( $photoUrlFrom , $photoUrlTo );
        }else{
            $img = "1595777852.png";
        }
    
        $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
    
        // проверяет есть ли пользователь с таким email в базе
        $result = $mysqli->query("SELECT * FROM `cab_users` WHERE `email` = '$email'");
        $user = $result->fetch_assoc();
    
        if(count($user) == 0){
                mysqli_query($mysqli, 
                "INSERT INTO `cab_users` (`id`, `fname`, `lname`, `email`, `tel`, `pass`, `birthday`, `insta`, `tcontact`, `tclient`, `ucomments`,`img`, `address`) 
                VALUES ('$id', '$fname', '$lname', '$email', '$tel', '$pass', '$dbirth', '$inst', '$tcontact', '$tclient', '$ucomments','$img', '$address');"
    
            );
    
        }else{
            echo('такой пользователь существует');
        }
    }
    
    $mysqli -> close();
   
?>

