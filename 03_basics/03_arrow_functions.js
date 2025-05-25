const mySymbol = Symbol("123");
const user = {
  username: "Priyam",
  age: 23,
  [mySymbol]: "Symbol Key",
  welcome: function () {
    console.log(`Hello ${this.username}, Good Morning`);
    console.log(this);
  },
};

// user.welcome();
/*
user.username = "Sam";
user.welcome();
*/
// console.log(this);

function one() {
  let uname = "priyam";
  console.log(this);
  // console.log(this.uname); // output -> undefined
}
one();

const two = function () {
  let uname = "priyam";
  console.log(this);
  // console.log(this.uname); // output -> undefined
};

two();

// arrow functions

console.log("\nArrow Functions start:\n");

const three = () => {
  const uname = "harry";
  console.log(this);
  // console.log(this.uname); // outout -> undefined
};

three();

const addTwo = (n1, n2) => {
  return n1 + n2;
};

let x = addTwo(3, 4);
let y = addTwo(5, 7);
console.log(`\nResult 1 is ${x}\nResult 2 is ${y}`);

// Implicite return

const impRet = (a, b) => a - b;

console.log(impRet(7, 5));
