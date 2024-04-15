const observeObject = function (obj) {
	return new Proxy(obj, {
		get: function (obj, key, receiver) {
			// 自定义内容
			console.log("obj get", receiver);
			// 默认操作
			return Reflect.get(obj, key);
		},
		set: function (obj, key, newValue, receiver) {
			console.log("obj set");
			return Reflect.set(obj, key, newValue);
		},
		deleteProperty: function (obj, key) {
			console.log("obj del");
			return Reflect.deleteProperty(obj, key);
		},
		has: function (obj, key) {
			console.log("obj has");
			return Reflect.has(obj, key);
		},
	});
};

const obj = {
	a: 1,
};

const observed = observeObject(obj);

const num = observed.a;

console.log(num);

delete observed.a;
