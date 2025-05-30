// Promises in Javascript
// Promise 1
const promise1 = new Promise((resolve, request) => {
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
