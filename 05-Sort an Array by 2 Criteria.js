function solve(arr) {
    arr.sort().sort(function (a, b) { return a.length - b.length });
    console.log(arr.join('\n'));
}
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);