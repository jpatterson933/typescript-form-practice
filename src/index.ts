// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): Number;
}

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
}

console.log(me)



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

const invOne = new Invoice ('mario', 'work on web', 250)
const invTwo = new Invoice ('luigi', 'work on web', 500)

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
const list = new ListTemplate(ul)
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
})

//shorthand way to write invoice with properties assigned to the varialbe (properties: public, private, readonly)
// class InvoiceTwo {
//     constructor(
//         readonly client: string,
//         private details: string,
//         public amount: number,
//     ){}

//     format () {
//         return `${this.client} owes ${this.amount} for ${this.details}`
//     }
// }

// console.log(InvoiceTwo)
