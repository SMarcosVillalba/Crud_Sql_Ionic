<?php
include "config.php";
$input= file_get_contents('php://input');
$data=json_decode($input,true);
$message= array();
$curso=$data['curso'];
$nombre=$data['nombre'];
$apellido=$data['apellido'];

$q=mysqli_query($con,"INSERT INTO estudiante (id,curso,nombre,apellido) VALUES (DEFAULT,'$curso','$nombre','$apellido')");

if($q){

    http_response_code(201);
    $message['status']="Sucess";
}else{
    http_response_code(422);
    $message['status']="Error";
}
 
echo json_encode($message);

echo mysqli_error($con);
