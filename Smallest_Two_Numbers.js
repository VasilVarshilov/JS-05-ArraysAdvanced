function solve(arr) {
    arr = arr.sort();
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(i+1 + '.' + arr[i])
    }
 }
 solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);