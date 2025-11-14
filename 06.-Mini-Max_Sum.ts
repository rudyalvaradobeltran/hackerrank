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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    /*const orderedArr: number[] = arr.sort((a, b) => a - b);
    var minimum: number = 0;
    var maximum: number = 0;
    for (let i = 0; i <= orderedArr.length - 2; i++){
        minimum = minimum + orderedArr[i];
    }
    for (let j = 1; j <= orderedArr.length - 1; j++){
        maximum = maximum + orderedArr[j];
    }
    console.log(`${minimum} ${maximum}`);*/
    let min: number = arr[0];
    let max: number = arr[0];
    let sum: number = arr.reduce((a, b) => a + b);
    for (let i=1; i < arr.length; i++) {
        if (min >= arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(`${sum - max} ${sum - min}`);
}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

// TAKEAWAY
// Get min and max from an array => get min and max from a[0] => from 1 to n, compare a[0] is greater or equal than a[1], if so, set min = a[1]...
