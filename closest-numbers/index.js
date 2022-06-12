"use strict";

const fs = require("fs");

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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
  // Write your code here
  arr.sort((a, b) => {
    return a - b;
  });
  var minDiff = Number.MAX_VALUE;
  var diffArray = {};
  for (let i = arr.length - 1; i > 0; i--) {
    let currentDiff = arr[i] - arr[i - 1];
    if (currentDiff <= minDiff) {
      if (currentDiff < minDiff) {
        delete diffArray[minDiff];
      }
      diffArray[currentDiff] = (currentDiff in diffArray) ? [arr[i-1], arr[i], ...diffArray[currentDiff]] : [arr[i-1], arr[i]];
      minDiff = currentDiff;
    }
  }
  return diffArray[minDiff];
}

function main() {
  const ws = fs.createWriteStream("file.txt");

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = closestNumbers(arr);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
