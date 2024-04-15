class Eventbus {
	constructor() {
		this.listener = {};
	}

	on(event, callback) {
		if (!this.listener.hasOwnProperty(event)) {
			this.listener[event] = [];
		}
		this.listener[event].push(callback);
	}

	off(event) {
		delete this.listener[event];
	}

	emit(event, ...args) {
		if (this.listener[event]) {
			this.listener[event].forEach((cb) => cb(...args));
		}
	}

	once(event, callback) {
		const onceWrapper = (...args) => {
			callback(...args);
			this.off(event);
		};

		this.on(event, onceWrapper);
	}
}

const eb = new Eventbus();
eb.on("hello", function (...args) {
	console.log("hello", ...args);
});
eb.emit("hello", "world");
eb.emit("hello", "world");
eb.emit("hello", "world");
eb.emit("hello", "world");
