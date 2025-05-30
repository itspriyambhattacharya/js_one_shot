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

// promise 4

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ uname: "java", password: "java1234" });
    } else {
      reject("Java is rejected");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    console.log(user.uname);
    console.log(user.password);
  })
  .catch((err) => {
    console.log("The error is  " + err);
  })
  .finally(() => {
    console.log("Promise 4 completed successfully.");
  });

// promise 5
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ uname: "javascript", password: "javascript1234" });
    } else {
      reject("Javascript is rejected");
    }
  }, 1000);
});

async function consume5() {
  try {
    const res = await promise5; // promise5 is an object, so no parenthesis
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

consume5();

// fetching using async await

async function fetchUser() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await users.json();
  console.log(`Typeof user is ${typeof users}`);
  console.log(`Typeof data is ${typeof data}`);
  console.log(data);
  console.log(data[0]);
  console.log(data[0].name);
  console.log(data[0].email);
  console.log(data[0].address.city);
}

fetchUser();
