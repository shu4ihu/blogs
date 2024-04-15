const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
	#state = PENDING;
	#result = undefined;
	#handlers = [];

	#isPromise(value) {
		if (value !== null && (typeof value === "object" || typeof value === "function")) {
			return typeof value.then === "function";
		}
		return false;
	}

	#runMicroTask(func) {
		// node 环境
		if (typeof process === "object" && typeof process.nextTick === "function") {
			process.nextTick(func);
		} else if (typeof MutationObserver === "function") {
			const ob = new MutationObserver(func);
			const text = document.createTextNode("1");
			ob.observe(text, {
				characterData: true,
			});
			text = 2;
		} else {
			setTimeout(func, 0);
		}
	}

	#runOne(callback, resolve, reject) {
		this.#runMicroTask(() => {
			if (typeof callback === "function") {
				try {
					const data = callback(this.#result);
					if (this.#isPromise(data)) {
						data.then(resolve, reject);
					} else resolve(data);
				} catch (err) {
					reject(err);
				}
			} else {
				const settled = this.#state === FULFILLED ? resolve : reject;
				settled(this.#result);
				return;
			}
		});
	}

	#run() {
		if (this.#state === PENDING) return;
		while (this.#handlers.length) {
			const { onFulfilled, onRejected, resolve, reject } = this.#handlers.shift();
			if (this.#state === FULFILLED) {
				this.#runOne(onFulfilled, resolve, reject);
			} else {
				this.#runOne(onRejected, resolve, reject);
			}
		}
	}

	#changeState(state, result) {
		if (this.#state !== PENDING) return;
		this.#state = state;
		this.#result = result;
		this.#run();
	}

	then(onFulfilled, onRejected) {
		return new MyPromise((resolve, reject) => {
			console.log(this.#handlers.length);
			this.#handlers.push({
				onFulfilled,
				onRejected,
				resolve,
				reject,
			});
			this.#run();
		});
	}

	all(promises) {
		return new MyPromise((resolve, reject) => {
			if (!Array.isArray(promises)) {
				throw Error("not a array");
			}
			let counter = 0;
			let promiseSize = promises.length;
			let res = [];

			for (let i = 0; i < promiseSize; i++) {}
		});
	}

	constructor(executor) {
		const resolve = (result) => {
			this.#changeState(FULFILLED, result);
		};
		const reject = (reason) => {
			this.#changeState(REJECTED, reason);
		};
		try {
			executor(resolve, reject);
		} catch (err) {
			reject(REJECTED, err);
		}
	}
}

// setTimeout(() => {
// 	console.log(1);
// 	setTimeout(() => {
// 		console.log(5);
// 	}, 0);
// 	new Promise((resolve, reject) => {
// 		resolve(4);
// 	}).then((res) => console.log(res));
// }, 0);

new MyPromise((resolve, reject) => {
	resolve(2);
})
	.then((res) => {
		console.log(res);
	})
	.then((res) => {
		console.log(res);
	});
