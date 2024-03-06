/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 验证二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
	// 记录中序遍历过程中访问的上一个节点的值，初始化为 -Infinity
	// 从树的最左边的节点开始遍历，确认它的值应该大于 -Infinity
	let pre = -Infinity;

	function valid(root) {
		// 空树或到达叶子节点，返回 true
		if (root === null) return true;

		// 遍历左子树，如果左子树不是二叉搜索树，返回 false
		if (!valid(root.left)) return false;

		// 访问当前根节点，如果当前根节点的值小于等于上一个节点的值，返回 false
		if (root.val <= pre) return false;

		// 更新上一个节点的值
		pre = root.val;

		// 遍历右子树，如果右子树不是二叉搜索树，返回 false
		return valid(root.right);
	}

	return valid(root);
};
