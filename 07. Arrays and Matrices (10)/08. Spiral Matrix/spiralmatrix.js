function solve(rows, cols){
    let number = 1;
    let maximum = rows * cols;
    let matrix = fillMatrix(rows, cols);
    console.log(matrix);

    function fillMatrix(rows, cols){
        let matrix = [];
        for (let idx = 0; idx < rows.length; idx++) {
            matrix.push('0'.repeat(cols).split('').map(Number));
        }
        return matrix;
    }
}

solve(5, 5);