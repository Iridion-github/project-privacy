
import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Form,
  Jumbotron,
  Row
} from 'react-bootstrap';
import { FilterByAutore } from './filterSections/FilterByAutore';
import { FilterByAutorità } from './filterSections/FilterByAutorità';
import { FilterByCodice } from './filterSections/FilterByCodice';
import { FilterByData } from './filterSections/FilterByData';
import { FilterByFormulario } from './filterSections/FilterByFormulario';
import { FilterByGazzettaUfficiale } from './filterSections/FilterByGazzettaUfficiale';
import { FilterByLegge } from './filterSections/FilterByLegge';
import { FilterByProvvedimento } from './filterSections/FilterByProvvedimento';
import { FilterBySubject } from './filterSections/FilterBySubject'; //Filtro per Argomenti (da rivedere)
import { FilterByTesto } from './filterSections/FilterByTesto'; //Comportamento ricerca testuale
import { FilterByTitoloVsContenuto } from './filterSections/FilterByTitoloVsContenuto';
import { FilterByTestoUnico } from './filterSections/FilterByTestoUnico';
import {
  arrAutorità,
  arrCodice,
  arrSottonumero as arrSottonumeroRaw,
  arrLegge,
  arrProvvedimento,
  arrCategoriaProvvedimento,
  arrFormulario,
  arrCittà as arrCittàRaw,
  arrTestoUnico
} from '../../utils/advancedSearch';
import { useAppContext } from "../../context/contextLib";


export const AdvancedSearch = function (props) {
  const { currentLang, changeSiteLang } = useAppContext();

  const [previousTab, setPreviousTab] = useState(props.shownTab);

  const handleChangePreviousTab = (targetTab) => {
    setPreviousTab(targetTab);
  };

  const toggleInclude = (propsArr) => {
    const newFilterState = { ...filtersState };
    if (Array.isArray(newFilterState[propsArr[0]])) {
      newFilterState[propsArr[0]].find(el => el.label === propsArr[1]).checked = !newFilterState[propsArr[0]].find(el => el.label === propsArr[1]).checked;
    } else if (Array.isArray(newFilterState[propsArr[0]][propsArr[1]])) {
      newFilterState[propsArr[0]][propsArr[1]].find(el => el.label === propsArr[2]).checked = !newFilterState[propsArr[0]][propsArr[1]].find(el => el.label === propsArr[2]).checked;
    } else {
      console.log("ERROR: This case should NEVER happen.");
    }
    setFiltersState(newFilterState);
  };

  const [filtersState, setFiltersState] = useState({
    byExtension: [
      {
        label: "Doc",
        checked: true,
        onChange: () => toggleInclude(["byExtension", "Doc"])
      },
      {
        label: "Docx",
        checked: true,
        onChange: () => toggleInclude(["byExtension", "Docx"])
      },
      {
        label: "Pdf",
        checked: true,
        onChange: () => toggleInclude(["byExtension", "Pdf"])
      }
    ],
    bySubject: {
      byZoneGeog: [
        {
          label: "Abruzzo",
          checked: false,
          tag: "ABOR",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Abruzzo"])
        },
        {
          label: "Basilicata",
          checked: false,
          tag: "BASI",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Basilicata"])
        },
        {
          label: "Calabria",
          checked: false,
          tag: "CALAB",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Calabria"])
        },
        {
          label: "Campania",
          checked: false,
          tag: "CAMPA",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Campania"])
        },
        {
          label: "Emilia Romagna",
          checked: false,
          tag: "EMILI",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Emilia Romagna"])
        },
        {
          label: "Friuli Venezia Giulia",
          checked: false,
          tag: "FRIU",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Friuli Venezia Giulia"])
        },
        {
          label: "Lazio",
          checked: false,
          tag: "LAZ",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Lazio"])
        },
        {
          label: "Liguria",
          checked: false,
          tag: "LIG",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Liguria"])
        },
        {
          label: "Lombardia",
          checked: false,
          tag: "LOMB",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Lombardia"])
        },
        {
          label: "Marche",
          checked: false,
          tag: "MAR",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Marche"])
        },
        {
          label: "Molise",
          checked: false,
          tag: "MOLI",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Molise"])
        },
        {
          label: "Piemonte",
          checked: false,
          tag: "PIEMO",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Piemonte"])
        },
        {
          label: "Puglia",
          checked: false,
          tag: "PUGL",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Puglia"])
        },
        {
          label: "Sardegna",
          checked: false,
          tag: "SARD",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Sardegna"])
        },
        {
          label: "Sicilia",
          checked: false,
          tag: "SICIL",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Sicilia"])
        },
        {
          label: "Toscana",
          checked: false,
          tag: "TOSC",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Toscana"])
        },
        {
          label: "Trentino Alto Adige",
          checked: false,
          tag: "TRENT",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Trentino Alto Adige"])
        },
        {
          label: "Umbria",
          checked: false,
          tag: "UMBR",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Umbria"])
        },
        {
          label: "Valle d'Aosta",
          checked: false,
          tag: "VAL",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Valle d'Aosta"])
        },
        {
          label: "Veneto",
          checked: false,
          tag: "VENE",
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Veneto"])
        }
      ],
      byMinistero: [




        {
          label: "Affari Esteri",
          checked: false,
          tag: null, //[MEMO] Missing tag!
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Affari Esteri"])
        },
        {
          label: "Economia e Finanze",
          checked: false,
          tag: "MEF",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Economia e Finanze"])
        },
        {
          label: "Politiche Agricole-Alimentari-Forestali",
          checked: false,
          tag: "MIAGR",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Politiche Agricole-Alimentari-Forestali"])
        },
        {
          label: "Transizione Ecologica",
          checked: false,
          tag: "MIAMB",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Transizione Ecologica"])
        },
        {
          label: "Cultura",
          checked: false,
          tag: "MICUL",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Cultura"])
        },
        {
          label: "Difesa",
          checked: false,
          tag: "MIDIF",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Difesa"])
        },
        {
          label: "Disabilità",
          checked: false,
          tag: "MIDISA",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Disabilità"])
        },
        {
          label: "Pari Opportunità e Famiglia",
          checked: false,
          tag: "MIFAM",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Pari Opportunità e Famiglia"])
        },
        {
          label: "Politiche Giovanili",
          checked: false,
          tag: "MIGIOV",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Politiche Giovanili"])
        },
        {
          label: "Giustizia",
          checked: false,
          tag: "MIGIUS",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Giustizia"])
        },
        {
          label: "Politiche Sociali",
          checked: false,
          tag: "MILAV",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Politiche Sociali"])
        },
        {
          label: "Infrastrutture e Mobilità sostenibili",
          checked: false,
          tag: "MINFR",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Infrastrutture e Mobilità sostenibili"])
        },
        {
          label: "Interno",
          checked: false,
          tag: "MINT",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Interno"])
        },
        {
          label: "Pubblica Amministrazione",
          checked: false,
          tag: "MIPA",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Pubblica Amministrazione"])
        },
        {
          label: "Rapporti con il Parlamento",
          checked: false,
          tag: "MIPARL",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Rapporti con il Parlamento"])
        },
        {
          label: "Affari Regionali e Autonomie",
          checked: false,
          tag: "MIREG",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Affari Regionali e Autonomie"])
        },
        {
          label: "Salute",
          checked: false,
          tag: "MISAL",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Salute"])
        },
        {
          label: "Sviluppo Economico",
          checked: false,
          tag: "MISE",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Sviluppo Economico"])
        },
        {
          label: "Istruzione",
          checked: false,
          tag: "MISTR",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Istruzione"])
        },
        {
          label: "Sud e Coesione Territoriale",
          checked: false,
          tag: "MISUD",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Sud e Coesione Territoriale"])
        },
        {
          label: "Innovazione Tecnologica e Transizione Digitale",
          checked: false,
          tag: "MITECN",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Innovazione Tecnologica e Transizione Digitale"])
        },
        {
          label: "Turismo",
          checked: false,
          tag: "MITUR",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Turismo"])
        },
        {
          label: "Università e Ricerca",
          checked: false,
          tag: "MIUR",
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Università e Ricerca"])
        }
      ],
      byEconomia: [
        {
          label: "Agenti di commercio",
          checked: false,
          tag: "AGENT",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Agenti di commercio"])
        },
        {
          label: "Assegni e Cambiali",
          checked: false,
          tag: "ASSE",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Assegni e Cambiali"])
        },
        {
          label: "Banca d'Italia",
          checked: false,
          tag: "BAITA",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Banca d'Italia"])
        },
        {
          label: "Banche",
          checked: false,
          tag: "BANCH",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Banche"])
        },
        {
          label: "Beni di Stati Esteri",
          checked: false,
          tag: "BENI",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Beni di Stati Esteri"])
        },
        {
          label: "Bot, CCT e Debito Pubblico",
          checked: false,
          tag: "BOT",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Bot, CCT e Debito Pubblico"])
        },
        {
          label: "Cambi, Valute e Capitali stranieri",
          checked: false,
          tag: "CAMBI",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Cambi, Valute e Capitali stranieri"])
        },
        {
          label: "Cassa Depositi e Prestiti",
          checked: false,
          tag: "CASS",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Cassa Depositi e Prestiti"])
        },
        {
          label: "Commercialisti",
          checked: false,
          tag: "COMM",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Commercialisti"])
        },
        {
          label: "Consiglio Nazionale dell'Economia e del Lavoro",
          checked: false,
          tag: "CNEL",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Consiglio Nazionale dell'Economia e del Lavoro"])
        },
        {
          label: "Credito Edilizio e Fondiario",
          checked: false,
          tag: "CRED",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Credito Edilizio e Fondiario"])
        },
        {
          label: "Credito all'Esportazione",
          checked: false,
          tag: "CRESP",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Credito all'Esportazione"])
        },
        {
          label: "Esportazioni e Importazioni",
          checked: false,
          tag: ["ESDOG", "ESGEN"],
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Esportazioni e Importazioni"])
        },
        {
          label: "Fallimento",
          checked: false,
          tag: "FALL",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Fallimento"])
        },
        {
          label: "Fondi Comuni di Investimento",
          checked: false,
          tag: "FONDI",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Fondi Comuni di Investimento"])
        },
        {
          label: "Industria, Commercio, Artigianato",
          checked: false,
          tag: ["INGEN", "INCAM", "INCRE"],
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Industria, Commercio, Artigianato"])
        },
        {
          label: "Istituto Poligrafico e Zecca dello Stato",
          checked: false,
          tag: "ISPOL",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Istituto Poligrafico e Zecca dello Stato"])
        },
        {
          label: "Iva",
          checked: false,
          tag: "IVA",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Iva"])
        },
        {
          label: "Leasing",
          checked: false,
          tag: "LEAS",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Leasing"])
        },
        {
          label: "Moneta",
          checked: false,
          tag: "MONE",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Moneta"])
        },
        {
          label: "Monopoli di Stato",
          checked: false,
          tag: "MONOP",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Monopoli di Stato"])
        },
        {
          label: "Pensioni dei Dipendenti Civili e Militari dello Stato",
          checked: false,
          tag: "PECIV",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Pensioni dei Dipendenti Civili e Militari dello Stato"])
        },
        {
          label: "Pensioni di Guerra",
          checked: false,
          tag: "PEGUE",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Pensioni di Guerra"])
        },
        {
          label: "Prezzi",
          checked: false,
          tag: "PREZZ",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Prezzi"])
        },
        {
          label: "Redditi (Imposte sui)",
          checked: false,
          tag: "REDD",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Redditi (Imposte sui)"])
        },
        {
          label: "Uffici finanziari",
          checked: false,
          tag: "UFIN",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Uffici finanziari"])
        },
        {
          label: "Vendite Mobiliari Internazionali",
          checked: false,
          tag: "VENDI",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Vendite Mobiliari Internazionali"])
        },
        {
          label: "Vitalizi",
          checked: false,
          tag: "VITA",
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Vitalizi"])
        }
      ],
      byTasse: [
        {
          label: "Bollo (Imposta di)",
          checked: false,
          tag: "BOL",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Bollo (Imposta di)"])
        },
        {
          label: "Concessioni (tasse sulle)",
          checked: false,
          tag: "CONCE",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Concessioni (tasse sulle)"])
        },
        {
          label: "Imposta Complementare",
          checked: false,
          tag: "IMCOM",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta Complementare"])
        },
        {
          label: "Imposta di Consumo",
          checked: false,
          tag: "IMCON",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta di Consumo"])
        },
        {
          label: "Imposta di Entrata",
          checked: false,
          tag: "IMENT",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta di Entrata"])
        },
        {
          label: "Imposta Fabbricati",
          checked: false,
          tag: "IMCAS",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta Fabbricati"])
        },
        {
          label: "Imposta Fondiaria",
          checked: false,
          tag: "IMFON",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta Fondiaria"])
        },
        {
          label: "Imposta di Ricchezza Mobile",
          checked: false,
          tag: "IMRIC",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta di Ricchezza Mobile"])
        },
        {
          label: "Imposte di Fabbricazione",
          checked: false,
          tag: "IMFAB",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposte di Fabbricazione"])
        },
        {
          label: "Imposte Erariali e di Consumo",
          checked: false,
          tag: "IMERA",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposte Erariali e di Consumo"])
        },
        {
          label: "Imposte e Tasse in Genere",
          checked: false,
          tag: "IMGEN",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposte e Tasse in Genere"])
        },
        {
          label: "Imposte Ipotecarie e Catastali",
          checked: false,
          tag: "IMIPO",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposte Ipotecarie e Catastali"])
        },
        {
          label: "Redditi (Imposte sui)",
          checked: false,
          tag: "REDD",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Redditi (Imposte sui)"])
        },
        {
          label: "Registro (Imposta di)",
          checked: false,
          tag: "REGIS",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Registro (Imposta di)"])
        },
        {
          label: "Spettacoli (Imposta sugli)",
          checked: false,
          tag: "SPIMP",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Spettacoli (Imposta sugli)"])
        },
        {
          label: "Successioni (Imposta sulle)",
          checked: false,
          tag: "SUCC",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Successioni (Imposta sulle)"])
        },
        {
          label: "Tasse Automobilistiche",
          checked: false,
          tag: "TASS",
          onChange: () => toggleInclude(["bySubject", "byTasse", "Tasse Automobilistiche"])
        }
      ],
      byLavoro: [
        {
          label: "Agricoltura (Lavoro)",
          checked: false,
          tag: "AGLAV",
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Agricoltura (Lavoro)"])
        },
        {
          label: "Consiglio Nazionale dell'Economia e del Lavoro",
          checked: false,
          tag: "CNEL",
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Consiglio Nazionale dell'Economia e del Lavoro"])
        },
        {
          label: "Consorzi e Imprese Cooperative",
          checked: false,
          tag: "CONSO",
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Consorzi e Imprese Cooperative"])
        },
        {
          label: "Consulenti del Lavoro",
          checked: false,
          tag: "CONSU",
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Consulenti del Lavoro"])
        },
        {
          label: "Impiego Pubblico",
          checked: false,
          tag: "IMPI",
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Impiego Pubblico"])
        },
        {
          label: "Lavoro",
          checked: false,
          tag: "LAV",
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Lavoro"])
        },
        {
          label: "Ministero Lavori Pubblici",
          checked: false,
          tag: "MILAV",
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Ministero Lavori Pubblici"])
        },
        {
          label: "Ministero  Lavoro e Previdenza Sociale",
          checked: false,
          tag: "MIPRE",
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Ministero  Lavoro e Previdenza Sociale"])
        },
        {
          label: "Occupazione",
          checked: false,
          tag: "OCCU",
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Occupazione"])
        },
      ],
      byProduzione: [
        {
          label: "Acque pubbliche",
          checked: false,
          tag: "ACPUB",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Acque pubbliche"])
        },
        {
          label: "Agricoltura (generalità)",
          checked: false,
          tag: "AGGEN",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (generalità)"])
        },
        {
          label: "Agricoltura (Lavoro)",
          checked: false,
          tag: "AGLAV",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (Lavoro)"])
        },
        {
          label: "Agricoltura (Prodotti)",
          checked: false,
          tag: "AGPRO",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (Prodotti)"])
        },
        {
          label: "Agricoltura (Contratti)",
          checked: false,
          tag: "AGCON",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (Contratti)"])
        },
        {
          label: "Agricoltura (Credito)",
          checked: false,
          tag: "AGCRE",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (Credito)"])
        },
        {
          label: "Agricoltura (Antiparassitari)",
          checked: false,
          tag: "AGANT",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (Antiparassitari)"])
        },
        {
          label: "Agronomi",
          checked: false,
          tag: "AGRO",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agronomi"])
        },
        {
          label: "Alimenti (Diritto agli)",
          checked: false,
          tag: "ALIM",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Diritto agli)"])
        },
        {
          label: "Alimenti (Confezionamento)",
          checked: false,
          tag: "ALCON",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Confezionamento)"])
        },
        {
          label: "Alimenti (Doc e Marchi)",
          checked: false,
          tag: "ADOC",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Doc e Marchi)"])
        },
        {
          label: "Alimenti (Additivi, Coloranti e Sofisticazioni)",
          checked: false,
          tag: "ALADD",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Additivi, Coloranti e Sofisticazioni)"])
        },
        {
          label: "Alimenti (Origine Animale)",
          checked: false,
          tag: "ALANI",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Origine Animale)"])
        },
        {
          label: "Alimenti (Origine Vegetale)",
          checked: false,
          tag: "ALVEG",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Origine Vegetale)"])
        },
        {
          label: "Alimenti (Prima Infanzia e Prodotti Dietetici)",
          checked: false,
          tag: "ALINF",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Prima Infanzia e Prodotti Dietetici)"])
        },
        {
          label: "Bevande (Confezionamento)",
          checked: false,
          tag: "BECON",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Bevande (Confezionamento)"])
        },
        {
          label: "Bevande (Doc e Marchi)",
          checked: false,
          tag: "BEDOC",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Bevande (Doc e Marchi)"])
        },
        {
          label: "Bevande (Additivi, coloranti, sofisticazioni)",
          checked: false,
          tag: "BEADD",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Bevande (Additivi, coloranti, sofisticazioni)"])
        },
        {
          label: "Bevande (Alcoliche)",
          checked: false,
          tag: "BEALC",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Bevande (Alcoliche)"])
        },
        {
          label: "Bevande (Analcoliche)",
          checked: false,
          tag: "BEANA",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Bevande (Analcoliche)"])
        },
        {
          label: "Spiriti",
          checked: false,
          tag: "SPIRI",
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Spiriti"])
        },
      ],
      bySanità: [
        {
          label: "Aborto",
          checked: false,
          tag: "ABOR",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Aborto"])
        },
        {
          label: "Alcolismo",
          checked: false,
          tag: "ALCOL",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Alcolismo"])
        },
        {
          label: "Croce Rossa Italiana",
          checked: false,
          tag: "CRI",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Croce Rossa Italiana"])
        },
        {
          label: "Ministero Sanità",
          checked: false,
          tag: "MISAN",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Ministero Sanità"])
        },
        {
          label: "Portatori di Handicap",
          checked: false,
          tag: "PORTA",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Portatori di Handicap"])
        },
        {
          label: "Sanità, Sanitari, etc. (Generalità)",
          checked: false,
          tag: "SAGEN",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Generalità)"])
        },
        {
          label: "Sanità, Sanitari, etc. (Personale)",
          checked: false,
          tag: "SAPER",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Personale)"])
        },
        {
          label: "Sanità, Sanitari, etc. (Igiene)",
          checked: false,
          tag: "SAIGI",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Igiene)"])
        },
        {
          label: "Sanità, Sanitari, etc. (Medicinali)",
          checked: false,
          tag: "SAMED",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Medicinali)"])
        },
        {
          label: "Sanità, Sanitari, etc. (Farmacie e Farmacisti)",
          checked: false,
          tag: "SAFAR",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Farmacie e Farmacisti)"])
        },
        {
          label: "Sanità, Sanitari, etc. (Malattie)",
          checked: false,
          tag: "SAMAL",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Malattie)"])
        },
        {
          label: "Stupefacenti",
          checked: false,
          tag: "STUP",
          onChange: () => toggleInclude(["bySubject", "bySanità", "Stupefacenti"])
        }
      ],
      byForzeOrdine: [
        {
          label: "Carabinieri",
          checked: false,
          tag: "CARA",
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Carabinieri"])
        },
        {
          label: "Codici Penali Militari",
          checked: false,
          tag: "FACOD",
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Codici Penali Militari"])
        },
        {
          label: "Forze Armate (Generalità)",
          checked: false,
          tag: "FAGEN",
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Forze Armate (Generalità)"])
        },
        {
          label: "Forze Armate (Personale)",
          checked: false,
          tag: "FAPER",
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Forze Armate (Personale)"])
        },
        {
          label: "Guardia di Finanza",
          checked: false,
          tag: "GUARD",
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Guardia di Finanza"])
        },
        {
          label: "Pensioni dei Dipendenti Civili e Militari dello Stato",
          checked: false,
          tag: "PECIV",
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Pensioni dei Dipendenti Civili e Militari dello Stato"])
        },
        {
          label: "Pubblica Sicurezza",
          checked: false,
          tag: "PS",
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Pubblica Sicurezza"])
        },
        {
          label: "Servizi Segreti",
          checked: false,
          tag: "SERV",
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Servizi Segreti"])
        },
        {
          label: "Vigili del Fuoco",
          checked: false,
          tag: "VIGI",
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Vigili del Fuoco"])
        },
      ],
      byIstruzione: [
        {
          label: "Cultura e Beni Culturali",
          checked: false,
          tag: "CULT",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Cultura e Beni Culturali"])
        },
        {
          label: "Istruzione (Generalità)",
          checked: false,
          tag: "ISGEN",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Generalità)"])
        },
        {
          label: "Istruzione (Personale)",
          checked: false,
          tag: "ISPER",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Personale)"])
        },
        {
          label: "Istruzione (Artistica e Musicale)",
          checked: false,
          tag: "ISART",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Artistica e Musicale)"])
        },
        {
          label: "Istruzione (Elementare e Materna)",
          checked: false,
          tag: "ISELE",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Elementare e Materna)"])
        },
        {
          label: "Istruzione (Media e Secondaria)",
          checked: false,
          tag: "ISMED",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Media e Secondaria)"])
        },
        {
          label: "Istruzione (Professionale e Tecnica)",
          checked: false,
          tag: "ISPRO",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Professionale e Tecnica)"])
        },
        {
          label: "Istruzione (Superiore)",
          checked: false,
          tag: "ISSUP",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Superiore)"])
        },
        {
          label: "Istruzione (all'Estero)",
          checked: false,
          tag: "ISEST",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (all'Estero)"])
        },
        {
          label: "Istruzione (Privata)",
          checked: false,
          tag: "ISPRI",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Privata)"])
        },
        {
          label: "Ministero Pubblica Istruzione",
          checked: false,
          tag: "MIIST",
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Ministero Pubblica Istruzione"])
        }
      ],
      byBeniPrimari: [
        {
          label: "Acque potabili e acquedotti",
          checked: false,
          tag: "ACPOT",
          onChange: () => toggleInclude(["bySubject", "byBeniPrimari", "Acque potabili e acquedotti"])
        },
        {
          label: "Energia Elettrica",
          checked: false,
          tag: "ENEL",
          onChange: () => toggleInclude(["bySubject", "byBeniPrimari", "Energia Elettrica"])
        },
        {
          label: "Passaporti e Carte di Identità",
          checked: false,
          tag: "PASS",
          onChange: () => toggleInclude(["bySubject", "byBeniPrimari", "Passaporti e Carte di Identità"])
        },
        {
          label: "Riscaldamento",
          checked: false,
          tag: "RISC",
          onChange: () => toggleInclude(["bySubject", "byBeniPrimari", "Riscaldamento"])
        },
        {
          label: "Strade",
          checked: false,
          tag: "STRA",
          onChange: () => toggleInclude(["bySubject", "byBeniPrimari", "Strade"])
        }
      ],
      byBeniSecondari: [
        {
          label: "Ascensori, Montacarichi e Scale Mobili",
          checked: false,
          tag: "ASCEN",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Ascensori, Montacarichi e Scale Mobili"])
        },
        {
          label: "Bevande (Confezionamento)",
          checked: false,
          tag: "BECON",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Bevande (Confezionamento)"])
        },
        {
          label: "Bevande (Doc e Marchi)",
          checked: false,
          tag: "BEDOC",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Bevande (Doc e Marchi)"])
        },
        {
          label: "Bevande (Additivi, coloranti, sofisticazioni)",
          checked: false,
          tag: "BEADD",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Bevande (Additivi, coloranti, sofisticazioni)"])
        },
        {
          label: "Bevande (Alcoliche)",
          checked: false,
          tag: "BEALC",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Bevande (Alcoliche)"])
        },
        {
          label: "Bevande (Analcoliche)",
          checked: false,
          tag: "BEANA",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Bevande (Analcoliche)"])
        },
        {
          label: "Cartine per Sigarette",
          checked: false,
          tag: "CART",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Cartine per Sigarette"])
        },
        {
          label: "Fiammiferi",
          checked: false,
          tag: "FIAM",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Fiammiferi"])
        },
        {
          label: "Francobolli, Cartoline e altri valori postali",
          checked: false,
          tag: "FRANC",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Francobolli, Cartoline e altri valori postali"])
        },
        {
          label: "Oggetti e sostanze non alimentari",
          checked: false,
          tag: "OGGE",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Oggetti e sostanze non alimentari"])
        },
        {
          label: "Pesca",
          checked: false,
          tag: "PESC",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Pesca"])
        },
        {
          label: "Pietre e Metalli Preziosi",
          checked: false,
          tag: "PIETR",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Pietre e Metalli Preziosi"])
        },
        {
          label: "Prostituzione",
          checked: false,
          tag: "PROST",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Prostituzione"])
        },
        {
          label: "Pubblicità",
          checked: false,
          tag: "PUB",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Pubblicità"])
        },
        {
          label: "Sepolture",
          checked: false,
          tag: "SEP",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Sepolture"])
        },
        {
          label: "Stupefacenti",
          checked: false,
          tag: "STUP",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Stupefacenti"])
        },
        {
          label: "Trasporti (Generalità)",
          checked: false,
          tag: "TRGEN",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", ""])
        },
        {
          label: "Trasporti  (Marittimi e Aerei)",
          checked: false,
          tag: "TRMAR",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", ""])
        },
        {
          label: "Trasporti  (Personale)",
          checked: false,
          tag: "TRPER",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Trasporti  (Personale)"])
        },
        {
          label: "Trasporti  Internazionali",
          checked: false,
          tag: "TRINT",
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Trasporti  Internazionali"])
        },
      ],
      byIntrattenimento: [
        {
          label: "Acque termali e terme",
          checked: false,
          tag: "ACTER",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Acque termali e terme"])
        },
        {
          label: "Alberghi, Pensioni, Locande, etc.",
          checked: false,
          tag: "ALB",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Alberghi, Pensioni, Locande, etc."])
        },
        {
          label: "Alpinismo",
          checked: false,
          tag: "ALPIN",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Alpinismo"])
        },
        {
          label: "Boschi e Foreste",
          checked: false,
          tag: "BOSC",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Boschi e Foreste"])
        },
        {
          label: "Caccia",
          checked: false,
          tag: "CACCI",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Caccia"])
        },
        {
          label: "Esposizioni, Mostre, Fiere e Mercati",
          checked: false,
          tag: "ESPOS",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Esposizioni, Mostre, Fiere e Mercati"])
        },
        {
          label: "Porti, Fari, Spiagge, Pilotaggio",
          checked: false,
          tag: "FARI",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Porti, Fari, Spiagge, Pilotaggio"])
        },
        {
          label: "Giochi e Concorsi",
          checked: false,
          tag: "GIOC",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Giochi e Concorsi"])
        },
        {
          label: "Spettacoli",
          checked: false,
          tag: "SPET",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Spettacoli"])
        },
        {
          label: "Spettacoli (Imposta sugli)",
          checked: false,
          tag: "SPIMP",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Spettacoli (Imposta sugli)"])
        },
        {
          label: "Spiriti",
          checked: false,
          tag: "SPIRI",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Spiriti"])
        },
        {
          label: "Sport",
          checked: false,
          tag: "SPORT",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Sport"])
        },
        {
          label: "Turismo",
          checked: false,
          tag: "TURI",
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Turismo"])
        },
      ],
      byImpieghi: [
        {
          label: "Barbieri e Parrucchieri",
          checked: false,
          tag: "BARB",
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Barbieri e Parrucchieri"])
        },
        {
          label: "Consulenti del Lavoro",
          checked: false,
          tag: "CONSU",
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Consulenti del Lavoro"])
        },
        {
          label: "Facchinaggio",
          checked: false,
          tag: "FACC",
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Facchinaggio"])
        },
        {
          label: "Interprete",
          checked: false,
          tag: "INTE",
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Interprete"])
        },
        {
          label: "Notariato",
          checked: false,
          tag: "NOTA",
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Notariato"])
        },
        {
          label: "Periti Industriali",
          checked: false,
          tag: "PERIT",
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Periti Industriali"])
        },
        {
          label: "Portinai",
          checked: false,
          tag: "PORTI",
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Portinai"])
        },
        {
          label: "Psicologi",
          checked: false,
          tag: "PSI",
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Psicologi"])
        },
      ]
    },
    byAuthority: [
      {
        label: "indCorteCost",
        tag: ".ind corte",
        checked: false,
        onChange: () => toggleInclude(["byAuthority", "indCorteCost"])
      }
    ]
  });

  const [selectedOpzioneTestuale, setSelectedOpzioneTestuale] = useState("Contengono almeno 1 delle parole");

  const handleChangeOpzioneTestuale = (val) => {
    setSelectedOpzioneTestuale(val);
  };

  //Stato di Date (da -> a)

  const [startDate, setStartDate] = useState("");

  const handleChangeStartDate = (val) => {
    setStartDate(val);
  };

  const removeStartDate = () => {
    handleChangeStartDate("");
  };

  const [endDate, setEndDate] = useState("");

  const handleChangeEndDate = (val) => {
    setEndDate(val);
  };

  const removeEndDate = () => {
    handleChangeEndDate("");
  };

  //Stato di Data (singola) in Autorità
  const [dataFiltroAutorità, setDataFiltroAutorità] = useState({
    day: "",
    month: "",
    year: ""
  });

  const handleChangeDataFiltroAutorità = (which, val) => {
    const newState = { ...dataFiltroAutorità };
    if (
      which === "day" && val === "0"
      || which === "month" && val === "0"
      || which === "year" && val === "0"
      || which === "year" && val === "1799") {
      newState[which] = "";
    } else {
      newState[which] = val;
    }
    setDataFiltroAutorità(newState);
  };

  const [numAutorità, setNumAutorità] = useState("");

  const handleChangeNumAutorità = (val) => {
    if (val === "0") {
      setNumAutorità("");
    } else {
      setNumAutorità(val);
    }
  };

  const [arrCittà, setArrCittà] = useState([{ value: "", label: "-" }, ...arrCittàRaw.map(el => ({ value: el, label: el }))]);

  const [cittàAutorità, setCittàAutorità] = useState("");

  const handleChangeCittàAutorità = (opt) => {
    setCittàAutorità(opt.value);
  };

  const [artCodice, setArtCodice] = useState("");

  const handleChangeArtCodice = (val) => {
    if (val === "0") {
      setArtCodice("");
    } else {
      setArtCodice(val);
    }
  };

  const [dataFiltroLegge, setDataFiltroLegge] = useState({
    day: "",
    month: "",
    year: ""
  });

  const handleChangeDataFiltroLegge = (which, val) => {
    const newState = { ...dataFiltroLegge };
    if (
      which === "day" && val === "0"
      || which === "month" && val === "0"
      || which === "year" && val === "0"
      || which === "year" && val === "1799") {
      newState[which] = "";
    } else {
      newState[which] = val;
    }
    setDataFiltroLegge(newState);
  };

  const [artLegge, setArtLegge] = useState("");

  const handleChangeArtLegge = (val) => {
    if (val === "0") {
      setArtLegge("");
    } else {
      setArtLegge(val);
    }
  };

  const [numLegge, setNumLegge] = useState("");

  const handleChangeNumLegge = (val) => {
    if (val === "0") {
      setNumLegge("");
    } else {
      setNumLegge(val);
    }
  };

  const [tipoProvv, setTipoProvv] = useState("vigente");

  const handleChangeTipoProvv = (val) => {
    setTipoProvv(val);
  };

  const [dataFiltroProvv, setDataFiltroProvv] = useState({
    day: "",
    month: "",
    year: ""
  });

  const handleChangeDataFiltroProvv = (which, val) => {
    const newState = { ...dataFiltroProvv };
    if (
      which === "day" && val === "0"
      || which === "month" && val === "0"
      || which === "year" && val === "0"
      || which === "year" && val === "1799") {
      newState[which] = "";
    } else {
      newState[which] = val;
    }
    setDataFiltroProvv(newState);
  };

  const [artProvv, setArtProvv] = useState("");

  const handleChangeArtProvv = (val) => {
    if (val === "0") {
      setArtProvv("");
    } else {
      setArtProvv(val);
    }
  };

  const [numProvv, setNumProvv] = useState("");

  const handleChangeNumProvv = (val) => {
    if (val === "0") {
      setNumProvv("");
    } else {
      setNumProvv(val);
    }
  };

  const [allegatoProvv, setAllegatoProvv] = useState("");

  const handleChangeAllegatoProvv = (val) => {
    setAllegatoProvv(val);
  };

  const [dataFiltroGazz, setDataFiltroGazz] = useState({
    day: "",
    month: "",
    year: ""
  });

  const handleChangeDataFiltroGazz = (which, val) => {
    const newState = { ...dataFiltroGazz };
    if (
      which === "day" && val === "0"
      || which === "month" && val === "0"
      || which === "year" && val === "0"
      || which === "year" && val === "1799") {
      newState[which] = "";
    } else {
      newState[which] = val;
    }
    setDataFiltroGazz(newState);
  };

  const [numGazz, setNumGazz] = useState("");

  const handleChangeNumGazz = (val) => {
    if (val === "0") {
      setNumGazz("");
    } else {
      setNumGazz(val);
    }
  };

  //Stato del Filtro per Autore in "Note e Dottrina". Per ora è solo un text input, in futuro potrebe diventare un Autosuggest
  const [autoreNoteDottr, setAutoreNoteDottr] = useState("");

  const handleChangeAutoreNoteDottr = (val) => {
    setAutoreNoteDottr(val);
  };

  const [selectedAutorità, setSelectedAutorità] = useState("");

  const handleChangeAutorità = (val) => {
    setSelectedAutorità(val);
  };

  const [selectedCodice, setSelectedCodice] = useState("");

  const handleChangeCodice = (val) => {
    setSelectedCodice(val);
  };

  const [arrSottonumero, setArrSottonumero] = useState(arrSottonumeroRaw.map(el => ({ value: el, label: el, selected: false })));

  const handleChangeArrSottonumero = (arr) => {
    setArrSottonumero(arr);
  };

  const handleAddSottonumero = (val) => {
    handleChangeArrSottonumero([...arrSottonumero].map(opt => {
      if (opt.value === val) {
        opt.selected = true;
      }
      return opt;
    }));
  };

  const handleRemoveSottonumero = (val) => {
    if (val === "REMOVE_ALL") {
      handleChangeArrSottonumero([...arrSottonumero].map(el => ({ ...el, selected: false })));
    } else {
      handleChangeArrSottonumero([...arrSottonumero].map(opt => {
        if (opt.value === val) {
          opt.selected = false;
        }
        return opt;
      }));
    }
  };

  const [selectedSezioneAutorità, setSelectedSezioneAutorità] = useState("");

  const handleChangeSezioneAutorità = (val) => {
    setSelectedSezioneAutorità(val);
  };

  const [selectedRegione, setSelectedRegione] = useState("");

  const handleChangeRegione = (val) => {
    setSelectedRegione(val);
  };


  const [selectedLegge, setSelectedLegge] = useState("");

  const handleChangeLegge = (val) => {
    setSelectedLegge(val);
  };

  const [selectedProvvedimento, setSelectedProvvedimento] = useState("");

  const handleChangeProvvedimento = (val) => {
    if (val === "-") {
      resetProvvedimento();
    } else {
      setSelectedProvvedimento(val);
    }
  };

  const [selectedCategoriaProvvedimento, setSelectedCategoriaProvvedimento] = useState("");

  const handleChangeCategoriaProvvedimento = (val) => {
    setSelectedCategoriaProvvedimento(val);
  };

  const [selectedFormulario, setSelectedFormulario] = useState("");

  const handleChangeFormulario = (val) => {
    setSelectedFormulario(val);
  };

  const [whereToSearch, setWhereToSearch] = useState("");

  const handleWhereToSearch = (val) => {
    setWhereToSearch(val);
  };

  const [selectedTestoUnico, setSelectedTestoUnico] = useState("");

  const handleChangeTestoUnico = (val) => {
    setSelectedTestoUnico(val);
  };

  const [keyForReset, setKeyForReset] = useState(true);

  const getMinifiedFilterState = (startObject) => {
    const oldFilterState = JSON.parse(JSON.stringify(startObject));
    const newFilterState = JSON.parse(JSON.stringify(startObject));
    const externalProps = Object.keys(oldFilterState);
    for (let x = 0; x < externalProps.length; x++) {
      if (externalProps[x] === "byAuthority" || externalProps[x] === "byExtension") {
        const editedArr = oldFilterState[externalProps[x]].filter(el => el.checked === true);
        newFilterState[externalProps[x]] = editedArr;
      }
      if (externalProps[x] === "bySubject") {
        const internalProps = Object.keys(oldFilterState[externalProps[x]]);
        //Lascio negli array, solo gli oggetti che hanno checked: true
        for (let y = 0; y < internalProps.length; y++) {
          const editedArr = oldFilterState[externalProps[x]][internalProps[y]].filter(el => el.checked === true);
          newFilterState[externalProps[x]][internalProps[y]] = editedArr;
        }
        //Elimino gli array vuoti
        for (let y = 0; y < internalProps.length; y++) {
          const emptyArr = oldFilterState[externalProps[x]][internalProps[y]].length === 0;
          if (emptyArr) {
            const parent = oldFilterState[externalProps[x]];
            delete newFilterState[externalProps[x]][internalProps[y]];
          }
        }
      }
    }
    Object.keys(newFilterState).forEach(prop => {
      if (Array.isArray(newFilterState[prop])) {
        //newFilterState[prop] is an array
        if (newFilterState[prop].length === 0) {
          //delete empty array on the first level
          delete newFilterState[prop];
        }
      } else {
        //newFilterState[prop] is an object
        const innerObject = newFilterState[prop];
        Object.keys(innerObject).forEach(subProp => {
          if (innerObject[subProp].length === 0) {
            //delete empty array on the second level
            delete innerObject[subProp];
          }
        });
      }
    });
    return newFilterState;
  };

  const submitAdvancedSearch = async () => {
    try {
      props.setLoading(true);
      const minifiedFilterState = getMinifiedFilterState(filtersState);
      //Inizio compilazione del filtro per Provvedimento
      const filterByProvvedimento = {};
      if (selectedProvvedimento !== "") filterByProvvedimento.provv = selectedProvvedimento;
      console.log("tipoProvv should this should never be undefined/null/empty_string:", tipoProvv); //this should never be undefined/null/""
      if (tipoProvv) filterByProvvedimento.tipo = tipoProvv;
      if (dataFiltroProvv.day || dataFiltroProvv.month || dataFiltroProvv.year) filterByProvvedimento.data = {
        day: null,
        month: null,
        year: null
      };
      if (dataFiltroProvv.day) filterByProvvedimento.data.day = dataFiltroProvv.day;
      if (dataFiltroProvv.month) filterByProvvedimento.data.month = dataFiltroProvv.month;
      if (dataFiltroProvv.year) filterByProvvedimento.data.year = dataFiltroProvv.year;
      if (arrSottonumero.filter(el => el.selected === true).length > 0) filterByProvvedimento.arrSottonumero = arrSottonumero.filter(el => el.selected === true);
      if (artProvv) filterByProvvedimento.articolo = artProvv;
      if (numProvv) filterByProvvedimento.numero = numProvv;
      if (selectedCategoriaProvvedimento) filterByProvvedimento.categoria = selectedCategoriaProvvedimento;
      if (allegatoProvv) filterByProvvedimento.allegato = allegatoProvv;
      //Fine compilazione del filtro per Provvedimento
      //Se filterByProvvedimento ha almeno una voce (oltre alla data, oggetto pieno di prop settate a null di default) lo addo al filterState
      if (Object.keys(filterByProvvedimento).length > 1) {
        console.log("adding byProvvedimento to activeFilters. filterByProvvedimento:", filterByProvvedimento);
        minifiedFilterState.byProvvedimento = filterByProvvedimento;
      } else {
        console.log("NOT adding byProvvedimento to activeFilters. filterByProvvedimento:", filterByProvvedimento);
      }
      //console.log("minifiedFilterState before becoming string:", minifiedFilterState);
      const filtersStateStr = JSON.stringify(minifiedFilterState);
      const resJson = await fetch(`http://localhost:3000/api/archive/advancedSearch?searchterms=${props.searchInput}&activeFilters=${filtersStateStr}`, {
        method: 'GET',
        headers: {
          key: 'Access-Control-Allow-Origin',
          value: '*'
        }
      })
        .then(response => {
          console.log("1 - response:", response);
          return response.json();
        })
        .then(async response => {
          console.log("2 - response:", response);
          props.handleSetSearchResult(response.data.filteredDocs);
          props.handleSetSearched(props.searchInput, filtersState);
          props.setLoading(false);
        });
    } catch (error) {
      console.log("submitAdvancedSearch error:", error);
    }
  };

  const resetAllegatoProvv = () => {
    handleChangeAllegatoProvv("");
  };

  const resetArrSottonumero = () => {
    handleChangeArrSottonumero(arrSottonumero.map(el => ({ ...el, selected: false })));
  };

  const resetArtCodice = () => {
    handleChangeArtCodice("");
  };

  const resetArtLegge = () => {
    handleChangeArtLegge("");
  };

  const resetArtProvv = () => {
    handleChangeArtProvv("");
  };

  const resetAutoreNoteDottr = () => {
    handleChangeAutoreNoteDottr("");
  };

  const resetAutorità = () => {
    handleChangeAutorità("");
  };

  const resetCategoriaProvvedimento = () => {
    handleChangeCategoriaProvvedimento("");
  };

  const resetCittàAutorità = () => {
    setCittàAutorità("");
    setKeyForReset(!keyForReset);
  };

  const resetCodice = () => {
    handleChangeCodice("");
  };

  const resetDataFiltroAutorità = () => {
    setDataFiltroAutorità({
      day: "",
      month: "",
      year: ""
    });
  };

  const resetDataFiltroGazz = () => {
    setDataFiltroGazz({
      day: "",
      month: "",
      year: ""
    });
  };

  const resetDataFiltroLegge = () => {
    setDataFiltroLegge({
      day: "",
      month: "",
      year: ""
    });
  };

  const resetDataFiltroProvv = () => {
    setDataFiltroProvv({
      day: "",
      month: "",
      year: ""
    });
  };

  const resetEndDate = () => {
    handleChangeEndDate("");
  };

  const resetFormulario = () => {
    handleChangeFormulario("");
  };

  const resetLegge = () => {
    handleChangeLegge("");
  };

  const resetNumAutorità = () => {
    handleChangeNumAutorità("");
  };

  const resetNumGazz = () => {
    handleChangeNumGazz("");
  };

  const resetNumLegge = () => {
    handleChangeNumLegge("");
  };

  const resetNumProvv = () => {
    handleChangeNumProvv("");
  };

  const resetOpzioneTestuale = () => {
    handleChangeOpzioneTestuale("");
  };

  const resetProvvedimento = () => {
    handleChangeProvvedimento("");
  };

  const resetSelectedRegione = () => {
    handleChangeRegione("");
  };

  const resetSezioneAutorità = () => {
    handleChangeSezioneAutorità("");
  };

  const resetStartDate = () => {
    handleChangeStartDate("");
  };

  const resetTipoProvv = () => {
    handleChangeTipoProvv("");
  };

  const resetWhereToSearch = () => {
    handleWhereToSearch("In qualsiasi punto del documento");
  };

  const resetTestoUnico = () => {
    handleChangeTestoUnico("");
  };

  const resetFilterState = () => {
    const initialState = { ...filtersState };
    const arraysOfPropsToReset = Object.values(initialState.bySubject);
    console.log("initialState.bySubject before for:", initialState.bySubject);
    for (let x = 0; x < arraysOfPropsToReset.length; x++) {
      const arrayName = Object.keys(initialState.bySubject)[x];
      const resettedArray = arraysOfPropsToReset[x].map(el => ({ ...el, checked: false }));
      initialState.bySubject[arrayName] = resettedArray;
    }
    console.log("initialState.bySubject after for:", initialState.bySubject);
    setFiltersState(initialState);
  };

  //[Memo] Mancano i reset-filtri divisi in sezione. Per esempio "resetFiltroProvv" che contiene: [resetProvv, resetTipoProvv, resetDataProvv, resetSottonumeroProvv, resetArticoloProvv, resetNumeroProvv, resetArgomentoProvv, resetAllegatoProvv]
  const resetFilterByProvvedimento = () => {
    resetAllegatoProvv();
    resetArtProvv();
    resetCategoriaProvvedimento();
    resetDataFiltroProvv();
    resetNumProvv();
    resetProvvedimento();
    resetTipoProvv();
    resetArrSottonumero();
  };

  const resetFilterByAutorità = () => {
    resetAutorità();
    resetDataFiltroAutorità();
    resetNumAutorità();
    resetSezioneAutorità();
    resetCittàAutorità();
    resetSelectedRegione();
  };

  const resetFilterByCodice = () => {
    resetCodice();
    resetArtCodice();
    resetArrSottonumero();
  };

  const resetFilterByLegge = () => {
    resetLegge();
    resetDataFiltroLegge();
    resetArtLegge();
    resetNumLegge();
  };

  const resetAdvancedSearch = () => {
    resetAllegatoProvv();
    resetArrSottonumero();
    resetArtCodice();
    resetArtLegge();
    resetArtProvv();
    resetAutoreNoteDottr();
    resetAutorità();
    resetCategoriaProvvedimento();
    resetCittàAutorità();
    resetCodice();
    resetDataFiltroAutorità();
    resetDataFiltroGazz();
    resetDataFiltroLegge();
    resetDataFiltroProvv();
    resetEndDate();
    resetFormulario();
    resetLegge();
    resetNumAutorità();
    resetNumGazz();
    resetNumLegge();
    resetNumProvv();
    resetOpzioneTestuale();
    resetProvvedimento();
    resetSelectedRegione();
    resetSezioneAutorità();
    resetStartDate();
    resetTipoProvv();
    resetWhereToSearch();
    resetTestoUnico();
    resetFilterState();
  };

  useEffect(() => {
    //code to execute at every state update
    const timestamp = Date.now();
    if (previousTab !== props.shownTab) {
      resetAdvancedSearch();
      handleChangePreviousTab(props.shownTab);
    }
  });

  return (
    <Row className="w-100 mt-2 ml-0 mr-0">
      <Jumbotron className="w-100 pt-4 pb-4">
        <Form>
          {/* Comportamento ricerca testuale: parole/sequenza/lista */}
          <FilterByTesto
            selectedOpzioneTestuale={selectedOpzioneTestuale}
            handleChangeOpzioneTestuale={handleChangeOpzioneTestuale}
          />
          {/* Comportamento ricerca testuale: titolo/contenuto */}
          {(props.shownTab === "noteedottrina"
            || props.shownTab === "formulari") &&
            <FilterByTitoloVsContenuto
              whereToSearch={whereToSearch}
              handleWhereToSearch={handleWhereToSearch}
            />}
          {/* Filtro per Data */}
          {(
            props.shownTab === "giurisprudenza"
            || props.shownTab === "normativa"
            || props.shownTab === "noteedottrina"
          ) && <FilterByData
              startDate={startDate}
              handleChangeStartDate={handleChangeStartDate}
              removeStartDate={removeStartDate}
              endDate={endDate}
              handleChangeEndDate={handleChangeEndDate}
              removeEndDate={removeEndDate}
            />}
          {/* Filtro per Autorità */}
          {(props.shownTab === "giurisprudenza") &&
            <FilterByAutorità
              arrAutorità={arrAutorità}
              selectedAutorità={selectedAutorità}
              handleChangeAutorità={handleChangeAutorità}
              dataFiltroAutorità={dataFiltroAutorità}
              handleChangeDataFiltroAutorità={handleChangeDataFiltroAutorità}
              numAutorità={numAutorità}
              handleChangeNumAutorità={handleChangeNumAutorità}
              selectedSezione={selectedSezioneAutorità}
              handleChangeSezione={handleChangeSezioneAutorità}
              selectedRegione={selectedRegione}
              handleChangeRegione={handleChangeRegione}
              cittàAutorità={cittàAutorità}
              arrCittà={arrCittà}
              handleChangeCittàAutorità={handleChangeCittàAutorità}
              resetFilterSection={resetFilterByAutorità}
              keyForReset={keyForReset}
            />}
          {/* Filtro per Formulario */}
          {(props.shownTab === "formulari") &&
            <FilterByFormulario
              arrFormulario={arrFormulario}
              handleChangeFormulario={handleChangeFormulario}
              selectedFormulario={selectedFormulario}
              handleChangeFormulario={handleChangeFormulario}
            />}
          {/* Filtro per Codice */}
          {(props.shownTab === "giurisprudenza"
            || props.shownTab === "formulari") &&
            <FilterByCodice
              arrCodice={arrCodice}
              selectedCodice={selectedCodice}
              handleChangeCodice={handleChangeCodice}
              arrSottonumero={arrSottonumero}
              handleAddSottonumero={handleAddSottonumero}
              handleRemoveSottonumero={handleRemoveSottonumero}
              artCodice={artCodice}
              handleChangeArtCodice={handleChangeArtCodice}
              resetFilterSection={resetFilterByCodice}
            />}
          {/* Filtro per Legge */}
          {(props.shownTab === "giurisprudenza"
            || props.shownTab === "formulari") &&
            <FilterByLegge
              arrLegge={arrLegge}
              handleChangeLegge={handleChangeLegge}
              selectedLegge={selectedLegge}
              handleChangeLegge={handleChangeLegge}
              dataFiltroLegge={dataFiltroLegge}
              handleChangeDataFiltroLegge={handleChangeDataFiltroLegge}
              numLegge={numLegge}
              handleChangeNumLegge={handleChangeNumLegge}
              artLegge={artLegge}
              handleChangeArtLegge={handleChangeArtLegge}
              resetFilterSection={resetFilterByLegge}
            />}
          {(props.shownTab === "noteedottrina") &&
            <FilterByAutore
              autoreNoteDottr={autoreNoteDottr}
              handleChangeAutoreNoteDottr={handleChangeAutoreNoteDottr}
            />}
          {/* Filtro per Provvedimento */}
          {(props.shownTab === "normativa") &&
            <FilterByProvvedimento
              arrProvvedimento={arrProvvedimento}
              handleChangeProvvedimento={handleChangeProvvedimento}
              arrSottonumero={arrSottonumero}
              handleAddSottonumero={handleAddSottonumero}
              handleRemoveSottonumero={handleRemoveSottonumero}
              arrCategoriaProvvedimento={arrCategoriaProvvedimento}
              handleChangeCategoriaProvvedimento={handleChangeCategoriaProvvedimento}
              selectedProvvedimento={selectedProvvedimento}
              handleChangeProvvedimento={handleChangeProvvedimento}
              selectedCategoriaProvvedimento={selectedCategoriaProvvedimento}
              handleChangeCategoriaProvvedimento={handleChangeCategoriaProvvedimento}
              tipoProvv={tipoProvv}
              handleChangeTipoProvv={handleChangeTipoProvv}
              dataFiltroProvv={dataFiltroProvv}
              handleChangeDataFiltroProvv={handleChangeDataFiltroProvv}
              numProvv={numProvv}
              handleChangeNumProvv={handleChangeNumProvv}
              artProvv={artProvv}
              handleChangeArtProvv={handleChangeArtProvv}
              allegatoProvv={allegatoProvv}
              handleChangeAllegatoProvv={handleChangeAllegatoProvv}
              resetFilterSection={resetFilterByProvvedimento}
            />}
          {/* Filtro per Gazzetta Ufficiale */}
          {(props.shownTab === "normativa") &&
            <FilterByGazzettaUfficiale
              dataFiltroGazz={dataFiltroGazz}
              handleChangeDataFiltroGazz={handleChangeDataFiltroGazz}
              numGazz={numGazz}
              handleChangeNumGazz={handleChangeNumGazz}
            />}
          {/*Filtro per Testo Unico*/}
          {(props.shownTab === "giurisprudenza") &&
            <FilterByTestoUnico
              selectedTestoUnico={selectedTestoUnico}
              arrTestoUnico={arrTestoUnico}
              handleChangeTestoUnico={handleChangeTestoUnico}
            />
          }
          {/* Filtro per tipo di File (forse da scartare) */}
          {/*(props.shownTab === "giurisprudenza"
            || props.shownTab === "normativa"FilterByText
            || props.shownTab === "noteedottrina"
            || props.shownTab === "formulari") &&
            <FilterByExtension
              includeDoc={filtersState?.byExtension?.find(el => el.label === "Doc").checked}
              toggleIncludeDoc={() => toggleInclude(["byExtension", "Doc"])}
              includeDocx={filtersState?.byExtension?.find(el => el.label === "Docx").checked}
              toggleIncludeDocx={() => toggleInclude(["byExtension", "Docx"])}
              includePdf={filtersState?.byExtension?.find(el => el.label === "Pdf").checked}
              toggleIncludePdf={() => toggleInclude(["byExtension", "Pdf"])}
              indCorteCost={filtersState?.byAuthority?.find(el => el.label === "indCorteCost").checked}
              toggleIncludeIndCorteCost={() => toggleInclude(["byAuthority", "indCorteCost"])}
          />*/}
          {/* Filtro per Argomenti (da rivedere) */}
          {(props.shownTab === "giurisprudenza"
            || props.shownTab === "normativa"
            || props.shownTab === "normativa"
            || props.shownTab === "noteedottrina") &&
            <FilterBySubject
              zoneGeogList={filtersState.bySubject.byZoneGeog}
              ministeriList={filtersState.bySubject.byMinistero}
              economiaList={filtersState.bySubject.byEconomia}
              tasseImposteList={filtersState.bySubject.byTasse}
              lavoroList={filtersState.bySubject.byLavoro}
              produzConsumList={filtersState.bySubject.byProduzione}
              sanitàList={filtersState.bySubject.bySanità}
              forzeOrdineList={filtersState.bySubject.byForzeOrdine}
              istruzioneList={filtersState.bySubject.byIstruzione}
              beniPrimariList={filtersState.bySubject.byBeniPrimari}
              beniSecondariList={filtersState.bySubject.byBeniSecondari}
              intrattenimList={filtersState.bySubject.byIntrattenimento}
              impieghiList={filtersState.bySubject.byImpieghi}
            />
          }
        </Form>
        <Row className="w-100 ml-0 mr-0">
          <Col md={12} className="pr-0 pl-0 text-right">
            <Button
              variant={"info"}
              className="ml-1"
              onClick={() => submitAdvancedSearch()}
            > Ricerca Avanzata
              <i className="fas fa-search ml-2"></i>
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </Row >
  );
};



