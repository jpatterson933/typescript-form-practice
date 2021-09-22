// Elements grabbed from the html page
// Imported classes for robots
import { RobotLord } from './classes/Robots.js';
// List of Robot Lords
const firstLord = new RobotLord('Sir Galveen', 67, 3124, 439, 9000);
const lordsSon = new RobotLord('Flair Eentoe', 17, 890, 3219, 2918);
// Here we are only allowing RobotLords to be added to the robotLords array
let robotLords = [];
// here we are adding our robots to the robotlord arrays
robotLords.push(firstLord, lordsSon);
const showRobots = () => {
    const kingsChair = document.querySelector('.robots');
    for (let i = 0; i < robotLords.length; i++) {
        const p = document.createElement('p');
        p.textContent = robotLords[i].name;
        kingsChair.append(p);
    }
};
showRobots();
// console.log(invoices)
// here we are grabbing the ids from our form and setting them as specific html elements using typescript
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const strength = document.querySelector('#strength');
const attack = document.querySelector('#attack');
const defense = document.querySelector('#defense');
name.append(firstLord.name);
console.log(robotLords);
// Variables being set to created interfaces
const jerryBot = {
    name: 'Jerry',
    age: 132,
    duties: ['sweep', 'mop', 'deep clean shit'],
    willServe: true
};
const newBot = {
    name: 'NoobNoob',
    age: 12,
    duties: ['chill', 'relax', 'focus'],
    willServe: true
};
const botLord = {
    name: 'Robo-Lord',
    age: 29873,
    speak(text) {
        console.log('I will take over the world!');
    },
    dance(choice) {
        choice = true;
        return choice;
    }
};
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spend", amount);
        return amount;
    }
};
// imported classes for our invoice and payment form
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';
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
const form = document.querySelector('.new-item-form');
// console.log(form.children)
const invOne = new Invoice('mario', 'work on web', 250);
const invTwo = new Invoice('luigi', 'work on web', 500);
// we only allow invoices to be added to the invoice array
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach( inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
// console.log(invoices)
// here we are grabbing the ids from our form and setting them as specific html elements using typescript
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instnace
// adding the '!' at the end of this tells typescript that the ul will definitly be found on the page
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// add event listener
// event listener put onto our form, and we console.log the values that are submitted
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
