function solve(arr) {
    arr = arr.map(a => Number(a));
    let check = 0;
    let cubicMeters = 0;
    let cubicMetersForTheDay = new Array;
    while (check !== 1) {
        let counter = 0;

        let cubicMetersForTheDayCount = 0;

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] < 30) {
                arr[i]++;
                cubicMeters += 195;
                cubicMetersForTheDayCount += 195;
            }

        }

        cubicMetersForTheDay.push(cubicMetersForTheDayCount);
        for (let i = 0; i < arr.length; i++) {


            if (arr[i] == 30) {
                counter++;
            }

            if (counter == arr.length) {
                check = 1;
            }

        }

    }

    console.log(cubicMetersForTheDay.join(", "));
    console.log(cubicMeters * 1900 + ' pesos');
}
solve([21, 25, 28]);

// judge 81/100