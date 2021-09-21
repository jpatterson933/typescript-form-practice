const kingsChair = document.querySelector('.robot-lord') as HTMLFormElement;
const listOfLords = document.querySelector('.robot-lord-list') as HTMLUListElement;
import { RobotLord } from './classes/Robots.js';

const firstLord = new RobotLord ('Sir Galveen', 67, 3124, 439, 9000 );
const lordsSon = new RobotLord('Flair Eentoe', 17, 890, 3219, 2918);

const robotKings = [firstLord, lordsSon]

console.log(robotKings);

// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): Number;
}

interface isBot {
    name: string;
    age: number;
    speak(a: string): void;
    dance(a: boolean): (string | boolean);
}

interface botServant {
    name: string;
    age: number;
    duties: string[];
    willServe: boolean;
}

const jerryBot: botServant = {
    name: 'Jerry',
    age: 132,
    duties: ['sweep', 'mop', 'deep clean shit'],
    willServe: true
}

const newBot: botServant = {
    name: 'NoobNoob',
    age: 12,
    duties: ['chill', 'relax', 'focus'],
    willServe: true
}

console.log(jerryBot, newBot)

const botLord: isBot = {
    name: 'Robo-Lord',
    age: 29873,
    speak( text: string): void {
        console.log('I will take over the world!');
    },
    dance(choice: boolean): boolean {
        choice = true;
        return choice;
    }
}
console.log(botLord)



// here we set a variable to an interface
const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log("I spend", amount)
        return amount;
    }
};

console.log(me);





import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'webwork', 250);
// docTwo = new Payment ('mario', 'plumbing', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs)

// const anchor = document.querySelector('a');
// console.log(anchor)
// const form = document.querySelector('form')!;
// set the type using 'as' 
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children)

const invOne = new Invoice ('mario', 'work on web', 250);
const invTwo = new Invoice ('luigi', 'work on web', 500);

// we only allow invoices to be added to the invoice array
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach( inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
// console.log(invoices)
// here we are grabbing the ids from our form and setting them as specific html elements using typescript
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instnace
// adding the '!' at the end of this tells typescript that the ul will definitly be found on the page
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
// add event listener
// event listener put onto our form, and we console.log the values that are submitted
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')


    console.log(doc)
});