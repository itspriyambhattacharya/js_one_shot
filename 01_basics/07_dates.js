let myDate = new Date();
console.log(`Lagacy date is ${myDate}`);

console.log(`\ntoDateString() is ${myDate.toDateString()}`);
console.log(`\ntoISOString() is ${myDate.toISOString()}`);
console.log(`\ntoJSON() is ${myDate.toJSON()}`);
console.log(`\ntoLocaleDateString() is ${myDate.toLocaleDateString()}`);
console.log(`\ntoLocaleString() is ${myDate.toLocaleString()}`);

let myCustomDate = new Date(2001, 8, 9);
console.log(myCustomDate.toDateString());

let myDob = new Date(2001, 8, 9, 8, 16, 0);

console.log(`My Date of Birth is ${myDob.toLocaleString()}`);
