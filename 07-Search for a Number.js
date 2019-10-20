function solve(arr, items) {

    const elementsToTake = items[0], elementsToDelete = items[1], numberToFind = items[2];
    let counter = 0;
    arr.length = elementsToTake;
    for (let i = 0; i < elementsToDelete; i++) {
        arr.shift();
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === numberToFind) {
            counter++;
        }
    }
    console.log(`"Number ${numberToFind} occurs ${counter} times."`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);