const reqUrl = "https://api.github.com/users/itspriyambhattacharya";

// AJAX
const xhr = new XMLHttpRequest();
xhr.open("GET", reqUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);

  if (xhr.readyState === 4) {
    console.log(this.responseText);
    let data = this.responseText;
    data = JSON.parse(data);
    console.log(typeof data);
    console.log(data.name);
  }
}; // mmonitors continuously

xhr.send();
