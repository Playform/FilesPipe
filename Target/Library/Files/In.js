import { fileURLToPath as r } from "url";
import a from "../Apply.js";
var f=async(e,o)=>{const n=await a(t=>t.endsWith("/")?t:`${t}/`,await a(t=>t instanceof URL?r(t):t,e));if(n instanceof Map)for(const[t,i]of n)o.set(t,i);else o.set(n,n);return o};export { f as default };

