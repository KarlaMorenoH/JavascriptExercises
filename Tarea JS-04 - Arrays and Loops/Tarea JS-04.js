/** ==== (1) SUM OF RESISTORS IN SERIES===
 
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
Note: This approach uses the absolute value of each resistance to ensure all values are positive. */

const sumResistance = (arr) => {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
      a += arr[i];
    };
    if (a === 1) {
      return a + " ohm";
    } else {
    return a + " ohms";
    }
  };
/**Para ([|-1|,5,6,3]) */
console.log(sumResistance([1, 5, 6, 3]));
/**Para ([14,3.5,6]) */
console.log(sumResistance([14, 3, 5, 6]));
/**Para ([8,15,100]) */
console.log(sumResistance([8,15,100]));

/** === (2) NUMBER DIVIDED INTO HALVES===
 
Given a number, return the number divided into its halves in an array.
 Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.*/

function findHalves(number) { // Definir una función que tome un número
  let half = number / 2; // Dividir el número en dos mitades
  return [half, half];   // Retornar un array con las dos mitades
}

// Aplicación:
let number = 4;
let halves = findHalves(number); //Declaramos una variable que almacenará mi resultado de la función dada para después pedirla en la consola.

console.log(halves);  // Salida: [5, 5]


/** === (3) SECRET SOCIETY===
 
Find the name of a secret society based on the first letter of each member's name.
 
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`. */

// Definir una función que tome una lista de nombres:
function findSecretSociety(members) {
    // Inicializar una variable para almacenar las primeras letras
    let secretName = '';
    
    // Iterar sobre cada miembro en la lista; 
    for (let i = 0; i < members.length; i++) { 
      secretName += members[i][0]; 
    }
        // Retornar el nombre de la sociedad secreta con la variable que definimos al inicio:
    return secretName;
  }
  
  // Aplicación:
  let members = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
  let secretSocietyName = findSecretSociety(members);
  
  console.log(secretSocietyName);  // Salida: PRCJMR

  /** ==MODO SIMPLIFICADO */
  function findSecretSociety(names) {
    return names.map(name => name[0]).join('');
  }
  
  // Aplicación:
  let names = ['Harry', 'Ron', 'Hermione', 'Karla'];
  let secretSocietyNames = findSecretSociety(names);
  
  console.log(secretSocietyNames);  // Salida: HRHK

  /** === (4) ONLINE STATUS ===
 
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`. */

function onlineStatus(users) {
  
  if (users.length === 0) { // Si no hay usuarios en línea
    return 'No users online';
  }

    if (users.length === 1) { // Si hay un solo usuario en línea, debe aparecer el del primer índice (0).
    return `${users[0]} online`;
  }

   if (users.length === 2) {  // Si hay dos usuarios en línea
    return `${users[0]} and ${users[1]} online`;
  }

  // Como la tarea dice que arrojemos los dos primeros usuarios más el número extra después de estos, usamos el método length en el arreglo de usuarios y le restamos 2, para indicar cuántos usuarios adicionales hay después de los "dos primeros".
  return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
}

// Aplicación:
let users = ['mockIng99', 'J0eyPunch','glassedFer', 'Karla'];
let status = onlineStatus(users);

console.log(status);  // Salida: 'mockIng99, J0eyPunch and 2 more online'