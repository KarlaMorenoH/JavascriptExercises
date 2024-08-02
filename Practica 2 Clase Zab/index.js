console.log("Holi");

//Declaración
function showMessage() {
    console.log("Hola");
}

//Invocación
showMessage();

//Parámetros
function showMessage(x) {
    console.log(x);
}

//ARgumentos
showMessage("Argumento y parametro");
////////////////////////////
//Scope


//Return
function calcTotal(x,y) {
    const total = x + y;
    return total;
}

function makePayment(total) {
    console.log("You are paying", total)
}

const res = calcTotal(100,150);
makePayment(res);
makePayment(calcTotal(5,10));
console.log(res);


function calcCelcius(fahr) {
    const c =(fahr - 32) * 5 / 9;
    return c;
}
console.log(calcCelcius(102));

function calcCelcius2(fahr) {
    return `Los grados F ${fahr}  equivale a ${(fahr -32) * 5 / 9} c`;

    //concateno con el texto con los corchetes usando $*/ 
    //Uso `` para describir aquí, sino, no me da la nomclatura que quiero.
}
console.log(calcCelcius(102))
console.log(calcCelcius2(102))
/////////////////////////////
//arrow function
//lambda functions

const calCelArrow = (fahr) => (fahr - 32) * 5 / 9; //Función flecha, se usa cuando no usamos la palabra return, tienen por default que lo que va a después de la flecha es una valor que se va a regresar. Se usa cuando solo hay un parámetro podemos evitar el uso de paréntesis. Es por buena práctica usar ;, pero en las versiones recientes de JS se pueden omitir sin que generen una falla.
