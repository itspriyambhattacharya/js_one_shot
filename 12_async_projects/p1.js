// setInterval() API
const showDate = setInterval(() => {
  const d = new Date();
  const time = d.toLocaleTimeString();
  console.log("Time now: " + time);
}, 1000);
/*
setInterval(
  (name) => {
    console.log("Hello: ", name);
  },
  2000,
  "Priyam Bhattacharya"
);
*/

let nameRef = undefined;

document.querySelector("#start").addEventListener("click", function () {
  console.log("Starting name Display ");

  nameRef = setInterval(
    (name) => {
      console.log("Hello: ", name);
    },
    2000,
    "Priyam Bhattacharya"
  );
});

// clearInterval()

const stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click", (e) => {
  clearInterval(showDate);
  console.log("Time Display Stopped");
});

setTimeout(() => {
  clearInterval(nameRef);
  console.log("Showing name stopped");
}, 5000);
