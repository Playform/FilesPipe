var s = async (...[r, o, t]) => {
	for (const [e, p] of o)
		for (const a of await (await import("fast-glob")).default(r, {
			cwd: e ?? (await import("process")).cwd(),
			onlyFiles: !0,
		}))
			t.set(`${p}${a}`, `${e}${a}`);
	return t;
};
export { s as default };
