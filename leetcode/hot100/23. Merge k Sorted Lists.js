/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 合并 k 个升序链表
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	// 链表数组为空，直接返回 null
	if (lists.length === 0) return null;
	return mergeList(lists, 0, lists.length - 1);
};

// 递归合并链表数组
function mergeList(listArr, start, end) {
	// 递归结束条件
	if (start === end) return listArr[start];

	// 计算中间位置
	const mid = Math.floor((start + end) / 2);
	// 递归合并左右两部分链表
	const left = mergeList(listArr, start, mid);
	const right = mergeList(listArr, mid + 1, end);

	// 合并两个链表
	return merge(left, right);
}

function merge(list1, list2) {
	let node1 = list1;
	let node2 = list2;
	const head = new ListNode(-1, null);
	let cur = head;
	while (node1 && node2) {
		if (node1.val < node2.val) {
			cur.next = node1;
			node1 = node1.next;
		} else {
			cur.next = node2;
			node2 = node2.next;
		}
		cur = cur.next;
	}

	if (node1) cur.next = node1;
	if (node2) cur.next = node2;

	return head.next;
}
