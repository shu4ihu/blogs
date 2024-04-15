function compareVersion(ver1, ver2) {
	const arr1 = ver1.split(".");
	const arr2 = ver2.split(".");

	const size = Math.max(arr1.length, arr2.length);

	for (let i = 0; i < size; i++) {
		const num1 = isNaN(parseInt(arr1[i])) ? 0 : parseInt(arr1[i]);
		const num2 = isNaN(parseInt(arr2[i])) ? 0 : parseInt(arr2[i]);
		if (num1 > num2) return 1;
		else if (num1 < num2) return -1;
		else continue;
	}

	return 0;
}

const ver1 = "1.0.1";
const ver2 = "1";

a = compareVersion(ver1, ver2);

console.log(a);
