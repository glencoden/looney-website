import{S as G,i as O,s as P,w,a as d,k as v,x as V,c as b,l as $,m as y,h as p,n as m,y as I,b as h,T as U,f as x,t as C,z as E,e as g,U as A,C as F,V as j,E as k,B,q as H,r as J}from"../../../chunks/index-8c09f633.js";import{b as K}from"../../../chunks/paths-b4419565.js";import{V as q}from"../../../chunks/VerticalSpacer-c6b6b64b.js";function D(i,e,l){const s=i.slice();return s[2]=e[l],s}function L(i){let e,l,s,n;return{c(){e=v("div"),l=v("img"),n=d(),this.h()},l(c){e=$(c,"DIV",{class:!0});var a=y(e);l=$(a,"IMG",{src:!0,alt:!0,class:!0}),n=b(a),a.forEach(p),this.h()},h(){F(l.src,s=K+"/images/"+i[2])||m(l,"src",s),m(l,"alt",`reference ${i[2]}`),m(l,"class","svelte-1h9hasd"),m(e,"class",j(`logo-box ${i[1][Math.floor(Math.random()*4)]}`)+" svelte-1h9hasd")},m(c,a){h(c,e,a),k(e,l),k(e,n)},p:B,d(c){c&&p(e)}}}function N(i){let e,l=i[2].slice(0,1)+"",s,n;return{c(){e=v("div"),s=H(l),n=d(),this.h()},l(c){e=$(c,"DIV",{class:!0});var a=y(e);s=J(a,l),n=b(a),a.forEach(p),this.h()},h(){m(e,"class",j(`logo-box logo-box-salt ${i[1][Math.floor(Math.random()*4)]}`)+" svelte-1h9hasd")},m(c,a){h(c,e,a),k(e,s),k(e,n)},p:B,d(c){c&&p(e)}}}function S(i,e){let l,s;function n(r,f){return r[2].length===2?N:L}let a=n(e)(e);return{key:i,first:null,c(){l=g(),a.c(),s=g(),this.h()},l(r){l=g(),a.l(r),s=g(),this.h()},h(){this.first=l},m(r,f){h(r,l,f),a.m(r,f),h(r,s,f)},p(r,f){e=r,a.p(e,f)},d(r){r&&p(l),a.d(r),r&&p(s)}}}function Q(i){let e,l,s,n=[],c=new Map,a,r,f;e=new q({});let u=i[0];const M=t=>t[2];for(let t=0;t<u.length;t+=1){let o=D(i,u,t),_=M(o);c.set(_,n[t]=S(_,o))}return r=new q({}),{c(){w(e.$$.fragment),l=d(),s=v("div");for(let t=0;t<n.length;t+=1)n[t].c();a=d(),w(r.$$.fragment),this.h()},l(t){V(e.$$.fragment,t),l=b(t),s=$(t,"DIV",{class:!0});var o=y(s);for(let _=0;_<n.length;_+=1)n[_].l(o);o.forEach(p),a=b(t),V(r.$$.fragment,t),this.h()},h(){m(s,"class","logos svelte-1h9hasd")},m(t,o){I(e,t,o),h(t,l,o),h(t,s,o);for(let _=0;_<n.length;_+=1)n[_].m(s,null);h(t,a,o),I(r,t,o),f=!0},p(t,[o]){o&3&&(u=t[0],n=U(n,o,M,1,t,u,c,s,A,S,null,D))},i(t){f||(x(e.$$.fragment,t),x(r.$$.fragment,t),f=!0)},o(t){C(e.$$.fragment,t),C(r.$$.fragment,t),f=!1},d(t){E(e,t),t&&p(l),t&&p(s);for(let o=0;o<n.length;o+=1)n[o].d();t&&p(a),E(r,t)}}}const z=4,T="ライブ❤カラオケ!";function R(i){const e=["benz.png","berlin.png","bikini.png","byron.png","CT.png","digital-turbine.png","edelweiss.png","icke.jpg","levis.png","mc-fit.png","nhow.png","oooh.png","ronsons.png","soho.png","spreespeicher.png","valora.png","VO.png","welldo.png"].sort(()=>.5-Math.random()),l=["slide-top","slide-bottom","slide-left","slide-right"];for(let s=0;s<T.length;s++){const n=z*s+Math.floor(Math.random()*z);if(n>=e.length)break;e.splice(n,0,`${T[s]}${s}`)}return[e,l]}class Z extends G{constructor(e){super(),O(this,e,R,Q,P,{})}}export{Z as default};
