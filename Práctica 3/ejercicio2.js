/*
* === Ejercicios ===
 *Ejercicio 1: Números Pares e Impares
Instrucciones:
Escribe un programa que solicite al usuario un número y determine si es par o impar.

/**====RESOLUCIÓN DE EJERCICIOS */
/**Ejercicio 1 */
let numPar = 13;
if (numPar % 2 === 0 ) {
    console.log("el número ", numPar, " es par");
     } else {
        console.log("el número ", numPar, " no es par");
     }


/*Ejercicio 2: Calcular la Suma de Números del 1 al N
Instrucciones:
Escribe un programa que solicite al usuario un número N y calcule la suma de todos los números del 1 al N.*/

let numberN = 6;

if (numberN <= 0) {
    console.log("número inválido");
} else {
    let sumatoria = 0;
    for (let i = 1; i <= numberN; i++) {
        sumatoria += i;
        console.log("El resultado de la sumatoria es " + sumatoria);
    }
}



/*Ejercicio 3: Tabla de Multiplicar
Instrucciones:
Escribe un programa que solicite al usuario un número y muestre su tabla de multiplicar del 1 al 10.*/

let num2 =3;
num2 = parseInt = (num2);

if (num2 <= 10) {
    for (let i=1; i<=10; i++) {
        console.log(num2 + "x" + i + "=" + (num2*i));
    }
} else {
    console.log("ingresa un número entre 1 y 10");
}



/*Ejercicio 4: Calificaciones
Instrucciones:
Escribe un programa que solicite al usuario una calificación (un número entre 0 y 100) y muestre la letra correspondiente según la siguiente escala:

90-100: A
80-89: B
70-79: C
60-69: D
0-59: F
*/


/**SOLUCIÓN Ejercicio 4 */

let numCien = 56;
numCien = parseInt = (numCien);
    switch (numCien) {
        case 1: (numCien >= 90 && numCien <= 100);
            console.log("A");
            break;
                case 2: (numCien >= 80 && numCien <= 89);
            console.log("B");
            break;
                case 3: (numCien >= 70 && numCien <= 79);
            console.log("C");
            break;
                case 4:(numCien >= 60 && numCien <= 69);
            console.log("D");
            break;
                case 5: (numCien >= 0 && numCien <= 59);
            console.log("E");
            break;
                default: 
            console.log("No colocó un número dentro del rango");
            break;
    }
    


