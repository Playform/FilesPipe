var o=async(e,t)=>{switch(!0){case t instanceof Map:{const a=new Map;for(const[n,r]of t)a.set(await e(n),await e(r));return a}case t instanceof Set:{const a=new Set;for(const n of t)a.add(await e(n));return a}case t instanceof Array:{const a=new Array;for(const n of t)a.push(await e(n));return a}default:return await e(t)}};export { o as default };

