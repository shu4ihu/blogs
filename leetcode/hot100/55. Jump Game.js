/**
 * @description 跳跃游戏
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	// 最大可跳跃距离
	let maxJump = 0;

	// 遍历数组
	for (let i = 0; i < nums.length; i++) {
		// 如果当前位置 i 小于等于最大可跳跃距离
		if (i <= maxJump) {
			// 更新最大可跳跃距离
			maxJump = Math.max(nums[i] + i, maxJump);
			// 如果最大可跳跃距离 >= 最后下标，说明可达，返回 true
			if (maxJump >= nums.length - 1) return true;
		}
	}

	return false;
};
