<?php
  require('conector.php');
  session_start();

  if (isset($_SESSION['username'])) {
    $con = new ConectorBD();
    if ($con->initConexion('agenda')=="OK") {
      $resultado = $con->consultar(['eventos'], ['*'], 'WHERE fk_usuario ="'.$_SESSION['username'].'"');
      if ($resultado) {
        $i=0;
        while ($fila = $resultado->fetch_assoc()) {
          $response['eventos'][$i]['id']=$fila['id'];
          $response['eventos'][$i]['title']=$fila['titulo'];
          if ($fila['allDay']==1) {
            $response['eventos'][$i]['allDay']=true;
            $response['eventos'][$i]['start']=$fila['start_date'];
            $response['eventos'][$i]['end']=$fila['end_date'];
          }else {
            $response['eventos'][$i]['allDay']=false;
            $response['eventos'][$i]['start']=$fila['start_date']." ".$fila['start_hour'];
            $response['eventos'][$i]['end']=$fila['end_date']." ".$fila['end_hour'];
          }



          $i++;
        }
        $response['msg'] = "OK";
      }


    }else {
      $response['msg'] = "No se ha podido establecer conexión con la base de datos";
    }
  }else{
    $response['msg'] = "No se ha iniciado sesión";
  }

  echo json_encode($response);



 ?>
