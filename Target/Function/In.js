var r = async (...[i, a]) => {
	if (
		((e = await p(
			async (t) => (t.endsWith("/") ? t : `${t}/`),
			await p(
				async (t) =>
					t instanceof URL
						? (await import("url")).fileURLToPath(t)
						: t,
				i,
			),
		)),
		e instanceof Map)
	)
		for (const [t, o] of e) a.set(t.toString(), o.toString());
	else typeof e == "string" && a.set(e, e);
	return a;
};
const { default: p } = await import("./Apply.js");
let e;
export { p as Apply, e as _Path, r as default };
