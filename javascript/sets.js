//creating set
const set = new Set();
set.add('apple');
set.add('banana');
set.add('orange');

// OR
// const set = new Set(['apple', 'banana', 'orange']);
console.log(set); 
//size of the set

console.log(set.size); 

// check if element exists in a set
// will return true or false
console.log(set.has('apple')); 
console.log(set.has('grape'));


//removing element from set
set.delete('banana');
console.log(set); // Set { 'apple', 'orange' }

//looping over set

for (const item of set) {
  console.log(item);
}

set.forEach(item => {
  console.log(item);
});
