import { HasFormatter } from "../interfaces/HasFormatter";

export class RobotLord implements HasFormatter {
    constructor(
        public name: string,
        public age: (number | string),
        public strength: (number | string),
        public attack: (number | string),
        public defense: (number | string),
    ){}
    // using the HasFormatter we ensure that this format returns a string which it does
    format() {
        return `${this.name} ${this.age} ${this.strength} ${this.attack} ${this.defense}`;
    }
}