## [ToDo]
- [Registration/Login/Logout] Progressing with Login, Users and Registration. 
- [advancedSearch] Riuscire a leggere le text decorations per poter fare pin-point dei tags e delle diciture.

## [Checkpoint]
- [registrazione] everywhere there's stuff to check
- [findFormattedText] L'ultima volta è stata rifattorizzata ancora advancedSearch, è stata resa più semplice nello stato. Rimane il solito problema dell'asincronia non rispettata quando si fa uso di PdfReader.parseFilteItems. Questi logs appaiono dopo il ritorno al frontend:
    >>> exit case - state.parseFileItems.parsedItems.length: 0
    >>> exit case - state.parseFileItems.parsedItems.length: 14
    Almeno mi sono assicurato che il filtro funzioni correttamente. Bisogna trovare un modo elegante di impedire che vada avanti il flusso senza i terribili while, sempre che esista.


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