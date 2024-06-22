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
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr: string[]): number {
  var count: { [key: string]: number } = {};
  var gems: number = 0;
  for (let j: number = 0; j < arr.length; j++) {
    for (let i: number = 97; i < 123; i++) {
      var l: string = String.fromCharCode(i);
      if (arr[j].includes(l)) {
        count[l] = count[l] ? count[l] + 1 : 1;
        if (count[l] === arr.length) {
          gems++;
        }
      }
    }
  }
  return gems;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const n: number = parseInt(readLine().trim(), 10);

  let arr: string[] = [];

  for (let i: number = 0; i < n; i++) {
    const arrItem: string = readLine();
    arr.push(arrItem);
  }

  const result: number = gemstones(arr);

  ws.write(result + "\n");

  ws.end();
}
