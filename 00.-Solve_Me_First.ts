'use strict';

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

function main() {
    let a: number = parseInt(readLine());
    let b: number = parseInt(readLine());
    solveMeFirst(a, b);
}

function solveMeFirst(a: number, b: number) {
    console.log(a + b);
}

// TAKEAWAY
// readLine() in case of reading input once, twice, etc.
