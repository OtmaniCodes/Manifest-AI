import{r as n}from"./index-e0ce6d6b.js";function l({mobileChild:t,desktopChild:i}){const[s,o]=n.useState(!1);return n.useEffect(()=>{function e(){o(window.innerWidth<=900)}return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),s?t||null:i||null}export{l as R};
