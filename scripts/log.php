<?php
/*
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
 $response = print_r($_POST);
 echo $response;
echo 'POSTed';
  }
*/

if (isset($_POST["data"])) 
{ $item1 = $_POST["data"] . "\n";  
  $myfile = fopen("mydata.txt", "a") or die("Unable to open file!");
  fwrite($myfile, $item1);
  fclose($myfile);
  }
else
{ $myfile = fopen("mydata.txt", "a") or die("Unable to open file!");
fwrite($myfile, "This script has stopped working");
fclose($myfile);  
}



?>
