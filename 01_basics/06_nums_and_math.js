const score = 400;
console.log(score);
const balance = new Number(100);
console.log(score.toFixed(3));
const money = 1000000000;

console.log(balance);
console.log(balance.toPrecision(2));
console.log(money.toLocaleString("en-IN"));

// Math module

// console.log(Math.log2(16));
// console.log(Math.log(13).toFixed(3));
// console.log(`The min value of the array is ${Math.min((3, 6, 2, 8, 1))}`);

console.log(Math.random()); // generates a random number between 0 and 1

const min = 100;
const max = 260;

let r = Math.random();
const backup = r;
console.log(`Step 1: A random number between 0 and 1 is ${r}`);
r = r * max;
console.log(`Step 2: A random number between 0 and ${max - 1} is ${r}`);
r = r + 1;
console.log(`Step 3: A random number between 1 and ${max - 1} is ${r}`);
r = backup;
r = r * (max - min + 1) + min;
console.log(`Step 4: A random number between ${min} and ${max - 1} is ${r}`);
r = Math.floor(r);
console.log(
  `Step 5: A random number(integer) between ${min} and ${max - 1} is ${r}`
);
