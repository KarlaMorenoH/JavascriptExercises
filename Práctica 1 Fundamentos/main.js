/**Este es mi primer arhivo JS
 * comentario multilinea
 */
//*Comentario de una sola línea.
//* Vamos a hacer ejemplos de los diferentes tipos de datos.

//* ===Strings
let nombre = "Karla"; // Declaración de una variable de tipo cadena de texto
console.log (nombre); //* método estático envía un mensaje a la consola.
//*Booleanos
//Declaración de variables de tipo booleano
let esMayorDeEdad = true
let esMenorDeEdad = false
//Mostramos los valores booleanos en la consola
console.log (esMayorDeEdad); //Salida true
console.log (esMenorDeEdad); //Salida false
//Números
//Declarar una variable de tipo número
let edad = 28;
//Realizamos una operación matemática
let dobleEdad = edad * 2;
//Mostramos resultados en consola
console.log (edad); //salida:28
console.log (dobleEdad); // salida: 56

//*Matrices o arrays
//Declaración de una matriz o array
let frutas = ["Mango", "Durazno", "Plátano","Uvas", "Manzanas"]
//Accedemos a los elementos del array
console.log(frutas[0]);//salida=mango
console.log(frutas[2]); //salida=plátano
console.log(frutas[3]); //salida = uvas

//*Objetos
//Declaración de un objeto
let persona = {
    nombre: "Gaby",
    edad: 18, 
    esEmpleada: true //*Aquí ya no ponemos coma porque ya no hay más valores, entonces cerramos las instrucciones con ; después del corchete.
};
//Accedemos a los elementos del objeto
console.log (persona.nombre);
console.log (persona.edad);
console.log (persona.esEmpleada);

//*Indefinido (undefined) y nulo (null)
//Declaramos las variables 
let indefinido;
let valorNulo = null

console.log(indefinido); //Mostramos en la consola.
console.log(valorNulo);
/*
*Convenciones de Variables: Usa nombres descriptivos, notación camel case, evita palabras reservadas y mantén un estilo consistente.
*Encasillamiento: Es el proceso de convertir un tipo de dato a otro, importante para manipular datos de maneras diferentes según lo necesites.
*/
/*Convertir una variable de tipo numérico en uno de tipo string con el operador + */
let cadena = "123";
let numero = Number(cadena);
//Mostrar en consola
console.log(cadena + 1); //Salida=1231
console.log(numero);
console.log(typeof numero); //salida: number
//*Explicación: La función Number(cadena) convierte el valor de la variable cadena a un número. Si la cadena no puede ser convertida a un número, devolverá NaN (Not-a-Number).

/* Tipo cadena: para convertir una variable  a una cadena de texto usamos la función string */
let numero2 = 123;
let cadena2 = String (numero2);

console.log(cadena2);
console.log(typeof cadena2);
//*Explicación: La función string convierte el valor de la variable número a una cadena de texto o tipo string.

/* Tipo Booleano: para convertir una variable a tipo booleano podemos usar la función Boolean o una doble negación <!!> */

let num = 2;
let booleano = Boolean (num);
//Vemos en la consola
console.log(Boolean);
console.log (!!num); // true
console.log(typeof booleano);

//*Explicación: La función Boolean(numero) convierte el valor de la variable numero a un booleano. Cualquier valor distinto de 0, null, undefined, NaN, o una cadena vacía se convierte en true.

/*
*Convertir a Número: Number(variable) o +variable
*Convertir a Cadena: String(variable) o variable.toString()
*Convertir a Booleano: Boolean(variable) o !!variable
*Estos métodos son muy útiles cuando necesitas asegurarte de que tus variables son del tipo de dato correcto para tus operaciones.
*/


