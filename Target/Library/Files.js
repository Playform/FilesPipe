import e from"../Option/Index.js";import i from"./Files/By.js";import o from"./Files/In.js";import r from"./Files/Not.js";import P from"./Files/Pipe.js";class l{Pipe=async(t=e.Pipe)=>await P(this.Plan,t);Not=async t=>(this.Plan.Results=await r(t,this.Plan.Results),this);By=async(t="**/*")=>(this.Plan.Results=await i(t,this.Plan.Paths,this.Plan.Results),this);In=async(t="./")=>{const s=await o(t,this.Plan.Paths);if(s instanceof Map)for(const[a,n]of s)this.Plan.Paths.set(a,n);return this};Plan={Files:0,Debug:2,Info:{},Paths:new Map,Results:new Map,On:{Buffer:"",After:0,Before:0,Input:"",Output:""}};constructor(t=2){this.Plan.Debug=t}}export{l as default};