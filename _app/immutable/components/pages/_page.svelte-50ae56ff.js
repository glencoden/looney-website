import{S as q,i as B,d as $,s as O,c as X,n as p,f as Y,p as h,q as g,l as _,r as m,I as L,w as y,J as j,g as C,K as S,Q as N,k as v,t as b,j as A,v as J,A as K,B as Q,C as z,D as F,h as G}from"../../chunks/index-a7e89166.js";import{b as D}from"../../chunks/paths-eaf57226.js";import{L as E}from"../../chunks/LoadingSpinner-46a8dda6.js";const w="src/routes/+page.svelte";function k(i){let e,n;e=new E({$$inline:!0});const r={c:function(){K(e.$$.fragment)},l:function(s){Q(e.$$.fragment,s)},m:function(s,c){z(e,s,c),n=!0},i:function(s){n||(v(e.$$.fragment,s),n=!0)},o:function(s){b(e.$$.fragment,s),n=!1},d:function(s){F(e,s)}};return $("SvelteRegisterBlock",{block:r,id:k.name,type:"if",source:"(12:0) {#if !showVideo}",ctx:i}),r}function V(i){let e,n,r,t,s,c,d,l,o=!i[0]&&k(i);const P={c:function(){o&&o.c(),e=X(),n=p("div"),r=p("div"),t=p("video"),this.h()},l:function(a){o&&o.l(a),e=Y(a),n=h(a,"DIV",{class:!0});var u=g(n);r=h(u,"DIV",{class:!0});var R=g(r);t=h(R,"VIDEO",{class:!0,src:!0});var I=g(t);I.forEach(_),R.forEach(_),u.forEach(_),this.h()},h:function(){m(t,"class","video-element s-y_bCXRrkrYfP"),L(t.src,s=D+"/teaser-1v5.m4v")||m(t,"src",s),t.autoplay=!0,t.playsInline=!0,t.muted=!0,t.loop=!0,t.controls=!0,y(t,w,20,8,361),m(r,"class","video s-y_bCXRrkrYfP"),y(r,w,19,4,333),m(n,"class","video-box s-y_bCXRrkrYfP"),j(n,"show-video",i[0]),y(n,w,15,0,267)},m:function(a,u){o&&o.m(a,u),C(a,e,u),C(a,n,u),S(n,r),S(r,t),c=!0,d||(l=N(t,"canplay",i[1],!1,!1,!1),d=!0)},p:function(a,[u]){a[0]?o&&(G(),b(o,1,1,()=>{o=null}),A()):o?u&1&&v(o,1):(o=k(a),o.c(),v(o,1),o.m(e.parentNode,e)),(!c||u&1)&&j(n,"show-video",a[0])},i:function(a){c||(v(o),c=!0)},o:function(a){b(o),c=!1},d:function(a){o&&o.d(a),a&&_(e),a&&_(n),d=!1,l()}};return $("SvelteRegisterBlock",{block:P,id:V.name,type:"component",source:"",ctx:i}),P}function H(i,e,n){let{$$slots:r={},$$scope:t}=e;J("Page",r,[]);let s=!1;const c=()=>{n(0,s=!0)},d=[];return Object.keys(e).forEach(l=>{!~d.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<Page> was created with unknown prop '${l}'`)}),i.$capture_state=()=>({base:D,LoadingSpinner:E,showVideo:s,onVideoReady:c}),i.$inject_state=l=>{"showVideo"in l&&n(0,s=l.showVideo)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),[s,c]}class W extends q{constructor(e){super(e),B(this,e,H,V,O,{}),$("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:V.name})}}export{W as default};
