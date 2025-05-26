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
