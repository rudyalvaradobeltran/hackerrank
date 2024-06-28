const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function insertionSort(ar) {
  for (i = 0; i < ar.length - 1; i++) {
    var value = ar[i + 1];
    var j = i;
    while (j >= 0 && value < ar[j]) {
      ar[j + 1] = ar[j];
      j = j - 1;
    }
    ar[j + 1] = value;
  }
  return ar;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  var ar = readLine().replace(/\s+$/g, "").split(" ").map(Number);
  const result = insertionSort(ar).join(" ");
  ws.write(result + "\n");

  ws.end();
}
