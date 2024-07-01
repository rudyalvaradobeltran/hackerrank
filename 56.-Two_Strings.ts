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
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1: string, s2: string): string {
  var minString: string = "";
  var maxString: string = "";
  var response: string = "NO";
  if (s1.length === s2.length) {
    minString = s1;
    maxString = s2;
  } else {
    minString = s1.length < s2.length ? s1 : s2;
    maxString = s1.length > s2.length ? s1 : s2;
  }
  for (let i: number = 0; i < minString.length; i++) {
    if (maxString.includes(minString[i])) {
      response = "YES";
    }
  }
  return response;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const q: number = parseInt(readLine().trim(), 10);

  for (let qItr: number = 0; qItr < q; qItr++) {
    const s1: string = readLine();

    const s2: string = readLine();

    const result: string = twoStrings(s1, s2);

    ws.write(result + "\n");
  }

  ws.end();
}
