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
