'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  var minIndex = 0;
  var maxIndex = 0;
  var sumMax = 0;
  var sumMin = 0;
  arr.map((item, index) => {
    if (index > 0) {
      if (item < arr[minIndex]) {
        minIndex = index;
      }
      if (item > arr[maxIndex]) {
        maxIndex = index;
      }
    }
  });
  arr.map((item, index) => {
    if (index !== minIndex) {
      sumMax = sumMax + item;
    }
    if (index !== maxIndex) {
      sumMin = sumMin + item;
    }
  });
  console.log(`${sumMin} ${sumMax}`);
}

function main() {

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
