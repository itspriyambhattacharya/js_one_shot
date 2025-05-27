const body = document.querySelector("body");
body.style.backgroundColor = "#212121";
body.style.color = "#fff";
body.style.fontFamily = "sans-serif";
const myUl = document.getElementById("myUl");
const item = document.querySelector("#item3");
console.log(myUl);
console.log(item);

// Event Bubbling
myUl.addEventListener(
  "click",
  (e) => {
    console.log("List clicked");
  },
  false
);

item.addEventListener(
  "click",
  (e) => {
    console.log("Item clicked");
    e.stopPropagation(); // stops bubbling up
  },
  false
);

/*
// Event Capturing
myUl.addEventListener(
  "click",
  (e) => {
    console.log("List clicked");
  },
  true
);

item.addEventListener(
  "click",
  (e) => {
    console.log("Item clicked");
  },
  true
);
*/
