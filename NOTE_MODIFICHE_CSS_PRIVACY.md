# Interventi tecnici – 9 novembre 2026

- `privacy.html`: eliminata la seconda dichiarazione `<!DOCTYPE html>`; il testo informativo non è stato modificato.
- Stylesheet: accorpati in file di tema nella cartella `stili/`. Rimane `sinergie-base.css` condiviso quando previsto.
- Preservato l’ordine di caricamento e il contenuto originario di ogni foglio CSS (nessuna regola rimossa automaticamente, per evitare regressioni).
- Ridotte le richieste di stylesheet da 3–5 a 1–2 per pagina; aggiornati i percorsi relativi delle immagini CSS dopo lo spostamento.
- Aggiornati i riferimenti CSS di tutte le 25 pagine HTML, inclusi i profili in sottocartelle.
- Verificata la presenza dei CSS collegati, la sintassi CSS e l’unicità del DOCTYPE.

## Nota sul grado di ottimizzazione
L'accorpamento elimina la frammentazione dei file e mantiene la cascata originale; alcune regole potenzialmente ridondanti restano volutamente presenti nei nuovi bundle. Una deduplicazione selettiva dei selettori richiede confronto visivo delle pagine a più dimensioni. Non sono stati effettuati test browser o server di produzione.
