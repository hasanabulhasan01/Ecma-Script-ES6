// Object-Oriented JavaScript:

// OOP: Basic idea is that you use objects to represent real world things.
// Objects have own properties and functions (methods). Objects can contain data and other code to represent info about what you are trying to model.
// Data/Methods Inside the object is encapsulated.

// Object Constructor:
// A constructor function is a blueprint for creating objects.
// It's like a template that defines what properties and methods an object should have.
// Constructor functions are declared using function keyword and typically start with an uppercase letter to distinguish them from regular functions.

function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Creating an instance of Car
let myCar = new Car('Toyota', 'Camry');
//new Keyword: When you use new with a constructor function,
// it creates a new object, sets the constructor's this context to that object, and returns the newly created object.
