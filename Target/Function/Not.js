var s=async(n,o)=>{const f=new Set;if(typeof n<"u")if(n instanceof Array||n instanceof Set)for(const t of n)f.add(t);else f.add(n);for(const t of f)for(const e of o)switch(!0){case typeof t=="string":{(e[0].match(t)||e[1].match(t))&&o.delete(e[0]);break}case typeof t=="function":(t(e[0])||t(e[1]))&&o.delete(e[0])}return o};export{s as default};