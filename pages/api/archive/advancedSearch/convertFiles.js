import fs from 'fs';//pacchetto usato per leggere docx files
import libreConvert from 'libreoffice-convert'; //pacchetto usato per convertire i docx files in pdf (linux version)

export const convertFiles = async ({
  globalState,
  updateGlobalState,
  conversionState,
  updateConversionState,
  libreResultState,
  updateLibreResultState,
}) => {
  await updateConversionState("convertedDocs", []);
  await updateGlobalState("conversionFinished", false);
  for (let x = 0; x < globalState.filteredDocs.length; x++) {
    await updateConversionState("document", globalState.filteredDocs[x]);

    const getLibreResult = async () => {
      if (conversionState.document && conversionState.document.filename) {
        await updateLibreResultState("extend", '.pdf');
        await updateLibreResultState("enterPath", conversionState.document.fullpath);
        //libreResultState.outputPath = conversionState.document.filename.includes(".docx") ? conversionState.document.fullpath.split('.docx')[0] + libreResultState.extend : conversionState.document.fullpath.split('.doc')[0] + libreResultState.extend;
        await updateLibreResultState("undone", await fs.readFileSync(libreResultState.enterPath));
        libreConvert.convert(libreResultState.undone, libreResultState.extend, undefined, (err, done) => {
          if (err) {
            console.log(`\n\n Error converting file: ${libreResultState.enterPath} \n\n`);
            rejectLibre(err);
          } else {
            // writeFileSync funziona, crea veramente il pdf, ma sarebbe troppo pesante farlo ogni volta per tutti i file, quindi mi limito a sfruttare il buffer: done.
            //await fs.writeFileSync(libreResultState.outputPath, done)
            return done;
          }
        });
      } else {
        console.log("Error - Caso inaspettato con questo file: ", globalState.filteredDocs[x].fullpath);
      }
    };

    await updateConversionState("libreResult", await getLibreResult());
    await updateConversionState("mapResult", {});

    if (conversionState.libreResult && conversionState.libreResult.byteLength) {
      await updateConversionState("mapResult", {
        fullpath: conversionState.document.fullpath,
        filename: conversionState.document.filename,
        relativepath: conversionState.document.relativepath,
        linuxpath: conversionState.document.linuxpath,
        content: conversionState.document.filename.includes(".docx") ? conversionState.document.content : "", //[memo] prob useless
        buffer: conversionState.libreResult
      });
    } else {
      await updateConversionState("mapResult", {
        fullpath: conversionState.document.fullpath,
        filename: conversionState.document.filename,
        relativepath: conversionState.document.relativepath,
        linuxpath: conversionState.document.linuxpath,
        content: conversionState.document.filename.includes(".docx") ? conversionState.document.content : "" //[memo] prob useless
      });
    }

    const updateConvertedDocs = async (convertedArr, originalArr) => {
      const resultArr = await [...convertedArr, conversionState.mapResult];
      if (resultArr.length === originalArr.length) {
        await updateGlobalState("conversionFinished", true);
      }
      return resultArr;
    };
    updateConversionState("convertedDocs", await updateConvertedDocs(conversionState.convertedDocs, globalState.filteredDocs));
  }
};