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
