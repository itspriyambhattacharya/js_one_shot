// for-of loop

let arr = [3, 6, 5, 13, 55, 62, 12];
for (const element of arr) {
  if (element === 13) {
    break;
  }
  console.log(element);
}

// Map in Javascript

const map = new Map();

map.set("name", "Priyam Bhattacharya");
map.set("email", "itspriyambhattacarya@gmail.com");
map.set("age", 23);

console.log("\nDisplaying a map");
map.delete("email");
for (const element of map) {
  console.log(element);
}

console.log(map.get("age"));
