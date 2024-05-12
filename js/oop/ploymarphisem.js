class Animal {
  constructor(name) {
    this.name = name;
  }

  ms() {
    return this.makeSound();
  }
  makeSound() {
    console.log("I am an animal");
  }
  // molokhia(){
  //   console.log('molokhia');
  // }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    // this.name = name;
    this.breed = breed;
  }

  makeSound() {
    return `${this.name} of breed ${this.breed} is barking`;
  }
  // molokhia (){

  //   super.molokhia()
  //   console.log('molokhia with garlic');
  // }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    // this.name = name;
    this.breed = breed;
  }
  makeSound() {
    return `${this.name} of breed ${this.breed} is meowing`;
  }
}

class Donkey extends Animal {
  constructor(name, breed) {
    super(name);
    // this.name = name;
    this.breed = breed;
  }
  makeSound() {
    return `${this.name} of breed ${this.breed} is whinnying`;
  }
}
const animals = [
  new Dog("bubby", "lab"),
  new Cat("kitty", "persian"),
  new Donkey("molokhia", "garlic"),
];
console.log(animals);
for (let animal of animals) {
  console.log(animal.ms());
}
