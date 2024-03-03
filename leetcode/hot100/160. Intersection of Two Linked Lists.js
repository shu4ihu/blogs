/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @description 相交链表
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let listA = headA;
	let listB = headB;
	let lengthA = 1;
	let lengthB = 1;
	let delta = 0;
	// 计算两个链表的长度
	while (listA !== null || listB !== null) {
		if (listA !== null) {
			listA = listA.next;
			lengthA++;
		}
		if (listB !== null) {
			listB = listB.next;
			lengthB++;
		}
	}

	// 计算出两个链表的长度差
	delta = Math.abs(lengthA - lengthB);

	// 更长的链表先遍历 delta 个节点
	if (lengthA > lengthB) {
		// A 先遍历 delta 个节点
		for (let i = 0; i < delta; i++) {
			headA = headA.next;
		}
	} else {
		// B 先遍历 delta 个节点
		for (let i = 0; i < delta; i++) {
			headB = headB.next;
		}
	}

	// 同时遍历两个链表，直到找到相交的节点
	while (headA !== null && headB !== null) {
		if (headA === headB) return headA;
		else {
			headA = headA.next;
			headB = headB.next;
		}
	}

	return null;
};
