/*
Ejercicio 1: Encontrar puntos totales en un juego de basketball
Hay valores de 2 puntos por canasta y 3 por canasta. Escribe una función que reciba el número de canastas de 2 puntos y de 3 puntos y retorne el puntaje total.
---*/
const totalPoints = (double, triple) => (double*2) + (triple*3);


console.log("El total de puntos es", totalPoints(5,3));

/*Ejercicio 2: Encontrar cuántas patas de animales hay en total
Escribe una función que reciba el número de gallinas, vacas y cabras y retorne el total de patas.
---*/


     



/*Ejercicio 3: Encontrar cantidad de FPS dados minutos
Escribe una función que reciba la cantidad de minutos y retorne la cantidad de fotogramas por segundo (FPS) considerando que 1 segundo = 60 FPS.
---*/

const totalFPS = (min) => min * 60 * 60;
console.log(totalFPS(1)); //3600



/*Ejercicio 4: Convertir un ángulo en radianes a grados
Escribe una función que acepte un ángulo en radianes y retorne el ángulo en grados.
---*/


function calcRadToDegree(rad) {
    return rad * (180/Math.PI)
}
console.log(calcRadToDegree(Math.PI/2)); //90


/*Ejercicio 5: Encontrar la población de la tierra en 3 décadas a partir de cantidad de personas
Escribe una función que reciba la población inicial y la tasa de crecimiento anual y retorne la población después de 30 años.
Toma en cuenta la tasa de incremento anual 
---*/

function calcExpPopulation(initialPopulation, increaseRate) {
    const percentage = 1 + increaseRate /100; /**esto es po año, entonces falta calcular por la potencia a 30 años */
    console.log(percentage);
    const expectedRate = Math.pow(percentage, 30); /**Math
    Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.
    
    Math funciona con el tipo Number. No funciona con BigInt. */
    console.log(expectedRate);
    console.log(initialPopulation * expectedRate);
}

calcExpPopulation(500,4);


/*Ejercicio 6: Calcular Energía Cinética
Escribe una función que reciba la masa (m) y la velocidad (v) y retorne la energía cinética.
*/