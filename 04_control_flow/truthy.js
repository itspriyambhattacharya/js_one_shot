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
