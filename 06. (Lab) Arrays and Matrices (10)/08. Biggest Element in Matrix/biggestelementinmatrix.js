function solve(matrix){
    let min = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] > min){
                min = matrix[row][col];
            }
        }
    }
    console.log(min);
}

solve([[100, 200], [5000, 2]]);

let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let matrix1 = [
    arr,
    arr2,
    arr3
];

console.log(matrix1);