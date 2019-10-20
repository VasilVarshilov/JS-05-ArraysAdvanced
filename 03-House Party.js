function solve(arr) {
    let nameList = new Array;
    for (let i = 0; i < arr.length; i++) {
        let guest = arr[i];
        guest = guest.split(' ');

        if (guest.length === 3) {
            if(nameList.includes(guest[0])){
                console.log(`${guest[0]} is already in the list!`);
               
            }else{
                   nameList.push(guest[0]);
            }
         
        }

    }

    for (let i = 0; i < arr.length; i++) {
        let guest = arr[i];
        guest = guest.split(' ');

        if (guest.length === 4 && nameList.includes(guest[0])) {
            let toDelete = nameList.indexOf(guest[0]);
            nameList.splice(toDelete, 1);
        } else if (guest.length === 4 && !nameList.includes(guest[0])) {
            console.log(`${guest[0]} is not in the list!`);
        }

    }

    console.log(nameList.join('\n'));
}
 solve(['Allie is going!',
    'George is going!',
     'John is not going!',
    'George is not going!']);

solve(
    ['Tom is going!',
        'Annie is going!',
        'Tom is going!',
        'Garry is going!',
        'Jerry is going!']
)