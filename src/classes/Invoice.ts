import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}


    // using the HasFormatter we ensure that this format returns a string which it does
    format() {
        return `${this.client} owes #${this.amount} for ${this.details}`;
    }
}