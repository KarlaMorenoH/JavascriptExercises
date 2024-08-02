const meals = ["tiramisu","ramen","pizza","hamburguesa","tacos"]; /**IMPORTANTE!!! Los arrays se declaran con corchete [] y no con parébtesis () */

/**===MÉTODOS=== */

console.log(meals.length); /**Aquí indicamos que nos diga el número de objetos que tenemos */
console.log(meals.indexOf("ramen")); /**Aquí pedimos que nos indique en qué posición del índice se encuentra el objeto que pedi*/
console.log(meals.toString()); /**Con este te arroja los valores del las cadenas de textos asociadas a la variable */
console.log(meals.pop()); /**Lo que hace pop es quitar el último elemento y regresa el elemento que quitó como segunda acción */
console.log(meals);

console.log(meals.push("hotdog")); /**El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array. */
console.log(meals);

console.log(meals.slice(0,2)); /**El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará pero exluye el último valor dado. || Por ejemplo, aqui pedi del indice 0 al 2, pero corta el 2*/
console.log(meals.slice(0,3)); /**Aqui le pedi que corte del 0 al 3, pero ya no me devuelve el 3 y asi. */
console.log(meals.slice(1,4));


const movies = ["intensamente","deadpool","harrypotter","saw","hercules","lalaland"]
movies.splice(3,2, "planeta del tesoro", "toystory");
console.log(movies); /**El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. Este método si modifica el array original. Es un método para limpiar datos*/

movies.shift();
console.log(movies); /**El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array. */