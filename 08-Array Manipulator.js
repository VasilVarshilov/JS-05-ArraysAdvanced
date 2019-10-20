function solve(arr, manipulations) {
    let command = manipulations.shift();

    while (command !== 'print') {

        command = command.split(' ');

        if (command[0] == 'add') {
            let index = +command[1];
            let element = +command[2];
            arr.splice(index, 0, element);
        } else if (command[0] == 'addMany') {
            command.shift();
            let index = command.shift();
            let toAdd = [];
            for (const element of command) {
                toAdd.splice(index, 0, +element);
            }
            toAdd.reverse();
            // let end = toAdd.shift();
            // toAdd.push(end);
            for (const da of toAdd) {
                arr.splice(index, 0, da);
            }
        } else if (command[0] == 'contains') {
            let index = arr.includes(+command[1]);
            if (!index) {
                console.log(-1);
            } else {
                console.log(arr.indexOf(+command[1]));
            }
        } else if (command[0] == 'remove') {
            let index = command[1];
            arr.splice(index, 1);
        } else if (command[0] == 'shift') {
            let rows = command[1];
            for (let i = 0; i < rows; i++) {
                let cut = arr.shift();
                arr.push(cut);
            }
        } else if (command[0] == 'sumPairs') {
            let loopArr = arr.slice();
            arr = [];
            while (loopArr.length > 1) {
                let num = loopArr.shift() + loopArr.shift();
                arr.push(num);
            }
            if (loopArr.length === 1) {
                arr.push(loopArr.shift());

            }

        }

        command = manipulations.shift();
    }

    console.log(`[ ${arr.join(', ')} ]`);
}
solve(
    [1, 2, 3, 4, 5],

    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']

);