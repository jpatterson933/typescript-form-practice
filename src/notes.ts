
// function to return a circle - we can set a type for the 
const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(10))


//when declaring types, use :
// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// explicit types arrays

let ninjas: string[];
ninjas = ['yogshi', 'mario']

// explicit types - union type
// this allows us to store strings or numbers or booleans in this array
let mixed: (string|number|boolean)[] = [];

// this is a single variable - the declaration of its type is string or number
let uid: string|number;

// explicit types - objects
// this variable can only be an object
let ninjaOne: object;

// we can explicityly declare stuff instide of an object
let nt: {
    name: string,
    age: number,
    beltColor: string,
    isCool: boolean
};

// type any means this can be any type
let test: any = 25;

// declare a variable as a function
let greet: Function;

greet = () => {
    console.log("hello")
}

// use ? like a?: to declare optional value or set a default value for the variable after its type is declared
// dont use optional value or default value together - alwasy put default optional at the end
const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
}

add (5, 10);

const minus = (a: number, b: number): /* declare return type for function */ number => {
    return a + b;
}

// this variable will automatically be assigned to the value that is outputted
// infers return type and sets itself as that type
let result = minus(10,7)

// CREATING TYPE ALIASES
// this alias is used in our logDetails function below
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum}

// type aliases help significantly with reducing code
const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

// setting types of functions using function signatures

// example 1 - a and be are the parameters that are defined
let gree: (a: string, b: string) => void; /* typescript automatically declares void */

gree = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// example 2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo;
    }
}

// example 3
let logDeets: (obj: {name: string, age: number}) => void;

logDeets = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}