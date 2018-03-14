class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", null, "female");

const describe = (human: Human): string => {
  return `The name is ${human.name}, the age is ${
    human.age
  } and the gender is ${human.gender}`;
};

console.log(lynn.age);

export {};
