// Promises in Javascript
// Promise 1
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Learning promise 1 in javascript");
    resolve();
  }, 1000);
});

promise1.then(() => {
  console.log("Promise 1 Resolved.");
});

// promise 2
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Learning promise 2 in javascript");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 Resolved");
});

// promise 3

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello from Promise 3");
    resolve({
      username: "Priyam Bhattachara",
      age: 23,
      email: "itspriyambhattacharya@gmail.com",
    });
  }, 3000);
});

promise3.then((val) => {
  console.log(val);

  console.log("Promise 3 Resolved");
});
