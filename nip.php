<?php

$domb =  str_replace("^",".",strrev(base64_decode(str_replace("REHAlEMInTheBOx","=",strrev($_GET['v'])))));

$kele = gethostbyname($domb);

$kelex = explode(".",$kele);

if (count($kelex) > 3) {
echo gethostbyname($domb);
} else {

echo "127.0.0.1";

}

exit;

?>
