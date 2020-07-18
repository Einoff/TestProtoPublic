<?php

    if(!empty($_GET)){
        $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");

        if (mysqli_connect_errno()) {
            printf("Соединение не удалось: %s\n", mysqli_connect_error());
            exit();
        }

        $result = $mysqli->query("SELECT id, email, fname, lname, tel, img FROM `users` WHERE id <> 3");
        $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
         
        // for($i = 0; $i < count($users); $i++) {
        //     // $users[$i]["id"] = '';
        //     $users[$i]["pass"] = '';
        // }  

        $users = json_encode($users); 

        print_r($users);
        
        $mysqli -> close();
    }
    
?>