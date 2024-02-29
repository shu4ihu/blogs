/**
 * @description 滑动窗口最大值
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	// 存放结果
	const res = [];
	// 双端队列
	const deque = [];

	// 遍历数组
	for (let i = 0; i < nums.length; i++) {
		// 如果队列不为空且队首元素已经不在窗口内，则移除队首元素
		if (deque.length !== 0 && deque[0] <= i - k) {
			deque.shift();
		}

		// 保持队列始终递减
		while (nums[i] > nums[deque[deque.length - 1]]) {
			deque.pop();
		}

		// 将元素下标加入队列
		deque.push(i);

		// 当遍历到第 k 个元素时，开始记录结果
		if (i >= k - 1) {
			res.push(nums[deque[0]]);
		}
	}

	return res;
};
