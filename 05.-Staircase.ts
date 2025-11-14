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
  /*var length: number = n;
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
  }*/
  for (let i = 1; i <= n; i++) {
        let concat: string = "";
        for (let k = 1; k <= n - i; k++) {
            concat = concat + " ";   
        }
        for (let k = 1; k <= i; k++) {
           concat = concat + "#";
        }
        console.log(concat);
    }  
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    staircase(n);
}

// TAKEAWAYS
// for (let i = 1; i <= n; i++) => given a loop of size n
// for (let k = 1; k <= n - i; k++) => i increments so reduces the loops by 1 each time => 5, 4, 3...
// for (let k = 1; k <= i; k++) => i increments so increases the loops by 1 each time => 1, 2, 3...
