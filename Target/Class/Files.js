class r{Pipe=async(...[t])=>(console.log("----	Pipe	----"),await(await import("../Function/Pipe.js")).default(this.Plan,(await import("typescript-esbuild/Target/Function/Merge.js")).default((await import("../Object/Option.js")).default.Action,t??{})));Not=async(...[t])=>(console.log("----	Not	----"),this.Plan.Results=await(await import("../Function/Not.js")).default(t,this.Plan.Results),this);By=async(...[t])=>(console.log("----	By	----"),this.Plan.Results=await(await import("../Function/By.js")).default(t,this.Plan.Paths,this.Plan.Results),this);In=async(...[t])=>{console.log("----	In	----");const a=await(await import("../Function/In.js")).default(t,this.Plan.Paths);if(a instanceof Map)for(const[e,s]of a)this.Plan.Paths.set(e,s);return this};Plan={Cache:o,Files:0,Logger:n,Info:{},Paths:new Map,Results:new Map,On:{Buffer:"",After:0,Before:0,Input:"",Output:""}};constructor(t,a){console.log("----	constructor	----"),this.Plan.Cache=typeof t=="object"?i(t,this.Plan.Cache):this.Plan.Cache,this.Plan.Logger=typeof a=="number"?a:this.Plan.Logger}}const{default:{Cache:o,Logger:n}}=await import("../Object/Option.js"),{default:i}=await import("typescript-esbuild/Target/Function/Merge.js");export{o as Cache,n as Logger,i as Merge,r as default};
