import{a as w,i as n,S}from"./assets/vendor-f365bc20.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const k="38153800-29c65605892730b6f027a7070";async function y(e,s){return(await w.get(`https://pixabay.com/api/?key=${k}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=100`)).data}function f(e,s,c){const{hits:d}=e,t=d.map(({webformatURL:o,largeImageURL:a,likes:b,views:$,comments:L,downloads:v,tags:m})=>`<div class="photo-card">    
                  <a href="${a}">
                  <img class="searched-image" src="${o}" alt="${m}" loading="lazy" data-title="${m}"/></a>
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
              </div>`).join("");s.insertAdjacentHTML("beforeend",t),c.refresh()}function g(e){const{height:s}=e.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}n.settings({position:"topRight",timeout:3e3});let h=new S(".gallery a",{captionType:"data",captionDelay:250});const i=document.querySelector(".gallery"),q=document.querySelector(".search-form"),r=document.querySelector(".load-more"),u=document.querySelector(".end-of-img-list");q.addEventListener("submit",H);r.addEventListener("click",A);let l,p;async function H(e){e.preventDefault(),l=1,p=e.target.searchQuery.value,i.innerHTML="",u.style.display="none",r.style.display="none";try{const s=await y(p,l);if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again."});return}f(s,i,h),r.style.display="block",e.target.searchQuery.value="",g(i),n.success({message:`Hooray! We found ${s.totalHits} images`})}catch(s){n.error({message:`${s.message}`}),console.log(s.message)}}async function A(){l++,r.style.display="none";try{const e=await y(p,l);if(console.log(e),f(e,i,h),g(i),l===6){u.style.display="block";return}if(e.hits.length<40||e.hits.length===0){r.style.display="none",u.style.display="block";return}r.style.display="block"}catch(e){n.error({message:`${e.message}`}),console.log(e.message)}}
//# sourceMappingURL=commonHelpers.js.map
