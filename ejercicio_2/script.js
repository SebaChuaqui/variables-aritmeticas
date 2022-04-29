
// Se declaran variables para que ingrese el usuario

var num1 = prompt("Ingrese dos números diferentes y mayores a cero");
var num2 = prompt("Ingrese dos números diferentes y mayores a cero");

//condición

if (num1 == num2) {
    alert("Los números deben ser distintos")
    document.write("CARGAR DE NUEVO LA PAGINA")
}

else {

    document.write("La suma es: ");
    document.write(parseInt(num1) + parseInt(num2));
    document.write("<br/>");
    document.write("La resta es: ");
    document.write(parseInt(num1) - parseInt(num2));
    document.write("<br/> ");
    document.write("La división es: ");
    document.write(parseInt(num1) / parseInt(num2));
    document.write("<br/> ");
    document.write("La multiplicación es: ");
    document.write(parseInt(num1) * parseInt(num2));
    document.write("<br/> ");
    document.write("El módulo es: ");
    document.write(parseInt(num1) % parseInt(num2));

}
