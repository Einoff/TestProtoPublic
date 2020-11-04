<?php

    function reSizeImage($image, $saveTo){

        $currentWidth = 1280;
        $currentHeight = 768;

        //Определяем размер фотографии — ширину и высоту
        $size = GetImageSize ($image);
        //Создаём новое изображение из «старого»
        $src = ImageCreateFromJPEG ($image);
        //Берём числовое значение ширины фотографии, которое мы получили в первой строке и записываем это число в переменную
        $iw = $size[0];
        //Проделываем ту же операцию, что и в предыдущей строке, но только уже с высотой.
        $ih = $size[1];

        if($iw > $ih){
            $koe = $iw/$currentWidth;
            $new_h = ceil ($ih/$koe);
            $dst = ImageCreateTrueColor ($currentWidth, $new_h);
            ImageCopyResampled ($dst, $src, 0, 0, 0, 0, $currentWidth, $new_h, $iw, $ih);
            ImageJPEG ($dst, $saveTo);
            imagedestroy($src);

        }elseif($ih > $iw){
            $koe = $ih/$currentHeight;
            $new_w = ceil ($iw/$koe);
            $dst = ImageCreateTrueColor ($new_w, $currentHeight);
            ImageCopyResampled ($dst, $src, 0, 0, 0, 0, $new_w, $currentHeight, $iw, $ih);
            ImageJPEG ($dst, $saveTo);
            imagedestroy($src);
        }

    }
    
?>