/**
 * @description 杨辉三角
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	const res = [];

	// 遍历 numRows 行
	for (let i = 0; i < numRows; i++) {
		// 初始化当前行
		const row = new Array(i + 1).fill(1);
		// 遍历当前行，从第 2 个元素开始
		for (let j = 1; j < row.length - 1; j++) {
			// 当前元素等于上一行的前一个元素加上上一行的当前元素
			row[j] = res[i - 1][j - 1] + res[i - 1][j];
		}
		res.push(row);
	}

	return res;
};
