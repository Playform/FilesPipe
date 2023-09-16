import type { Type as Path } from "../Interface/Path.js";
import type { Type as Plan } from "../Interface/Plan.js";

import Apply from "./Apply.js";

import { fileURLToPath as __Path } from "url";

/**
 * The function `In` takes a `Path` and a `Paths` object, and adds the `Path` to the `Paths` object.
 * @param {Path} Path - The `Path` parameter is a string or URL that represents the path to a file or
 * directory.
 * @param Paths - Paths is a variable of type Plan["Paths"]. It is likely an object or a map that
 * stores key-value pairs.
 * @returns The function `In` returns the `Paths` object.
 */
export default async (Path: Path, Paths: Plan["Paths"]) => {
	const _Path = await Apply(
		(Path: string) => (Path.endsWith("/") ? Path : `${Path}/`),
		await Apply(
			(_URL: URL | string) => (_URL instanceof URL ? __Path(_URL) : _URL),
			Path
		)
	);

	if (_Path instanceof Map) {
		for (const [Input, Output] of _Path) {
			Paths.set(Input, Output);
		}
	} else {
		Paths.set(_Path, _Path);
	}

	return Paths;
};