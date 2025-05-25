const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using taditional function
const res1 = arr.reduce(function (acc, val) {
  console.log(`Accumulator: ${acc}, Current Value: ${val}`);
  return acc + val;
}, 0);
console.log(res1);

// using arrow function: Implicit return

const res2 = arr.reduce((acc, val) => acc + val, 0);
console.log(res2);

// using arrow function: explicit return
console.log("Arrow function with explicit return");

const res3 = arr.reduce((acc, val) => {
  console.log(`Accumulator: ${acc}, Current Value: ${val}`);

  return acc + val;
}, 0);
console.log(res3);
