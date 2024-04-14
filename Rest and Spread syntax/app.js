// Spread Syntax:
// Can be used in places where e.g. functions expects multiple arguments, multiple elements, multiple variables, etc.
// Spread syntax, also denoted by three dots ..., allows an iterable (like an array) to be expanded into individual elements.
// It's the opposite of rest parameters, which collect multiple elements into an array.
// Spread syntax is commonly used in array literals, function calls, and object literals.
// It is also use to copy an array and the changes you do in the copy array will not affect the original.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray);

// function call examples:
function multiply(x, y, z) {
  return x * y * z;
}

const numbers = [2, 3, 4];
const result = multiply(...numbers);

console.log(result); // Output: 24
// Here, ...numbers spreads the elements of the numbers array as arguments to the multiply function.


const obj1 = { name: 'Hasan', age: 23 };
const obj2 = { country: 'Pakistan', job: 'Intern' };
const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);

//Rest:
// rest parameters collect multiple arguments into an array within a function,
// while spread syntax expands elements of an array or object into individual elements, allowing for easier manipulation and combination of data.

// Finding maximum number:
function findMax(...numbers) {
    return Math.max(...numbers);
  }
  
  console.log(findMax(10, 20, 5, 30));
  console.log(findMax(100, 500, 200)); 

// filtering arguments
function filterNumbers(...args) {
    return args.filter(arg => typeof arg === 'number');
  }
  
  console.log(filterNumbers(1, 'two', 3, 'four', 5)); 
  