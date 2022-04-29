var axos, sem , dias, dia;

dias = prompt("Ingrese la cantidad de dias:")

axos = Math.floor(dias/365)
sem = Math.floor((dias % 365) /7 )
dia = Math.floor((dias % 365) %7 )

document.write(axos + " Año(s) ")
document.write(sem + " Semana(s) ")
document.write(dia + " Dia(s) ")










