/**
 * @description 除自身以外数组的乘积
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	// left 保存当前元素左边的乘积，初始化为 1
	const left = new Array(nums.length).fill(1);
	// right 保存当前元素右边的乘积，初始化为 1
	const right = new Array(nums.length).fill(1);
	const res = [];

	// 计算左边的乘积，从 1 开始遍历，因为第一个元素左边没有元素
	for (let i = 1; i < nums.length; i++) {
		left[i] = left[i - 1] * nums[i - 1];
	}

	// 计算右边的乘积，从 nums.length - 2 （倒数第二个） 开始遍历，因为最后一个元素右边没有元素
	for (let i = nums.length - 2; i >= 0; i--) {
		right[i] = right[i + 1] * nums[i + 1];
	}

	// 计算结果
	for (let i = 0; i < nums.length; i++) {
		res[i] = left[i] * right[i];
	}

	return res;
};
