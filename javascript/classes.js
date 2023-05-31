class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
  
  // Creating an instance of the Person class
  const person = new Person('John', 25);
  
  // Usage
  person.sayHello(); // Output: Hello, my name is John.
  