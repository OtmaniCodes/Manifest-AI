import{r as s,j as e}from"./index-e0ce6d6b.js";function d(){const[o,t]=s.useState(0);return s.useEffect(()=>{const r=()=>{const n=window.innerHeight,c=document.documentElement.scrollHeight,l=window.pageYOffset/(c-n)*100;t(l)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),e("div",{className:"ScrollProgressBar",children:e("div",{className:"ScrollProgressBar__progress",style:{width:`${o}%`}})})}export{d as default};
