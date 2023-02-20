<?php
include "config.php";

$input= file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$curso=$data['curso'];
$nombre=$data['nombre'];
$apellido=$data['apellido'];
$id= $_GET['id'];


$q = mysqli_query($con, "UPDATE `estudiante` SET `curso`='$curso',`nombre`='$nombre',`apellido`='$apellido' WHERE `estudiante`.`id`='{$id}'");

if($q){

    $message['status']="Sucess";
}else{
    http_response_code(422);
    $message['status']="Error";
}

echo json_encode($message);

echo mysqli_error($con);
