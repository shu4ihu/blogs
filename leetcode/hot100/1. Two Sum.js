/**
 * @description 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 哈希表，key 存储数组元素，value 存储数组下标
// 遍历数组，判断 target - num 是否在哈希表中，如果在则返回当前下标和哈希表中的下标
var twoSum = function (nums, target) {
	const map = new Map();
	let res = [0, 0];
	nums.forEach((num, index) => {
		if (map.has(target - num)) {
			res = [index, map.get(target - num)];
		}
		map.set(num, index);
	});

	return res;
};
