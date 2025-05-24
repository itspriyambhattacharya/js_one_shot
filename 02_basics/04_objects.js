// singleton object
// const user = new Object();

// non-singleton object

/*
const user2 = {
  id: 45,
};
console.log(`Singleton object: ${user}\nNon-singleton object: ${user2}`);
console.log("Singleton object: ", user);
console.log("Singleton  toString(): ", user.toString());
console.log("Non-singleton object: ", user2);

console.log("\nDisplaying using JSON.stringify()\n");

console.log(
  `Singleton object: ${JSON.stringify(
    user
  )}\nNon-singleton object: ${JSON.stringify(user2)}`
);

*/
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Priyam",
      lastName: "Bhattacharya",
    },
  },
};

console.log(`The full object is ${JSON.stringify(regularUser)}`);
console.log(
  `The object after opening nesting one level is ${JSON.stringify(
    regularUser.fullName
  )}`
);

console.log(
  `The object after opening nesting two level is ${JSON.stringify(
    regularUser.fullName.userFullName
  )}`
);

console.log(
  `The object after opening nesting three level is ${JSON.stringify(
    regularUser.fullName.userFullName.firstName
  )}`
);

// Merging Objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = {
  3: "c",
  4: "d",
};

// wrong method of merging

let obj3 = { obj1, obj2 };
console.log(obj3);

obj3 = { ...obj1, ...obj2 };
console.log(`The correct way of merging objects: ${JSON.stringify(obj3)}`);

const obj4 = Object.assign({}, obj1, obj2);
console.log(`Merging objects using Object.assign(): ${JSON.stringify(obj4)}`);

// Array of Objects

const arr = [
  {
    id: 1,
    name: "Harry",
    email: "harry@gmail.com",
  },
  {
    id: 2,
    name: "Priyam",
    email: "itspriyam@gmail.com",
  },
  {
    id: 3,
    name: "Hitesh",
    email: "hitesh@google.com",
  },
];

console.log(arr[1].email);

console.log(`Object 1 is ${JSON.stringify(obj1)}`);

// Array from Object Keys
let a1 = Object.keys(obj1);
console.log(`The keys of obj1 are: ${a1}`);

// Array from Object Values
let a2 = Object.values(obj1);
console.log(`The values of obj1 are: ${a2}`);
