/** === (5) ARRAY OF MULTIPLES ===
 
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`. */
 
/**Acorde a las instrucciones, el primer número se refiere al número de referencia al que se le obtendrán los múltiplos; y el segundo término se refiere a la cantidad de primeros multiplos a obtener.*/

function arrayMultiples(number, length) { // Definimos una función que tome dos parámetros (number y length) y retorne un array que contenga los múltiplos de number hasta la longitud especificada por length.
    let multiples = []; //Declaramos un array vacío para almacenar los múltiplos.
    
    for (let i = 1; i <= length; i++) { // Utilizamos un bucle for para generar los múltiplos. Recordamos el método push, (El método push añade uno o más elementos al final de un array y devuelve la nueva longitud del array) para que en cada iteración, se calcule el múltiplo multiplicando 'number' por 'i' y se *AGREGUE* al array 'multiples'.
      multiples.push(number * i);
    }
        return multiples; //Finalmente queremos el arreglo que definimos como resultado en 'multiples'.
  }
  
  // Aplicación: 
  console.log(arrayMultiples(2, 10));  // Salida: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  console.log(arrayMultiples(17, 6));  // Salida: [17, 34, 51, 68, 85, 102]

/* === (6) POSITIVE DOMINANCE IN ARRAY === */
 
/* Write a function to determine if an array is positively dominant.
An array is positively dominant when the MAJORITY of its elements are positive.
 Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.*/
 
// La clave aquí es como definimos que la MAYORIA de los números dados en un arreglo es positivo. Para este ejercicio vamos a definir, que la mayoría sería más de la mitad.

function positiveDom(arr) {
    
    let positiveCount = 0; // Declaramos una variable que nos cuente la cantidad de elementos positivos. Le ponemos que inicia en cero, porque hasta este punto lleva 0 elementos contados.
    
    for (let i = 0; i < arr.length; i++) { //Hacemos la iteración para el conteo.
      if (arr[i] > 0) {
        positiveCount++; //Aquí es donde declaramos que cuando se cumpla la condición definida en el renglón anterior, se sume el número a la variable contador del inicio.
      }
    }
           return positiveCount > arr.length / 2; // Para el resultado, determinamos si la mayoría de los elementos son positivos diciendo que si los números recolectados en la variable positiveCount es mayor a la mitad del número de datos del arreglo.
  }
  
  // Aplicación:
  console.log(positiveDom([-1, -3, -5, 4, 6767]));  // Salida: false
  console.log(positiveDom([1, 2, 3, -4, -5]));      // Salida: true
  console.log(positiveDom([0, 1, -1, 1, 1]));       // Salida: true
  console.log(positiveDom([-1, -2, -3, -4, -5]));   // Salida: false

// === (7) ANTIPODAL AVERAGE ===
 
/* Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/
function antipodalAverage(arr) {
    
    let long = arr.length; // Declaramos una variable que determine la longitud del array
    
       if (long % 2 !== 0) {  // Seguimos las intrucciones: si la longitud es impar, eliminamos el elemento del medio con el método splice. Para definir lo que vamos a quitar, usamos Math.floor
      arr.splice(Math.floor(long / 2), 1);
    }
    // Math.floor devuelve el máximo entero menor o igual a un número, o sea, "redondea hacia abajo" el número más cercano.
    // Por ejemplo, si long es 7, long / 2 es 3.5 y Math.floor(3.5) es 3. Esto nos da el índice del elemento del medio.
    // NO OLVIDAR PARA LA PRÓXIMA: El primer argumento de splice es el índice en el que comenzar a eliminar elementos (en este caso, el índice del elemento del medio).El segundo argumento de splice es el número de elementos a eliminar (en este caso, 1). Esto es necesario porque, para poder dividir el array en dos partes iguales, necesitamos que la longitud del array sea par. Si el array tiene una longitud impar, eliminamos el elemento del medio para obtener una longitud par.*/
    
    let mid = arr.length / 2; // Dividimos el array en dos partes iguales.
    let firstPart = arr.slice(0, mid); //Método .slice: devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
    let secondPart = arr.slice(mid).reverse(); //Aquí cortamos desde la mitad pero después usamos el método reverse invierte el orden de los elementos en un array.
      
    let result = []; //Declaramos una variable que nos almacene el resultado para llamarlo al final.
    for (let i = 0; i < mid; i++) { //Sumamos cada número de la primera parte con el inverso correspondiente de la segunda parte
      let sum = firstPart[i] + secondPart[i];
      result.push(sum / 2); //Recordar el método push añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
    }
      return result;
  }
  
  // Aplicación:
  let array = [1, 2, 3, 5, 22, 6];
  console.log(antipodalAverage(array));  // Salida: [3.5, 12, 4]
  