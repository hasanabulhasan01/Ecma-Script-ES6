// Exception Handling:

// Exception handling is a programming technique used to detect, respond to,
// and manage errors or exceptional conditions that may occur during the execution of a program.

// Throw your own exception

// Use the throw statement to throw own exception.
// You specify the expression containing the value to be thrown 
// e.g : throw expression
// can throw any expression.

// throw "New Error!";

// function checkIfNumber(n){
//     if(isNaN(n)){
//         throw "This is not a number";
//     }
//     else{
//         console.log(n);
//     }
// }

// checkIfNumber("Hello")


// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
// The JavaScript statements try and catch come in pairs:

// try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }

try {
    throw "Exceptions!";
}
catch (e) {
    console.log(e)
}
// it will display the error in the console
// This is usefull if you don't want your program to terminate and you will be able to handle exceptions, unless its some major issue.

// It is also used as built in protection from preventing the app from crashes and termination.
// After throwing exceptions the program will be terminated and donot run further, to prevent this we use try... catch.

let myNum = "Hasan"

function checkIfNum(num) {
    if (isNaN(num)) {
        throw "not a number"
    }
    else {
        console.log("Yes, this is the number")
    }
}

try {
    checkIfNum(myNum);
}
catch (e) {
    console.log("Caught an error: " + e)
}


// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

function myFunction() {
    const message = document.getElementById("res");
    message.innerHTML = "";
    let x = document.getElementById("inp").value;
    try { 
      if(x == "")  throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 20)   throw "is too high";
      if(x < 8)  throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
    finally {
      document.getElementById("inp").value = "";
    }
  }

  // In this example as the function throws error or not the finally statement is making input value empty whenever the function is called.