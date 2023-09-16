import type { Type as Buffer } from "./Buffer.js";

/**
 * Represents a file specification.
 */
export interface Type {
	/**
	 * The input file.
	 */
	Input: string;

	/**
	 * The output file.
	 */
	Output: string;

	/**
	 * The size after the action.
	 */
	After: number;

	/**
	 * The size before the action.
	 */
	Before: number;

	/**
	 * The buffer data.
	 */
	Buffer: Buffer;
}