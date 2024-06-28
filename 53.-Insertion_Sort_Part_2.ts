"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n: number, arr: number[]): void {
  for (let i = 0; i < n - 1; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        var aux = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = aux;
      }
    }
    console.log(arr.join(" "));
  }
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  insertionSort2(n, arr);
}
