/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 翻转二叉树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
	// 递归结束条件
	if (!root) return root;

	// 递归翻转左右子树
	let left = invertTree(root.left);
	let right = invertTree(root.right);

	// 翻转左右子树
	root.right = left;
	root.left = right;

	// 返回翻转后的根节点
	return root;
};
