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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s: string): string {
  var letters: string[] = [];
  for (var i = 0; i < s.length; i++) {
    if (!letters.includes(s[i].toLowerCase()) && s[i] !== " ") {
      letters.push(s[i].toLowerCase());
    }
  }
  return letters.length === 26 ? "pangram" : "not pangram";
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const result: string = pangrams(s);

  ws.write(result + "\n");

  ws.end();
}
