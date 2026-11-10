/* Sinergie Elite: apertura precisa di sezioni e modulo, senza fascia precedente. */
(function(){
  'use strict';
  const targets=new Set(['servizi-imprese','servizi-privati','servizi-trasversali','modulo-contatto']);
  function align(id, animated){
    if(!targets.has(id)) return;
    const section=document.getElementById(id); if(!section)return;
    const content=(section.matches('.integrated-services')?section.querySelector(':scope > .container'):section)||section;
    const header=document.querySelector('.header');
    const height=header?header.getBoundingClientRect().height:0;
    const pad=window.innerWidth<=760?14:22;
    const top=content.getBoundingClientRect().top+window.scrollY-height-pad;
    window.scrollTo({top:Math.max(0,top),behavior:animated&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches?'smooth':'instant'});
  }
  function fromHash(animated){const id=decodeURIComponent(window.location.hash.slice(1));if(targets.has(id))requestAnimationFrame(()=>align(id,animated));}
  window.addEventListener('hashchange',()=>fromHash(true));
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('a[href*="#"]').forEach(a=>a.addEventListener('click',()=>{
      let url;try{url=new URL(a.href,location.href)}catch{return}
      if(url.pathname===location.pathname && targets.has(decodeURIComponent(url.hash.slice(1)))){
        setTimeout(()=>fromHash(true),0);
      }
    }));
    if(location.hash){requestAnimationFrame(()=>requestAnimationFrame(()=>fromHash(false)));}
    // Ritenta una sola volta dopo il caricamento immagini/font senza movimento visibile.
    if(location.hash)window.addEventListener('load',()=>fromHash(false),{once:true});
  });
})();
