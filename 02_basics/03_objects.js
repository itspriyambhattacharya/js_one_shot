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
};

console.log(obj[mySymbol]);
console.log(typeof obj[mySymbol]);
