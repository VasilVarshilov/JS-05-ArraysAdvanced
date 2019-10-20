function solve(arr) {
    let result = new Array;
    for (const iterator of arr) {
        if (iterator < 0) {
            result.unshift(iterator);
        } else {
            result.push(iterator);
        }
    }
    console.log(result.join('\n'));
}
solve([3, 4, -5, -6, 3, 2, 3]);