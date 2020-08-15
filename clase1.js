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



var resultado = document.getElementById("resultado");

const MAYOR_EDAD = 18;



var getData = function ()
{ 
	var name = document.getElementById("name").value;
	var nombre = document.getElementById("nombre").value;
	var edad = document.getElementById("edad").value;
	var job = document.getElementById("job").value;
	var peso = document.getElementById("peso").value;
	var signo = document.getElementById("signo").value;



	resultado.innerHTML =
	imprimirStr(name) +
	imprimirEdad(nombre,edad) +
	imprimirCumpleanios (edad) +
	compararNombre (name, nombre) +
	compararJob (job) +
	imprimirSiEsMayorDeEdad(edad) +
	permitirAcceso (edad) +
	imprimirEngordar (peso) +
	engordarEdad (edad,peso) +  
	imprimirBajarDePeso (peso)+
	signos(signo);
	
	

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
		pesoFinal = pesoFinal +  0.5;
	}


return pesoFinal;

}


function imprimirEngordar (s)
{
	var p = engordar (s);
	document.write (" Peso a fin de año:  " + p + "<br/>");

}

function engordarEdad (edad,r)
{
	var pesoF= parseInt(r)


	while ( edad <= dias)
	{
		pesoF = pesoF +  1;
		edad++
	}
document.write (" Aumento kilos por años:  " + pesoF + " <br/> ");
}

const META = 70;

function bajarDePeso (peso)
{
	var ejercicio = 0;
	var p = parseInt(peso)
	
	while (p < META)
	{
		ejercicio = ejercicio + 1;
		p++;
	}
return ejercicio;
}


function imprimirBajarDePeso (peso)
{
	var t = bajarDePeso (peso)
	document.write (" Ejercicio necesario:  " + t + "<br/>");
}


function signos (signo){
	var signo = signo;

switch (signo)

	{
	case "acuario":
		document.write("felicidad");
		break;
	case "cancer":
	case "cáncer":
		document.write("amor");
		break;
	case "escorpio":
		document.write("paz");
		break;
	case "leo":
		document.write("buen trabajo");
		break;
	default:
		document.write("tu signo no existe");
		break; 
	}


}



Arrays: 
.length = cuantos elementos tiene el array.

var personas = [sacha, juan, emilio, jorge, luis]

for (var i = 0 ; i < personas.length ; i++) {
	
	var personas = personas[i]

	console.log (persona.nombre + "mide" + persona.altura + "metros");
}
console.log ("${persona.nombre} mide ${persona.altuta} metros")
*/


var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

//array
var personas = [sacha, alan, martin, dario, vicky, paula]

const esAlta = ({altura}) => altura >= 1.8
const esBaja = ({altura}) => altura < 1.8 //RETO



//metodo para filtrar arreglos (recibe un array como parametro)
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)


console.log(personasAltas)
console.log(personasBajas)


