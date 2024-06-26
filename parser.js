// parser.js
module.exports = async (message, opts = {}) => {
	const emojiRegex = await import('emoji-regex');
	const { default: parser } = await import('@commitlint/parse');
	const match = emojiRegex().exec(message);
	const msg = match ? message.replace(match[0], '').trim() : message;
	const result = await parser(msg, opts);
	return {
		...result,
		raw: message // Keep the original message
	};
};
