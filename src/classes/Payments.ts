import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){}


    // using the HasFormatter we ensure that this format returns a string which it does
    format() {
        return `${this.recipient} is owed #${this.amount} for ${this.details}`;
    }
}