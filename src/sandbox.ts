let greet: Function;

greet = () => {
  console.log("Hello");
};

const add = (a: number, b: number, c: number | string = 15) => {
  console.log(a + b);
};

add(10, 5);

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 5);
console.log(result);
