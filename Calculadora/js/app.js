var numero1=0;
var numero2=0;
var resultado=0;
var esperaSuma=true;
var esperaResta=true;
var esperaMulti=true;
var esperaDivi=true;
var presionpunto=true;
var contador=0;

function cambioCero(){
	document.getElementById("0").style="width:28%;border:1px solid red;border-radius:12px;";
	cargarNumero(0);
}
function retornaCero(){
	document.getElementById("0").style="width:29%;border:none;";}
function cambioUno(){
	document.getElementById("1").style="width:28%;border:1px solid red;border-radius:12px;";
	cargarNumero(1);
}
function retornaUno(){
	document.getElementById("1").style="width:29%;border:none;";}
function cambioDos(){
	document.getElementById("2").style="width:28%;border:1px solid red;border-radius:12px;";
	cargarNumero(2);
}
function retornaDos(){
	document.getElementById("2").style="width:29%;border:none;";}
function cambioTres(){
	document.getElementById("3").style="width:28%;border:1px solid red;border-radius:12px;";
	cargarNumero(3);
}
function retornaTres(){
	document.getElementById("3").style="width:29%;border:none;";}
function cambioCua(){
	document.getElementById("4").style="width:21%;border:1px solid red;border-radius:12px;";
	cargarNumero(4);
}
function retornaCua(){
	document.getElementById("4").style="width:22%;border:none;";}
function cambioCinco(){
	document.getElementById("5").style="width:21%;border:1px solid red;border-radius:12px;";
	cargarNumero(5);
}
function retornaCinco(){
	document.getElementById("5").style="width:22%;border:none;";}
function cambioSeis(){
	document.getElementById("6").style="width:21%;border:1px solid red;border-radius:12px;";
	cargarNumero(6);
}
function retornaSeis(){
	document.getElementById("6").style="width:22%;border:none;";}
function cambioSie(){
	document.getElementById("7").style="width:21%;border:1px solid red;border-radius:12px;";
	cargarNumero(7);
}
function retornaSie(){
	document.getElementById("7").style="width:22%;border:none;";}
function cambioOcho(){
	document.getElementById("8").style="width:21%;border:1px solid red;border-radius:12px;";
	cargarNumero(8);
}
function retornaOcho(){
	document.getElementById("8").style="width:22%;border:none;";}
function cambioNue(){
	document.getElementById("9").style="width:21%;border:1px solid red;border-radius:12px;";
	cargarNumero(9);
}
function retornaNue(){
	document.getElementById("9").style="width:22%;border:none;";}

function cargarNumero(numero){
	if(contador<8){
		if(document.getElementById("display").textContent==0){
			document.getElementById("display").innerHTML=numero;
			contador++;}
		else if(document.getElementById("display").textContent=="0."){
			document.getElementById("display").innerHTML+=numero;}
		else{
			document.getElementById("display").innerHTML+=numero;
			contador++;}
	}
}

function sumar(){
	numero1=parseFloat(numero1);
	numero2=parseFloat(numero2);
	resultado=numero1+numero2;
	mostrarResultado();
}

function restar(){
	numero1=parseFloat(numero1);
	numero2=parseFloat(numero2);
	resultado=numero1-numero2;
	mostrarResultado();
}

function multiplicar(){
	numero1=parseFloat(numero1);
	numero2=parseFloat(numero2);
	resultado=numero1*numero2;
	mostrarResultado();
}

function dividir(){
	numero1=parseFloat(numero1);
	numero2=parseFloat(numero2);
	resultado=numero1/numero2;
	mostrarResultado();
}

function mostrarResultado(){
	document.getElementById("display").textContent=resultado;
	esperaSuma=true;
	esperaResta=true;
	esperaMulti=true;
	esperaDivi=true;
	presionpunto=true;
	contador=0;
};

document.getElementById("0").onclick=cambioCero;
document.getElementById("0").onmouseout=retornaCero;
document.getElementById("1").onclick=cambioUno;
document.getElementById("1").onmouseout=retornaUno;
document.getElementById("2").onclick=cambioDos;
document.getElementById("2").onmouseout=retornaDos;
document.getElementById("3").onclick=cambioTres;
document.getElementById("3").onmouseout=retornaTres;
document.getElementById("4").onclick=cambioCua;
document.getElementById("4").onmouseout=retornaCua;
document.getElementById("5").onclick=cambioCinco;
document.getElementById("5").onmouseout=retornaCinco;
document.getElementById("6").onclick=cambioSeis;
document.getElementById("6").onmouseout=retornaSeis;
document.getElementById("7").onclick=cambioSie;
document.getElementById("7").onmouseout=retornaSie;
document.getElementById("8").onclick=cambioOcho;
document.getElementById("8").onmouseout=retornaOcho;
document.getElementById("9").onclick=cambioNue;
document.getElementById("9").onmouseout=retornaNue;

document.getElementById("mas").onclick=function(){
	numero1=document.getElementById("display").textContent;
	document.getElementById("display").textContent="";
	esperaSuma=false;
};

document.getElementById("menos").onclick=function(){
	numero1=document.getElementById("display").textContent;
	document.getElementById("display").textContent="";
	esperaResta=false;
};

document.getElementById("por").onclick=function(){
	numero1=document.getElementById("display").textContent;
	document.getElementById("display").textContent="";
	esperaMulti=false;
};

document.getElementById("dividido").onclick=function(){
	numero1=document.getElementById("display").textContent;
	document.getElementById("display").textContent="";
	esperaDivi=false;
};

document.getElementById("punto").onclick=function(){
	if(presionpunto==true){
		document.getElementById("display").innerHTML+=".";
		contador++;
		presionpunto=false;}
}

document.getElementById("on").onclick=function(){
	document.getElementById("display").textContent=0;
	numero1=0;
	numero2=0;
	esperaSuma=true;
	esperaResta=true;
	esperaMulti=true;
	esperaDivi=true;
	presionpunto=true;
	contador=0;
}

document.getElementById("igual").onclick=function(){
	if(esperaSuma==false){
		numero2=document.getElementById("display").textContent;
		sumar();
	}
	else if(esperaResta==false){
		numero2=document.getElementById("display").textContent;
		restar();
	}
	else if(esperaMulti==false){
		numero2=document.getElementById("display").textContent;
		multiplicar();
	}
	else if(esperaDivi==false){
		numero2=document.getElementById("display").textContent;
		dividir();
	}
};
