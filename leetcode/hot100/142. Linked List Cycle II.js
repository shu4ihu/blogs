/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @description 环形链表 II，返回环形链表的起始节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	let fast = (slow = head);
	let cycleFlag = false;

	// 快慢指针
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;

		if (slow === fast) {
			cycleFlag = true;
			break;
		}
	}

	// 无环
	if (!cycleFlag) return null;

	// 有环，不懂，只知道找到相遇点后，让一个指针从头开始，另一个指针从相遇点开始，再次相遇的地方就是环的起点
	let ptr = head;
	while (ptr !== slow) {
		ptr = ptr.next;
		slow = slow.next;
	}

	return ptr;
};
