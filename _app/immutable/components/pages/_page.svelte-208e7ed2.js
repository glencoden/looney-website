import{S as C,i as $,d as y,s as q,c as B,n as w,f as Y,p as b,q as k,l as _,r as v,I as A,w as I,J as S,g as V,K as L,Q as M,k as m,t as p,j as N,v as X,o as E,T as j,A as F,B as H,C as J,D as K,h as Q}from"../../chunks/index-69be398c.js";import{b as P}from"../../chunks/paths-eaf57226.js";import{L as R}from"../../chunks/LoadingSpinner-43754fc0.js";const D="src/routes/+page.svelte";function h(a){let e,s;e=new R({$$inline:!0});const n={c:function(){F(e.$$.fragment)},l:function(o){H(e.$$.fragment,o)},m:function(o,c){J(e,o,c),s=!0},i:function(o){s||(m(e.$$.fragment,o),s=!0)},o:function(o){p(e.$$.fragment,o),s=!1},d:function(o){K(e,o)}};return y("SvelteRegisterBlock",{block:n,id:h.name,type:"if",source:"(24:0) {#if !showVideo}",ctx:a}),n}function g(a){let e,s,n,l,o,c,d,t=!a[0]&&h(a);const r={c:function(){t&&t.c(),e=B(),s=w("div"),n=w("video"),this.h()},l:function(i){t&&t.l(i),e=Y(i),s=b(i,"DIV",{class:!0});var u=k(s);n=b(u,"VIDEO",{class:!0,src:!0});var T=k(n);T.forEach(_),u.forEach(_),this.h()},h:function(){v(n,"class","video-element s-y_bCXRrkrYfP"),A(n.src,l=P+"/teaser-1v5.m4v")||v(n,"src",l),n.autoplay=!0,n.playsInline=!0,n.muted=!0,n.loop=!0,n.controls=!0,I(n,D,31,4,606),v(s,"class","video-box s-y_bCXRrkrYfP"),S(s,"show-video",a[0]),I(s,D,27,0,540)},m:function(i,u){t&&t.m(i,u),V(i,e,u),V(i,s,u),L(s,n),o=!0,c||(d=M(n,"canplay",a[1],!1,!1,!1),c=!0)},p:function(i,[u]){i[0]?t&&(Q(),p(t,1,1,()=>{t=null}),N()):t?u&1&&m(t,1):(t=h(i),t.c(),m(t,1),t.m(e.parentNode,e)),(!o||u&1)&&S(s,"show-video",i[0])},i:function(i){o||(m(t),o=!0)},o:function(i){p(t),o=!1},d:function(i){t&&t.d(i),i&&_(e),i&&_(s),c=!1,d()}};return y("SvelteRegisterBlock",{block:r,id:g.name,type:"component",source:"",ctx:a}),r}const O=2500;function U(a,e,s){let{$$slots:n={},$$scope:l}=e;X("Page",n,[]);let o,c=!1;const d=()=>{s(0,c=!0)};E(()=>{o=setTimeout(d,O)}),j(()=>{clearTimeout(o)});const t=[];return Object.keys(e).forEach(r=>{!~t.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Page> was created with unknown prop '${r}'`)}),a.$capture_state=()=>({onMount:E,onDestroy:j,base:P,LoadingSpinner:R,SHOW_VIDEO_SAFETY_TIMEOUT:O,timeoutId:o,showVideo:c,onVideoReady:d}),a.$inject_state=r=>{"timeoutId"in r&&(o=r.timeoutId),"showVideo"in r&&s(0,c=r.showVideo)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[c,d]}class Z extends C{constructor(e){super(e),$(this,e,U,g,q,{}),y("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:g.name})}}export{Z as default};
