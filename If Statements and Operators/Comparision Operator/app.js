// == sign is known as the equality operator. It is used in comparing two variables but it ignores the data types of variables.
// === sign is known as the identity operator. This operator also checks the data type and compare two values.

// example:
const numberFive = 5
console.log( typeof numberFive);// output: number

const stringFive = "5"
console.log( typeof stringFive);// output: string

console.log(numberFive === stringFive); // output: false, because === also checks the type of variable.

console.log(numberFive == stringFive); // output: true, because == donot check the type of variable.


const accBalance = prompt("Enter your Account Balance")
const expense = prompt("Enter the cost of product you want to purchase")

if(accBalance > expense){
    alert("Yes, you can purchase the item")
}else{
    alert("Sorry! Insufficient Balance")
}

// !== is a comparision operator in JavaScript that checks if the two values being compared are not equal in either value or data type.