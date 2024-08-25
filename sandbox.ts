let age: any = 25;

age = true;
console.log(age);
age = "hello";
age = { name: "rahul" };
console.log(age)

let mixed: any[] = [];

mixed.push(20)
mixed.push('hello');
mixed.push(true)

console.log("Mixed: " + mixed)

let obj: {
  name:any,
  age:any,
}

obj = {name: "rahul", age:29}
console.log(obj);

obj = {name:25,age:"kiran"}
console.log(obj)

