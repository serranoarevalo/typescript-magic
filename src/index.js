"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", null, "female");
const describe = (human) => {
    return `The name is ${human.name}, the age is ${human.age} and the gender is ${human.gender}`;
};
console.log(lynn.age);
//# sourceMappingURL=index.js.map