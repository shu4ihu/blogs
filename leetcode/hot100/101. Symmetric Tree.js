/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
	return symmetric(root.left, root.right);
};

// 递归判断左右子树是否对称
function symmetric(p, q) {
	// 递归结束条件
	// 左右子树都为空，对称
	// 左右子树其中有一个为空，一个费控，不对称
	if (!p && !q) return true;
	else if (!p || !q) return false;

	// 递归判断左右子树是否对称
	// 两个节点值相等，且左子树的左节点和右子树的右节点对称，左子树的右节点和右子树的左节点对称
	if (p.val === q.val && symmetric(p.left, q.right) && symmetric(p.right, q.left)) return true;
	return false;
}
