/**Callback para calculadora. Tiene que ver con fucniones flecha */
// Callback: es una fucnión cuyo propósito es ser un argumento de otra función. f(x) ==> f(f(y))
//Crear una funcion que tome los siguientes parámetros
// x , y : num
// operation: string
// callback: funct();
// Entonces: debemos ejecutar la operación a partir de los 2 numeros y hacer uso de la fucnión callback para mostrar el resultado.


function calc(x,y,operation,callback) {
    let result;

    switch(operation) {
        case 'add':
            result = x + y;
            break;
        case 'multiply':
            result = x * y;
            break;
        default:
            result = "Invalid operation";
    }
callback(result); // Usamos la función de los parámetros que es la de abajo.
}
//callback
function displayResult(value) {
    console.log(value);
}

calc(5,3,"add",displayResult); // salida: 8
calc(3,10,"power", displayResult); // Salida: Invalid operation

// setTimeOut: El método global setTimeout()establece un temporizador que ejecuta una función o un fragmento de código específico una vez que el temporizador expira.

function getUser() {
    console.log(`Welcome ${user}`);
}

setTimeout(getUser, 3000)
console.log("Wating info..."); //https://developer.mozilla.org/es/docs/Web/API/setTimeout
