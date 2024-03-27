/**
 * @description 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	// dp[i] 表示爬到第 i 阶楼梯的方法数
	const dp = new Array(n + 1).fill(0);
	// 初始值
	dp[1] = 1;
	dp[2] = 2;

	for (let i = 3; i <= n; i++) {
		// 状态转移方程
		dp[i] = dp[i - 2] + dp[i - 1];
	}

	return dp[n];
};
