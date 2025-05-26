const form = document.querySelector(".form");
console.log(form);
const guess = document.querySelector(".guesses");
console.log(guess);
const msg = document.querySelector(".lowOrHi");
let lastResult = document.querySelector(".lastResult");
let chances = 10;

const low = 1;
const high = 100;
const r = Math.floor(Math.random() * (high - low + 1) + low);
console.log("Random Number is: ", r);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let val = document.getElementById("guessField").value;
  val = Number(val);
  console.log(val, typeof val);
  if (val < 1 || val > 100 || isNaN(val) || val === "") {
    guess.innerHTML = `Invalid number`;
  } else {
    guess.innerHTML = `${val}`;
  }

  if (val < r) {
    msg.innerHTML = `Low`;
    chances--;
    lastResult.innerHTML = `${chances}`;
  } else if (val > r) {
    msg.innerHTML = `High`;
    chances--;
    lastResult.innerHTML = `${chances}`;
  } else {
    msg.innerHTML = `Value Matched`;
    console.log("Value Matched");
  }
  if (chances === 0) {
    msg.innerHTML = `No chances left, you loose.`;
    const subBtn = document.getElementById("subt");
    subBtn.setAttribute("disabled", true);
  }
});
