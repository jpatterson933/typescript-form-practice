export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // using the HasFormatter we ensure that this format returns a string which it does
    format() {
        return `${this.recipient} is owed #${this.amount} for ${this.details}`;
    }
}
