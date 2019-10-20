function solve(arr) {
    let firstK = [];
    let lastK = [];
    let K = arr.slice(0, 1).toString();
arr.shift();
    let gay = arr.slice();

    for (let i = 0; i < K; i++) {
        let item = gay.shift()

            firstK.push(item);

    }
    for (let i = 0; i < K; i++) {
        let item = arr.pop()

            lastK.push(item);

    }

    console.log(firstK.join(" "));
    console.log(lastK.reverse().join(' '))

}
solve([3,
    6, 7, 8, 9]);