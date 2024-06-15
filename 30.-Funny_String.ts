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
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s: string): string {
  var differences: number[] = [];
  var differencesReversed: number[] = [];
  for (let i = 0; i < s.length - 1; i++) {
    differences.push(Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0)));
  }
  for (let j = s.length - 1; j > 0; j--) {
    differencesReversed.push(
      Math.abs(s[j].charCodeAt(0) - s[j - 1].charCodeAt(0))
    );
  }
  return differences.every(
    (value, index) => value === differencesReversed[index]
  )
    ? "Funny"
    : "Not Funny";
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const q: number = parseInt(readLine().trim(), 10);

  for (let qItr: number = 0; qItr < q; qItr++) {
    const s: string = readLine();

    const result: string = funnyString(s);

    ws.write(result + "\n");
  }

  ws.end();
}
