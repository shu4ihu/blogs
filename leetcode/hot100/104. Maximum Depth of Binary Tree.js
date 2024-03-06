/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 二叉树的最大深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	// 递归结束条件
	if (!root) return 0;

	// 递归计算左右子树的最大深度
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
