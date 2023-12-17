var l = async (
	...[
		c,
		{
			Accomplished: a,
			Changed: n,
			Failed: o,
			Fulfilled: r,
			Passed: f,
			Read: u,
			Wrote: s,
		},
	]
) => {
	let t = c;
	for (const [e, w] of t.Results) {
		(t.On.Input = w), (t.On.Output = e);
		try {
			if (((t.On.Before = (await O(t.On.Input)).size), u && s)) {
				if (
					((t.On.Buffer = await u(t.On)),
					(t.On.Buffer = await s(t.On)),
					!t.On.Buffer)
				)
					continue;
				if (f && (await f(t.On))) {
					try {
						await (await import("fs/promises")).access(
							p(t.On.Output),
							(await import("fs/promises")).constants.W_OK,
						);
					} catch {
						await (await import("fs/promises")).mkdir(
							p(t.On.Output),
							{ recursive: !0 },
						);
					}
					await (await import("fs/promises")).writeFile(
						t.On.Output,
						t.On.Buffer,
						"utf-8",
					),
						(t.On.After = (await O(t.On.Output)).size),
						t.Logger > 0 && (t.Files++, n && (t = await n(t))),
						t.Logger > 1 &&
							typeof a == "function" &&
							console.log(await a(t.On));
				}
			}
		} catch (i) {
			t.Results.delete(t.On.Output),
				t.Logger > 1 &&
					console.log(typeof o == "function" ? await o(t.On, i) : i);
		}
	}
	if (t.Logger > 0 && t.Results.size > 0 && typeof r == "function") {
		const e = await r(t);
		e && e.length > 0 && console.log(e);
	}
	return t;
};
const { dirname: p } = await import("path"),
	{ stat: O } = await import("fs/promises");
export { l as default, p as dirname, O as stat };
