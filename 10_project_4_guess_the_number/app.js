const form = document.querySelector(".form");
console.log(form);
const guess = document.querySelector(".guesses");
console.log(guess);
const msg = document.querySelector(".lowOrHi");

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
  } else {
    msg.innerHTML = `High`;
  }
});
