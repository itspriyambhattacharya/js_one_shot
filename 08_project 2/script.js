const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents the default operation of sending the values to server

  const ht = document.querySelector("#height").value;
  console.log(ht);
});
