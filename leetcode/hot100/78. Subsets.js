/**
 * @description 子集
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	const res = [];
	backtrack(0, nums, [], res);
	return res;
};

function backtrack(index, nums, list, res) {
	if (index === nums.length) {
		// 指针越界
		res.push(list.slice());
		return;
	}
	// 选择当前元素
	list.push(nums[index]);
	// 递归
	backtrack(index + 1, nums, list, res);
	// 撤销选择
	list.pop();
	backtrack(index + 1, nums, list, res);
}

subsets([1, 2, 3]);
