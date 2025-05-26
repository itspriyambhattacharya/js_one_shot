const title = document.getElementById("title");
console.log(title.className);
title.setAttribute("style", "background-color: green");
title.style.borderRadius = "15px";
title.setAttribute(
  "style",
  "padding: 10px; background-color: green; border-radius: 15px"
); // not recommended

title.style.color = "purple"; // recommended
