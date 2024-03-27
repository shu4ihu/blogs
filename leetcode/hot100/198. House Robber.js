/**
 * @description 打家劫舍
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	// dp[i] 表示抢劫前 i 个房子的最大收益
	const dp = new Array(nums.length);
	// 初始值
	dp[0] = nums[0];
	dp[1] = Math.max(nums[0], nums[1]);
	// 遍历数组
	for (let i = 2; i < nums.length; i++) {
		// 状态转移方程，抢劫第 i 个房子时，有两种选择：
		// 1. 抢劫第 i 个房子，那么 dp[i] = dp[i - 2] + nums[i]
		// 2. 不抢劫第 i 个房子，那么 dp[i] = dp[i - 1]
		// 两者取最大值
		dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
	}

	// 返回最后一个元素
	return dp[nums.length - 1];
};
