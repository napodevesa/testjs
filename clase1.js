/*
var nombre, apellido;

nombre= "napoleon";
apellido = "dev";

var nombreMay = nombre.toUpperCase();
var primeraletra = nombre.charAt(0);
var cantidad = nombre.length;

var str= nombre.substr (0,3)

console.log( "Hola " + nombreMay + " " 
	+ apellido + " "+ primeraletra);
console.log( cantidad);
console.log (str);

*/


var resultado = document.getElementById("resultado");


var getData = function ()
{ 
var name = document.getElementById("name").value;
var nombre = document.getElementById("nombre").value;
var edad = document.getElementById("edad").value;

	resultado.innerHTML = imprimirStr(name) + imprimirEdad(nombre,edad) + imprimirCumpleanios (edad);

}

function imprimirEdad (n, e)
{
	var nombre = n;
	var edad = e;
	document.write (nombre + " tiene " + edad + " years ");

}

function imprimirStr (n)
{
	var nombre = n;
	var str = nombre.substr(0,3);
	document.write (str.toUpperCase() + "<br/>");

}

function imprimirCumpleanios (e)

{
	var edad = parseInt (e) + 1;
	document.write ("cumplira: " + edad + "<br/>");

	/*
	return {
		...persona
		edad: persona.edad + 1;
	}
	*/

}

