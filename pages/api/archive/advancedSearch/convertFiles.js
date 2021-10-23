import fs from "fs"; //pacchetto usato per leggere docx files
import libreConvert from "libreoffice-convert"; //pacchetto usato per convertire i docx files in pdf (linux version)

export const convertFiles = async ({ state, updateState }) => {
  await updateState("conversion", "convertedDocs", []);
  for (let x = 0; x < state.global.filteredDocs.length; x++) {
    await updateState("conversion", "document", state.global.filteredDocs[x]);

    const getLibreResult = async () => {
      if (state.conversion.document && state.conversion.document.filename) {
        await updateState("libreResult", "extend", ".pdf");
        await updateState("libreResult", "enterPath", state.conversion.document.fullpath);
        await updateState("libreResult", "undone", fs.readFileSync(state.libreResult.enterPath));
        libreConvert.convert(state.libreResult.undone, state.libreResult.extend, undefined, (err, done) => {
          if (err) {
            console.log(`\n\n Error converting file: ${state.libreResult.enterPath} \n\n`);
            rejectLibre(err);
          } else {
            // writeFileSync funziona, crea veramente il pdf, ma sarebbe troppo pesante farlo ogni volta per tutti i file, quindi mi limito a sfruttare il buffer: done.
            //await fs.writeFileSync(state.libreResult.outputPath, done)
            return done;
          }
        });
      } else {
        console.log("Error - Caso inaspettato con questo file: ", state.global.filteredDocs[x].fullpath);
      }
    };

    await updateState("conversion", "libreResult", await getLibreResult());
    await updateState("conversion", "mapResult", {});

    if (state.conversion.libreResult && state.conversion.libreResult.byteLength) {
      await updateState("conversion", "mapResult", {
        fullpath: state.conversion.document.fullpath,
        filename: state.conversion.document.filename,
        relativepath: state.conversion.document.relativepath,
        linuxpath: state.conversion.document.linuxpath,
        content: state.conversion.document.filename.includes(".docx") ? state.conversion.document.content : "", //[memo] prob useless
        buffer: state.conversion.libreResult,
      });
    } else {
      await updateState("conversion", "mapResult", {
        fullpath: state.conversion.document.fullpath,
        filename: state.conversion.document.filename,
        relativepath: state.conversion.document.relativepath,
        linuxpath: state.conversion.document.linuxpath,
        content: state.conversion.document.filename.includes(".docx") ? state.conversion.document.content : "", //[memo] prob useless
      });
    }

    const updateConvertedDocs = async (convertedArr, originalArr) => {
      const resultArr = await [...convertedArr, state.conversion.mapResult];
      return resultArr;
    };
    updateState("conversion", "convertedDocs", await updateConvertedDocs(state.conversion.convertedDocs, state.filteredDocs));
  }
};
