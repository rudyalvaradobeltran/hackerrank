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
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n: number): number {
  var stringNumber: string = n.toString();
  var count: number = 0;
  for (var i: number = 0; i < stringNumber.length; i++) {
    if (n % parseInt(stringNumber[i]) === 0) {
      count++;
    }
  }
  return count;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const n: number = parseInt(readLine().trim(), 10);

    const result: number = findDigits(n);

    ws.write(result + "\n");
  }

  ws.end();
}
