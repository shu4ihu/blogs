/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 二叉树的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	// 处理边界情况
	if (root === null) return [];
	const queue = [root];
	const res = [];

	// 遍历每一层
	while (queue.length > 0) {
		// 保存当前队列中的节点数量
		let size = queue.length;
		res.push([]);

		// 队列中节点数量大于 0 时，将节点出队并保存到当前层的数组中，同时将其左右子节点入队
		while (size-- > 0) {
			const node = queue.shift();
			res[res.length - 1].push(node.val);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}
	return res;
};
