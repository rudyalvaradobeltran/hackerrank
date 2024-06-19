"use strict";

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
  var countArray: number[] = [];
  var maxValue: number = 0;
  var birdType: number = 0;
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]] = !countArray[arr[i]] ? 1 : countArray[arr[i]] + 1;
  }
  for (let j = countArray.length - 1; j > 0; j--) {
    if (countArray[j] >= maxValue) {
      maxValue = countArray[j];
      birdType = j;
    }
  }
  return birdType;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const arrCount: number = parseInt(readLine().trim(), 10);

  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result: number = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
