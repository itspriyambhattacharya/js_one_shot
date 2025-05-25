/* 
Immediately Invoked Function Expression (IIFE)

Syntax: (write function definition here)(); --> this semicolon here is compulsory. Usually js doesn't give erro for not giving semicolon, but here it will give error, if we write two IIFE without the semicolon.

*/

(function f1() {
  console.log("Hello World");
})();

(() => {
  console.log("Hello World 2");
})();

// IIFE with parameters

(function f2(name) {
  console.log(`Hello ${name}`);
})("Priyam");

((a, b) => {
  console.log(`The result is ${a + b}`);
})(3, 5);
