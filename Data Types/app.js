// Data Types

// 01: Numbers & Strings 

console.log(10 % 6)
// % it is the modulo sign. 
//it will return what the remainder would be if 10 is divided by 6, which is 4.

console.log(10 % 5)
// % it is the modulo sign. 
//it will return what the remainder would be if 10 is divided by 5, which is 0.

console.log(Math.random())
// it gives us a random number between 0 and lower than 1

console.log("10" + 125)
// if one string and one number they will concat return 10125

console.log(parseInt("10") + 125)
// parseInt() will convert a string into integer returning 135

console.log(parseInt("hello"))
// It will return NaN because hello is not a number.

console.log(isNaN("hello"))
// It will return true because hello is not a number.

console.log(+"25")
// + before a string will convert it into a number.

console.log("Chris".charAt(0))
// It will return "C" because it is at the index 0 of the string.

//.toUpperCase() is used to convert lower case alphabets into upper case.

// <------------------------------------------------------------------------------->


// 02: Booleans
// A javascript Boolean represents one of two values: True or False

// The following evaluates to true/ truthy values
var hasContent = "yeuiedhuidedi"
var myArray = ["yiebxcncd", 2, 3, 6, "jdhdss"]

// the following evaluates to false / false values
var doesNotHaveContent = ""
var isZero = 0
var nonAssignedVariables;
var isFalse = false;
var isNotANumber = NaN

// null and undefined are not the same as:
// null is an assignment value, meaning that a variable has been declared and given the value of null .
// undefined means a variable has been declared but has not yet been assigned a value.



// 03: Objects
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// this is the basic example of objects as the details of a person is written in key value pairs

console.log(person.firstName)
// to extract the property we use .key after object e.g.person.firstName

// we can make nested objects also as follows:
var donut = {
    type : "coconut",
    glazed : "true",
    sweetness : 8,
    price : {
        small : "200",
        large : "350"
    },
    hasChocolate: false 
}

console.log(donut.price.large)
//this is how we can extract the value in nested objects. Object name.key


// 04: Arrays
// Collection of data is called an array 

var myArray = [1, 2, 3, "adhuasjd", "fufjdd", true, "person"]
// array index starts from 0. 
// array length is always 1 greater than the indexes.
// myArray have total 06 indexes.
// length of myArray is 07.

console.log(myArray[3])

// Arrays have so many methods 

myArray.push("peter")
// this method is used to add new element at the end of the array. Peter will be added in the last.

myArray.pop()
// console.log(myArray)
// .pop() method removes the last element from an array.

myArray.unshift("Parker")
// the unshift() method adds a new element at the beginning of the array.

myArray.shift()
// this method removes the first array element and shift all the others to a lower index.

// to concat two arrays we use .concat() method.
myNamesArray = ["Peter", "Jack", "John", "Jane"]
concatedArrays = myArray.concat(myNamesArray); // this will concat both arrays.
console.log(concatedArrays);

var slicedArray = concatedArrays.slice(3, 6)
console.log(slicedArray, "sliced Array....")
// .slice() method slices out a piece of an array into a new array.
// The method then selects elements from the start argument, and up to (but not including) the end argument.

var splicedArray = slicedArray.splice(2, 0, "Zack", "Chris")
console.log(splicedArray, "spliced Array.....")
// .splice() method can be used to add or delete items to an array.
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Zack" , "Chris") define the new elements to be added.
// The splice() method returns an array with the deleted items.

