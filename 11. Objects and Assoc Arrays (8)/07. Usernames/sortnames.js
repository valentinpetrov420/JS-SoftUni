function solve(input) {
    let uniqueInput = input.filter(function(item, pos) {
        return input.indexOf(item) == pos;
    })
    let sortedUniqueInput = uniqueInput.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b)
    })
    for(let i = 0; i < sortedUniqueInput.length; i++){
        console.log(sortedUniqueInput[i]);
    }
}

solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);