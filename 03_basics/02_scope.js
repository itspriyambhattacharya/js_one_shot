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
  // console.log(`Age: ${age}`);
  two();
}

one();
