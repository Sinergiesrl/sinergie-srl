# SINERGIE — versione consolidata · 9 novembre 2026

## Avvio
Aprire `index.html` per un'anteprima locale. Per verificare il comportamento come sito pubblicato, servire la directory con `python -m http.server 8000` e aprire `http://localhost:8000` nel browser. Pubblicare **tutta** la cartella mantenendo la struttura delle directory.

## Architettura
- `sinergie-base.css`: identità visiva e regole comuni alle sei famiglie di pagine principali.
- `tema-*.css`: stili particolari delle singole famiglie di pagina, caricati **dopo** la base per mantenere la cascata e l'aspetto precedenti.
- `sinergie-rifiniture.css`: accessibilità e rifiniture trasversali.
- `sinergie-contatti-cta.css`: regole deliberatamente limitate alla pagina Contatti.
- `sinergie-profili.css`: stile comune ai profili professionali.
- `sinergie-2026.js`: menu principale, anno, preparazione della richiesta e fallback copia; `sinergie-navigazione-responsive.js`: sottomenu Servizi e ritorno; `sinergie-elite-navigation.js`: ancore precise; `network-directory.js`: filtri network.
- `configura-dominio.py`: prepara metadata SEO e sitemap **solo dopo** la conferma del dominio HTTPS.

La suddivisione CSS non cambia l'ordine delle regole originali: per ciascuna pagina, le dichiarazioni ottenute caricando la base e il relativo tema sono quelle della versione precedente, con modifiche editoriali mirate nelle pagine di ingresso e contatto.

## Contatti — precisazione essenziale
Il sito è statico, **non** ha un backend per l'invio delle richieste. Il modulo prepara un messaggio nel programma email del visitatore oppure ne permette la copia. Nessuna notifica o consegna effettiva è garantita dal sito; l'utente deve inviare manualmente l'email. Recapito presente nel codice: `info@sinergie2srl.it`. Per usare un form di invio diretto servono infrastruttura email, verifica antispam, informativa privacy aggiornata e test end-to-end effettivi.

## Verifiche tecniche eseguite
1. Controllati staticamente tutti i file HTML: percorsi locali, ancore, numero dei titoli principali (salvo vecchia pagina redirect), alt delle immagini e nomi accessibili dei link. **Zero errori riscontrati**.
2. Analizzati i CSS con il parser `tinycss2`: **zero errori di parsing top-level**.
3. In Chromium con rendering e script effettivi, provati a 1440×900, 768×1024, 390×844 e 320×568: homepage, Servizi, Network, Contatti, Parliamone, Chi siamo. **24 combinazioni pagina/viewport**: nessun overflow orizzontale e un solo H1 in ciascuna; menu mobile e tasto Escape operativi alle risoluzioni mobile.
4. Su Parliamone verificati: obbligo di lettura privacy prima della preparazione, messaggio d'errore, cancellazione dell'errore alla spunta, feedback per la copia e testo selezionabile di fallback.
5. Su Network verificati filtro testuale e messaggio di nessun risultato; sul menu Servizi verificata apertura e chiusura con Escape.
6. Nota tecnica di test: poiché l'ambiente di browser blocca la navigazione HTTP/file diretta, le pagine sono state caricate in Chromium incorporando localmente HTML, CSS e JavaScript, senza font remoti e con immagini segnaposto neutre. È un test reale di layout e interazione, **non** una verifica visuale pixel-perfect né una navigazione integrale su dominio pubblico.

## Prima della pubblicazione reale
- Confermare dominio e hosting; eseguire `python configura-dominio.py https://DOMINIO-REALE/` e rigenerare sitemap.
- Far validare informativa privacy e indicazioni sul fornitore hosting; non presentare la bozza come verifica legale conclusa.
- Verificare sul dominio reale il caricamento dei font, tutte le immagini, i collegamenti tra pagine, la visualizzazione su iOS/Android e la posta `mailto:` nei client più diffusi.
- Inviare una vera email di prova da dispositivi diversi e verificarne la ricezione nella casella destinataria. Non si può certificare la consegna da una copia statica.
- Eseguire Lighthouse/PageSpeed **sul sito effettivamente pubblicato**: i punteggi di rete non sono misurabili in modo attendibile con asset locali e font disattivati.

## Limiti
La revisione è tecnica e redazionale: non comprende conformità legale certificata, audit WCAG completo, monitoraggio uptime, certificazione di performance sul dominio né validazione delle informazioni aziendali fornite nel progetto.
