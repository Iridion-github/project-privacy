const articles = [
  {
    id: "0",
    glossary: ["privacy"],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro"],
    tags: ["#antiriciclaggio", "#anticorruzione", "#privacy"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: [
      {
        src: "/articoli/url-preview-img-2.png",
        position: "right",
        size: "sm",
        margin: " mt-1 mb-1 ml-2"
      },
      {
        src: "/articoli/url-preview-img-1.png",
        position: "left",
        size: "md",
        margin: " mt-1 mb-1 mr-2"
      },
      {
        src: "/articoli/url-preview-img-4.png",
        position: "center",
        size: "lg",
        margin: " mt-2 mb-2"
      }],
    ita: {
      topic: "Privacy",
      title: "Prenotazioni on line di servizi sanitari: c’è ancora molto da fare. Il rischio di essere sottoposti ad attività ispettive online.",
      subtitle: "Le recenti sanzioni applicate dalla CNIL in Francia a due medici evidenziano aspetti che potrebbero riguardare il settore sanitario italiano. ",
      content: [
        `Il significato di privacy nel tempo si &egrave; evoluto anche in relazione all'evoluzione tecnologica che dai tempi di Warren e Brandeis (fine&nbsp;XIX secolo) &egrave; intercorsa. Inizialmente riferito alla sfera della vita privata, negli ultimi decenni ha subito un'evoluzione estensiva, arrivando ad indicare il diritto al controllo sui propri&nbsp;dati personali.<sup id="cite_ref-11" class="reference"></sup>&nbsp;Quindi, il significato odierno, di&nbsp;<em>privacy</em>, comunemente, &egrave; relativo al diritto della persona di controllare che le informazioni che la riguardano vengano trattate o guardate da altri solo in caso di necessit&agrave;.La&nbsp;<em>privacy</em>&nbsp;non va confusa nemmeno con la solitudine, e questa non va confusa con l'abbandono, in quanto sussiste una profonda differenza, infatti, tra &laquo;l'esser soli&raquo;, &laquo;l'esser lasciati soli&raquo; e &laquo;l'esser lasciati in condizioni di non-autosufficienza&raquo; con&nbsp;handicap&nbsp;senza essere capaci n&eacute; di intendere n&eacute; di volere. Il termine avrebbe anche un'accezione culturale: secondo alcuni ricercatori il concetto di&nbsp;<em>privacy</em>&nbsp;distingue la cultura Anglo-americana da quella Europea occidentale, come quella Italiana, Tedesca o Francese. Tuttavia si hanno troppi punti in comune tra le due soprattutto dal punto di vista del ruolo delle informazioni personali all'interno della societ&agrave;.<sup id="cite_ref-12" class="reference"></sup>`,
        `Il diritto alla privacy non va confuso con il diritto al segreto, anch'esso finalizzato a tutelare un'area riservata della vita privata ma che per qualche motivo comprenda elementi comunque conosciuti da alcune persone: il medico, ad esempio, &egrave; sicuramente consapevole dello stato di salute del proprio paziente, ma ha il dovere di mantenere il segreto professionale sulle notizie di cui &egrave; a conoscenza.Il diritto alla privacy non &egrave; nemmeno interamente sovrapponibile al diritto alla protezione dei dati personali (cio&egrave; alla protezione da monitoraggio continuo, previsione dei comportamenti, profilazione degli individui) che nasce come corollario del diritto alla riservatezza.[13]La diffusione delle nuove tecnologie a partire dal XXI secolo ha contribuito ad un assottigliamento della barriera della privacy, ad esempio la tracciabilit&agrave; dei cellulari o la relativa facilit&agrave; a reperire gli indirizzi di posta elettronica delle persone, che pu&ograve; dar luogo, ad esempio, al fenomeno dello spamming, pubblicit&agrave; indesiderata. Anche la geolocalizzazione degli smartwatch, combinata con funzioni in questi contenute, come il cardiofrequenzimetro, pu&ograve; impattare in modo significativo sulla privacy, permettendo ad aziende di marketing di monitorare l'utente nelle sue abitudini di consumo e gusti personali attraverso tecniche di pubblicit&agrave; comportamentale, cio&egrave; una raccolta delle informazioni personali degli utenti come mezzo di marketing per proporre pubblicit&agrave; targetizzate, come evidenziato da Federprivacy nel 2015, e confermato da uno studio condotto dall'Universit&agrave; di Pisa in collaborazione con l'Universit&agrave; dell'Essex, e l'Harvard Medical School.`,
        `La digitalizzazione delle immagini contribuisce ad una continua e progressiva riduzione della riservatezza e da difficolt&agrave; nella sua tutela: condividere un'immagine o un video on-line su internet comporta la perdita di controllo sul materiale inserito. Ad esempio il sexting - condivisione di fotografie a carattere erotico prevalentemente sui social network - comporta la totale impossibilit&agrave; di nasconderla potendo essere scaricata da altri utenti e reimmessa in Rete in qualunque altro momento. Analoghi problemi sorgono allorch&eacute; vi siano video che in qualche modo siano lesivi della privacy o in qualche modo lesivi di altre persone, soprattutto se di minore et&agrave;.Il 28 gennaio &egrave; celebrata da diversi paesi nel mondo la Giornata europea della protezione dei dati personali, istituita dal Consiglio d'Europa.`
      ]
    },
    eng: {
      topic: "Privacy",
      title: "title article 1",
      subtitle: "subtitle article 1",
      content: [
        `Il significato di privacy nel tempo si &egrave; evoluto anche in relazione all'evoluzione tecnologica che dai tempi di Warren e Brandeis (fine&nbsp;XIX secolo) &egrave; intercorsa. Inizialmente riferito alla sfera della vita privata, negli ultimi decenni ha subito un'evoluzione estensiva, arrivando ad indicare il diritto al controllo sui propri&nbsp;dati personali.<sup id="cite_ref-11" class="reference"></sup>&nbsp;Quindi, il significato odierno, di&nbsp;<em>privacy</em>, comunemente, &egrave; relativo al diritto della persona di controllare che le informazioni che la riguardano vengano trattate o guardate da altri solo in caso di necessit&agrave;.La&nbsp;<em>privacy</em>&nbsp;non va confusa nemmeno con la solitudine, e questa non va confusa con l'abbandono, in quanto sussiste una profonda differenza, infatti, tra &laquo;l'esser soli&raquo;, &laquo;l'esser lasciati soli&raquo; e &laquo;l'esser lasciati in condizioni di non-autosufficienza&raquo; con&nbsp;handicap&nbsp;senza essere capaci n&eacute; di intendere n&eacute; di volere. Il termine avrebbe anche un'accezione culturale: secondo alcuni ricercatori il concetto di&nbsp;<em>privacy</em>&nbsp;distingue la cultura Anglo-americana da quella Europea occidentale, come quella Italiana, Tedesca o Francese. Tuttavia si hanno troppi punti in comune tra le due soprattutto dal punto di vista del ruolo delle informazioni personali all'interno della societ&agrave;.<sup id="cite_ref-12" class="reference"></sup>`,
        `Il diritto alla privacy non va confuso con il diritto al segreto, anch'esso finalizzato a tutelare un'area riservata della vita privata ma che per qualche motivo comprenda elementi comunque conosciuti da alcune persone: il medico, ad esempio, &egrave; sicuramente consapevole dello stato di salute del proprio paziente, ma ha il dovere di mantenere il segreto professionale sulle notizie di cui &egrave; a conoscenza.Il diritto alla privacy non &egrave; nemmeno interamente sovrapponibile al diritto alla protezione dei dati personali (cio&egrave; alla protezione da monitoraggio continuo, previsione dei comportamenti, profilazione degli individui) che nasce come corollario del diritto alla riservatezza.[13]La diffusione delle nuove tecnologie a partire dal XXI secolo ha contribuito ad un assottigliamento della barriera della privacy, ad esempio la tracciabilit&agrave; dei cellulari o la relativa facilit&agrave; a reperire gli indirizzi di posta elettronica delle persone, che pu&ograve; dar luogo, ad esempio, al fenomeno dello spamming, pubblicit&agrave; indesiderata. Anche la geolocalizzazione degli smartwatch, combinata con funzioni in questi contenute, come il cardiofrequenzimetro, pu&ograve; impattare in modo significativo sulla privacy, permettendo ad aziende di marketing di monitorare l'utente nelle sue abitudini di consumo e gusti personali attraverso tecniche di pubblicit&agrave; comportamentale, cio&egrave; una raccolta delle informazioni personali degli utenti come mezzo di marketing per proporre pubblicit&agrave; targetizzate, come evidenziato da Federprivacy nel 2015, e confermato da uno studio condotto dall'Universit&agrave; di Pisa in collaborazione con l'Universit&agrave; dell'Essex, e l'Harvard Medical School.`,
        `La digitalizzazione delle immagini contribuisce ad una continua e progressiva riduzione della riservatezza e da difficolt&agrave; nella sua tutela: condividere un'immagine o un video on-line su internet comporta la perdita di controllo sul materiale inserito. Ad esempio il sexting - condivisione di fotografie a carattere erotico prevalentemente sui social network - comporta la totale impossibilit&agrave; di nasconderla potendo essere scaricata da altri utenti e reimmessa in Rete in qualunque altro momento. Analoghi problemi sorgono allorch&eacute; vi siano video che in qualche modo siano lesivi della privacy o in qualche modo lesivi di altre persone, soprattutto se di minore et&agrave;.Il 28 gennaio &egrave; celebrata da diversi paesi nel mondo la Giornata europea della protezione dei dati personali, istituita dal Consiglio d'Europa.`
      ]
    }
  },
  {
    id: "1",
    glossary: ["dolor"],
    date: "2020-12-26",
    authors: ["Alessandro Mastropierro"],
    tags: ["#curiosità", "#antiriciclaggio"],
    previewImg: "/articoli/url-preview-img-2.png",
    images: [
      {
        src: "/articoli/imgProva1.jpg",
        position: "left",
        size: "md",
        margin: " mt-1 mb-1 mr-2"
      },
      {
        src: "/articoli/imgProva2.jpg",
        position: "center",
        size: "lg",
        margin: " mt-2 mb-2"
      },
      {
        src: "/articoli/url-preview-img-4.png",
        position: "center",
        size: "lg",
        margin: " mt-2 mb-2"
      }
    ],
    ita: {
      topic: "Privacy",
      title: "titolo articolo 2",
      subtitle: "sottotitolo articolo 2",
      content: [
        `Paragrafo 1 - dolor uno due tre quattro cinque dolor sei sette otto nove dieci dolor;
        dolor undici dodici tredici quattordici quindici dolor sedici diciassette diciotto diciannove venti dolor.
        `,
        `Paragrafo 2 - dolor uno due tre quattro cinque dolor sei sette otto nove dieci dolor;
        dolor undici dodici tredici quattordici quindici dolor sedici diciassette diciotto diciannove venti dolor.`,
        `Paragrafo 3 - dolor uno due tre quattro cinque dolor sei sette otto nove dieci dolor;
        dolor undici dodici tredici quattordici quindici dolor sedici diciassette diciotto diciannove venti dolor.`
      ]
    },
    eng: {
      topic: "Privacy",
      title: "title article 2",
      subtitle: "subtitle article 2",
      content: ["content article 2 - bla bla bla"]
    }
  },
  {
    id: "2",
    glossary: [],
    date: "2020-12-27",
    authors: ["Autore Esterno"],
    tags: ["#privacy", "#internazionale"],
    previewImg: "/articoli/url-preview-img-3.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Privacy",
      title: "titolo articolo 3",
      subtitle: "sottotitolo articolo 3",
      content: ["contenuto articolo 3 - bla bla bla"]
    },
    eng: {
      topic: "Privacy",
      title: "title article 3",
      subtitle: "subtitle article 3",
      content: ["content article 3 - bla bla bla"]
    }
  },
  {
    id: "3",
    glossary: [],
    date: "2020-12-28",
    authors: ["Autore Esterno"],
    tags: ["#antiriciclaggio", "#anticorruzione"],
    previewImg: "/articoli/url-preview-img-4.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Anticorruzione",
      title: "titolo articolo 4",
      subtitle: "sottotitolo articolo 4",
      content: ["contenuto articolo 4 - bla bla bla"]
    },
    eng: {
      topic: "Anti-money Laundering",
      title: "title article 4",
      subtitle: "subtitle article 4",
      content: ["content article 4 - bla bla bla"]
    }
  },
  {
    id: "4",
    glossary: [],
    date: "2020-12-29",
    authors: ["Autore Esterno"],
    tags: ["#internazionale", "#nazionale"],
    previewImg: "/articoli/url-preview-img-5.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Anticorruzione",
      title: "titolo articolo 5",
      subtitle: "sottotitolo articolo 5",
      content: ["contenuto articolo 5 - bla bla bla"]
    },
    eng: {
      topic: "Anti-money Laundering",
      title: "title article 5",
      subtitle: "subtitle article 5",
      content: ["content article 5 - bla bla bla"]
    }
  },
  {
    id: "5",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro"],
    tags: ["#nazionale", "#curiosità"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Anticorruzione",
      title: "titolo articolo 6",
      subtitle: "sottotitolo articolo 6",
      content: ["contenuto articolo 6 - bla bla bla"]
    },
    eng: {
      topic: "Anti-money Laundering",
      title: "title article 6",
      subtitle: "subtitle article 6",
      content: ["content article 6 - bla bla bla"]
    }
  },
  {
    id: "6",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro"],
    tags: ["#antiriciclaggio", "#internazionale"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Antiriciclaggio",
      title: "titolo articolo 7",
      subtitle: "sottotitolo articolo 7",
      content: ["contenuto articolo 7 - bla bla bla"]
    },
    eng: {
      topic: "Anti-corruption",
      title: "title article 7",
      subtitle: "subtitle article 7",
      content: ["content article 7 - bla bla bla"]
    }
  },
  {
    id: "7",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro"],
    tags: ["#anticorruzione", "#privacy"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Antiriciclaggio",
      title: "titolo articolo 8",
      subtitle: "sottotitolo articolo 8",
      content: ["contenuto articolo 8 - bla bla bla"]
    },
    eng: {
      topic: "Anti-corruption",
      title: "title article 8",
      subtitle: "subtitle article 8",
      content: ["content article 8 - bla bla bla"]
    }
  },
  {
    id: "8",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro"],
    tags: ["#antiriciclaggio", "#anticorruzione"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Antiriciclaggio",
      title: "titolo articolo 9",
      subtitle: "sottotitolo articolo 9",
      content: ["contenuto articolo 9 - bla bla bla"]
    },
    eng: {
      topic: "Anti-corruption",
      title: "title article 9",
      subtitle: "subtitle article 9",
      content: ["content article 9 - bla bla bla"]
    }
  },
  {
    id: "9",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro"],
    tags: ["#antiriciclaggio", "#internazionale"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "GDPR",
      title: "titolo articolo 10",
      subtitle: "sottotitolo articolo 10",
      content: ["contenuto articolo 10 - bla bla bla"]
    },
    eng: {
      topic: "GDPR",
      title: "title article 10",
      subtitle: "subtitle article 10",
      content: ["content article 10 - bla bla bla"]
    }
  },
  {
    id: "10",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro"],
    tags: ["#antiriciclaggio", "#anticorruzione"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "GDPR",
      title: "titolo articolo 11",
      subtitle: "sottotitolo articolo 11",
      content: ["contenuto articolo 11 - bla bla bla"]
    },
    eng: {
      topic: "GDPR",
      title: "title article 11",
      subtitle: "subtitle article 11",
      content: ["content article 11 - bla bla bla"]
    }
  },
  {
    id: "11",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro"],
    tags: ["#antiriciclaggio", "#anticorruzione"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "GDPR",
      title: "titolo articolo 12",
      subtitle: "sottotitolo articolo 12",
      content: ["contenuto articolo 12 - bla bla bla"]
    },
    eng: {
      topic: "GDPR",
      title: "title article 12",
      subtitle: "subtitle article 12",
      content: ["content article 12 - bla bla bla"]
    }
  },
  {
    id: "12",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro"],
    tags: ["#antiriciclaggio", "#internazionale"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Privacy Policy",
      title: "titolo articolo 13",
      subtitle: "sottotitolo articolo 13",
      content: ["contenuto articolo 13 - bla bla bla"]
    },
    eng: {
      topic: "Privacy Policy",
      title: "title article 13",
      subtitle: "subtitle article 13",
      content: ["content article 13 - bla bla bla"]
    }
  },
  {
    id: "13",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro"],
    tags: ["#antiriciclaggio", "#anticorruzione"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Privacy Policy",
      title: "titolo articolo 14",
      subtitle: "sottotitolo articolo 14",
      content: ["contenuto articolo 14 - bla bla bla"]
    },
    eng: {
      topic: "Privacy Policy",
      title: "title article 14",
      subtitle: "subtitle article 14",
      content: ["content article 14 - bla bla bla"]
    }
  },
  {
    id: "14",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro", "Davide Antinori"],
    tags: ["#antiriciclaggio", "#internazionale"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Privacy Policy",
      title: "titolo articolo 15",
      subtitle: "sottotitolo articolo 15",
      content: ["contenuto articolo 15 - bla bla bla"]
    },
    eng: {
      topic: "Privacy Policy",
      title: "title article 15",
      subtitle: "subtitle article 15",
      content: ["content article 15 - bla bla bla"]
    }
  },
  {
    id: "15",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro", "Alessandro Mastropierro"],
    tags: ["#privacy", "#internazionale"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Cookie Policy",
      title: "titolo articolo 16",
      subtitle: "sottotitolo articolo 16",
      content: ["contenuto articolo 16 - bla bla bla"]
    },
    eng: {
      topic: "Cookie Policy",
      title: "title article 16",
      subtitle: "subtitle article 16",
      content: ["content article 16 - bla bla bla"]
    }
  },
  {
    id: "16",
    glossary: [],
    date: "2020-12-25",
    authors: ["Gaetano Mastropierro", "Alessandro Mastropierro"],
    tags: ["#privacy", "#internazionale"],
    previewImg: "/articoli/url-preview-img-1.png",
    images: ["url-preview-img-2.png", "url-preview-img-3.png", "url-preview-img-4.png"],
    ita: {
      topic: "Cookie Policy",
      title: "titolo articolo 17",
      subtitle: "sottotitolo articolo 17",
      content: ["contenuto articolo 17 - bla bla bla"]
    },
    eng: {
      topic: "Cookie Policy",
      title: "title article 17",
      subtitle: "subtitle article 17",
      content: ["content article 17 - bla bla bla"]
    }
  }
]

export default articles