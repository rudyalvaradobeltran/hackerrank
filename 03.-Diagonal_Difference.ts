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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let leftToRight: number = 0;
    let rightToLeft: number = 0;
    for (let i = 0; i < arr.length; i++) {
        leftToRight = leftToRight + arr[i][i];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        rightToLeft = rightToLeft + arr[(arr.length - 1) - i][i];
    }
    return (leftToRight - rightToLeft) < 0 ? (rightToLeft - leftToRight) : (leftToRight - rightToLeft);
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    let arr: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

// TAKEAWAY
// for (let i = 0; i < arr.length; i++) => 0 to 5
// for (let i = arr.length - 1; i >= 0; i--) => 5 to 0
//     rightToLeft = rightToLeft + arr[(arr.length - 1) - i][i]; => 5-5 = 0; 5-4 = 1; 5-3 = 2... inversion (0 to 5)
