/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 二叉搜索树中第k小的元素
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const arr = []
  // 中序遍历
  function midTraversal(root) {
      if (root === null) return

      midTraversal(root.left)
      arr.push(root.val)
      midTraversal(root.right)
  }

  midTraversal(root)

  // 返回第k小的元素
  return arr[k - 1]
};

