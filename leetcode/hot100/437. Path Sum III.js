/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 路径之和 III
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const prefix = new Map()
    // key : 前缀和 value : 出现该前缀和的路径数量
    prefix.set(0, 1)

    return dfs(root, prefix, 0, targetSum)
};

function dfs(root, prefix, curr, targetSum) {
  // 递归终止条件
    if (root === null) return 0

    // 当前路径的和
    curr += root.val

    // 当前路径的和减去目标值，如果存在这样的前缀和，说明存在路径
    ret = prefix.get(curr - targetSum) || 0
    // 更新前缀和
    prefix.set(curr, (prefix.get(curr) || 0) + 1)
    // 递归左右子树
    res += dfs(root.left, prefix, curr, targetSum)
    res += dfs(root.right, prefix, curr, targetSum)

    // 回溯，删除当前节点的前缀和
    prefix.set(curr, (prefix.get(curr) || 0) - 1)

    return res
}