
// 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.


let myFavoriteHero = "Hulk";


let H = "5";
let Y = "10";
let z = "x + 5";


//1.2 Crea una variable llamada x, asigna el valor 50 a ella.

let x = "50";










































//ejercicio 5 condicionales

//
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if (number1 === 10) {
    console.log('number1 es estrictamente igual a 10')
}


// Iteración 5.1
if (number2 / number1 == 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}
//Iteracion 5.2

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
}
// Iteracion 5.3

if (number3 != number1) {
    console.log("number3 es distinto number1");
}
// Iteración 5.4
if ((number3 * 5) == number1) {
    console.log("number3 por 5 es igual a number1");
}

// Iteración 5.5

if (((number3 * 5) == number1) && ((number1 * 2) == number2)) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

// Iteracion 5.6
if (((number2 / 2) == number1) || ((number1 / 5) == number3)) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// Ejercicio 6 Bucles

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let p = 0; p < 10; p++) {
    console.log(p)
}



//1.2  Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//cuando el resto del numero dividido entre 2 sea 0.

for (let p = 0; p < 10; p++) {
    if (p % 2 == 0) {
        console.log(p)
    }
}


/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.*/

for (let p = 0; p < 10; p++) {
    if (p < 9) {
        console.log("intentando dormir");


    }
    else {
        console.log("Dormido");
    }

}


