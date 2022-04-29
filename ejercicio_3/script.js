// Variables
var cel, far, kel;

// Usuario
cel = parseFloat(prompt("Ingrese grados celcius: "));

//Fórmulas

kel = (cel +273.15);
far = (cel*9/5)+32;

// Print en HTML
document.write(cel + " °C equivalen a "+kel+"°K");
document.write("<br/>");
document.write(cel + " °C equivalen a "+far+"°F");

