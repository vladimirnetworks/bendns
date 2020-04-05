<?php

$req =  str_replace("^",".",strrev(base64_decode(str_replace("REHAlEMInTheBOx","=",strrev($_GET['v'])))));

$resip = gethostbyname($req);

$resipx = explode(".",$resip);

if (count($resipx) > 3) {
echo $resip;
} else {

echo "127.0.0.1";

}

exit;

?>
