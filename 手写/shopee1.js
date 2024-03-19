/**
 * @description 奇数次调用输出 1，偶数次调用输出 2
 */
const a = (function () {
	let count = 0;
	return function () {
		count++;

		if (count % 2 === 1) console.log(1);
		else console.log(2);
	};
})();

a();
a();
a();
a();
a();

function throttle(func, delay) {
	let canRun = true;
	return function () {
		if (!canRun) return;
		canRun = false;
		setTimeout(() => {
			func.apply(this, arguments);
			canRun = true;
		}, delay);
	};
}
