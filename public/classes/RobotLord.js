export class RobotLord {
    constructor(name, age, strength, attack, defense) {
        this.name = name;
        this.age = age;
        this.strength = strength;
        this.attack = attack;
        this.defense = defense;
    }
    // using the HasFormatter we ensure that this format returns a string which it does
    format() {
        return `${this.name} ${this.age} ${this.strength} ${this.attack} ${this.defense}`;
    }
}
