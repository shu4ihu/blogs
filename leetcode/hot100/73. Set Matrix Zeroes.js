/**
 * @description 矩阵置零
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	const rowMap = new Map();
	const columnMap = new Map();

	// 遍历矩阵，找到值为 0 的元素，记录行和列
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				rowMap.set(i, "row");
				columnMap.set(j, "column");
			}
		}
	}

	// 遍历矩阵，将行和列置零
	for (let i = 0; i < matrix.length; i++) {
		const rowFlag = rowMap.get(i) === "row" ? true : false;
		for (let j = 0; j < matrix[i].length; j++) {
			const columnFlag = columnMap.get(j) === "column" ? true : false;
			if (rowFlag || columnFlag) {
				matrix[i][j] = 0;
			}
		}
	}
};
