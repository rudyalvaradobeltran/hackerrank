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
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(s: string): string {
  var countArray: { [key: string]: number } = {};
  for (let i: number = 0; i < s.length; i++) {
    countArray[s[i]] = countArray[s[i]] ? countArray[s[i]] + 1 : 1;
  }
  const odds = Object.entries(countArray).filter(
    (item) => item[1] % 2 === 1
  );
  if (odds.length > 1)
    return "NO";
  else 
    return "YES";
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const result: string = gameOfThrones(s);

  ws.write(result + "\n");

  ws.end();
}
