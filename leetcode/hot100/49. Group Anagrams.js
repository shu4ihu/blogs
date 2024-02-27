/**
 * @description 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
// 对每个字符串排序，然后用map存储，key为排序后的字符串，value为原字符串，最后返回map的values
var groupAnagrams = function (strs) {
	const map = new Map();

	strs.forEach((str) => {
		const wordList = str.split("").sort().toString();
		if (!map.has(wordList)) {
			map.set(wordList, [str]);
		} else {
			const value = map.get(wordList);
			value.push(str);
			map.set(wordList, value);
		}
	});

	return Array.from(map.values());
};
