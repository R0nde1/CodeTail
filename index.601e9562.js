!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var a=r("80k9Z"),i=r("g0jhG"),c=r("kE9Qy"),l=r("jcFG7");const o=document.querySelectorAll(".search-form"),s=document.querySelector("#content-results"),u=document.querySelector("#content-title"),d=document.querySelector("#pagination"),f=o[0],p=o[1];let g;function m(e){e.preventDefault();const n=e.target.elements.search.value;u.innerHTML="Searching results..",s.innerHTML="";const t=(0,a.calculateCocktails)();(0,i.fetchCocktailsByName)(n).then((e=>{g=e,u.innerHTML="Cocktails",s.innerHTML="",s.append(...(0,c.getDrinksMarkup)(e.slice(0,t))),d.innerHTML=(0,l.createPagination)(e.length,t,1),h()})).catch((e=>{u.innerHTML=e,s.innerHTML=(0,c.getErrorMarkup)()}))}function v(e){const n=Number(e.target.dataset.page),t=(0,a.calculateCocktails)(),r=g,i=n*t,o=i-t;s.innerHTML="",s.append(...(0,c.getDrinksMarkup)(r.slice(o,i))),d.innerHTML=(0,l.createPagination)(r.length,t,n),h()}function h(){const e=document.querySelectorAll(".pagination__number");for(const n of e)n.className.includes("inactive")||n.addEventListener("click",v)}f.addEventListener("submit",m),p.addEventListener("submit",m),f.addEventListener("input",(()=>{p.elements.search.value=f.elements.search.value})),p.addEventListener("input",(()=>{f.elements.search.value=p.elements.search.value}))}();
//# sourceMappingURL=index.601e9562.js.map
