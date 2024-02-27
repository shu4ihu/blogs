/**
 * @description 盛最多水的容器
 * @param {number[]} height
 * @return {number}
 */
// 用双指针，left指向数组头，right指向数组尾，然后计算面积，然后移动指针，直到left >= right
// 移动指针的规则是，如果left的值大于right的值，就移动right，否则移动left
// 因为如果移动更大的那一边 (left)，面积是一定会变小的，所以移动right
// 如果移动更小的那一边 (right)，面积可能会变大，所以移动right
// 这样可以保证面积最大
var maxArea = function (height) {
	//  a , b
	//  height[a] , height[b]
	//  x = b - a
	//  y = Math.min(height[a], height[b])
	//  s = x * y
	let s = 0;
	let left = 0,
		right = height.length - 1;
	while (left < right) {
		x = right - left;
		y = Math.min(height[left], height[right]);
		s = s > x * y ? s : x * y;

		if (height[left] > height[right]) right--;
		else left++;
	}
	return s;
};
