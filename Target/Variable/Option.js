var s = {
	Cache: { Search: "./", Folder: "./Cache" },
	Path: "./Target",
	Logger: 2,
	Action: {
		Read: async ({ Input: e }) =>
			await (await import("fs/promises")).readFile(e, "utf-8"),
		Wrote: async ({ Buffer: e }) => e,
		Passed: async (e) => e && !0,
		Failed: async ({ Input: e }) => `Error: Cannot process file ${e}!`,
		Accomplished: async ({ Input: e, Output: a }) =>
			`Processed ${e} in ${a}.`,
		Fulfilled: async ({ Files: e }) =>
			e > 0
				? `Successfully processed a total of ${e} ${
						e === 1 ? "file" : "files"
				  }.`
				: !1,
		Changed: async (e) => e,
	},
	Files: "**/*",
	Exclude: !1,
};
export { s as default };
