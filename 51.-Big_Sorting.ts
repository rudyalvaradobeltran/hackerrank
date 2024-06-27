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
 * Complete the 'bigSorting' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY unsorted as parameter.
 */

function bigSorting(unsorted: string[]): string[] {
  return unsorted
    .map((n) => BigInt(n))
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
    .map((n) => n.toString());
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const n: number = parseInt(readLine().trim(), 10);

  let unsorted: string[] = [];

  for (let i: number = 0; i < n; i++) {
    const unsortedItem: string = readLine();
    unsorted.push(unsortedItem);
  }

  const result: string[] = bigSorting(unsorted);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
