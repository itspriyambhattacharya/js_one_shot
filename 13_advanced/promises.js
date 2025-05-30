const promise1 = new Promise((resolve, request) => {
  setTimeout(() => {
    console.log("Learning promise in javascript");
    resolve();
  }, 1000);
});

promise1.then(() => {
  console.log("Promise 1 Resolved.");
});
