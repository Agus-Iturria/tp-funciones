//FUNCIONES
//1.Declara una función llamada saludar que muestre en la consola "Hola, mundo!" cuando se llame. Ejecutarla.
function saludar(){
    console.log("Hola, mundo!")
}
saludar()

//2.Declara una función llamada despedirse que muestra en la consola "Adiós, mundo!" y llámala. Ejecutarla.
function despedirse(){
    console.log("Adios, mundo!")
}
despedirse()

//3.Declara una función llamada calcularCuadrado que acepte un número como parámetro y devuelva el cuadrado de ese número. Ejecutarla.
function calcularCuadrado(numero){
    console.log(numero + numero)
}
calcularCuadrado(2)

//4.Escribir una funcion llamada minutosAHoras que reciba un número entero de minutos como parámetro, y devuelva un número representando la misma cantidad de tiempo pero en horas. 
function minutosAHoras(minutes){
    console.log(minutes/60)
}
minutosAHoras(30)

//5.Declara una función llamada saludarPersona que acepte un parámetro nombre y muestre en la consola "Hola, " seguido del nombre.
function saludarPersona(nombre){
    console.log("Hola, " + nombre)
}
saludarPersona("Joaquin")

//6.Declara una función llamada sumarNumeros que acepte dos números como parámetros y devuelva su suma.
function sumarNumeros(num1, num2){
    console.log(num1 + num2)
}
sumarNumeros(1,2)

//7.Declara una función llamada multiplicarNumeros que acepte tres números como parámetros y devuelva su producto.
function multiplicarNumeros(number1, number2, number3){
    console.log(number1* number2*number3)
}
multiplicarNumeros(2,2,2)

//8.Escribir una funcion que se llame concatenar3, que reciba 3 strings como parametros. Definir dentro de la funcion una variable que se llame separador. La funcion debe devolver un solo string, concatenando los 3 ingresados como parametro y separados por el separador. 
function concatenar3(saludo, profesion, nombre){
    separador = " "
    console.log(saludo + separador + profesion + separador + nombre)
}
concatenar3("Hola","ingeniero","Pedro")

//9.Escribir una funcion llamada promedioDeCuatroNumero, que reciba 4 numeros como parametros y devuelva el promedio de los numeros introducidos.
function promedioDeCuatroNumero(num1, num2, num3, num4){
    console.log((num1 + num2 + num3 + num4)/4)
}
promedioDeCuatroNumero(4,5,4,5)

//10.Declara una función llamada presentarPersona que acepta dos parámetros, nombre y edad, y muestre en la consola "Mi nombre es [nombre] y tengo [edad] años."
function presentarPersona(nombre, edad){
    console.log("Mi nombre es " + nombre + " y tengo " + edad + " años")
}
presentarPersona("Agustin" , 18)

//11.Declara una función llamada areaRectangulo que acepte dos parámetros, ancho y alto, y devuelva el área del rectángulo. Comprobarlo asignando la función a una variable, y mostrando en consola el valor de la misma.
function areaRectangulo(ancho,alto){
    let calculo = ancho * alto
    console.log(calculo)
}
areaRectangulo(2, 3)

//12.Declara una función llamada calcularPropina que acepte un número como parámetro y devuelva la cantidad de propina a dejar en base a cuanto salió el total de la comida. Comprobarlo asignando la función a una variable y mostrando en consola el valor de la misma. 
function calcularPropina(total){
    let totalAPagar = ((20*total)/100) + total
    console.log(totalAPagar)
}
calcularPropina(100)

//13.Declara una función llamada calcularSalario que acepta dos parámetros, horasTrabajadas y tarifaPorHora, y devuelva el salario calculado.   
function calcularSalario(horasTrabajadas,tarifaPorHora){
    console.log("$" + horasTrabajadas * tarifaPorHora)
}
calcularSalario(10, 8)

//14.Declara una función llamada calcularDescuento que acepte un parámetro precioOriginal. La función debe declarar una variable descuento con un valor de 0.1 (10%). Luego, calcula el precio con descuento y devuelve el resultado.
function calcularDescuento(precioOriginal){
    let descuento = precioOriginal - ((10*precioOriginal)/100)
    console.log("$" + descuento) 
}
calcularDescuento(100)

//15.Declara una función llamada evaluarNumero que acepte un parámetro num. La función debe devolver "positivo" si el número es mayor que 0, "negativo" si es menor que 0, y "cero" si es exactamente 0.
function  evaluarNumero(num){
    if (num > 0){
        console.log("positivo")
    }
    else if(num < 0){
        console.log("negativo")
    }
    else{
        console.log("cero")
    }
}
evaluarNumero(1)

//16.Declara una función llamada evaluarEdad que acepte un parámetro edad. La función debe devolver "Menor de edad" si la edad es menor de 18, y "Mayor de edad" si es 18 o mayor.
function evaluarEdad(edad){
    if (edad < 18){
        console.log("Menor de edad")
    }
    else{
        console.log("Mayor de edad")
    }
}
evaluarEdad(18)

//17.Declara una función llamada esPar que acepte un número como parámetro. Si el número es par, debe mostrar en la consola "El número es par". Si es impar, debe mostrar "El número es impar".
function esPar(num){
    if (num%2 == 0){
        console.log("Es par")
    }
    else{
        console.log("Es impar")
    }
}
esPar(2)

//18.Declara una función llamada compararNumeros que acepte dos números como parámetros. La función debe mostrar en la consola cuál de los dos números es mayor o si son iguales.
function compararNumeros(num1, num2){
    if (num1 < num2){
        console.log("El numero mayor es: " + num2)
    }
    else if (num1 > num2){
        console.log("El numero mayor es: " + num1)
    }
    else{
        console.log("Son iguales")
    }
}
compararNumeros(1,2)

//19.Declara una función llamada sumaEsPar que acepte dos números como parámetros. La función debe mostrar en la consola si la suma de los dos números es par o impar.
function sumaEsPar(num1,num2){
    let suma = num1 + num2
    if (suma%2 == 0){
        console.log("La suma es par")
    }
    else{
        console.log("La suma es impar")
    }
}
sumaEsPar(2,2)

//20.Declara una función llamada ambosPositivos que acepte dos números como parámetros. La función debe mostrar en la consola si ambos números son positivos, si solo uno es positivo, o si ninguno es positivo.
function ambosPositivos(num1,num2){
    if (num1>0 && num2>0){
        console.log("Ambos numeros son positivos")
    }
    else if (num1<0 && num2<0){
        console.log("ninguno es positivo")
    }
    else{
        console.log("Solo uno es positivo")
    }
}
ambosPositivos(1,-2)

//21.Declara una función llamada calcularImpuesto que acepte un parámetro ingreso. Si el ingreso es menor de 10000, el impuesto es del 10%. Si es entre 10000 y 20000, el impuesto es del 15%. Si es mayor de 20000, el impuesto es del 20%. La función debe devolver el valor del impuesto.
function calcularImpuesto(ingreso){
    let impuesto = 0
    if (ingreso < 10000){
        impuesto = ((10*ingreso)/100)
    }
    else if(ingreso>=10000 && ingreso<=20000){
        impuesto = ((15*ingreso)/100)
    }
    else{
        impuesto = ((20*ingreso)/100)
    }
    console.log(impuesto)
}
calcularImpuesto(5000)

//22.Declara una función llamada clasificarNota que acepte un parámetro nota. Si la nota es 90 o más, devuelve "A". Si es entre 80 y 89, devuelve "B". Si es entre 70 y 79, devuelve "C". Si es entre 60 y 69, devuelve "D". Si es menor de 60, devuelve "F".
function clasificarNota(nota){
    if(nota>=90){
        console.log("A")
    }
    else if(nota>=80 && nota<=89){
        console.log("B")
    }
    else if(nota>=70 && nota<=79){
        console.log("C")
    }
    else if(nota>=60 && nota<=69){
        console.log("D")
    }
    else{
        console.log("F")
    }
}
clasificarNota(69)