## Checkpoint
- CreazioneComponenti | ultimo creato: DateIntervalInput ---> ATTENZIONE: MANCA LA VERSIONE YEAR-ONLY
- AdvancedSearch frontend: Inserire tutti i possibili dati del filtro in filtersState. Partendo da bySubject.byZoneGeog. Memo: Le Fonti saranno i tag f3-style del signor Luigi, ma essendo moltissimi e suddivisi a loro volta in categoria, sarà necessario gestire bene l'ordinamento e l'assetto. Forse l'approccio migliore sarebbe avere delle Headings che se clickate mostrano la lista di possibili checkboxes. Per esempio heading clickabile "Zona Geografica", che poi mostra regioni, etc.


## Known Issues
- Questa ricerca non trova il file: "Dec. (UE) del Consiglio del 18 gennaio 2016, n. 2016/77 (G.U. 23 gennaio 2016, n. L 16). Conferma la posizione adottata a nome dell’Unione europea in sede di 10a conferenza ministeriale dell’Organizzazione mondiale del commercio con riguardo alle questioni della concorrenza all’esportazione e dello sviluppo." Ed abbiamo beccato il problema: ...(G.U. 23 gennaio 2016, n. L 16).[QUI] Conferma la posizione adottata... => Evidentemente il docx elabora quello spazio in modo particolare (non ho ancora capito in cosa viene convertito di preciso), quindi in caso di ricerca di frasi molto lunghe, andranno specificate ben più accortezze nell'algoritmo.


## Note
- [AggiunteUtili] Tutti i componenti calendario dovrebbero essere dotati di reset button
- [Domande] Attualmente la breadcrumbs bar appare solo se ci si trova in un articolo/recensione, chiedere se preferisce che sia presente anche direttamente nella sezione esterna di articoli e reviews.
- [Style] Al signor Gaetano piace https://www.altalex.com/, emularne parzialmente lo stile.
- [Archive] Avvicinarsi il più possibile al funzionamento di https://dejure.it/, sia per stile che per filtri di ricerca.
