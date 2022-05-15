
        <?php 
		if($_POST["kullancıadı"]=="b201210049@sakarya.edu.tr" && $_POST["sifre"]=="b201210049")
			{
        echo"Hoşgeldiniz "."b201210049";
        echo"<br>Girişiniz onaylandı.";
            }
        else{
        echo "Girdiğiniz e-posta veya şifre hatalı.";
        header("refresh:3; LoginPaneli.html");
                 }    
				 ?>


