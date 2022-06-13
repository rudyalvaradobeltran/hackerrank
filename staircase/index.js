"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  // Write your code here
  for (let i = n; i > 0; i--) {
    var concat = "";
    for(let k = 1; k <= n; k++) {
      if (k >= i)  {
        concat = concat + "#";
      } else {
        concat = concat + " ";
      }
    }
    console.log(concat);
  }
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  staircase(n);
}
