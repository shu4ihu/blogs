/**
 * @description 组合总和
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	const res = [];
	backtrack(0, target, candidates, [], res);
	return res;
};

function backtrack(start, target, candidates, list, res) {
	// 当前目标值小于0，直接返回
	if (target < 0) return;
	// 当前目标值等于0，将当前排列加入结果数组
	else if (target === 0) {
		res.push(list.slice());
	}

	// 遍历数组
	for (let i = start; i < candidates.length; i++) {
		// 选择当前元素
		list.push(candidates[i]);
		// 递归
		backtrack(i, target - candidates[i], candidates, list, res);
		// 撤销选择
		list.pop();
	}
}
