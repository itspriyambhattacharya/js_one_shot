const body = document.querySelector("body");
console.log(body);
const btn = document.querySelectorAll(".button");
console.log(btn);
btn.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    const reqId = item.id;
    body.style.backgroundColor = reqId;
  });
});
