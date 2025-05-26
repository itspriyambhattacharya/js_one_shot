const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents the default operation of sending the values to server

  let ht = Number(document.querySelector("#height").value);
  let wt = Number(document.querySelector("#weight").value);
});
