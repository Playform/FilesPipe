import{fileURLToPath as s}from"url";import o from"../Apply.js";var m=async(r,e)=>(o(t=>t instanceof URL?s(t):t,r).then(t=>o(n=>n.endsWith("/")?n:`${n}/`,t).then(n=>n instanceof Map?n.forEach(([i,p])=>e.set(i,p)):e.set(n,n))),e);export{m as default};
