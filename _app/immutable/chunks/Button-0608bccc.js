import{S as u,i as _,s as m,k as b,q as d,l as h,m as y,r as v,h as f,n as C,D as o,b as k,E as g,K as B,L as A,u as U,B as r}from"./index-9b2bc790.js";function q(n){let e,a=n[2].toUpperCase()+"",l,i,c;return{c(){e=b("button"),l=d(a),this.h()},l(s){e=h(s,"BUTTON",{class:!0});var t=y(e);l=v(t,a),t.forEach(f),this.h()},h(){C(e,"class","button svelte-b7pv96"),o(e,"primary-color",!n[0]),o(e,"secondary-color",n[0]),o(e,"button-active",n[1])},m(s,t){k(s,e,t),g(e,l),i||(c=B(e,"click",function(){A(typeof n[3]=="function"&&n[3]())&&(typeof n[3]=="function"&&n[3]()).apply(this,arguments)}),i=!0)},p(s,[t]){n=s,t&4&&a!==(a=n[2].toUpperCase()+"")&&U(l,a),t&1&&o(e,"primary-color",!n[0]),t&1&&o(e,"secondary-color",n[0]),t&2&&o(e,"button-active",n[1])},i:r,o:r,d(s){s&&f(e),i=!1,c()}}}function E(n,e,a){let{secondary:l=!1}=e,{isActive:i=!1}=e,{label:c="no label"}=e,{onClick:s=void 0}=e;return n.$$set=t=>{"secondary"in t&&a(0,l=t.secondary),"isActive"in t&&a(1,i=t.isActive),"label"in t&&a(2,c=t.label),"onClick"in t&&a(3,s=t.onClick)},[l,i,c,s]}class T extends u{constructor(e){super(),_(this,e,E,q,m,{secondary:0,isActive:1,label:2,onClick:3})}}export{T as B};
