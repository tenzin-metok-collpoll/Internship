// Spreading elements of an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Spreading properties of an object
const obj1 = { name: 'John', age: 25 };
const obj2 = { ...obj1, city: 'New York' };

console.log(obj2); // Output: { name: 'John', age: 25, city: 'New York' }
