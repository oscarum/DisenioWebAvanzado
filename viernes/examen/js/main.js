$("#imprimir").click(function(){
  var cont = Math.floor(Math.random()*5);
  if(cont == 1){
    alert("La respuesta es: SI");
  }else if (cont == 2) {
    alert("La respuesta es: NO");
  }else if (cont == 3) {
    alert("La respuesta es: PROBABLEMENTE");
  }else if(cont == 4){
    alert ("La respues es: NO SE");
  }else{
    alert("Intenta preguntando de nuevo");
  }

});
