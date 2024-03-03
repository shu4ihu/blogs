/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 删除链表的倒数第 N 个结点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	// 1. 快慢指针
	let fast = (slow = tmp = head);

	// 快指针先走 n 步
	while (n > 0) {
		fast = fast.next;
		n--;
	}

	// 如果快指针为空，说明要删除的是头结点
	if (!fast) {
		return head.next;
	}

	// 快慢指针同时走，直到快指针走到最后一个节点
	while (fast !== null) {
		tmp = slow;
		slow = slow.next;
		fast = fast.next;
	}

	// 删除倒数第 n 个节点
	tmp.next = slow.next;

	return head;
};
