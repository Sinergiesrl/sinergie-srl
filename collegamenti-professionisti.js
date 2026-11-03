/* Configurazione opzionale per pubblicazioni su domini diversi.
   Il percorso relativo HTML funziona se entrambe le cartelle sono pubblicate
   insieme, conservando la struttura del pacchetto. */
(() => {
  'use strict';
  const profileUrl = ''; // Inserire qui l'URL HTTPS definitivo del sito di Pietro Fazio.
  const link = document.querySelector('[data-profile-link="pietro-fazio"]');
  if (link && /^https:\/\/[^\s]+$/i.test(profileUrl)) {
    link.href = profileUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
})();
