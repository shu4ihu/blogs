/**
 * @description 电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits === "") return [];
	// 电话号码键盘
	const phone = {
		2: ["a", "b", "c"],
		3: ["d", "e", "f"],
		4: ["g", "h", "i"],
		5: ["j", "k", "l"],
		6: ["m", "n", "o"],
		7: ["p", "q", "r", "s"],
		8: ["t", "u", "v"],
		9: ["w", "x", "y", "z"],
	};
	const res = [];
	const charArr = digits.split("");
	// 将输入的数字转换为对应的字母数组
	const arr = charArr.map((item) => phone[item]);
	const size = arr.length;

	backtrack("", size, res, arr);
	return res;
};

function backtrack(str, size, res, arr) {
	// 当前排列长度等于原数组长度时，将当前排列加入结果数组，结束递归
	if (str.length === size) {
		res.push(str);
		return;
	}

	// 遍历原数组，将不在当前排列中的元素加入当前排列
	for (let i = 0; i < arr[str.length].length; i++) {
		// 选择当前元素
		str += arr[str.length][i];
		// 递归
		backtrack(str, size, res, arr);
		// 撤销选择
		str = str.slice(0, str.length - 1);
	}
}
