// A for loop in JavaScript is used to execute a block of code repeatedly for a specified number of times.
// It's particularly useful when you know exactly how many times you want to loop. 

// for (initialization; condition; increment/decrement) {
//   // code block to be executed
// }

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// reverse loop
for (let i = 5; i >= 1; i--) {
  console.log(i);
}


const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Nested For loops :
//pattern:1
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    document.write(j + " ");
  }
  document.write("<br>");
}
document.write("<br>");

//pattern:2
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= 5; j++) {
    document.write(j + " ");
  }
  document.write("<br>");
}
document.write("<br>");

//pattern:3
for (i = 5; i >= 1; i--) {
  for (j = 5; j >= i; j--) {
    document.write(j + " ");
  }
  document.write("<br>");
}
document.write("<br>");

//pattern:4
for (i = 1; i <= 5; i++) {
  var x = "";
  for (j = 1; j <= i; j++) {
    x = x + i + " ";
  }
  document.write(x);
  document.write("<br>");
}
document.write("<br>");

//pattern:5
for (i = 5; i >= 1; i--) {
  var x = "";
  for (j = 1; j <= i; j++) {
    x = x + "*" + " ";
  }
  document.write(x);
  document.write("<br>");
}
document.write("<br>");

//pattern:6
for (i = 1; i <= 5; i++) {
  var x = "";
  for (j = 1; j <= i; j++) {
    x = x + "*" + " ";
  }
  document.write(x);
  document.write("<br>");
}
document.write("<br>");
