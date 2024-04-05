// A function can be nested inside a function and it is called closures.
// In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

function init() {
    var name = "Hasan"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

//  inner functions have access to the variables of outer functions,
//  displayName() can access the variable name declared in the parent function, init().



function squareAndMultiply (num1, num2) {
    function square (x) {
        return x * x ;
    }
    return square(num1)* square(num2)
}
console.log(squareAndMultiply(3, 4))




function nameFormatter(firstName, lastName){
    function formatNames(arg1, arg2){
        return arg1 + " " + arg2
    }

    const formattedNames = formatNames(firstName, lastName);
    return formattedNames;
}
console.log(nameFormatter("Abul", "Hasan"));

