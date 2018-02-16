function solve([rows, cols, startRow, startCol]){

    let matrix = fillMatrixWithZeroes(rows, cols);
    let number = 1;
    let waves = 1;
    matrix[startRow][startCol] = number;
    while(!isFilled(matrix)){
        number++;
        let startX = Math.max(0, startRow - waves);
        let startY = Math.max(0, startCol - waves);
        let bottomX = Math.min(matrix.length - 1, startRow + waves);
        let bottomY = Math.min(matrix[0].length - 1, startCol + waves);
        for(let row = startX; row <= bottomX; row++){
            for(let col = startY; col <= bottomY; col++){
                if(matrix[row][col] === 0){
                    matrix[row][col] = number;
                }
            }
        }
        waves++
    }
    function isFilled(matrix){
        for(let row = 0; row < matrix.length; row++){
            for(let col = 0; col < matrix.length; col++){
                if (matrix[row][col] === 0){
                    return false;
                }
            }
        }
        return true;
    }
    function fillMatrixWithZeroes(rows, cols){
        let matrix = [];
        for(let i = 0; i < rows; i++){
            matrix.push('0'.repeat(cols).split('').map(Number));
        }
        return matrix;
    }
    function printMatrix(matrix){
        console.log(matrix.map(e => e.join(' ')).join('\n'));
    }
    printMatrix(matrix);
}

solve([5, 5, 0, 0]);