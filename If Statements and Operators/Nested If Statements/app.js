// nested If statement means an if statement inside an if statement 
// example : 

const bankBalance = 500
const costOfItem = 380
const taxAmount = 20

if (bankBalance >= costOfItem) {
    console.log("Balance OK!, now checking tax")
    if (taxAmount <= 20) {
        console.log("tax amount too high, now checking possibility")
        if (bankBalance > costOfItem + taxAmount) {
            console.log("yes, you can buy it")
        }
    }
}

// note: nested if statements run step by step. If parent statement is false it will not go further in the statement.