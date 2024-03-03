/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @description 复制带随机指针的链表，构造链表的深拷贝
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
	if (!head) return null;
	// 指向原链表头节点
	let cur = head;
	const map = new Map();
	// 1. 遍历链表，将原链表节点和新链表节点在哈希表中一一对应
	while (cur) {
		const node = new Node(cur.val, null, null);
		map.set(cur, node);
		cur = cur.next;
	}

	cur = head;

	// 2. 遍历链表，构建新链表的 next 和 random 指针，注意值可能为 null
	while (cur) {
		map.get(cur).next = map.get(cur.next) || null;
		map.get(cur).random = map.get(cur.random) || null;
		cur = cur.next;
	}

	return map.get(head);
};
