// setTimeout() use

const a = () => {
  console.log("Hello");
};
const b = function () {
  console.log("World");
};
function display() {
  console.log("Priyam Bhattacharya");
}

setTimeout(a, 2000); // giving reference of the functions because the functions are written elsewhere
setTimeout(b, 5000); // giving reference of the functions because the functions are written elsewhere
setTimeout(display, 3000); // giving reference of the functions because the functions are written elsewhere
setTimeout(() => {
  console.log("Hello Priyam");
}, 4000);
