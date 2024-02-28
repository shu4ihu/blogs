/**
 * @description 找到字符串中所有字母异位词
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	// need 记录 p 中字符出现次数
	// window 记录 窗口中相应字符出现次数
	const need = new Map();
	const window = new Map();
	// 左右双指针
	let left = (right = 0);
	let valid = 0;
	const res = [];

	// 初始化 map
	for (let i = 0; i < p.length; i++) {
		need.has(p[i]) ? need.set(p[i], need.get(p[i]) + 1) : need.set(p[i], 1);
		if (!window.has(p[i])) {
			window.set(p[i], 0);
		}
	}

	// 需要的字符种类数量
	const needCharLength = Array.from(need.keys()).length;

	// 右指针扩大窗口
	while (right < s.length) {
		// c 是即将移入窗口的字符
		const c = s[right];
		right++;

		// 加入字符，更新数据
		if (need.has(c)) {
			window.set(c, window.get(c) + 1);
			if (window.get(c) === need.get(c)) valid++;
		}

		// 暂停扩大窗口
		while (right - left >= p.length) {
			// 找到符合条件的子串
			if (valid === needCharLength) res.push(left);

			const char = s[left];
			left++;

			// 移出字符，更新数据
			if (need.has(char)) {
				const charValue = window.get(char);
				if (charValue === need.get(char)) {
					valid--;
				}
				window.set(char, charValue - 1);
			}
		}
	}

	return res;
};

// /* 滑动窗口算法框架 */
// void slidingWindow(string s, string t) {
//     unordered_map<char, int> need, window;
//     for (char c : t) need[c]++;

//     int left = 0, right = 0;
//     int valid = 0;
//     while (right < s.size()) {
//         // c 是将移入窗口的字符
//         char c = s[right];
//         // 右移窗口
//         right++;
//         // 进行窗口内数据的一系列更新
//         ...

//         /*** debug 输出的位置 ***/
//         printf("window: [%d, %d)\n", left, right);
//         /********************/

//         // 判断左侧窗口是否要收缩
//         while (window needs shrink) {
//             // d 是将移出窗口的字符
//             char d = s[left];
//             // 左移窗口
//             left++;
//             // 进行窗口内数据的一系列更新
//             ...
//         }
//     }
// }
