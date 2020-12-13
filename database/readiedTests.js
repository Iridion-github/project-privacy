const tests = [
  {
    title: "TEST N°1 DI VERIFICA DELL’APPRENDIMENTO",
    subtitle: "(RISPOSTA MULTIPLA, SCELTA SINGOLA)",
    multipleAnswer: false,
    pointsSystem: false,
    instructions: "gli item elencati di seguito prevedono una sola risposta esatta, il test non è valutativo ma ha come obiettivo primario la verifica dell’apprendimento ai fini del proseguimento del percorso formativo identificato.",
    timeLimit: 900000,
    questions: [
      {
        text: "La norma in vigore dal 25 maggio 2018, è identificata come:",
        answers: [
          {
            text: "D.Lgs. 81/2008",
            selected: false,
            value: false
          },
          {
            text: "Regolamento N°679/2016",
            selected: false,
            value: true
          },
          {
            text: "D. Lgs. 196/2003",
            selected: false,
            value: false
          },
          {
            text: "D.lgs N°675/96",
            selected: false,
            value: false
          }
        ]
      },
      {
        text: "La nuova normativa europea in materia di protezione dei dati si applica a:",
        answers: [
          {
            text: "Solo alle aziende italiane che trattano dati di cittadini europei",
            selected: false,
            value: false
          },
          {
            text: "Anche alle aziende extraeuropee che propongono prodotti e servizi a cittadini europei",
            selected: false,
            value: true
          },
          {
            text: "Solo alle aziende europee che trattano dati di aziende europee",
            selected: false,
            value: false
          },
          {
            text: "Solo alle aziende europee che trattano dati di cittadini europei e cittadini non europei",
            selected: false,
            value: false
          }
        ]
      },
      {
        text: "La normativa europea in ambito di protezione dei dati si applica a:",
        answers: [
          {
            text: "Anche ai dati per l’esercizio di attività a carattere personale o domestico",
            selected: false,
            value: false
          },
          {
            text: "A trattamenti interamente o parzialmente automatizzati di dati personali e al trattamento non automatizzato di dati personali contenuti in un archivio",
            selected: false,
            value: true
          },
          {
            text: "A trattamenti interamente o parzialmente automatizzati di dati personali",
            selected: false,
            value: false
          },
          {
            text: "Solo al trattamento automatizzato dei dati",
            selected: false,
            value: false
          }
        ]
      },
      {
        text: "Definizione di “dato personale” (indicare più risposte esatte):",
        answers: [
          {
            text: "Un’immagine o un video di una persona",
            selected: false,
            value: false
          },
          {
            text: "Un audio di una persona",
            selected: false,
            value: false
          },
          {
            text: "I dati trattati da un Titolare appartenenti ad interessati non identificabili dal Titolare, ma identificabili solo da altri soggetti.",
            selected: false,
            value: false
          },
          {
            text: "L’identificativo on line (IP) di un pc",
            selected: false,
            value: false
          },
          {
            text: "I dati del GPS di un guidatore di taxi",
            selected: false,
            value: false
          },
          {
            text: "Il nickname in un forum",
            selected: false,
            value: false
          },
          {
            text: "I dati di una persona identificabile in modo indiretto",
            selected: false,
            value: false
          },
          {
            text: "I dati di valutazione di un individuo stilati da un’altra persona",
            selected: false,
            value: false
          },
          {
            text: "Tutti i precedenti",
            selected: false,
            value: true
          }
        ]
      },
      {
        text: "Viene identificato come «dato sensibile»:",
        answers: [
          {
            text: "Il numero di cellulare",
            selected: false,
            value: false
          },
          {
            text: "Lo stipendio percepito",
            selected: false,
            value: false
          },
          {
            text: "La propria inclinazione sessuale",
            selected: false,
            value: true
          },
          {
            text: "Tutti quelli sopra citati",
            selected: false,
            value: false
          }
        ]
      },
      {
        text: "Tra i seguenti, sono inoltre da considerarsi «dati sensibili»:",
        answers: [
          {
            text: "Il nome ed il cognome da sposato/a",
            selected: false,
            value: false
          },
          {
            text: "Il numero di telefono fisso",
            selected: false,
            value: false
          },
          {
            text: "La propria password",
            selected: false,
            value: false
          },
          {
            text: "Nessuna di quelle sopra",
            selected: false,
            value: true
          }
        ]
      },
      {
        text: "Cosa d’intende per pseudonimizzazione?",
        answers: [
          {
            text: "Il processo con cui i dati trattati non possano più essere attribuiti a un interessato specifico senza l'utilizzo di informazioni aggiuntive, a condizione che tali informazioni aggiuntive siano conservate separatamente e soggette a misure tecniche e organizzative.",
            selected: false,
            value: true
          },
          {
            text: "Il processo con cui i dati trattati non possano più essere attribuiti a un interessato specifico perché sono resi anonimi attraverso delle particolari tecniche informatiche sicure che impediscono la ricostruzione dell’archivio di base.",
            selected: false,
            value: false
          },
          {
            text: "Il processo con cui i dati trattati non possano più essere attribuiti a un interessato specifico perché sono resi anonimi attraverso delle particolari tecniche informatiche o procedure organizzative.",
            selected: false,
            value: false
          },
          {
            text: "Nessuna delle precedenti.",
            selected: false,
            value: false
          }
        ]
      },
      {
        text: "Indicare quale dei seguenti non è da considerare un “trattamento di dati”?",
        answers: [
          {
            text: "L’adattamento di dati personali",
            selected: false,
            value: false
          },
          {
            text: "La consultazione di dati personali",
            selected: false,
            value: false
          },
          {
            text: "Il raffronto di dati personali",
            selected: false,
            value: false
          },
          {
            text: "L’interconnessione di dati personali",
            selected: false,
            value: false
          },
          {
            text: "L’estrazione di dati personali",
            selected: false,
            value: false
          },
          {
            text: "La distruzione di dati personali",
            selected: false,
            value: false
          },
          {
            text: "Nessuna delle precedenti",
            selected: false,
            value: true
          }
        ]
      },
      {
        text: "Una volta data ottenuto in maniera idonea ed adeguata il consenso al trattamento dei suoi dati:",
        answers: [
          {
            text: "Posso utilizzare i dati dell’interessato anche per altre finalità.",
            selected: false,
            value: false
          },
          {
            text: "Posso utilizzare i dati dell’interessato solo per finalità simili a quelle indicate nell’informativa anche se nella stessa non sono esplicitamente indicate. Non necessito di un nuovo consenso.",
            selected: false,
            value: false
          },
          {
            text: "Non posso utilizzare i dati dell’interessato per altre finalità, nemmeno se ottengo un nuovo consenso (per il principio della Privacy by design previsto dal Regolamento 2016/679)",
            selected: false,
            value: false
          },
          {
            text: "Posso utilizzare i dati dell’interessato, senza ulteriore consenso, solo per finalità di archiviazione nel pubblico interesse o per finalità statistiche o di ricerca scientifica.",
            selected: false,
            value: true
          }
        ]
      },
      {
        text: "La minimizzazione prevede che:",
        answers: [
          {
            text: "I dati cartacei siano conservati in tanti archivi di piccole dimensioni (dimensioni minime) piuttosto che in un unico archivio generale che se violato determina la perdita di tutti i dati.",
            selected: false,
            value: false
          },
          {
            text: "Di evitare che vi sia l’identificabilità dell’interessato nel caso in cui il trattamento non lo richieda raccogliendo solo quei dati che sono strettamente necessari al trattamento.",
            selected: false,
            value: true
          },
          {
            text: "Comunicare i dati personali trattati a poche persone (“al minimo dei lavoratori necessari per l’esecuzione del trattamento”) così da diminuire la probabilità del rischio di diffusione dei dati.",
            selected: false,
            value: false
          },
          {
            text: "Permettere l’accesso ai dati digitali a pochi account con il massimo dei privilegi.",
            selected: false,
            value: false
          }
        ]
      },
      {
        text: "I dati vanno conservati:",
        answers: [
          {
            text: "Solo per il tempo strettamente necessario per le finalità del trattamento.",
            selected: false,
            value: true
          },
          {
            text: "Al massimo per 10 anni, poi è necessario un nuovo consenso esplicito",
            selected: false,
            value: false
          },
          {
            text: "I dati personali senza limiti, i dati sensibili al massimo per 5 anni",
            selected: false,
            value: false
          },
          {
            text: "Al massimo per 5 anni, poi è necessario un nuovo consenso esplicito",
            selected: false,
            value: false
          }
        ]
      },
      {
        text: "Il Titolare del trattamento è:",
        answers: [
          {
            text: "Il soggetto che determina finalità e mezzi di trattamento ed il profilo della sicurezza",
            selected: false,
            value: true
          },
          {
            text: "Il soggetto che determina le finalità del trattamento",
            selected: false,
            value: false
          },
          {
            text: "Il soggetto che raccoglie i dati dell’interessato presso l’interessato o il altro modo",
            selected: false,
            value: false
          },
          {
            text: "D. Il soggetto che determina i mezzi del trattamento e le misure di sicurezza",
            selected: false,
            value: false
          }
        ]
      },
      {
        text: "Chi è, secondo il Regolamento, il «responsabile» al trattamento dei dati:. Il Responsabile del trattamento può nominare:",
        answers: [
          {
            text: "Il dipendente, o tirocinante o volontario, dell’ente che tratta i dati ed è responsabile di quello che succede ai dati stessi.",
            selected: false,
            value: false
          },
          {
            text: "Sempre e solo il Rappresentante Legale dell’Ente, responsabile delle misure di sicurezza.",
            selected: false,
            value: false
          },
          {
            text: "Una persona fisica o una persona giuridica a cui spettano le decisioni in ordine alle finalità, alle modalità e agli strumenti utilizzati, ivi compreso il profilo della sicurezza",
            selected: false,
            value: false
          },
          {
            text: "Una persona fisica o una persona giuridica preposto dal titolare al trattamento dei dati.",
            selected: false,
            value: true
          }
        ]
      },
      {
        text: "Il Responsabile del trattamento può nominare:",
        answers: [
          {
            text: "altri responsabili in modo indipendente a patto che sia formalizzato per iscritto",
            selected: false,
            value: false
          },
          {
            text: "altri Responsabili in forza di un’autorizzazione del Titolare ma deve sempre comunicare al Titolare i nominativi dei subresponsabili",
            selected: false,
            value: true
          },
          {
            text: "altri Responsabili solo se autorizzato in modo specifico, per ogni sub responsabile, dal Titolare del trattamento",
            selected: false,
            value: false
          },
          {
            text: "altri Responsabili definendo finalità diverse da quelle indicate dal Titolare",
            selected: false,
            value: false
          }
        ]
      },
      {
        text: "Il Data Protection Officer o DPO o Responsabile della Protezione dei dati deve:",
        answers: [
          {
            text: "Effettuare delle visite ispettive, su mandato del Garante della Privacy, per verificare come avvengono i trattamenti dei dati.",
            selected: false,
            value: false
          },
          {
            text: "Informare e fornire consulenza al Titolare del trattamento e sorvegliare sull’osservanza del Regolamento da parte del Titolare",
            selected: false,
            value: true
          },
          {
            text: "Implementare le misure informatiche richieste dal Titolare per garantire la sicurezza dei sistemi informativi",
            selected: false,
            value: false
          },
          {
            text: "D. Gestire i dati che riceve dal Titolare e implementare le misure di sicurezza richieste dallo stesso, perseguendo le finalità definite dal Titolare e scegliendo i mezzi per perseguirle.",
            selected: false,
            value: false
          }
        ]
      }
    ]
  },
  {
    title: "TEST DEBUGGING",
    subtitle: "(only for debugging)",
    multipleAnswer: false,
    pointsSystem: false,
    instructions: "fake instructions",
    timeLimit: 9000000,
    questions: [
      {
        text: "Fake question 1: two right answers",
        answers: [
          {
            text: "wrong answer",
            selected: false,
            value: false,
            points: 0
          },
          {
            text: "right answer A",
            selected: false,
            value: true,
            points: 1
          },
          {
            text: "wrong answer",
            selected: false,
            value: false,
            points: 0
          },
          {
            text: "right answer B",
            selected: false,
            value: false,
            points: 1
          }
        ]
      },
      {
        text: "Fake question 2: three right answers.",
        answers: [
          {
            text: "wrong answer",
            selected: false,
            value: false,
            points: 0
          },
          {
            text: "right answer A",
            selected: false,
            value: true,
            points: 1
          },
          {
            text: "right answer B",
            selected: false,
            value: true,
            points: 1
          },
          {
            text: "right answer C (+)",
            selected: false,
            value: true,
            points: 2
          }
        ]
      },
      {
        text: "Fake question 3: one right asnwer",
        answers: [
          {
            text: "wrong answer",
            selected: false,
            value: false
          },
          {
            text: "right answer",
            selected: false,
            value: true,
            points: 2
          },
          {
            text: "wrong answer",
            selected: false,
            value: false
          },
          {
            text: "wrong answer",
            selected: false,
            value: false
          }
        ]
      }
    ]
  }
]

export default tests