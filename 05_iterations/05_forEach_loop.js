const language = [
  "c",
  "cpp",
  "java",
  "javascript",
  "python",
  "ruby",
  "rust",
  "go",
];

language.forEach((val) => {
  console.log(val);
});

language.forEach((val, idx, arr) => {
  console.log(val, idx, language);
});

// Array of Objects

console.log("\nArray of Objects");

const users = [
  {
    id: 1,
    name: "Priyam",
    age: 23,
  },
  {
    id: 1,
    name: "Rohit",
    age: 21,
  },
  {
    id: 1,
    name: "Ronit",
    age: 20,
  },
  {
    id: 1,
    name: "Rahul",
    age: 22,
  },
];

users.forEach((val) => {
  console.log(val.name);
});
