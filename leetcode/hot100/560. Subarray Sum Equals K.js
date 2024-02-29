/**
 * @description 和为K的子数组
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	// map 记录前缀和出现的次数
	const map = new Map();
	map.set(0, 1);
	// 计数器
	let count = 0;
	// 前缀和
	let sum = 0;

	// 遍历数组，计算前缀和
	for (let i = 0; i < nums.length; i++) {
		// 计算前缀和
		sum += nums[i];
		// 如果 map 中存在 sum - k，说明存在和为 k 的子数组
		if (map.has(sum - k)) {
			// 更新 count
			count += map.get(sum - k);
		}
		// 更新 map
		map.set(sum, (map.get(sum) || 0) + 1);
	}

	return count;
};
