var imagenes=new Array();
imagenes[0]="image/1.png";
imagenes[1]="image/2.png";
imagenes[2]="image/3.png";
imagenes[3]="image/3.png";

function llenarAleatorio(){
	var panel=document.getElementById("panel-tablero");
	var cadena="";
	for(var i=0;i<49;i++){
		var imagenAzar=Math.floor(Math.random()*imagenes.length);
		cadena+='<div class="col">\
							<img src="'+imagenes[imagenAzar]+'" width="100%">\
					      </div>';}
	panel.innerHTML=cadena;
}

$("#iniciar").click(function(){
	llenarAleatorio();
	document.getElementById("iniciar").innerHTML="Reiniciar";
});