//para iniciar algo en jquery se pone el $

/*$(".circulo").click(function(){
  alert("Soy el circulo");
});
$("#cuadrado").click(function(){
  alert("Soy el cuadrado");
});

$("div").click(function(){
  alert("Soy un div");
});
$("p").click(function(){
  alert("Soy un parrafo");
});

$(".circulo").click(function(){
  //$("p").html("Texto reemplazado con jQuery");//metodo para obtener lo que hay dentro de la etiqueta especificada
  $("iframe").attr("src","http://www.jornada.unam.mx/ultimas");
   //attr acceder a atributo de la etiqueta
   $(".circulo").click(function(){
     $("iframe").attr("src","http://www.eluniversal.com.mx/");
   });
});


$("button").click(function(){
  //$(".circulo").css("width","400px");

  /*$(".circulo").css({
    'width' : '300px',
    'height' : '300px'
  });

  //$(".circulo").addClass("ejemplo");

  //$(".circulo").hide();//hide para ocultar
  $(".circulo").fadeOut();

});
*/

$(".circulo").dblclick(function(){//click, hover
  $(this).animate({
    width:"300px",
    height: "300px"
  },400)
});
