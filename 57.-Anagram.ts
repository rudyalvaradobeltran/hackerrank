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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s: string): number {
  var length: number = s.length;
  if (length % 2 !== 0) {
    return -1;
  }
  var half1: string = s.substring(0, length / 2);
  var half2: string = s.substring(length / 2, length);
  var count: number = 0;
  for (var i: number = 0; i < half1.length; i++) {
    if (!half2.includes(half1[i])) 
      count++;
    else 
      half2 = half2.replace(half1[i], " ");
  }
  return count;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const q: number = parseInt(readLine().trim(), 10);

  for (let qItr: number = 0; qItr < q; qItr++) {
    const s: string = readLine();

    const result: number = anagram(s);

    ws.write(result + "\n");
  }

  ws.end();
}
