/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 二叉树的直径
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
	// 保存结果
	let res = 0;

	function dfs(root) {
		// 递归结束条件
		if (!root) return 0;

		// 获取左子树的深度
		const left = dfs(root.left);
		// 获取右子树的深度
		const right = dfs(root.right);

		// 对于每个节点，它的左子树深度与右子树深度的和就是通过该节点的直径
		// 通过该节点的直径与之前的最大直径比较，取最大值
		// 保证 res 始终保存最大直径
		res = Math.max(res, left + right);

		// 返回当前节点的最大深度（包括自身）
		return Math.max(left, right) + 1;
	}
	dfs(root);

	return res;
};
