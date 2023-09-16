import type { Type as Action } from "../Interface/Action.js";
import type { Type as Option } from "../Interface/Option.js";
import type { Type as Path } from "../Interface/Path.js";
import type { Type as Plan } from "../Interface/Plan.js";

import type { Pattern } from "fast-glob";

import By from "../Fn/By.js";
import In from "../Fn/In.js";
import Merge from "../Fn/Merge.js";
import Not from "../Fn/Not.js";
import Pipe from "../Fn/Pipe.js";
import Default from "../Object/Option.js";

export default class Files {
	/**
	 * The function `Pipe` is a TypeScript async function that takes an optional `Action`
	 * parameter and returns the result of calling `Pipe` with `this.Plan` and `Action`.
	 * @param {Action} Action - The Action parameter is an optional parameter that
	 * specifies the execution strategy to be used in the Pipe function. It has a default value of
	 * Default.Pipe, which means that if no Action parameter is provided when calling the Pipe
	 * function, it will use the default execution strategy.
	 */
	Pipe = async (Action: Action) =>
		await Pipe(this.Plan, Merge(Default.Action, Action));

	/**
	 * The function `Not` takes a `File` parameter and excludes it from the `Plan.Results` array.
	 * @param File - The parameter "File" is of type "Option['Exclude']".
	 * @returns the current object (`this`) after performing some operations.
	 */
	Not = async (File: Option["Exclude"]) => {
		this.Plan.Results = await Not(File, this.Plan.Results);

		return this;
	};

	/**
	 * The function `By` takes a file pattern or an array of file patterns and returns a promise that
	 * resolves to the results of executing the patterns on the specified paths.
	 * @param {Pattern | Pattern[]} [File=**/ /*] - The `File` parameter is of type `Pattern` or
	 * `Pattern[]`. It represents the file or files that you want to search for. The `Pattern` type is a
	 * string pattern that can include wildcards to match multiple files. The default value for `File` is
	 * `"**/ /*"
	 * @returns the current object (`this`) after the `By` function has been executed.
	 */
	By = async (File: Pattern | Pattern[] = "**/*") => {
		this.Plan.Results = await By(File, this.Plan.Paths, this.Plan.Results);

		return this;
	};

	/**
	 * The function `In` takes a path and updates the `Plan.Paths` property with the input and output
	 * paths.
	 * @param {Path} [Path=./] - The `Path` parameter is a string that represents the path to a file or
	 * directory. It has a default value of "./", which means it will use the current directory if no path
	 * is provided.
	 * @returns the value of `this`, which refers to the current object.
	 */
	In = async (Path: Path = "./") => {
		const Paths = await In(Path, this.Plan.Paths);

		if (Paths instanceof Map) {
			for (const [Input, Output] of Paths) {
				this.Plan.Paths.set(Input, Output);
			}
		}

		return this;
	};

	Plan: Plan = {
		Cache: Default.Cache,
		Files: 0,
		Logger: Default.Logger,
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