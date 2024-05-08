// const numbers = [1, 2, 3, 5, 6]
// function printAnElement(index) {
//     console.log(numbers[index]);
//     printAnElement(3) // infinte loop 
//     //  base case 
// }
// printAnElement(0)
// //1
// //5 

// 1 to n 
// function SumToN(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }

// console.log(SumToN(5));

// function sumToN(n) {
//     if (n === 1) return 1 // base case 
//     return n + sumToN(n - 1) // recursive case 
// }
// console.log(sumToN(5))


// n! 5 * 4 ** 3 * 2 * 1

// n = 1 // base case 

function factorial(n) {

    if (n < 0) {
        return undefined
    }
    else if (n === 0 || n === 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(5))

// Fibonacci 
function Fibonacci(n) {
    if (n < 0) {

        return undefined
    }
    else if (n <= 1) {
        return n
    }
    // else if 
    return Fibonacci(n - 1) + Fibonacci(n - 2)

}
console.log(Fibonacci(1))