interface Human {
  name: string;
  age: number;
  gender: string;
}

const lynn = {
  name: "Lynn",
  age: 30,
  gender: "Female"
};

const describe = (human: Human): string => {
  return `The name is ${human.name}, the age is ${
    human.age
  } and the gender is ${human.gender}`;
};

console.log(describe(lynn));

export {};
