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
const dsp = setTimeout(display, 3000); // giving reference of the functions because the functions are written elsewhere
setTimeout(() => {
  console.log("Hello Priyam");
}, 4000);

const changeHeading = setTimeout(() => {
  const h1 = document.querySelector("h1");
  console.log(h1);
  h1.innerHTML = "Asynchronous Javascript";
  console.log("Not cleared");
}, 10000);

//clearTimeout(reference of setTimeout()) - used to clear a setTimeout() API
clearTimeout(dsp); // not a good way to clear setTimeout(), WE usually use clearTimeout() or clearInterval() on some event

// clearing a setTimeout() when an event occurs

const btn = document.getElementById("stop");
btn.addEventListener("click", (e) => {
  clearTimeout(changeHeading);
  console.log("Cleared setTimeout() successfully");
});
