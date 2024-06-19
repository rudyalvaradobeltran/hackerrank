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
 * Complete the 'beautifulBinaryString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING b as parameter.
 */

function beautifulBinaryString(b: string): number {
  const sub: string = "010";
  var count = 0;
  while (b.indexOf(sub) !== -1) {
    var index: number = b.indexOf(sub) + 2;
    b = b.substring(0, index) + "1" + b.substring(index + 1);
    if (index !== -1) count++;
  }
  return count;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const n: number = parseInt(readLine().trim(), 10);

  const b: string = readLine();

  const result: number = beautifulBinaryString(b);

  ws.write(result + "\n");

  ws.end();
}
