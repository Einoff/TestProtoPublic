<?php
        if(!empty($_COOKIE["authkey"])){
            $cookie = $_COOKIE["authkey"];
            $mysqli = new mysqli("127.0.0.1", "root", "root", "photo_bd");
            $findUser = $mysqli->query("SELECT * FROM `cab_users` WHERE `authkey` = '$cookie'");
            $user = $findUser->fetch_assoc();
            if($user["id"] == 1595783635){
                // $result = $mysqli->query("SELECT * FROM `itemprice`");
                // $allprod = mysqli_fetch_all($result, MYSQLI_ASSOC);
                // // $allprod = json_encode($allprod); 
                // $result2 = $mysqli->query("SELECT * FROM `status`");
                // $allprod2 = mysqli_fetch_all($result2, MYSQLI_ASSOC);
                // // $allprod2 = json_encode($allprod2); 
                // // $allprod = "[" . $allprod . ',' . $allprod2 . "]";
                // // $allprod = json_encode(array_merge($allprod,$allprod2));
                // $allprod = json_encode([$allprod,$allprod2]);
                
                $tables = ['clientcategorylist', 'currencylist', 'ostatuslist', 'typesessionlist', 'sourceorderlist'];
                $allprod = [];
                
                foreach ($tables as $table) {
                    $query   = "SELECT * FROM `$table`";
                    $result  = $mysqli->query($query);
                    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
                    $allprod[$table] = $data; 
                }
                $allprod = json_encode($allprod);
                print_r($allprod);
            }
            $mysqli -> close();
           
        }
        exit('');
?>