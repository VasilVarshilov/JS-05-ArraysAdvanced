function solve(theMap, forces) {

    let matrixMap = new Array;
    let resultArr = new Array;

    for (const iterator in theMap) {
        matrixMap.push(theMap[iterator].split(/\s+/).map(Number));
    }

    for (const i of forces) {//  DO IT WITH WHILE LOOP
        let force = i.split(' ');
        let forceType = force[0];
        let forceIndex = Number(force[1]);

        if (forceType == 'breeze') {// roll.
            for (let k = 0; k < matrixMap.length; k++) {
                matrixMap[forceIndex][k] -= 15;
            }

        } else if (forceType == 'gale') {// colum.

            for (let k = 0; k < matrixMap.length; k++) {
                matrixMap[k][forceIndex] -= 20;
            }


        } else if (forceType == 'smog') {
            for (let k = 0; k < matrixMap.length; k++) {
                let colum = matrixMap[k];
                for (let j = 0; j < colum.length; j++) {
                    colum[j] += 25;

                    if (colum[j] > 50) { // CHECK THIS !!!
                        let colum = matrixMap.indexOf(matrixMap[k]);
                        let row = matrixMap[k].indexOf(matrixMap[k][j]);
                        resultArr.push(`[${colum}-${row}]`);

                    }
                }
            }
        }

        // console.log(forceIndex);
    }
    if (resultArr.length > 0) {
        console.log(`Polluted areas: ${resultArr.join(', ')}`)
    } else {
        console.log('No polluted areas');
    }


}
solve(
    ["5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24"],

    ["breeze 1", "gale 2", "smog 25"]
);