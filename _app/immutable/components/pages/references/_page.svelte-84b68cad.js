import{S as w,i as C,s as E,k as d,l as f,m,h as c,n as h,b as _,R as V,B as u,e as p,T as q,a as M,c as $,C as x,U as I,E as g,q as D,r as S}from"../../../chunks/index-9b2bc790.js";import{b as T}from"../../../chunks/paths-b4419565.js";function v(i,e,l){const n=i.slice();return n[2]=e[l],n}function j(i){let e,l,n,o;return{c(){e=d("div"),l=d("img"),o=M(),this.h()},l(r){e=f(r,"DIV",{class:!0});var t=m(e);l=f(t,"IMG",{src:!0,alt:!0,class:!0}),o=$(t),t.forEach(c),this.h()},h(){x(l.src,n=T+"/references/"+i[2])||h(l,"src",n),h(l,"alt",`reference ${i[2]}`),h(l,"class","svelte-1h9hasd"),h(e,"class",I(`logo-box ${i[1][Math.floor(Math.random()*4)]}`)+" svelte-1h9hasd")},m(r,t){_(r,e,t),g(e,l),g(e,o)},p:u,d(r){r&&c(e)}}}function z(i){let e,l=i[2].slice(0,1)+"",n,o;return{c(){e=d("div"),n=D(l),o=M(),this.h()},l(r){e=f(r,"DIV",{class:!0});var t=m(e);n=S(t,l),o=$(t),t.forEach(c),this.h()},h(){h(e,"class",I(`logo-box logo-box-salt ${i[1][Math.floor(Math.random()*4)]}`)+" svelte-1h9hasd")},m(r,t){_(r,e,t),g(e,n),g(e,o)},p:u,d(r){r&&c(e)}}}function b(i,e){let l,n;function o(s,a){return s[2].length===2?z:j}let t=o(e)(e);return{key:i,first:null,c(){l=p(),t.c(),n=p(),this.h()},l(s){l=p(),t.l(s),n=p(),this.h()},h(){this.first=l},m(s,a){_(s,l,a),t.m(s,a),_(s,n,a)},p(s,a){e=s,t.p(e,a)},d(s){s&&c(l),t.d(s),s&&c(n)}}}function B(i){let e,l=[],n=new Map,o=i[0];const r=t=>t[2];for(let t=0;t<o.length;t+=1){let s=v(i,o,t),a=r(s);n.set(a,l[t]=b(a,s))}return{c(){e=d("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=f(t,"DIV",{class:!0});var s=m(e);for(let a=0;a<l.length;a+=1)l[a].l(s);s.forEach(c),this.h()},h(){h(e,"class","logos svelte-1h9hasd")},m(t,s){_(t,e,s);for(let a=0;a<l.length;a+=1)l[a].m(e,null)},p(t,[s]){s&3&&(o=t[0],l=V(l,s,r,1,t,o,n,e,q,b,null,v))},i:u,o:u,d(t){t&&c(e);for(let s=0;s<l.length;s+=1)l[s].d()}}}const k=4,y="ライブ❤カラオケ!";function G(i){const e=["benz.png","berlin.png","bikini.png","byron.png","CT.png","digital-turbine.png","edelweiss.png","icke.jpg","levis.png","mc-fit.png","nhow.png","oooh.png","ronsons.png","soho.png","spreespeicher.png","valora.png","VO.png","welldo.png"].sort(()=>.5-Math.random()),l=["slide-top","slide-bottom","slide-left","slide-right"];for(let n=0;n<y.length;n++){const o=k*n+Math.floor(Math.random()*k);if(o>=e.length)break;e.splice(o,0,`${y[n]}${n}`)}return[e,l]}class R extends w{constructor(e){super(),C(this,e,G,B,E,{})}}export{R as default};
