const numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log("Sum:", sum);
// console.log();
// const arr = [23, 34, 77, 99, 324];
// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);

// const original = [1, 2, 3, 4, 5];
// const reverseArray = [];
// // let  Olength = original.length -1
// let newIndex = 0

// for (let i = original.length - 1; i >= 0; i--) {
//     // reverseArray.push(original[i]);
//     reverseArray[newIndex++] = original[i];

// }
// console.log("resveresd ", reverseArray);
// console.log(original.reverse());
// const size = 10; // Size of the multiplication table
// let row;

// for (let i = 1; i <= size; i++) {
//     row = "";
//     for (let j = 1; j <= size; j++) {
//         row += `${i * j}\t`; // Append each product and a tab to the row string
//     }
//     console.log(row); // Output the row string
// }
debugger
let items = [1, 2, 4, 2, 7, 4, 7, 9, 1, 3];
let uniqueItems = [];

for (let i = 0; i < items.length; i++) {
    let isUnique = true;

    for (let j = 0; j < i; j++) {
        if (items[i] === items[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        uniqueItems.push(items[i]);
    }
}
console.log("Unique Items:", uniqueItems);