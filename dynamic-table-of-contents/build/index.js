(()=>{"use strict";var e,t={414:()=>{const e=window.React,t=window.wp.blocks,a=window.wp.i18n,n=window.wp.blockEditor,l=JSON.parse('{"u2":"wpcomsp/dynamic-table-of-contents"}'),r=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 9.484h-8.889v-1.5H20v1.5Zm0 7h-4.889v-1.5H20v1.5Zm-14 .032a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}),(0,e.createElement)("path",{d:"M13 15.516a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 8.484a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"}));(0,t.registerBlockType)(l.u2,{edit:function({attributes:t,setAttributes:l}){return(0,e.createElement)("div",{...(0,n.useBlockProps)()},(0,e.createElement)(n.RichText,{tagName:"h2",placeholder:(0,a.__)("Table of Contents Title","dynamic-table-of-contents"),value:t.title,onChange:e=>l({title:e}),className:"table-of-contents-title"}),(0,e.createElement)("ul",{className:"table-of-contents-list"},(0,e.createElement)("li",{className:"table-of-contents-list-item"},(0,e.createElement)("a",{href:"#",className:"active"},"This is an example.")),(0,e.createElement)("li",{className:"table-of-contents-list-item"},(0,e.createElement)("a",{href:"#"},"Of the block appearance.")),(0,e.createElement)("li",{className:"table-of-contents-list-item"},(0,e.createElement)("a",{href:"#"},"When used in your post."))))},icon:r})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,l,r)=>{if(!a){var o=1/0;for(m=0;m<e.length;m++){for(var[a,l,r]=e[m],i=!0,s=0;s<a.length;s++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(i=!1,r<o&&(o=r));if(i){e.splice(m--,1);var c=l();void 0!==c&&(t=c)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,l,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,r,[o,i,s]=a,c=0;if(o.some((t=>0!==e[t]))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(s)var m=s(n)}for(t&&t(a);c<o.length;c++)r=o[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},a=globalThis.webpackChunkdynamic_table_of_contents=globalThis.webpackChunkdynamic_table_of_contents||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[431],(()=>n(414)));l=n.O(l)})();