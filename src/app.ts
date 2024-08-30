import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

// ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

// GENERICS
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);

  return { ...obj, uid };
};

let docOne = addUID({ name: "Rahul", age: 28 });

//with INterface

interface Resource<T> {
  uid: number;
  resourceName: string;
  resourceType: ResourceType
  data: object;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "Person",
  resourceType:ResourceType.PERSON,
  data: {
    name: "Shaun",
  },
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: "Person",
  resourceType:ResourceType.FILM,
  data: ["bread", "milk"],
};


console.log("docThree", docThree);
console.log("docFour", docFour);