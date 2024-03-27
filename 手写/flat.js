const arr = [1, [2, [3, [4, [5, 8, 9, 10, [6, [7]]]]]]];

function flat(arr) {
	const res = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			res.push(...flat(arr[i]));
		} else {
			res.push(arr[i]);
		}
	}
	console.log(res);
	return res;
}

flat(arr);
