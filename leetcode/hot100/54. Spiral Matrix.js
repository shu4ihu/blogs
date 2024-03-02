/**
 * @description 螺旋矩阵
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	// 如果矩阵为空，返回空数组
	if (matrix === null) return [];

	// l 左边界，r 右边界，t 上边界，b 下边界
	let l = 0,
		r = matrix[0].length - 1,
		t = 0,
		b = matrix.length - 1;
	const res = [];

	while (true) {
		// 从左到右
		for (let i = l; i <= r; i++) {
			res.push(matrix[t][i]);
		}
		// 上边界向下移动
		t += 1;
		// 如果上边界大于下边界，结束循环
		if (t > b) break;

		// 从上到下
		for (let i = t; i <= b; i++) {
			res.push(matrix[i][r]);
		}
		// 右边界向左移动
		r -= 1;
		// 如果左边界大于右边界，结束循环
		if (l > r) break;

		// 从右到左
		for (let i = r; i >= l; i--) {
			res.push(matrix[b][i]);
		}
		// 下边界向上移动
		b -= 1;
		// 如果上边界大于下边界，结束循环
		if (t > b) break;

		// 从下到上
		for (let i = b; i >= t; i--) {
			res.push(matrix[i][l]);
		}
		// 左边界向右移动
		l += 1;
		// 如果左边界大于右边界，结束循环
		if (l > r) break;
	}

	return res;
};
