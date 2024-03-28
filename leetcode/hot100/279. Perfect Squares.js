/**
 * @description 完全平方数
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
	// dp[i]表示i的完全平方数的最小个数
	const dp = new Array(n + 1).fill(0);

	for (let i = 1; i < dp.length; i++) {
		// 最坏情况就是i个1相加
		dp[i] = i;
		// j*j表示完全平方数
		for (let j = 1; i - j * j >= 0; j++) {
			// dp[i]表示i的完全平方数的最小个数
			// dp[i - j * j]表示i-j*j的完全平方数的最小个数
			// +1表示j*j这个完全平方数
			// 比如dp[12] = dp[12-3*3]+1 = dp[3]+1 = 3
			dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
		}
	}
	return dp[n];
};
