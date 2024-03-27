const spu = "AB1234567";
const specList = [
	["red", "yellow"],
	["XL", "S"],
	["a1", "a2"],
	["b1", "b2"],
];

function concat(spu, specList) {
	const list = specList.reduce((prev, cur, curIndex) => {
		const res = [];
		if (curIndex === 1) prev = prev.map((item) => `${spu}-${item}`);
		for (let i = 0; i < prev.length; i++) {
			for (let j = 0; j < cur.length; j++) {
				res.push(`${prev[i]}-${cur[j]}`);
			}
		}
		return res;
	});

	return list;
}

console.log(concat(spu, specList));
