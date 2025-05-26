const clk = document.getElementById("clock");
console.log(clk);

setInterval(() => {
  const date = new Date();
  clk.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);
