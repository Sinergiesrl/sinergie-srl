/* SINERGIE | Navigazione, contatto guidato e preferenze accessibili.
   Nessun tracciamento, nessun dato trasmesso dal sito. */
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#main-nav');
  if (menuButton && nav) {
    const closeMenu = (returnFocus = false) => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      if (returnFocus) menuButton.focus();
    };
    menuButton.addEventListener('click', () => {
      const opening = menuButton.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('open', opening);
      menuButton.setAttribute('aria-expanded', String(opening));
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
    document.addEventListener('pointerdown', event => {
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1210) closeMenu();
    });
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  const form = document.getElementById('contact-form');
  if (!form) return;
  const service = document.getElementById('service');
  const message = document.getElementById('message');
  const privacy = document.getElementById('privacy-check');
  const error = document.getElementById('contact-error');
  const copyButton = document.getElementById('copy-contact');
  const status = document.getElementById('contact-copy-status');
  if (!service || !message || !privacy || !error) return;

  const requested = new URLSearchParams(window.location.search).get('servizio');
  if (requested) {
    const found = Array.from(service.options).find(option => option.value.toLocaleLowerCase('it') === requested.toLocaleLowerCase('it'));
    if (found) service.value = found.value;
  }

  const makeDraft = () => {
    const topic = service.value;
    const details = message.value.trim().slice(0, 1200);
    const subject = 'Richiesta di informazioni - ' + topic;
    const body = [
      'Buongiorno Sinergie,',
      '',
      'Vorrei ricevere informazioni su: ' + topic,
      '',
      details || 'Vorrei capire quali modalità di assistenza possono essere appropriate alla mia esigenza.',
      '',
      'Potete indicarmi come procedere per un primo confronto?',
      '',
      'Cordiali saluti'
    ].join('\n');
    return { subject, body };
  };

  const canPrepare = () => {
    if (privacy.checked) { error.hidden = true; return true; }
    error.hidden = false;
    privacy.focus();
    return false;
  };
  privacy.addEventListener('change', () => { error.hidden = true; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!canPrepare()) return;
    const {subject, body} = makeDraft();
    if (status) status.textContent = 'Si apre il programma email. Controlla il messaggio e premi Invia: non è stato spedito automaticamente.';
    window.location.href = 'mailto:info@sinergie2srl.it?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  if (copyButton) copyButton.addEventListener('click', async () => {
    if (!canPrepare()) return;
    const {subject, body} = makeDraft();
    const text = 'A: info@sinergie2srl.it\nOggetto: ' + subject + '\n\n' + body;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard non disponibile');
      await navigator.clipboard.writeText(text);
      if (status) status.textContent = 'Richiesta copiata. Incollala nella tua email e inviala a info@sinergie2srl.it.';
    } catch (_) {
      // Fallback leggibile e selezionabile: non fingere che la copia sia riuscita.
      let field = document.getElementById('contact-copy-fallback');
      if (!field) {
        field = document.createElement('textarea');
        field.id = 'contact-copy-fallback';
        field.setAttribute('aria-label','Testo della richiesta da copiare');
        field.setAttribute('readonly', '');
        field.rows = 9;
        field.style.width = '100%';
        copyButton.insertAdjacentElement('afterend', field);
      }
      field.value = text;
      field.focus(); field.select();
      if (status) status.textContent = 'Seleziona e copia il testo visualizzato, poi incollalo nella tua email.';
    }
  });
});
