"use strict";

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
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p: number, q: number): void {
  var result: string = "";
  for (let i: number = p; i <= q; i++) {
    var squareString: string = (i * i).toString();
    var first: number = parseInt(
      squareString.slice(0, Math.floor(squareString.length / 2))
    );
    var second: number = parseInt(
      squareString.slice(
        Math.floor(squareString.length / 2),
        squareString.length
      )
    );
    if (i === 1 || first + second === i) result = `${result} ${i}`;
  }
  console.log(result.length ? result.trim() : "INVALID RANGE");
}

function main() {
  const p: number = parseInt(readLine().trim(), 10);

  const q: number = parseInt(readLine().trim(), 10);

  kaprekarNumbers(p, q);
}
