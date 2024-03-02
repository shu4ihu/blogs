/**
 * @description 缺失的第一个正数
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	const n = nums.length;

	// 将所有小于等于 0 的数替换为 n + 1
	for (let i = 0; i < n; i++) {
		if (nums[i] <= 0) nums[i] = n + 1;
	}

	// 将所有小于等于 n 的数对应的索引的数替换为负数
	for (let i = 0; i < n; i++) {
		const num = Math.abs(nums[i]);
		if (num <= n) {
			nums[num - 1] = -Math.abs(nums[num - 1]);
		}
	}

	// 返回第一个大于 0 的数的索引
	for (let i = 0; i < n; i++) {
		if (nums[i] > 0) return i + 1;
	}

	// 如果都是负数，返回 n + 1
	return n + 1;
};
