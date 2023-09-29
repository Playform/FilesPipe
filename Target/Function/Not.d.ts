import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";
/**
 * The function `Not` filters out files from the `Files` array based on the provided `Pattern`
 * parameter.
 *
 * @module Not
 *
 * @param Pattern - The `Pattern` parameter is of type `Option["Exclude"]`. It represents the patterns
 * or filters that will be used to exclude certain files from the `Results` array.
 *
 * @param Results - The `Results` parameter is expected to be an array of results from a plan. Each element
 * in the array should be an array itself, with two elements. The first element represents the file
 * name, and the second element represents the file content.
 *
 * @returns Results
 *
 */
declare const _default: (Pattern: Option["Exclude"], Results: Plan["Results"]) => Promise<Map<string, string>>;
export default _default;