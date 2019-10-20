function solve(arr) {

    let result = new Array;

  for (const item of arr) {
      if(!result.includes(item)){
     result.push(item);
      }
  }
     console.log(result.join(' '));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);