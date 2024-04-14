//Maps:
//  Maps are collections of key-value pairs where both the keys and values can be of any data type.
//  Unlike objects, which only allow string or symbol keys, maps can have keys of any type, including objects, functions, and primitive values.

// Key Features:
// Keys can be of any data type, not limited to strings or symbols.
// Maintains the insertion order of elements, which is useful for scenarios where order matters.
// Allows iterating through elements using methods like forEach, for...of, and entries.
// Provides methods for checking the presence of keys (has), getting values (get), setting values (set), and deleting entries (delete).

// Example:
// Mapping IDs to Names:
let employeeMap = new Map();

employeeMap.set(1, "Abul Hasan");
employeeMap.set(2, "Mohammad Naqi");
employeeMap.set(3, "Faraz");

console.log(employeeMap.get(2));

employeeMap.forEach((value, key) => {
  console.log(`Employee ID: ${key}, Name: ${value}`);
});

// Iterate and modifying entries
let myMap = new Map();

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);

// Iterating and modifying values
myMap.forEach((value, key, map) => {
  map.set(key, value * 2); // Double each value
});

console.log(myMap.get("b")); 

// Set Object:
// Its similar to an array except every element is unique.
// Lets you store unique values of any type.
// Supports methods for adding elements (add), deleting elements (delete), checking presence of elements (has), and clearing the set (clear).

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate will be ignored

console.log(mySet); // Output: Set(3) { 1, 2, 3 }


// use set to check if the value exists
let Set = new Set(['apple', 'banana', 'orange']);

console.log(Set.has('banana')); // Output: true
console.log(Set.has('grape')); // Output: false

// Iterating over values
let colorSet = new Set(['red', 'green', 'blue']);

colorSet.forEach(value => {
    console.log(value);
});