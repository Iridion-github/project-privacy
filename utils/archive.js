/**

-------------------- [CHECKPOINT] --------------------
- Giurisprudenza [100%]
- Normativa [0%]
- Note e Dottrina [0%]
- Formulari [0%]
-------------------- [PANNELLI OK] --------------------
- TESTUALE
- DATA
-------------------- [PANNELLI DA CREARE] --------------------
- CODICI: {
  dati_necessari: "lista completa dei codici"
 }
 inputs: {
    art.: "number",
    sottonumero: "multiselect",
    data: "date input"
 }
- LEGGI: {
  dati_necessari: "lista completa dei tipi di legge"
 }
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
- FONTE: { NON SI CAPISCE COSA SIA ESATTAMENTE!!
  dati_necessari: "???"
 }
 inputs: {
    tag: "select (o multiselect? approfondire)",
    anno: "date(year-only)"
 }
- SCEGLI TESTO UNICO
- PROVVEDIMENTO
- GAZZETTA UFFICIALE
- CERCA IN TITOLO DOCUMENTO / DOCUMENTO
- AUTORE
- LISTA FORMULARI
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
- CATEGORIA (Verrebbe inglobato da Fonte o Autorità)
- TIPO FILE (ext)






---------------------------------[ COMPONENTI NECESSARI ]---------------------------------
-
-
-



-------------------------------------- [STRUTTURA del MENU FINALE di RICERCA AVANZATA] --------------------------------------

[TESTUALE | Menù select con 3 options] (24/03/2021) (tabs: tutte)
- Una parola almeno
- Tutte le parole
- Tutta la frase

[DATA | Menù di tipo Date con una sua row] (24/03/2021) (tabs: GIURISPRUDENZA,    , NOTE & DOTTRINA)

[AUTORITÀ | Menù multiplo con sottocampi, vedasi Dejure] (24/03/2021) (tabs: GIURISPRUDENZA)

[CODICI | Menù multiplo con sottocampi, vedasi Dejure ] ===> (24/03/2021) (tabs: GIURISPRUDENZA, FORMULARI)
- Una delle ultime cose da fare: bisogna sapere quali codici esistono effettivamente e con tag a loro dedicato, all'interno dei files dell'archivio di Luigi.

[LEGGI | Menù multiplo con sottocampi, vedasi Dejure ] ===> (24/03/2021) (tabs: GIURISPRUDENZA, FORMULARI)

[FONTE | Menù doppio con sottocampi, vedasi Dejure] ===> (24/03/2021) (tabs: GIURISPRUDENZA, NOTE & DOTTRINA)

[CLASSIFICAZIONE | Menù multiplo con moltissime opzioni in ordine alfabetico (copiare html da Dejure)] ===> (24/03/2021) (tabs: tutte)
- Una delle ultime cose da fare: bisogna sapere quali tags esistono effettivamente all'interno dei files dell'archivio di Luigi.

[SCEGLI TESTO UNICO (o simil nome) | campo select che starta da null. Rappresenta una displina normativa a parte. Da approfondire assieme a Luigi) ===> (24/03/2021) (tabs: GIURISPRUDENZA (attenzione, forse tab sbagliato, chiedere!))

[PROVVEDIMENTO | Menù multiplo con sottocampi, vedasi Dejure ] ===> (24/03/2021) (tabs: NORMATIVA)

[GAZZETTA UFFICIALE | Menù multiplo con sottocampi, vedasi Dejure ] ===> (24/03/2021) (tabs: NORMATIVA)

[CERCA IN TITOLO DOCUMENTO / DOCUMENTO | booleano ] ===> (24/03/2021) (tabs: NOTE & DOTTRINA)

[AUTORE | campo testuale (renderlo autosuggest) ] ===> (24/03/2021) (tabs: NOTE & DOTTRINA)

[LISTA FORMULARI | semplice select ] ===> (24/03/2021) (tabs: FORMULARI)

_________________________________[TAB: GIURISPRUDENZA]_________________________________
DATA
AUTORITÀ
CODICI
LEGGI
FONTE
CLASSIFICAZIONE
SCEGLI TESTO UNICO
______________________________________________________________________________________


_________________________________[TAB: NORMATIVA]_____________________________________
DATA
PROVVEDIMENTO
GAZZETTA UFFICIALE
CLASSIFICAZIONE
______________________________________________________________________________________


________________________________[TAB: NOTE & DOTTRINA]________________________________
CERCA IN TITOLO DOCUMENTO / DOCUMENTO
DATA
AUTORE
FONTE
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
Titolo: Dr20-02-2007
Inizio: Dir. P.C.M. 20 febbraio 2007 (G.U. 15 maggio 2007, n. 111). Interscambio dei dati tra le pubbliche amministrazioni e pubblicità dell’attività negoziale. (Direttiva n. 2).

[LIBRO]
Titolo: MassimarioGarante 2015-2016
Inizio: Massimario
2015-2016

[NOTA AGENZIA ENTRATE]
Titolo:
Inizio: Nota Ag. Entrate – 5 agosto 2004, n. 126747 - Qualificazione delle attività delle società di factoring. Natura finanziaria. Operazioni di finanziamento.

[ORDINANZA MINISTERIALE]
Titolo:
Inizio: O.M. 20 novembre 1998 (G.U. 25 novembre 1998, n. 276). Proseguimento del «Multitrattamento Di Bella».

[ORDINANZA]
Titolo: Nota Ag. Entrate 126747-2004
Inizio: Ordinanza ingiunzione nei confronti di Istituto Nazionale
della Previdenza Sociale-Direzione Provinciale di Brescia - 2
luglio 2020 [9445550]

[ORDINANZA PRESIDENTE CONSIGLIO MINISTRI]
Titolo: Ord.P.C.M.12-03-2009
Inizio: Ord.P.C.M. 12 marzo 2009, n. 3747 (G.U. 21 marzo 2009, n. 67). Interventi urgenti di protezione civile diretti a fronteggiare la grave situazione di pericolo in atto nell’area archeologica di Roma e provincia.

[PARERE]
Titolo: Par. Garante privacy su una istanza di accesso civico (2-11-2017)
Inizio: Parere su una istanza di accesso civico - 2 novembre 2017

[PROVVEDIMENTO]
Titolo: Provv. Anac 11-10-2017.2
Inizio: Provv. Anac 11 ottobre 2017 (G.U. 7 novembre 2017, n. 260). Aggiornamento al decreto legislativo 19 aprile 2017, n. 56 delle linee guida n. 6, di attuazione del decreto legislativo 18 aprile 2016, n. 50 recanti: «Indicazione dei mezzi di prova adeguati e delle carenze nell’esecuzione di un precedente contratto di appalto che possano considerarsi significative per la dimostrazione delle circostanze di esclusione di cui all’art. 80, comma 5, lett. c) del Codice».

[RACCOMANDAZIONE DELLA COMMISSIONE]
Titolo: Racc. 310-2001
Inizio: Racc. della Commissione, del 4 aprile 2001, n. 2001/310/CE (G.U. 19 aprile 2001, L 109). Principi applicabili agli organi extragiudiziali che partecipano alla risoluzione consensuale delle controversie in materia di consumo.

[RACCOMANDAZIONE UNIONE EUROPEA]
Titolo: Racc. UE 13-9-1990
Inizio: CONSIGLIO D’EUROPA
RACCOMANDAZIONE N° R (90) 19
DEL COMITATO DEI MINISTRI AGLI STATI MEMBRI
SULLA PROTEZIONE DEI DATI PERSONALI
UTILIZZATI A FINI DI PAGAMENTO
E DI ALTRE OPERAZIONI CONNESSE
(adottata dal Comitato dei Ministri il 13 settembre 1990,
nel corso della 443a riunione dei Delegati dei Ministri)

[REGOLAMENTO ANAC]
Titolo: Reg. Anac 1-3-2018
Inizio: Reg. Anac 1 marzo 2018 (G.U. 6 aprile 2018, n. 80). Regolamento concernente l’accessibilità dei dati raccolti nella Banca Dati Nazionale dei Contratti Pubblici.

[REGOLAMENTO AUTORITA']
Titolo: Reg. Autorità LL.PP. 21-12-2011
Inizio: Reg. Autorità LL.PP. 21 dicembre 2011 (G.U. 18 gennaio 2012, n. 14). Regolamento in materia di procedimento previsto dall’articolo 75 del D.P.R. n. 207/2010.

[REGOLAMENTO GARANTE]
Titolo: Reg. Garante 2-2019
Inizio: Deliberazione del 4 aprile 2019 - Regolamento n. 2/2019,
concernente l'individuazione dei termini e delle unità
organizzative responsabili dei procedimenti amministrativi
presso il Garante per la protezione dei dati personali
[9107640]


-------------------------------------- TUTTI i TAG GENERICI (24/03/2021: Luigi ci ha confessato che son quasi tutti vecchi e da sostituire, da suicidio)--------------------------------------

ABOR = Aborto
ABRU = Abruzzo
ACPOT = Acque potabili e acquedotti
ACPUB = Acque pubbliche
ACTER = Acque termali e terme
AGENT = Agenti di commercio
AGGEN = Agricoltura (generalità)
AGLAV = Agricoltura (Lavoro)
AGPRO = Agricoltura (Prodotti)
AGCON = Agricoltura (Contratti)
AGCRE = Agricoltura (Credito)
AGANT = Agricoltura (Antiparassitari, Anticrittogamici, etc.)
AGRO = Agronomi
ALB = Alberghi, Pensioni, Locande, etc.
ALCOL = Alcolismo
ALIM = Alimenti (Diritto agli)
ALCON = Alimenti (Confezionamento)
ADOC = Alimenti (Doc e Marchi)
ALADD = Alimenti (Additivi, Coloranti e Sofisticazioni)
ALANI = Alimenti (Origine Animale)
ALVEG = Alimenti (Origine Vegetale)
ALINF = Alimenti (Prima Infanzia e Prodotti Dietetici)
ALPIN = Alpinismo
AMBIE = Ambiente
AMNIS = Amnistie, indulti e condoni
AMMIN = Amministrazione Pubblica
ARMI = Armi ed Esplosivi
ASCEN =  Ascensori, Montacarichi e Scale Mobili
ASSE = Assegni e Cambiali
ASSIC = Assicurazioni Private
ASSPA =  Assistenza a Paesi in via di sviluppo
ASSBE =  Assistenza e Beneficienza Pubblica
ASSO = Associazioni Vietate
AUTO = Autoveicoli e Circolazione Stradale
AVPRO = Avvocati e Procuratori
AVSTA = Avvocatura dello Stato

BAITA = Banca d'Italia
BANCH = Banche
BAND = Bandiere
BARB = Barbieri e Parrucchieri
BASI = Basilicata
BENI = Beni di Stati Esteri in Italia
BECON = Bevande (Confezionamento)
BEDOC = Bevande (Doc e Marchi)
BEADD = Bevande (Additivi, coloranti, sofisticazioni)
BEALC = Bevande (Alcoliche)
BEANA = Bevande (Analcoliche)
BIO = Biologi
BOL = Bollo (Imposta di)
BORS = Borsa
BOSC = Boschi e Foreste
BOT =  Bot, CCT e Debito Pubblico
BREV = Brevetti, Marchi, Nomi di Origine

CACCI = Caccia
CALAB = Calabria
CALAM = Calamità
CAMBI = Cambi, Valute e Capitali stranieri
CAMPA = Campania
CARA = Carabinieri
CART = Cartine per Sigarette
CASS = Cassa Depositi e Prestiti
CATA = Catasto e Registri Immobiliari
CHIES = Chiesa Cattolica e Culti Diversi
CHIM = Chimici e Chimica
CIVAT = Città del Vaticano (Stato della)
CITT = Cittadinanza
CC = Codice Civile
CONPU = Contratti Pubblici
CPC = Codice di Procedura Civile
CPP = Codice di Procedura Penale
CP = Codice Penale
COMM =  Commercialisti
CEE = Comunità Europee
COISR = Comunità Israelitiche
CONCE = Concessioni (tasse sulle)
CEUR = Consiglio d'Europa
CNEL = Consiglio Nazionale dell'Economia e del Lavoro
CSPA = Consiglio Superiore della Pubblica Amministrazione
CONSO = Consorzi e Imprese Cooperative
CONSU = Consulenti del Lavoro
CONTA = Contatori
CORTE = Corte Costituzionale
COSTI = Costituzione dello Stato
CRESP = Credito all'Esportazione
CRED = Credito Edilizio e Fondiario
CRI = Croce Rossa Italiana
CULT = Cultura e Beni Culturali

DEMA = Demanio
DEPE = Depenalizzazione
DIPLO = Diplomazia e Consolati
DIRI = Dirigenti e Quadri
DIAUT = Diritti d'Autore
DIUOM = Diritti dell'Uomo
DOCU = Documentazione Amministrativa etc.

EDIUR = Edilizia e Urbanistica
EDIRE = Edilizia Residenziale
EDIT = Editoria e Giornali
ELE = Elezioni
EMIGR = Emigrazione e Immigrazione
EMILI =  Emilia Romagna
ENEL = Energia Elettrica
ENNU =  Energia Nucleare
ENLOC = Enti Locali
ENPUB = Enti Pubblici
ESGEN = Esportazioni e Importazioni (Generalità)
ESDOG = Esportazioni e Importazioni (Dogane)
ESPOS = Esposizioni, Mostre, Fiere e Mercati
ESPRO = Espropriazione per Pubblica Utilità

FACC = Facchinaggio
FALL =  Fallimento
FAMI = Famiglia
FARI = Porti, Fari, Spiagge, Pilotaggio
FASCI = Fascismo
FIAM = Fiammiferi
FONDI = Fondi Comuni di Investimento
FAGEN = Forze Armate (Generalità)
FAPER = Forze Armate (Personale)
FACOD = Codici Penali Militari
FRANC = Francobolli, Cartoline e altri valori postali
FRIU = Friuli Venezia Giulia

GEOL = Geologi e Geologia
GIOC = Giochi e Concorsi
GOV = Governo
GUARD = Guardia di Finanza
GUERR = Guerra

IMPI = Impiego Pubblico
IMCOM = Imposta Complementare
IMCON = Imposta di Consumo
IMENT = Imposta di Entrata
IMCAS = Imposta Fabbricati
IMFON = Imposta Fondiaria
IMRIC = Imposta di Ricchezza Mobile
IMFAB = Imposte di Fabbricazione
IMERA = Imposte Erariali e di Consumo
IMGEN = Imposte e Tasse in Genere
IMIPO = Imposte Ipotecarie e Catastali
INGEN = Industria, Commercio, Artigianato (Generalità)
INCAM = Industria, Commercio, Artigianato (Camere di)
INCRE = Industria, Commercio, Artigianato (Crediti)
INGAR = Ingegneri, Architetti, Geometri
INQUI = Inquinamento
INTE = Interprete
ISPRE = Istituti di Prevenzione e di Pena
ISPOL = Istituto Poligrafico e Zecca dello Stato
ISGEN = Istruzione (Generalità)
ISPER = Istruzione (Personale)
ISART = Istruzione (Artistica e Musicale)
ISELE = Istruzione (Elementare e Materna)
ISMED = Istruzione (Media e Secondaria)
ISPRO = Istruzione (Professionale e Tecnica)
ISSUP = Istruzione (Superiore)
ISEST = Istruzione (all'Estero)
ISPRI = Istruzione (Privata)
IVA = Iva

LAV = Lavoro
LAZ = Lazio
LEAS = Leasing
LEG = Leggi e Decreti
LIG = Liguria
LOC = Locazione di Cose
LOMB = Lombardia

MAR = Marche
MEZ = Mezzogiorno
MINIE = Miniere, Cave e Torbiere
MIGEN = Ministeri in genere
MIAFF = Ministero Affari Esteri
MIAGR = Ministero  Agricoltura e Foreste
MIAMB = Ministero Ambiente
MIBEN = Ministero Beni Culturali
MIBIL = Ministero Bilancio e Programmazione Economica
MICOM = Ministero Commercio con l'Estero
MIDIF = Ministero Difesa
MIFIN = Ministero Finanze
MIGRA = Ministero Grazia e Giustizia
MILAV = Ministero Lavori Pubblici
MIPRE = Ministero  Lavoro e Previdenza Sociale
MIIND = Ministero Industria, Commercio e Artigianato
MIINT = Ministero Interni
MIMAR = Ministero Marina Mercantile
MIPAR = Ministero Partecipazioni Statali
MIPOS = Ministero Poste e Telecomunicazioni
MIIST = Ministero Pubblica Istruzione
MISAN = Ministero Sanità
MITES = Ministero Tesoro
MITRA = Ministero Trasporti
MITUR = Ministero Turismo e Spettacolo
MIUNI = Ministero Università e Ricerca Scientifica
MOLI = Molise
MONE = Moneta
MONOP = Monopoli di Stato

NAAER = Navigazione Aerea
NAMAR = Navigazione Marittima
NAZIO = Nazioni Unite
NOTA = Notariato
NOTIF =  Notificazioni

OCCU =  Occupazione
OGGE =  Oggetti e sostanze non alimentari
OLI =  Oli Minerali, Idrocarburi e Gas
ONOR =  Onorificenze e Ordini
OPERE =  Opere Pubbliche
ORA =  Ora Legale
ORGEN =  Ordinamento Giudiziario (Generalità)
ORORG =  Ordinamento Giudiziario (Organi e Uffici)
ORPER =  Ordinamento Giudiziario (Personale)

PARL =  Parlamento
PART =  Partiti Politici
PASS =  Passaporti e Carte di Identità
PECIV =  Pensioni dei Dipendenti Civili e Militari dello Stato
PEGUE =  Pensioni di Guerra
PERIT =  Periti Industriali
PESC =  Pesca
PESI =  Pesi, Misure, Marchio etc.
PIEMO =  Piemonte
PIETR =  Pietre e Metalli Preziosi
PORTA =  Portatori di Handicap
PORTI =  Portinai
POSTE =  Poste e Telecomunicazioni
PREF = Prefetto e Prefettura
PRESI =  Presidente della Repubblica
PREZZ =  Prezzi
PROCA =  Procedimento Amministrativo
PROST =  Prostituzione
PROVV =  Provveditorato Generale dello Stato
PSI =  Psicologi
PS =  Pubblica Sicurezza
PUB =  Pubblicità
PUGL =  Puglia

RAPP =  Rapporti Giudiziari con l'Estero
REDD =  Redditi (Imposte sui)
REFE =  Referendum
REGI =  Regioni
REGIS =  Registro (Imposta di)
RICE =  Ricerca Scientifica e Tecnologica
RIFU =   Rifugiati e Profughi
RISC =   Riscaldamento

SAGEN =  Sanità, Sanitari, etc. (Generalità)
SAPER =  Sanità, Sanitari, etc. (Personale)
SAIGI =  Sanità, Sanitari, etc. (Igiene)
SAMED =  Sanità, Sanitari, etc. (Medicinali)
SAFAR =  Sanità, Sanitari, etc. (Farmacie e Farmacisti)
SAMAL =  Sanità, Sanitari, etc. (Malattie)
SANMA =  San Marino
SARD =  Sardegna
SEMPL =  Semplificazione
SEP =  Sepolture
SERV =  Servizi Segreti
SICIL =  Sicilia
SIGEN =  Sicurezza Sociale (Generalità)
SIASS =  Sicurezza Sociale (Assicurazioni Obbligatorie)
SIPEN =  Sicurezza Sociale (Fine Rapporto e Pensioni)
SIND =  Sindacati
SOC =  Società
SPAZ =  Spazio
SPET =  Spettacoli
SPIMP =  Spettacoli (Imposta sugli)
SPIRI =  Spiriti
SPORT =  Sport
STATI =  Statistica e Censimenti
STATO =  Stato Civile e Anagrafe
STUP =   Stupefacenti
STRA =  Strade
SUCC =  Successioni (Imposta sulle)

TASS = Tasse Automobilistiche
TERM = Termini (Sospensioni di)
TOSC =   Toscana
TRGEN =  Trasporti (Generalità)
TRAUT =  Trasporti  (Di merci mediante Autoveicoli)
TRMAR =  Trasporti  (Marittimi e Aerei)
TRPER =  Trasporti  (Personale)
TRINT =  Trasporti  Internazionali
TRMER =  Trasporti di merci pericolose
TRAT =   Trattati e Convenzioni Internazionali
TRENT =  Trentino Alto Adige
TRIB =   Tributi locali
TURI =   Turismo

UFIN =   Uffici finanziari
UMBR =   Umbria
UNIFI =  Unificazione del diritto
UNEUR =  Unione dell'Europa Occidentale
UNLAT =  Unione latina
USI = Usi
USICI =  Usi civili

VAL = Valle d'Aosta
VENDI = Vendite Mobiliari Internazionali
VENE = Veneto
VIGI = Vigili del Fuoco
VITA = Vitalizi

ZOGEN =  Zootecnia (Generalità)
ZOALL =  Zootecnia (Allevamento)
ZOESP =  Zootecnia (Esportazioni e importazioni)
ZOVAC =  Zootecnia (Malattie e vaccini)
ZOMAN =  Zootecnia (Mangimi)
ZOVET =  Zootecnia (Veterinari)


-------------------------------------- TAG SCELTI per l'ADVANCED SEARCH --------------------------------------

[ ZONE GEOGRAFICHE ] --> [REGIONI]
ABRU = Abruzzo
BASI = Basilicata
CALAB = Calabria
CAMPA = Campania
CIVAT = Città del Vaticano (Stato della)
EMILI =  Emilia Romagna
FRIU = Friuli Venezia Giulia
LAZ = Lazio
LIG = Liguria
LOMB = Lombardia
MAR = Marche
MEZ = Mezzogiorno
MOLI = Molise
PIEMO =  Piemonte
PUGL =  Puglia
SANMA =  San Marino
SARD =  Sardegna
SICIL = Sicilia
TOSC =   Toscana
TRENT =  Trentino Alto Adige
UMBR =   Umbria
VAL =    Valle d'Aosta
VENE = Veneto

[MINISTERI] ---> tutte le diciture sono da aggiornare / sostituire
MIGEN = Ministeri in genere
MIAFF = Ministero Affari Esteri
MIAGR = Ministero  Agricoltura e Foreste
MIAMB = Ministero Ambiente
MIBEN = Ministero Beni Culturali
MIBIL = Ministero Bilancio e Programmazione Economica
MICOM = Ministero Commercio con l'Estero
MIDIF = Ministero Difesa
MIFIN = Ministero Finanze
MIGRA = Ministero Grazia e Giustizia
MILAV = Ministero Lavori Pubblici
MIPRE = Ministero  Lavoro e Previdenza Sociale
MIIND = Ministero Industria, Commercio e Artigianato
MIINT = Ministero Interni
MIMAR = Ministero Marina Mercantile
MIPAR = Ministero Partecipazioni Statali
MIPOS = Ministero Poste e Telecomunicazioni
MIIST = Ministero Pubblica Istruzione
MISAN = Ministero Sanità
MITES = Ministero Tesoro
MITRA = Ministero Trasporti
MITUR = Ministero Turismo e Spettacolo
MIUNI = Ministero Università e Ricerca Scientifica

[ECONOMIA] ---> Diritto Commerciale &
AGENT = Agenti di commercio
ASSE = Assegni e Cambiali
BAITA = Banca d'Italia
BANCH = Banche
BENI = Beni di Stati Esteri in Italia
BOT =  Bot, CCT e Debito Pubblico
CAMBI = Cambi, Valute e Capitali stranieri
CASS = Cassa Depositi e Prestiti
COMM =  Commercialisti
CNEL = Consiglio Nazionale dell'Economia e del Lavoro
CRED = Credito Edilizio e Fondiario
CRESP = Credito all'Esportazione
ESDOG = Esportazioni e Importazioni (Dogane)
ESGEN = Esportazioni e Importazioni (Generalità)
FALL =  Fallimento
FONDI = Fondi Comuni di Investimento
INGEN = Industria, Commercio, Artigianato (Generalità)
INCAM = Industria, Commercio, Artigianato (Camere di)
INCRE = Industria, Commercio, Artigianato (Crediti)
ISPOL = Istituto Poligrafico e Zecca dello Stato
IVA = Iva
LEAS = Leasing
MONE = Moneta
MONOP = Monopoli di Stato
PECIV =  Pensioni dei Dipendenti Civili e Militari dello Stato
PEGUE =  Pensioni di Guerra
PREZZ =  Prezzi
REDD =  Redditi (Imposte sui)
UFIN =   Uffici finanziari
VENDI = Vendite Mobiliari Internazionali
VITA = Vitalizi

[TASSE e IMPOSTE]
BOL = Bollo (Imposta di)
CONCE = Concessioni (tasse sulle)
IMCOM = Imposta Complementare
IMCON = Imposta di Consumo
IMENT = Imposta di Entrata
IMCAS = Imposta Fabbricati
IMFON = Imposta Fondiaria
IMRIC = Imposta di Ricchezza Mobile
IMFAB = Imposte di Fabbricazione
IMERA = Imposte Erariali e di Consumo
IMGEN = Imposte e Tasse in Genere
IMIPO = Imposte Ipotecarie e Catastali
REDD =  Redditi (Imposte sui)
REGIS =  Registro (Imposta di)
SPIMP =  Spettacoli (Imposta sugli)
SUCC =  Successioni (Imposta sulle)
TASS = Tasse Automobilistiche

[LAVORO]
AGLAV = Agricoltura (Lavoro)
CNEL = Consiglio Nazionale dell'Economia e del Lavoro
CONSO = Consorzi e Imprese Cooperative
CONSU = Consulenti del Lavoro
IMPI = Impiego Pubblico
LAV = Lavoro
MILAV = Ministero Lavori Pubblici
MIPRE = Ministero  Lavoro e Previdenza Sociale
OCCU =  Occupazione

[PRODUZIONE e CONSUMAZIONE]
ACPUB = Acque pubbliche
AGGEN = Agricoltura (generalità)
AGLAV = Agricoltura (Lavoro)
AGPRO = Agricoltura (Prodotti)
AGCON = Agricoltura (Contratti)
AGCRE = Agricoltura (Credito)
AGANT = Agricoltura (Antiparassitari, Anticrittogamici, etc.)
AGRO = Agronomi
ALIM = Alimenti (Diritto agli)
ALCON = Alimenti (Confezionamento)
ADOC = Alimenti (Doc e Marchi)
ALADD = Alimenti (Additivi, Coloranti e Sofisticazioni)
ALANI = Alimenti (Origine Animale)
ALVEG = Alimenti (Origine Vegetale)
ALINF = Alimenti (Prima Infanzia e Prodotti Dietetici)
BECON = Bevande (Confezionamento)
BEDOC = Bevande (Doc e Marchi)
BEADD = Bevande (Additivi, coloranti, sofisticazioni)
BEALC = Bevande (Alcoliche)
BEANA = Bevande (Analcoliche)
SPIRI =  Spiriti

[SANITA']
ABOR = Aborto
ALCOL = Alcolismo
CRI = Croce Rossa Italiana
MISAN = Ministero Sanità
PORTA =  Portatori di Handicap
SAGEN =  Sanità, Sanitari, etc. (Generalità)
SAPER =  Sanità, Sanitari, etc. (Personale)
SAIGI =  Sanità, Sanitari, etc. (Igiene)
SAMED =  Sanità, Sanitari, etc. (Medicinali)
SAFAR =  Sanità, Sanitari, etc. (Farmacie e Farmacisti)
SAMAL =  Sanità, Sanitari, etc. (Malattie)
STUP =   Stupefacenti

[FORZE dell'ORDINE / SOCCORSI]
CARA = Carabinieri
FACOD = Codici Penali Militari
FAGEN = Forze Armate (Generalità)
FAPER = Forze Armate (Personale)
GUARD = Guardia di Finanza
PECIV = Pensioni dei Dipendenti Civili e Militari dello Stato
PS =  Pubblica Sicurezza
SERV =  Servizi Segreti
VIGI = Vigili del Fuoco

[ISTRUZIONE]
CULT = Cultura e Beni Culturali
ISGEN = Istruzione (Generalità)
ISPER = Istruzione (Personale)
ISART = Istruzione (Artistica e Musicale)
ISELE = Istruzione (Elementare e Materna)
ISMED = Istruzione (Media e Secondaria)
ISPRO = Istruzione (Professionale e Tecnica)
ISSUP = Istruzione (Superiore)
ISEST = Istruzione (all'Estero)
ISPRI = Istruzione (Privata)
MIIST = Ministero Pubblica Istruzione

[BENI PRIMARI]
ACPOT = Acque potabili e acquedotti
ENEL = Energia Elettrica
PASS =  Passaporti e Carte di Identità
RISC =   Riscaldamento
STRA =  Strade

[BENI SECONDARI]
ASCEN =  Ascensori, Montacarichi e Scale Mobili
BECON = Bevande (Confezionamento)
BEDOC = Bevande (Doc e Marchi)
BEADD = Bevande (Additivi, coloranti, sofisticazioni)
BEALC = Bevande (Alcoliche)
BEANA = Bevande (Analcoliche)
CART = Cartine per Sigarette
FIAM = Fiammiferi
FRANC = Francobolli, Cartoline e altri valori postali
OGGE =  Oggetti e sostanze non alimentari
PESC =  Pesca
PIETR =  Pietre e Metalli Preziosi
PROST =  Prostituzione
PUB =  Pubblicità
SEP =  Sepolture
STUP =   Stupefacenti
TRGEN =  Trasporti (Generalità)
TRMAR =  Trasporti  (Marittimi e Aerei)
TRPER =  Trasporti  (Personale)
TRINT =  Trasporti  Internazionali

[INTRATTENIMENTO e TURISMO]
ACTER = Acque termali e terme
ALB = Alberghi, Pensioni, Locande, etc.
ALPIN = Alpinismo
BOSC = Boschi e Foreste
CACCI = Caccia
ESPOS = Esposizioni, Mostre, Fiere e Mercati
FARI = Porti, Fari, Spiagge, Pilotaggio
GIOC = Giochi e Concorsi
SPET =  Spettacoli
SPIMP =  Spettacoli (Imposta sugli)
SPIRI =  Spiriti
SPORT =  Sport
TURI =   Turismo

[IMPIEGHI SPECIFICI]
BARB = Barbieri e Parrucchieri
CONSU = Consulenti del Lavoro
FACC = Facchinaggio
INTE = Interprete
NOTA = Notariato
PERIT =  Periti Industriali
PORTI =  Portinai
PSI =  Psicologi

[IMPORTANTI secondo il signor LUIGI]
???




*/