import{S as ve,i as me,s as _e,d as se,G as he,H as $e,v as ge,o as le,n as d,c as A,A as T,p as h,q,l as c,f as O,B as U,r as n,w as $,I as te,J as ce,g as B,K as a,C as X,k as C,t as H,D as Y,L as pe,x as ue,y as fe,M as Ee,N as be,O as we}from"../../chunks/index-331e172c.js";import{b as k}from"../../chunks/paths-eaf57226.js";import{n as ae}from"../../chunks/stores-edb67556.js";import{B as ee}from"../../chunks/Button-655fe9de.js";const F="src/components/Navigation.svelte";function ne(o){let e,u,l,f,v,m,L,s,x,M,p,Z,R,i,D,_,V,K,G,W,y,P,E,j,w,r;_=new ee({props:{isActive:o[0]==="/events",label:"Events"},$$inline:!0}),G=new ee({props:{isActive:o[0]==="/songs",label:"Songs"},$$inline:!0}),P=new ee({props:{isActive:o[0]==="/references",label:"References"},$$inline:!0}),w=new ee({props:{isActive:o[0]==="/contact",label:"Contact"},$$inline:!0});const g={c:function(){e=d("div"),u=A(),l=d("div"),f=d("a"),v=d("img"),L=A(),s=d("img"),M=A(),p=d("img"),R=A(),i=d("div"),D=d("a"),T(_.$$.fragment),V=A(),K=d("a"),T(G.$$.fragment),W=A(),y=d("a"),T(P.$$.fragment),E=A(),j=d("a"),T(w.$$.fragment),this.h()},l:function(t){e=h(t,"DIV",{class:!0}),q(e).forEach(c),u=O(t),l=h(t,"DIV",{class:!0});var b=q(l);f=h(b,"A",{href:!0});var I=q(f);v=h(I,"IMG",{class:!0,src:!0,alt:!0}),L=O(I),s=h(I,"IMG",{class:!0,src:!0,alt:!0}),M=O(I),p=h(I,"IMG",{class:!0,src:!0,alt:!0}),I.forEach(c),b.forEach(c),R=O(t),i=h(t,"DIV",{class:!0});var N=q(i);D=h(N,"A",{href:!0});var z=q(D);U(_.$$.fragment,z),z.forEach(c),V=O(N),K=h(N,"A",{href:!0});var Q=q(K);U(G.$$.fragment,Q),Q.forEach(c),W=O(N),y=h(N,"A",{href:!0});var re=q(y);U(P.$$.fragment,re),re.forEach(c),E=O(N),j=h(N,"A",{href:!0});var ie=q(j);U(w.$$.fragment,ie),ie.forEach(c),N.forEach(c),this.h()},h:function(){n(e,"class","navigation-background s-EEZOxJequKEG"),$(e,F,30,0,722),n(v,"class","logo-shadow s-EEZOxJequKEG"),te(v.src,m=k+"/logo-black.png")||n(v,"src",m),n(v,"alt","black"),$(v,F,34,8,815),n(s,"class","logo-image s-EEZOxJequKEG"),te(s.src,x=k+"/logo.png")||n(s,"src",x),n(s,"alt","main"),$(s,F,39,8,934),n(p,"class","logo-glow s-EEZOxJequKEG"),te(p.src,Z=k+"/logo-white.png")||n(p,"src",Z),n(p,"alt","glow"),ce(p,"logo-glow-active",o[0]==="/"),$(p,F,44,8,1045),n(f,"href",k+"/"),$(f,F,33,4,788),n(l,"class","logo s-EEZOxJequKEG"),$(l,F,32,0,765),n(D,"href",k+"/events"),$(D,F,54,4,1260),n(K,"href",k+"/songs"),$(K,F,60,4,1405),n(y,"href",k+"/references"),$(y,F,66,4,1547),n(j,"href",k+"/contact"),$(j,F,72,4,1704),n(i,"class","navigation s-EEZOxJequKEG"),$(i,F,53,0,1231)},m:function(t,b){B(t,e,b),B(t,u,b),B(t,l,b),a(l,f),a(f,v),a(f,L),a(f,s),a(f,M),a(f,p),B(t,R,b),B(t,i,b),a(i,D),X(_,D,null),a(i,V),a(i,K),X(G,K,null),a(i,W),a(i,y),X(P,y,null),a(i,E),a(i,j),X(w,j,null),r=!0},p:function(t,[b]){(!r||b&1)&&ce(p,"logo-glow-active",t[0]==="/");const I={};b&1&&(I.isActive=t[0]==="/events"),_.$set(I);const N={};b&1&&(N.isActive=t[0]==="/songs"),G.$set(N);const z={};b&1&&(z.isActive=t[0]==="/references"),P.$set(z);const Q={};b&1&&(Q.isActive=t[0]==="/contact"),w.$set(Q)},i:function(t){r||(C(_.$$.fragment,t),C(G.$$.fragment,t),C(P.$$.fragment,t),C(w.$$.fragment,t),r=!0)},o:function(t){H(_.$$.fragment,t),H(G.$$.fragment,t),H(P.$$.fragment,t),H(w.$$.fragment,t),r=!1},d:function(t){t&&c(e),t&&c(u),t&&c(l),t&&c(R),t&&c(i),Y(_),Y(G),Y(P),Y(w)}};return se("SvelteRegisterBlock",{block:g,id:ne.name,type:"component",source:"",ctx:o}),g}function Ie(o,e,u){let l;he(ae,"navigating"),$e(o,ae,s=>u(1,l=s));let{$$slots:f={},$$scope:v}=e;ge("Navigation",f,[]);let m="";le(()=>{const[s]=location.pathname.split("/").reverse();!s||s==="looney-website"?u(0,m="/"):u(0,m=`/${s}`)});const L=[];return Object.keys(e).forEach(s=>{!~L.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Navigation> was created with unknown prop '${s}'`)}),o.$capture_state=()=>({base:k,navigating:ae,onMount:le,Button:ee,currentPathname:m,$navigating:l}),o.$inject_state=s=>{"currentPathname"in s&&u(0,m=s.currentPathname)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&2&&l&&u(0,m=l.to.route.id)},[m,l]}class de extends ve{constructor(e){super(e),me(this,e,Ie,ne,_e,{}),se("SvelteRegisterComponent",{component:this,tagName:"Navigation",options:e,id:ne.name})}}const S="src/routes/+layout.svelte";function oe(o){let e,u,l,f,v,m,L,s,x,M,p,Z,R,i,D,_,V,K,G,W,y;i=new de({$$inline:!0});const P=o[1].default,E=pe(P,o,o[0],null),j={c:function(){e=d("div"),u=d("h1"),l=ue("Live Rock Karaoke"),f=A(),v=d("video"),L=A(),s=d("img"),M=A(),p=d("h2"),Z=ue("ライブ❤カラオケ!"),R=A(),T(i.$$.fragment),D=A(),_=d("div"),V=d("div"),K=A(),E&&E.c(),G=A(),W=d("div"),this.h()},l:function(r){e=h(r,"DIV",{class:!0});var g=q(e);u=h(g,"H1",{class:!0});var J=q(u);l=fe(J,"Live Rock Karaoke"),J.forEach(c),f=O(g),v=h(g,"VIDEO",{class:!0,src:!0});var t=q(v);t.forEach(c),L=O(g),s=h(g,"IMG",{class:!0,src:!0,alt:!0}),M=O(g),p=h(g,"H2",{class:!0});var b=q(p);Z=fe(b,"ライブ❤カラオケ!"),b.forEach(c),R=O(g),U(i.$$.fragment,g),D=O(g),_=h(g,"DIV",{class:!0});var I=q(_);V=h(I,"DIV",{class:!0}),q(V).forEach(c),K=O(I),E&&E.l(I),G=O(I),W=h(I,"DIV",{class:!0}),q(W).forEach(c),I.forEach(c),g.forEach(c),this.h()},h:function(){n(u,"class","hidden-headline s-7IPF32Wcq3s8"),$(u,S,7,4,171),n(v,"class","hidden-video-element s-7IPF32Wcq3s8"),te(v.src,m=k+"/teaser-1v5.m4v")||n(v,"src",m),$(v,S,9,4,227),n(s,"class","city s-7IPF32Wcq3s8"),te(s.src,x=k+"/city.svg")||n(s,"src",x),n(s,"alt","city"),$(s,S,15,4,331),n(p,"class","japanese s-7IPF32Wcq3s8"),$(p,S,17,4,388),n(V,"class","vertical-spacer s-7IPF32Wcq3s8"),$(V,S,22,8,484),n(W,"class","vertical-spacer s-7IPF32Wcq3s8"),$(W,S,26,8,552),n(_,"class","main-content s-7IPF32Wcq3s8"),$(_,S,21,4,449),n(e,"class","viewport s-7IPF32Wcq3s8"),$(e,S,6,0,144)},m:function(r,g){B(r,e,g),a(e,u),a(u,l),a(e,f),a(e,v),a(e,L),a(e,s),a(e,M),a(e,p),a(p,Z),a(e,R),X(i,e,null),a(e,D),a(e,_),a(_,V),a(_,K),E&&E.m(_,null),a(_,G),a(_,W),y=!0},p:function(r,[g]){E&&E.p&&(!y||g&1)&&Ee(E,P,r,r[0],y?we(P,r[0],g,null):be(r[0]),null)},i:function(r){y||(C(i.$$.fragment,r),C(E,r),y=!0)},o:function(r){H(i.$$.fragment,r),H(E,r),y=!1},d:function(r){r&&c(e),Y(i),E&&E.d(r)}};return se("SvelteRegisterBlock",{block:j,id:oe.name,type:"component",source:"",ctx:o}),j}function qe(o,e,u){let{$$slots:l={},$$scope:f}=e;ge("Layout",l,["default"]);const v=[];return Object.keys(e).forEach(m=>{!~v.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<Layout> was created with unknown prop '${m}'`)}),o.$$set=m=>{"$$scope"in m&&u(0,f=m.$$scope)},o.$capture_state=()=>({base:k,Navigation:de}),[f,l]}class Pe extends ve{constructor(e){super(e),me(this,e,qe,oe,_e,{}),se("SvelteRegisterComponent",{component:this,tagName:"Layout",options:e,id:oe.name})}}export{Pe as default};
