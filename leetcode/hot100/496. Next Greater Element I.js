/**
 * @description 下一个更大元素 I
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	// 1. 创建哈希表，存储nums2中元素及其下一个更大元素
	const map = new Map();
	// 2. 创建单调栈
	const stack = [nums2[0]];
	// 3. 创建结果数组，初始化为-1
	const res = new Array(nums1.length).fill(-1);

	// 4. 遍历nums2
	for (let i = 1; i < nums2.length; i++) {
		// 5. 如果栈不为空且当前元素大于栈顶元素
		while (stack.length && nums2[i] > stack[stack.length - 1]) {
			// 6. 弹出栈顶元素，存储到哈希表中
			const num = stack.pop();
			// 7. 将当前元素存储到哈希表中
			map.set(num, nums2[i]);
		}
		// 8. 将当前元素入栈
		stack.push(nums2[i]);
	}

	// 9. 遍历nums1
	for (let i = 0; i < nums1.length; i++) {
		// 10. 如果哈希表中存在当前元素，存储到结果数组中, 否则存储-1
		res[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1;
	}

	return res;
};
