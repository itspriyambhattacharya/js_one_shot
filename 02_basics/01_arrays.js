// const arr = [7, 8, 5, 4, 3, 9, 32, true, "Priyam"];
// console.log(`The array is ${arr}, the type of array is ${typeof arr}`);

const arr = [0, 1, 2, 3, 4, 5];
const q2 = ["hello", "world"];
const a3 = new Array(1, 3, 5, 7, 9);

console.log("\nSome Important Array Methods:");

/*
let size = arr.push(6);
size = arr.push(7);
console.log(
  `1. After pushing 6 and 7, the array is ${arr} and size is ${size}`
);

let x = arr.pop();
console.log(
  `2. After deleting the last element, the array is ${arr}, the deleted element is ${x} and size is ${--size}`
);

size = arr.unshift(-5);
console.log(
  `3. After pushing -5 at beginning, the array is ${arr} and size is ${size}`
);

size = arr.unshift(-55);
console.log(
  `4. After pushing -55 at beginning, the array is ${arr} and size is ${size}`
);

x = arr.shift();
console.log(
  `5. After deleting the first element, the array is ${arr}, the deleted element is ${x} and size is ${--size}`
);

x = arr.shift();
console.log(
  `5. After deleting the first element, the array is ${arr}, the deleted element is ${x} and size is ${--size}`
);

x = arr.shift();
console.log(
  `6. After deleting the first element, the array is ${arr}, the deleted element is ${x} and size is ${--size}`
);

x = arr.shift();
console.log(
  `7. After deleting the first element, the array is ${arr}, the deleted element is ${x} and size is ${--size}`
);

x = arr.shift();
console.log(
  `8. After deleting the first element, the array is ${arr}, the deleted element is ${x} and size is ${--size}`
);

x = arr.shift();
console.log(
  `9. After deleting the first element, the array is ${arr}, the deleted element is ${x} and size is ${--size}`
);

console.log(`Does ${arr} include 54? ${arr.includes(54)}`);
console.log(`Does ${arr} include 5? ${arr.includes(5)}`);
console.log(`The index of 5 in the array ${arr} is: ${arr.indexOf(5)}`);
console.log(`The index of 15 in the array ${arr} is: ${arr.indexOf(15)}`);

const joinArr = arr.join(" ");
console.log(`The typeof arr is ${typeof arr}`);
console.log(`The joinArr is ${joinArr}`);
console.log(`The typeof joinArr is ${typeof joinArr}`);
*/

a1 = [1, 2, 3, 4, 5];
const na1 = a1.slice(1, 4);
console.log(`The original array is ${a1}\nna1 is ${na1}`);

const na2 = a1.splice(1, 4);
console.log(`The original array is ${a1}\nna1 is ${na2}`);
