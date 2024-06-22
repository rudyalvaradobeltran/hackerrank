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
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(s1: string, s2: string): number {
  var sorted = [s1, s2].sort((a, b) => a.length - b.length);
  var changes = 0;
  for (let i: number = 0; i < sorted[0].length; i++) {
    if (!sorted[1].includes(sorted[0][i])) 
      changes++;
    else
      sorted[1] = sorted[1].replace(sorted[0][i], "");
  }
  changes = changes + sorted[1].length;
  return changes;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s1: string = readLine();

  const s2: string = readLine();

  const result: number = makingAnagrams(s1, s2);

  ws.write(result + "\n");

  ws.end();
}
