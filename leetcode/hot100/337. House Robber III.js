/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
	const [notRob, ifRob] = robTree(root);

	return Math.max(notRob, ifRob);
};

function robTree(root) {
	// 返回一个数组，数组中有两个元素
	// 下标 0 : 不偷， 1 : 偷
	if (root === null) return [0, 0];

	// 递归左右子树
	const leftMoney = robTree(root.left);
	const rightMoney = robTree(root.right);

	// 如果偷，则孩子不能偷
	const ifRob = root.val + leftMoney[0] + rightMoney[0];
	// 如果不偷，则孩子能偷
	// 两个孩子偷或不偷的最大值相加
	const notRob = Math.max(leftMoney[0], leftMoney[1]) + Math.max(rightMoney[0], rightMoney[1]);

	return [notRob, ifRob];
}
