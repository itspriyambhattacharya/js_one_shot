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
