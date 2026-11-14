# Sinergie2srl — aggiornamento grafico e responsive (14 novembre 2026)

Questo pacchetto usa `sinergie2srl-main` come base e integra gli aggiornamenti delle pagine comuni e della navigazione di `sinergie-2-srl-main`.

- Conservata **integralmente la pagina Network in aggiornamento**, senza schede, nominativi o filtri visibili, utilizzando anche `stili/network-manutenzione.css` originale.
- Conservate le cartelle dei profili e i file specifici del primo progetto, senza eliminarli o riattivarli tramite il Network.
- Importato `logo.jpg` del secondo progetto (1600 × 400 px), proporzioni 4:1, senza deformazione.
- Aggiunto `logo-responsive.css` a tutte le pagine HTML che hanno l'intestazione per scalare il logo su desktop, tablet e smartphone.
- Mantenuto il pulsante giallo «Parliamone» nell'intestazione e i comportamenti responsive del secondo progetto.
- Mantenuta la sitemap del primo progetto, così non viene reintrodotto il Network nell'elenco sitemap.

**Importante:** i file dei singoli professionisti rimangono nell'archivio e possono ancora essere aperti con URL diretto. Se per “profili oscurati” si intende impedire anche gli accessi diretti, è necessario intervenire sulle singole pagine e sull'hosting (questa versione conserva il comportamento esistente).

## Pubblicazione
Caricare sul server **tutto il contenuto della cartella**, sostituendo i file esistenti e mantenendo cartelle e percorsi. Il pacchetto non modifica automaticamente il sito online. Dopo la pubblicazione svuotare la cache del browser e controllare desktop, tablet e smartphone.
