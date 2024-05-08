// let categories = [{ name: 'dania' }, 'Pizzeria', 'Vegetarian', 'Organic'];
// const [italian, pizzeria, vegetarian, organic] = categories;

// // console.log(categories[2]);
// console.log(italian);
// // categories = [{ name: 'Amin' }, 'Pizzeria', 'Vegetarian', 'Organic'];
// // categories[0].name = 'amin'
// categories[0] = { name: "anim" }
// console.log(italian);

// let one = 1;
// let two = 2;

// // const temp = one;
// // one = two;
// // two = temp;

// // console.log(one, two);

// one = 10, two = [two, one];

// console.log(one, two);

// 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const [, monday, tuesday, , , friday] = days;
console.log(monday, tuesday, friday);



// const getDays = (dayNum1, dayNum2) => {
//     if (dayNum1 > 7 || dayNum1 < 0 || dayNum2 > 7 || dayNum2 < 0) {
//         return "invalid number!";
//     }
//     const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const resultArray = [daysArray[dayNum1 - 1], daysArray[dayNum2 - 1]];
//     return resultArray;
// };

// const [day1, day2] = getDays(2, 6)
// console.log(day1, day2);


// getDays(...arr)

function calculate(...arr) {
    console.log(arr);
    [a, ...Remaining] = arr;
    console.log(a, Remaining);
    console.log(...Remaining);

}
calculate(1, 2, 3, 4, 5)






const arr = [
    { name: "hussein", age: 21, mony: false },
    { name: "ahmad", age: 31, mony: true },
    { name: "ss", age: 31, mony: true },
];
function gg(...arr) {

    console.log(...(arr.map((n) => n.name)));

}
console.log(...arr); //spread
gg(...arr);

hussin = false

// if (hussin === 1) {
//     return false
// }
// else {
//     return true
// }
const v1 = hussin || 1
console.log(v1);