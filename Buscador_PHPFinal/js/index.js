/*Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página

$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

//Función que reproduce el video de fondo al hacer scroll, y detiene la reproducción al detener el scroll

function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}
playVideoOnScroll();*/

//Función para inicializar los select
$(document).ready(function(){
  $("#selectCiudad").material_select();
  $("#selectTipo").material_select();
});

//Función que inicializa el elemento Slider
function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}

inicializarSlider();

//Función para mostrar todos los registros
function mostrarTodos(){
  //Realizamos la llamada AJAX
  $.ajax({
    url:"buscador.php?seleccion=1",
    type:"POST",
    success:function(respuesta){
      $(".tituloContenido").after(respuesta);}
  });
}

//Función para mostrar los registros de una Ciudad seleccionada
function mostrarDatosEspecificos(){
  //console.log("Rango",$("#rangoPrecio").val());
  //Válidamos si se seleccionó la ciudad o el tipo
  if($("#selectCiudad").val()!="" || $("#selectTipo").val()!=""){
    //Verificamos si se hace la consulta por Ciudad sola
    if($("#selectCiudad").val()!="" && $("#selectTipo").val()==""){
      //Capturamos la ciudad
      var parametro={"ciudad":$("#selectCiudad").val(),"rango":$("#rangoPrecio").val()};
      //Realizamos la llamada AJAX
      $.ajax({
        url:"buscador.php?seleccion=2",
        type:"POST",
        data:parametro,
        success:function(respuesta){
          if(respuesta==""){
            $(".tituloContenido").after('<div id="mensaje">No hay datos para su busqueda. Por favor haga cambios en la Información.</div>');}
          else{
            $(".tituloContenido").after(respuesta);}}
      });
    }
    else if($("#selectCiudad").val()=="" && $("#selectTipo").val()!=""){
      //Capturamos el tipo
      var parametro={"tipo":$("#selectTipo").val(),"rango":$("#rangoPrecio").val()};
      //Realizamos la llamada AJAX
      $.ajax({
        url:"buscador.php?seleccion=3",
        type:"POST",
        data:parametro,
        success:function(respuesta){
          if(respuesta==""){
            $(".tituloContenido").after('<div id="mensaje">No hay datos para su busqueda. Por favor haga cambios en la Información.</div>');}
          else{
            $(".tituloContenido").after(respuesta);}}
      });
    }
    else if($("#selectCiudad").val()!="" && $("#selectTipo").val()!=""){
      //Capturamos el tipo
      var parametro={"ciudad":$("#selectCiudad").val(),"tipo":$("#selectTipo").val(),"rango":$("#rangoPrecio").val()};
      //Realizamos la llamada AJAX
      $.ajax({
        url:"buscador.php?seleccion=4",
        type:"POST",
        data:parametro,
        success:function(respuesta){
          if(respuesta==""){
            $(".tituloContenido").after('<div id="mensaje">No hay datos para su busqueda. Por favor haga cambios en la Información.</div>');}
          else{
            $(".tituloContenido").after(respuesta);}}
      });
    }
  }
}

//Limpieza del contenido buscado si se cambia la ciudad
$("#selectCiudad").change(function(){
  //Limpiamos el contenidoBuscador
  $(".contenidoBuscador").css({"display":"none"});
  //Ocultamos el mensaje
  $("#mensaje").hide('fast');
});

//Limpieza del contenido buscado si se cambia el tipo
$("#selectTipo").change(function(){
  //Limpiamos el contenidoBuscador
  $(".contenidoBuscador").css({"display":"none"});
  //Ocultamos el mensaje
  $("#mensaje").hide('fast');
});

//Limpieza del contenido cuando hay cambio de precios
$("#rangoPrecio").change(function(){
  //Limpiamos el contenidoBuscador
  $(".contenidoBuscador").css({"display":"none"});
  //Ocultamos el mensaje
  $("#mensaje").hide('fast');
});
