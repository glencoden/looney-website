function M(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function G(){return Object.create(null)}function w(t){t.forEach(K)}function Q(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function gt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t,e,n){t.$$.on_destroy.push(et(e,n))}function bt(t,e,n,i){if(t){const r=R(t,e,n,i);return t[0](r)}}function R(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function $t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function wt(t,e,n,i,r,o){if(r){const s=R(e,n,i,o);t.p(s,r)}}function vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Et(t){return t??""}let j=!1;function nt(){j=!0}function it(){j=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:rt(1,r,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const o=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function ct(t,e){if(j){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){j&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function ut(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function St(){return z(" ")}function kt(){return z("")}function At(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,i,r=!1){at(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ft(t,e,n,i){return U(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function jt(t,e,n){return ft(t,e,n,ut)}function dt(t,e){return U(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Ct(t){return dt(t," ")}function Lt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Tt(t,e){t.value=e??""}function qt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Bt(t,e,n){t.classList[n?"add":"remove"](e)}function Ot(t,e){return new t(e)}let $;function b(t){$=t}function F(){if(!$)throw new Error("Function called outside component initialization");return $}function Pt(t){F().$$.on_mount.push(t)}function Dt(t){F().$$.after_update.push(t)}function zt(t){F().$$.on_destroy.push(t)}const x=[],J=[],k=[],O=[],V=Promise.resolve();let P=!1;function W(){P||(P=!0,V.then(X))}function Ft(){return W(),V}function D(t){k.push(t)}function Ht(t){O.push(t)}const B=new Set;let S=0;function X(){const t=$;do{for(;S<x.length;){const e=x[S];S++,b(e),_t(e.$$)}for(b(null),x.length=0,S=0;J.length;)J.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];B.has(n)||(B.add(n),n())}k.length=0}while(x.length);for(;O.length;)O.pop()();P=!1,B.clear(),b(t)}function _t(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const A=new Set;let g;function It(){g={r:0,c:[],p:g}}function Gt(){g.r||w(g.c),g=g.p}function Y(t,e){t&&t.i&&(A.delete(t),t.i(e))}function Jt(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Kt(t,e){t.d(1),e.delete(t.key)}function Qt(t,e,n,i,r,o,s,u,c,l,f,_){let d=t.length,m=o.length,h=d;const C={};for(;h--;)C[t[h].key]=h;const v=[],L=new Map,T=new Map;for(h=m;h--;){const a=_(r,o,h),p=n(a);let y=s.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),L.set(p,v[h]=y),p in C&&T.set(p,Math.abs(h-C[p]))}const H=new Set,I=new Set;function q(a){Y(a,1),a.m(u,f),s.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=v[m-1],p=t[d-1],y=a.key,E=p.key;a===p?(f=a.first,d--,m--):L.has(E)?!s.has(y)||H.has(y)?q(a):I.has(E)?d--:T.get(y)>T.get(E)?(I.add(y),q(a)):(H.add(E),d--):(c(p,s),d--)}for(;d--;){const a=t[d];L.has(a.key)||c(a,s)}for(;m;)q(v[m-1]);return v}function Rt(t,e,n,i){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,i===void 0&&n(t.$$.ctx[r]))}function Ut(t){t&&t.c()}function Vt(t,e){t&&t.l(e)}function ht(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||D(()=>{const s=t.$$.on_mount.map(K).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...s):w(s),t.$$.on_mount=[]}),o.forEach(D)}function mt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(x.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,o,s,u=[-1]){const c=$;b(t);const l=t.$$={fragment:null,ctx:[],props:o,update:M,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&pt(t,_)),d}):[],l.update(),f=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const _=ot(e.target);l.fragment&&l.fragment.l(_),_.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),it(),X()}b(c)}class Xt{$destroy(){mt(this,1),this.$destroy=M}$on(e,n){if(!Q(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ft as A,M as B,gt as C,Bt as D,ct as E,xt as F,bt as G,wt as H,vt as I,$t as J,At as K,Q as L,zt as M,Tt as N,w as O,J as P,Rt as Q,Ht as R,Xt as S,Qt as T,Kt as U,Et as V,St as a,Nt as b,Ct as c,Gt as d,kt as e,Y as f,It as g,lt as h,Wt as i,Dt as j,ut as k,jt as l,ot as m,Mt as n,Pt as o,qt as p,z as q,dt as r,yt as s,Jt as t,Lt as u,Ot as v,Ut as w,Vt as x,ht as y,mt as z};
