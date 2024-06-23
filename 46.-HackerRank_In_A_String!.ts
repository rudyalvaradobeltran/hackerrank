'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s: string): string {
  const hackerrank = "hackerrank";
  var isSubsequence = true;
  var letters = `${s}`;
  for (var j = 0; j < hackerrank.length; j++) {
    var letterExists = false;
    for (var i = 0; i < s.length; i++) {
      if (letters[i] === hackerrank[j]) {
        letters = letters.substring(i + 1, letters.length);
        letterExists = true;
        break;
      }
    }
    if (!letterExists) {
      isSubsequence = false;
      break;
    }
  }
  if (isSubsequence)
    return "YES";
  else 
    return "NO";
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const s: string = readLine();

        const result: string = hackerrankInString(s);

        ws.write(result + '\n');
    }

    ws.end();
}
