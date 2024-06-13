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
 * Complete the 'theLoveLetterMystery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function theLoveLetterMystery(s: string): number {
  var count: number = 0;
  for (let i: number = 0; i < Math.floor(s.length / 2); i++) {
    var j: number = s.length - 1 - i;
    var alphaIndexA: number = s.charCodeAt(i) - 96;
    var alphaIndexB: number = s.charCodeAt(j) - 96;
    do {
      if (alphaIndexA < alphaIndexB) {
        alphaIndexB--;
        count++;
      } else if (alphaIndexA > alphaIndexB) {
        alphaIndexA--;
        count++;
      }
    } while (alphaIndexA !== alphaIndexB);
  }
  return count;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const q: number = parseInt(readLine().trim(), 10);

  for (let qItr: number = 0; qItr < q; qItr++) {
    const s: string = readLine();

    const result: number = theLoveLetterMystery(s);

    ws.write(result + "\n");
  }

  ws.end();
}
