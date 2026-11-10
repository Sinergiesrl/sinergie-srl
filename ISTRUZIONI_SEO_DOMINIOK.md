# Pubblicazione Sinergie su DominiOk — 09/11/2026

Dominio canonico: https://www.sinergie2srl.it/  
Email pubblica: info@sinergie2srl.it

1. Attiva il certificato SSL per **sinergie2srl.it** e **www.sinergie2srl.it** e verifica che entrambi i nomi DNS puntino all'hosting.
2. Estrai lo ZIP e carica **il contenuto** della cartella `Sinergie_Revisionato_09-11-2026` nella document root del dominio (ad esempio `public_html`), **incluso il file nascosto `.htaccess`**. Non mettere la cartella contenitore dentro `public_html`.
3. Verifica che la homepage e le pagine interne funzionino su HTTPS, che il dominio senza `www` e HTTP siano reindirizzati a `https://www.sinergie2srl.it/` e che non si producano loop di redirect. In caso di configurazioni di redirect già presenti sul server, evita regole duplicate.
4. Apri https://www.sinergie2srl.it/robots.txt e https://www.sinergie2srl.it/sitemap.xml. In Google Search Console verifica la proprietà del dominio via DNS e invia l'URL della sitemap.
5. Configura **realmente la casella** `info@sinergie2srl.it` presso il provider di posta scelto; verifica i record MX, SPF, DKIM e DMARC secondo il provider e prova ricezione/invio. Il solo aggiornamento del sito non crea una casella email.
6. Prova il modulo `parliamone.html`: prepara un messaggio nel programma email del visitatore e **non** trasmette dati dal sito. Prova anche il pulsante di copia e i link mailto di footer e privacy.
7. Verifica l'informativa privacy con il titolare e misura Core Web Vitals / PageSpeed dopo la pubblicazione.

SEO predisposta nei file: canonical, Open Graph, dati strutturati Organization, robots.txt e sitemap.xml. Il posizionamento/indicizzazione su Google non può essere garantito.
