const movies = ["intensamente","deadpool","harrypotter","saw","hercules","lalaland"];
/**===los 3 BUCLES PRINCIPALES SON FOR, WHILW, DO WHILE=== */
//FOR- Necesita saber, donde iniciamos, donde detenernos, qué paso.
for (let i = 0; i <= movies.length -1; i++)  /**Porque modificamos de === a <=, cuando usamos i y lo queremos comparar con la longitud, estos nunca van a ser iguales, entonces debemos colocar menor o igual lo cual si es verdadero para que inice el bucle y por eso agregamos también el -1. */
    {
    console.log( ` El indice actual es: ${i} ` );
    console.log( ` pelicula actual: ${movies[i]} ` );
}
/**===WHILE=== */
let index = 0; /**La declaración se hace afuera y la condición dentro. */
while(index <= movies.length -1) {
    console.log(` Pelicula actual: ${movies[index]}` );
    index++;
}

/**===forEach=== El método forEach() ejecuta la función indicada una vez por cada elemento del array. e es una función anónima */
movies.forEach((e) => console.log(e));

movies.forEach((movie) => {
    console.log(` Pelicula: ${movie}` );
});