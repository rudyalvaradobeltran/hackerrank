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
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

function fairRations(B: number[]): string {
  var count: number = 0;
  for (let i: number = 0; i < B.length - 1; i++) {
    if (B[i] % 2 !== 0) {
      B[i] = B[i] + 1;
      B[i + 1] = B[i + 1] + 1;
      count = count + 2;
    }
  }
  if (B[B.length - 1] % 2 !== 0) {
    return "NO";
  } else {
    return count.toString();
  }
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const N: number = parseInt(readLine().trim(), 10);

  const B: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((BTemp) => parseInt(BTemp, 10));

  const result: string = fairRations(B);

  ws.write(result + "\n");

  ws.end();
}
