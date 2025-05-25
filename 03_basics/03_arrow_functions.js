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
