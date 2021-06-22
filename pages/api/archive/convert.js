import fs from 'fs';//pacchetto usato per leggere docx files
import libreConvert from 'libreoffice-convert'; //pacchetto usato per convertire i docx files in pdf (linux version)
import { Word } from 'pdf-officegen'; //pacchetto usato per per convertire i pdf files in docx
const officegenWord = new Word();

export const convertToDocx = async (originalFiles, whichToConvert) => {
  try {
    let docxFiles = originalFiles.filter(file => file.fullpath.includes('.docx'));
    let docFiles = originalFiles.filter(file => !file.fullpath.includes('.docx') && file.fullpath.includes('.doc'));
    let pdfFiles = originalFiles.filter(file => !file.fullpath.includes('.docx') && file.fullpath.includes('.pdf')); //per ora ignoriamo i pdf
    console.log("These are all the files: ", originalFiles.map(f => f.fullpath));
    console.log("These files are all docx: ", docxFiles.map(f => f.fullpath));
    console.log("These files are all doc: ", docFiles.map(f => f.fullpath));
    console.log("These files are all pdf: ", pdfFiles.map(f => f.fullpath));

    const docToDocx = [];
    const pdfToDocx = [];
    //.doc ---> .docx
    if (whichToConvert.includes('doc')) {
      console.log("Starting conversion  (.doc ---> .docx)");
      for (let x = 0; x < docFiles.length; x++) {
        const d = docFiles[x];
        const convertedList = await new Promise((resolveLibre, rejectLibre) => {
          if (d && d.filename) {
            const startExt = '.doc';
            const targetExt = '.docx';
            const enterPath = d.fullpath;
            const outputPath = d.fullpath.split(startExt)[0] + targetExt;
            const file = fs.readFileSync(enterPath);
            console.log("Successfully read - doc file:", enterPath);
            libreConvert.convert(file, targetExt, undefined, async (err, done) => {
              if (err) {
                console.log(`\n\n Failure converting doc file: ${enterPath} \n\n`);
                console.log('Error:', err);
                rejectLibre(err);
              } else {
                console.log("successfully converted doc file:", enterPath);
                await fs.writeFileSync(outputPath, done);
                //done è il BLOB, qui non serve metterlo nel resolve
                const descrObj = { start: enterPath, finish: outputPath };
                await docToDocx.push(descrObj);
                resolveLibre(true);
              }
            });
          } else {
            console.log("Error - Caso inaspettato con questo doc file: ", docFiles[x].fullpath);
          }
        }).then(convertedFilesPaths => {
          return convertedFilesPaths;
        });
      }
      console.log("Finished conversion  (.doc ---> .docx). These files were converted:", docToDocx);
    }

    //.pdf ---> .docx
    if (whichToConvert.includes('pdf')) {
      //[LibreConvert (Not Working)]
      console.log("Starting conversion  (.pdf ---> .docx)");
      for (let x = 0; x < pdfFiles.length; x++) {
        const d = pdfFiles[x];
        const convertedList = await new Promise((resolveLibre, rejectLibre) => {
          if (d && d.filename) {
            const startExt = '.pdf';
            const targetExt = '.docx';
            const enterPath = d.fullpath;
            const outputPath = d.fullpath.split(startExt)[0] + targetExt;
            const file = fs.readFileSync(enterPath);
            console.log("Successfully read - pdf file:", enterPath);
            libreConvert.convert(file, targetExt, undefined, async (err, done) => {
              if (err) {
                console.log(`\n\n Failure converting pdf file: ${enterPath} \n\n`);
                console.log('Error:', err);
                rejectLibre(false);
              } else {
                console.log("successfully converted pdf file:", enterPath);
                await fs.writeFileSync(outputPath, done);
                //done è il BLOB, qui non serve metterlo nel resolve
                const descrObj = { start: enterPath, finish: outputPath };
                await docToDocx.push(descrObj);
                resolveLibre(true);
              }
            });
          } else {
            console.log("Error - Caso inaspettato con questo pdf file: ", pdfFiles[x].fullpath);
          }
        }).then(convertedFilesPaths => {
          return convertedFilesPaths;
        });
      }
      console.log("Finished conversion  (.pdf ---> .docx). These files were converted:", pdfToDocx);
    }
  } catch (error) {
    console.log("|||||||||||| FAILURE |||||||||||| Error:", error);
  }
};