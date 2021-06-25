import fs from 'fs';//pacchetto usato per leggere docx files
import libreConvert from 'libreoffice-convert'; //pacchetto usato per convertire i docx files in pdf (linux version)
import pdf2html from 'pdf2html'; //pacchetto usato per per convertire i pdf files in HTML

export const convertToDocx = async (originalFiles, whichToConvert, envSlash) => {
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
            const buffer = fs.readFileSync(enterPath);
            console.log("Successfully read - doc file:", enterPath);
            libreConvert.convert(buffer, targetExt, undefined, async (err, done) => {
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
      const pdfToHtml = [];
      //[pdf2html (?)]
      console.log("Starting conversion  (.pdf ---> .docx)");

      for (let x = 0; x < pdfFiles.length; x++) {
        const d = pdfFiles[x];
        const conversionToHtml = await new Promise((resolveHtml, rejectHtml) => {
          if (d && d.filename) {
            //part 1 - rename the files
            const startExt = '.pdf';
            const targetExt = '.pdf';
            const previousEnterPath = d.fullpath;
            const fullPathNoExt = d.fullpath.split(startExt)[0];
            const lastIsTargetArr = fullPathNoExt.split(envSlash);
            const firstIsTargetArr = lastIsTargetArr.reverse();
            const previousName = firstIsTargetArr[0];

            const getCorrectName = (name) => {
              const result = name.replace(/\s/g, '');
              console.log("getCorrectName - previousName:", previousName);
              console.log("getCorrectName - formattedName:", result);
              return result;
            };

            const getCorrectPath = (path) => {
              const fullLenght = path.length;
              const lengthToRemove = previousName.length + startExt.length;
              const lengthToPreserve = fullLenght - lengthToRemove;
              const noFilenamePath = path.slice(0, lengthToPreserve);
              const result = noFilenamePath + formattedName + startExt;
              console.log("getCorrectPath - fullLenght:", fullLenght);
              console.log("getCorrectPath - lengthToRemove:", lengthToRemove);
              console.log("getCorrectPath - lengthToPreserve:", lengthToPreserve);
              console.log("getCorrectPath - noFilenamePath:", noFilenamePath);
              console.log("getCorrectPath - previousPath:", path);
              console.log("getCorrectPath - formattedPath:", result);
              return result;
            };

            const formattedName = getCorrectName(previousName);
            const formattedEnterPath = getCorrectPath(previousEnterPath);
            const buffer = fs.readFileSync(previousEnterPath);

            //process: creation of files with newly formatted name
            console.log("process: creation of files with newly formatted name");
            libreConvert.convert(buffer, targetExt, undefined, async (err, done) => {
              if (err) {
                console.log(`\n\n ERROR: Pdf process - libreConvert.convert phase 1 - doc file: ${formattedEnterPath} \n\n`);
                console.log('Error:', err);
                rejectHtml(err);
                return;
              } else {
                try {


                  //[Checkpoint] Questo metodo non finisce in un loop eterno, ma stampa un botto di errori (non bloccanti)

                  let finishedCreatingFile = false;
                  //console.log("Starting deletion of file:", previousEnterPath);
                  //await fs.unlinkSync(previousEnterPath);
                  console.log("Starting file creation - outputPath", formattedEnterPath);
                  fs.writeFileSync(formattedEnterPath, done); //BISOGNA FORZARE L'ATTESA DELLA FINE DI QUESTO
                  finishedCreatingFile = fs.readFileSync(formattedEnterPath)
                    (function forceWait() {
                      if (!finishedCreatingFile) {
                        console.log("File creation not finished for:", formattedEnterPath);
                        setTimeout(forceWait, 1000);
                      } else {
                        return;
                      }
                    })();





                } catch (err) {
                  console.log(`\n\n ERROR: Pdf process - libreConvert.convert phase 2 - doc file: ${formattedEnterPath} \n\n`);
                  console.log('Error:', err);
                }
                //done è il BLOB
                resolveHtml(done);
              }
            });

            //process: extraction of pdf file content to html 
            console.log("process: extraction of pdf file content to html ");
            pdf2html.html(formattedEnterPath, async (err, done) => {
              if (err) {
                console.log(`\n\n ERROR: Pdf process - pdf2html.html phase 1 - doc file: ${formattedEnterPath} \n\n`);
                console.log('Error:', err);
                //Exception in thread "main" java.io.FileNotFoundException: /home/iridion/Desktop/Repos/Freelancer/project-privacy/public/archive/Giurisprudenza/Libri/MassimarioGarante2015-2016.pdf (No such file or directory)
                rejectHtml("err:", err);
              } else {
                console.log("successfully converted pdf file:", formattedEnterPath);
                //done è l'html, non devo scriverci un file, ma conservare il dato
                //await fs.writeFileSync(outputPath, done);                
                const descrObj = { start: formattedEnterPath, html: done };
                await pdfToHtml.push(descrObj);
                resolveHtml(descrObj);
              }
            });
          } else {
            console.log("Error - d or d.filename are undefined or null for this file: ", pdfFiles[x].fullpath);
          }
        }).then(async descrObjToAdd => {
          await pdfToHtml.push(descrObjToAdd);
          return descrObjToAdd;
        });

        //console.log('First converted file looks like this:', { ...pdfToHtml[0], html: pdfToHtml[0].html.slice(0, 1000) });

      }
      //console.log("Finished conversion  (.pdf ---> .html). These files were converted:", pdfToDocx);
    }
  } catch (error) {
    console.log("|||||||||||| FAILURE |||||||||||| Error:", error);
  }
};