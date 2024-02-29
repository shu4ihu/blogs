/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	// 按照区间的左端点排序
	intervals.sort((a, b) => a[0] - b[0]);

	// 合并区间
	for (let i = 0; i < intervals.length - 1; i++) {
		// 如果当前区间的右端点 >= 下一个区间的左端点，说明两个区间有交集
		if (intervals[i][1] >= intervals[i + 1][0]) {
			// 合并
			intervals[i + 1] = [intervals[i][0], Math.max(intervals[i + 1][1], intervals[i][1])];
			// 删除当前区间
			intervals.splice(i, 1);

			// 删除当前区间后，数组长度减 1，所以 i 需要减 1
			i--;
		}
	}

	return intervals;
};
