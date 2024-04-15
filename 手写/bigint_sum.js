let a = "9007199254740991";
let b = "1234567899999999999";

function add(a, b) {
	const length = Math.max(a.length, b.length);

	a = a.padStart(length, 0);
	b = b.padStart(length, 0);

	let flag = 0;
	let res = "";

	for (let i = length - 1; i >= 0; i--) {
		let sum = parseInt(a[i]) + parseInt(b[i]) + flag;
		if (sum >= 10) {
			res = (sum % 10) + res;
			flag = 1;
		} else {
			res = sum + res;
			flag = 0;
		}
	}

	if (flag === 1) {
		res = flag + res;
	}

	return res;
}

console.log(add(a, b));