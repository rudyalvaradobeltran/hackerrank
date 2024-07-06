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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n: number, password: string): number {
  const numbers: string = "0123456789";
  const lower_case: string = "abcdefghijklmnopqrstuvwxyz";
  const upper_case: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters: string = "!@#$%^&*()-+";
  var validations: number[] = [];
  for (let i: number = 0; i < n; i++) {
    if (numbers.includes(password[i])) validations[0] = 1;
    if (lower_case.includes(password[i])) validations[1] = 1;
    if (upper_case.includes(password[i])) validations[2] = 1;
    if (special_characters.includes(password[i])) validations[3] = 1;
  }
  var mustAdd: number = 4 - validations.reduce((acc, item) => acc + item);
  var difference: number = 6 - (mustAdd + n);
  if (difference > 0) {
    mustAdd = mustAdd + difference;
  }
  return mustAdd;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const n: number = parseInt(readLine().trim(), 10);

  const password: string = readLine();

  const answer: number = minimumNumber(n, password);

  ws.write(answer + "\n");

  ws.end();
}
