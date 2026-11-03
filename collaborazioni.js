/* Il sito non salva dati: prepara soltanto un messaggio nel client email. */
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.getElementById('email-collaborazione');
 if(!btn)return;
 btn.addEventListener('click',(event)=>{
  const checkbox=document.getElementById('privacy-collaborazione');
  const error=document.getElementById('errore-collaborazione');
  if(!checkbox.checked){event.preventDefault();error.hidden=false;checkbox.focus();return;}
  error.hidden=true;
  const select=document.getElementById('categoria-collaborazione');
  const subject='Proposta di collaborazione - '+select.value;
  const body='Buongiorno Sinergie,\n\nNome e cognome: \nQualifica: '+select.value+'\nProvincia/e di attività: \nRecapito: \nBreve presentazione: \n\nCordiali saluti';
  btn.href='mailto:sinergie2srl@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
 });
});
