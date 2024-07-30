//FUNCIONES
//1.Declara una función llamada saludar que muestre en la consola "Hola, mundo!" cuando se llame. Ejecutarla.
function saludar(){
    return("Hola, mundo!")
}
console.log(saludar())

//2.Declara una función llamada despedirse que muestra en la consola "Adiós, mundo!" y llámala. Ejecutarla.
function despedirse(){
    return("Adios, mundo!")
}
console.log(despedirse())

//3.Declara una función llamada calcularCuadrado que acepte un número como parámetro y devuelva el cuadrado de ese número. Ejecutarla.
function calcularCuadrado(numero){
    return(numero + numero)
}
console.log(calcularCuadrado(2))

//4.Escribir una funcion llamada minutosAHoras que reciba un número entero de minutos como parámetro, y devuelva un número representando la misma cantidad de tiempo pero en horas. 
function minutosAHoras(minutes){
    return(minutes/60)
}
console.log(minutosAHoras(30))

//5.Declara una función llamada saludarPersona que acepte un parámetro nombre y muestre en la consola "Hola, " seguido del nombre.
function saludarPersona(nombre){
    return("Hola, " + nombre)
}
console.log(saludarPersona("Joaquin"))

//6.Declara una función llamada sumarNumeros que acepte dos números como parámetros y devuelva su suma.
function sumarNumeros(num1, num2){
    return(num1 + num2)
}
console.log(sumarNumeros(1,2))

//7.Declara una función llamada multiplicarNumeros que acepte tres números como parámetros y devuelva su producto.
function multiplicarNumeros(number1, number2, number3){
    return(number1* number2*number3)
}
console.log(multiplicarNumeros(2,2,2))

//8.Escribir una funcion que se llame concatenar3, que reciba 3 strings como parametros. Definir dentro de la funcion una variable que se llame separador. La funcion debe devolver un solo string, concatenando los 3 ingresados como parametro y separados por el separador. 
function concatenar3(saludo, profesion, nombre){
    separador = " "
    return(saludo + separador + profesion + separador + nombre)
}
console.log(concatenar3("Hola","ingeniero","Pedro"))

//9.Escribir una funcion llamada promedioDeCuatroNumero, que reciba 4 numeros como parametros y devuelva el promedio de los numeros introducidos.
function promedioDeCuatroNumero(num1, num2, num3, num4){
    return((num1 + num2 + num3 + num4)/4)
}
console.log(promedioDeCuatroNumero(4,5,4,5))

//10.Declara una función llamada presentarPersona que acepta dos parámetros, nombre y edad, y muestre en la consola "Mi nombre es [nombre] y tengo [edad] años."
function presentarPersona(nombre, edad){
    return("Mi nombre es " + nombre + " y tengo " + edad + " años")
}
console.log(presentarPersona("Agustin" , 18))

//11.Declara una función llamada areaRectangulo que acepte dos parámetros, ancho y alto, y devuelva el área del rectángulo. Comprobarlo asignando la función a una variable, y mostrando en consola el valor de la misma.
function areaRectangulo(ancho,alto){
    let calculo = ancho * alto
    return(calculo)
}
console.log(areaRectangulo(2, 3))

//12.Declara una función llamada calcularPropina que acepte un número como parámetro y devuelva la cantidad de propina a dejar en base a cuanto salió el total de la comida. Comprobarlo asignando la función a una variable y mostrando en consola el valor de la misma. 
function calcularPropina(total){
    let totalAPagar = ((20*total)/100) + total
    return(totalAPagar)
}
console.log(calcularPropina(100))

//13.Declara una función llamada calcularSalario que acepta dos parámetros, horasTrabajadas y tarifaPorHora, y devuelva el salario calculado.   
function calcularSalario(horasTrabajadas,tarifaPorHora){
    return("$" + horasTrabajadas * tarifaPorHora)
}
console.log(calcularSalario(10, 8))

//14.Declara una función llamada calcularDescuento que acepte un parámetro precioOriginal. La función debe declarar una variable descuento con un valor de 0.1 (10%). Luego, calcula el precio con descuento y devuelve el resultado.
function calcularDescuento(precioOriginal){
    let descuento = precioOriginal - ((10*precioOriginal)/100)
    return("$" + descuento) 
}
console.log(calcularDescuento(100))

//15.Declara una función llamada evaluarNumero que acepte un parámetro num. La función debe devolver "positivo" si el número es mayor que 0, "negativo" si es menor que 0, y "cero" si es exactamente 0.
function  evaluarNumero(num){
    if (num > 0){
        return("positivo")
    }
    else if(num < 0){
        return("negativo")
    }
    else{
        return("cero")
    }
}
console.log(evaluarNumero(1))

//16.Declara una función llamada evaluarEdad que acepte un parámetro edad. La función debe devolver "Menor de edad" si la edad es menor de 18, y "Mayor de edad" si es 18 o mayor.
function evaluarEdad(edad){
    if (edad < 18){
        return("Menor de edad")
    }
    else{
        return("Mayor de edad")
    }
}
console.log(evaluarEdad(18))

//17.Declara una función llamada esPar que acepte un número como parámetro. Si el número es par, debe mostrar en la consola "El número es par". Si es impar, debe mostrar "El número es impar".
function esPar(num){
    if (num%2 == 0){
        return("Es par")
    }
    else{
        return("Es impar")
    }
}
console.log(esPar(2))

//18.Declara una función llamada compararNumeros que acepte dos números como parámetros. La función debe mostrar en la consola cuál de los dos números es mayor o si son iguales.
function compararNumeros(num1, num2){
    if (num1 < num2){
        return("El numero mayor es: " + num2)
    }
    else if (num1 > num2){
        return("El numero mayor es: " + num1)
    }
    else{
        return("Son iguales")
    }
}
console.log(compararNumeros(1,2))

//19.Declara una función llamada sumaEsPar que acepte dos números como parámetros. La función debe mostrar en la consola si la suma de los dos números es par o impar.
function sumaEsPar(num1,num2){
    let suma = num1 + num2
    if (suma%2 == 0){
        return("La suma es par")
    }
    else{
        return("La suma es impar")
    }
}
console.log(sumaEsPar(2,2))

//20.Declara una función llamada ambosPositivos que acepte dos números como parámetros. La función debe mostrar en la consola si ambos números son positivos, si solo uno es positivo, o si ninguno es positivo.
function ambosPositivos(num1,num2){
    if (num1>0 && num2>0){
        return("Ambos numeros son positivos")
    }
    else if (num1<0 && num2<0){
        return("ninguno es positivo")
    }
    else{
        return("Solo uno es positivo")
    }
}
console.log(ambosPositivos(1,-2))

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
    return(impuesto)
}
console.log(calcularImpuesto(5000))

//22.Declara una función llamada clasificarNota que acepte un parámetro nota. Si la nota es 90 o más, devuelve "A". Si es entre 80 y 89, devuelve "B". Si es entre 70 y 79, devuelve "C". Si es entre 60 y 69, devuelve "D". Si es menor de 60, devuelve "F".
function clasificarNota(nota){
    if(nota>=90){
        return("A")
    }
    else if(nota>=80 && nota<=89){
        return("B")
    }
    else if(nota>=70 && nota<=79){
        return("C")
    }
    else if(nota>=60 && nota<=69){
        return("D")
    }
    else{
        return("F")
    }
}
console.log(clasificarNota(69))