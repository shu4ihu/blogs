/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 从前序与中序遍历序列构造二叉树
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
	// 保存中序遍历的值和对应的索引
	const len = preorder.length;
	const map = new Map();
	for (let i = 0; i < len; i++) {
		map.set(inorder[i], i);
	}
	return build(preorder, inorder, 0, len - 1, 0, len - 1, map);
}

function build(preorder, inorder, preLeft, preRight, inLeft, inRight, map) {
	// 递归终止条件，前序遍历的左边界大于右边界
	if (preLeft > preRight) return null;

	// 前序遍历的第一个节点就是根节点
	let preRoot = preLeft;
	// 中序遍历中根节点的索引
	let inRoot = map.get(preorder[preRoot]);
	// 创建根节点
	let root = new TreeNode(preorder[preRoot]);
	// 左子树的节点个数
	let leftTreeCount = inRoot - inLeft;

	// 递归构造左右子树
	root.left = build(
		preorder,
		inorder,
		preLeft + 1,
		preLeft + leftTreeCount,
		inLeft,
		inRoot - 1,
		map
	);
	root.right = build(
		preorder,
		inorder,
		preLeft + leftTreeCount + 1,
		preRight,
		inRoot + 1,
		inRight,
		map
	);

	return root;
}
