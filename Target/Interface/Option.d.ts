import type { Pattern } from "fast-glob";
import type Action from "../Interface/Action.js";
import type Cache from "../Interface/Cache.js";
import type Exclude from "../Type/Exclude.js";
import type Logger from "../Type/Logger.js";
import type Path from "../Type/Path.js";
/**
 * @module Option
 *
 * Represents options for configuring the behavior of the program.
 *
 */
export default interface Interface {
    /**
     * Configuration for the target cache.
     *
     * @default { Search: "./", Folder: "./Cache" }
     *
     */
    Cache?: boolean | Cache;
    /**
     * Configuration for the target path(s).
     *
     * @default "./Target"
     */
    Path?: boolean | (Path | Path[] | Set<Path>);
    /**
     * Criteria for excluding files.
     */
    Exclude?: boolean | (Exclude | Exclude[] | Set<Exclude>);
    /**
     * File patterns to be matched.
     */
    File?: boolean | (Pattern | Pattern[]);
    /**
     * Action pipe configuration.
     */
    Action?: boolean | Action;
    /**
     * Debugging level.
     *
     * @default 2
     */
    Logger?: boolean | Logger;
}
