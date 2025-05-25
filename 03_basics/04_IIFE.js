/* 
Immediately Invoked Function Expression (IIFE)

Syntax: (write function definition here)(); --> this semicolon here is compulsory. Usually js doesn't give erro for not giving semicolon, but here it will give error, if we write two IIFE without the semicolon.

*/

(function f1() {
  // Named IIFE
  console.log("Hello World");
})();

(() => {
  // Un-named IIFE
  console.log("Hello World 2");
})();

// IIFE with parameters

(function f2(name) {
  // Named IIFE
  console.log(`Hello ${name}`);
})("Priyam");

((a, b) => {
  // Un-named IIFE
  console.log(`The result is ${a + b}`);
})(3, 5);
