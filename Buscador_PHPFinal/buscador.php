<?php
if(isset($_GET["seleccion"])){
	if($_GET["seleccion"]==1){
		$datos=file_get_contents("data-1.json");
		$apartamentos=json_decode($datos,true);
		foreach ($apartamentos as $apartamento){
			#Imprimimos los diferentes apartamentos
			echo '<div class="contenidoBuscador card">
			        <img src="img/home.jpg">
			        <p>
			          <strong>Dirección: </strong>'.$apartamento["Direccion"].'<br>
			          <strong>Ciudad: </strong>'.$apartamento["Ciudad"].'<br>
			          <strong>Teléfono: </strong>'.$apartamento["Telefono"].'<br>
			          <strong>Código Postal: </strong>'.$apartamento["Codigo_Postal"].'<br>
			          <strong>Tipo: </strong>'.$apartamento["Tipo"].'<br>
			          <strong>Precio: </strong><strong id="precio">'.$apartamento["Precio"].'</strong>
			        </p>
			      </div>';}
	}
	else if($_GET["seleccion"]==2){
		if(isset($_POST["ciudad"])){
			switch($_POST["ciudad"]){
				case 'Houston':
					ciudadEspecifica("Houston",$_POST["rango"]);
					break;
				case 'Los Angeles':
					ciudadEspecifica("Los Angeles",$_POST["rango"]);
					break;
				case 'Miami':
					ciudadEspecifica("Miami",$_POST["rango"]);
					break;
				case 'New York':
					ciudadEspecifica("New York",$_POST["rango"]);
					break;
				case 'Orlando':
					ciudadEspecifica("Orlando",$_POST["rango"]);
					break;
				case 'Washington':
					ciudadEspecifica("Washington",$_POST["rango"]);
					break;
				default:
					echo "La Opción seleccionada no existe";
					break;}}
	}
	else if($_GET["seleccion"]==3){
		if(isset($_POST["tipo"])){
			switch($_POST["tipo"]){
				case 'Apartamento':
					tipoEspecifica("Apartamento",$_POST["rango"]);
					break;
				case 'Casa':
					tipoEspecifica("Casa",$_POST["rango"]);
					break;
				case 'Casa de Campo':
					tipoEspecifica("Casa de Campo",$_POST["rango"]);
					break;
				default:
					echo "La Opción seleccionada no existe";
					break;}}
	}
	else if($_GET["seleccion"]==4){
		ciudad_tipoEspecifica($_POST["ciudad"],$_POST["tipo"],$_POST["rango"]);
	}
}

function ciudadEspecifica($ciudadComparar,$rango){
	$ranguitos=explode(";",$rango);
	$datos=file_get_contents("data-1.json");
	$ciudades=json_decode($datos,true);
	foreach($ciudades as $ciudad){
		#Imprimimos los apartamentos de la Ciudad seleccionada
		if($ciudad["Ciudad"]==$ciudadComparar){
			$costo=str_replace('$','',str_replace(',','',$ciudad["Precio"]));
			if($costo>=$ranguitos[0] && $costo<=$ranguitos[1]){
				echo '<div class="contenidoBuscador card">
				        <img src="img/home.jpg">
				        <p>
				          <strong>Dirección: </strong>'.$ciudad["Direccion"].'<br>
				          <strong>Ciudad: </strong>'.$ciudad["Ciudad"].'<br>
				          <strong>Teléfono: </strong>'.$ciudad["Telefono"].'<br>
				          <strong>Código Postal: </strong>'.$ciudad["Codigo_Postal"].'<br>
				          <strong>Tipo: </strong>'.$ciudad["Tipo"].'<br>
				          <strong>Precio: </strong><strong id="precio">'.$ciudad["Precio"].'</strong>
				        </p>
				      </div>';}}}
}

function tipoEspecifica($tipoComparar,$rango){
	$ranguitos=explode(";",$rango);
	$datos=file_get_contents("data-1.json");
	$tipos=json_decode($datos,true);
	foreach($tipos as $tipo){
		#Imprimimos los apartamentos de la Ciudad de Houston
		if($tipo["Tipo"]==$tipoComparar){
			$costo=str_replace('$','',str_replace(',','',$tipo["Precio"]));
			if($costo>=$ranguitos[0] && $costo<=$ranguitos[1]){
				echo '<div class="contenidoBuscador card">
				        <img src="img/home.jpg">
				        <p>
				          <strong>Dirección: </strong>'.$tipo["Direccion"].'<br>
				          <strong>Ciudad: </strong>'.$tipo["Ciudad"].'<br>
				          <strong>Teléfono: </strong>'.$tipo["Telefono"].'<br>
				          <strong>Código Postal: </strong>'.$tipo["Codigo_Postal"].'<br>
				          <strong>Tipo: </strong>'.$tipo["Tipo"].'<br>
				          <strong>Precio: </strong><strong id="precio">'.$tipo["Precio"].'</strong>
				        </p>
				      </div>';}}}
}

function ciudad_tipoEspecifica($ciudadComparar,$tipoComparar,$rango){
	$ranguitos=explode(";",$rango);
	$datos=file_get_contents("data-1.json");
	$varios=json_decode($datos,true);
	foreach($varios as $item){
		#Imprimimos los apartamentos de la Ciudad de Houston
		if($item["Ciudad"]==$ciudadComparar && $item["Tipo"]==$tipoComparar){
			$costo=str_replace('$','',str_replace(',','',$item["Precio"]));
			if($costo>=$ranguitos[0] && $costo<=$ranguitos[1]){
				echo '<div class="contenidoBuscador card">
				        <img src="img/home.jpg">
				        <p>
				          <strong>Dirección: </strong>'.$item["Direccion"].'<br>
				          <strong>Ciudad: </strong>'.$item["Ciudad"].'<br>
				          <strong>Teléfono: </strong>'.$item["Telefono"].'<br>
				          <strong>Código Postal: </strong>'.$item["Codigo_Postal"].'<br>
				          <strong>Tipo: </strong>'.$item["Tipo"].'<br>
				          <strong>Precio: </strong><strong id="precio">'.$item["Precio"].'</strong>
				        </p>
				      </div>';}}}
}