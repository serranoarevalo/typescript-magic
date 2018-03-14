class Human {
  public name: string;
  public age: number;
  public gender: string;
  public friends: string[];
  constructor(name: string, age: number, gender: string, friends: string[]) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.friends = friends;
  }
}

const lynnsFriends: string[] = ["Flynn", "Dal", "Japan Guy"];

const lynn = new Human("Lynn", 30, "female", lynnsFriends);

const describe = (human: Human): string => {
  return `The name is ${human.name}, the age is ${
    human.age
  } and the gender is ${human.gender}`;
};

console.log(lynn.friends);

export {};
