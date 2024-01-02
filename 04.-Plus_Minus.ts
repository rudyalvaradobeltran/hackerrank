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

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    var positives = 0;
    var negatives = 0;
    var zeros = 0;
    var length = arr.length;
    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] > 0)
            positives++;
        else if(arr[i] === 0)
            zeros++;
        else
            negatives++;
    }
    console.log((1/(length/positives)).toFixed(6));
    console.log((1/(length/negatives)).toFixed(6));
    console.log((1/(length/zeros)).toFixed(6));
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}