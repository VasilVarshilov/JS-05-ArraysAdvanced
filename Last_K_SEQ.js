function solve(n, k) {
    [n, k] = [n, k].map(a => Number(a));

    let result = new Array;
    result[0] = 1;

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
        result.push(currentElement);
    }

    console.log(result.join(" "));
}

solve(6, 3);