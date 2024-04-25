// console.log(square(2));
// function square(x) {
//     return x * x
// }

// console.log(mutiply(2, 3));
// const mutiply = function (a, b) {
//     return a * b
// }

// Higher-order functions are functions that can take other functions as arguments and/or return functions as results.
function mapArray(array, transform) { //(numbers , square )
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(transform(array[i]))
    }
    return mappedArray
}
// Function to square a number
function square(x) {
    return x * x;
}

// Function to double a number
function double(x) {
    return x * 2;
}
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = mapArray(numbers, square);
console.log(squaredNumbers);
const doubledNumbers = mapArray(numbers, double);
console.log(doubledNumbers);
//[2,4,6,8,10 ]
//[1,4,9,16,25]S