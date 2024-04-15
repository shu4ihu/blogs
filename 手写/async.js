function asyncFunc(func) {
	const gen = func();

	function next(val) {
		const iter = gen.next(val);
		if (iter.done) return iter.value;

		iter.value.then((res) => {
			next(res);
		});
	}

	next();
}

function getData(num) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(num + 1);
		}, 1000);
	});
}

function* fun() {
	const data1 = yield getData(1);
	console.log(data1);
	const data2 = yield getData(2);
	console.log(data2);
}

asyncFunc(fun);
