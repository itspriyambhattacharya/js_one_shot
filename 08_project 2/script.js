const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents the default operation of sending the values to server

  let ht = Number(document.querySelector("#height").value);
  let wt = Number(document.querySelector("#weight").value);
  let res = document.querySelector("#results");
  console.log(ht);

  console.log(res);
  res.innerHTML = "";

  if (ht === "" || ht <= 0 || isNaN(ht)) {
    const textNode = document.createTextNode("Enter a valid Height\n");
    res.appendChild(textNode);
  } else if (wt === "" || wt <= 0 || isNaN(wt)) {
    const textNode = document.createTextNode("Enter a valid Weight");
    res.appendChild(textNode);
  } else {
    let ans = wt / ((ht * ht) / 10000);
    ans = ans.toFixed(2);
    res.innerHTML = `${ans}`;
    console.log("The result is: ", ans);
  }
});
