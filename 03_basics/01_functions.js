function greet() {
  console.log("Hello Wolrd");
}

function add2num(a, b) {
  return a + b;
}

function loginUser(username = "Invalid") {
  if (username === undefined) {
    console.log("\nEnter a valid username");
    return;
  }
  return `${username} just logged in.`;
}

greet();

const result = add2num(4, 6);
console.log(result);

const str = loginUser("Priyam Bhattacharya");
console.log(str);

console.log(loginUser("Priyam"));

// Rest Operator and function

function tryRest(v1, v2, ...val) {
  return val;
}

const arr = tryRest(10, 20, 45, 32, 67);
console.log(arr);

// Passing object to function

function tryObject(obj) {
  return `Username is ${obj.username} and age is ${obj.age}`;
}

const user = { id: 1, username: "itspriyambhattacharya", age: 23 };
const res1 = tryObject(user);
const res2 = tryObject({
  id: 2,
  username: "Abhijeet",
  age: 23,
});

console.log(`User 1 is ${res1}`);
console.log(`User 2 is ${res2}`);

// Passing array to function

const a1 = [12, 4, 56, 42];
function displaySecondValue(arr) {
  console.log(arr[1]);
}

displaySecondValue(a1);
