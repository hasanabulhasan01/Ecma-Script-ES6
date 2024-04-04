// nested If statement means an if statement inside an if statement
// note: nested if statements run step by step. If parent statement is false it will not go further in the statement.

// examples :

const bankBalance = 500;
const costOfItem = 380;
const taxAmount = 20;

if (bankBalance >= costOfItem) {
  console.log("Balance OK!, now checking tax");
  if (taxAmount <= 20) {
    console.log("tax amount too high, now checking possibility");
    if (bankBalance > costOfItem + taxAmount) {
      console.log("yes, you can buy it");
    }
  }
}



var userName = prompt("Please enter your name:");
if (userName !== null && userName !== "") {
  var greeting = "Hi, " + userName + "!";
  alert(greeting);
} else {
  alert("You didn't enter a name. Please try again.");
}



var mathsMarks = +prompt("Enter marks obtained in Maths:");
var physicsMarks = +prompt("Enter marks obtained in Physics:");
var chemistryMarks = +prompt("Enter marks obtained in Chemistry:");

var totalMarks = +prompt("Enter total marks for the three subjects:");

var totalObtainedMarks = mathsMarks + physicsMarks + chemistryMarks;

var percentage = (totalObtainedMarks / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<h2>Marks Sheet</h2> <br>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");



var teamAName = prompt("Enter the name of Team A:");
var teamAScore = parseInt(prompt("Enter the total score of Team A:"));

var teamBName = prompt("Enter the name of Team B:");
var teamBScore = parseInt(prompt("Enter the total score of Team B:"));

var result;

if (teamAScore > teamBScore) {
  result = teamAName + " has won the game!";
} else if (teamBScore > teamAScore) {
  result = teamBName + " has won the game!";
} else {
  result = "It's a tie!";
}
alert(result);