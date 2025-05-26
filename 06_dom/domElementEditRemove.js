function addLanguage(language) {
  const myLi = document.createElement("li");
  myLi.id = "dynamic-li";
  const textNode = document.createTextNode(language);
  myLi.appendChild(textNode);
  parent.appendChild(myLi);
  console.log(myLi);
}

const parent = document.querySelector(".language");
console.log(parent);

const languageName = "Java";
addLanguage(languageName);
addLanguage("Python");
addLanguage("Rust");

// ++++++++++++++++++++++++++++++++ Edit a Content in DOM Dynamically ++++++++++++++++++++++++++++++++

/**
 * Replace the 2nd language of the list with "Fortran"
 */

console.log("Edit 2nd child");

const secondLi = document.querySelector(".language>li:nth-child(2)");
console.log(secondLi);
const newLi = document.createElement("li");
/*
const newText = document.createTextNode("Mojo");
newLi.appendChild(newText);
*/
newLi.textContent = "Fortran";
console.log(newLi);
secondLi.replaceWith(newLi);

/**
 * Replace the 1st language of the list with "Fortran"
 */

console.log("Edit 1st child");
const firstLanguage = document.querySelector(".language>li:first-child");
console.log(firstLanguage);

const tsTxt = document.createTextNode("Typescript");
const newLiTs = document.createElement("li");
newLiTs.appendChild(tsTxt);
console.log(newLiTs);

firstLanguage.replaceWith(newLiTs);
