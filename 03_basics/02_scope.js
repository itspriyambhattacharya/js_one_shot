let a = 10;
const b = 20;
var c = 30;

//scope {}
if (true) {
  let a = 30;
  console.log(`a inside if is ${a}`);
}
console.log(`a is ${a}`);
console.log(`b is ${b}`);
console.log(`c is ${c}`);

// Nested function - Function inside a block(if/loop/ or any othe function)

function one() {
  const uname = "priyam";
  function two() {
    const age = 23;
    console.log(`Username: ${uname}`);
  }
  // console.log(`Age: ${age}`); ===> error
  two();
}

one();

// Nested if and closure

if (true) {
  const uname = "priyam";
  if (uname === "priyam") {
    const age = 23;
    console.log(uname + " " + age);
  }
  // console.log(age); ===> error
}
// console.log(uname); ===> error

// Hoisting

addOne(5);

function addOne(val) {
  return val + 1;
}

// addTwo(5); ===> error
const addTwo = function (val) {
  return val + 2;
};

addTwo(5);
