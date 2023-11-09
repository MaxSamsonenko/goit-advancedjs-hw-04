import{a as w,i as n,S}from"./assets/vendor-f365bc20.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const k="38153800-29c65605892730b6f027a7070";async function m(e,s){return(await w.get(`https://pixabay.com/api/?key=${k}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=40`)).data}function f(e,s,l){const{hits:c}=e,t=c.map(({webformatURL:o,largeImageURL:r,likes:b,views:$,comments:L,downloads:v,tags:p})=>`<div class="photo-card">    
                  <a href="${r}">
                  <img class="searched-image" src="${o}" alt="${p}" loading="lazy" data-title="${p}"/></a>
                  <div class="info">
                      <p class="info-item">
                          <b>Likes</b><span class="info-data">${b}</span>
                      </p>
                          <p class="info-item">
                      <b>Views</b><span class="info-data">${$}</span>
                      </p>
                      <p class="info-item">
                          <b>Comments</b><span class="info-data">${L}</span>
                      </p>
                      <p class="info-item">
                          <b>Downloads</b><span class="info-data">${v}
                          </p></span>
                  </div>
              </div>`).join("");s.insertAdjacentHTML("beforeend",t),l.refresh()}function y(e){const{height:s}=e.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}n.settings({position:"topRight",timeout:3e3});let g=new S(".gallery a",{captionType:"data",captionDelay:250});const i=document.querySelector(".gallery"),q=document.querySelector(".search-form"),a=document.querySelector(".load-more"),h=document.querySelector(".end-of-img-list");q.addEventListener("submit",H);a.addEventListener("click",A);let d,u;async function H(e){e.preventDefault(),d=1,u=e.target.searchQuery.value,i.innerHTML="",h.style.display="none",a.style.display="none";try{const s=await m(u,d);if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again."});return}f(s,i,g),a.style.display="block",e.target.searchQuery.value="",y(i),n.success({message:`Hooray! We found ${s.totalHits} images`})}catch(s){n.error({message:`${s.message}`}),console.log(s.message)}}async function A(){d++,a.style.display="none";try{const e=await m(u,d);if(f(e,i,g),y(i),e.hits.length<40||e.hits.length===0){a.style.display="none",h.style.display="block";return}a.style.display="block"}catch(e){n.error({message:`${e.message}`}),console.log(e.message)}}
//# sourceMappingURL=commonHelpers.js.map
