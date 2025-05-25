const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = arr.filter((val) => val % 4 == 1); // using implicit return

console.log(res);

const res2 = arr.filter((val) => {
  return val < 4; // explicit return
});
console.log(res2);
