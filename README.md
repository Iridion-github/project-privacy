## Checkpoint
- Iniziati advancedSearch client e backend. 
- Archivio base funzionante al 100%. Cominciare a lavorare sull'algoritmo di filtro dei documenti (come voleva Luigi, più simile possibile a dejure.it)


## Known Issues
- Dopo la lettura archivi, viene stampato in bash quest'errore non bloccante, indagare: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client at ServerResponse.setHeader (_http_outgoing.js:518:11)
- Assicurarsi (si sta sperimentando con currentLength e prevLength) che le promise risolvano o rejectino in qualsiasi caso!
- Questa ricerca non trova il file: "Dec. (UE) del Consiglio del 18 gennaio 2016, n. 2016/77 (G.U. 23 gennaio 2016, n. L 16). Conferma la posizione adottata a nome dell’Unione europea in sede di 10a conferenza ministeriale dell’Organizzazione mondiale del commercio con riguardo alle questioni della concorrenza all’esportazione e dello sviluppo." Ed abbiamo beccato il problema: ...(G.U. 23 gennaio 2016, n. L 16).[QUI] Conferma la posizione adottata... => Evidentemente il docx elabora quello spazio in modo particolare (non ho ancora capito in cosa viene convertito di preciso), quindi in caso di ricerca di frasi molto lunghe, andranno specificate ben più accortezze nell'algoritmo.


## Note
- [Domande] Attualmente la breadcrumbs bar appare solo se ci si trova in un articolo/recensione, chiedere se preferisce che sia presente anche direttamente nella sezione esterna di articoli e reviews.
- [Style] Al signor Gaetano piace https://www.altalex.com/, emularne parzialmente lo stile.
- [Archive] Avvicinarsi il più possibile al funzionamento di https://dejure.it/, sia per stile che per filtri di ricerca.
