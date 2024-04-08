// For-In Loop:
// The for-in loop is used to iterate over the enumerable properties of an object.
// It works with objects and arrays.

// Example:

const person = { name: "Hasan", age: 23, city: "Karachi" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// working with arrays

const fruits = ["apple", "banana", "Mango"];

for (let index in fruits) {
  console.log(index + ": " + fruits[index]);
}

const car = {
  brand: "Toyota",
  model: "Corolla",
  start: function () {
    console.log("Engine started.");
  },
};

for (let key in car) {
  if (typeof car[key] === "function") {
    console.log("Method:", key);
  }
}

// For Of Loop:

// The for-of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, maps etc.
// This loop is particularly usefull when you want to iterate over collections without dealing with indexes and keys.
// The loop continues until all elements in the iterable have been processed.

const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

const text = "Hasan";

for (let char of text) {
  console.log(char);
}

// Array of object

const students = [
  { name: "Hasan", age: 23 },
  { name: "Ali", age: 25 },
  { name: "Anas", age: 28 },
];

for (let student of students) {
  console.log(`${student.name} is ${student.age} years old`);
}

// forEach Method:
// This method allows you to execute a provided function once for each element in the array.
// forEach method does not return a new array. It simply iterates over the array elements and executes the callback function for each element.

const colors = ["red", "green", "blue"];

colors.forEach(function (color) {
  console.log(color);
});


// convert array of string to upperCase

const color = ['red', 'green', 'blue'];

color.forEach((color, index, arr) => {
  arr[index] = color.toUpperCase();
});

console.log(color);


// count the number of strings in an array

const words = ['apple', 'banana', 'Kiwi'];

words.forEach(word => {
  console.log(`${word} has ${word.length} characters.`);
});