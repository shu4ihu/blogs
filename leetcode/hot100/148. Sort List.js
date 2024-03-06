/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 对链表进行排序
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
	// 链表为空或者只有一个节点，直接返回
	if (!head || !head.next) return head;
	// 获取链表长度
	let length = 0;
	let node = head;
	while (node) {
		length++;
		node = node.next;
	}

	// 创建一个虚拟头节点
	const dummyHead = new ListNode(0, head);

	// 从长度为 1 开始，每次将链表拆分成若干个长度为 subLength 的子链表，对这些子链表进行两两合并
	for (let subLength = 1; subLength < length; subLength *= 2) {
		// prev 指向虚拟头节点，curr 指向虚拟头节点的下一个节点
		let prev = dummyHead,
			curr = dummyHead.next;

		// 当前节点不为空
		while (curr !== null) {
			let head1 = curr;
			// 找到第一个子链表的尾节点
			for (let i = 1; i < subLength && curr.next !== null; i++) {
				curr = curr.next;
			}
			// 第一个子链表断链
			let head2 = curr.next;
			curr.next = null;
			curr = head2;
			// 找到第二个子链表的尾节点
			for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
				curr = curr.next;
			}
			let next = null;
			// 第二个子链表断链
			if (curr !== null) {
				// 保存第二个子链表的下一个节点
				next = curr.next;
				curr.next = null;
			}
			// 合并两个子链表
			const merged = mergeList(head1, head2);
			// 将合并后的链表接到 prev 节点后
			prev.next = merged;
			// 找到合并后链表的尾节点
			while (prev.next !== null) {
				prev = prev.next;
			}
			// curr 指向第二个子链表的下一个节点
			curr = next;
		}
	}
	return dummyHead.next;
};

function mergeList(list1, list2) {
	let node1 = list1;
	let node2 = list2;
	let head = new ListNode(0, null);
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
