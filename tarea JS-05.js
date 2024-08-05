// USER PROFILE
function getUserProfile() {
    let username = prompt("Enter your username:");
    let age = prompt("Enter your age:");
    let movies = prompt("Enter your favorite movies, separated by commas:");

    let favoriteMovies = movies.split(",").map(movie => movie.trim()); //El trim()método de Stringvalores elimina los espacios en blanco de ambos extremos de esta cadena y devuelve una nueva cadena, sin modificar la cadena original.

    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
    console.log("Favorite Movies:");
    favoriteMovies.forEach(movie => {
        console.log(`The film ${movie} is one of my favorites`);
    });
}

getUserProfile();

// HIGHEST NUMBER

function findHighestNumber() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        let number = parseFloat(prompt(`Enter number ${i + 1}:`));
        numbers.push(number);
    }

    let highestNumber = Math.max(...numbers); // El Math.max()método estático devuelve el mayor de los números dados como parámetros de entrada, o - Infinitysi no hay parámetros.
    console.log(`The highest number is: ${highestNumber}`);
}

findHighestNumber();

// ALARM!!!

function setAlarm() {
    let seconds = parseInt(prompt("Enter the number of seconds until the alarm:"));
    let message = prompt("Enter the message to display when the alarm goes off:");

    setTimeout(() => {
        console.log(`Time for bed after ${seconds} seconds: ${message}`);
    }, seconds * 1000);
}

setAlarm();

// PALINDROME: pendiente terminar

function isPalindrome() {
    let input = prompt("Enter a word or sentence:");
    
    let reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        console.log("The input is a palindrome.");
    } else {
        console.log("The input is not a palindrome.");
    }
}

isPalindrome();

// FACTORIAL

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function getFactorial() {
    let n = parseInt(prompt("Enter an integer number (1 <= n):"));
    if (n >= 1) {
        console.log(`The factorial of ${n} is: ${factorial(n)}`);
    } else {
        console.log("Please enter a number greater than or equal to 1.");
    }
}

getFactorial();

// FLAT ARRAY

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
let flatArray = flattenArray(multiDimension);

console.log(flatArray);
