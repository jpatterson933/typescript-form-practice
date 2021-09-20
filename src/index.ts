import { Invoice } from './classes/Invoice.js';

// const anchor = document.querySelector('a');

// console.log(anchor)

// const form = document.querySelector('form')!;

// set the type using 'as' 
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children)

// classes
// class Invoice {
//     // cannot be changed / it can still be accessed but it CANNOT ever be changed
//     readonly client: string;
//     // setting this as private means we cannot access this outside of the class - so cant be console logged but can be accessed on the format output
//     private details: string;
//     // public is default value
//     public amount: number;

//     constructor(c: string, d: string, a: number){
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }

//     format() {
//         return `${this.client} owes #${this.amount} for ${this.details}`;
//     }
// }

const invOne = new Invoice ('mario', 'work on web', 250)
const invTwo = new Invoice ('luigi', 'work on web', 500)

// we only allow invoices to be added to the invoice array
let invoices: Invoice[] = [];

invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach( inv => {
    console.log(inv.client, inv.amount, inv.format())
})
console.log(invoices)
// here we are grabbing the ids from our form and setting them as specific html elements using typescript
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// add event listener
// event listener put onto our form, and we console.log the values that are submitted
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    )
})

//shorthand way to write invoice with properties assigned to the varialbe (properties: public, private, readonly)
class InvoiceTwo {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format () {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

console.log(InvoiceTwo)
