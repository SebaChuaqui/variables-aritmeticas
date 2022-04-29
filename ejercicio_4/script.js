// Variables
var axos, sem , dias, dia;

// Usuario
dias = prompt("Ingrese la cantidad de dias:")

//Fórmulas
axos = Math.floor(dias/365)
sem = Math.floor((dias % 365) /7 )
dia = Math.floor((dias % 365) %7 )

// Print en HTML
document.write(axos + " Año(s) ")
document.write(sem + " Semana(s) ")
document.write(dia + " Dia(s) ")










