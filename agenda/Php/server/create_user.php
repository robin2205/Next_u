<?php
  require('conector.php');

  $con = new ConectorBD();
  $con->initConexion('agenda');

  $hash = password_hash('12345', PASSWORD_DEFAULT);

  $data['username']= '"robinsongallego@mail.com"';
  $data['password']= '"'.$hash.'"';
  $data['nombre']='"Robinson Gallego"';
  $data['fecha_nacimiento']='"1989-04-05"';

  $con->insertData('usuarios', $data);




 ?>
