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

return {
		...persona
		edad: persona.edad + 1;
	}

*/


var resultado = document.getElementById("resultado");

var getData = function ()
{ 
	var name = document.getElementById("name").value;
	var nombre = document.getElementById("nombre").value;
	var edad = document.getElementById("edad").value;
	var job = document.getElementById("job").value;
	var peso = document.getElementById("peso").value;

		resultado.innerHTML = imprimirStr(name) + 
		imprimirEdad(nombre,edad) + imprimirCumpleanios (edad) 
		+ compararNombre (name, nombre) + compararJob (job) 
		+ imprimirSiEsMayorDeEdad(edad) + 
		permitirAcceso (edad) + engordar (peso) + engordarEdad (edad,peso);

}

function imprimirEdad (n, e)
{
	var nombre = n;
	var edad = e;
	document.write (nombre + " tiene " + edad + " years ");
}

function imprimirStr (n)
{
	var str = n.substr(0,3);
	document.write (str.toUpperCase() + "<br/>");
}

function imprimirCumpleanios (e)
{
	var edad = parseInt (e) + 1;
	document.write ("cumplira: " + edad + "<br/>");
}

function compararNombre (n, d)
{
	if (n===d)
	{
		document.write ("Error son la misma persona <br/> ");
	}
}

function compararJob (j)
{
	var ing = "ingeniero";
	var med = "medico"

	if (j === ing || j === med)
	{
		document.write ("Tu profesion sirve <br/> ");
	} 
	else
	{
		document.write ("Tu profesion NO sirve <br/>");
	}
}

const MAYOR_EDAD = 18;

function esMayorDeEdad(s) 
{
	if (s >= MAYOR_EDAD)
	{
		return true;
	}
}

function imprimirSiEsMayorDeEdad(s) 
{
	if (esMayorDeEdad(s))
	{
		document.write (" Es mayor de edad <br/>");
	} else {
		document.write (" NO es mayor de edad <br/>");
	}
}

function permitirAcceso (s)
{
	if (!esMayorDeEdad(s))
	{
		document.write (" acceso DENEGADO <br/>");
	}
	else
	{
		document.write (" acceso PERMITIDO <br/>");
	}
}

const dias = 365;

function engordar (s)
{
	var pesoFinal= parseInt (s)

	for (var i=0; i <= dias; i++)
	{
		pesoFinal = pesoFinal +  1;
	}

document.write (" Peso a fin de anio:  " + pesoFinal + "<br/>");
}


function engordarEdad (edad,s)
{
	var pesoF= parseInt(s)

	while (edad <= dias)
	{
		pesoF = pesoF +  2;
		edad++
	}
document.write (" Aumento de dos kilos por year:  " + pesoF);
}

