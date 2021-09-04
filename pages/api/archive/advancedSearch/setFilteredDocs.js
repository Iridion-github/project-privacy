export const setFilteredDocs = async ({ envSlash, globalState, updateGlobalState, getFilteredDocsState, updateGetFilteredDocsState, byProvvedimentoState, updateByProvvedimentoState }) => {
  const getFilteredDocs = async () => {
    await updateGetFilteredDocsState(
      "filteredArr",
      await globalState.dataToFilter.filter(async (d, filterIndex) => {
        if (d.content) {
          if (!globalState.includePdf && d.filename.includes(".pdf")) return false;
          if (!globalState.includeDocx && d.filename.includes(".docx")) return false;
          if (!globalState.includeDoc && d.filename.includes(".doc") && d.filename.split(".doc")[1].length === 0) return false;
          if (globalState.mustBeProvv && !d.fullpath.includes(envSlash + "Provvedimenti" + envSlash)) {
            return false;
          } else if (globalState.mustBeProvv) {
            //Sottofiltro esclusivo per i Provvedimenti.

            await updateByProvvedimentoState("contentIncipit", d.content.slice(0, 500));
            await updateByProvvedimentoState("enterPath", d.fullpath);

            //Ricerca Articolo specifico - start
            await updateByProvvedimentoState("requiredFormat", {
              bold: true,
              italic: false,
              size: null,
              prevChar: null,
              nextChar: ".",
            });
            await updateByProvvedimentoState("target", globalState.activeFilters.byProvvedimento.articolo);

            //[MEMO] Funzione da completare: findArticolo
            // console.log(">>>>>>>>>>>>>>>>>>>>>> Entering findArticolo");
            // byProvvedimentoState.resultsByArticle = await findArticolo({
            //   enterPath: byProvvedimentoState.enterPath,
            //   target: byProvvedimentoState.target,
            //   requiredFormat: byProvvedimentoState.requiredFormat
            // });
            // console.log(">>>>>>>>>>>>>>>>>>>>>> Exited findArticolo");
            //Ricerca Articolo specifico - end

            await updateByProvvedimentoState("conditions", {
              tag: byProvvedimentoState.contentIncipit.includes(globalState.activeFilters.byProvvedimento.provv),
              tipo: true, //difficile da capire, chiedere a Luigi
              data: true, //Qui ci si schianta hard, dopo
              sottonumero: true,
              articolo: true,
              numero: true,
              argomento: true,
              allegato: true,
            });
            //Controllo che nei primi 500 chars del documento sia presente il tag
            return !Object.values(byProvvedimentoState.conditions).every(bool => bool === true); //questo è da cambiare
          }

          //Eventuali affinamenti del filtro andranno qui
          await updateContentState("cleanContent", d.content.replace(/[^\w\s]/gi, "").toLowerCase());

          //Se il file non contiene la query di ricerca, result parte da false
          await updateContentState("result", contentState.cleanContent.includes(globalState.searchterms?.replace(/[^\w\s]/gi, "").toLowerCase()));
          if (contentState.result === true) {
            console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching nel content");
            return contentState.result;
          }

          //Ciclo che cerca i tag di byAuthority, appena uno viene trovato, esce per risparmiare tempo
          if (globalState.activeFilters.byAuthority?.length > 0) {
            for (let x = 0; x < globalState.activeFilters.byAuthority.length; x++) {
              await updateAuthorityTagsState("tag", globalState.activeFilters.byAuthority[x].tag.replace(/[^\w\s]/gi, ""));
              await updateContentState("result", contentState.cleanContent.toLowerCase().includes(tag));
              if (contentState.result === true) {
                console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags byAuthority");
                return contentState.result;
              }
            }
          }

          //Ciclo che cerca i tag di bySubject, appena uno viene trovato, esce per risparmiare tempo
          if (Object.keys(globalState.activeFilters.bySubject).length > 0) {
            for (let x = 0; x < globalState.activeFilters.bySubject.length; x++) {
              //Qui vanno aggiunti tutti i comportamenti dei filtri di bySubject, riproducendo questo blocco if
              if (Array.isArray(globalState.activeFilters.bySubject[x].tag)) {
                await updateBySubjectState("tags", globalState.activeFilters.bySubject[x].tag);
                for (let y = 0; y < bySubjectState.tags.length; y++) {
                  await updateBySubjectState("tag", bySubjectState.tags[y].replace(/[^\w\s]/gi, ""));

                  await updateContentState("result", contentState.cleanContent.includes(tag));
                  if (contentState.result === true) {
                    console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject");
                    return contentState.result;
                  }
                }
              } else {
                await updateBySubjectState("tag", globalState.activeFilters.bySubject[x].tag.replace(/[^\w\s]/gi, ""));
                await updateContentState("result", contentState.cleanContent.includes(tag));
                if (contentState.result === true) {
                  console.log("Stopped analyzing file:", d.fullpath, " perchè trovato un matching in tags bySubject (nel content, non come tag)");
                  return contentState.result;
                }
              }
            }
          }
          return contentState.result;
        } else {
          return false;
        }
      })
    );
    // const consoleFormattedArr = await getFilteredDocsState.filteredArr.map(el =>
    //   ({ ...el, content: el.content.length ? "PRESENT BUT CENSORED" : "MISSING" })
    // );
    // console.log("consoleFormattedArr:", consoleFormattedArr);
    return getFilteredDocsState.filteredArr;
  };
  await updateGlobalState("filteredDocs", await getFilteredDocs());
};
