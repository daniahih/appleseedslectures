// class Animal {
//     #type = 'Mammal';  // Truly private field
  
//     constructor(name) {
//       this.name = name;
//     }
  
//     getType() {
//       return this.#type;
//     }
  
//     makeSound() { }
//   }
  
//   const animal = new Animal('Animal');
//   console.log(animal.getType()); // Outputs: 'Mammal'
//   console.log(animal.#type); 



// const Animal = {
//     _type: 'Mammal', // Not truly private, just a convention
  
//     getType() {
//       return this._type;
//     },
  
//     setType(type) {
//       if (type !== '') {
//         this._type = type;
//       }
//     }
//   };
  
//   console.log(Animal.getType()); // Outputs: 'Mammal'
//   Animal.setType('Bird');
//   console.log(Animal.getType()); // Outputs: 'Bird'
  
//   // Despite the convention, _type can still be accessed directly:
//   console.log(Animal._type); // Outputs: 'Bird'