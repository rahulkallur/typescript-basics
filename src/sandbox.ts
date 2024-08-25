// Exmaple1
let greet: (a: string, b: string) => void;

greet = (name: string, message: string) => {
  console.log(`${name} says ${message}`);
};

// Example2
let calc: (a: number, b: number, c: string) => number;

calc = (a: number, b: number, action: string) => {
  if (action === "add") {
    return a * b;
  } else {
    return a - b;
  }
};

// Example3
let logDetails: (obj: { name: string; age: number }) => void;

type Person = { name: string; age: number };

logDetails = (obj: Person) => {
  console.log(`${obj.name} is ${obj.age} years old`);
};
