var a=async(t,o=2)=>{if(t===0)return"0 Bytes";const r=1024,B=Math.floor(Math.log(t)/Math.log(r));return`${parseFloat((t/r**B).toFixed(o<0?0:o))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][B]}`};export { a as default };

