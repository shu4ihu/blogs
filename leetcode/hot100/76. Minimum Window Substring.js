/**
 * @description 最小覆盖子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	// need 记录 t 中字符出现次数
	// window 记录 窗口中相应字符出现次数
	const need = new Map();
	const window = new Map();
	let left = (right = valid = 0);
	let res = "";

	// 初始化 map
	for (let i = 0; i < t.length; i++) {
		need.has(t[i]) ? need.set(t[i], need.get(t[i]) + 1) : need.set(t[i], 1);
	}

	// 需要的字符种类数量
	const needCharLength = Array.from(need.keys()).length;

	// 右指针扩大窗口
	while (right < s.length) {
		const c = s[right];
		right++;

		// 加入字符，更新数据
		window.has(c) ? window.set(c, window.get(c) + 1) : window.set(c, 1);
		if (need.get(c) === window.get(c)) {
			valid++;
		}

		// 当 valid === needCharLength 时，说明窗口中已经包含了所有 t 中的字符
		while (valid === needCharLength) {
			// 更新结果
			const str = s.slice(left, right);
			if (!res.length) res = str;
			else res = res.length < str.length ? res : str;

			const char = s[left];
			left++;

			// 移出字符，更新数据
			if (need.get(char)) {
				window.set(char, window.get(char) - 1);
				if (window.get(char) < need.get(char)) valid--;
			}
		}
	}

	return res;
};
