// Logical Operators:

// The && AND operator returns true if both expressions are true otherwise returns false.
// Example:
let a = 6;
let b = 3;
console.log(a < 10 && b > 1) // output: true
console.log(a < 10 && b < 1) // output: false


// The || OR operator returns true if one or the both expressions are true, otherwise it returns false

let x = 6;
let y = 3;

console.log(x == 5 || y == 5) // output: false  
console.log(x == 6 || y == 0) // output: true
console.log(x == 0 || y == 3) // output: true
console.log(x == 6 || y == 3) // output: true

// The NOT (!) operator returns true for false statement and false for true statement 

console.log(!(x===y))// output: true
console.log(!(x > y))// output: false


let num1 = 10;
let num2 = 5;
let num3 = 15;

console.log(num1 > num2 && num1 < num3); // Output: true (both conditions are true)
console.log(num1 > num2 || num1 > num3); // Output: true (at least one condition is true)
