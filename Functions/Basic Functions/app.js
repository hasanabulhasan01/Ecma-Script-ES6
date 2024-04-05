// A function is a reusable piece of code that can be called anywhere in the program while you define the scope correctly.

function sayHi(firstName, lastName) {                      // arguments
    console.log("Hi" + " " + firstName + " " + lastName)
}
sayHi("Sally", "Jane") // Parameters



function sum(a = 2, b = 3, c = 5) {  // we can pass initial values in arguments incase no parameter provided.  
    console.log(a + b + c)
};

sum(5, 25, 40)



function greet() {
    var firstName = prompt("Please enter your first name");
    var lastName = prompt("Please enter your last name");
    alert("Nice to meet you Mr. " + firstName + " " + lastName);
}
greet();


function calculator(a, b, c) {
    a = +prompt("Please enter number 01: ");
    b = +prompt("Please enter number 02: ");
    c = prompt("Please enter the operator: ");
    if (c == "+") {
        return a + b
    } else if (c == "-") {
        return a - b
    } else if (c == "*") {
        return a * b
    } else if (c == "/") {
        return a / b
    } else if (c == "%") {
        return a % b
    } else {
        return "Invalid Operator"
    }
}
document.write(calculator());

