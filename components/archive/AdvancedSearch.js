
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

  const toggleIncludeAbruzzo = () => {
    const newFilterState = { ...filtersState }
    console.log("toggleIncludeAbruzzo - newFilterState:", newFilterState)
    newFilterState.bySubject.byZoneGeog.find(el => el.label === "Abruzzo").checked = !newFilterState.bySubject.byZoneGeog.find(el => el.label === "Abruzzo").checked
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
          onChange: toggleIncludeAbruzzo
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



