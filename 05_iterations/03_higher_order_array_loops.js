// for-of loop

let arr = [3, 6, 5, 13, 55, 62, 12];
for (const element of arr) {
  if (element === 13) {
    break;
  }
  console.log(element);
}
