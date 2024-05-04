// es6 --> standard 2015
// `forEach()`, `map()`, `filter()`, `reduce()`
// These methods are directly available on array instances and provide elegant ways to manipulate arrays.

//  condition
//anonymous function
// function passed as an argument to another function
// filter(call back function )
// const array = [1, 2, 3, 4, 5];

// const cf = function isEven(number) {
//     return number % 2 === 0;
// }
// const cf2 = function isOdd(number) {
//     return number % 2 === 1;
// }

// function daniaFilter(arr) {
//     let evenArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         // if (arr[i] % 2 === 0) {
//         if (cf(arr[i])) {
//             evenArray.push(arr[i]);
//         }

//     }
//     return evenArray;

// }
// console.log(daniaFilter(array));

// console.log(isEven(array));
// console.log(array % 2);
// const evenNumbers = array.filter(isEven);
// console.log(evenNumbers);

// const evenNumbers = array.filter(function (number) {
//     return number % 2 === 0
// });
// console.log(evenNumbers);
// const evenNumbers = array.filter(number => number % 2 === 0)

// console.log(evenNumbers);
// console.log(array);

//  FOREACH

// const emails = ["test1@example.com", "test2@example.com", "test3@example.com", ['da1@example.com']]
// // for (let i = 0; i < emails.length; i++) {
// //     console.log(emails[i]);
// // }
// emails.forEach((email) => {
//     console.log(email);
// })
// const prices = [100, 200, 300, 400, 500, 600, 700];

// prices.forEach((price, rawaa) => {
//     if ((rawaa + 1) % 3 === 0) {
//         // Apply 10% discount
//         prices[rawaa] = price * 0.9;
//     }
// });

// console.log(prices);


// const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }];

// const targetId = 2;
// let targetUser = null;
// for (let i = 0; i < users.length; i++) {
//     if (users[i].id === targetId) {
//         targetUser = users[i];
//         break; // Exit the loop as soon as the user is found
//     }
// }

// if (targetUser) {
//     // Perform some action with targetUser
// }
// console.log(targetUser.name);



// const userIds = [1, 2, 3, 4, 5];
// for (const i = 0; i < userIds.length; i++) {
//     const user = await fetchUserById(userIds[i]); // hypothetical async function to fetch user
//     // Perform some action with user
// }

// const postIds = [1, 2, 3, 4, 5];
// let id = 1
// postIds.forEach(id => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response => {
//         console.log(response.body);
//         // handle response
//     });
// });


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))









// // map


// const products = [
//     { id: 1, name: 'Jeans', price: 49.99 },
//     { id: 2, name: 'T-Shirt', price: 19.99 },
//     // more products...
// ];
// const formattedPrices = products.map(product => {
//     return { name: product.name, price: `$${product.price.toFixed(2)}` };
// });


// console.log(formattedPrices);



// const pets = ['dog', 'cat', 'fish', 'dog', 'cat', 'dog'];
// const petCounts = pets.reduce((obj, pet) => {
//     if (!obj[pet]) {
//         obj[pet] = 1;
//     } else {
//         obj[pet]++;
//     }
//     return obj;
// }, {});
// console.log(petCounts);

// const pets = ['dog', 'cat', 'fish', 'dog', 'cat', 'dog'];
// const petCounts = pets.reduce((obj, pet) => {
//     obj[pet] = obj[pet] ? obj[pet] + 1 : 1;
//     return obj;
// }, {});


const products = [
    { name: 'Apple', price: 5, inStock: true }, //product.price
    { name: 'Banana', price: 15, inStock: true },
    { name: 'Cherry', price: 10, inStock: false },
    { name: 'Date', price: 20, inStock: true },
    { name: 'Elderberry', price: 8, inStock: true },
];

const affordableInStockProducts = products.filter((product) => product.inStock && product.price < 10);

console.log(...affordableInStockProducts);























// function a(b, c, d) {
//     return b(c, d)
// }

// const dania = function add(x, y) {
//     return x + y;
// }
// console.log(a(dania, 1, 2));

// const molokhia = function multiply(x, y) {
//     return x * y;
// }
// console.log(a(molokhia, 1, 2));


const arr1 = [1, 2, 3];
// console.log(...arr1);
// const goodArr = [4, 5, 6, ...arr1];
// console.log(goodArr);

const arr2 = [1, 3, 5];
console.log(typeof arr2);
const newArray = new Array()
newArray.push(1)
console.log(typeof newArray);
const sumNum = (a, b, c) => {
    console.log(typeof a);
    return a + b + c
};

// Pass the elements of arr2 as arguments to sumNum
const sum = sumNum(arr2); //
console.log(sum);


const arr1Copy = [...arr1];
arr1Copy.push(4)
console.log("copy", arr1Copy);
console.log("original", arr1);