// Create Arrays

const numbers = [52, 13, 132, 412];
const numbers2 = new Array(90, 1, 4, 23);
const fruits = ['Apple', 'Banana', 'Cherry'];
const mix = [30, 'Hello', true, undefined, null, {
    a: 1,
    b: 2
}, new Date()];

let val;

// Get length array
val = numbers.length;

val = Array.isArray(numbers2);

val = fruits[2];

// Insert into array
fruits[2] = 'Grape';

val = mix.indexOf(undefined);

// Mutating

// Add on to end
numbers.push(100);

// Add on to frint
numbers.push(101);

// Take off from end
numbers.pop();

// Take off from front
numbers.shift();

// Splice value
numbers.splice(0, 2);

// Reverse
fruits.reverse();

console.log(numbers);
console.log(fruits);
console.log(val);