const format = (num) => {
	const [int, float] = num.toString().split(".");
	let res = "";
	for (let i = int.length - 1, counter = 0; i >= 0; i--) {
		res = int[i] + res;
		counter++;
		if (counter % 3 === 0 && i !== 0) {
			res = "," + res;
		}
	}
	if (float !== undefined) res = res + "." + float;

	return res;
};

const num = 1211888.99;

console.log(format(num));
