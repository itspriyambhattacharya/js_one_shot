// singleton object
const user = new Object();

// non-singleton object
const user2 = {
  id: 45,
};
console.log(`Singleton object: ${user}\nNon-singleton object: ${user2}`);
console.log("Singleton object: ", user);
console.log("Singleton  toString(): ", user.toString());
console.log("Non-singleton object: ", user2);
