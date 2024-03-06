/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 二叉树的中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	// 处理边界情况
	if (root === null) return [];
	if (!root.left && !root.right) return [root.val];

	const res = [];

	// 递归遍历
	function traversal(root) {
		// 递归结束条件
		if (!root) return;

		// 中序遍历：左 -> 根 -> 右
		traversal(root.left);
		res.push(root.val);
		traversal(root.right);
	}

	traversal(root);

	return res;
};
