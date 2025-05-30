// setInterval() API
setInterval(() => {
  const d = new Date();
  const time = d.toLocaleTimeString();
  console.log("Time now: " + time);
}, 1000);

setInterval(
  (name) => {
    console.log("Hello: ", name);
  },
  2000,
  "Priyam Bhattacharya"
);
