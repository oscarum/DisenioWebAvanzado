$(document).ready(function(){
  var imagenes = ['img/tat1.jpg','img/tat2.jpg','img/tat3.jpg','img/tat4.jpg','img/tat5.jpg',];
  $(".fondo").css('background-image','url('+ imagenes[Math.floor(Math.random()*5)] + ')')

  $("#guardar").click(function(){
    var direccion = $("#direc").val();


  //var direccion = "Valle de Henares 81 Ecatepec";
  var link = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ direccion +'&key=AIzaSyBE9rQuOVXdPt40693ccgCugizioXuHXS0';

  //document.write(link);

  $.ajax({
    dataType: "json",
    url: link,
    success: recibirDatos
  });

  function recibirDatos(json){
    var info = json;
    var codigoPostal= info.results[0].address_components[6].long_name;

    //$("#respuesta").html(codigoPostal);
    $("#respuesta").append('<div class="offset-m3 col m6 card-panel grey lighten-4"><h6>Tu codigo postal es: '+codigoPostal+' </h6></div>')
  }

});
});
