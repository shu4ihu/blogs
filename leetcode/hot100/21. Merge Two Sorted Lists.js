/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 合并两个有序链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	// 处理边界情况
	if (list1 === null) return list2;
	if (list2 === null) return list1;
	if (!list1 && !list2) return null;

	// 创建一个新的链表，用于存储合并后的链表
	const head = new ListNode(0, null);
	// prev 指向 head，用于存储合并后的链表
	let prev = head;

	// 合并两个有序链表
	while (list1 && list2) {
		// 如果 list1 的值小于等于 list2 的值，将 list1 插入到 prev 后面，同时更新 prev 和 list1
		if (list1.val <= list2.val) {
			prev.next = list1;
			prev = prev.next;
			list1 = list1.next;
		} else {
			// 如果 list2 的值小于 list1 的值，将 list2 插入到 prev 后面，同时更新 prev 和 list2
			prev.next = list2;
			prev = prev.next;
			list2 = list2.next;
		}
	}
	// 如果 list1 、 list2 还有剩余，将剩余部分插入到 prev 后面
	if (list1) prev.next = list1;
	if (list2) prev.next = list2;

	// 返回合并后的链表
	return head.next;
};
