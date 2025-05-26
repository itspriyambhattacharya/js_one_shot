const title = document.getElementById("title");
console.log(title.className);
title.setAttribute("style", "background-color: green");
title.style.borderRadius = "15px";
title.setAttribute(
  "style",
  "padding: 10px; background-color: green; border-radius: 15px"
); // not recommended

title.style.color = "purple"; // recommended

// Accessing the text content of the element

const tc = title.textContent;
console.log(`The text content of the element is: ${tc}`);

const it = title.innerText;

console.log(it);

/**
 * Difference between textContent and innerText
 * textContent shows all the text content of the element, even those that are invisible by display:none or visibility hidden.
 * innerText only shows that portion of the text that is visible
 */

const ihtml = title.innerHTML;
console.log(`The innerHTML is: ${ihtml}`);

// querySelector

const lst = document.querySelector("ul");
console.log(lst);
const fLi = lst.querySelector("li");
console.log(fLi);
fLi.style.backgroundColor = "green";

// querySelectorAll

const allLi = document.querySelectorAll("ul > li");
console.log(allLi);
