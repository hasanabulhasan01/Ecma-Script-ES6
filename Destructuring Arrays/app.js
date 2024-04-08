// Destructuring:

// The destructuring assignment syntax is a javascript expression that makes it possible to extract
// data from arrays or objects into distinct variables.

const myArray = [1, 2, 3, 4, 5]
const [a, b, c, d, e] = myArray;
console.log(a);
// as a is at the index 0 so that its value is 1 which is also at index 0.
// similarly as per the sequence b, c, d, e have their values as per their indexes.


//Another way
const arr = ["Hasan", "Taha", "Anas"]
let name1, name2, name3, name4;
[name1, name2, name3, name4 = "default value"] = arr
console.log(name1, name2, name3, name4);
// as shown in name4, we can provide default value when their is no element in that index it will show the default value.

//Swaping values of the variables;
let aa = 200;
let bb = 300;
let cc = 500;
console.log(aa, bb, cc);
[bb, cc] = [cc, bb]; // In this way we can swap variables in destructuring.
console.log (aa, bb, cc);

// Use with functions;

function carList() {
    return ["Alto", "Mehran", "Corolla", "Swift", "Liana"]
}
console.log(carList());

const [car1, car2, car3, car4, car5] = carList()
console.log(car1) 

// we can also ignore some values.

const anotherArray = [10, 20, 50, 100, 30]
const [numA, numB, , numC, numD] = anotherArray
console.log(numA, numB, numC, numD)
// to ignore a value we just left empty space.


// Use of rest pattern
const animalsArr = ["dogs", "cats", "birds", "snakes", "cows"]
const[dogString, catString, ...otherAnimals] = animalsArr

console.log(dogString);
console.log(catString);
console.log(otherAnimals);
// the rest pattern (...pattern) return the existing array with remaining elements.