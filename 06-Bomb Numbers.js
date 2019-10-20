function solve(sequence, bombInfo) {
 
    const bombNumber = bombInfo[0];
    const bombPower = bombInfo[1];
 
    let bombIndex;
 
    while (((bombIndex = sequence.indexOf(bombNumber)) !== -1)) {
 
        sequence.splice(bombIndex + 1, bombPower); // Detonate right floated numbers
 
        let bombIndexV2 = (bombIndex - bombPower) >= 0 ? (bombIndex - bombPower) : 0;
        let bombPowerV2 = (bombIndex - bombPower) >= 0 ? bombPower + 1 : bombIndex + 1;
 
        sequence.splice(bombIndexV2, bombPowerV2); // Detonate left floated numbers
    }
 
    console.log(sequence.reduce((a, b) => a + b, 0))
}
solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);