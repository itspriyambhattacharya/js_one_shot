// control flow

// if statements

const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Logged in");
} else {
  console.log("Not Logged In");
}

// <, >, <=, >=, ==, !=, ===(strict equal), !==

if (2 == "2") {
  console.log("Executed");
}

if (2 === "2") {
  console.log("Will not get executed");
}

// Shorthand Notation

const balance = 1000;

if (balance > 500) console.log("Test");
