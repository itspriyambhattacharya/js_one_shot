const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using taditional function
const res1 = arr.reduce(function (acc, val) {
  console.log(`Accumulator: ${acc}, Current Value: ${val}`);
  return acc + val;
}, 0);
console.log(res1);
