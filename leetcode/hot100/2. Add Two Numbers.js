/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 两数相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let flag = 0;
	let head = new ListNode(0, null);
	let node = head;

	// 两个链表其中一个不为空
	while (l1 || l2) {
		let num;
		// 如果 l1 或 l2 为空，将其值设为 0
		let l1Value = l1 ? l1.val : 0;
		let l2Value = l2 ? l2.val : 0;

		// 如果有进位，加上进位
		if (flag) {
			num = l1Value + l2Value + flag;
			flag = 0;
		} else num = l1Value + l2Value;

		// 如果 num 大于等于 10，进位，num 取个位
		if (num >= 10) {
			flag = 1;
			num %= 10;
		}

		// 尾插
		node.next = new ListNode(num, null);
		node = node.next;

		// 不为空，才往后移
		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}

	// 如果最后还有进位，加上进位
	if (flag) {
		node.next = new ListNode(flag, null);
	}

	return head.next;
};
