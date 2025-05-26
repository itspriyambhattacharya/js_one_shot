const parent = document.querySelector(".parent"); //  select the element with class "parent"
console.log(parent);

const childrenOfParent = parent.children; // returns an HTMLCollection of all the chindren of the parent
console.log(childrenOfParent);

console.log(
  `The innerHTML of the first child is: ${childrenOfParent[1].innerHTML}` // displaying the innerHTML of the child present in position 1
);

console.log("Display using Traditional for loop");

for (let i = 0; i < childrenOfParent.length; i++) {
  console.log(childrenOfParent[i].innerHTML);
}

// Access the first and last child of the parent

const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
console.log(firstChild);
console.log(lastChild);

// Accessing the parent from from child
const child1 = document.querySelector(".day");
console.log(child1);
console.log(child1.parentElement);

// Selecting the next sibling

const sibling = child1.nextElementSibling;
console.log(sibling);

// Displaying the child nodes (IMPORTANT)

console.log("NODES: ", parent.childNodes);

// ++++++++++++++++++++++++++++++++ Creating an element using Javascript ++++++++++++++++++++++++++++++++

const createdDiv = document.createElement("div");
console.log(createdDiv);

// ++++++++++++++++++++++++++++++++ Adding attributes ++++++++++++++++++++++++++++++++

createdDiv.className = "cl1 cl2";
createdDiv.id = "myDiv";
createdDiv.title = "dynamic div created using javascript";
createdDiv.style.padding = "10px";
createdDiv.style.backgroundColor = "green";
console.log(createdDiv);

// createdDiv.innerText = "This a dynamically created div";

const textNode = document.createTextNode("This a dynamically created div");
createdDiv.appendChild(textNode);

// Adding the div created to HTML document

document.body.appendChild(createdDiv);
createdDiv.style.marginTop = "10px";
createdDiv.style.borderRadius = "15px";
createdDiv.style.textAlign = "center";
