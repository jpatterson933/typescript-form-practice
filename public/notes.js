"use strict";
// function to return a circle - we can set a type for the 
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(10));
//when declaring types, use :
// explicit types
let character;
let age;
let isLoggedIn;
// explicit types arrays
let ninjas;
ninjas = ['yogshi', 'mario'];
// explicit types - union type
// this allows us to store strings or numbers or booleans in this array
let mixed = [];
// this is a single variable - the declaration of its type is string or number
let uid;
// explicit types - objects
// this variable can only be an object
let ninjaOne;
// we can explicityly declare stuff instide of an object
let nt;
// type any means this can be any type
let test = 25;
// declare a variable as a function
let greet;
greet = () => {
    console.log("hello");
};
// use ? like a?: to declare optional value or set a default value for the variable after its type is declared
// dont use optional value or default value together - alwasy put default optional at the end
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(5, 10);
const minus = (a, b) => {
    return a + b;
};
// this variable will automatically be assigned to the value that is outputted
// infers return type and sets itself as that type
let result = minus(10, 7);
// type aliases help significantly with reducing code
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
// setting types of functions using function signatures
// example 1 - a and be are the parameters that are defined
let gree; /* typescript automatically declares void */
gree = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDeets;
logDeets = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
