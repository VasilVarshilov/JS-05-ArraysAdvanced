function solve(arr) {
let matrix = new Array;

for (const iterator in arr) {
    matrix.push(arr[iterator].split(/\s+/).map(Number))
}
  console.log(...matrix);
}
solve(
    [
        '5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1'
    ]
);