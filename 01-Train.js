function passWag(wagons) {

    let passengersInWagons = wagons.shift().split(' ').map(Number);
    let maxWagonCapacity = Number(wagons.shift());

    for (const commands of wagons) {
        let currentCommand = commands.split(' ');

        if (currentCommand[0] === 'Add') {
            passengersInWagons.push(+currentCommand[1]);
        } else {
            for (let i = 0; i < passengersInWagons.length; i++) {
                if ((passengersInWagons[i] + Number(currentCommand[0])) <= maxWagonCapacity) {
                    passengersInWagons[i] += +currentCommand[0];
                    break;
                }
            }
        }

    }
    console.log(passengersInWagons.join(' '));
}

passWag(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);