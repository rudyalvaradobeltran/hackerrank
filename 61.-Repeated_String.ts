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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s: string, n: number): number {
  const leftover: number = n % s.length;
  const times: number = (n - leftover) / s.length;
  const count: number = s.split("").filter((item) => item === "a").length * times;
  const rest: string = s.substring(0, leftover);
  const countRest: number = rest.split("").filter((item) => item === "a").length;
  return count + countRest;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const n: number = parseInt(readLine().trim(), 10);

  const result: number = repeatedString(s, n);

  ws.write(result + "\n");

  ws.end();
}
