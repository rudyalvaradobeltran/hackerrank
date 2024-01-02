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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n: number): void {
  // Write your code here
  var length: number = n;
  for(let i = 1; i <= n; i++){
      var concat: string = "";
      for(let j = 1; j <= n; j++){
          if(j < length)
              concat = concat + " ";
          else
              concat = concat + "#";           
      }
      console.log(concat);
      length--;
  }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    staircase(n);
}
