> **Versione integrata, 10 novembre 2026:** per le guide e la pubblicazione dell’intero pacchetto, leggi prima [LEGGIMI_GUIDE_E_CONSIGLI.md](LEGGIMI_GUIDE_E_CONSIGLI.md).

# Sinergie — versione pronta per GitHub Pages

## Pubblicazione

1. Apri il repository GitHub destinato al sito (in precedenza indicato come `sinergiesrl/sinergie-srl`) e fai un backup dei contenuti attuali. Se il repository esiste già, **non sovrascrivere modifiche più recenti senza confrontarle**.
2. Estrai questo ZIP. Carica **tutti i file e le cartelle estratti nella radice del branch `main`**. Importante: includi `.github/workflows/pages.yml`, `CNAME`, `.nojekyll`, `stili/` e le cartelle `profilo-*/`. Non caricare lo ZIP come singolo file e non annidare tutto in una cartella.
3. Vai su **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Apri **Actions**, verifica che il workflow “Pubblica sito su GitHub Pages” termini con successo. Puoi avviarlo manualmente con “Run workflow”.
5. Il file `CNAME` configura il dominio personalizzato **www.sinergie2srl.it**. Prima di usarlo, configura presso il gestore DNS `www` come CNAME verso `<UTENTE_GITHUB>.github.io` (sostituisci con il proprietario effettivo del repository). Se sul nome `www` esistono record in conflitto, correggili. Verifica il dominio su GitHub in Settings → Pages e attiva **Enforce HTTPS** quando disponibile. Configura separatamente il dominio senza `www` usando gli IP indicati nella documentazione ufficiale GitHub Pages, se vuoi che anche quello raggiunga il sito.
6. Testa su HTTPS: homepage, pagine interne, menu mobile, foto, privacy, sitemap.xml, robots.txt e apertura dell’email dalla pagina Parliamone. Invia una vera email di prova e verifica la ricezione.

## Importante

- Il sito è **statico**, quindi compatibile con GitHub Pages. Il modulo contatto **non invia messaggi via server**: prepara un'email nel programma del visitatore.
- La posta elettronica **rimane presso DominiOK**: **non cambiare i record MX/SPF/DKIM/DMARC** per configurare il sito web su GitHub.
- Le impostazioni Apache `.htaccess` **non funzionano su GitHub Pages** e il workflow non le pubblica.
- I tag SEO e la sitemap puntano già a `https://www.sinergie2srl.it/`; finché il dominio personalizzato non funziona, l'indirizzo `github.io` potrebbe non essere il canonico utile ai motori di ricerca.
- **Privacy:** l'informativa è stata adeguata per distinguere GitHub Pages (web) da DominiOK (email), ma richiede **verifica e approvazione del titolare** dei contratti, log, trattamenti e trasferimenti prima della pubblicazione reale.
- Tutti i contenuti del repository GitHub potrebbero essere visibili a chi accede al codice, a seconda della visibilità del repository. Non caricare credenziali o dati riservati.

Documentazione: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
