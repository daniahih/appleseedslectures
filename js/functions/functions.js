// Functions are reusable blocks of code that perform a specific task. They allow you to encapsulate logic and execute it whenever needed, making your code more modular and easier to maintain. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.,
function sayHello() {
    console.log("hello world!");
}
sayHello()

function greet(name) { //placeholder 
    console.log("Hello, " + name + "!");

}
greet("dania")

//function scope 
function add(a, b) {
    return a + b;
}

const result = add(3, 4);
console.log(result);
// function sum(add(), greet()) { //callback function
//     sum() //recersive function
// }


function example() {
    const x = 10;
    // console.log(x);
}
// console.log(x);
example()

function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4));
console.log(multiply(3, 4));


let cnr = 0;

function incrementCounter(counter) {
    // let cnr = 0

    // var counter = 0;
    counter += 1;
    console.log("hussin", counter);// Modifies the external 'counter' variable
    return counter;
} //1
//1
//2
console.log(incrementCounter(cnr));
console.log(cnr);
console.log(incrementCounter(cnr));
console.log(cnr);


// console.log(counter);

function getCurrentTime() {
    return new Date();  // Output depends on the exact moment when the function is called
}

console.log(getCurrentTime());
console.log(getCurrentTime());


function mergeArrays(array1, array2) {
    let merged = [];
    for (let i = 0; i < array1.length; i++) {
        merged.push(array1[i]); // Add elements from the first array
    }
    for (let i = 0; i < array2.length; i++) {
        merged.push(array2[i]); // Add elements from the second array
    }
    return merged;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// let newArray = []
// console.log(newArray.join(array1, array2, (',')));

// let newArray = [...array1, ...array2];
// console.log(newArray);
// let newArray = array1.concat(array2);
// console.log(newArray);
let newArray = [...array1, ...array2];
console.log(...array1);
console.log(newArray.join(', '));

// console.log(mergeArrays(array1, array2));


let userDatabase = [];

function addUserToDatabase(user) {
    userDatabase.push(user); // Modifies the global 'userDatabase'
    return userDatabase;
}

console.log(addUserToDatabase({ name: 'Alice', age: 25 }));
console.log(addUserToDatabase({ name: 'Bob', age: 30 }));
console.log(addUserToDatabase({ name: 'dania', age: 24 })); 