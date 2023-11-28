import{S as me,i as ve,s as ge,d as ae,G as pe,H as he,v as _e,o as se,n as d,c as O,A as T,p,q as y,l,f as G,B as U,r as s,w as h,I as te,J as fe,g as C,K as n,C as X,k as x,t as H,D as Y,L as $e,x as ne,y as oe,M as Ee,N as be,O as we,P as qe}from"../../chunks/index-69be398c.js";import{b as N}from"../../chunks/paths-eaf57226.js";import{n as re}from"../../chunks/stores-d8574f26.js";import{B as ee}from"../../chunks/Button-b0a66520.js";const S="src/components/Navigation.svelte";function ie(o){let e,c,i,u,f,m,W,a,z,V,v,D,L,$,b,P,B,w,K,Z,I,k,E,j,q,r;P=new ee({props:{isActive:o[0]==="/events",label:"Events"},$$inline:!0}),K=new ee({props:{isActive:o[0]==="/songs",label:"Songs"},$$inline:!0}),k=new ee({props:{isActive:o[0]==="/references",label:"References"},$$inline:!0}),q=new ee({props:{isActive:o[0]==="/contact",label:"Contact"},$$inline:!0});const g={c:function(){e=d("div"),c=O(),i=d("div"),u=d("a"),f=d("img"),W=O(),a=d("img"),V=O(),v=d("img"),L=O(),$=d("div"),b=d("a"),T(P.$$.fragment),B=O(),w=d("a"),T(K.$$.fragment),Z=O(),I=d("a"),T(k.$$.fragment),E=O(),j=d("a"),T(q.$$.fragment),this.h()},l:function(t){e=p(t,"DIV",{class:!0}),y(e).forEach(l),c=G(t),i=p(t,"DIV",{class:!0});var _=y(i);u=p(_,"A",{href:!0});var J=y(u);f=p(J,"IMG",{class:!0,src:!0,alt:!0}),W=G(J),a=p(J,"IMG",{class:!0,src:!0,alt:!0}),V=G(J),v=p(J,"IMG",{class:!0,src:!0,alt:!0}),J.forEach(l),_.forEach(l),L=G(t),$=p(t,"DIV",{class:!0});var A=y($);b=p(A,"A",{href:!0,class:!0});var R=y(b);U(P.$$.fragment,R),R.forEach(l),B=G(A),w=p(A,"A",{href:!0,class:!0});var Q=y(w);U(K.$$.fragment,Q),Q.forEach(l),Z=G(A),I=p(A,"A",{href:!0,class:!0});var ce=y(I);U(k.$$.fragment,ce),ce.forEach(l),E=G(A),j=p(A,"A",{href:!0,class:!0});var ue=y(j);U(q.$$.fragment,ue),ue.forEach(l),A.forEach(l),this.h()},h:function(){s(e,"class","navigation-background s-EEZOxJequKEG"),h(e,S,23,0,561),s(f,"class","logo-shadow s-EEZOxJequKEG"),te(f.src,m=N+"/logo-black.png")||s(f,"src",m),s(f,"alt","black"),h(f,S,27,8,654),s(a,"class","logo-image s-EEZOxJequKEG"),te(a.src,z=N+"/logo.png")||s(a,"src",z),s(a,"alt","main"),h(a,S,32,8,773),s(v,"class","logo-glow s-EEZOxJequKEG"),te(v.src,D=N+"/logo-white.png")||s(v,"src",D),s(v,"alt","glow"),fe(v,"logo-glow-active",o[0]==="/"),h(v,S,37,8,884),s(u,"href",N+"/"),h(u,S,26,4,627),s(i,"class","logo s-EEZOxJequKEG"),h(i,S,25,0,604),s(b,"href",N+"/events"),s(b,"class","nav-item nav-item-0 s-EEZOxJequKEG"),h(b,S,47,4,1099),s(w,"href",N+"/songs"),s(w,"class","nav-item nav-item-1 s-EEZOxJequKEG"),h(w,S,56,4,1293),s(I,"href",N+"/references"),s(I,"class","nav-item nav-item-2 s-EEZOxJequKEG"),h(I,S,65,4,1484),s(j,"href",N+"/contact"),s(j,"class","nav-item nav-item-3 s-EEZOxJequKEG"),h(j,S,74,4,1690),s($,"class","navigation s-EEZOxJequKEG"),h($,S,46,0,1070)},m:function(t,_){C(t,e,_),C(t,c,_),C(t,i,_),n(i,u),n(u,f),n(u,W),n(u,a),n(u,V),n(u,v),C(t,L,_),C(t,$,_),n($,b),X(P,b,null),n($,B),n($,w),X(K,w,null),n($,Z),n($,I),X(k,I,null),n($,E),n($,j),X(q,j,null),r=!0},p:function(t,[_]){(!r||_&1)&&fe(v,"logo-glow-active",t[0]==="/");const J={};_&1&&(J.isActive=t[0]==="/events"),P.$set(J);const A={};_&1&&(A.isActive=t[0]==="/songs"),K.$set(A);const R={};_&1&&(R.isActive=t[0]==="/references"),k.$set(R);const Q={};_&1&&(Q.isActive=t[0]==="/contact"),q.$set(Q)},i:function(t){r||(x(P.$$.fragment,t),x(K.$$.fragment,t),x(k.$$.fragment,t),x(q.$$.fragment,t),r=!0)},o:function(t){H(P.$$.fragment,t),H(K.$$.fragment,t),H(k.$$.fragment,t),H(q.$$.fragment,t),r=!1},d:function(t){t&&l(e),t&&l(c),t&&l(i),t&&l(L),t&&l($),Y(P),Y(K),Y(k),Y(q)}};return ae("SvelteRegisterBlock",{block:g,id:ie.name,type:"component",source:"",ctx:o}),g}function Ie(o,e,c){let i;pe(re,"navigating"),he(o,re,a=>c(1,i=a));let{$$slots:u={},$$scope:f}=e;_e("Navigation",u,[]);let m="";se(()=>{const[a]=location.pathname.split("/").reverse();!a||a==="looney-website"?c(0,m="/"):c(0,m=`/${a}`)});const W=[];return Object.keys(e).forEach(a=>{!~W.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Navigation> was created with unknown prop '${a}'`)}),o.$capture_state=()=>({onMount:se,base:N,navigating:re,Button:ee,currentPathname:m,$navigating:i}),o.$inject_state=a=>{"currentPathname"in a&&c(0,m=a.currentPathname)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&2&&i&&c(0,m=i.to.route.id)},[m,i]}class de extends me{constructor(e){super(e),ve(this,e,Ie,ie,ge,{}),ae("SvelteRegisterComponent",{component:this,tagName:"Navigation",options:e,id:ie.name})}}const{console:ye}=qe,M="src/routes/+layout.svelte";function le(o){let e,c,i,u,f,m,W,a,z,V,v,D,L,$,b,P,B,w,K,Z,I;w=new de({$$inline:!0});const k=o[1].default,E=$e(k,o,o[0],null),j={c:function(){e=d("div"),c=d("h1"),i=ne("Live Rock Karaoke"),u=O(),f=d("video"),W=O(),a=d("img"),V=O(),v=d("h2"),D=d("span"),L=ne("ライブ❤"),$=O(),b=d("span"),P=ne("カラオケ!"),B=O(),T(w.$$.fragment),K=O(),Z=d("div"),E&&E.c(),this.h()},l:function(r){e=p(r,"DIV",{class:!0});var g=y(e);c=p(g,"H1",{class:!0});var F=y(c);i=oe(F,"Live Rock Karaoke"),F.forEach(l),u=G(g),f=p(g,"VIDEO",{class:!0,src:!0});var t=y(f);t.forEach(l),W=G(g),a=p(g,"IMG",{class:!0,src:!0,alt:!0}),V=G(g),v=p(g,"H2",{class:!0});var _=y(v);D=p(_,"SPAN",{class:!0});var J=y(D);L=oe(J,"ライブ❤"),J.forEach(l),$=G(_),b=p(_,"SPAN",{class:!0});var A=y(b);P=oe(A,"カラオケ!"),A.forEach(l),_.forEach(l),B=G(g),U(w.$$.fragment,g),K=G(g),Z=p(g,"DIV",{class:!0});var R=y(Z);E&&E.l(R),R.forEach(l),g.forEach(l),this.h()},h:function(){s(c,"class","hidden-headline s-7IPF32Wcq3s8"),h(c,M,20,4,516),s(f,"class","hidden-video-element s-7IPF32Wcq3s8"),te(f.src,m=N+"/teaser-1v5.m4v")||s(f,"src",m),h(f,M,22,4,572),s(a,"class","city s-7IPF32Wcq3s8"),te(a.src,z=N+"/city.svg")||s(a,"src",z),s(a,"alt","city"),h(a,M,28,4,684),s(D,"class","japanese-partial s-7IPF32Wcq3s8"),h(D,M,31,8,771),s(b,"class","japanese-partial s-7IPF32Wcq3s8"),h(b,M,32,8,822),s(v,"class","japanese s-7IPF32Wcq3s8"),h(v,M,30,4,741),s(Z,"class","main-content s-7IPF32Wcq3s8"),h(Z,M,37,4,901),s(e,"class","viewport s-7IPF32Wcq3s8"),h(e,M,19,0,489)},m:function(r,g){C(r,e,g),n(e,c),n(c,i),n(e,u),n(e,f),n(e,W),n(e,a),n(e,V),n(e,v),n(v,D),n(D,L),n(v,$),n(v,b),n(b,P),n(e,B),X(w,e,null),n(e,K),n(e,Z),E&&E.m(Z,null),I=!0},p:function(r,[g]){E&&E.p&&(!I||g&1)&&Ee(E,k,r,r[0],I?we(k,r[0],g,null):be(r[0]),null)},i:function(r){I||(x(w.$$.fragment,r),x(E,r),I=!0)},o:function(r){H(w.$$.fragment,r),H(E,r),I=!1},d:function(r){r&&l(e),Y(w),E&&E.d(r)}};return ae("SvelteRegisterBlock",{block:j,id:le.name,type:"component",source:"",ctx:o}),j}function Ae(o,e,c){let{$$slots:i={},$$scope:u}=e;_e("Layout",i,["default"]),se(()=>{console.log("%cglencoden ❤️ version 1.2.1",`font-size: 1rem;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
            color: white;
            background:linear-gradient(#E66465, #9198E5);`)});const f=[];return Object.keys(e).forEach(m=>{!~f.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&ye.warn(`<Layout> was created with unknown prop '${m}'`)}),o.$$set=m=>{"$$scope"in m&&c(0,u=m.$$scope)},o.$capture_state=()=>({onMount:se,base:N,Navigation:de}),[u,i]}class ke extends me{constructor(e){super(e),ve(this,e,Ae,le,ge,{}),ae("SvelteRegisterComponent",{component:this,tagName:"Layout",options:e,id:le.name})}}export{ke as default};