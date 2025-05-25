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
