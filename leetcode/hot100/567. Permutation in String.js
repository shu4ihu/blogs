/**
 * @description 字符串的排列
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	// need 记录 s1 中字符出现次数
	const need = new Map();
	const window = new Map();
	let left = (right = valid = 0);

	// 初始化 map
	for (let i = 0; i < s1.length; i++) {
		need.has(s1[i]) ? need.set(s1[i], need.get(s1[i]) + 1) : need.set(s1[i], 1);
	}

	// 需要的字符种类数量
	const needCharNum = Array.from(need.keys()).length;

	// 右指针扩大窗口
	while (right < s2.length) {
		const c = s2[right];
		right++;

		// 加入字符，更新数据
		if (need.has(c)) {
			window.has(c) ? window.set(c, window.get(c) + 1) : window.set(c, 1);

			if (window.get(c) === need.get(c)) valid++;
		}

		// 当 valid === needCharNum 时，说明窗口中已经包含了所有 s1 中的字符
		while (valid === needCharNum) {
			// 找到符合条件的子串
			const num = right - left;
			if (num === s1.length) return true;

			// 移出字符，更新数据
			const char = s2[left];
			left++;
			if (need.get(char)) {
				window.set(char, window.get(char) - 1);
				if (need.get(char) > window.get(char)) valid--;
			}
		}
	}

	return false;
};
