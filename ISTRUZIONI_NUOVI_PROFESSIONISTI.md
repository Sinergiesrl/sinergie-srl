# Come ampliare il Network di Sinergie

Le schede sono compatte: 4 colonne su desktop, 3 su schermi intermedi e 2 su smartphone. Ognuna è un collegamento alla pagina professionale completa.

## Aggiungere un professionista

1. Creare la cartella `profilo-nome-cognome/` con una pagina `index.html` e la fotografia autorizzata.
2. Preparare una versione quadrata, centrata sul volto, circa 440 x 440 pixel in formato WebP e salvarla come `ritratto-network.webp`. La cornice rotonda è applicata dal CSS: non occorre ritagliare l'immagine in forma circolare.
3. Nel file `network-professionale.html` duplicare un elemento `<a class="network-person" ...> ... </a>` all'interno di `<div id="network-cards">` e aggiornare nome, ritratto, professione, competenze, territorio, collegamento e attributi `data-role` e `data-area`.
4. Per la fotografia usare `alt="Ritratto di Nome Cognome"`, dimensioni `width="440" height="440"`, `loading="lazy"`.
5. Il totale dei professionisti e i filtri di ruolo/territorio si aggiornano da soli tramite `network-directory.js`. Non è necessario modificare a mano le opzioni dei filtri.
6. Controllare che l'inserimento e i contenuti siano autorizzati e che per le professioni regolamentate le qualifiche siano corrette.

## Collegamenti dalla homepage

I link «Esplora i servizi» portano ora direttamente all'intestazione della rispettiva sezione di `servizi.html`. L'intestazione fissa rimane visibile e non copre il titolo grazie allo spazio riservato allo scorrimento già previsto dal foglio di stile generale.
