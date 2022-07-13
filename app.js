
//---------------Iteración #1: Variables-----------------
// 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavoriteHero = "Hulk";


//1.2 Crea una variable llamada x, asigna el valor 50 a ella.
let x = "50";


//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
let H = "5";
let Y = "10";

//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = "x + 5";


//-------------Iteración #2: Variables avanzadas-------------

/*1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};*/

const character = { name: 'Jack Sparrow', age: 10 };
console.log(character);
character.age = 25;
console.log(character);


/*1.2 Declara 3 variables con los nombres y valores siguientes 
    firstName = 'Jon'; 
    lastName = 'Snow'; 
    age = 24; 
Muestralos por consola de esta forma: 
    'Soy Jon Snow, tengo 24 años y me gustan los lobos.' */
let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log("Soy" + " " + firstName + " " + lastName + " , " + "tengo" + " " + age + " años y me gustan los lobos");

// se puede hacer de las dos formas
//console.log(`soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`);






/*1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.*/
const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };
console.log("total price", toy1.price + toy2.price);




/*1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.*/
let globalBasePrice = 10000;
const car1 = {
    name: 'BMW m&m',
    basePrice: 50000,
    finalPrice: 60000
};

const car2 = {
    name: 'Chevrolet Corbina',
    basePrice: 70000,
    finalPrice: 80000
};



//-------------Iteración #3: Operadores-------------------

//1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
let Multiplicación = 10 * 5;
console.log(Multiplicación);


//1.2 Divide 10 por 2 y muestra el resultado en un console.
let división = 10 / 2;
console.log(división);
















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


