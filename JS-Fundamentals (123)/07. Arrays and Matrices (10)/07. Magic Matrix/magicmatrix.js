function solve(input) {
    let matrix = input.map(e => e.split(' ').map(Number));
    let sumInitial = matrix[0].reduce((a, b) => a + b, 0);

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = matrix[row].reduce((a, b) => a + b, 0);
        if (sumRow != sumInitial) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            sumCol += matrix[col][row];
        }
        if (sumCol != sumInitial) {
            return false;
        }
    }

    return true;
}


solve([[4, 5, 6],
       [6, 5, 4],
       [5, 5, 5]]);