const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = arr.filter((val) => val % 4 == 1); // using implicit return

console.log(res);

const res2 = arr.filter((val) => {
  return val < 4; // explicit return
});
console.log(res2);

// Exercise

const books = [
  {
    title: "Book1",
    genre: "History",
    publish: 1998,
    edition: 2005,
  },
  {
    title: "Book2",
    genre: "Science",
    publish: 1995,
    edition: 2005,
  },
  {
    title: "Book3",
    genre: "Science",
    publish: 2005,
    edition: 2005,
  },
  {
    title: "Book4",
    genre: "Science",
    publish: 1900,
    edition: 2005,
  },
];

const historyBooks = books.filter((bk) => bk.genre === "History");
console.log(historyBooks);

const after1995 = books.filter((bk) => bk.publish >= 1995);
console.log(after1995);

const a1995AndHistory = books.filter((bk) => {
  if (bk.publish >= 1995 && bk.genre === "Science") {
    return bk;
  }
});
console.log(a1995AndHistory);
