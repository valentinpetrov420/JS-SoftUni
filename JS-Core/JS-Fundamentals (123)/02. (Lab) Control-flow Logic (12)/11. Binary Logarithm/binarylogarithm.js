function solve(array) {
    for (let index of array){
        console.log(Math.log2(index))
    }
}

solve([1024, 1048576, 256, 1, 2]);