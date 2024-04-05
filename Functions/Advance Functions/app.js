// In ES-6 we use arrow functions.
// Arrow functions introduce concise body syntax, or implicit return. This allows the omission of the curly brackets and the return keyword.
// Implicit return is useful for creating one-line operations in map , filter , and other common array methods.

// Traditional function
function sum(a, b) {
    const c = 42;
    return a + b + c;
};

// Arrow function
var sum = (a, b) => {
    const c = 42;
    return a + b + c;
};
console.log(sum(5, 3))



// if your expression is just returning a value, you just skip the return keyword.
const Multiplier = (a, b) => a * b;
console.log(Multiplier(8, 6));



const printHello = () => {
    console.log('hello');
};

const checkWeight = (weight) => {
    console.log(`Baggage weight: ${weight} kilograms.`);
};

printHello();
checkWeight(25);


function x(a, b) {
    a = +prompt("Enter the start number: ");
    b = +prompt("Enter the end number: ");
    for (var i = a; i <= b; i++) {
        console.log(i + " ");
    }
}
console.log(x());


// find the max number in the array
function findLargest(arr) {
    if (arr.length === 0) {
        return "No array provided.";
    }

    var largest = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

var array = [23, 5, 16, 8, 4, 52, 41, 6]
console.log(findLargest(array));
