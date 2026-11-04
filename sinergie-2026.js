document.addEventListener('DOMContentLoaded',()=>{const menu=document.querySelector('.nav-toggle');const nav=document.querySelector('#main-nav');if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}})}document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());const form=document.querySelector('#contact-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();const check=document.querySelector('#privacy-check'),error=document.querySelector('#contact-error');if(!check.checked){error.hidden=false;check.focus();return}error.hidden=true;const service=document.querySelector('#service').value;const msg=document.querySelector('#message').value.trim();const subject=encodeURIComponent('Richiesta di primo confronto — '+service);const body=encodeURIComponent('Buongiorno Sinergie,\n\nVorrei ricevere informazioni su: '+service+'\n\n'+(msg||'Vorrei concordare un primo confronto conoscitivo.')+'\n\nCordiali saluti');window.location.href='mailto:sinergie2srl@gmail.com?subject='+subject+'&body='+body})}});

/* Close the mobile menu when clicking outside or resizing to desktop. */
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#main-nav');
  if (!button || !menu) return;
  const close = () => { menu.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); };
  document.addEventListener('pointerdown', (event) => {
    if (!menu.contains(event.target) && !button.contains(event.target)) close();
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) close(); });
});
