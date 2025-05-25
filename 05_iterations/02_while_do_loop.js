let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let arr = [3, 6, 7, 8, 4, 2, 1, 13];
i = 0;
console.log("\nThe array is:");

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// do-while loop

let score = 100;
do {
  /*
  Exit-control loop: The body of the loop will get executed at least once even if the condition is false.
  */
  console.log(`Score is: ${score}`);
  score++;
} while (score <= 10);
