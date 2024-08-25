"use strict";
let greet;
greet = () => {
    console.log("Hello");
};
const add = (a, b, c = 15) => {
    console.log(a + b);
};
add(10, 5);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
console.log(result);
