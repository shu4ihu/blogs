/**
 * @description 岛屿数量
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let count = 0;
	// 遍历二维数组
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			// 如果当前元素为 1，说明找到了一个未遍历过的岛屿，count++
			if (grid[r][c] === "1") {
				dfs(grid, r, c);
				count++;
			}
		}
	}

	return count;
};

function dfs(grid, r, c) {
	// 判断越界
	if (!isInArea(grid, r, c)) return;

	// 如果当前元素不为 1，说明已经遍历过了或不是岛屿，直接返回
	if (grid[r][c] !== "1") return;

	// 将当前元素标记为已遍历
	grid[r][c] = "2";

	// 遍历上下左右
	dfs(grid, r - 1, c);
	dfs(grid, r + 1, c);
	dfs(grid, r, c - 1);
	dfs(grid, r, c + 1);
}

function isInArea(grid, r, c) {
	return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}
