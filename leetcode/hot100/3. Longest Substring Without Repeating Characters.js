/**
 * @description 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const window = new Map();
	let left = (right = 0);
	let max = 0;

	// 右指针扩大窗口
	while (right < s.length) {
		const c = s[right];
		right++;
		// 加入字符，更新数据
		window.has(c) ? window.set(c, window.get(c) + 1) : window.set(c, 1);

		// 暂停扩大窗口
		while (window.get(c) > 1) {
			const char = s[left];
			left++;
			// 移出字符，更新数据
			window.set(char, window.get(char) - 1);
		}

		// 更新结果
		max = Math.max(max, right - left);
	}
	return max;
};
