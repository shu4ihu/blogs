// Node
function Node(key, val, prev, next) {
	this.key = key;
	this.value = val;
	this.prev = prev === undefined ? null : prev;
	this.next = next === undefined ? null : next;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	// 缓存容量
	this.capacity = capacity;
	// hash 表
	this.map = new Map();
	// 虚拟头节点
	this.head = new Node(-1, -1, null, null);
	// 初始化双向循环链表
	this.head.next = this.head;
	this.head.prev = this.head;
};

/**
 * @description 获取缓存
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	// 获取节点
	const node = this.getNode(key);
	// 如果节点不存在，返回 -1，否则返回节点的值
	return node ? node.value : -1;
};

/**
 * @description 设置缓存
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	// 获取节点
	let node = this.getNode(key);
	if (node) {
		// 如果节点存在，更新节点的值
		node.value = value;
		return;
	}

	// 如果节点不存在，创建新节点
	node = new Node(key, value);
	this.map.set(key, node);
	this.pushNode(node);

	// 如果缓存容量超过限制，删除最近最少使用的节点
	if (this.map.size > this.capacity) {
		// 删除最后一个节点
		// 删除 hash 表中的节点
		this.map.delete(this.head.prev.key);
		// 删除双向循环链表中的节点
		this.removeNode(this.head.prev);
	}
};

/**
 * @description 获取节点
 * @param {number} key
 * @returns
 */
LRUCache.prototype.getNode = function (key) {
	// 如果表中不存在节点，返回 null
	if (!this.map.has(key)) return null;
	// 获取节点
	const node = this.map.get(key);
	// 删除节点
	this.removeNode(node);
	// 将节点插入到头节点后
	this.pushNode(node);

	return node;
};

/**
 * @description 双向链表删除节点
 * @param {Node} x
 */
LRUCache.prototype.removeNode = function (x) {
	x.prev.next = x.next;
	x.next.prev = x.prev;
};

/**
 * @description 双向链表插入节点
 * @param {Node} x
 */
LRUCache.prototype.pushNode = function (x) {
	x.prev = this.head;
	x.next = this.head.next;
	x.prev.next = x;
	x.next.prev = x;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
