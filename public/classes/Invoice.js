export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // using the HasFormatter we ensure that this format returns a string which it does
    format() {
        return `${this.client} owes #${this.amount} for ${this.details}`;
    }
}
// Another longer way to write the above
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
