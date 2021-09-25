import { awaitCondition } from "../../../../utils/async";
import { findArticolo } from "./findFormattedText";

export const setFilteredDocs = ({ envSlash, refreshRate, globalState, updateGlobalState }) => {
  const getFilteredDocs = () => {
    let dataToFilter = [...globalState.dataToFilter];
    let filteredArr;
    console.log("BEFORE FILTER - globalState.dataToFilter.length is:", globalState.dataToFilter.length);
    console.log(globalState.dataToFilter.map(file => file.filename));
    filteredArr = dataToFilter.filter(d => {
      //Se l'user cerca un pdf ed il file analizzato non lo è, escludo
      if (!globalState.includePdf && d.filename.includes(".pdf")) return false;
      //Se l'user cerca un docx ed il file analizzato non lo è, escludo
      if (!globalState.includeDocx && d.filename.includes(".docx")) return false;
      //Se l'user cerca un doc ed il file analizzato non lo è, escludo
      if (!globalState.includeDoc && d.filename.includes(".doc") && !d.filename.includes(".docx")) return false;
      //Se l'user cerca un provvedimento ed il file analizzato non lo è, escludo ...
      if (globalState.mustBeProvv && !d.fullpath.includes(envSlash + "Provvedimenti" + envSlash)) {
        return false;
        // ... altrimenti: Sottofiltro esclusivo per i Provvedimenti.
      } else if (globalState.mustBeProvv) {
        const contentIncipit = d.content.slice(0, 500);
        const enterPath = d.fullpath;

        //---------------Ricerca Articolo specifico - start---------------
        const requiredFormat = {
          bold: true,
          italic: false,
          size: null,
          prevChar: null,
          nextChar: ".",
        };
        const target = globalState.activeFilters.byProvvedimento.articolo + requiredFormat.nextChar;

        //[MEMO] Funzione da completare: findArticolo - start
        //if momentaneo  per testare se almeno coi pdf funziona, da rimuovere
        if (d.filename.includes(".pdf")) {
          console.log(">>>>>>>>>>>>>>>>>>>>>> Start updating resultsByArticle <<<<<<<<<<<<<<<<<<<<<<<");

          let includesArticle = null;
          return findArticolo({
            enterPath,
            target,
            requiredFormat,
            refreshRate,
            globalState,
            updateGlobalState,
          }).then(resultsByArticle => {
            console.log("then - resultsByArticle:", resultsByArticle);
            includesArticle = false;
            if (resultsByArticle.length > 0) includesArticle = true;
            console.log(`>>>>>>>>>>>>>>>>>>>>>> DONE updating resultsByArticle. includesArticle: ${includesArticle} <<<<<<<<<<<<<<<<<<<<<<<`);
            return includesArticle;
          });
        }
        //[MEMO] Funzione da completare: findArticolo - end
        const conditions = {
          tag: contentIncipit.includes(globalState.activeFilters.byProvvedimento.provv),
          tipo: true, //difficile da capire, chiedere a Luigi
          data: true, //Qui ci si schianta hard, dopo
          sottonumero: true,
          articolo: true,
          numero: true,
          argomento: true,
          allegato: true,
        };
        //Controllo che nei primi 500 chars del documento sia presente il tag
        return !Object.values(conditions).every(bool => bool === true); //questo è da cambiare
      }

      //Eventuali affinamenti del filtro andranno qui
      const cleanContent = d.content.replace(/[^\w\s]/gi, "").toLowerCase();

      //Se il file non contiene la query di ricerca, result parte da false
      const result = cleanContent.includes(globalState.searchterms?.replace(/[^\w\s]/gi, "").toLowerCase());
      if (result === true) {
        console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching nel content");
        return result;
      }

      //Ciclo che cerca i tag di byAuthority, appena uno viene trovato, esce per risparmiare tempo
      if (globalState.activeFilters.byAuthority?.length > 0) {
        for (let x = 0; x < globalState.activeFilters.byAuthority.length; x++) {
          updateAuthorityTagsState("tag", globalState.activeFilters.byAuthority[x].tag.replace(/[^\w\s]/gi, ""));
          updateContentState("result", cleanContent.toLowerCase().includes(tag));
          if (result === true) {
            console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags byAuthority");
            return result;
          }
        }
      }

      //Ciclo che cerca i tag di bySubject, appena uno viene trovato, esce per risparmiare tempo
      if (Object.keys(globalState.activeFilters.bySubject).length > 0) {
        for (let x = 0; x < globalState.activeFilters.bySubject.length; x++) {
          //Qui vanno aggiunti tutti i comportamenti dei filtri di bySubject, riproducendo questo blocco if
          if (Array.isArray(globalState.activeFilters.bySubject[x].tag)) {
            updateBySubjectState("tags", globalState.activeFilters.bySubject[x].tag);
            for (let y = 0; y < bySubjectState.tags.length; y++) {
              updateBySubjectState("tag", bySubjectState.tags[y].replace(/[^\w\s]/gi, ""));

              updateContentState("result", cleanContent.includes(tag));
              if (result === true) {
                console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject");
                return result;
              }
            }
          } else {
            updateBySubjectState("tag", globalState.activeFilters.bySubject[x].tag.replace(/[^\w\s]/gi, ""));
            updateContentState("result", cleanContent.includes(tag));
            if (result === true) {
              console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject (nel content, non come tag)");
              return result;
            }
          }
        }
      }
      return result;
    });
    console.log("AFTER FILTER - this should never print before all parseFileItems are done");
    console.log(filteredArr.map(file => file.filename));
    console.log("%%%%%%%%%%%%%%%%%%%%% getFilteredDocsState.filteredArr HAS BEEN SET and its length is:", filteredArr.length);
    // const consoleFormattedArr = getFilteredDocsState.filteredArr.map(el =>
    //   ({ ...el, content: el.content.length ? "PRESENT BUT CENSORED" : "MISSING" })
    // );
    // console.log("consoleFormattedArr:", consoleFormattedArr);
    return filteredArr;
  };
  updateGlobalState("filteredDocs", getFilteredDocs());
};
