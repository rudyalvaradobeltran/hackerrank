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
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s: string): number {
  var count: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    if (s.charAt(i) == s.charAt(i).toUpperCase()) {
      count++;
    }
  }
  return count + 1;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const result: number = camelcase(s);

  ws.write(result + "\n");

  ws.end();
}
