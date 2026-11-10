# Guide e consigli — integrazione completa nel sito Sinergie

Questa cartella contiene **l'intero sito statico pronto per GitHub Pages**, non solo un aggiornamento parziale.

## Che cosa è stato integrato

- Nuova voce **Guide e consigli** nel menu principale e nel piè di pagina delle pagine ordinarie.
- Una pagina di raccolta (`guide-e-consigli.html`) e cinque guide autonome (`guida-*.html`).
- Richiamo alle guide nella homepage e collegamento dalla pagina **Link utili**.
- Un solo foglio di stile dedicato, `stili/guide-e-consigli.css`, condiviso dalle sei pagine e dal richiamo in homepage.
- Meta tag descrittivi, indirizzi canonici e markup strutturato, più sei URL in `sitemap.xml`.
- Collegamenti verso **Parliamone**, con argomento pertinente preselezionato. Il modulo prepara un'email sul dispositivo del visitatore; non invia messaggi automaticamente.

Gli altri contenuti, la navigazione esistente, le immagini, le impostazioni del dominio e il workflow di pubblicazione sono stati conservati. **Non serve eseguire script o installare librerie.**

## Pubblicazione su GitHub

1. Esegui un backup del repository e confronta eventuali modifiche più recenti rispetto all'archivio di partenza del 9 novembre 2026.
2. Estrai il file ZIP. Copia nella **radice del repository** tutti i file e le cartelle estratti (inclusi `.github`, `.nojekyll`, `CNAME`, `stili` e le cartelle `profilo-*`), non lo ZIP stesso e non una sottocartella contenitore.
3. Conferma le modifiche nel branch `main`; in **Settings → Pages** scegli **GitHub Actions** come origine, se non è già impostata.
4. Verifica la riuscita del workflow in **Actions** e apri la homepage, la nuova voce di menu, tutte e cinque le guide e il modulo Parliamone.
5. Prova i collegamenti e la navigazione anche da telefono; verifica le immagini, la privacy, i recapiti e la ricezione di un messaggio email di prova.

Il workflow `.github/workflows/pages.yml` pubblica già i file HTML dalla radice e l'intera cartella `stili`: non richiede modifiche.

## Aspetti da verificare prima di rendere pubblici i testi

- I contenuti hanno finalità **informative e di orientamento**, non sostituiscono pareri, scadenziari o verifiche legali, fiscali e del lavoro per casi concreti.
- Fai approvare i contenuti dai professionisti delle rispettive materie, soprattutto gli argomenti regolati da norme e adempimenti.
- Controlla e approva l'informativa privacy secondo le indicazioni già presenti nell'archivio del sito.
- Il file `CNAME` resta configurato per `www.sinergie2srl.it`: non modificare i record della posta DominiOK (MX, SPF, DKIM, DMARC) per pubblicare il sito web.
- Le pagine non usano analytics o servizi esterni di acquisizione contatti. Il modulo non è una casella di posta sul server.

## Principio editoriale

**Non tutte le risposte. Le domande giuste.**

Ogni guida distingue il contesto, cinque domande utili, le informazioni per un primo confronto e il ruolo dei professionisti abilitati. L'invito al contatto è misurato: ascolto, orientamento, responsabilità definite, accordi chiari prima dell'incarico.
