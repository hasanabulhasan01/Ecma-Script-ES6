// Object Destructuring;
// JavaScript Object Destructuring is the syntax for extracting values from an object property and assigning them to a variable. 

const userObj = {
    Name : "Abul Hasan",
    Id : 1578454,
    Designation: "Intern",
    Age : 23
}
const {Name, Id, Designation, Age} = userObj;
console.log(Name, Id, Designation, Age);


// In functions;
const carDetails = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }  
  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    console.log(message);
  }
  myVehicle(carDetails);


  // Nested Objects Destructuring.
  