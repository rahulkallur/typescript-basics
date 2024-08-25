let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;

isLoggedIn = true;

let ninjas: string[] = [];

ninjas.push("rahul");

// Union Types
let mixed: (string | number)[] = [];

mixed.push("hello");
mixed.push(20);

console.log(mixed);

// Objects
let ninjaOne: object;

ninjaOne = {
  name: "Rahul",
  age: 29,
  skills: ["Node.js", "JavaScript", "Docker", "kubernetes"],
};

console.log(ninjaOne);

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = { name: "Rahul", age: 29, beltColour: "black" };
