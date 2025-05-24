const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);
console.log(id);
console.log(anotherId);
const bigNumber = 22445837563346232822093343;
const bigNumber2 = 22445837563346232822093343n;
console.log(bigNumber);
console.log(typeof bigNumber);
console.log(bigNumber2);
console.log(typeof bigNumber2);

// Reference Datatype

console.log("Reference Datatype");

const arr = ["hello", "world", "array"];

const obj = {
  name: "Priyam Bhattacharya",
  age: 23,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myFunction);

// Memory in Javascript

// Stack and Heap

let u1 = {
  "email id": "email1@gmail.com",
  upi: "myupi@oksbi",
};

let u2 = u1;

u2["email id"] = "u2@gmail.com";
u2.upi = "u2@ybl";

console.log(u1);
console.log(u2);
