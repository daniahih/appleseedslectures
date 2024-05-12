// const user1={
//     name:"john",
//     age:"25",
//     salary:"1000"
// }
// const user2={
//     name:"william ",
//     age:"25",
//     salary:"3000"
// }
// const user3={
//     name:"mohsian",
//     age:"24",
//     salary:"5000"
// }



//CONSTRUCTOR FUNCTION
// function User(name, age, salary) {
//     this.n = name;
//     this.a = age;
//     this.s = salary
//     this.addSalary = function (raise) {
//         this.s += raise
//     }
// }

// //object 

// const user1 = new User("john", 25, 1000); //instance of user //object 
// const user2 = new User("william", 25, 3000);
// const user3 = new User("mohsian", 24, 5000);
// console.log(user1);
// user1.addSalary(1000)
// console.log(user1);
// console.log(user2);
// console.log(user3);



class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    bark() {
        console.log("woof");
    }
}
 const  bubby = new Dog("bubby", 2, "lab");
 console.log(bubby);
 bubby.bark()