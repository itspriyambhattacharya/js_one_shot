// Truthy and Falsy values in js
console.log(`Falsy values are 0, -0, 0n, undefined, null, NaN, false, ""`);

let arr = [];
let obj = {};

if (arr.length === 0) {
  console.log("Array is Empty");
}
if (Object.keys(obj).length === 0) {
  console.log("Object is Empty");
}

// Nullish Coalescing Operator(??): null, undefined

let val1 = 10 ?? 15;
console.log(val1);
val1 = null ?? 15;
console.log(val1);
val1 = undefined ?? 15;
console.log(val1);

val1 = 20 ?? 15 ?? 10;
console.log(val1);
