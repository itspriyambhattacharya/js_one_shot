const myName = "priyam bhattacharya ";
const repoCount = 50;
console.log(myName + repoCount + " count");

const s1 = new String("hello");
const s2 = "hello";
console.log(typeof s1);
console.log(typeof s2);
s3 = s1;
s4 = new String(s2);
console.log(`type of ${s4} is ${typeof s4}`);

s3 = "hello world";
s4 = new String("priyam");
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s1.__proto__);

const str = "Hello World";

console.log(str.slice(1, 4)); // "ell"
console.log(str.substring(1, 4)); // "ell"

console.log(str.slice(4, 1)); // ""
console.log(str.substring(4, 1)); // "ell" (swaps 4 and 1)

console.log(str.slice(-3)); // "rld"
console.log(str.substring(-3)); // "Hello World" (treats -3 as 0)

console.log(`Testing: ${str.slice(-3, -19)}`);

const url = "https://www.youtube.com/watch?v=sscX432bMZo&t=3254s";

console.log(url.replaceAll("s", "abcd"));

console.log(url.split("/"));
