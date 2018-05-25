function solve(matrix){
    for (let i = 0; i < matrix.length; i++) {
         matrix[i] = {
            width: matrix[i][0],
            height: matrix[i][1],
            area: function(){
                return this.height * this.width;
            },
            compareTo: function(other){
                let diff = other.area() - this.area();
                return diff || other.width - this.width;
            }
        };
    }
    matrix.sort((a, b) => a.compareTo(b));
    return matrix;
}

console.log(solve([[10, 5], [3, 20], [5, 12]]));