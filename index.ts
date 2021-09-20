
// function to return a circle - we can set a type for the 
const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(10))


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