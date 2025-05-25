const user = {
  username: "Priyam",
  age: 23,
  welcome: function () {
    console.log(`Hello ${this.username}, Good Morning`);
  },
};

user.welcome();
user.username = "Sam";
user.welcome();
