
import {
  Row,
  Col,
  Form,
  FormLabel,
  Button,
  Jumbotron,
  Card
} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/siteLanguageContext' //context
import { FilterByText } from './filterSections/FilterByText' //Comportamento ricerca testuale
import { FilterByContent } from './filterSections/FilterByContent' //Filtro per Contenuti
import { FilterByDate } from './filterSections/FilterByDate' //Filtro per Data
import { FilterByAuthority } from './filterSections/FilterByAuthority' //Filtro per Autorità
import { FilterByExtension } from './filterSections/FilterByExtension' //Filtro per tipo di File
import { FilterBySubject } from './filterSections/FilterBySubject' //Filtro per Fonte


export const AdvancedSearch = function (props) {
  const siteLanguage = useLanguage() //context

  const toggleIncludeDoc = () => {
    const newFilterState = { ...filtersState }
    newFilterState.byExtension.includeDoc = !newFilterState.byExtension.includeDoc
    setFiltersState(newFilterState)
  }

  const toggleIncludeDocx = () => {
    const newFilterState = { ...filtersState }
    newFilterState.byExtension.includeDocx = !newFilterState.byExtension.includeDocx
    setFiltersState(newFilterState)
  }

  const toggleIncludePdf = () => {
    const newFilterState = { ...filtersState }
    newFilterState.byExtension.includePdf = !newFilterState.byExtension.includePdf
    setFiltersState(newFilterState)
  }

  const toggleIncludeIndCorteCost = () => {
    const newFilterState = { ...filtersState }
    newFilterState.byExtension.indCorteCost = !newFilterState.byExtension.indCorteCost
    setFiltersState(newFilterState)
  }

  const toggleIncludeSubject = (subject, label) => {
    const newFilterState = { ...filtersState }
    newFilterState.bySubject[subject].find(el => el.label === label).checked = !newFilterState.bySubject[subject].find(el => el.label === label).checked
    setFiltersState(newFilterState)
  }

  //[CHECKPOINT] Inserire tutti i possibili dati del filtro in filtersState. Partendo da bySubject.byZoneGeog
  const [filtersState, setFiltersState] = useState({
    byExtension: {
      includeDoc: true,
      includeDocx: true,
      includePdf: true,
      indCorteCost: false
    },
    bySubject: {
      byZoneGeog: [
        {
          label: "Abruzzo",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Abruzzo")
        },
        {
          label: "Basilicata",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Basilicata")
        },
        {
          label: "Calabria",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Calabria")
        },
        {
          label: "Campania",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Campania")
        },
        {
          label: "Città del Vaticano",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Città del Vaticano")
        },
        {
          label: "Emilia Romagna",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Emilia Romagna")
        },
        {
          label: "Friuli Venezia Giulia",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Friuli Venezia Giulia")
        },
        {
          label: "Lazio",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Lazio")
        },
        {
          label: "Liguria",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Liguria")
        },
        {
          label: "Lombardia",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Lombardia")
        },
        {
          label: "Marche",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Marche")
        },
        {
          label: "Mezzogiorno",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Mezzogiorno")
        },
        {
          label: "Molise",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Molise")
        },
        {
          label: "Piemonte",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Piemonte")
        },
        {
          label: "Puglia",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Puglia")
        },
        {
          label: "San Marino",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "San Marino")
        },
        {
          label: "Sardegna",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Sardegna")
        },
        {
          label: "Sicilia",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Sicilia")
        },
        {
          label: "Toscana",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Toscana")
        },
        {
          label: "Trentino Alto Adige",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Trentino Alto Adige")
        },
        {
          label: "Umbria",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Umbria")
        },
        {
          label: "Valle d'Aosta",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Valle d'Aosta")
        },
        {
          label: "Veneto",
          checked: false,
          onChange: () => toggleIncludeSubject("byZoneGeog", "Veneto")
        }
      ],
      byMinistero: [
        {
          label: "Ministeri in genere",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Ministeri in genere")
        },
        {
          label: "Affari Esteri",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Affari Esteri")
        },
        {
          label: "Agricoltura e Foreste",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Agricoltura e Foreste")
        },
        {
          label: "Ambiente",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Ambiente")
        },
        {
          label: "Beni Culturali",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Beni Culturali")
        },
        {
          label: "Bilancio e Programmazione Economica",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Bilancio e Programmazione Economica")
        },
        {
          label: "Commercio con l'Estero",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Commercio con l'Estero")
        },
        {
          label: "Difesa",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Difesa")
        },
        {
          label: "Finanze",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Finanze")
        },
        {
          label: "Grazia e Giustizia",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Grazia e Giustizia")
        },
        {
          label: "Lavori Pubblici",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Lavori Pubblici")
        },
        {
          label: "Lavoro e Previdenza Sociale",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Lavoro e Previdenza Sociale")
        },
        {
          label: "Industria, Commercio e Artigianato",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Industria, Commercio e Artigianato")
        },
        {
          label: "Interni",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Interni")
        },
        {
          label: "Marina Mercantile",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Marina Mercantile")
        },
        {
          label: "Partecipazioni Statali",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Partecipazioni Statali")
        },
        {
          label: "Poste e Telecomunicazioni",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Poste e Telecomunicazioni")
        },
        {
          label: "Pubblica Istruzione",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Pubblica Istruzione")
        },
        {
          label: "Sanità",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Sanità")
        },
        {
          label: "Tesoro",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Tesoro")
        },
        {
          label: "Trasporti",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Trasporti")
        },
        {
          label: "Turismo e Spettacolo",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Turismo e Spettacolo")
        },
        {
          label: "Università e Ricerca Scientifica",
          checked: false,
          onChange: () => toggleIncludeSubject("byMinistero", "Università e Ricerca Scientifica")
        }
      ],
      byEconomia: [
        {
          label: "Agenti di commercio",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Agenti di commercio")
        },
        {
          label: "Assegni e Cambiali",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Assegni e Cambiali")
        },
        {
          label: "Banca d'Italia",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Banca d'Italia")
        },
        {
          label: "Banche",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Banche")
        },
        {
          label: "Beni di Stati Esteri",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Beni di Stati Esteri")
        },
        {
          label: "Bot, CCT e Debito Pubblico",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Bot, CCT e Debito Pubblico")
        },
        {
          label: "Cambi, Valute e Capitali stranieri",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Cambi, Valute e Capitali stranieri")
        },
        {
          label: "Cassa Depositi e Prestiti",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Cassa Depositi e Prestiti")
        },
        {
          label: "Commercialisti",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Commercialisti")
        },
        {
          label: "Consiglio Nazionale dell'Economia e del Lavoro",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Consiglio Nazionale dell'Economia e del Lavoro")
        },
        {
          label: "Credito Edilizio e Fondiario",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Credito Edilizio e Fondiario")
        },
        {
          label: "Credito all'Esportazione",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Credito all'Esportazione")
        },
        {
          label: "Esportazioni e Importazioni",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Esportazioni e Importazioni")
        },
        {
          label: "Fallimento",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Fallimento")
        },
        {
          label: "Fondi Comuni di Investimento",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Fondi Comuni di Investimento")
        },
        {
          label: "Industria, Commercio, Artigianato",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Industria, Commercio, Artigianato")
        },
        {
          label: "Istituto Poligrafico e Zecca dello Stato",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Istituto Poligrafico e Zecca dello Stato")
        },
        {
          label: "Iva",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Iva")
        },
        {
          label: "Leasing",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Leasing")
        },
        {
          label: "Moneta",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Moneta")
        },
        {
          label: "Monopoli di Stato",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Monopoli di Stato")
        },
        {
          label: "Pensioni dei Dipendenti Civili e Militari dello Stato",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Pensioni dei Dipendenti Civili e Militari dello Stato")
        },
        {
          label: "Pensioni di Guerra",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Pensioni di Guerra")
        },
        {
          label: "Prezzi",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Prezzi")
        },
        {
          label: "Redditi (Imposte sui)",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Redditi (Imposte sui)")
        },
        {
          label: "Uffici finanziari",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Uffici finanziari")
        },
        {
          label: "Vendite Mobiliari Internazionali",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Vendite Mobiliari Internazionali")
        },
        {
          label: "Vitalizi",
          checked: false,
          onChange: () => toggleIncludeSubject("byEconomia", "Vitalizi")
        }
      ],
      byTasse: [
        {
          label: "Bollo (Imposta di)",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Bollo (Imposta di)")
        },
        {
          label: "Concessioni (tasse sulle)",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Concessioni (tasse sulle)")
        },
        {
          label: "Imposta Complementare",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Imposta Complementare")
        },
        {
          label: "Imposta di Consumo",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Imposta di Consumo")
        },
        {
          label: "Imposta di Entrata",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Imposta di Entrata")
        },
        {
          label: "Imposta Fabbricati",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Imposta Fabbricati")
        },
        {
          label: "Imposta Fondiaria",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Imposta Fondiaria")
        },
        {
          label: "Imposta di Ricchezza Mobile",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Imposta di Ricchezza Mobile")
        },
        {
          label: "Imposte di Fabbricazione",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Imposte di Fabbricazione")
        },
        {
          label: "Imposte Erariali e di Consumo",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Imposte Erariali e di Consumo")
        },
        {
          label: "Imposte e Tasse in Genere",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Imposte e Tasse in Genere")
        },
        {
          label: "Imposte Ipotecarie e Catastali",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Imposte Ipotecarie e Catastali")
        },
        {
          label: "Redditi (Imposte sui)",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Redditi (Imposte sui)")
        },
        {
          label: "Registro (Imposta di)",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Registro (Imposta di)")
        },
        {
          label: "Spettacoli (Imposta sugli)",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Spettacoli (Imposta sugli)")
        },
        {
          label: "Successioni (Imposta sulle)",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Successioni (Imposta sulle)")
        },
        {
          label: "Tasse Automobilistiche",
          checked: false,
          onChange: () => toggleIncludeSubject("byTasse", "Tasse Automobilistiche")
        }
      ],
      byLavoro: [
        {
          label: "Agricoltura (Lavoro)",
          checked: false,
          onChange: () => toggleIncludeSubject("byLavoro", "Agricoltura (Lavoro)")
        },
        {
          label: "Consiglio Nazionale dell'Economia e del Lavoro",
          checked: false,
          onChange: () => toggleIncludeSubject("byLavoro", "Consiglio Nazionale dell'Economia e del Lavoro")
        },
        {
          label: "Consorzi e Imprese Cooperative",
          checked: false,
          onChange: () => toggleIncludeSubject("byLavoro", "Consorzi e Imprese Cooperative")
        },
        {
          label: "Consulenti del Lavoro",
          checked: false,
          onChange: () => toggleIncludeSubject("byLavoro", "Consulenti del Lavoro")
        },
        {
          label: "Impiego Pubblico",
          checked: false,
          onChange: () => toggleIncludeSubject("byLavoro", "Impiego Pubblico")
        },
        {
          label: "Lavoro",
          checked: false,
          onChange: () => toggleIncludeSubject("byLavoro", "Lavoro")
        },
        {
          label: "Ministero Lavori Pubblici",
          checked: false,
          onChange: () => toggleIncludeSubject("byLavoro", "Ministero Lavori Pubblici")
        },
        {
          label: "Ministero  Lavoro e Previdenza Sociale",
          checked: false,
          onChange: () => toggleIncludeSubject("byLavoro", "Ministero  Lavoro e Previdenza Sociale")
        },
        {
          label: "Occupazione",
          checked: false,
          onChange: () => toggleIncludeSubject("byLavoro", "Occupazione")
        },
      ],
      byProduzione: [
        {
          label: "Acque pubbliche",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Acque pubbliche")
        },
        {
          label: "Agricoltura (generalità)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Agricoltura (generalità)")
        },
        {
          label: "Agricoltura (Lavoro)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Agricoltura (Lavoro)")
        },
        {
          label: "Agricoltura (Prodotti)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Agricoltura (Prodotti)")
        },
        {
          label: "Agricoltura (Contratti)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Agricoltura (Contratti)")
        },
        {
          label: "Agricoltura (Credito)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Agricoltura (Credito)")
        },
        {
          label: "Agricoltura (Antiparassitari)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Agricoltura (Antiparassitari)")
        },
        {
          label: "Agronomi",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Agronomi")
        },
        {
          label: "Alimenti (Diritto agli)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Alimenti (Diritto agli)")
        },
        {
          label: "Alimenti (Confezionamento)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Alimenti (Confezionamento)")
        },
        {
          label: "Alimenti (Doc e Marchi)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Alimenti (Doc e Marchi)")
        },
        {
          label: "Alimenti (Additivi, Coloranti e Sofisticazioni)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Alimenti (Additivi, Coloranti e Sofisticazioni)")
        },
        {
          label: "Alimenti (Origine Animale)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Alimenti (Origine Animale)")
        },
        {
          label: "Alimenti (Origine Vegetale)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Alimenti (Origine Vegetale)")
        },
        {
          label: "Alimenti (Prima Infanzia e Prodotti Dietetici)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Alimenti (Prima Infanzia e Prodotti Dietetici)")
        },
        {
          label: "Bevande (Confezionamento)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Bevande (Confezionamento)")
        },
        {
          label: "Bevande (Doc e Marchi)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Bevande (Doc e Marchi)")
        },
        {
          label: "Bevande (Additivi, coloranti, sofisticazioni)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Bevande (Additivi, coloranti, sofisticazioni)")
        },
        {
          label: "Bevande (Alcoliche)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Bevande (Alcoliche)")
        },
        {
          label: "Bevande (Analcoliche)",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Bevande (Analcoliche)")
        },
        {
          label: "Spiriti",
          checked: false,
          onChange: () => toggleIncludeSubject("byProduzione", "Spiriti")
        },
      ],
      bySanità: [
        {
          label: "Aborto",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Aborto")
        },
        {
          label: "Alcolismo",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Alcolismo")
        },
        {
          label: "Croce Rossa Italiana",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Croce Rossa Italiana")
        },
        {
          label: "Ministero Sanità",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Ministero Sanità")
        },
        {
          label: "Portatori di Handicap",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Portatori di Handicap")
        },
        {
          label: "Sanità, Sanitari, etc. (Generalità)",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Sanità, Sanitari, etc. (Generalità)")
        },
        {
          label: "Sanità, Sanitari, etc. (Personale)",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Sanità, Sanitari, etc. (Personale)")
        },
        {
          label: "Sanità, Sanitari, etc. (Igiene)",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Sanità, Sanitari, etc. (Igiene)")
        },
        {
          label: "Sanità, Sanitari, etc. (Medicinali)",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Sanità, Sanitari, etc. (Medicinali)")
        },
        {
          label: "Sanità, Sanitari, etc. (Farmacie e Farmacisti)",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Sanità, Sanitari, etc. (Farmacie e Farmacisti)")
        },
        {
          label: "Sanità, Sanitari, etc. (Malattie)",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Sanità, Sanitari, etc. (Malattie)")
        },
        {
          label: "Stupefacenti",
          checked: false,
          onChange: () => toggleIncludeSubject("bySanità", "Stupefacenti")
        }
      ],
      byForzeOrdine: [
        {
          label: "Carabinieri",
          checked: false,
          onChange: () => toggleIncludeSubject("byForzeOrdine", "Carabinieri")
        },
        {
          label: "Codici Penali Militari",
          checked: false,
          onChange: () => toggleIncludeSubject("byForzeOrdine", "Codici Penali Militari")
        },
        {
          label: "Forze Armate (Generalità)",
          checked: false,
          onChange: () => toggleIncludeSubject("byForzeOrdine", "Forze Armate (Generalità)")
        },
        {
          label: "Forze Armate (Personale)",
          checked: false,
          onChange: () => toggleIncludeSubject("byForzeOrdine", "Forze Armate (Personale)")
        },
        {
          label: "Guardia di Finanza",
          checked: false,
          onChange: () => toggleIncludeSubject("byForzeOrdine", "Guardia di Finanza")
        },
        {
          label: "Pensioni dei Dipendenti Civili e Militari dello Stato",
          checked: false,
          onChange: () => toggleIncludeSubject("byForzeOrdine", "Pensioni dei Dipendenti Civili e Militari dello Stato")
        },
        {
          label: "Pubblica Sicurezza",
          checked: false,
          onChange: () => toggleIncludeSubject("byForzeOrdine", "Pubblica Sicurezza")
        },
        {
          label: "Servizi Segreti",
          checked: false,
          onChange: () => toggleIncludeSubject("byForzeOrdine", "Servizi Segreti")
        },
        {
          label: "Vigili del Fuoco",
          checked: false,
          onChange: () => toggleIncludeSubject("byForzeOrdine", "Vigili del Fuoco")
        },
      ],
      byIstruzione: [
        {
          label: "Cultura e Beni Culturali",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Cultura e Beni Culturali")
        },
        {
          label: "Istruzione (Generalità)",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Istruzione (Generalità)")
        },
        {
          label: "Istruzione (Personale)",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Istruzione (Personale)")
        },
        {
          label: "Istruzione (Artistica e Musicale)",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Istruzione (Artistica e Musicale)")
        },
        {
          label: "Istruzione (Elementare e Materna)",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Istruzione (Elementare e Materna)")
        },
        {
          label: "Istruzione (Media e Secondaria)",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Istruzione (Media e Secondaria)")
        },
        {
          label: "Istruzione (Professionale e Tecnica)",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Istruzione (Professionale e Tecnica)")
        },
        {
          label: "Istruzione (Superiore)",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Istruzione (Superiore)")
        },
        {
          label: "Istruzione (all'Estero)",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Istruzione (all'Estero)")
        },
        {
          label: "Istruzione (Privata)",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Istruzione (Privata)")
        },
        {
          label: "Ministero Pubblica Istruzione",
          checked: false,
          onChange: () => toggleIncludeSubject("byIstruzione", "Ministero Pubblica Istruzione")
        }
      ],
      byBeniPrimari: [
        {
          label: "Acque potabili e acquedotti",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniPrimari", "Acque potabili e acquedotti")
        },
        {
          label: "Energia Elettrica",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniPrimari", "Energia Elettrica")
        },
        {
          label: "Passaporti e Carte di Identità",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniPrimari", "Passaporti e Carte di Identità")
        },
        {
          label: "Riscaldamento",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniPrimari", "Riscaldamento")
        },
        {
          label: "Strade",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniPrimari", "Strade")
        }
      ],
      byBeniSecondari: [
        {
          label: "Ascensori, Montacarichi e Scale Mobili",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Ascensori, Montacarichi e Scale Mobili")
        },
        {
          label: "Bevande (Confezionamento)",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Bevande (Confezionamento)")
        },
        {
          label: "Bevande (Doc e Marchi)",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Bevande (Doc e Marchi)")
        },
        {
          label: "Bevande (Additivi, coloranti, sofisticazioni)",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Bevande (Additivi, coloranti, sofisticazioni)")
        },
        {
          label: "Bevande (Alcoliche)",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Bevande (Alcoliche)")
        },
        {
          label: "Bevande (Analcoliche)",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Bevande (Analcoliche)")
        },
        {
          label: "Cartine per Sigarette",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Cartine per Sigarette")
        },
        {
          label: "Fiammiferi",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Fiammiferi")
        },
        {
          label: "Francobolli, Cartoline e altri valori postali",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Francobolli, Cartoline e altri valori postali")
        },
        {
          label: "Oggetti e sostanze non alimentari",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Oggetti e sostanze non alimentari")
        },
        {
          label: "Pesca",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Pesca")
        },
        {
          label: "Pietre e Metalli Preziosi",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Pietre e Metalli Preziosi")
        },
        {
          label: "Prostituzione",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Prostituzione")
        },
        {
          label: "Pubblicità",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Pubblicità")
        },
        {
          label: "Sepolture",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Sepolture")
        },
        {
          label: "Stupefacenti",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Stupefacenti")
        },
        {
          label: "Trasporti (Generalità)",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "")
        },
        {
          label: "Trasporti  (Marittimi e Aerei)",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "")
        },
        {
          label: "Trasporti  (Personale)",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Trasporti  (Personale)")
        },
        {
          label: "Trasporti  Internazionali",
          checked: false,
          onChange: () => toggleIncludeSubject("byBeniSecondari", "Trasporti  Internazionali")
        },
      ],
      byIntrattenimento: [
        {
          label: "Acque termali e terme",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Acque termali e terme")
        },
        {
          label: "Alberghi, Pensioni, Locande, etc.",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Alberghi, Pensioni, Locande, etc.")
        },
        {
          label: "Alpinismo",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Alpinismo")
        },
        {
          label: "Boschi e Foreste",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Boschi e Foreste")
        },
        {
          label: "Caccia",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Caccia")
        },
        {
          label: "Esposizioni, Mostre, Fiere e Mercati",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Esposizioni, Mostre, Fiere e Mercati")
        },
        {
          label: "Porti, Fari, Spiagge, Pilotaggio",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Porti, Fari, Spiagge, Pilotaggio")
        },
        {
          label: "Giochi e Concorsi",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Giochi e Concorsi")
        },
        {
          label: "Spettacoli",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Spettacoli")
        },
        {
          label: "Spettacoli (Imposta sugli)",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Spettacoli (Imposta sugli)")
        },
        {
          label: "Spiriti",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Spiriti")
        },
        {
          label: "Sport",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Sport")
        },
        {
          label: "Turismo",
          checked: false,
          onChange: () => toggleIncludeSubject("byIntrattenimento", "Turismo")
        },
      ],
      byImpieghi: [
        {
          label: "Barbieri e Parrucchieri",
          checked: false,
          onChange: () => toggleIncludeSubject("byImpieghi", "Barbieri e Parrucchieri")
        },
        {
          label: "Consulenti del Lavoro",
          checked: false,
          onChange: () => toggleIncludeSubject("byImpieghi", "Consulenti del Lavoro")
        },
        {
          label: "Facchinaggio",
          checked: false,
          onChange: () => toggleIncludeSubject("byImpieghi", "Facchinaggio")
        },
        {
          label: "Interprete",
          checked: false,
          onChange: () => toggleIncludeSubject("byImpieghi", "Interprete")
        },
        {
          label: "Notariato",
          checked: false,
          onChange: () => toggleIncludeSubject("byImpieghi", "Notariato")
        },
        {
          label: "Periti Industriali",
          checked: false,
          onChange: () => toggleIncludeSubject("byImpieghi", "Periti Industriali")
        },
        {
          label: "Portinai",
          checked: false,
          onChange: () => toggleIncludeSubject("byImpieghi", "Portinai")
        },
        {
          label: "Psicologi",
          checked: false,
          onChange: () => toggleIncludeSubject("byImpieghi", "Psicologi")
        },
      ]
    }
  })

  const submitAdvancedSearch = async () => {
    try {
      props.setLoading(true)
      const filtersStateStr = JSON.stringify(filtersState)
      const resJson = await fetch(`http://localhost:3000/api/archive/advancedSearch?searchterms=${props.searchInput}&activeFilters=${filtersStateStr}`, {
        method: 'GET',
        headers: {
          key: 'Access-Control-Allow-Origin',
          value: '*'
        }
      })
        .then(response => {
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


  return (
    <Row className="w-100 mt-2 ml-0 mr-0">
      <Jumbotron className="w-100 pt-4 pb-4">
        <Form>
          {/* Comportamento ricerca testuale */}
          <FilterByText

          />
          {/* Filtro per Contenuti */}
          <FilterByContent

          />
          {/* Filtro per Data */}
          <FilterByDate

          />
          {/* Filtro per Autorità */}
          <FilterByAuthority

          />
          {/* Filtro per tipo di File */}
          <FilterByExtension
            includeDoc={filtersState?.byExtension?.includeDoc}
            toggleIncludeDoc={toggleIncludeDoc}
            includeDocx={filtersState?.byExtension?.includeDocx}
            toggleIncludeDocx={toggleIncludeDocx}
            includePdf={filtersState?.byExtension?.includePdf}
            toggleIncludePdf={toggleIncludePdf}
            indCorteCost={filtersState?.byExtension?.indCorteCost}
            toggleIncludeIndCorteCost={toggleIncludeIndCorteCost}
          />
          {/* Filtro per Fonte */}
          <FilterBySubject
            zoneGeogList={filtersState?.bySubject?.byZoneGeog}
            ministeriList={filtersState?.bySubject?.byMinistero}
            economiaList={filtersState?.bySubject?.byEconomia}
            tasseImposteList={filtersState?.bySubject?.byTasse}
            lavoroList={filtersState?.bySubject?.byLavoro}
            produzConsumList={filtersState?.bySubject?.byProduzione}
            sanitàList={filtersState?.bySubject?.bySanità}
            forzeOrdineList={filtersState?.bySubject?.byForzeOrdine}
            istruzioneList={filtersState?.bySubject?.byIstruzione}
            beniPrimariList={filtersState?.bySubject?.byBeniPrimari}
            beniSecondariList={filtersState?.bySubject?.byBeniSecondari}
            intrattenimList={filtersState?.bySubject?.byIntrattenimento}
            impieghiList={filtersState?.bySubject?.byImpieghi}
          />

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



