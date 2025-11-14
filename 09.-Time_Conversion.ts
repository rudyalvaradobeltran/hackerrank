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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
    const split: string[] = s.split(':');
    const period: string = split[2].slice(-2);
    var hour: number = parseInt(split[0]);
    
    if (period === 'AM' && hour === 12)
        hour = 0;
    
    if (period === 'PM' && hour !== 12)
        hour = hour + 12;
        
    const hourString: string = hour < 10 ? `0${hour}` : hour.toString();
    return `${hourString}:${split[1]}:${split[2].slice(0,2)}`;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

// TAKEAWAYS
// Use slice to get a chunk of a string. index-start, index-end
