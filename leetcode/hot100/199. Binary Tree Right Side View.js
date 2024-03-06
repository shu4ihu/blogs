/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 二叉树的右视图
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    // 边界情况处理
    if (root === null) return []

    // 层序遍历
    const queue = [root]
    const res = []
    // 队列辅助遍历
    while (queue.length !== 0) {
      // 当前层的节点个数
        let subtreeLength = queue.length
        // 遍历当前层的节点
        for (let i = 0; i < subtreeLength; i++) {
            const node = queue.pop()
            // 因为是右节点先进队列，所以第一个节点就是右视图的节点
            if (i === 0) {
                res.push(node.val)
            }
            // 先进右节点，再进左节点
            if (node.right) queue.unshift(node.right)
            if (node.left) queue.unshift(node.left)
        }
    }

    return res
};