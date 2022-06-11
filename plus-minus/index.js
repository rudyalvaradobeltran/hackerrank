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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  var positive = 0;
  var negative = 0;
  var zeros = 0;
  const length = arr.length;
  arr.map((item) => {
    if (item > 0) {
      positive++;
    }
    if (item === 0) {
      zeros++;
    }
    if (item < 0) {
      negative++;
    }
    return null;
  });
  console.log(((1 / length) * positive).toFixed(6));
  console.log(((1 / length) * negative).toFixed(6));
  console.log(((1 / length) * zeros).toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
