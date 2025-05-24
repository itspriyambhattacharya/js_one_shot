// singleton

// Object.create() -> singleton

//object literal

const jsUser = {}; // empty object

const user = {
  firstName: "Priyam",
  lastName: "Bhattacharya",
  email: "itspriyambhattacharya@gmail.com",
  age: 23,
  location: "Kolkata",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// Accessing object elements

console.log(user.email);
console.log(user["age"]);
console.log(
  `The name of the user is ${user.firstName} ${user.lastName}\nAge is ${user.age}\nLives in ${user["location"]}`
);

// Using a symbol as key

const mySymbol = Symbol("key1");

const obj = {
  fname: "Priyam",
  lname: "Bhattacharya",
  age: 23,
  [mySymbol]: "myKey1",
  location: "Kolkata",
};

console.log(obj[mySymbol]);
console.log(typeof obj[mySymbol]);

console.log(obj);
obj.location = "Mumbai";
console.log(obj);

// Freezing an object

Object.freeze(obj);

obj.age = 24;
console.log(`After freeze ${obj}`);

// Function in Object

user.greet = function () {
  console.log(`Hello User`);
};

user.greet2 = function () {
  console.log(`Hello ${this.firstName} ${this.lastName}`);
};

console.log(user);
console.log(user.greet());
console.log(user.greet2());
