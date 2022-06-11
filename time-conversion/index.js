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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  const time = s.split(':');
  var hour = 0;
  if (s.includes('PM') && time[0] !== '12') {
    hour = parseInt(time[0], 10) + 12;
  } else if (s.includes('AM') && time[0] === '12') {
    hour = parseInt(time[0], 10) - 12;
  } else {
    hour = parseInt(time[0], 10);
  }
  if (parseInt(hour) < 10) {
    hour = '0'+hour.toString();
  } else {
    hour = hour.toString();
  }
  return hour+':'+time[1]+':'+time[2].slice(0, -2);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
