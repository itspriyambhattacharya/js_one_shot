const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = arr.map((item) => item * 10);
console.log(res);

// Method Chaining

const res2 = arr
  .map((item) => item * 10)
  .map((item) => item + 10)
  .filter((item) => item > 40);
console.log(res2);
