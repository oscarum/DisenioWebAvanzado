/*alert("Si funciona JavaScript!");
document.write("Podemos mostrar algo");
console.log("Aqui tambien mostramos");*/

//innerHTML atributo de la clase document
//getElementById busca el contenido que esta dentro de la etiqueta
//document.getElementById("texto").innerHTML="Este es el segundo texto";

/*
var x,y,z;
x = 5;
y = 6.3;
z = x + y;
x = number();//inicializar variable
alert(z);
*/
/*
function tuNombreCompleto(nombre, apellido){
  var nombreCompleto = nombre + " " + apellido;
  //document.write(nombreCompleto);
  return nombreCompleto;
}

var alumno = tuNombreCompleto("Nombre1","ApellidoPaterno1");
alert(alumno);
*/

//Objetos
//var miPrimerObjeto = {nombre:"Oscar", apellido:"Urbina"};
//alert(miPrimerObjeto.nombre);

/*var persona = "Jorge";
var otraPersona = persona;
persona = "Toribio";

document.write(persona);
document.write(otraPersona);*/

//------
/*
var persona = {nombre:"Jorge"};
var otraPersona2 = persona;

persona.nombre = "Amanda";
document.write(persona.nombre);
document.write(otraPersona2.nombre); */


/*
var fruta = {
  nombre : "mango",
  color : "amarillo",
  dulce : 8,
  //metodos
  queDulceSoy: function(){
    alert("Soy muuuuuuuuuuuuuuuuuuuuy dulce");
  }


};

fruta.queDulceSoy();*/

//nombre = prompt("Escribe tu nombre"," ");
//document.getElementById("primero").innerHTML += nombre;

/*
document.getElementById("botonConClick").onclick=function(){
  document.getElementById("aparecerTexto").innerHTML = "Este era un texto fantasma";
  document.getElementById("aparecerTexto").style.cssText = "color:blue; background-color: red";
}*/
/*
var nombre = "primero";

document.getElementById("priBoton").onclick = function(){
  document.getElementById(nombre).innerHTML = "Si resulto!!!";
}
*/

document.getElementById("priBoton").onclick = function(){
  var valor = document.getElementById("miInput").value;
  document.getElementById("vacio").innerHTML = valor;
}
