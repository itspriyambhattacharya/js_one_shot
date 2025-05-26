const body = document.querySelector("body");
console.log(body);
const btn = document.querySelectorAll(".button");
console.log(btn);
btn.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    console.log("Clicked");
    const reqId = item.id;
    console.log(reqId);
    body.style.backgroundColor = reqId;
  });
});
