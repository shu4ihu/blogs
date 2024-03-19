/**
 * @description 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const res = [];
	backtrack([], nums, res);

	return res;
};

/**
 * @description 回溯
 * @param {number[]} list 当前排列
 * @param {number[]} nums 原数组
 * @param {number[][]} res 结果数组
 */
function backtrack(list, nums, res) {
	// 当前排列长度等于原数组长度时，将当前排列加入结果数组，结束递归
	if (list.length === nums.length) {
		res.push([...list]);
		return;
	}

	// 遍历原数组，将不在当前排列中的元素加入当前排列
	for (let i = 0; i < nums.length; i++) {
		if (list.includes(nums[i])) continue;

		list.push(nums[i]);
		backtrack(list, nums, res);
		list.pop();
	}
}
