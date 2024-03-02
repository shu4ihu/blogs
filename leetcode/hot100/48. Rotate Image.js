/**
 * @description 旋转图像
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	// 先转置矩阵，再翻转每一行
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i + 1; j < matrix.length; j++) {
			swap(matrix, i, j);
		}
		reverse(matrix[i]);
	}
};

function swap(matrix, i, j) {
	const tmp = matrix[i][j];
	matrix[i][j] = matrix[j][i];
	matrix[j][i] = tmp;
}

function reverse(arr) {
	for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
		const tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
}
