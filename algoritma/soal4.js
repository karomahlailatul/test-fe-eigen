const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

const matrixNxN = (matrix) => {
    let diagonalPertama = 0;
    let diagonalKedua = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) diagonalPertama += matrix[i][j]
            if (i + j === matrix[i].length - 1) diagonalKedua += matrix[i][j];
        }
    }
    return Math.abs(diagonalPertama - diagonalKedua)
};

console.log(matrixNxN(Matrix))