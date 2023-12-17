var s = async (...[r, a]) => {
	if (typeof r == "function") {
		if (a instanceof Map) {
			const e = new Map();
			for (const [t, f] of a) e.set(await r(t), await r(f));
			return e;
		}
		if (a instanceof Set) {
			const e = new Set();
			for (const t of a) e.add(await r(t));
			return e;
		}
		if (Array.isArray(a)) {
			const e = new Array();
			for (const t of a) e.push(await r(t));
			return e;
		}
		return await r(a);
	}
	return a;
};
export { s as default };
