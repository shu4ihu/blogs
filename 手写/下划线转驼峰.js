function transform(str) {
	const splitArr = str.split("_");
	let res = "".concat(splitArr[0]);
	for (let i = 1; i < splitArr.length; i++) {
		const a = splitArr[i][0].toUpperCase();
		const resStr = a + splitArr[i].slice(1, splitArr[i].length);
		res += resStr;
	}
	return res;
}

const s = "aaa_bbb_ccc";

transform(s);
