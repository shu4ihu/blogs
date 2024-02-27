// 实现了一个快排，也可以用数组的sort方法
function quickSort(nums) {
	if (nums.length <= 1) return nums;

	const pivotIndex = Math.floor(nums.length / 2);
	const pivot = nums[pivotIndex];
	const left = [];
	const right = [];

	for (let i = 0; i < nums.length; i++) {
		if (i === pivotIndex) continue;
		if (nums[i] < pivot) left.push(nums[i]);
		else right.push(nums[i]);
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * @description 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	// 先排序
	nums = quickSort(nums);
	const res = [];
	// 遍历数组
	for (let i = 0; i < nums.length; i++) {
		// 因为排过序了，所以如果当前值大于0，后面的值肯定也大于0，所以直接break
		if (nums[i] > 0) break;
		// 如果当前值和前一个值相同，就跳过
		if (nums[i] === nums[i - 1]) continue;

		// 双指针
		let left = i + 1,
			right = nums.length - 1;

		// 双指针移动
		while (left < right) {
			// 如果三数之和等于0，就push到res里
			if (nums[left] + nums[right] + nums[i] === 0) {
				res.push([nums[i], nums[left], nums[right]]);
				// 如果左指针的值和前一个值相同，就跳过
				while (nums[left] === nums[left + 1]) {
					left++;
				}
				// 如果右指针的值和前一个值相同，就跳过
				while (nums[right] === nums[right - 1]) {
					right--;
				}
				left++;
				right--;

				// 如果三数之和大于0，就移动右指针
			} else if (nums[left] + nums[right] + nums[i] > 0) {
				right--;
				// 如果三数之和小于0，就移动左指针
			} else {
				left++;
			}
		}
	}

	return res;
};
