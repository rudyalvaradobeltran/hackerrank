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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s: string, k: number): string {
  var splitString: string[] = s.split("");
  for (let i: number = 0; i < splitString.length; i++) {
    const index: number = s.charCodeAt(i);
    const limit: number | null = (index > 64 && index <= 90) ? 90 : (index > 96 && index <= 122) ? 122 : null;
    const newIndex: number = index + (k % 26);
    if (limit) {
      if (newIndex > limit) {
        splitString[i] = String.fromCharCode(newIndex - 26);
      } else {
        splitString[i] = String.fromCharCode(newIndex);
      }
    }
  }
  return splitString.join("");
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const n: number = parseInt(readLine().trim(), 10);

  const s: string = readLine();

  const k: number = parseInt(readLine().trim(), 10);

  const result: string = caesarCipher(s, k);

  ws.write(result + "\n");

  ws.end();
}
