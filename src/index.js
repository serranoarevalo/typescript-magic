"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender, friends) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.friends = friends;
    }
}
const lynnsFriends = ["Flynn", "Dal", "Japan Guy"];
const lynn = new Human("Lynn", 30, "female", lynnsFriends);
const describe = (human) => {
    return `The name is ${human.name}, the age is ${human.age} and the gender is ${human.gender}`;
};
console.log(lynn.friends);
//# sourceMappingURL=index.js.map