/**
 * @description 零钱兑换
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	// dp[i]表示i的最小硬币数
	// 初始化为amount+1是为了方便后续比较
	// 如果dp[i] === amount+1，说明无法凑出i
	// 如果dp[i] !== amount+1，说明可以凑出i
	// dp[0] = 0，表示凑出0元需要0个硬币
	const dp = new Array(amount + 1).fill(amount + 1);
	dp[0] = 0;

	// 从1开始，因为dp[0]已经初始化为0了
	for (let i = 1; i < dp.length; i++) {
		// 从后往前遍历，因为要找到最小的硬币数
		for (let j = coins.length - 1; j >= 0; j--) {
			// 如果i小于硬币面值，说明无法凑出i
			if (i >= coins[j]) {
				// dp[i]表示i的最小硬币数
				// dp[i - coins[j]]表示i-coins[j]的最小硬币数
				// +1表示coins[j]这个硬币
				// 比如dp[12] = dp[12-3]+1 = dp[9]+1 = 3
				dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
			}
		}
	}

	// 如果dp[amount] === amount+1，说明无法凑出amount
	if (dp[amount] === amount + 1) return -1;
	else return dp[amount];
};
