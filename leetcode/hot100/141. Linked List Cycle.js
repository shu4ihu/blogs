/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @description 环形链表
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	// head 为空，或者只有一个节点，肯定不是环形链表
	if (head === null || head.next === null) return false;
	let fast = head;
	// 快慢指针
	// 快指针每次走两步，慢指针每次走一步
	// 如果是环形链表，快慢指针一定会相遇

	// 判断条件：快指针和快指针的下一个节点都不为空
	while (fast && fast.next) {
		fast = fast.next.next;
		head = head.next;
		if (head === fast) return true;
	}

	return false;
};
