/**
 * @module Files
 * 
 */
export class _Class implements Type {
	Pipe = async (Action?: Option["Action"]) =>
		await (
			await import("../Function/Pipe.js")
		).default(
			this.Plan,
			(await import("../Function/Merge.js")).default(
				(await import("../Object/Option.js")).default.Action,
				Action ?? {}
			)
		);

	Not = async (Exclude?: Option["Exclude"]) => {
		this.Plan.Results = await (
			await import("../Function/Not.js")
		).default(Exclude, this.Plan.Results);

		return this;
	};

	By = async (Files?: Option["Files"]) => {
		this.Plan.Results = await (
			await import("../Function/By.js")
		).default(Files, this.Plan.Paths, this.Plan.Results);

		return this;
	};

	In = async (Path?: Option["Path"]) => {
		const Paths = await (
			await import("../Function/In.js")
		).default(Path, this.Plan.Paths);

		if (Paths instanceof Map) {
			for (const [Input, Output] of Paths) {
				this.Plan.Paths.set(Input, Output);
			}
		}

		return this;
	};

	Plan = {
		Cache,
		Files: 0,
		Logger,
		Info: {},
		Paths: new Map(),
		Results: new Map(),
		On: {
			Buffer: "",
			After: 0,
			Before: 0,
			Input: "",
			Output: "",
		},
	};

	constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]) {
		this.Plan.Cache = Cache ?? this.Plan.Cache;
		this.Plan.Logger = Logger ?? this.Plan.Logger;
	}
}

export default _Class;

import type Type from "../Interface/Files.js";
import type Option from "../Interface/Option.js";

export const {
	default: { Cache, Logger },
} = await import("../Object/Option.js");
