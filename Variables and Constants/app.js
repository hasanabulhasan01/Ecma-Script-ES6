
// Variable is placeholder that stores data or information.
// var, let and constants are all used for variable declerations, but they behave differently in terms of scope and mutability.

// var:
// var declarations are globally scoped or function scoped.
// They can be re-declared and updated within their scope.
// They can be hoisted to the top of their function or global scope.
//example:

var a = 10;
if (true) {
    var a = 20;
    console.log("Inside block: " + a); // Output: 20
}
console.log("Outside block: " + a); // Output: 20


// let:
// let declarations are block scoped.
// They cannot be re-declared within the same scope, but can be updated.
// They are not hoisted to the top of their block scope.
// example:

let b = 10;
if (true) {
    let b = 20;
    console.log("Inside block: " + b); // Output: 20
}
console.log("Outside block: " + b); // Output: 10


// const:
// const declarations create variables that cannot be re-assigned.
// They are block scoped.
// Like let, they are not hoisted to the top of their block scope.

function sayHi() {
    if(true) {
        const myName = "Hasan"
    }
    console.log(myName);// this will return error because the const variable is in different block not in console block.
}