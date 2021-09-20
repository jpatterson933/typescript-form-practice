"use strict";
// function to return a circle - we can set a type for the 
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(10));
//when declaring types, use :
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
// declare a variable as a function
var greet;
greet = function () {
    console.log("hello");
};
// use ? like a?: to declare optional value or set a default value for the variable after its type is declared
// dont use optional value or default value together
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
};
add(5, 10);
