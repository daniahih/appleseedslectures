// PRIMITIVE DATA TYPES in JavaScript
// var: Declares a variable, optionally initializing it to a value.
var oldSchool = 'I am old school'; // var is function-scoped or globally-scoped

// let: Declares a block-scoped local variable, optionally initializing it to a value.
let modernVariable = 'I am modern'; // let is block-scoped

// const: Declares a block-scoped local constant, which cannot be reassigned.
const unchangeable = 'I cannot change'; // const is block-scoped and must be initialized

// Reassignment
var reassignable = 'I can be reassigned';
reassignable = 'I have been reassigned';

let alsoReassignable = 'I can also be reassigned';
alsoReassignable = 'I have also been reassigned';

const notReassignable = 'I cannot be reassigned';
// notReassignable = 'Trying to reassign will cause an error'; // TypeError: Assignment to constant variable.
// String: Represents textual data
let name = 'Alice'; // enclosed in single quotes
let greeting = "Hello"; // or double quotes

// Number: Represents both integer and floating-point numbers
let age = 25; // an integer
let price = 99.99; // a floating-point number

// Boolean: Represents a logical entity and can have two values: true and false
let isStudent = true; // a boolean value

// Null: Represents the intentional absence of any object value
let emptySeat = null; // explicitly nothing

// Undefined: Indicates that a variable has not been assigned a value
let address; // declared but not defined, so it's undefined

// BigInt: Represents integers with arbitrary precision
let largeNumber = BigInt(9007199254740991); // can be used for very large numbers

// Symbol: Represents a unique identifier
let id = Symbol('id'); // unique and immutable


// BASIC OPERATORS in JavaScript

// Assignment operator (=)
let x = 5; // assigns the value 5 to x

// Mathematical operators (+, -, *, /, %)
let sum = x + 2; // addition, result is 7
let difference = x - 2; // subtraction, result is 3
let product = x * 2; // multiplication, result is 10
let quotient = x / 2; // division, result is 2.5
let remainder = x % 2; // modulo, result is 1 (remainder of division)

// String concatenation using +
let fullName = name + ' Smith'; // concatenates 'Alice' and ' Smith' to form 'Alice Smith'

// Increment (++) and Decrement (--)
x++; // increments x by 1, x becomes 6
x--; // decrements x by 1, x goes back to 5

// Comparison operators (==, !=, ===, !==, >, <, >=, <=)
let isAdult = age >= 18; // checks if age is greater than or equal to 18, result is true

// Logical operators (&&, ||, !)
let canDrive = isAdult && hasLicense; // logical AND, true if both are true
let canEither = canDrive || hasPassport; // logical OR, true if at least one is true
let cannotDrive = !canDrive; // logical NOT, true if canDrive is false

// Note that == does a type-coercing comparison, while === does a strict comparison.
let a = '2';
let b = 2;
let areEqual = (a == b); // true, because '2' is converted to number before comparison
let areStrictlyEqual = (a === b); // false, because '2' (string) is not the same as 2 (number)
