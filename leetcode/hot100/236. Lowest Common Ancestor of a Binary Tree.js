/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 二叉树的最近公共祖先
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	// 如果 root 为 null，说明已经越过叶子节点，直接返回 null
	if (root === null) return null;
	// 如果 root 为 p 或 q，说明已经找到了 p 或 q，直接返回 root
	if (root === p || root === q) return root;

	// 在左子树中查找 p 或 q
	const left = lowestCommonAncestor(root.left, p, q);
	const right = lowestCommonAncestor(root.right, p, q);

	// 如果左右子树都找到了 p 或 q，说明 p 和 q 分别在 root 的左右子树中，返回 root
	if (left && right) return root;
	// 如果左右子树只有一个找到了 p 或 q，说明 p 和 q 都在 root 的左子树或右子树中，返回找到的节点
	else if (!left || !right) return left ? left : right;
	// 如果左右子树都没有找到 p 或 q，返回 null
	else return null;
};
