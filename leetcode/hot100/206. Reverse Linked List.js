/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (head === null) return null;
	let newList = null; // 初始化为空

	while (head !== null) {
		const tmp = head.next; // 保存下一个节点
		head.next = newList; // 反转指针
		newList = head; // 更新newList为当前节点
		head = tmp; // 移动到原链表的下一个节点
	}

	return newList; // 返回反转后的链表的头节点
};
