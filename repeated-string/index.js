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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  // Write your code here
  let numberOfAs = 0;
  if (n >= s.length) {
    let occurencesOfA = [...s].filter(e => e === 'a').length;
    numberOfAs = Math.floor(n/s.length) * occurencesOfA;
  }
  let tailStringLength = n % s.length;
  for (let i = 0; i < tailStringLength; i++) {
    if (s[i] === 'a') numberOfAs++;
  }
  return numberOfAs;
}

function main() {
  const ws = fs.createWriteStream('file.txt');

  const s = readLine();

  const n = parseInt(readLine().trim(), 10);

  const result = repeatedString(s, n);

  ws.write(result + "\n");

  ws.end();
}
