import { readFile as t } from "fs/promises";
var i={Path:"./Target",Logger:2,Pipe:{Wrote:async e=>e.Buffer,Read:async e=>await t(e.Input,"utf-8"),Passed:async e=>e&&!0,Failed:async e=>`Error: Cannot process file ${e.Input}!`,Accomplished:async e=>`Processed ${e.Input} in ${e.Output}.`,Fulfilled:async e=>e.Files>0?`Successfully processed a total of ${e.Files} ${e.Files===1?"file":"files"}.`:!1,Changed:async e=>e}};export { i as default };

