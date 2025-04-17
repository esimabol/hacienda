<?php
 $host = "190.8.176.86";
 $user = "esimabol_useradmin";
 $password = "#M@=k!@!WpdnT1W";
 $database = "esimabol_testing";

 $connection = mysqli_connect($host, $user, $password, $database);

 if(!$connection){
     die("Connection failed: " . mysqli_connect_error());
 }