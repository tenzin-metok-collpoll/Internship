// import { calculateArea, calculateCircumference } from './mathUtils.js';

// Arrow functions 
const printShapeInfo = (shape, radius = 1) => {
  // Object shorthand
  const { area, circumference } = shape;

  console.log(`Shape: ${shape.name}`);
  console.log(`Radius: ${radius}`);
  console.log(`Area: ${area(radius)}`);
  console.log(`Circumference: ${circumference(radius)}`);
};

// Template literals and object destructuring
const { name, area, circumference } = {
  name: 'Circle',
  area: (radius) => Math.PI * radius ** 2,
  circumference: (radius) => 2 * Math.PI * radius,
};

// Default parameters and rest parameters
const calculateSum = (a = 0, b = 0, ...rest) => {
  let sum = a + b;
  for (const num of rest) {
    sum += num;
  }
  return sum;
};

// Spread syntax
const numbers = [1, 2, 3, 4, 5];
const sum = calculateSum(...numbers);

// Call the printShapeInfo function
printShapeInfo({ name, area, circumference });
console.log(`Sum: ${sum}`);

// Array destructuring
const [a, b, ...restNumbers] = numbers;
console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`restNumbers: ${restNumbers}`);

// Object methods
const shape = {
  name: 'Rectangle',
  width: 10,
  height: 5,
  // Object method shorthand
  calculateArea() {
    return this.width * this.height;
  },
};

console.log(`Shape: ${shape.name}`);
console.log(`Width: ${shape.width}`);
console.log(`Height: ${shape.height}`);
console.log(`Area: ${shape.calculateArea()}`);

// Promise API and arrow function
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Fetched data';
      resolve(data);
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

