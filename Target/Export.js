const e=(await import("./Object/Option.js")).default;class s{Pipe=async t=>await(await import("./Fn/Pipe.js")).default(this.Plan,(await import("./Fn/Merge.js")).default(e.Action,t));Not=async t=>(this.Plan.Results=await(await import("./Fn/Not.js")).default(t,this.Plan.Results),this);By=async(t="**/*")=>(this.Plan.Results=await(await import("./Fn/By.js")).default(t,this.Plan.Paths,this.Plan.Results),this);In=async(t="./")=>{const a=await(await import("./Fn/In.js")).default(t,this.Plan.Paths);if(a instanceof Map)for(const[n,i]of a)this.Plan.Paths.set(n,i);return this};Plan={Cache:e.Cache,Files:0,Logger:e.Logger,Info:{},Paths:new Map,Results:new Map,On:{Buffer:"",After:0,Before:0,Input:"",Output:""}};constructor(t,a){this.Plan.Cache=t??this.Plan.Cache,this.Plan.Logger=a??this.Plan.Logger}}export{e as Default,s as default};
