/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 回文链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	// 1. 快慢指针找到中点
	if (head === null || head.next === null) return true;
	let slow = (fast = head);
	let pre;
	while (fast && fast.next) {
		pre = slow;
		slow = slow.next;
		fast = fast.next.next;
	}

	// 断链
	pre.next = null;
	// 翻转
	slow = reverseList(slow);

	// 比较
	while (head !== null) {
		// 如果不相等，返回false
		if (head.val !== slow.val) return false;

		head = head.next;
		slow = slow.next;
	}

	return true;
};

function reverseList(head) {
	let newList = null;

	while (head !== null) {
		let tmp = head.next;
		head.next = newList;
		newList = head;
		head = tmp;
	}

	return newList;
}
