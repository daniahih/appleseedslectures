// class Vehicle {
//     #speed = 0;
    
//     constructor(name) {
//       this.name = name;
//     }
    
//     // Public methods
//     accelerate(amount) {
//       this.#speed += amount;
//       console.log(`${this.name} is accelerating. Current speed: ${this.#speed}`);
//     }
    
//     brake(amount) {
//       this.#speed -= amount;
//       if (this.#speed < 0) this.#speed = 0;
//       console.log(`${this.name} is braking. Current speed: ${this.#speed}`);
//     }
 
//     // Private methods
//     #engineStart() {
//       console.log(`Starting engine of ${this.name}`);
//     }
    
//     #engineStop() {
//       console.log(`Stopping engine of ${this.name}`);
//     }
  
//     drive() {
//       this.#engineStart();
//       console.log(`${this.name} is now driving`);
//       this.#engineStop();
//     }
//   }
//    const car = new Vehicle('Toyota');
// //    This abstraction hides internal complexity, revealing only the necessary interfaces 
// car.accelerate(30)
// car.brake(10);
// car.drive();

 
// let strOne= "DANIA"
// let strTwo= new Object({name:"DANIA"})

class Account {
    // Private fields
      #movements = [];
      #pin;
    
      constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
      }
    
      // Public interface
      // getter
      get movements() {
        return this.#movements;
      }
    
      deposit(val) {
        this.#movements.push(val);
        return this;
      }
    
      withdraw(val) {
        this.deposit(-val);
        return this;
      }
    
      requestLoan(val) {
        if (this.#approveLoan(val)) {
          this.deposit(val);
          console.log(`Loan approved.`);
          return this;
        }
        console.log(`Loan rejected.`);
        return this;
      }
    
      get balance() {
        return this.#movements.reduce((acc, curr) => acc + curr, 0);
      }
    
      // Private method
      #approveLoan(val) {
        return val <= this.balance * 0.1;
      }
    }

    const acc1 = new Account('Dania', 'EUR', 1111);
acc1.deposit(250)
console.log( acc1.movements);



// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//     #grade = 99.9

//     get grade() {
//         console.log("method grade was invoked ");
//         return this.#grade;
//     }
//     set grade(g) {
//         this.#grade = g;
//         console.log("method grade was set");

//     }
// }

// const student1 = new Student('Dania');
// console.log(student1.grade);
// student1.grade = 100;
// console.log(student1.grade);


class Person {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Methods will be added to .prototype property
    calcAge() {
      console.log(2024 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2024 - this.birthYear;
    }
  
    // Set a property that already exists
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    // Static method // general 
    static hey() {
      console.log('Hey there 👋');
      console.log(this);
    }
     static PI= 3.14  //clone  
  }
class Student extends Person{
    constructor(fullName,birthYear,course){
        super(fullName,birthYear);
        this.course=course;
    }
    calcAge(){
        console.log(`I'm ${2024 - this.birthYear} years old, but as a student I feel more like ${2024 - this.birthYear + 10}`);
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
      }}


Student.hey()
//    const dania = new Person('Dania Hih', 1999)



//    class MathHelper {
//     constructor(initialValue = 0) {
//       this.value = initialValue;
//     }
  
//     static add(a, b) {
//       return a + b;
//     }
  
//     addToValue(x) {
//       this.value += x;
//       return this.value;
//     }
//   }
  
//   console.log(MathHelper.add(3,4)); 
  
//   const helper = new MathHelper(7);
//   console.log(helper.addToValue(10)); 




// console.log(Person.PI);
// Person.hey()

