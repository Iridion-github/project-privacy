## [ToDo]
- [Registration/Login/Logout] Progressing with Login, Users and Registration. 
- [advancedSearch] Riuscire a leggere le text decorations per poter fare pin-point dei tags e delle diciture.

## [Checkpoint]
- [registrazione] everywhere there's stuff to check
- [findFormattedText] Solito problema del "codice non finisce del tutto il suo lavoro prima di ritornare al frontend". Probabilmente ha a che fare col fatto che si sta lavorando all'interno di un filterLoop che inizia a line 15 di setFilteredDocs. Come al solito parseFileItems fa lo stronzo e anche basandosi su https://stackoverflow.com/questions/62768038/await-not-efficient-in-asynchronous-function non si risolve, perchè i console.log mostrano che quelli DOPO il processo avvengono dopo che il frontend ha già avuto indietro i dati.

## [Deployment]
- Vercel: https://vercel.com/iridion-github/project-privacy

## [Richieste/Domande_per_Luigi]
- [FiltroPerProvvedimento] Il tipo di provvedimento (vigente, testo in GU) come si differenzia ?

## [Richieste/Domande_per_Gaetano]
- Attualmente la breadcrumbs bar appare solo se ci si trova in un articolo/recensione, chiedere se preferisce che sia presente anche direttamente nella sezione esterna di articoli e reviews.
## [Note/Memo]
- Attenzione, ho disattivato la creazione del mappedArchive per assicurarmi che lo script lo creasse sempre (necessario per convertire i doc in docx);
## [Known_Issues/Bugs]
- [Archive] La CONVERSIONE dei files in archivio è incredibilmente lenta. Si parla di 5->15 minuti di attesa. Potrebbe rendere impossibile il progetto.
- [Archive] In filterByAutorità la selezione di una regione non limita in nessun modo la selezione della città, e viceversa. E' stupido.

## Implementazioni Possibili/Utili e Migliorie



## UTILS
[TAGS]
.IND SAGEN,IMGEN,ORGEN,LAV

[PROVV]
L’utilizzo del corpo umano o dei tessuti post mortem è informato ai pri

[GIURIS]
Con nota del 29 maggio 2018, la sig.ra XX ha presentato un ricorso