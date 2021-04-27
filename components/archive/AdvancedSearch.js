
import { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Form,
  Jumbotron,
  Row
} from 'react-bootstrap'
import { useLanguage } from '../../context/siteLanguageContext' //context
import { FilterByAutore } from './filterSections/FilterByAutore'
import { FilterByAutorità } from './filterSections/FilterByAutorità'
import { FilterByCodice } from './filterSections/FilterByCodice'
import { FilterByData } from './filterSections/FilterByData'
import { FilterByFormulario } from './filterSections/FilterByFormulario'
import { FilterByGazzettaUfficiale } from './filterSections/FilterByGazzettaUfficiale'
import { FilterByLegge } from './filterSections/FilterByLegge'
import { FilterByProvvedimento } from './filterSections/FilterByProvvedimento'
import { FilterBySubject } from './filterSections/FilterBySubject' //Filtro per Argomenti (da rivedere)
import { FilterByTesto } from './filterSections/FilterByTesto' //Comportamento ricerca testuale
import { FilterByTitoloVsContenuto } from './filterSections/FilterByTitoloVsContenuto'
import { FilterByTestoUnico } from './filterSections/FilterByTestoUnico'
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
} from '../../utils/advancedSearch'


export const AdvancedSearch = function (props) {
  const siteLanguage = useLanguage() //context

  const [previousTab, setPreviousTab] = useState(props.shownTab)

  const handleChangePreviousTab = (targetTab) => {
    setPreviousTab(targetTab)
  }

  const toggleInclude = (propsArr) => {
    const newFilterState = { ...filtersState }
    if (Array.isArray(newFilterState[propsArr[0]])) {
      console.log("toggleInclude was called --> 1° case")
      newFilterState[propsArr[0]].find(el => el.label === propsArr[1]).checked = !newFilterState[propsArr[0]].find(el => el.label === propsArr[1]).checked
    } else if (Array.isArray(newFilterState[propsArr[0]][propsArr[1]])) {
      console.log("toggleInclude was called --> 2° case")
      newFilterState[propsArr[0]][propsArr[1]].find(el => el.label === propsArr[2]).checked = !newFilterState[propsArr[0]][propsArr[1]].find(el => el.label === propsArr[2]).checked
    } else {
      console.log("toggleInclude was called --> 3° case")
      console.log("ERROR: This case should NEVER happen.")
    }
    setFiltersState(newFilterState)
  }

  console.log("about to declare filtersState")

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
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Abruzzo"])
        },
        {
          label: "Basilicata",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Basilicata"])
        },
        {
          label: "Calabria",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Calabria"])
        },
        {
          label: "Campania",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Campania"])
        },
        {
          label: "Emilia Romagna",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Emilia Romagna"])
        },
        {
          label: "Friuli Venezia Giulia",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Friuli Venezia Giulia"])
        },
        {
          label: "Lazio",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Lazio"])
        },
        {
          label: "Liguria",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Liguria"])
        },
        {
          label: "Lombardia",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Lombardia"])
        },
        {
          label: "Marche",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Marche"])
        },
        {
          label: "Molise",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Molise"])
        },
        {
          label: "Piemonte",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Piemonte"])
        },
        {
          label: "Puglia",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Puglia"])
        },
        {
          label: "Sardegna",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Sardegna"])
        },
        {
          label: "Sicilia",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Sicilia"])
        },
        {
          label: "Toscana",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Toscana"])
        },
        {
          label: "Trentino Alto Adige",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Trentino Alto Adige"])
        },
        {
          label: "Umbria",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Umbria"])
        },
        {
          label: "Valle d'Aosta",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Valle d'Aosta"])
        },
        {
          label: "Veneto",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byZoneGeog", "Veneto"])
        }
      ],
      byMinistero: [
        {
          label: "Ministeri in genere",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Ministeri in genere"])
        },
        {
          label: "Affari Esteri",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Affari Esteri"])
        },
        {
          label: "Agricoltura e Foreste",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Agricoltura e Foreste"])
        },
        {
          label: "Ambiente",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Ambiente"])
        },
        {
          label: "Beni Culturali",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Beni Culturali"])
        },
        {
          label: "Bilancio e Programmazione Economica",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Bilancio e Programmazione Economica"])
        },
        {
          label: "Commercio con l'Estero",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Commercio con l'Estero"])
        },
        {
          label: "Difesa",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Difesa"])
        },
        {
          label: "Finanze",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Finanze"])
        },
        {
          label: "Grazia e Giustizia",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Grazia e Giustizia"])
        },
        {
          label: "Lavori Pubblici",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Lavori Pubblici"])
        },
        {
          label: "Lavoro e Previdenza Sociale",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Lavoro e Previdenza Sociale"])
        },
        {
          label: "Industria, Commercio e Artigianato",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Industria, Commercio e Artigianato"])
        },
        {
          label: "Interni",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Interni"])
        },
        {
          label: "Marina Mercantile",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Marina Mercantile"])
        },
        {
          label: "Partecipazioni Statali",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Partecipazioni Statali"])
        },
        {
          label: "Poste e Telecomunicazioni",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Poste e Telecomunicazioni"])
        },
        {
          label: "Pubblica Istruzione",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Pubblica Istruzione"])
        },
        {
          label: "Sanità",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Sanità"])
        },
        {
          label: "Tesoro",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Tesoro"])
        },
        {
          label: "Trasporti",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Trasporti"])
        },
        {
          label: "Turismo e Spettacolo",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Turismo e Spettacolo"])
        },
        {
          label: "Università e Ricerca Scientifica",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byMinistero", "Università e Ricerca Scientifica"])
        }
      ],
      byEconomia: [
        {
          label: "Agenti di commercio",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Agenti di commercio"])
        },
        {
          label: "Assegni e Cambiali",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Assegni e Cambiali"])
        },
        {
          label: "Banca d'Italia",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Banca d'Italia"])
        },
        {
          label: "Banche",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Banche"])
        },
        {
          label: "Beni di Stati Esteri",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Beni di Stati Esteri"])
        },
        {
          label: "Bot, CCT e Debito Pubblico",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Bot, CCT e Debito Pubblico"])
        },
        {
          label: "Cambi, Valute e Capitali stranieri",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Cambi, Valute e Capitali stranieri"])
        },
        {
          label: "Cassa Depositi e Prestiti",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Cassa Depositi e Prestiti"])
        },
        {
          label: "Commercialisti",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Commercialisti"])
        },
        {
          label: "Consiglio Nazionale dell'Economia e del Lavoro",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Consiglio Nazionale dell'Economia e del Lavoro"])
        },
        {
          label: "Credito Edilizio e Fondiario",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Credito Edilizio e Fondiario"])
        },
        {
          label: "Credito all'Esportazione",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Credito all'Esportazione"])
        },
        {
          label: "Esportazioni e Importazioni",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Esportazioni e Importazioni"])
        },
        {
          label: "Fallimento",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Fallimento"])
        },
        {
          label: "Fondi Comuni di Investimento",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Fondi Comuni di Investimento"])
        },
        {
          label: "Industria, Commercio, Artigianato",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Industria, Commercio, Artigianato"])
        },
        {
          label: "Istituto Poligrafico e Zecca dello Stato",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Istituto Poligrafico e Zecca dello Stato"])
        },
        {
          label: "Iva",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Iva"])
        },
        {
          label: "Leasing",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Leasing"])
        },
        {
          label: "Moneta",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Moneta"])
        },
        {
          label: "Monopoli di Stato",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Monopoli di Stato"])
        },
        {
          label: "Pensioni dei Dipendenti Civili e Militari dello Stato",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Pensioni dei Dipendenti Civili e Militari dello Stato"])
        },
        {
          label: "Pensioni di Guerra",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Pensioni di Guerra"])
        },
        {
          label: "Prezzi",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Prezzi"])
        },
        {
          label: "Redditi (Imposte sui)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Redditi (Imposte sui)"])
        },
        {
          label: "Uffici finanziari",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Uffici finanziari"])
        },
        {
          label: "Vendite Mobiliari Internazionali",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Vendite Mobiliari Internazionali"])
        },
        {
          label: "Vitalizi",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byEconomia", "Vitalizi"])
        }
      ],
      byTasse: [
        {
          label: "Bollo (Imposta di)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Bollo (Imposta di)"])
        },
        {
          label: "Concessioni (tasse sulle)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Concessioni (tasse sulle)"])
        },
        {
          label: "Imposta Complementare",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta Complementare"])
        },
        {
          label: "Imposta di Consumo",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta di Consumo"])
        },
        {
          label: "Imposta di Entrata",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta di Entrata"])
        },
        {
          label: "Imposta Fabbricati",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta Fabbricati"])
        },
        {
          label: "Imposta Fondiaria",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta Fondiaria"])
        },
        {
          label: "Imposta di Ricchezza Mobile",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposta di Ricchezza Mobile"])
        },
        {
          label: "Imposte di Fabbricazione",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposte di Fabbricazione"])
        },
        {
          label: "Imposte Erariali e di Consumo",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposte Erariali e di Consumo"])
        },
        {
          label: "Imposte e Tasse in Genere",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposte e Tasse in Genere"])
        },
        {
          label: "Imposte Ipotecarie e Catastali",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Imposte Ipotecarie e Catastali"])
        },
        {
          label: "Redditi (Imposte sui)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Redditi (Imposte sui)"])
        },
        {
          label: "Registro (Imposta di)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Registro (Imposta di)"])
        },
        {
          label: "Spettacoli (Imposta sugli)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Spettacoli (Imposta sugli)"])
        },
        {
          label: "Successioni (Imposta sulle)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Successioni (Imposta sulle)"])
        },
        {
          label: "Tasse Automobilistiche",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byTasse", "Tasse Automobilistiche"])
        }
      ],
      byLavoro: [
        {
          label: "Agricoltura (Lavoro)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Agricoltura (Lavoro)"])
        },
        {
          label: "Consiglio Nazionale dell'Economia e del Lavoro",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Consiglio Nazionale dell'Economia e del Lavoro"])
        },
        {
          label: "Consorzi e Imprese Cooperative",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Consorzi e Imprese Cooperative"])
        },
        {
          label: "Consulenti del Lavoro",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Consulenti del Lavoro"])
        },
        {
          label: "Impiego Pubblico",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Impiego Pubblico"])
        },
        {
          label: "Lavoro",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Lavoro"])
        },
        {
          label: "Ministero Lavori Pubblici",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Ministero Lavori Pubblici"])
        },
        {
          label: "Ministero  Lavoro e Previdenza Sociale",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Ministero  Lavoro e Previdenza Sociale"])
        },
        {
          label: "Occupazione",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byLavoro", "Occupazione"])
        },
      ],
      byProduzione: [
        {
          label: "Acque pubbliche",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Acque pubbliche"])
        },
        {
          label: "Agricoltura (generalità)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (generalità)"])
        },
        {
          label: "Agricoltura (Lavoro)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (Lavoro)"])
        },
        {
          label: "Agricoltura (Prodotti)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (Prodotti)"])
        },
        {
          label: "Agricoltura (Contratti)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (Contratti)"])
        },
        {
          label: "Agricoltura (Credito)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (Credito)"])
        },
        {
          label: "Agricoltura (Antiparassitari)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agricoltura (Antiparassitari)"])
        },
        {
          label: "Agronomi",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Agronomi"])
        },
        {
          label: "Alimenti (Diritto agli)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Diritto agli)"])
        },
        {
          label: "Alimenti (Confezionamento)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Confezionamento)"])
        },
        {
          label: "Alimenti (Doc e Marchi)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Doc e Marchi)"])
        },
        {
          label: "Alimenti (Additivi, Coloranti e Sofisticazioni)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Additivi, Coloranti e Sofisticazioni)"])
        },
        {
          label: "Alimenti (Origine Animale)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Origine Animale)"])
        },
        {
          label: "Alimenti (Origine Vegetale)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Origine Vegetale)"])
        },
        {
          label: "Alimenti (Prima Infanzia e Prodotti Dietetici)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Alimenti (Prima Infanzia e Prodotti Dietetici)"])
        },
        {
          label: "Bevande (Confezionamento)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Bevande (Confezionamento)"])
        },
        {
          label: "Bevande (Doc e Marchi)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Bevande (Doc e Marchi)"])
        },
        {
          label: "Bevande (Additivi, coloranti, sofisticazioni)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Bevande (Additivi, coloranti, sofisticazioni)"])
        },
        {
          label: "Bevande (Alcoliche)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Bevande (Alcoliche)"])
        },
        {
          label: "Bevande (Analcoliche)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Bevande (Analcoliche)"])
        },
        {
          label: "Spiriti",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byProduzione", "Spiriti"])
        },
      ],
      bySanità: [
        {
          label: "Aborto",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Aborto"])
        },
        {
          label: "Alcolismo",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Alcolismo"])
        },
        {
          label: "Croce Rossa Italiana",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Croce Rossa Italiana"])
        },
        {
          label: "Ministero Sanità",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Ministero Sanità"])
        },
        {
          label: "Portatori di Handicap",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Portatori di Handicap"])
        },
        {
          label: "Sanità, Sanitari, etc. (Generalità)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Generalità)"])
        },
        {
          label: "Sanità, Sanitari, etc. (Personale)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Personale)"])
        },
        {
          label: "Sanità, Sanitari, etc. (Igiene)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Igiene)"])
        },
        {
          label: "Sanità, Sanitari, etc. (Medicinali)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Medicinali)"])
        },
        {
          label: "Sanità, Sanitari, etc. (Farmacie e Farmacisti)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Farmacie e Farmacisti)"])
        },
        {
          label: "Sanità, Sanitari, etc. (Malattie)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Sanità, Sanitari, etc. (Malattie)"])
        },
        {
          label: "Stupefacenti",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "bySanità", "Stupefacenti"])
        }
      ],
      byForzeOrdine: [
        {
          label: "Carabinieri",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Carabinieri"])
        },
        {
          label: "Codici Penali Militari",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Codici Penali Militari"])
        },
        {
          label: "Forze Armate (Generalità)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Forze Armate (Generalità)"])
        },
        {
          label: "Forze Armate (Personale)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Forze Armate (Personale)"])
        },
        {
          label: "Guardia di Finanza",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Guardia di Finanza"])
        },
        {
          label: "Pensioni dei Dipendenti Civili e Militari dello Stato",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Pensioni dei Dipendenti Civili e Militari dello Stato"])
        },
        {
          label: "Pubblica Sicurezza",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Pubblica Sicurezza"])
        },
        {
          label: "Servizi Segreti",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Servizi Segreti"])
        },
        {
          label: "Vigili del Fuoco",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byForzeOrdine", "Vigili del Fuoco"])
        },
      ],
      byIstruzione: [
        {
          label: "Cultura e Beni Culturali",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Cultura e Beni Culturali"])
        },
        {
          label: "Istruzione (Generalità)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Generalità)"])
        },
        {
          label: "Istruzione (Personale)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Personale)"])
        },
        {
          label: "Istruzione (Artistica e Musicale)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Artistica e Musicale)"])
        },
        {
          label: "Istruzione (Elementare e Materna)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Elementare e Materna)"])
        },
        {
          label: "Istruzione (Media e Secondaria)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Media e Secondaria)"])
        },
        {
          label: "Istruzione (Professionale e Tecnica)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Professionale e Tecnica)"])
        },
        {
          label: "Istruzione (Superiore)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Superiore)"])
        },
        {
          label: "Istruzione (all'Estero)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (all'Estero)"])
        },
        {
          label: "Istruzione (Privata)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Istruzione (Privata)"])
        },
        {
          label: "Ministero Pubblica Istruzione",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIstruzione", "Ministero Pubblica Istruzione"])
        }
      ],
      byBeniPrimari: [
        {
          label: "Acque potabili e acquedotti",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniPrimari", "Acque potabili e acquedotti"])
        },
        {
          label: "Energia Elettrica",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniPrimari", "Energia Elettrica"])
        },
        {
          label: "Passaporti e Carte di Identità",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniPrimari", "Passaporti e Carte di Identità"])
        },
        {
          label: "Riscaldamento",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniPrimari", "Riscaldamento"])
        },
        {
          label: "Strade",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniPrimari", "Strade"])
        }
      ],
      byBeniSecondari: [
        {
          label: "Ascensori, Montacarichi e Scale Mobili",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Ascensori, Montacarichi e Scale Mobili"])
        },
        {
          label: "Bevande (Confezionamento)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Bevande (Confezionamento)"])
        },
        {
          label: "Bevande (Doc e Marchi)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Bevande (Doc e Marchi)"])
        },
        {
          label: "Bevande (Additivi, coloranti, sofisticazioni)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Bevande (Additivi, coloranti, sofisticazioni)"])
        },
        {
          label: "Bevande (Alcoliche)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Bevande (Alcoliche)"])
        },
        {
          label: "Bevande (Analcoliche)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Bevande (Analcoliche)"])
        },
        {
          label: "Cartine per Sigarette",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Cartine per Sigarette"])
        },
        {
          label: "Fiammiferi",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Fiammiferi"])
        },
        {
          label: "Francobolli, Cartoline e altri valori postali",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Francobolli, Cartoline e altri valori postali"])
        },
        {
          label: "Oggetti e sostanze non alimentari",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Oggetti e sostanze non alimentari"])
        },
        {
          label: "Pesca",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Pesca"])
        },
        {
          label: "Pietre e Metalli Preziosi",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Pietre e Metalli Preziosi"])
        },
        {
          label: "Prostituzione",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Prostituzione"])
        },
        {
          label: "Pubblicità",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Pubblicità"])
        },
        {
          label: "Sepolture",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Sepolture"])
        },
        {
          label: "Stupefacenti",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Stupefacenti"])
        },
        {
          label: "Trasporti (Generalità)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", ""])
        },
        {
          label: "Trasporti  (Marittimi e Aerei)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", ""])
        },
        {
          label: "Trasporti  (Personale)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Trasporti  (Personale)"])
        },
        {
          label: "Trasporti  Internazionali",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byBeniSecondari", "Trasporti  Internazionali"])
        },
      ],
      byIntrattenimento: [
        {
          label: "Acque termali e terme",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Acque termali e terme"])
        },
        {
          label: "Alberghi, Pensioni, Locande, etc.",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Alberghi, Pensioni, Locande, etc."])
        },
        {
          label: "Alpinismo",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Alpinismo"])
        },
        {
          label: "Boschi e Foreste",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Boschi e Foreste"])
        },
        {
          label: "Caccia",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Caccia"])
        },
        {
          label: "Esposizioni, Mostre, Fiere e Mercati",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Esposizioni, Mostre, Fiere e Mercati"])
        },
        {
          label: "Porti, Fari, Spiagge, Pilotaggio",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Porti, Fari, Spiagge, Pilotaggio"])
        },
        {
          label: "Giochi e Concorsi",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Giochi e Concorsi"])
        },
        {
          label: "Spettacoli",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Spettacoli"])
        },
        {
          label: "Spettacoli (Imposta sugli)",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Spettacoli (Imposta sugli)"])
        },
        {
          label: "Spiriti",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Spiriti"])
        },
        {
          label: "Sport",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Sport"])
        },
        {
          label: "Turismo",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byIntrattenimento", "Turismo"])
        },
      ],
      byImpieghi: [
        {
          label: "Barbieri e Parrucchieri",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Barbieri e Parrucchieri"])
        },
        {
          label: "Consulenti del Lavoro",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Consulenti del Lavoro"])
        },
        {
          label: "Facchinaggio",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Facchinaggio"])
        },
        {
          label: "Interprete",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Interprete"])
        },
        {
          label: "Notariato",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Notariato"])
        },
        {
          label: "Periti Industriali",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Periti Industriali"])
        },
        {
          label: "Portinai",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Portinai"])
        },
        {
          label: "Psicologi",
          checked: false,
          onChange: () => toggleInclude(["bySubject", "byImpieghi", "Psicologi"])
        },
      ]
    },
    byAuthority: [
      {
        label: "indCorteCost",
        checked: false,
        onChange: () => toggleInclude(["byAuthority", "indCorteCost"])
      }
    ]
  })

  console.log("just declared filtersState:", filtersState)

  const [selectedOpzioneTestuale, setSelectedOpzioneTestuale] = useState("Contengono almeno 1 delle parole")

  const handleChangeOpzioneTestuale = (val) => {
    setSelectedOpzioneTestuale(val)
  }

  //Stato di Date (da -> a)

  const [startDate, setStartDate] = useState("")

  const handleChangeStartDate = (val) => {
    setStartDate(val)
  }

  const removeStartDate = () => {
    handleChangeStartDate("")
  }

  const [endDate, setEndDate] = useState("")

  const handleChangeEndDate = (val) => {
    setEndDate(val)
  }

  const removeEndDate = () => {
    handleChangeEndDate("")
  }

  //Stato di Data (singola) in Autorità
  const [dataFiltroAutorità, setDataFiltroAutorità] = useState({
    day: "",
    month: "",
    year: ""
  })

  const handleChangeDataFiltroAutorità = (which, val) => {
    const newState = { ...dataFiltroAutorità }
    if (
      which === "day" && val === "0"
      || which === "month" && val === "0"
      || which === "year" && val === "0"
      || which === "year" && val === "1799") {
      newState[which] = ""
    } else {
      newState[which] = val
    }
    setDataFiltroAutorità(newState)
  }

  const [numAutorità, setNumAutorità] = useState("")

  const handleChangeNumAutorità = (val) => {
    if (val === "0") {
      setNumAutorità("")
    } else {
      setNumAutorità(val)
    }
  }

  const [arrCittà, setArrCittà] = useState(arrCittàRaw.map(el => ({ value: el, label: el })))

  const [cittàAutorità, setCittàAutorità] = useState("")

  const handleChangeCittàAutorità = (opt) => {
    setCittàAutorità(opt.value)
  }

  const [artCodice, setArtCodice] = useState("")

  const handleChangeArtCodice = (val) => {
    if (val === "0") {
      setArtCodice("")
    } else {
      setArtCodice(val)
    }
  }

  const [dataFiltroLegge, setDataFiltroLegge] = useState({
    day: "",
    month: "",
    year: ""
  })

  const handleChangeDataFiltroLegge = (which, val) => {
    const newState = { ...dataFiltroLegge }
    if (
      which === "day" && val === "0"
      || which === "month" && val === "0"
      || which === "year" && val === "0"
      || which === "year" && val === "1799") {
      newState[which] = ""
    } else {
      newState[which] = val
    }
    setDataFiltroLegge(newState)
  }

  const [artLegge, setArtLegge] = useState("")

  const handleChangeArtLegge = (val) => {
    if (val === "0") {
      setArtLegge("")
    } else {
      setArtLegge(val)
    }
  }

  const [numLegge, setNumLegge] = useState("")

  const handleChangeNumLegge = (val) => {
    if (val === "0") {
      setNumLegge("")
    } else {
      setNumLegge(val)
    }
  }

  const [tipoProvv, setTipoProvv] = useState("vigente")

  const handleChangeTipoProvv = (val) => {
    setTipoProvv(val)
  }

  const [dataFiltroProvv, setDataFiltroProvv] = useState({
    day: "",
    month: "",
    year: ""
  })

  const handleChangeDataFiltroProvv = (which, val) => {
    const newState = { ...dataFiltroProvv }
    if (
      which === "day" && val === "0"
      || which === "month" && val === "0"
      || which === "year" && val === "0"
      || which === "year" && val === "1799") {
      newState[which] = ""
    } else {
      newState[which] = val
    }
    setDataFiltroProvv(newState)
  }

  const [artProvv, setArtProvv] = useState("")

  const handleChangeArtProvv = (val) => {
    if (val === "0") {
      setArtProvv("")
    } else {
      setArtProvv(val)
    }
  }

  const [numProvv, setNumProvv] = useState("")

  const handleChangeNumProvv = (val) => {
    if (val === "0") {
      setNumProvv("")
    } else {
      setNumProvv(val)
    }
  }

  const [allegatoProvv, setAllegatoProvv] = useState("")

  const handleChangeAllegatoProvv = (val) => {
    setAllegatoProvv(val)
  }

  const [dataFiltroGazz, setDataFiltroGazz] = useState({
    day: "",
    month: "",
    year: ""
  })

  const handleChangeDataFiltroGazz = (which, val) => {
    const newState = { ...dataFiltroGazz }
    if (
      which === "day" && val === "0"
      || which === "month" && val === "0"
      || which === "year" && val === "0"
      || which === "year" && val === "1799") {
      newState[which] = ""
    } else {
      newState[which] = val
    }
    setDataFiltroGazz(newState)
  }

  const [numGazz, setNumGazz] = useState("")

  const handleChangeNumGazz = (val) => {
    if (val === "0") {
      setNumGazz("")
    } else {
      setNumGazz(val)
    }
  }

  //Stato del Filtro per Autore in "Note e Dottrina". Per ora è solo un text input, in futuro potrebe diventare un Autosuggest
  const [autoreNoteDottr, setAutoreNoteDottr] = useState("")

  const handleChangeAutoreNoteDottr = (val) => {
    setAutoreNoteDottr(val)
  }

  const [selectedAutorità, setSelectedAutorità] = useState("")

  const handleChangeAutorità = (val) => {
    setSelectedAutorità(val)
  }

  const [selectedCodice, setSelectedCodice] = useState("")

  const handleChangeCodice = (val) => {
    setSelectedCodice(val)
  }

  const [arrSottonumero, setArrSottonumero] = useState(arrSottonumeroRaw.map(el => ({ value: el, label: el, selected: false })))

  const handleChangeArrSottonumero = (arr) => {
    setArrSottonumero(arr)
  }

  const handleAddSottonumero = (val) => {
    handleChangeArrSottonumero([...arrSottonumero].map(opt => {
      if (opt.value === val) {
        opt.selected = true
      }
      return opt
    }))
  }

  const handleRemoveSottonumero = (val) => {
    if (val === "REMOVE_ALL") {
      handleChangeArrSottonumero([...arrSottonumero].map(el => ({ ...el, selected: false })))
    } else {
      handleChangeArrSottonumero([...arrSottonumero].map(opt => {
        if (opt.value === val) {
          opt.selected = false
        }
        return opt
      }))
    }
  }

  const [selectedSezione, setSelectedSezione] = useState("")

  const handleChangeSezione = (val) => {
    setSelectedSezione(val)
  }

  const [selectedRegione, setSelectedRegione] = useState("")

  const handleChangeRegione = (val) => {
    setSelectedRegione(val)
  }


  const [selectedLegge, setSelectedLegge] = useState("")

  const handleChangeLegge = (val) => {
    setSelectedLegge(val)
  }

  const [selectedProvvedimento, setSelectedProvvedimento] = useState("")

  const handleChangeProvvedimento = (val) => {
    setSelectedProvvedimento(val)
  }

  const [selectedCategoriaProvvedimento, setSelectedCategoriaProvvedimento] = useState("")

  const handleChangeCategoriaProvvedimento = (val) => {
    setSelectedCategoriaProvvedimento(val)
  }

  const [selectedFormulario, setSelectedFormulario] = useState("")

  const handleChangeFormulario = (val) => {
    setSelectedFormulario(val)
  }

  const [whereToSearch, setWhereToSearch] = useState("")

  const handleWhereToSearch = (val) => {
    setWhereToSearch(val)
  }

  const [selectedTestoUnico, setSelectedTestoUnico] = useState("")

  const handleChangeTestoUnico = (val) => {
    setSelectedTestoUnico(val)
  }

  const getMinifiedFilterState = (startObject) => {
    console.log("startObject:", startObject)
    const oldFilterState = JSON.parse(JSON.stringify(startObject))
    const newFilterState = JSON.parse(JSON.stringify(startObject))
    console.log("Original state object:", oldFilterState)
    const externalProps = Object.keys(oldFilterState)

    for (let x = 0; x < externalProps.length; x++) {

      if (externalProps[x] === "byAuthority" || externalProps[x] === "byExtension") {
        console.log("1° case - Pre edit:", newFilterState[externalProps[x]])
        const editedArr = oldFilterState[externalProps[x]].filter(el => el.checked === true)
        newFilterState[externalProps[x]] = editedArr
        console.log("1° case - Post edit:", editedArr)
      }

      if (externalProps[x] === "bySubject") {
        const internalProps = Object.keys(oldFilterState[externalProps[x]])
        console.log("2° case - internalProps:", internalProps)

        //Lascio negli array, solo gli oggetti che hanno checked: true
        for (let y = 0; y < internalProps.length; y++) {
          const editedArr = oldFilterState[externalProps[x]][internalProps[y]].filter(el => el.checked === true)
          console.log("2° case - trying to convert this:", newFilterState[externalProps[x]][internalProps[y]], "into this: ", editedArr)
          newFilterState[externalProps[x]][internalProps[y]] = editedArr
        }

        //Elimino gli array vuoti
        for (let y = 0; y < internalProps.length; y++) {
          const emptyArr = oldFilterState[externalProps[x]][internalProps[y]].length === 0
          if (emptyArr) {
            const parent = oldFilterState[externalProps[x]]
            console.log("removing empty arr from this parent:", parent)
            delete newFilterState[externalProps[x]][internalProps[y]]
          }

        }


      }

    }

    //[Checkpoint] Dopo aver deepcopiato gli oggetti, funziona. Continuare da qui.
    /*
    Object.keys(newFilterState).forEach(prop => {
      if (Array.isArray(newFilterState[prop])) {
        if (newFilterState[prop].length === 0) {
          delete newFilterState[prop]
        } else {
          newFilterState[prop].forEach((subEl, ind) => {
            if (Array.isArray(subEl) && subEl.length === 0) {
              newFilterState[prop] = newFilterState[prop].filter((e, i) => i !== ind)
            }
          })
        }
      }
    })
    */
    console.log("oldFilterState object:", oldFilterState)
    console.log("newFilterState object:", newFilterState)
    return newFilterState
  }

  const submitAdvancedSearch = async () => {
    try {
      props.setLoading(true)
      console.log("submitAdvancedSearch - filtersState:", filtersState)
      const minifiedFilterState = getMinifiedFilterState(filtersState)
      const filtersStateStr = JSON.stringify(minifiedFilterState)
      const resJson = await fetch(`http://localhost:3000/api/archive/advancedSearch?searchterms=${props.searchInput}&activeFilters=${filtersStateStr}`, {
        method: 'GET',
        headers: {
          key: 'Access-Control-Allow-Origin',
          value: '*'
        }
      })
        .then(response => {
          console.log("response:", response)
          return response.json()
        })
        .then(async response => {
          props.handleSetSearchResult(response.data.filteredDocs)
          props.handleSetSearched(props.searchInput, filtersState)
          props.setLoading(false)
        })
    } catch (error) {
      console.log("submitAdvancedSearch error:", error)
    }
  }

  const resetAdvancedSearch = () => {
    handleChangeAllegatoProvv("")
    handleAddSottonumero("")
    handleChangeArrSottonumero(arrSottonumeroRaw.map(el => ({ value: el, label: el, selected: false })))
    handleChangeArtCodice("")
    handleChangeArtLegge("")
    handleChangeArtProvv("")
    handleChangeAutoreNoteDottr("")
    handleChangeAutorità("")
    handleChangeCategoriaProvvedimento("")
    handleChangeCittàAutorità("")
    handleChangeCodice("")
    handleChangeDataFiltroAutorità({
      day: "",
      month: "",
      year: ""
    })
    handleChangeDataFiltroGazz({
      day: "",
      month: "",
      year: ""
    })
    handleChangeDataFiltroLegge({
      day: "",
      month: "",
      year: ""
    })
    handleChangeDataFiltroProvv({
      day: "",
      month: "",
      year: ""
    })
    handleChangeEndDate("")
    handleChangeFormulario("")
    handleChangeLegge("")
    handleChangeNumAutorità("")
    handleChangeNumGazz("")
    handleChangeNumLegge("")
    handleChangeNumProvv("")
    handleChangeOpzioneTestuale("")
    handleChangeProvvedimento("")
    handleChangeRegione("")
    handleChangeSezione("")
    handleChangeStartDate("")
    handleChangeTipoProvv("")
    handleWhereToSearch("In qualsiasi punto del documento")
    handleChangeTestoUnico("")
  }

  useEffect(() => {
    //code to execute at every state update
    const timestamp = Date.now()
    console.log(timestamp, " - State changed! filtersState:", filtersState)
    if (previousTab !== props.shownTab) {
      console.log("Tab changed, resetting state!")
      resetAdvancedSearch()
      handleChangePreviousTab(props.shownTab)
    }
  })

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
              selectedSezione={selectedSezione}
              handleChangeSezione={handleChangeSezione}
              selectedRegione={selectedRegione}
              handleChangeRegione={handleChangeRegione}
              cittàAutorità={cittàAutorità}
              arrCittà={arrCittà}
              handleChangeCittàAutorità={handleChangeCittàAutorità}
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
  )
}



