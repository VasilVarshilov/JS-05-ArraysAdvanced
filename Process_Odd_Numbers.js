function solve(arr) {
    let resultArr = new Array;
    for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
            const Item = arr[key];
            if (key !== 0 && key % 2 !== 0) {
                resultArr.unshift(arr[key]* 2);
            }
        }
    }
    console.log(resultArr.join(' '));
}
solve([10, 15, 20, 25]);