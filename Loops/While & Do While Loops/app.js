// While Loop:

// A while loop executes a block of code as long as a specified condition is true.
// In a while loop, the condition is evaluated before the code block is executed.
// If the condition is false initially, the code block is never executed.

// Examples:

// Counting from 1 to 5

let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// Summing numbers

let sum = 0;
let number = 1;
while (number <= 5) {
  sum += number;
  number++;
}
console.log("Sum:", sum); // Output: Sum: 15

// Print even numbers

let num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// Do-While Loops:

// In a do-while loop, the code block is executed at least once before checking the condition.
// This ensures that the code block is executed at least once, even if the condition is false initially.
// Use a do-while loop when you want to execute a block of code at least once and then continue based on a condition.

// Examples:

let x = 1;
do {
  console.log(x);
  x++;
} while (x <= 5);

// Input Validation

let userInput;
do {
  userInput = prompt("Enter a number greater than 5:");
} while (parseInt(userInput) <= 5);
console.log( userInput );
// the loop prompts the user to enter a number greater than 5 and keeps asking until a valid input is provided.