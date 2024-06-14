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
 * Complete the 'serviceLane' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY cases
 */

function serviceLane(width: number[], cases: number[][]): number[] {
  var minCases: number[] = [];
  for (let i: number = 0; i < cases.length; i++) {
    var min: number = 1000;
    for (let j = cases[i][0]; j <= cases[i][1]; j++) {
      if (width[j] < min) {
        min = width[j];
      }
    }
    minCases.push(min);
  }
  return minCases;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const firstMultipleInput: string[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const n: number = parseInt(firstMultipleInput[0], 10);

  const t: number = parseInt(firstMultipleInput[1], 10);

  const width: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((widthTemp) => parseInt(widthTemp, 10));

  let cases: number[][] = Array(t);

  for (let i: number = 0; i < t; i++) {
    cases[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((casesTemp) => parseInt(casesTemp, 10));
  }

  const result: number[] = serviceLane(width, cases);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
