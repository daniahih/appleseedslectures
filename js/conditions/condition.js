// const x = 2
// if (x > 0) {
//     console.log("positive ")
// }
// else
// log("negative ");

// if (condition){ // true
// console.log("true ");
// }
// let num = -3
// if (num > 0) {
//     console.log("positive");
// }
// else if (num < 0) {
//     console.log("negative");
// }
// else {
//     console.log("this number is 0")
// }


// const age = 16;
// if (age < 18) {
//     console.log("You are a minor");
// }

// edge cases 
//   const  isMember = true 
//  const isNotMember = false
// let discountPercentage = 0
// //    misiing purchuesamount = 150
// let discountAmount = 0


// if isMember-- > DISCTOUNT 0.05
// if purchuesamount > 100  
// discountPercentage = discountPercentage + 0.10
// discountAmount = discountPercentage * purchuesAmount


// const isMember = true
// // || &&
// let purchaseAmount = 120;
// let discount = 0;
// if (isMember) {
//     discount = 0.05 //reassinging discount
//     if (purchaseAmount >= 100) {
//         discount += 0.1
//     }

// }
// if (purchaseAmount >= 100) {
//     discount += 0.1
// }
// console.log(discount);

// const isMember = false;
// let purchaseAmount = 120;
// let discount = 0;

// if (isMember) {
//     discount = 5;  // Base 5% discount for all members
//     if (purchaseAmount > 100) {
//         discount += 10;  // Additional 10% for high purchase amounts
//     }
// } else {
//     if (purchaseAmount > 100) {
//         discount = 10;  // 10% discount for non-members on large purchases
//     }
// }
// // console.log(`Total discount: ${discount}%`);
// // console.log("discount ", discount)
// console.log(`discount , ${discount}`)


const day = 3;
switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}