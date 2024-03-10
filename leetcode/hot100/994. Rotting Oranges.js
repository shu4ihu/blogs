/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	// mxn 矩阵
	const m = grid.length;
	const n = grid[0].length;
	const queue = [];

	// 新鲜橘子的数量
	let count = 0;
	// 遍历二维数组
	for (let r = 0; r < m; r++) {
		for (let c = 0; c < n; c++) {
			// 如果当前元素为 1，说明找到了一个新鲜橘子，count++
			if (grid[r][c] === 1) count++;
			// 如果当前元素为 2，说明找到了一个腐烂橘子，将其加入队列
			else if (grid[r][c] === 2) queue.unshift([r, c]);
		}
	}

	// 记录时间
	let minute = 0;
	while (count > 0 && queue.length !== 0) {
		// 每一轮 BFS 时间 +1
		minute++;
		// 每一轮 BFS 遍历的节点数量
		let size = queue.length;
		// 遍历当前队列中的节点
		for (let i = 0; i < size; i++) {
			let [r, c] = queue.pop();
			// 左
			if (r - 1 >= 0 && grid[r - 1][c] === 1) {
				// 将新鲜橘子标记为腐烂橘子
				grid[r - 1][c] = 2;
				// 新鲜橘子数量 -1
				count--;
				// 将新鲜橘子加入队列
				queue.unshift([r - 1, c]);
			}
			// 右
			if (r + 1 < m && grid[r + 1][c] === 1) {
				grid[r + 1][c] = 2;
				count--;
				queue.unshift([r + 1, c]);
			}
			// 上
			if (c - 1 >= 0 && grid[r][c - 1] === 1) {
				grid[r][c - 1] = 2;
				count--;
				queue.unshift([r, c - 1]);
			}
			// 下
			if (c + 1 < n && grid[r][c + 1] === 1) {
				grid[r][c + 1] = 2;
				count--;
				queue.unshift([r, c + 1]);
			}
		}
	}

	// 如果还有新鲜橘子，返回 -1
	if (count > 0) return -1;
	else return minute;
};
