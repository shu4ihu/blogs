function deepCopy(obj, hash = new WeakMap()) {
	// 处理null、undefined以及非对象
	if (obj === null || typeof obj !== "object") return obj;

	// 处理日期和正则对象
	if (obj instanceof Date) return new Date(obj);
	if (obj instanceof RegExp) return new RegExp(obj);

	// 处理循环引用
	if (hash.has(obj)) return hash.get(obj);

	// 获取对象所有自身属性的描述
	let allDesc = Object.getOwnPropertyDescriptors(obj);
	// 创建一个新对象，并继承原型链
	let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

	// 保存到hash中，用于循环引用的情况
	hash.set(obj, cloneObj);

	// Reflect.ownKeys(obj) 获取 obj 所有 key 包括 Symbol 类型的
	for (let key of Reflect.ownKeys(obj)) {
		cloneObj[key] =
			typeof obj[key] === "object" && obj[key] !== null ? deepCopy(obj[key], hash) : obj[key];
	}
	return cloneObj;
}

const a = {
	b: {
		key: "value",
	},
};

const deepCloneA = deepCopy(a);

deepCloneA.b.key = "key";

console.log(a.b.key, deepCloneA.b.key);
