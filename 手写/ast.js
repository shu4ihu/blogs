// 初始状态
const INIT = Symbol("init");
// 标签开始状态
const TAG_OPEN = Symbol("tag_open");
// 标签名称状态
const TAG_OPEN_NAME = Symbol("tag_open_name");
// 文本状态
const TEXT = Symbol("text");
// 标签结束状态
const TAG_END = Symbol("tag_end");
// 结束标签名称状态
const TAG_END_NAME = Symbol("tag_end_name");

function isAlpha(str) {
	return (str >= "a" && str <= "z") || (str >= "A" && str <= "Z");
}

function tokenizer(str) {
	// 状态机初始状态
	let currentState = INIT;
	// 缓存字符
	const chars = [];
	// 存放生成的 token
	const tokens = [];

	while (str) {
		const char = str[0];
		// 根据状态选择操作
		switch (currentState) {
			// 状态机处于初始化状态
			case INIT:
				// 遇到 <
				if (char === "<") {
					// 切换状态
					currentState = TAG_OPEN;
					// 去掉已处理的字符（消费当前字符）
					str = str.slice(1);
				} else if (isAlpha(char)) {
					// 遇到字母，切换状态
					currentState = TEXT;
					// 保存到chars
					chars.push(char);
					// 消费当前字符
					str = str.slice(1);
				}
				break;
			// 处于标签开始状态
			case TAG_OPEN:
				if (isAlpha(char)) {
					// 遇到字母，切换状态
					currentState = TAG_OPEN_NAME;
					// 记录当前字符
					chars.push(char);
					// 消费当前字符
					str = str.slice(1);
				} else if (char === "/") {
					// 遇到 / ，说明是结束标签
					currentState = TAG_END;
					// 消费
					str = str.slice(1);
				}
				break;
			case TAG_OPEN_NAME:
				if (isAlpha(char)) {
					// 遇到字母，记录下来
					chars.push(char);
					// 消费
					str = str.slice(1);
				} else if (char === ">") {
					// 遇到 > ，说明当前标签已经处理完成，回收初始状态
					currentState = INIT;
					// tokens 里面记录该标签处理结果
					tokens.push({
						type: "tag",
						name: chars.join(""),
					});
					// 清空
					chars.length = 0;
					// 消费
					str = str.slice(1);
				}
				break;
			case TEXT:
				if (isAlpha(char)) {
					// 遇到字母，保存
					chars.push(char);
					// 消费
					str = str.slice(1);
				} else if (char === "<") {
					// TEXT 状态下，遇到 <，说明当前文本已经被中断
					currentState = TAG_OPEN;
					// 保存当前 token
					tokens.push({
						type: "text",
						content: chars.join(""),
					});
					// 清空，消费
					chars.length = 0;
					str = str.slice(1);
				}
				break;
			case TAG_END:
				if (isAlpha(char)) {
					// 遇到字母，切换 tag end name 状态
					currentState = TAG_END_NAME;
					// 记录当前字符
					chars.push(char);
					// 消费
					str = str.slice(1);
				}
				break;
			case TAG_END_NAME:
				if (isAlpha(char)) {
					// 遇到字母，继续保存，并消费
					chars.push(char);
					str = str.slice(1);
				} else if (char === ">") {
					// 遇到 > ，说明tag end name结束，切换成init状态
					currentState = INIT;
					// 保存当前token
					tokens.push({
						type: "endTag",
						name: chars.join(""),
					});
					// 清空，消费
					chars.length = 0;
					str = str.slice(1);
				}
				break;
		}
	}

	return tokens;
}

function buildAST(str) {
	const tokens = tokenizer(str);
	const stack = [];
	const ast = {
		tag: "root",
		children: [],
	};
	stack.push(ast);

	while (tokens.length) {
		const parent = stack[stack.length - 1];
		const token = tokens[0];
		switch (token.type) {
			case "tag":
				const elementNode = {
					type: "element",
					tag: token.name,
					children: [],
				};
				parent.children.push(elementNode);
				stack.push(elementNode);
				break;
			case "endTag":
				stack.pop();
				break;
			case "text":
				const textNode = {
					type: "text",
					content: token.content,
				};
				parent.children.push(textNode);
				break;
		}
		tokens.shift();
	}
	return ast;
}

function dfs(root) {
	if (!root.children) {
		console.log(root.content);
		return;
	}

	for (let i = 0; i < root.children.length; i++) {
		dfs(root.children[i]);
	}
}

const ast = buildAST(`<div><p>Vue</p><p>Template</p></div>`);

dfs(ast);
