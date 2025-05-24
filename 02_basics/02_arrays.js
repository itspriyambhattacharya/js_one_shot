const a1 = ["tim", "tom", "cook", "jim", "jimmy"];
const a2 = ["timmy", "simmy", "ana", "emily"];

// a1.push(a2);
// console.log(a1);

// console.log(a1[5][1]);

let a3 = a1.concat(a2);
console.log(a3);

let a4 = [...a1, ...a2];
console.log(`Created using spread operator: ${a4}`);
