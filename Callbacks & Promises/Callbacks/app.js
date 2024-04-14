// Callbacks:
// A callback is a function that is passed to another function as an argument.
// They are used to handle asynchronous tasks like making API req, handling events etc.
// This technique allows a function to call another function.
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

//Examples:

function goFirst(callBack) {
  setTimeout(() => {
    console.log("I should always go first");
    callBack();
  }, 1000);
}

function goSecond() {
  console.log("I should always go second");
}

goFirst(goSecond);

//----------------------------------------------------

function fetchData(callback) {
  setTimeout(function () {
    const data = { id: 1, name: "John Doe", age: 30 };
    callback(data); // Call the callback with the fetched data
  }, 2000);
}

// Define a callback function to handle the fetched data
function handleData(data) {
  console.log("Data received:", data);
}

// Call the fetchData function and pass handleData as the callback
fetchData(handleData);

// ----------------------------------------------------------------------------------

// Array Iteration
const numbers = [1, 2, 3, 4, 5];

// Define a function that takes a callback for processing each element of the array
function processArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

// Define a callback function to increment each element
function logElement(element) {
  console.log(++element);
}

processArray(numbers, logElement); // Incremented each element of the array in callBack function.


// --------------------------------------

function performOperation(x, y, callback) {
    const result = callback(x, y);
    console.log('Result:', result);
  }
  
  // Define a callback function to add two numbers
  function addNumbers(a, b) {
    return a + b;
  }
  
  // Define another callback function to multiply two numbers
  function multiplyNumbers(a, b) {
    return a * b;
  }
  
  // Call performOperation with addNumbers as the callback
  performOperation(5, 3, addNumbers);
  
  // Call performOperation with multiplyNumbers as the callback
  performOperation(5, 3, multiplyNumbers);