/**
 * @description 括号生成
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	const res = [];
	dfs("", n, res, 0, 0);
	return res;
};

function dfs(str, n, res, left, right) {
	// 左括号数量大于n或者右括号数量大于左括号数量，直接返回
	if (left > n || right > left) return;
	// 括号数量等于2n，将当前排列加入结果数组
	if (str.length === 2 * n) {
		res.push(str);
		return;
	}
	// 选择左括号
	dfs(str + "(", n, res, left + 1, right);
	// 选择右括号
	dfs(str + ")", n, res, left, right + 1);
}
