var s=async(...[t,r,e])=>{console.log(t);for(const[o,p]of r)for(const a of await(await import("fast-glob")).default(t,{cwd:o??(await import("process")).cwd(),onlyFiles:!0}))e.set(`${p}${a}`,`${o}${a}`);return e};export{s as default};
