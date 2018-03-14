const name: string = "Nicolás",
  age: number = 24,
  gender: string = "male";

const describe = (name: string, age: number, gender: string): string => {
  return `The name is ${name}, the age is ${age} and he is a ${gender}`;
};

describe(name, age, gender);

export {};
