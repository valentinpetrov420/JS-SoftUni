(function solution() {
        return {
            add: (vector1, vector2) => [vector1[0] + vector2[0], vector1[1] + vector2[1]],
            multiply: (vector1, scalar) => [vector1[0] * scalar, vector1[1] * scalar],
            length: (vector) => Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]),
            dot: (vector1, vector2) => vector1[0] * vector2[0] + vector1[1] * vector2[1],
            cross: (vector1, vector2) => vector1[0] * vector2[1] - vector1[1] * vector2[0]
        }
    }
)();

solution.multiply([3.5, -2], 2);