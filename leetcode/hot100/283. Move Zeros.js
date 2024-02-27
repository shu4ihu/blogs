/**
 * @description 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 用双指针，slow指向第一个0，fast指向第一个非0，然后交换两个指针的值，slow++，fast++，直到fast到达数组末尾
// 然后将slow到数组末尾的值都设为0
var moveZeroes = function (nums) {
	if (nums.length === 1) return nums;
	let slow = (fast = 0);
	while (fast < nums.length) {
		if (nums[fast]) {
			nums[slow] = nums[fast];
			slow++;
		}
		fast++;
	}

	while (slow < nums.length) {
		nums[slow] = 0;
		slow++;
	}

	return nums;
};
