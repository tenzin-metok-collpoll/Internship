// Destructuring an array
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Destructuring an object
const person = { name: 'John', age: 25, city: 'New York' };
const { name, age } = person;

console.log(name); // Output: John
console.log(age); // Output: 25
