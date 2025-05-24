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
