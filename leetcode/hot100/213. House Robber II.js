/**
 * @description 打家劫舍 II
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	// 边界情况
	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];

	// 分两种情况讨论
	// 1 ~ n - 1
	const first = robRange(nums, 0, nums.length - 2);
	// 2 ~ n
	const second = robRange(nums, 1, nums.length - 1);

	// 返回两种情况的最大值
	return Math.max(first, second);
};

function robRange(nums, start, end) {
	// 边界情况，只有一个元素
	if (start === end) return nums[start];

	// dp[i] 表示抢劫前 i 个房子的最大收益
	const dp = new Array(nums.length);
	dp[start] = nums[start];
	dp[start + 1] = Math.max(nums[start], nums[start + 1]);

	// 遍历数组
	for (let i = start + 2; i <= end; i++) {
		// 状态转移方程，抢劫第 i 个房子时，有两种选择：
		dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
	}

	// 返回最后一个元素
	return dp[end];
}
