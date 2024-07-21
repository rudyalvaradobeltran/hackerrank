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
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

function strangeCounter(t: number): number {
  var maxTime: number = 0;
  var maxValue: number = 0;
  for (let i: number = 3; i < Math.pow(10, 12); i = i * 2) {
    maxTime = maxTime + i;
    maxValue = i;
    if (maxTime >= t) {
      break;
    }
  }
  return maxValue - (maxValue - Math.abs(t - maxTime)) + 1;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const t: number = parseInt(readLine().trim(), 10);

  const result: number = strangeCounter(t);

  ws.write(result + "\n");

  ws.end();
}
