(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{601:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return u}));n(602);var r=n(609),a=n.n(r),s=["en"],o=!1,c="7c8da6a8",i=10,u=50},603:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(604);function a(e,t,n){const s=[];for(const o of t){const n=e.toLowerCase().indexOf(o);if(n>=0){n>0&&s.push(a(e.substr(0,n),t)),s.push(`<mark>${Object(r.a)(e.substr(n,o.length))}</mark>`);const c=n+o.length;c<e.length&&s.push(a(e.substr(c),t));break}}return 0===s.length?n?`<mark>${Object(r.a)(e)}</mark>`:Object(r.a)(e):s.join("")}},604:function(e,t,n){"use strict";function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,"a",(function(){return r}))},611:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(602),a=n.n(r),s=n(601);async function o(e){{const t=await(await fetch(`${e}search-index.json?_=${s.b}`)).json(),n=t.map((({documents:e,index:t},n)=>({type:n,documents:e,index:a.a.Index.load(t)}))),r=t.reduce(((e,t)=>{for(const n of t.index.invertedIndex)/\p{Unified_Ideograph}/u.test(n[0][0])&&e.add(n[0]);return e}),new Set);return{wrappedIndexes:n,zhDictionary:Array.from(r)}}}},612:function(e,t,n){"use strict";function r(e,t){const n=[];for(const r of Object.values(e))r[t]&&n.push(...r[t].position);return n.sort(((e,t)=>e[0]-t[0]||t[1]-e[1]))}n.d(t,"a",(function(){return r}))},613:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),s=n(610),o=n(56),c=n.n(o);function i({className:e}){return a.a.createElement("div",{className:Object(s.a)(c.a.loadingRing,e)},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}},614:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(602),a=n.n(r);var s=n(601);function o(e,t,n){return function(t,r){const o=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a.a[t[0]].tokenizer(e).map((e=>e.toString()));let n=/[^-\s]+/g;return t.includes("zh")&&(n=/\w+|\p{Unified_Ideograph}+/gu),e.toLowerCase().match(n)||[]}(t,s.c);if(0===o.length)return void r([]);const c=[{tokens:i=o,term:i.map((e=>({value:e,presence:a.a.Query.presence.REQUIRED,wildcard:a.a.Query.wildcard.LEADING|a.a.Query.wildcard.TRAILING})))}];var i;const u=[];e:for(const{term:a,tokens:s}of c)for(const{documents:t,index:r,type:o}of e)if(u.push(...r.query((e=>{for(const t of a)e.term(t.value,{wildcard:t.wildcard,presence:t.presence})})).slice(0,n).filter((e=>!u.some((t=>t.document.i.toString()===e.ref)))).slice(0,n-u.length).map((n=>{const r=t.find((e=>e.i.toString()===n.ref));return{document:r,type:o,page:0!==o&&e[0].documents.find((e=>e.i===r.p)),metadata:n.matchData.metadata,tokens:s,score:n.score}}))),u.length>=n)break e;const l=u.filter((e=>"/docs/api"!==e.document.u));!function(e){e.forEach(((e,t)=>{e.index=t})),e.sort(((t,n)=>{let r=t.type>0&&t.page?e.findIndex((e=>e.document===t.page)):t.index,a=n.type>0&&n.page?e.findIndex((e=>e.document===n.page)):n.index;return-1===r&&(r=t.index),-1===a&&(a=n.index),r===a?0===t.type?-1:0===n.type?1:t.index-n.index:r-a}))}(l),function(e){e.forEach(((t,n)=>{n>0&&t.page&&e.some((e=>e.document===t.page))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(l),r(l)}}},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(604),a=n(603);const s=/\w+|\p{Unified_Ideograph}/u;function o(e){const t=[];let n=0,r=e;for(;r.length>0;){const a=r.match(s);if(!a){t.push(r);break}a.index>0&&t.push(r.substr(0,a.index)),t.push(a[0]),n+=a.index+a[0].length,r=e.substr(n)}return t}var c=n(601);function i(e,t,n,r=c.e){const a={chunkIndex:-1},s=u(e,t,n,0,0,a),o=s.slice(0,a.chunkIndex),i=s[a.chunkIndex],l=[i.html],d=s.slice(a.chunkIndex+1);let h=i.textLength,p=0,f=0,g=!1,m=!1;for(;h<r;)if((p<=f||0===d.length)&&o.length>0){const e=o.pop();h+e.textLength<=r?(l.unshift(e.html),p+=e.textLength,h+=e.textLength):(g=!0,o.length=0)}else{if(!(d.length>0))break;{const e=d.shift();h+e.textLength<=r?(l.push(e.html),f+=e.textLength,h+=e.textLength):(m=!0,d.length=0)}}return(g||o.length>0)&&l.unshift("\u2026"),(m||d.length>0)&&l.push("\u2026"),l.join("")}function u(e,t,n,s,c,i){const l=[],[d,h]=t[s];if(d<c)(s+=1)<t.length&&l.push(...u(e,t,n,s,c));else{d>c&&l.push(...o(e.substring(c,d)).map((e=>({html:Object(r.a)(e),textLength:e.length})))),i&&(i.chunkIndex=l.length),l.push({html:Object(a.a)(e.substr(d,h),n,!0),textLength:h});const p=d+h;(s+=1)<t.length?l.push(...u(e,t,n,s,p)):p<e.length&&l.push(...o(e.substr(p)).map((e=>({html:Object(r.a)(e),textLength:e.length}))))}return l}},620:function(e,t,n){"use strict";var r=n(601),a=n(0),s=n.n(a),o=n(610),c=n(22),i=n(10),u=n(607),l=n(611),d=n(614),h=n(603),p=n(615),f=n(612);var g=n(55),m=n.n(g);function v({document:e,type:t,page:n,metadata:r,tokens:a,isInterOfTree:s,isLastOfTree:o}){const c=0===t,i=1===t,u=[];s?u.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):o&&u.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');const l=u.map((e=>`<span class="${m.a.hitTree}">${e}</span>`)),d=`<span class="${m.a.hitIcon}">${c?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>'}</span>`,g=[`<span class="${m.a.hitTitle}">${Object(p.a)(e.t,Object(f.a)(r,"t"),a)}</span>`];c||g.push(`<span class="${m.a.hitPath}">${Object(h.a)(n.t||(e.u.startsWith("/docs/api-reference/")?"API Reference":""),a)}</span>`);const v=`<span class="${m.a.hitAction}"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>`;return[...l,d,`<span class="${m.a.hitWrapper}">`,...g,"</span>",v].join("")}function b(){return`<span class="${m.a.noResults}"><span class="${m.a.noResultsIcon}"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>No results.</span></span>`}var k=n(613);async function x(){const e=await Promise.all([n.e(526),n.e(530)]).then(n.t.bind(null,684,7));return e.noConflict(),e.default}const j="_highlight";t.a=function({handleSearchBarToggle:e}){const{siteConfig:{baseUrl:t}}=Object(c.default)(),n=Object(u.useHistory)(),h=Object(u.useLocation)(),p=Object(a.useRef)(null),f=Object(a.useRef)("empty"),g=Object(a.useRef)(!1),[w,O]=Object(a.useState)(!1),[y,I]=Object(a.useState)(!1),L=Object(a.useCallback)((async()=>{if("empty"!==f.current)return;f.current="loading",O(!0);const[{wrappedIndexes:e,zhDictionary:a},s]=await Promise.all([Object(l.a)(t),x()]),o=s(p.current,{hint:!1,autoselect:!0,cssClasses:{root:m.a.searchBar,noPrefix:!0,dropdownMenu:m.a.dropdownMenu,input:m.a.input,hint:m.a.hint,suggestions:m.a.suggestions,suggestion:m.a.suggestion,cursor:m.a.cursor,dataset:m.a.dataset,empty:m.a.empty}},[{source:Object(d.a)(e,a,r.f),templates:{suggestion:v,empty:b,footer:({query:e,isEmpty:r})=>{if(r)return;const a=document.createElement("a"),s=`${t}search?q=${encodeURIComponent(e)}`;a.href=s,a.textContent="See all results",a.addEventListener("click",(e=>{e.ctrlKey||e.metaKey||(e.preventDefault(),o.autocomplete.close(),n.push(s))}));const c=document.createElement("div");return c.className=m.a.hitFooter,c.appendChild(a),c}}}]).on("autocomplete:selected",(function(e,{document:{u:t,h:a},tokens:s}){let o=t;if(r.a&&s.length>0){const e=new URLSearchParams;for(const t of s)e.append(j,t);o+=`?${e.toString()}`}a&&(o+=a),n.push(o)}));if(f.current="done",O(!1),g.current){const e=p.current;e.value&&o.autocomplete.open(),e.focus()}}),[t,n]);Object(a.useEffect)((()=>{if(!r.a)return;const e=i.a.canUseDOM?new URLSearchParams(h.search).getAll(j):[];if(0===e.length)return;const t=document.querySelector("article");if(!t)return;new r.a(t).mark(e)}),[h.search]);const C=Object(a.useCallback)((()=>{g.current=!0,L(),e(!0)}),[e,L]),E=Object(a.useCallback)((()=>{e(!1)}),[e]),$=Object(a.useCallback)((()=>{L()}),[L]),M=Object(a.useCallback)((e=>{e.target.value&&I(!0)}),[]);return s.a.createElement("div",{className:Object(o.a)("navbar__search",m.a.searchBarContainer,{[m.a.searchIndexLoading]:w&&y})},s.a.createElement("input",{placeholder:"Search","aria-label":"Search",className:"navbar__search-input",onMouseEnter:$,onFocus:C,onBlur:E,onChange:M,ref:p}),s.a.createElement(k.a,{className:m.a.searchBarLoadingRing}))}}}]);