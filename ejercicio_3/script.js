var cel, far, kel;

cel = parseFloat(prompt("Ingrese grados celcius: "));

kel = (cel +273.15);
far = (cel*9/5)+32;

document.write(cel + " °C equivalen a "+kel+"°K");
document.write("<br/>");
document.write(cel + " °C equivalen a "+far+"°F");

