/**
 * @description 下一个更大元素 II
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
	// 1. 创建结果数组，初始化为-1
	const res = new Array(nums.length).fill(-1);
	// 2. 创建单调栈，存储元素下标
	const stack = [0];
	// 3. 遍历数组，遍历两次，因为是循环数组
	for (let i = 1; i < nums.length * 2; i++) {
		// 4. 获取元素下标，因为是循环数组，所以取余
		j = i % nums.length;
		// 5. 如果栈不为空且当前元素大于栈顶元素
		while (stack.length && nums[j] > nums[stack[stack.length - 1]]) {
			// 6. 弹出栈顶元素，获取其下标
			const index = stack.pop();
			// 7. 将当前元素赋值给结果数组
			res[index] = nums[j];
		}
		// 8. 将当前元素下标入栈
		stack.push(j);
	}

	return res;
};
