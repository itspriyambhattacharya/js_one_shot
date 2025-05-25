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
