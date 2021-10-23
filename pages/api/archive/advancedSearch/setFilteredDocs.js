import { findArticolo } from "./findFormattedText";

export const setFilteredDocs = async ({ envSlash, refreshRate, state, updateState }) => {
  const getFilteredDocs = async () => {
    let dataToFilter = [...state.global.dataToFilter];
    console.log(state.global.dataToFilter.map(file => file.filename));

    const getFilteredArr = async () => {
      const dataFiltered = dataToFilter.filter(async d => {
        //Se l'user cerca un pdf ed il file analizzato non lo è, escludo
        if (!state.global.includePdf && d.filename.includes(".pdf")) {
          console.log("filter returns false cause of file ext");
          return false;
        }
        //Se l'user cerca un docx ed il file analizzato non lo è, escludo
        if (!state.global.includeDocx && d.filename.includes(".docx")) {
          console.log("filter returns false cause of file ext");
          return false;
        }
        //Se l'user cerca un doc ed il file analizzato non lo è, escludo
        if (!state.global.includeDoc && d.filename.includes(".doc") && !d.filename.includes(".docx")) {
          console.log("filter returns false cause of file ext");
          return false;
        }
        //Se l'user cerca un provvedimento ed il file analizzato non lo è, escludo ...
        if (state.global.mustBeProvv && !d.fullpath.includes(envSlash + "Provvedimenti" + envSlash)) {
          console.log("filter returns false cause of mustBeProvv for file:", d.filename);
          return false;
          // ... altrimenti: Sottofiltro esclusivo per i Provvedimenti.
        } else if (state.global.mustBeProvv) {
          console.log("filter starting to evaluate mustBeProvv for file:", d.filename);
          const enterPath = d.fullpath;

          //---------------Ricerca Articolo specifico - start---------------
          const requiredFormat = {
            bold: true,
            italic: false,
            size: null,
            prevChar: null,
            nextChar: ".",
          };
          const target = state.global.activeFilters.byProvvedimento.articolo + requiredFormat.nextChar;

          //[MEMO] Funzione da completare: findArticolo - start
          //if momentaneo  per testare se almeno coi pdf funziona, da rimuovere
          if (d.filename.includes(".pdf")) {
            console.log(">>>>>>>>>>>>>>>>>>>>>> Start updating resultsByArticle <<<<<<<<<<<<<<<<<<<<<<<");
            const results = await findArticolo({
              enterPath,
              target,
              requiredFormat,
              refreshRate,
              state,
              updateState,
            });
            const includesArticle = results.length > 0;
            console.log(`>>>>>>>>>>>>>>>>>>>>>> DONE updating resultsByArticle. results.length: ${results.length} <<<<<<<<<<<<<<<<<<<<<<<`);
            return includesArticle;
          }
          //[MEMO] Funzione da completare: findArticolo - end

          /* Commentato per bugfixare findArticolo() */
          // const conditions = {
          //   tag: contentIncipit.includes(state.activeFilters.byProvvedimento.provv),
          //   tipo: true, //difficile da capire, chiedere a Luigi
          //   data: true, //Qui ci si schianta hard, dopo
          //   sottonumero: true,
          //   articolo: true,
          //   numero: true,
          //   argomento: true,
          //   allegato: true,
          // };
          // //Controllo che nei primi 500 chars del documento sia presente il tag
          // return !Object.values(conditions).every(bool => bool === true); //questo è da cambiare
        }

        //Eventuali affinamenti del filtro andranno qui
        const cleanContent = d.content.replace(/[^\w\s]/gi, "").toLowerCase();

        //Se il file non contiene la query di ricerca, result parte da false
        const result = cleanContent.includes(state.global.searchterms?.replace(/[^\w\s]/gi, "").toLowerCase());
        if (result === true) {
          console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching nel content");
          return result;
        }

        //Ciclo che cerca i tag di byAuthority, appena uno viene trovato, esce per risparmiare tempo
        if (state.global.activeFilters.byAuthority?.length > 0) {
          for (let x = 0; x < state.global.activeFilters.byAuthority.length; x++) {
            updateAuthorityTagsState("tag", state.global.activeFilters.byAuthority[x].tag.replace(/[^\w\s]/gi, ""));
            updateContentState("result", cleanContent.toLowerCase().includes(tag));
            if (result === true) {
              console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags byAuthority");
              return result;
            }
          }
        }

        //Ciclo che cerca i tag di bySubject, appena uno viene trovato, esce per risparmiare tempo
        if (Object.keys(state.global.activeFilters.bySubject).length > 0) {
          for (let x = 0; x < state.global.activeFilters.bySubject.length; x++) {
            //Qui vanno aggiunti tutti i comportamenti dei filtri di bySubject, riproducendo questo blocco if
            if (Array.isArray(state.global.activeFilters.bySubject[x].tag)) {
              updateBySubjectState("tags", state.global.activeFilters.bySubject[x].tag);
              for (let y = 0; y < bySubjectState.tags.length; y++) {
                updateBySubjectState("tag", bySubjectState.tags[y].replace(/[^\w\s]/gi, ""));

                updateContentState("result", cleanContent.includes(tag));
                if (result === true) {
                  console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject");
                  return result;
                }
              }
            } else {
              updateBySubjectState("tag", state.global.activeFilters.bySubject[x].tag.replace(/[^\w\s]/gi, ""));
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
      return dataFiltered;
    };

    const filteredArr = await getFilteredArr();
    console.log("AFTER FILTER - this should never print before all parseFileItems are done");
    console.log(filteredArr.map(file => file.filename));
    // const consoleFormattedArr = state.getFilteredDocs.filteredArr.map(el =>
    //   ({ ...el, content: el.content.length ? "PRESENT BUT CENSORED" : "MISSING" })
    // );
    // console.log("consoleFormattedArr:", consoleFormattedArr);
    return filteredArr;
  };
  const filteredDocs = await getFilteredDocs();
  updateState("global", "filteredDocs", filteredDocs);
};
