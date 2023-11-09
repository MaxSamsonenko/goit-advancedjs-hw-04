import{a as k,i as n,S as w}from"./assets/vendor-f365bc20.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function c(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(s){if(s.ep)return;s.ep=!0;const o=c(s);fetch(s.href,o)}})();const S="38153800-29c65605892730b6f027a7070";async function m(e,t){return(await k.get(`https://pixabay.com/api/?key=${S}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=40`)).data}function f(e,t,c){const{hits:d}=e,s=d.map(({webformatURL:o,largeImageURL:a,likes:b,views:$,comments:v,downloads:L,tags:y})=>`<div class="photo-card">    
                  <a href="${a}">
                  <img class="searched-image" src="${o}" alt="${y}" loading="lazy" data-title="${y}"/></a>
                  <div class="info">
                      <p class="info-item">
                          <b>Likes</b><span class="info-data">${b}</span>
                      </p>
                          <p class="info-item">
                      <b>Views</b><span class="info-data">${$}</span>
                      </p>
                      <p class="info-item">
                          <b>Comments</b><span class="info-data">${v}</span>
                      </p>
                      <p class="info-item">
                          <b>Downloads</b><span class="info-data">${L}
                          </p></span>
                  </div>
              </div>`).join("");t.insertAdjacentHTML("beforeend",s),c.refresh()}function g(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}n.settings({position:"bottomRight",timeout:3e3,maxWidth:300});let h=new w(".gallery a",{captionType:"data",captionDelay:250});const i=document.querySelector(".gallery"),q=document.querySelector(".search-form"),r=document.querySelector(".load-more"),u=document.querySelector(".end-of-img-list");q.addEventListener("submit",H);r.addEventListener("click",A);let l,p;async function H(e){e.preventDefault(),l=1,p=e.target.searchQuery.value,i.innerHTML="",u.style.display="none",r.style.display="none";try{const t=await m(p,l);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again."}),e.target.searchQuery.value="";return}if(f(t,i,h),e.target.searchQuery.value="",g(i),n.success({message:`Hooray! We found ${t.totalHits} images`}),t.hits.length<40){u.style.display="block";return}r.style.display="block"}catch(t){n.error({message:`${t.message}`}),console.log(t.message)}}async function A(){l++,r.style.display="none";try{const e=await m(p,l);if(console.log(e),f(e,i,h),g(i),l===13){u.style.display="block";return}if(e.hits.length<40||e.hits.length===0){r.style.display="none",u.style.display="block";return}r.style.display="block"}catch(e){n.error({message:`${e.message}`}),console.log(e.message)}}
//# sourceMappingURL=commonHelpers.js.map
