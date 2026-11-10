/* Menu dei servizi e ritorno sicuro alle pagine precedenti. */
document.addEventListener('DOMContentLoaded', () => {
  const services = document.querySelector('.nav-services');
  const toggle = services?.querySelector('.services-toggle');

  if (services && toggle) {
    const closeMenu = (restoreFocus = false) => {
      services.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (restoreFocus) toggle.focus();
    };

    toggle.addEventListener('click', () => {
      const shouldOpen = toggle.getAttribute('aria-expanded') !== 'true';
      services.classList.toggle('is-open', shouldOpen);
      toggle.setAttribute('aria-expanded', String(shouldOpen));
    });

    document.addEventListener('pointerdown', (event) => {
      if (!services.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && services.classList.contains('is-open')) {
        closeMenu(true);
      }
    });

    services.querySelectorAll('.services-submenu a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
        const mobileToggle = document.querySelector('.nav-toggle');
        const navigation = document.getElementById('main-nav');
        navigation?.classList.remove('open');
        mobileToggle?.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('[data-back-fallback]').forEach((link) => {
    link.addEventListener('click', (event) => {
      // In assenza di una provenienza interna, usa il normale href.
      try {
        const previousPage = new URL(document.referrer);
        if (previousPage.origin === location.origin && history.length > 1) {
          event.preventDefault();
          history.back();
        }
      } catch {
        // document.referrer può essere vuoto o non valido.
      }
    });
  });
});
