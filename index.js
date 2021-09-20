// function to return a circle - we can set a type for the 
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(10));
// explicit types
var character;
var age;
var isLoggedIn;
// explicit types arrays
var ninjas;
ninjas = ['yogshi', 'mario'];
// explicit types - union type
// this allows us to store strings or numbers or booleans in this array
var mixed = [];
// this is a single variable - the declaration of its type is string or number
var uid;
// explicit types - objects
// this variable can only be an object
var ninjaOne;
// we can explicityly declare stuff instide of an object
var nt;
// type any means this can be any type
var test = 25;
