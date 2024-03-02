/**
 * @description 搜索二维矩阵 II
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	let row = 0;
	let column = matrix[row].length - 1;
	while (row <= matrix.length - 1 && column >= 0) {
		const num = matrix[row][column];
		if (num === target) return true;
		else if (num < target) {
			// num 小于 target，说明现在的行的所有元素都是小于 target 的，可以不用遍历
			row++;
		} else {
			// num 大于 target，说明现在的列的所有元素都是大于 target 的，可以不用遍历
			column--;
		}
	}
	return false;
};
