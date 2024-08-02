/**Declaración de variable */

//*let tuNombre = prompt("¿Cuál es tu nombre?");
/*console.log("Hola," + tuNombre + "!"); */

/* 
*La función prompt() en JavaScript se utiliza para mostrar un cuadro de diálogo que solicita al usuario que ingrese algún tipo de información. Esta función se usa comúnmente para recoger datos de entrada del usuario durante la ejecución de un script en el navegador.

 */
/*
*Control de flujo y estructuras de control
*
*Las estructuras de control son un componente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar codigo, podemos mencionar las siguientes:

*- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar que instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
*/
//ESTRUCTURAS SECUENCIALES. Se refiere a la ejecución de secuencia una tras otra*/
let nombre = "Karla";
let anos = 28;
console.log("Hola, mi nombre es " + nombre + " y tengo " + anos + " años"); 
//*Otro ejemplo
/*let edad = prompt("¿Cuántos años tienes?", "28");
//*Verificar que el usuario no ha cancelado el prompt, declarando que si el dato de tu edad es indefinido o no se coloca, le mande otro mensaje:

/*if (edad !== null) {
    console.log("Tienes " + edad + " años");
} else {
    console.log("No ingresaste tu edad");
}

//**ESTRUCTURA IF-ELSE */
/*
 * Declaración de sentencia if-else
*Palabra reservada if para comenzar la declaración, se coloca un parentesis () donde se debe colocar una expreción logica (true| false), se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condicion se cumple (true),
*despues de la llave {} declarada para el bloque de ejecuacion if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresionesdentro de un ()
*simplemente colocamos otras llaves {} para indicar el bloque de codigo que tiene que ser ejecutado en caso de que la condicon no se cumpla (false). 
 */

let hora = 14;
if (hora < 12) {
    console.log("Buenos días");
     } else {
        console.log("Buenas tardes");
     }
/**La estructura condicional if-else, permite ejecutar un bloque de código si se cumple una condición y otro bloque de código si la condición no se cumple. */

let k = 25;
if (k > 20) {
    console.log(true);
} else {
    console.log(false);
}

/* SENTENCIAS ANIDADAS
 * if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
 */

let edad = 68;
if (edad < 18) {
    console.log("Atrapadoooo");
} else if (edad >= 18 && edad < 65) {
    console.log("Bienvenido a la fiesta");
} else {
    console.log("Bienvenida toma un Ensure");
}
/*
*Sentencia switch
*La sentencia switch es otro tipo de estructura de control de flujo, que, nuevamente se encuentra en diversos lenguajes de programacion.
*Es bastante parecida al a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcacion (particion de caminos), sino que se secciona en multiples casos (case) que, dependiendo de la expresion que cumpla con un caso especifico, sera la secuencia que se va a ejecutar, dentro de la declaración. 

* Declaracion:
* se empieza por colocalr la palabra reservada switch, seguido de esto, colocamos parentesis () donde se debe colocar el valor que va indicar que sentencia/caso a ejecutar.
*Falta indicar el bloque de codigo que se limita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.
*Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee, establecer segun sea el valor indicado dentro de el parentesis ().
*Cada uno de estos casos se separa de la siguiente manera:
* case valor : instrucción a ejecutar si el valor empata con este caso.
*Despues, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instruccion 
*break. 
*Cuando terminemos de establecer los casos que necesitemos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
* Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocaldo no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
* default : mensaje no disponible.
*/
let dia = "domingo";
switch (dia) {
    case "lunes":
        console.log("Qué weba es lunes");
        break;
    case "martes":
        console.log("Ya desperté!");
        break;
    case "miercoles":
        console.log("miercoles con m de mejor me mimo");
        break;
    case "jueves":
        console.log("ya es juebebes");
        break;
    case "viernes":
        console.log("Ya es vierneeees, wuuuuh!");
        break;   
        default:
            console.log("Ya llevame diosito");
            break;
} //Termina el switch

//*switch con prompt

/*let gustos = prompt ("¿Qué prefieres? Elige del 1 al 3");
gustos = parseInt (gustos); /**Descripción. parseInt es una función de alto nivel y no está asociada a ningún objeto. La función parseInt comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada.  */

/*switch (gustos) {
    case 1:
        console.log("Te gustan los chilaquiles verdes");
        break;
    case 2:
        console.log("Te gustan las hamburguesas");
        break;
    case 3:
        console.log("Te gusta la comida italiana");
        break;
    default:
        console.log("No elegiste ninguna de las opciones");
        break;
} //*Termina el switch con el prompt.

//*OPERADORES TERNARIOS
/*
* Los operadores lógicos se utilizan en expresiones condicionales para combinar o modificar múltiples condiciones y controlar el flujo del programa de manera más compleja. Los operadores lógicos más comunes en JavaScript son && (AND), || (OR) y ! (NOT). 
*/

//*Operador && (AND) y ! (NOT):
/*
*Este operador devuelve true si ambas condiciones son verdaderas, de lo contrario, devuelve false.
*/
let a = 28;
let esEstudiante = false;
if ( a >= 18 && !esEstudiante) {
    console.log("Eres mayor de edad y no eres estudiante");
} else {
    console.log("No eres mayor de edad o eres estudiante");
}
/*
*OPERADOR || (OR):
*Este operador devuelve true si al menos una de las condiciones es verdadera, de lo contrario, devuelve false.
*/
let date = "saturday";
if ( date === "saturday" || date === "sunday") {
    console.log("Its weeknd")
} else {
    console.log("Its workday :c");
} /* Recordar que === es para verificar que sea el mismo dato incluyendo el tipo y || es para o (or) */
