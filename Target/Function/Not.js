var r = async (...[o, s]) => {
	if (typeof o < "u")
		if (Array.isArray(o) || o instanceof Set) for (const e of o) f.add(e);
		else f.add(o);
	for (const e of f)
		for (const t of s)
			switch (!0) {
				case typeof e == "string": {
					(t[0].match(e) || t[1].match(e)) && s.delete(t[0]);
					break;
				}
				case typeof e == "function":
					(e(t[0]) || e(t[1])) && s.delete(t[0]);
			}
	return s;
};
const f = new Set();
export { f as Filters, r as default };
