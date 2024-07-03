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
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function weightedUniformStrings(s: string, queries: number[]): string[] {
  const charArray: string[] = s.match(/([a-z])\1*/g)!;
  var uniformArray: number[] = [];
  var responseArray: string[] = [];

  for (let i: number = 0; i < charArray.length; i++) {
    var charValue: number = charArray[i][0].charCodeAt(0) - 96;
    var charCount: number = charArray[i].length;
    for (var j: number = charCount; j > 0; j--) {
      uniformArray.push(charValue * j);
    }
  }

  for (let k: number = 0; k < queries.length; k++) {
    if (uniformArray.includes(queries[k]))
      responseArray.push("Yes");
    else
      responseArray.push("No");
  }

  return responseArray;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const queriesCount: number = parseInt(readLine().trim(), 10);

  let queries: number[] = [];

  for (let i: number = 0; i < queriesCount; i++) {
    const queriesItem: number = parseInt(readLine().trim(), 10);

    queries.push(queriesItem);
  }

  const result: string[] = weightedUniformStrings(s, queries);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
