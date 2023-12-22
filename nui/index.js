const Ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};Ie();function v(){}const Ue=e=>e;function ye(e,t){for(const n in t)e[n]=t[n];return e}function ze(e){return e()}function xe(){return Object.create(null)}function Z(e){e.forEach(ze)}function Me(e){return typeof e=="function"}function W(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let oe;function fe(e,t){return oe||(oe=document.createElement("a")),oe.href=t,e===oe.href}function We(e){return Object.keys(e).length===0}function Ye(e,...t){if(e==null)return v;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ce(e,t,n){e.$$.on_destroy.push(Ye(t,n))}function Ke(e,t,n){return e.set(n),t}const qe=typeof window!="undefined";let Ve=qe?()=>window.performance.now():()=>Date.now(),De=qe?e=>requestAnimationFrame(e):v;const I=new Set;function Be(e){I.forEach(t=>{t.c(e)||(I.delete(t),t.f())}),I.size!==0&&De(Be)}function Ge(e){let t;return I.size===0&&De(Be),{promise:new Promise(n=>{I.add(t={c:e,f:n})}),abort(){I.delete(t)}}}function c(e,t){e.appendChild(t)}function ee(e,t,n){e.insertBefore(t,n||null)}function Y(e){e.parentNode&&e.parentNode.removeChild(e)}function ve(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function k(){return S(" ")}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Je(e){return Array.from(e.childNodes)}function B(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ee(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function F(e,t,n){e.classList[n?"add":"remove"](t)}let J;function G(e){J=e}function Qe(){if(!J)throw new Error("Function called outside component initialization");return J}function Xe(e){Qe().$$.on_mount.push(e)}const T=[],ae=[];let U=[];const Ne=[],Ze=Promise.resolve();let de=!1;function et(){de||(de=!0,Ze.then(Fe))}function he(e){U.push(e)}const ue=new Set;let H=0;function Fe(){if(H!==0)return;const e=J;do{try{for(;H<T.length;){const t=T[H];H++,G(t),tt(t.$$)}}catch(t){throw T.length=0,H=0,t}for(G(null),T.length=0,H=0;ae.length;)ae.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];ue.has(n)||(ue.add(n),n())}U.length=0}while(T.length);for(;Ne.length;)Ne.pop()();de=!1,ue.clear(),G(e)}function tt(e){if(e.fragment!==null){e.update(),Z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(he)}}function nt(e){const t=[],n=[];U.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),U=t}const se=new Set;let D;function ke(){D={r:0,c:[],p:D}}function Se(){D.r||Z(D.c),D=D.p}function O(e,t){e&&e.i&&(se.delete(e),e.i(t))}function $(e,t,n,r){if(e&&e.o){if(se.has(e))return;se.add(e),D.c.push(()=>{se.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ie(e){e&&e.c()}function Q(e,t,n,r){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),r||he(()=>{const l=e.$$.on_mount.map(ze).filter(Me);e.$$.on_destroy?e.$$.on_destroy.push(...l):Z(l),e.$$.on_mount=[]}),s.forEach(he)}function X(e,t){const n=e.$$;n.fragment!==null&&(nt(n.after_update),Z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(e,t){e.$$.dirty[0]===-1&&(T.push(e),et(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,r,o,s,l,i=[-1]){const f=J;G(e);const u=e.$$={fragment:null,ctx:[],props:s,update:v,not_equal:o,bound:xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:xe(),dirty:i,skip_bound:!1,root:t.target||f.$$.root};l&&l(u.root);let x=!1;if(u.ctx=n?n(e,t.props||{},(g,y,..._)=>{const A=_.length?_[0]:y;return u.ctx&&o(u.ctx[g],u.ctx[g]=A)&&(!u.skip_bound&&u.bound[g]&&u.bound[g](A),x&&rt(e,g)),y}):[],u.update(),x=!0,Z(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const g=Je(t.target);u.fragment&&u.fragment.l(g),g.forEach(Y)}else u.fragment&&u.fragment.c();t.intro&&O(e.$$.fragment),Q(e,t.target,t.anchor,t.customElement),Fe()}G(f)}class ne{$destroy(){X(this,1),this.$destroy=v}$on(t,n){if(!Me(n))return v;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!We(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var ot="./loadingScreen.mp4",st="./logo.png",it="./music2.mp3";function lt(e){let t,n,r,o,s,l,i;return{c(){t=m("div"),n=m("div"),r=m("h1"),o=S("Welcome "),s=m("span"),l=S(e[0]),i=S("!"),h(s,"class","text-blue-500"),h(r,"class","text-3xl font-bold"),h(n,"class","container mx-auto flex items-center justify-center h-full"),h(t,"class","fixed top-0 left-0 w-full h-24 bg-gray-900 text-white")},m(f,u){ee(f,t,u),c(t,n),c(n,r),c(r,o),c(r,s),c(s,l),c(r,i)},p(f,[u]){u&1&&B(l,f[0])},i:v,o:v,d(f){f&&Y(t)}}}function ct(e,t,n){let{name:r}=t;return e.$$set=o=>{"name"in o&&n(0,r=o.name)},[r]}class ft extends ne{constructor(t){super(),te(this,t,ct,lt,W,{name:0})}}const R=[];function He(e,t=v){let n;const r=new Set;function o(i){if(W(e,i)&&(e=i,n)){const f=!R.length;for(const u of r)u[1](),R.push(u,e);if(f){for(let u=0;u<R.length;u+=2)R[u][0](R[u+1]);R.length=0}}}function s(i){o(i(e))}function l(i,f=v){const u=[i,f];return r.add(u),r.size===1&&(n=t(o)||v),i(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:l}}function Ae(e){return Object.prototype.toString.call(e)==="[object Date]"}function me(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const r=t.map((o,s)=>me(e[s],o));return o=>r.map(s=>s(o))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(Ae(e)&&Ae(t)){e=e.getTime(),t=t.getTime();const s=t-e;return l=>new Date(e+l*s)}const r=Object.keys(t),o={};return r.forEach(s=>{o[s]=me(e[s],t[s])}),s=>{const l={};return r.forEach(i=>{l[i]=o[i](s)}),l}}if(n==="number"){const r=t-e;return o=>e+o*r}throw new Error(`Cannot interpolate ${n} values`)}function ut(e,t={}){const n=He(e);let r,o=e;function s(l,i){if(e==null)return n.set(e=l),Promise.resolve();o=l;let f=r,u=!1,{delay:x=0,duration:g=400,easing:y=Ue,interpolate:_=me}=ye(ye({},t),i);if(g===0)return f&&(f.abort(),f=null),n.set(e=o),Promise.resolve();const A=Ve()+x;let E;return r=Ge(N=>{if(N<A)return!0;u||(E=_(e,l),typeof g=="function"&&(g=g(e,l)),u=!0),f&&(f.abort(),f=null);const j=N-A;return j>g?(n.set(e=l),!1):(n.set(e=E(y(j/g))),!0)}),r.promise}return{set:s,update:(l,i)=>s(l(o,e),i),subscribe:n.subscribe}}const le=ut(0,{duration:400}),Le=He("");function at(e){let t,n,r,o,s,l,i,f,u,x,g,y,_,A,E;return{c(){t=m("div"),n=m("div"),r=k(),o=m("div"),s=m("div"),l=k(),i=m("div"),f=m("div"),u=m("h1"),x=S(e[1]),g=k(),y=m("div"),_=m("h1"),A=S(e[0]),E=S("%"),h(n,"class","h-3 bg-gray-900"),h(s,"class","h-6 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 background-animate svelte-wgbq31"),Ee(s,"width",e[0]+"%"),h(o,"class","h-6 bg-zinc-950"),h(u,"class","text-lg font-semibold text-white"),h(_,"class","text-lg font-semibold text-white"),h(i,"class","bg-gray-900 p-4 h-24 flex items-center justify-between"),h(t,"class","fixed bottom-0 w-full")},m(N,j){ee(N,t,j),c(t,n),c(t,r),c(t,o),c(o,s),c(t,l),c(t,i),c(i,f),c(f,u),c(u,x),c(i,g),c(i,y),c(y,_),c(_,A),c(_,E)},p(N,[j]){j&1&&Ee(s,"width",N[0]+"%"),j&2&&B(x,N[1]),j&1&&B(A,N[0])},i:v,o:v,d(N){N&&Y(t)}}}function dt(e,t,n){let r;Ce(e,le,l=>n(2,r=l));let{percent:o}=t,{loadingName:s}=t;return le.subscribe(l=>{n(0,o=Math.round(l))}),console.log(r),e.$$set=l=>{"percent"in l&&n(0,o=l.percent),"loadingName"in l&&n(1,s=l.loadingName)},[o,s]}class ht extends ne{constructor(t){super(),te(this,t,dt,at,W,{percent:0,loadingName:1})}}function mt(e){let t,n,r,o,s,l;return{c(){t=m("div"),n=m("h2"),r=S(e[0]),o=k(),s=m("h2"),l=S(e[1]),h(n,"class","text-lg font-bold text-blue-500 text-opacity-100"),h(s,"class","text-md font-semibold text-white text-opacity-100"),h(t,"class","bg-zinc-950 bg-opacity-50 p-4 rounded-md shadow-md mb-4 w-96")},m(i,f){ee(i,t,f),c(t,n),c(n,r),c(t,o),c(t,s),c(s,l)},p(i,[f]){f&1&&B(r,i[0]),f&2&&B(l,i[1])},i:v,o:v,d(i){i&&Y(t)}}}function gt(e,t,n){let{title:r}=t,{description:o}=t;return e.$$set=s=>{"title"in s&&n(0,r=s.title),"description"in s&&n(1,o=s.description)},[r,o]}class pt extends ne{constructor(t){super(),te(this,t,gt,mt,W,{title:0,description:1})}}function _t(e){let t,n,r,o,s,l;return{c(){t=m("div"),n=m("h2"),r=S(e[0]),o=k(),s=m("h2"),l=S(e[1]),h(n,"class","text-lg font-bold text-blue-500 text-opacity-100"),h(s,"class","text-sm font-semibold text-white text-opacity-100"),h(t,"class","bg-zinc-800 p-4 rounded-md shadow-md mb-4 w-60")},m(i,f){ee(i,t,f),c(t,n),c(n,r),c(t,o),c(t,s),c(s,l)},p(i,[f]){f&1&&B(r,i[0]),f&2&&B(l,i[1])},i:v,o:v,d(i){i&&Y(t)}}}function bt(e,t,n){let{name:r}=t,{rank:o}=t;return e.$$set=s=>{"name"in s&&n(0,r=s.name),"rank"in s&&n(1,o=s.rank)},[r,o]}class wt extends ne{constructor(t){super(),te(this,t,bt,_t,W,{name:0,rank:1})}}function je(e,t,n){const r=e.slice();return r[9]=t[n],r}function Oe(e,t,n){const r=e.slice();return r[12]=t[n],r}function Pe(e){let t,n;return t=new wt({props:{name:e[12].name,rank:e[12].rank}}),{c(){ie(t.$$.fragment)},m(r,o){Q(t,r,o),n=!0},p(r,o){const s={};o&8&&(s.name=r[12].name),o&8&&(s.rank=r[12].rank),t.$set(s)},i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){$(t.$$.fragment,r),n=!1},d(r){X(t,r)}}}function $e(e){let t,n;return t=new pt({props:{title:e[9].title,description:e[9].description}}),{c(){ie(t.$$.fragment)},m(r,o){Q(t,r,o),n=!0},p(r,o){const s={};o&4&&(s.title=r[9].title),o&4&&(s.description=r[9].description),t.$set(s)},i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){$(t.$$.fragment,r),n=!1},d(r){X(t,r)}}}function yt(e){let t,n,r,o,s,l,i,f,u,x,g,y,_,A,E,N,j,ge,P,re,pe,_e,z,K,be,we,M;g=new ft({props:{name:e[4]}}),_=new ht({props:{percent:e[6],loadingName:e[5]}});let C=e[3],b=[];for(let a=0;a<C.length;a+=1)b[a]=Pe(Oe(e,C,a));const Re=a=>$(b[a],1,1,()=>{b[a]=null});let q=e[2],w=[];for(let a=0;a<q.length;a+=1)w[a]=$e(je(e,q,a));const Te=a=>$(w[a],1,1,()=>{w[a]=null});return{c(){t=m("div"),n=m("video"),r=m("source"),s=S(`
		Your browser does not support the video tag.`),l=k(),i=m("div"),f=m("img"),x=k(),ie(g.$$.fragment),y=k(),ie(_.$$.fragment),A=k(),E=m("div"),N=m("h1"),N.textContent="Staff",j=k();for(let a=0;a<b.length;a+=1)b[a].c();ge=k(),P=m("div"),re=m("h1"),re.textContent="News",pe=k();for(let a=0;a<w.length;a+=1)w[a].c();_e=k(),z=m("audio"),K=m("source"),we=S(`
			Your browser does not support the audio tag.`),fe(r.src,o=ot)||h(r,"src",o),h(r,"type","video/mp4"),n.autoplay=!0,n.muted=!0,n.loop=!0,h(n,"class","object-cover w-full h-full fixed top-0 left-0 z-0"),fe(f.src,u=st)||h(f,"src",u),h(f,"alt","Server Logo"),h(f,"class","w-1/4 -translate-y-5"),F(f,"hidden",!e[1]),h(N,"class","text-blue-500 font-bold text-4xl text-center"),h(E,"class","bg-zinc-950 space-y-5 fixed rounded bg-opacity-50 p-5 left-10 top-28 flex flex-col"),F(E,"hidden",e[3].length===0),h(re,"class","text-blue-500 font-bold text-4xl text-center"),h(P,"class","bg-zinc-950 space-y-5 fixed rounded bg-opacity-50 p-5 right-10 top-28 flex flex-col"),F(P,"hidden",e[2].length===0),fe(K.src,be=it)||h(K,"src",be),h(K,"type","audio/mp3"),z.autoplay=!0,z.loop=!0,h(i,"class","flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10"),h(t,"class","relative h-screen bg-black")},m(a,p){ee(a,t,p),c(t,n),c(n,r),c(n,s),c(t,l),c(t,i),c(i,f),c(i,x),Q(g,i,null),c(i,y),Q(_,i,null),c(i,A),c(i,E),c(E,N),c(E,j);for(let L=0;L<b.length;L+=1)b[L]&&b[L].m(E,null);c(i,ge),c(i,P),c(P,re),c(P,pe);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(P,null);c(i,_e),c(i,z),c(z,K),c(z,we),e[7](z),M=!0},p(a,[p]){(!M||p&2)&&F(f,"hidden",!a[1]);const L={};p&16&&(L.name=a[4]),g.$set(L);const ce={};if(p&64&&(ce.percent=a[6]),p&32&&(ce.loadingName=a[5]),_.$set(ce),p&8){C=a[3];let d;for(d=0;d<C.length;d+=1){const V=Oe(a,C,d);b[d]?(b[d].p(V,p),O(b[d],1)):(b[d]=Pe(V),b[d].c(),O(b[d],1),b[d].m(E,null))}for(ke(),d=C.length;d<b.length;d+=1)Re(d);Se()}if((!M||p&8)&&F(E,"hidden",a[3].length===0),p&4){q=a[2];let d;for(d=0;d<q.length;d+=1){const V=je(a,q,d);w[d]?(w[d].p(V,p),O(w[d],1)):(w[d]=$e(V),w[d].c(),O(w[d],1),w[d].m(P,null))}for(ke(),d=q.length;d<w.length;d+=1)Te(d);Se()}(!M||p&4)&&F(P,"hidden",a[2].length===0)},i(a){if(!M){O(g.$$.fragment,a),O(_.$$.fragment,a);for(let p=0;p<C.length;p+=1)O(b[p]);for(let p=0;p<q.length;p+=1)O(w[p]);M=!0}},o(a){$(g.$$.fragment,a),$(_.$$.fragment,a),b=b.filter(Boolean);for(let p=0;p<b.length;p+=1)$(b[p]);w=w.filter(Boolean);for(let p=0;p<w.length;p+=1)$(w[p]);M=!1},d(a){a&&Y(t),X(g),X(_),ve(b,a),ve(w,a),e[7](null)}}}function xt(e,t,n){let r,o,s,l,i,f,u;Ce(e,Le,y=>n(8,u=y)),Ke(Le,u="FearlessStudios-LoadingScreen",u);var x=null;Xe(()=>{n(0,x.volume=.1,x),le.set(r),window.addEventListener("message",function(y){var _=y.data;_.eventName==="loadProgress"?(n(6,r=Math.round(_.loadFraction*100)),le.set(r)):_.eventName==="onLogLine"?n(5,o=_.message):_.name!=null&&n(5,o="Loading: "+_.name)}),n(4,s=window.nuiHandoverData.name),n(3,l=window.nuiHandoverData.staffMembers),n(2,i=window.nuiHandoverData.news),n(1,f=window.nuiHandoverData.showLogo)});function g(y){ae[y?"unshift":"push"](()=>{x=y,n(0,x)})}return n(6,r=75),n(5,o="Loading..."),n(4,s="Name"),n(3,l=[]),n(2,i=[]),n(1,f=!1),[x,f,i,l,s,o,r,g]}class vt extends ne{constructor(t){super(),te(this,t,xt,yt,W,{})}}new vt({target:document.getElementById("app")});
