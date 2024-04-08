// template literals
// Template literals are enclosed within backticks ` ` instead of single or double quotes.
// `${}` syntax is used to embed expressions or variables within the template literal.

// Exapmles:

const name = 'Hasan';
const greeting = `Hello, ${name}!`;
console.log(greeting);

const num1 = 5;
const num2 = 10;
const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(result)


const isLoggedIn = true;
const message = `
  Welcome${isLoggedIn ? ', User!' : '!' }
  Thank you for visiting our website.
`;
console.log(message);


const age = prompt('Please enter your age;')
const res = `You are ${age >= 18 ? 'an adult' : 'a minor'}.`;
console.log(res);

const firstName = prompt('Please enter your first name');
const lastName = prompt('Please enter your last name');
const fullName = `${firstName} ${lastName}`;
const greet = `Hello, my name is ${fullName.toUpperCase()}.`;
console.log(greet);