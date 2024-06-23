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
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a: number[]): number {
  var countArray: { [key: number] : number} = {};
  for (let i: number = 0; i < a.length; i++) {
    var aux: number = a[i];
    a[i] = 0;
    if (a.includes(aux)) {
      countArray[aux] = Math.abs(i - a.indexOf(aux));
    }
  }
  var values: number[] = Object.values(countArray);
  return values.length ? values.reduce((a, b) => (a < b) ? a : b) : -1;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result: number = minimumDistances(a);

    ws.write(result + '\n');

    ws.end();
}
