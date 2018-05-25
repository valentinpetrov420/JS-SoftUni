function solve(inputArray, sortMethod){
    let ascendingComparator = function (a, b){
        return a - b;
    };
    let descendingComparator = function(a, b){
        return b - a;
    };
    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };
    return inputArray.sort(sortingStrategies[sortMethod]);
}

console.log(solve([2, 3, 5, 1, 0, -5], 'asc'));