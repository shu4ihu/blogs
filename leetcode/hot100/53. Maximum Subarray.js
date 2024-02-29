/**
 * @description 最大子数组和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let sum = 0;
	let max = nums[0];

	for (let i = 0; i < nums.length; i++) {
		// 前缀和 < 0，往后再相加只能使前缀和更小
		if (sum < 0) sum = nums[i];
		else {
			// 只有前缀和 >= 0的时候，才能继续往后相加
			sum += nums[i];
		}
		max = max > sum ? max : sum;
	}

	return max;
};
