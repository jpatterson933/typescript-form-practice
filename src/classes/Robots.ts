import { HasFormatter } from "../interfaces/HasFormatter";

export class RobotLord implements HasFormatter {
    constructor(
        public name: string,
        public age: number,
        public strength: number,
        public attack: number,
        public defense: number,
    ){}
    // using the HasFormatter we ensure that this format returns a string which it does
    format() {
        return `${this.name} ${this.age} ${this.strength} ${this.attack} ${this.defense}`;
    }
}