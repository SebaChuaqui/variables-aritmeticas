// Variables a ingresar por Usuario

var num1 = prompt("Ingrese el primer número");
var num2 = prompt("Ingrese el segundo número");
var num3 = prompt("Ingrese el tercer número");
var num4 = prompt("Ingrese el cuarto número");
var num5 = prompt("Ingrese el quinto número");

// Print en HTML
document.write("La suma de todos los n° es: ");
document.write(parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5));
document.write("<br/>");
document.write("El promedio de todos los n° es: ");
document.write((parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5))/5) ;

