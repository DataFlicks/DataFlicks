import{r as s,c as M,w as $,o as H,a as z,b as p,d as _,e as F,f as A,v as R,F as B,g as U,n as W,h as m,i as q,j}from"./vue-CtqdXKSS.js";(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const G=["src"],K={key:1,class:"loading-indicator"},J=["src","muted","onLoadeddata","onWaiting","onPlaying","onClick"],Q=300,X=2e3,Z={__name:"App",props:{videoList:{type:Array,required:!0,default:()=>[{url:"videos/video1.mp4"},{url:"videos/video2.mp4"},{url:"videos/video3.mp4"}]}},setup(w){const v=w,a=s(0),u=s(!0),t=s([]),n=s("home.png"),r=s(!1),h=s(!1),f=s(!1),y=s(!0),c=s(null),g=s(0);let L=0,E=0;const N=M(()=>({transform:`translateY(${-a.value*window.innerHeight+g.value}px)`,transition:c.value?"transform 0.3s ease-out":"none"})),P=e=>{if(a.value===e){const o=t.value[e];o&&(o.controls=!o.controls)}};$(a,(e,o)=>{o!==e&&I()});const C=async()=>{u.value=!1,h.value=!0,y.value=!1,setTimeout(async()=>{h.value=!1,await I()},X)},I=async()=>{r.value=!0,f.value=!1;const e=t.value[a.value];if(!e){r.value=!1;return}try{t.value.forEach((o,i)=>{i!==a.value&&o&&(o.pause(),o.currentTime=0)}),e.readyState<2&&await new Promise(o=>{e.addEventListener("loadeddata",o,{once:!0}),e.load()}),e.muted=y.value,await e.play(),f.value=!0,g.value=0,c.value=null}catch(o){console.error("Playback failed:",o),y.value=!0,e.muted=!0;try{await e.play(),f.value=!0}catch(i){console.error("Muted retry failed:",i)}}finally{r.value=!1}},O=e=>{L=e.touches[0].clientY},b=e=>{e.preventDefault(),g.value=e.touches[0].clientY-L},S=e=>{E=e.changedTouches[0].clientY;const o=E-L,i=window.innerHeight/3;Math.abs(o)>i&&(o>0&&a.value>0?a.value--:o<0&&a.value<v.videoList.length-1&&a.value++),c.value="snap",g.value=0,setTimeout(()=>{c.value=null},Q)},V=e=>{e===a.value&&(f.value=!0)},Y=e=>{e===a.value&&(r.value=!0)},k=e=>{e===a.value&&(r.value=!1,f.value=!0)},D=()=>{t.value.forEach(e=>{e&&e.load()})},T=()=>{const e=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${e}px`)};return H(()=>{D(),T(),window.addEventListener("resize",T)}),z(()=>{window.removeEventListener("resize",T),t.value.forEach(e=>{e&&(e.pause(),e.removeAttribute("src"),e.load())})}),(e,o)=>(m(),p("div",{class:"video-app",onTouchstart:O,onTouchmove:b,onTouchend:S},[u.value?(m(),p("img",{key:0,class:"cover",src:n.value,onClick:C,alt:"Click to start"},null,8,G)):_("",!0),h.value?(m(),p("div",K,o[0]||(o[0]=[A("div",{class:"spinner"},null,-1)]))):_("",!0),F(A("div",{class:"video-container",style:W(N.value)},[(m(!0),p(B,null,U(w.videoList,(i,l)=>(m(),p("video",{key:l,ref_for:!0,ref:d=>{d&&(t.value[l]=d)},src:i.url,class:q(["video",{active:a.value===l,"slide-next":c.value==="next"&&l===a.value+1,"slide-prev":c.value==="prev"&&l===a.value-1}]),playsinline:"","webkit-playsinline":"",loop:"",muted:y.value,onLoadeddata:d=>V(l),onWaiting:d=>Y(l),onPlaying:d=>k(l),onClick:d=>P(l)},null,42,J))),128))],4),[[R,!u.value&&!h.value]])],32))}},x=j(Z);x.mount("#app");
