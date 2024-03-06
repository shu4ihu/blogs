/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 将有序数组转换为二叉搜索树
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	// 递归构建二叉搜索树
	function BST(start, end) {
		// start > end 说明已经没有节点了
		if (start > end) return null;

		// 取中间节点作为根节点
		const mid = (start + end) >> 1;
		const root = new TreeNode(nums[mid]);

		// 递归构建左右子树
		root.left = BST(start, mid - 1);
		root.right = BST(mid + 1, end);

		return root;
	}

	return BST(0, nums.length - 1);
};
