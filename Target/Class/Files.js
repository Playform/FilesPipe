class r {
	In = async (...[t]) => {
		const a = await (
			await import("../Function/In.js")
		).default(t, this.Plan.Paths);
		if (a instanceof Map) for (const [s, n] of a) this.Plan.Paths.set(s, n);
		return console.log("--- In ---"), this;
	};
	By = async (...[t]) => (
		(this.Plan.Results = await (
			await import("../Function/By.js")
		).default(t, this.Plan.Paths, this.Plan.Results)),
		console.log("--- By ---"),
		this
	);
	Not = async (...[t]) => (
		(this.Plan.Results = await (
			await import("../Function/Not.js")
		).default(t, this.Plan.Results)),
		console.log("--- Not ---"),
		this
	);
	Pipe = async (...[t]) => (
		console.log("--- Pipe ---"),
		await (
			await import("../Function/Pipe.js")
		).default(
			this.Plan,
			e((await import("../Object/Option.js")).default.Action, t ?? {})
		)
	);
	Plan = {
		Cache: o,
		Files: 0,
		Logger: i,
		Info: {},
		Paths: new Map(),
		Results: new Map(),
		On: { Buffer: "", After: 0, Before: 0, Input: "", Output: "" },
	};
	constructor(t, a) {
		(this.Plan.Cache =
			typeof t == "object" ? e(this.Plan.Cache, t) : this.Plan.Cache),
			(this.Plan.Logger = typeof a == "number" ? a : this.Plan.Logger),
			console.log("--- CONSTRUCTOR ---");
	}
}
const {
		default: { Cache: o, Logger: i },
	} = await import("../Object/Option.js"),
	{ default: e } = await import(
		"typescript-esbuild/Target/Function/Merge.js"
	);
export { o as Cache, i as Logger, e as Merge, r as default };
