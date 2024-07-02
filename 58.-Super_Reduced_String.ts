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
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s: string): string {
  do {
    var changes: boolean = false;
    for (let i: number = 0; i < s.length; i++) {
      if (s.charAt(i) === s.charAt(i + 1)) {
        s = s.substring(0, i) + "" + s.substring(i + 1);
        s = s.substring(0, i) + "" + s.substring(i + 1);
        changes = true;
      }
    }
  } while (changes);
  const result: string = s.length > 0 ? s : "Empty String";
  return result;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const result: string = superReducedString(s);

  ws.write(result + "\n");

  ws.end();
}
