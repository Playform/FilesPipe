import{constants as w}from"fs";import{access as m,writeFile as y,mkdir as B,stat as O}from"fs/promises";import{dirname as p}from"path";var M=async(l,{Fulfilled:o,Failed:i,Accomplished:s,Changed:f,Passed:r,Read:u,Wrote:c})=>{let t=l;for(const[n,g]of t.Results)try{if(t.On.Input=g,t.On.Output=n,t.On.Before=(await O(t.On.Input)).size,u&&c){t.On.Buffer=await u(t.On);const a=await c(t.On);if(!a)continue;if(t.On.Buffer=a,r&&await r(t.On)){try{await m(p(t.On.Output),w.W_OK)}catch{await B(p(t.On.Output),{recursive:!0})}if(await y(t.On.Output,t.On.Buffer,"utf-8"),t.On.After=(await O(t.On.Output)).size,t.Logger>0&&(t.Files++,f&&(t=await f(t))),t.Logger>1&&typeof s=="function"){const e=await s(t.On);e&&e.length>0&&console.log(e)}}}}catch(a){if(t.Results.delete(n),typeof i=="function"){const e=await i(t.On,a);e&&e.length>0&&console.log(e)}else t.Logger>1&&console.log(a)}if(t.Logger>0&&t.Results.size>0&&typeof o=="function"){const n=await o(t);n&&n.length>0&&console.log(n)}return t};export{M as default};