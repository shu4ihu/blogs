/**
 * @description 最长连续序列
 * @param {number[]} nums
 * @return {number}
 */
// 用map存储每个数字的连续序列长度，遍历数组，对于每个数字，如果map中已经有了，就跳过，否则计算它的连续序列长度，然后更新map
var longestConsecutive = function (nums) {
	const map = new Map();
	nums.forEach((item) => {
		if (map.get(item)) return;

		// 获取item-1和item+1的连续序列长度，如果没有就设为0
		const prev = map.get(item - 1) || 0;
		const next = map.get(item + 1) || 0;

		// 连续序列长度为1 + 前一个连续 + 后一个连续
		let length = 1 + prev + next;

		// 更新map
		map.set(item, length);

		// 更新 前一个连续序列 的长度
		if (prev) map.set(item - prev, length);
		// 更新 后一个连续序列 的长度
		if (next) map.set(item + next, length);
	});

	// 获取map的values，然后找出最大值
	const values = Array.from(map.values());
	let max = 0;

	values.forEach((item) => (max = max > item ? max : item));

	return max;
};
