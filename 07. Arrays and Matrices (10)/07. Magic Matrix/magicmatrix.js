function solve(matrix){
    let currentsum = 0;
    let currentcol = 0;
    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < row.length; col++) {
            currentsum += matrix[row][col];
        }
    }
    console.log(currentsum);
}

solve([[4, 5, 6],
       [6, 5, 4],
       [5, 5, 5]]);