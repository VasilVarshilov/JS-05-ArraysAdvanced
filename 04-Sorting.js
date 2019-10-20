function solve(arr) {
    let min = arr.slice().sort((a, b) => a - b);
    let max = arr.slice().sort((a, b) => b - a);

let minCounter = 0;
let maxCounter = 0;

    let result = new Array;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            result.push(max[minCounter]);
            minCounter++
        }else{
            result.push(min[maxCounter]);
            maxCounter++;
        }
    }
    console.log(result.join(' '));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);