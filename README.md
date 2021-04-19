## Checkpoint
- Stiamo inserendo le liste delle voci selezionabili in modo hard-coded e non su db. Non sono ancora presenti gli onchange ed un corrispettivo stato reale di advancedSearch.


-------------------- [PANNELLI OK] --------------------
- TESTUALE
- DATA

-------------------- [PANNELLI DA CREARE] --------------------
- CODICI: {
  dati_necessari: "lista completa dei codici",
  inputs: {
    art.: "number",
    sottonumero: "multiselect",
    data: "date input"
 }
- LEGGI: {
  dati_necessari: "lista completa dei tipi di legge",
  inputs: {
    legge: "select",
    data: "date input",
    numero: "number",
    articolo: "number",
    sottonumero: "multiselect",
    provincia: "select",
    regione: "select",
    città: "select"
 }
- SCEGLI TESTO UNICO
- PROVVEDIMENTO: {
  dati_necessari: "lista provvedimenti abbastanza lunga",
  inputs: {
   scegli_provvedimento: "select",
   specifica_tra_vigente_e_testo_gu: "select che sostituisce 2 checkbox" <--- [ vigente, testo_g.u.(???)],
   data: "date input",
   numero: "number",
   articolo: "number",
   sottonumero: "multiselect",
   allegato: "text input",
   categoria_misteriosa: "select"
  }
- GAZZETTA UFFICIALE: {
    dati_necessari: null,
    inputs: {
    data: "date input",
    numero: "number",
  }
}
- CERCA IN TITOLO DOCUMENTO / DOCUMENTO: {
  dati_necessari: null,
  inputs: {
    noteOdottrina: "select"
  }
}
- AUTORE: {
  dati_necessari: "lista autori",
  inputs: {
    autore/i: "autosuggest"
  }
}
- LISTA FORMULARI: {
  dati_necessari: "lista formulari",
  inputs: {
    formulario: "select"
  }
}


-------------------- [PANNELLI DA MODIFICARE] --------------------
- AUTORITÀ: {
  dati_necessari: "lista completa di autorità"
 }
 inputs: {
    sezione: "select",
    città: "text-input/autosuggest",
    data: "date input"
 }
- CLASSIFICAZIONE: {
  inputs: {
    multiselect: "lista completa dei tag nuovi"
  }
}


-------------------- [PANNELLI DA VALUTARE] --------------------
- CATEGORIA: Molto probabilmente verrebbe inglobato da Autorità, vedere alla fine se vale la pena inserirlo.
- TIPO FILE (extension):  Molto probabilmente risulterebbe inutile, vedere alla fine se vale la pena inserirlo (poichè già implementato).


---------------------------------[ COMPONENTI NECESSARI ]---------------------------------
- TextInput [O]
- Select [O]
- MultiSelect [O]
- NumberInput [O]
- DateInput (+ yearOnly) [O]
- DateIntervalInput (+ yearOnly) [O]
- CustomAutosuggest [O]


-------------------------------------- [STRUTTURA del MENU FINALE di RICERCA AVANZATA] --------------------------------------

[TESTUALE | Menù select con 3 options] (24/03/2021) (tabs: tutte)
- Una parola almeno
- Tutte le parole
- Tutta la frase

[DATA | Menù di tipo Date con una sua row] (24/03/2021) (tabs: GIURISPRUDENZA, NOTE & DOTTRINA)

[AUTORITÀ | Menù multiplo con sottocampi, vedasi Dejure] (24/03/2021) (tabs: GIURISPRUDENZA)

[CODICI | Menù multiplo con sottocampi, vedasi Dejure ] ===> (24/03/2021) (tabs: GIURISPRUDENZA, FORMULARI)
- Una delle ultime cose da fare: bisogna sapere quali codici esistono effettivamente e con tag a loro dedicato, all'interno dei files dell'archivio di Luigi.

[LEGGI | Menù multiplo con sottocampi, vedasi Dejure ] ===> (24/03/2021) (tabs: GIURISPRUDENZA, FORMULARI)

[CLASSIFICAZIONE | Menù multiplo con moltissime opzioni in ordine alfabetico (copiare html da Dejure)] ===> (24/03/2021) (tabs: tutte)
- Una delle ultime cose da fare: bisogna sapere quali tags esistono effettivamente all'interno dei files dell'archivio di Luigi.

[SCEGLI TESTO UNICO (o simil nome) | campo select che starta da null. Rappresenta una displina normativa a parte. Da approfondire assieme a Luigi) ===> (24/03/2021) (tabs: GIURISPRUDENZA (attenzione, forse tab sbagliato, chiedere!))

[PROVVEDIMENTO | Menù multiplo con sottocampi, vedasi Dejure ] ===> (24/03/2021) (tabs: NORMATIVA)

[GAZZETTA UFFICIALE | Menù multiplo con sottocampi, vedasi Dejure ] ===> (24/03/2021) (tabs: NORMATIVA)

[CERCA IN TITOLO DOCUMENTO / DOCUMENTO | booleano ] ===> (24/03/2021) (tabs: NOTE & DOTTRINA)

[AUTORE | campo testuale (renderlo autosuggest) ] ===> (24/03/2021) (tabs: NOTE & DOTTRINA)

[LISTA FORMULARI | semplice select ] ===> (24/03/2021) (tabs: FORMULARI)

______________________________________________________________________________________
_________________________________[TAB: GIURISPRUDENZA]_________________________________

DATA
AUTORITÀ
CODICI
LEGGI
CLASSIFICAZIONE
SCEGLI TESTO UNICO

______________________________________________________________________________________


_________________________________[TAB: NORMATIVA]_________________________________

DATA
PROVVEDIMENTO
GAZZETTA UFFICIALE
CLASSIFICAZIONE

______________________________________________________________________________________


________________________________[TAB: NOTE & DOTTRINA]________________________________

CERCA IN TITOLO DOCUMENTO / DOCUMENTO
DATA
AUTORE
CLASSIFICAZIONE

______________________________________________________________________________________


___________________________________[TAB: FORMULARI]___________________________________

CERCA IN TITOLO FORMULARIO / FORMULARIO
LISTA FORMULARI
CODICI
LEGGI
CLASSIFICAZIONE

______________________________________________________________________________________




-------------------------------------- [Dati filtri in elaborazione] --------------------------------------

I seguenti tag li abbiamo estratti manualmente dai 20-30 files datici per fare le prove.
Se si ottenessero TUTTI, o quasi, i tag dei documenti, si potrebbe emulare molto di più Dejure.
Per adesso abbiamo le mani legate, ed utilizzeremo i tag offertici dal sistema F3 di Luigi.

[DIRETTIVA PRESIDENTE CONSIGLIO MINISTRI]
- Titolo: Dr20-02-2007
- Inizio: Dir. P.C.M. 20 febbraio 2007 (G.U. 15 maggio 2007, n. 111). Interscambio dei dati tra le pubbliche amministrazioni e pubblicità dell’attività negoziale. (Direttiva n. 2).

[LIBRO]
- Titolo: MassimarioGarante 2015-2016
- Inizio: Massimario 
- Data: 2015-2016

[NOTA AGENZIA ENTRATE]
- Titolo:
- Inizio: Nota Ag. Entrate – 5 agosto 2004, n. 126747 - Qualificazione delle attività delle società di factoring. Natura finanziaria. Operazioni di finanziamento.

[ORDINANZA MINISTERIALE]
- Titolo:
- Inizio: O.M. 20 novembre 1998 (G.U. 25 novembre 1998, n. 276). Proseguimento del «Multitrattamento Di Bella».

[ORDINANZA]
- Titolo: Nota Ag. Entrate 126747-2004
- Inizio: Ordinanza ingiunzione nei confronti di Istituto Nazionale della Previdenza Sociale-Direzione Provinciale di Brescia - 
- Data: 2 luglio 2020 [9445550]

[ORDINANZA PRESIDENTE CONSIGLIO MINISTRI]
- Titolo: Ord.P.C.M.12-03-2009
- Inizio: Ord.P.C.M. 12 marzo 2009, n. 3747 (G.U. 21 marzo 2009, n. 67). Interventi urgenti di protezione civile diretti a fronteggiare la grave situazione di pericolo in atto nell’area archeologica di Roma e provincia.

[PARERE]
- Titolo: Par. Garante privacy su una istanza di accesso civico (2-11-2017)
- Inizio: Parere su una istanza di accesso civico - 2 novembre 2017

[PROVVEDIMENTO]
- Titolo: Provv. Anac 11-10-2017.2
- Inizio: Provv. Anac 11 ottobre 2017 (G.U. 7 novembre 2017, n. 260). Aggiornamento al decreto legislativo 19 aprile 2017, n. 56 delle linee guida n. 6, di attuazione del decreto legislativo 18 aprile 2016, n. 50 recanti: «Indicazione dei mezzi di prova adeguati e delle carenze nell’esecuzione di un precedente contratto di appalto che possano considerarsi significative per la dimostrazione delle circostanze di esclusione di cui all’art. 80, comma 5, lett. c) del Codice».

[RACCOMANDAZIONE DELLA COMMISSIONE]
- Titolo: Racc. 310-2001
- Inizio: Racc. della Commissione, del 4 aprile 2001, n. 2001/310/CE (G.U. 19 aprile 2001, L 109). Principi applicabili agli organi extragiudiziali che partecipano alla risoluzione consensuale delle controversie in materia di consumo.

[RACCOMANDAZIONE UNIONE EUROPEA]
- Titolo: Racc. UE 13-9-1990
- Inizio: CONSIGLIO D’EUROPA
RACCOMANDAZIONE N° R (90) 19
DEL COMITATO DEI MINISTRI AGLI STATI MEMBRI
SULLA PROTEZIONE DEI DATI PERSONALI
UTILIZZATI A FINI DI PAGAMENTO
E DI ALTRE OPERAZIONI CONNESSE
(adottata dal Comitato dei Ministri il 13 settembre 1990,
nel corso della 443a riunione dei Delegati dei Ministri)

[REGOLAMENTO ANAC]
- Titolo: Reg. Anac 1-3-2018
- Inizio: Reg. Anac 1 marzo 2018 (G.U. 6 aprile 2018, n. 80). Regolamento concernente l’accessibilità dei dati raccolti nella Banca Dati Nazionale dei Contratti Pubblici.

[REGOLAMENTO AUTORITA']
- Titolo: Reg. Autorità LL.PP. 21-12-2011
- Inizio: Reg. Autorità LL.PP. 21 dicembre 2011 (G.U. 18 gennaio 2012, n. 14). Regolamento in materia di procedimento previsto dall’articolo 75 del D.P.R. n. 207/2010.

[REGOLAMENTO GARANTE]
- Titolo: Reg. Garante 2-2019
- Inizio: Deliberazione del 4 aprile 2019 - Regolamento n. 2/2019,
concernente l'individuazione dei termini e delle unità
organizzative responsabili dei procedimenti amministrativi
presso il Garante per la protezione dei dati personali
[9107640]


## LISTE e TAGS (24/03/2021: Luigi ci ha confessato molti dei tags sono vecchi, e mancano le voci contenitrici) 

[___FILTRA_PER_AUTORITA'___](copiata da Dejure)
  - Corte Costituzionale
  - Cassazione civile
  - Cassazione penale
  - Consiglio di Stato
  - T.A.R.
  - Tribunale
  - Arbitro bancario finanziario
  - Aut. en. elettrica e gas
  - Aut. protez. dati person.
  - Collegio arbitrale
  - Collegio centr. garanzia elettorale
  - Comm. appello F.I.G.C.
  - Commissione centrale sanità
  - Commissione elettorale
  - Comm. gar. l. sciopero SS.PP.
  - Comm. ricorsi brevetti
  - Comm. Trib I grado Trentino Alto Adige
  - Comm. Trib II grado Trentino Alto Adige
  - Comm. trib. centr.
  - Comm. trib. prov.le
  - Comm. trib. prov-distr.
  - Comm. trib. reg.
  - Commissione usi civici
  - Cons. giust. amm. Sicilia
  - Cons. Naz.le Forense
  - Cons. Naz.le Geometri
  - Cons. Sup. Magistratura
  - Consiglio di Stato ad. gen.
  - Consiglio di Stato ad. plen.
  - Consiglio di Stato atti norm.
  - Consiglio di Stato comm. spec.
  - Corte appello
  - Corte assise
  - Corte assise appello
  - Corte Conti
  - Corte europea diritti dell'uomo
  - Corte di giustizia UE
  - Corte int.le giustizia
  - Corte militare appello
  - Corte penale internazionale
  - Garante concorr. e mercato
  - Garante editoria
  - Giudice conciliatore
  - Giudice di pace
  - Giudice istruttore
  - Giudice tutelare
  - Giurì cod. aut. pubb.ria
  - Lodo arbitrale
  - Ministero del lavoro
  - Ministero delle finanze
  - Prefettura
  - Pretura
  - Procura della Repubblica
  - Procura gen. Corte appello
  - Sacra Rota
  - Tribunale della funzione pubblica UE
  - Tribunale I grado UE
  - Tribunale minorenni
  - Tribunale regionale delle acque
  - Tribunale regionale Canonico
  - Tribunale superiore delle acque
  - Tribunale superiore militare
  - Ufficio centrale referendum
  - Ufficio europeo brevetti
  - Vicariato Urbe

[___FILTRA_PER_CODICE___](copiata da Dejure perchè ci sfuggiva cosa intendesse Luigi con "LISTA GIÀ FORNITA")
  - Codice Civile
  - Codice di Procedura Civile
  - Codice Penale
  - Codice di Procedura Penale
  - Codice della Navigazione
  - Costituzione della Repubblica
  - Codice Penale Militare di Guerra
  - Codice Penale Militare di Pace
  - Disp. Att. Codice Procedura Penale
  - Disp. Att. Trans. Codice Civile
  - Disp. Att. Trans. Codice Procedura Civile
  - Disp. Coord. Trans. Att. Codici Penali Militari
  - Disp. Coord. Trans. Codice Penale
  - Disposizioni finali della Costituzione
  - Disposizioni sulla legge in generale (Preleggi)
  - Regolamento Codice della Navigazione
  - Regolamento Codice Procedura Penale
  - Regolamento per la navigazione interna

  
[___FILTRA_PER_LEGGE___](copiata da Dejure)
  - Circolari ministeriali
  - Contratti collettivi
  - Decreti ministeriali
  - Leggi dello Stato
  - Leggi provinciali
  - Leggi regionali
  - Provvedimenti CE
  - Trattati internazionali

[___FILTRA_PER_PROVVEDIMENTO___](copiata da Dejure)
  - Legge
  - Decreto Legge
  - Decreto legislativo
  - Decreto del Presidente della Repubblica
  - Decreto ministeriale
  - Accordo
  - Autorita' per la vigilanza sui lavori pubblici
  - Avviso
  - Azienda di stato per interventi nel mercato agricolo
  - Bando
  - Camera dei Deputati
  - Comitato interm. Politica Industriale
  - Comitato interm. Prezzi
  - Comitato interm. Programmazione Economica
  - Comitato interm. Programmazione Economica e Trasporti
  - Commissione Nazionale per la Societa'  e la Borsa
  - Comunicato della Presidenza Consiglio dei Ministri
  - Comunicazione
  - Corte Suprema di Cassazione
  - Costituzione della Repubblica italiana
  - Decreto
  - Decreto Alto Commissario Alimentazione
  - Decreto Alto Commissario Igiene e Sanita' pubblica
  - Decreto del Capo del Governo
  - Decreto del Capo provvisorio dello Stato
  - Decreto del Commissario
  - Decreto del Duce
  - Decreto del Presidente del Consiglio dei Ministri
  - Decreto del Presidente del Senato della Repubblica
  - Decreto del Presidente della Camera dei Deputati
  - Decreto dell'Assessore
  - Decreto interministeriale
  - Decreto Legge del Capo provvisorio dello Stato
  - Decreto Legge luogotenenziale
  - Decreto legislativo del Capo provvisorio dello Stato
  - Decreto legislativo del Presidente del Consiglio
  - Decreto legislativo luogotenenziale
  - Decreto luogotenenziale
  - Delibera del Senato della Repubblica
  - Delibera della Camera dei Deputati
  - Deliberazione
  - Deliberazione della Corte costituzionale
  - Determinazione
  - Direttiva del Presidente del Consiglio dei Ministri
  - Direttiva ministeriale
  - Disposizione
  - Documento
  - Garante per i dati personali
  - Garante per l'antitrust
  - Garante per le telecomunicazioni
  - Garante per l'editoria
  - Garante per l'energia elettrica e il gas
  - Istituto centrale di statistica
  - Legge costituzionale
  - Ministero degli affari esteri
  - Ministero dei trasporti
  - Ministero del lavoro e della previdenza sociale
  - Ministero del tesoro
  - Ministero della protezione civile
  - Ministero della sanita'
  - Ministero dell'agricoltura
  - Ministero dell'industria commercio e artigianato
  - Ordinanza
  - Ordinanza Alto Commissario Igiene e Sanita' pubblica
  - Ordinanza del Presidente del Consiglio dei Ministri
  - Ordinanza ministeriale
  - Provvedimento
  - Regio decreto
  - Regio Decreto Legge
  - Regio Decreto Legislativo
  - Regolamento
  - Regolamento del Consiglio Superiore Magistratura
  - Regolamento del Senato della Repubblica
  - Regolamento della Camera dei Deputati
  - Regolamento della Corte costituzionale
  - Regolamento parlamentare
  - Senato della Repubblica

[___FILTRA_PER_PROVVEDIMENTO-Categoria___](copiata da Dejure)

- Aborto
- Accordi di Villa Madama
- Accordo di Schengen
- Adozione e affidamento
- Adozione internazionale
- Adozione speciale
- Affidamento condiviso
- Agevolazioni tributarie (disciplina)
- Amato
- Antimafia
- Antiriciclaggio
- Antitrust (concorrenza)
- Artbonus
- Attività di governo (disciplina)
- Barriere architettoniche 
- Basaglia
- Bassanini
- Bassanini bis
- Bassanini quater
- Bassanini ter
- Bersani (liberalizzazioni)
- Bersani bis
- Biagi
- Biotestamento
- Bossi - Fini
- Bucalossi
- Carbon tax
- Carotti
- Carta europea dell'autonomia locale
- Catasto
- Categorie protette
- Cirami
- Cittadinanza
- Codice antimafia
- Codice dei beni culturali e paesaggio
- Codice dei contratti pubblici
- Codice dei lavori pubblici
- Codice del consumo
- Codice del processo amministrativo
- Codice del terzo settore
- Codice del Turismo
- Codice della crisi d'impresa e dell'insolvenza
- Codice della giustizia contabile
- Codice della nautica da diporto
- Codice della proprietà industriale 
- Codice della strada (nuovo)
- Codice dell'ambiente
- Codice dell'amministrazione digitale
- Codice delle assicurazioni private
- Codice delle comunicazioni elettroniche
- Codice delle pari opportunità
- Codice dell'ordinamento militare 
- Codice postale
- Codice privacy
- Codice rosso
- Collaboratori di giustizia
- Collegato lavoro
- Concessioni governative
- Confidi
- Conflitto di interessi
- Consob
- Contratti di solidarietà
- Conv. affidamento e sottrazione di minori
- Conv. di Bruxelles decisioni in materia civile e commerciale
- Conv. diritti fanciullo (New York)
- Conv. Europea Diritti dell'Uomo
- Conv. Ginevra (prigionieri di guerra)
- Conv. Italia - Santa Sede in materia fiscale
- Conv. mutua assistenza e cooperazione tra amministrazioni doganali
- Conv. New York eliminazione discriminazione razziale
- Conv. ONU diritti disabili
- Conv. ONU diritto del mare (Montego Bay)
- Conv. Oviedo sulla biomedicina e divieto clonazione
- Conv. Parigi doping nello sport
- Conv. Strasburgo assistenza giudiziaria in materia penale
- Conv. Vienna diritto dei trattati tra Stati e OI o tra OI
- Conv. Vienna sul diritto dei trattati
- Coronavirus - Covid-19
- Crescitalia 1
- Crescitalia 2
- Decreto agosto
- Decreto Cashback
- Decreto Cio
- Decreto clima
- Decreto Covid
- Decreto crescita
- Decreto cultura
- Decreto Cura Italia - Covid-19
- Decreto del fare
- Decreto dignità
- Decreto fiscale 2018
- Decreto fiscale 2019
- Decreto IRPEF
- Decreto liquidità - Covid-19
- Decreto Rifiuti
- Decreto Rilancio - Covid-19
- Decreto Ristori
- Decreto Ristori bis
- Decreto Ristori quater
- Decreto Ristori ter
- Decreto Sanità – Decreto Balduzzi
- Decreto scuola - Covid-19
- Decreto semplificazioni 2018
- Decreto semplificazioni 2020
- Decreto sicurezza
- Decreto sicurezza bis
- Decreto Sostegni
- Decreto Sviluppo
- Depenalizzazione
- Depenalizzazione reati minori
- Devolution
- Dini (Riforma delle pensioni)
- Direttiva whistleblowing
- Diritto d'autore
- Diritto Internazionale Privato (riforma)
- Disabili
- Divorzio (Fortuna - Baslini)
- Divorzio breve
- DL Covid
- Dpcm Natale 2020
- Editoria
- Elezioni Camera dei Deputati
- Elezioni dirette Consigli Regionali
- Elezioni Senato
- Equo canone
- Euro
- Ex Cirielli
- Factoring internazionale
- Fallimento - Legge fallimentare
- Famiglia (riforma)
- Federalismo demaniale
- Federalismo fiscale
- Federalismo fiscale municipale 
- Finanza locale
- Finanziaria 2010
- Finanziaria 2011 (Legge di stabilità)
- Finanziaria 2012 (Legge di stabilità)
- Finanziaria 2013 (Legge di stabilità)
- Finanziaria 2014 (Legge di stabilità)
- Finanziaria 2015 (Legge di stabilità) 
- Finanziaria 2016 (Legge di stabilità)
- Finanziaria 2017 (Legge di stabilità)
- Finanziaria 2018 (Legge di stabilità)
- Finanziaria 2019 (Legge di stabilità)
- Finanziaria 2020 (Legge di stabilità)
- Finanziaria 2021 (Legge di stabilità)
- Finanziaria triennale
- Fondi pensione
- Formica
- Franchising
- Fusioni transfrontaliere
- Gasparri
- Gelmini
- Giudice di pace
- Giudice di pace (competenza penale)
- Giudice Unico
- Goria
- Gozzini
- Grandi rischi
- Green economy
- Ici
- Impatto ambientale
- Impiegati civili dello Stato
- Imposta di bollo
- Imposta di registro
- Imposta di successioni e donazioni
- Imposte ipotecaria e catastale
- IMU
- Indultino
- Indulto
- Infortuni sul lavoro
- Inquinamento elettromagnetico
- Intercettazioni telefoniche
- Ipab
- Irap
- Italicum
- IVA
- Job Acts
- Leasing finanziario internazionale
- Legge Anticorruzione
- Legge Brunetta
- Legge comunitaria 2018
- Legge Gelli - Bianco
- Legge La Loggia
- Legge Levi
- Legge notarile 
- Legge Pinto
- Legge ponte urbanistica
- Legge Severino
- Legittima difesa
- Legittimo impedimento
- Locazioni (riforma)
- Lodo Alfano
- Lunardi (infrastrutture)
- Maggiore età
- Mammì
- Mancino
- Mandato di arresto europeo
- Manette agli evasori
- Manovra bis
- Manovra economica 1 - Decreto anticrisi
- Manovra economica 2 
- Martelli
- Marzano
- Mediazione civile
- Merlin
- Milleproroghe 
- Milleproroghe 2013
- Milleproroghe 2017
- Milleproroghe 2021
- Minori a rischio
- Monitoraggio fiscale 
- Moratti
- Mosca
- NASPI
- Nazioni Unite (Statuto)
- Nicolazzi
- Notificazione atti giudiziari
- Nuovi compensi professionisti
- Nuovo Coronavirus - Covid-19
- Omicidio stradale
- Ordinamento giudiziario
- Ordinamento penitenziario (riforma)
- Organizzazione Mondiale del Commercio
- P2 (Anselmi)
- Pacchetto Lavoro - Giovannini
- Pacchetto sicurezza
- Par condicio
- Patente europea
- Patti Lateranensi
- Pecorella
- Pentiti
- Prestigiacomo (tratta di persone)
- Processo civile, amministrativo e Corte dei Conti (strumenti telematici)
- Processo penale minorenni
- Processo tributario 
- Procreazione assistita
- Prodi bis
- Province (abolizione)
- Quadri intermedi
- Reati tributari
- Reddito di cittadinanza - Quota 100
- Referendum
- Responsabilità amministrativa persone giuridiche
- Responsabilità civile dei magistrati
- Riconoscimento figli naturali
- Riforma del condominio
- Riforma Fornero - Riforma del mercato del lavoro 
- Riforma professione forense 
- Riforma Sanitaria
- Riforma sistema fiscale statale
- Riforma tributaria (legge delega)
- Riscossione delle imposte sui redditi
- Rogatorie
- Rognoni - La Torre
- Ronchey
- Sabatini
- Salvacalcio
- Salva-Italia
- Salvaleggi
- Salvaleggi 2
- Sblocca cantieri
- Sblocca Italia
- Scelba (organi regionali)
- Scelba (ricostituzione partito fascista)
- Schifani
- SCIA 2
- Sciopero nei servizi pubblici
- Scudo fiscale 
- Scuola dell'obbligo
- Seggiolini anti abbandono
- Semplificazione 2012
- Semplificazione dei riti
- Semplificazione fiscale
- Semplificazione normativa (Taglia-leggi, Calderoli)
- Sicurezza cibernetica
- Sicurezza e segreto di Stato
- SIM
- Simeone
- Sismica
- Smuraglia
- Spending review
- Sport (doping)
- Sport (scommesse e frode sportiva - Totonero)
- Stalking
- Stampa
- Stato civile
- Statuto dei lavoratori
- Statuto diritti dei contribuenti
- Superprocura
- Svuota carceri
- T.A.R. (istituzione)
- T.U. apprendistato 
- T.U. bancario (TUB)
- T.U. casellario giudiziario
- T.U. debito pubblico
- T.U. delle disposizioni regolamentari in materia di ordinamento militare
- T.U. disposizioni legislative in materia doganale
- T.U. documentazione amministrativa
- T.U. edilizia
- T.U. elettorato attivo
- T.U. elezioni comunali
- T.U. enti locali
- T.U. espropriazione per pubblica utilità
- T.U. Finanza  - T.U.F. Draghi
- T.U. Immigrazione (Turco - Napolitano)
- T.U. imposte dirette
- T.U. istruzione
- T.U. Leggi di pubblica sicurezza (T.U.L.P.S)
- T.U. Leggi sanitarie
- T.U. materia valutaria
- T.U. Promulgazione delle leggi
- T.U. Radiotelevisione
- T.U. sostegno maternità e paternità
- T.U. spese di giustizia 
- T.U. stupefacenti (Jervolino - Vassalli)
- T.U.I.R. imposte sui redditi
- Taglio dei parlamentari
- Tognoli
- Trapianti di organi
- Trasparenza atti amministrativi
- Trattamento Pensione di anzianità
- Trattato di Lisbona
- Tremonti
- Tremonti bis
- Treu
- Tribunale della libertà
- Tribunale minorenni
- Trust 
- Turismo sessuale (norme contro)
- Tutela del risparmio
- Unioni civili
- Urbani (salva cinema)
- Usura
- Vanoni
- Violenza negli stadi)
- Violenza sessuale
- Visentini ter
- Visto pesante
- Volontariato
- Voluntary disclosure 1
- Voluntary disclosure 2
- Whisteblowing

[___FILTRA_PER_FORMULARIO___](copiata da Dejure)     
            
- Form. Tributario           
- Form. Processo Amministrativo           
- Form. Agrario           
- Form. Condominio
- Form. Contratti
- Form. Locazioni           
- Form. Esecuzioni           
- Form. Richiesta pagamenti           
- Form. Appalti           
- Form. Lavoro           
- Form. Società           
- Form. Atti Penali                            
- Form. Processo Civile           
- Form. Crisi d'Impresa           
- Form. Responsabilità Civile           
- Form. Famiglia

[___CLASSIFICAZIONE___]

- ABOR = Aborto
- ABRU = Abruzzo
- ACPOT = Acque potabili e acquedotti
- ACPUB = Acque pubbliche
- ACTER = Acque termali e terme
- AGENT = Agenti di commercio
- AGGEN = Agricoltura (generalità)
- AGLAV = Agricoltura (Lavoro)
- AGPRO = Agricoltura (Prodotti)
- AGCON = Agricoltura (Contratti)
- AGCRE = Agricoltura (Credito)
- AGANT = Agricoltura (Antiparassitari, Anticrittogamici, etc.)
- AGRO = Agronomi
- ALB = Alberghi, Pensioni, Locande, etc.
- ALCOL = Alcolismo
- ALIM = Alimenti (Diritto agli)
- ALCON = Alimenti (Confezionamento)
- ADOC = Alimenti (Doc e Marchi)
- ALADD = Alimenti (Additivi, Coloranti e Sofisticazioni)
- ALANI = Alimenti (Origine Animale)
- ALVEG = Alimenti (Origine Vegetale)
- ALINF = Alimenti (Prima Infanzia e Prodotti Dietetici)
- ALPIN = Alpinismo
- AMBIE = Ambiente
- AMNIS = Amnistie, indulti e condoni
- AMMIN = Amministrazione Pubblica
- ARMI = Armi ed Esplosivi
- ASCEN =  Ascensori, Montacarichi e Scale Mobili
- ASSE = Assegni e Cambiali
- ASSIC = Assicurazioni Private
- ASSPA =  Assistenza a Paesi in via di sviluppo
- ASSBE =  Assistenza e Beneficienza Pubblica
- ASSO = Associazioni Vietate
- AUTO = Autoveicoli e Circolazione Stradale
- AVPRO = Avvocati e Procuratori
- AVSTA = Avvocatura dello Stato

- BAITA = Banca d'Italia
- BANCH = Banche
- BAND = Bandiere
- BARB = Barbieri e Parrucchieri
- BASI = Basilicata
- BENI = Beni di Stati Esteri in Italia
- BECON = Bevande (Confezionamento)
- BEDOC = Bevande (Doc e Marchi)
- BEADD = Bevande (Additivi, coloranti, sofisticazioni)
- BEALC = Bevande (Alcoliche)
- BEANA = Bevande (Analcoliche)
- BIO = Biologi
- BOL = Bollo (Imposta di)
- BORS = Borsa
- BOSC = Boschi e Foreste
- BOT =  Bot, CCT e Debito Pubblico
- BREV = Brevetti, Marchi, Nomi di Origine

- CACCI = Caccia
- CALAB = Calabria
- CALAM = Calamità
- CAMBI = Cambi, Valute e Capitali stranieri
- CAMPA = Campania
- CARA = Carabinieri
- CART = Cartine per Sigarette
- CASS = Cassa Depositi e Prestiti
- CATA = Catasto e Registri Immobiliari
- CHIES = Chiesa Cattolica e Culti Diversi
- CHIM = Chimici e Chimica
- CIVAT = Città del Vaticano (Stato della)
- CITT = Cittadinanza
- CC = Codice Civile
- CONPU = Contratti Pubblici
- CPC = Codice di Procedura Civile
- CPP = Codice di Procedura Penale
- CP = Codice Penale
- COMM =  Commercialisti
- CEE = Comunità Europee
- COISR = Comunità Israelitiche
- CONCE = Concessioni (tasse sulle)
- CEUR = Consiglio d'Europa
- CNEL = Consiglio Nazionale dell'Economia e del Lavoro
- CSPA = Consiglio Superiore della Pubblica Amministrazione
- CONSO = Consorzi e Imprese Cooperative
- CONSU = Consulenti del Lavoro
- CONTA = Contatori
- CORTE = Corte Costituzionale
- COSTI = Costituzione dello Stato
- CRESP = Credito all'Esportazione
- CRED = Credito Edilizio e Fondiario
- CRI = Croce Rossa Italiana
- CULT = Cultura e Beni Culturali

- DEMA = Demanio
- DEPE = Depenalizzazione
- DIPLO = Diplomazia e Consolati
- DIRI = Dirigenti e Quadri
- DIAUT = Diritti d'Autore
- DIUOM = Diritti dell'Uomo
- DOCU = Documentazione Amministrativa etc.

- EDIUR = Edilizia e Urbanistica
- EDIRE = Edilizia Residenziale
- EDIT = Editoria e Giornali
- ELE = Elezioni
- EMIGR = Emigrazione e Immigrazione
- EMILI =  Emilia Romagna
- ENEL = Energia Elettrica
- ENNU =  Energia Nucleare
- ENLOC = Enti Locali
- ENPUB = Enti Pubblici
- ESGEN = Esportazioni e Importazioni (Generalità)
- ESDOG = Esportazioni e Importazioni (Dogane)
- ESPOS = Esposizioni, Mostre, Fiere e Mercati
- ESPRO = Espropriazione per Pubblica Utilità

- FACC = Facchinaggio
- FALL =  Fallimento
- FAMI = Famiglia
- FARI = Porti, Fari, Spiagge, Pilotaggio
- FASCI = Fascismo
- FIAM = Fiammiferi
- FONDI = Fondi Comuni di Investimento
- FAGEN = Forze Armate (Generalità)
- FAPER = Forze Armate (Personale)
- FACOD = Codici Penali Militari
- FRANC = Francobolli, Cartoline e altri valori postali
- FRIU = Friuli Venezia Giulia

- GEOL = Geologi e Geologia
- GIOC = Giochi e Concorsi
- GOV = Governo
- GUARD = Guardia di Finanza
- GUERR = Guerra

- IMPI = Impiego Pubblico
- IMCOM = Imposta Complementare
- IMCON = Imposta di Consumo
- IMENT = Imposta di Entrata
- IMCAS = Imposta Fabbricati
- IMFON = Imposta Fondiaria
- IMRIC = Imposta di Ricchezza Mobile
- IMFAB = Imposte di Fabbricazione
- IMERA = Imposte Erariali e di Consumo
- IMGEN = Imposte e Tasse in Genere
- IMIPO = Imposte Ipotecarie e Catastali
- INGEN = Industria, Commercio, Artigianato (Generalità)
- INCAM = Industria, Commercio, Artigianato (Camere di)
- INCRE = Industria, Commercio, Artigianato (Crediti)
- INGAR = Ingegneri, Architetti, Geometri
- INQUI = Inquinamento
- INTE = Interprete
- ISPRE = Istituti di Prevenzione e di Pena
- ISPOL = Istituto Poligrafico e Zecca dello Stato
- ISGEN = Istruzione (Generalità)
- ISPER = Istruzione (Personale)
- ISART = Istruzione (Artistica e Musicale)
- ISELE = Istruzione (Elementare e Materna)
- ISMED = Istruzione (Media e Secondaria)
- ISPRO = Istruzione (Professionale e Tecnica)
- ISSUP = Istruzione (Superiore)
- ISEST = Istruzione (all'Estero)
- ISPRI = Istruzione (Privata)
- IVA = Iva

- LAV = Lavoro
- LAZ = Lazio
- LEAS = Leasing
- LEG = Leggi e Decreti
- LIG = Liguria
- LOC = Locazione di Cose
- LOMB = Lombardia

- MAR = Marche
- MEZ = Mezzogiorno
- MEF = Ministero dell’economia e delle finanze
- MIAGR = Ministero delle politiche agricole, alimentari e forestali
- MIAMB = Ministero della transizione ecologica
- MICUL = Ministero della cultura
- MIDIF = Ministero della difesa
- MIDISA = Ministero per la disabilità 
- MIFAM = Ministero per le pari opportunità e la famiglia
- MIGIOV = Ministero per le politiche giovanili
- MIGIUS = Ministero della giustizia
- MILAV = Ministero del lavoro e delle politiche sociali
- MINFR = Ministero delle infrastrutture e della mobilità sostenibili
- MINT = Ministero dell’interno
- MIPA = Ministero per la pubblica amministrazione
- MIPARL = Ministero per i rapporti con il Parlamento
- MIREG = Ministero per gli affari regionali e le autonomie
- MISAL = Ministero della salute
- MISE = Ministero dello sviluppo economico
- MISTR = Ministero dell’istruzione
- MISUD = Ministero per il sud e la coesione territoriale
- MITECN = Ministero per l’innovazione tecnologica e la transizione di gitale
- MITUR = Ministero del turismo
- MIUR = Ministero dell’università e della ricerca

- MOLI = Molise
- MONE = Moneta
- MONOP = Monopoli di Stato

- NAAER = Navigazione Aerea
- NAMAR = Navigazione Marittima
- NAZIO = Nazioni Unite
- NOTA = Notariato
- NOTIF =  Notificazioni

- OCCU =  Occupazione
- OGGE =  Oggetti e sostanze non alimentari
- OLI =  Oli Minerali, Idrocarburi e Gas
- ONOR =  Onorificenze e Ordini
- OPERE =  Opere Pubbliche
- ORA =  Ora Legale
- ORGEN =  Ordinamento Giudiziario (Generalità)
- ORORG =  Ordinamento Giudiziario (Organi e Uffici)
- ORPER =  Ordinamento Giudiziario (Personale)

- PARL =  Parlamento
- PART =  Partiti Politici
- PASS =  Passaporti e Carte di Identità
- PECIV =  Pensioni dei Dipendenti Civili e Militari dello Stato
- PEGUE =  Pensioni di Guerra
- PERIT =  Periti Industriali
- PESC =  Pesca
- PESI =  Pesi, Misure, Marchio etc.
- PIEMO =  Piemonte
- PIETR =  Pietre e Metalli Preziosi
- PORTA =  Portatori di Handicap
- PORTI =  Portinai
- POSTE =  Poste e Telecomunicazioni
- PREF = Prefetto e Prefettura
- PRESI =  Presidente della Repubblica
- PREZZ =  Prezzi
- PROCA =  Procedimento Amministrativo
- PROST =  Prostituzione
- PROVV =  Provveditorato Generale dello Stato
- PSI =  Psicologi
- PS =  Pubblica Sicurezza
- PUB =  Pubblicità
- PUGL =  Puglia

- RAPP =  Rapporti Giudiziari con l'Estero
- REDD =  Redditi (Imposte sui)
- REFE =  Referendum
- REGI =  Regioni
- REGIS =  Registro (Imposta di)
- RICE =  Ricerca Scientifica e Tecnologica
- RIFU =   Rifugiati e Profughi
- RISC =   Riscaldamento

- SAGEN =  Sanità, Sanitari, etc. (Generalità)
- SAPER =  Sanità, Sanitari, etc. (Personale)
- SAIGI =  Sanità, Sanitari, etc. (Igiene)
- SAMED =  Sanità, Sanitari, etc. (Medicinali)
- SAFAR =  Sanità, Sanitari, etc. (Farmacie e Farmacisti)
- SAMAL =  Sanità, Sanitari, etc. (Malattie)
- SANMA =  San Marino
- SARD =  Sardegna
- SEMPL =  Semplificazione
- SEP =  Sepolture
- SERV =  Servizi Segreti
- SICIL =  Sicilia
- SIGEN =  Sicurezza Sociale (Generalità)
- SIASS =  Sicurezza Sociale (Assicurazioni Obbligatorie)
- SIPEN =  Sicurezza Sociale (Fine Rapporto e Pensioni)
- SIND =  Sindacati
- SOC =  Società
- SPAZ =  Spazio
- SPET =  Spettacoli
- SPIMP =  Spettacoli (Imposta sugli)
- SPIRI =  Spiriti
- SPORT =  Sport
- STATI =  Statistica e Censimenti
- STATO =  Stato Civile e Anagrafe
- STUP =   Stupefacenti
- STRA =  Strade
- SUCC =  Successioni (Imposta sulle)

- TASS = Tasse Automobilistiche
- TERM = Termini (Sospensioni di)
- TOSC =   Toscana
- TRGEN =  Trasporti (Generalità)
- TRAUT =  Trasporti  (Di merci mediante Autoveicoli)
- TRMAR =  Trasporti  (Marittimi e Aerei)
- TRPER =  Trasporti  (Personale)
- TRINT =  Trasporti  Internazionali
- TRMER =  Trasporti di merci pericolose
- TRAT =   Trattati e Convenzioni Internazionali
- TRENT =  Trentino Alto Adige
- TRIB =   Tributi locali
- TURI =   Turismo

- UFIN =   Uffici finanziari
- UMBR =   Umbria
- UNIFI =  Unificazione del diritto
- UNEUR =  Unione dell'Europa Occidentale
- UNLAT =  Unione latina
- USI = Usi
- USICI =  Usi civili

- VAL = Valle d'Aosta
- VENDI = Vendite Mobiliari Internazionali
- VENE = Veneto
- VIGI = Vigili del Fuoco
- VITA = Vitalizi

- ZOGEN =  Zootecnia (Generalità)
- ZOALL =  Zootecnia (Allevamento)
- ZOESP =  Zootecnia (Esportazioni e importazioni)
- ZOVAC =  Zootecnia (Malattie e vaccini)
- ZOMAN =  Zootecnia (Mangimi)
- ZOVET =  Zootecnia (Veterinari)


-------------------------------------- TAG SCELTI per l'ADVANCED SEARCH --------------------------------------

[ZONE_GEOGRAFICHE] --> [REGIONI]
- ABRU = Abruzzo
- BASI = Basilicata
- CALAB = Calabria
- CAMPA = Campania
- CIVAT = Città del Vaticano (Stato della)
- EMILI =  Emilia Romagna
- FRIU = Friuli Venezia Giulia
- LAZ = Lazio
- LIG = Liguria
- LOMB = Lombardia
- MAR = Marche
- MEZ = Mezzogiorno
- MOLI = Molise
- PIEMO =  Piemonte
- PUGL =  Puglia
- SANMA =  San Marino
- SARD =  Sardegna
- SICIL = Sicilia
- TOSC =   Toscana
- TRENT =  Trentino Alto Adige
- UMBR =   Umbria
- VAL =    Valle d'Aosta
- VENE = Veneto

[MINISTERI] ---> tutte le diciture sono da aggiornare / sostituire
- MEF = Ministero dell’economia e delle finanze
- MIAGR = Ministero delle politiche agricole, alimentari e forestali
- MIAMB = Ministero della transizione ecologica
- MICUL = Ministero della cultura
- MIDIF = Ministero della difesa
- MIDISA = Ministero per la disabilità
- MIFAM = Ministero per le pari opportunità e la famiglia
- MIGIOV = Ministero per le politiche giovanili
- MIGIUS = Ministero della giustizia
- MILAV = Ministero del lavoro e delle politiche sociali
- MINFR = Ministero delle infrastrutture e della mobilità sostenibili
- MINT = Ministero dell’interno
- MIPA = Ministero per la pubblica amministrazione
- MIPARL = Ministero per i rapporti con il Parlamento
- MIREG = Ministero per gli affari regionali e le autonomie
- MISAL = Ministero della salute
- MISE = Ministero dello sviluppo economico
- MISTR = Ministero dell’istruzione
- MISUD = Ministero per il sud e la coesione territoriale
- MITECN = Ministero per l’innovazione tecnologica e la transizione di gitale
- MITUR = Ministero del turismo
- MIUR = Ministero dell’università e della ricerca

[ECONOMIA] ---> Diritto Commerciale &
- AGENT = Agenti di commercio
- ASSE = Assegni e Cambiali
- BAITA = Banca d'Italia
- BANCH = Banche
- BENI = Beni di Stati Esteri in Italia
- BOT =  Bot, CCT e Debito Pubblico
- CAMBI = Cambi, Valute e Capitali stranieri
- CASS = Cassa Depositi e Prestiti
- COMM =  Commercialisti
- CNEL = Consiglio Nazionale dell'Economia e del Lavoro
- CRED = Credito Edilizio e Fondiario
- CRESP = Credito all'Esportazione
- ESDOG = Esportazioni e Importazioni (Dogane)
- ESGEN = Esportazioni e Importazioni (Generalità)
- FALL =  Fallimento
- FONDI = Fondi Comuni di Investimento
- INGEN = Industria, Commercio, Artigianato (Generalità)
- INCAM = Industria, Commercio, Artigianato (Camere di)
- INCRE = Industria, Commercio, Artigianato (Crediti)
- ISPOL = Istituto Poligrafico e Zecca dello Stato
- IVA = Iva
- LEAS = Leasing
- MONE = Moneta
- MONOP = Monopoli di Stato
- PECIV =  Pensioni dei Dipendenti Civili e Militari dello Stato
- PEGUE =  Pensioni di Guerra
- PREZZ =  Prezzi
- REDD =  Redditi (Imposte sui)
- UFIN =   Uffici finanziari
- VENDI = Vendite Mobiliari Internazionali
- VITA = Vitalizi

[TASSE_e_IMPOSTE]
- BOL = Bollo (Imposta di)
- CONCE = Concessioni (tasse sulle)
- IMCOM = Imposta Complementare
- IMCON = Imposta di Consumo
- IMENT = Imposta di Entrata
- IMCAS = Imposta Fabbricati
- IMFON = Imposta Fondiaria
- IMRIC = Imposta di Ricchezza Mobile
- IMFAB = Imposte di Fabbricazione
- IMERA = Imposte Erariali e di Consumo
- IMGEN = Imposte e Tasse in Genere
- IMIPO = Imposte Ipotecarie e Catastali
- REDD =  Redditi (Imposte sui)
- REGIS =  Registro (Imposta di)
- SPIMP =  Spettacoli (Imposta sugli)
- SUCC =  Successioni (Imposta sulle)
- TASS = Tasse Automobilistiche

[LAVORO]
- AGLAV = Agricoltura (Lavoro)
- CNEL = Consiglio Nazionale dell'Economia e del Lavoro
- CONSO = Consorzi e Imprese Cooperative
- CONSU = Consulenti del Lavoro
- IMPI = Impiego Pubblico
- LAV = Lavoro
- MILAV = Ministero Lavori Pubblici
- MIPRE = Ministero  Lavoro e Previdenza Sociale
- OCCU =  Occupazione

[PRODUZIONE_e_CONSUMAZIONE]
- ACPUB = Acque pubbliche
- AGGEN = Agricoltura (generalità)
- AGLAV = Agricoltura (Lavoro)
- AGPRO = Agricoltura (Prodotti)
- AGCON = Agricoltura (Contratti)
- AGCRE = Agricoltura (Credito)
- AGANT = Agricoltura (Antiparassitari, Anticrittogamici, etc.)
- AGRO = Agronomi
- ALIM = Alimenti (Diritto agli)
- ALCON = Alimenti (Confezionamento)
- ADOC = Alimenti (Doc e Marchi)
- ALADD = Alimenti (Additivi, Coloranti e Sofisticazioni)
- ALANI = Alimenti (Origine Animale)
- ALVEG = Alimenti (Origine Vegetale)
- ALINF = Alimenti (Prima Infanzia e Prodotti Dietetici)
- BECON = Bevande (Confezionamento)
- BEDOC = Bevande (Doc e Marchi)
- BEADD = Bevande (Additivi, coloranti, sofisticazioni)
- BEALC = Bevande (Alcoliche)
- BEANA = Bevande (Analcoliche)
- SPIRI =  Spiriti

[SANITA']
- ABOR = Aborto
- ALCOL = Alcolismo
- CRI = Croce Rossa Italiana
- MISAN = Ministero Sanità
- PORTA =  Portatori di Handicap
- SAGEN =  Sanità, Sanitari, etc. (Generalità)
- SAPER =  Sanità, Sanitari, etc. (Personale)
- SAIGI =  Sanità, Sanitari, etc. (Igiene)
- SAMED =  Sanità, Sanitari, etc. (Medicinali)
- SAFAR =  Sanità, Sanitari, etc. (Farmacie e Farmacisti)
- SAMAL =  Sanità, Sanitari, etc. (Malattie)
- STUP =   Stupefacenti

[FORZE_dell'ORDINE/SOCCORSI]
- CARA = Carabinieri
- FACOD = Codici Penali Militari
- FAGEN = Forze Armate (Generalità)
- FAPER = Forze Armate (Personale)
- GUARD = Guardia di Finanza
- PECIV = Pensioni dei Dipendenti Civili e Militari dello Stato
- PS =  Pubblica Sicurezza
- SERV =  Servizi Segreti
- VIGI = Vigili del Fuoco

[ISTRUZIONE]
- CULT = Cultura e Beni Culturali
- ISGEN = Istruzione (Generalità)
- ISPER = Istruzione (Personale)
- ISART = Istruzione (Artistica e Musicale)
- ISELE = Istruzione (Elementare e Materna)
- ISMED = Istruzione (Media e Secondaria)
- ISPRO = Istruzione (Professionale e Tecnica)
- ISSUP = Istruzione (Superiore)
- ISEST = Istruzione (all'Estero)
- ISPRI = Istruzione (Privata)
- MIIST = Ministero Pubblica Istruzione

[BENI_PRIMARI]
- ACPOT = Acque potabili e acquedotti
- ENEL = Energia Elettrica
- PASS =  Passaporti e Carte di Identità
- RISC =   Riscaldamento
- STRA =  Strade

[BENI_SECONDARI]
- ASCEN =  Ascensori, Montacarichi e Scale Mobili
- BECON = Bevande (Confezionamento)
- BEDOC = Bevande (Doc e Marchi)
- BEADD = Bevande (Additivi, coloranti, sofisticazioni)
- BEALC = Bevande (Alcoliche)
- BEANA = Bevande (Analcoliche)
- CART = Cartine per Sigarette
- FIAM = Fiammiferi
- FRANC = Francobolli, Cartoline e altri valori postali
- OGGE =  Oggetti e sostanze non alimentari
- PESC =  Pesca
- PIETR =  Pietre e Metalli Preziosi
- PROST =  Prostituzione
- PUB =  Pubblicità
- SEP =  Sepolture
- STUP =   Stupefacenti
- TRGEN =  Trasporti (Generalità)
- TRMAR =  Trasporti  (Marittimi e Aerei)
- TRPER =  Trasporti  (Personale)
- TRINT =  Trasporti  Internazionali

[INTRATTENIMENTO_e_TURISMO]
- ACTER = Acque termali e terme
- ALB = Alberghi, Pensioni, Locande, etc.
- ALPIN = Alpinismo
- BOSC = Boschi e Foreste
- CACCI = Caccia
- ESPOS = Esposizioni, Mostre, Fiere e Mercati
- FARI = Porti, Fari, Spiagge, Pilotaggio
- GIOC = Giochi e Concorsi
- SPET =  Spettacoli
- SPIMP =  Spettacoli (Imposta sugli)
- SPIRI =  Spiriti
- SPORT =  Sport
- TURI =   Turismo

[IMPIEGHI_SPECIFICI]
- BARB = Barbieri e Parrucchieri
- CONSU = Consulenti del Lavoro
- FACC = Facchinaggio
- INTE = Interprete
- NOTA = Notariato
- PERIT =  Periti Industriali
- PORTI =  Portinai
- PSI =  Psicologi

[IMPORTANTI secondo il signor LUIGI]
???


## Known Issues
- Questa ricerca non trova il file: "Dec. (UE) del Consiglio del 18 gennaio 2016, n. 2016/77 (G.U. 23 gennaio 2016, n. L 16). Conferma la posizione adottata a nome dell’Unione europea in sede di 10a conferenza ministeriale dell’Organizzazione mondiale del commercio con riguardo alle questioni della concorrenza all’esportazione e dello sviluppo." Ed abbiamo beccato il problema: ...(G.U. 23 gennaio 2016, n. L 16).[QUI] Conferma la posizione adottata... => Evidentemente il docx elabora quello spazio in modo particolare (non ho ancora capito in cosa viene convertito di preciso), quindi in caso di ricerca di frasi molto lunghe, andranno specificate ben più accortezze nell'algoritmo.


## Note
- [AggiunteUtili] Tutti i componenti calendario dovrebbero essere dotati di reset button
- [Domande] Attualmente la breadcrumbs bar appare solo se ci si trova in un articolo/recensione, chiedere se preferisce che sia presente anche direttamente nella sezione esterna di articoli e reviews.
- [Style] Al signor Gaetano piace https://www.altalex.com/, emularne parzialmente lo stile.
- [Archive] Avvicinarsi il più possibile al funzionamento di https://dejure.it/, sia per stile che per filtri di ricerca.
