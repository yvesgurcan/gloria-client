if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const t={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return t;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-12865017"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"index.html",revision:"05377012d519b7c63a160a4d3dac72d0"},{url:"main.c04d23a279f77dcfd5f5.js",revision:"83dc52af52d8d4c86cddd9f5bf213517"},{url:"runtime.58908f3dbdb804a00215.js",revision:"bac88d544bdbbe5a66ee018b2815af84"},{url:"vendors~main.96be95f0b14af28ecd92.js",revision:"943e23e4a39dcf351f2eb079940afe62"}],{})}));
