// 翻转数组
function reverse(arr, a, b) {
	while (a < b) {
		const tmp = arr[a];
		arr[a] = arr[b];
		arr[b] = tmp;

		a++;
		b--;
	}
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	// 取余，防止 k > nums.length
	let index = k % nums.length;

	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, index - 1);
	reverse(nums, index, nums.length - 1);
};
