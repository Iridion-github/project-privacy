import fs from 'fs';//pacchetto usato per leggere docx files
import libreConvert from 'libreoffice-convert'; //pacchetto usato per convertire i docx files in pdf (linux version)
import pdf2html from 'pdf2html'; //pacchetto usato per per convertire i pdf files in HTML

export const convertToDocx = async (originalFiles, whichToConvert, envSlash) => {
  try {
    let docxFiles = originalFiles.filter(file => file.fullpath.includes('.docx'));
    let docFiles = originalFiles.filter(file => !file.fullpath.includes('.docx') && file.fullpath.includes('.doc'));
    let pdfFiles = originalFiles.filter(file => !file.fullpath.includes('.docx') && file.fullpath.includes('.pdf')); //per ora ignoriamo i pdf
    //console.log("These are all the files: ", originalFiles.map(f => f.fullpath));
    //console.log("These files are all docx: ", docxFiles.map(f => f.fullpath));
    //console.log("These files are all doc: ", docFiles.map(f => f.fullpath));
    //console.log("These files are all pdf: ", pdfFiles.map(f => f.fullpath));

    //Process start: .doc ---> .docx
    console.log("Process start: .doc ---> .docx");
    if (whichToConvert.includes('doc')) {
      console.log("Starting conversion  (.doc ---> .docx)");
      const docToDocx = [];
      //for loop che finisce quando tutti i doc files hanno un corrispondente docx
      for (let x = 0; x < docFiles.length; x++) {
        const d = docFiles[x];
        //Outside Promise 1 - start
        const convertPromise = await new Promise(async (resolveLibre, rejectLibre) => {
          console.log("Outside Promise 1 has started");
          if (d && d.filename) {
            const startExt = '.doc';
            const targetExt = '.docx';
            const enterPath = d.fullpath;
            const outputPath = d.fullpath.split(startExt)[0] + targetExt;
            const buffer = fs.readFileSync(enterPath);
            console.log("Successfully read - doc file:", enterPath);
            console.log("buffer 1 bytelength:", buffer.byteLength);
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
                resolveLibre(descrObj);
              }
            });
          } else {
            console.log("Error - Caso inaspettato con questo doc file: ", docFiles[x].fullpath);
          }
        }).then(convertedListElem => {
          console.log("Outside Promise 1 has ended - convertPromise returns:", convertedListElem);
          //Outside Promise 1 - end
          docToDocx.push(convertedListElem);
          return convertedListElem;
        });
      }
    }
    //Process end: .doc ---> .docx
    console.log("Process end: .doc ---> .docx");

    //Process start: .pdf ---> .docx
    // if (whichToConvert.includes('pdf')) {
    //   const pdfToHtml = [];
    //   const pdfToDoc = [];

    //   for (let x = 0; x < pdfFiles.length; x++) {
    //     const pdfFile = pdfFiles[x];
    //     const lastCycle = x === pdfFiles.length - 1;

    //     //Outside Promise 2 - start        
    //     const convertedToDocxList = await new Promise(async (resolveConvertedToDocxList, rejectConvertedToDocxList) => {
    //       if (pdfFile && pdfFile.filename) {
    //         //Promise 1 inside Promise 2 - start
    //         const renamePromise = await new Promise(async (resolveRenameFile, rejectRenameFile) => {
    //           console.log("Promise 1 inside Promise 2 has started");
    //           const startExt = '.pdf';
    //           const targetExt = '.pdf';
    //           const previousEnterPath = pdfFile.fullpath;
    //           const fullPathNoExt = pdfFile.fullpath.split(startExt)[0];
    //           const lastIsTargetArr = fullPathNoExt.split(envSlash);
    //           const firstIsTargetArr = lastIsTargetArr.reverse();
    //           const previousName = firstIsTargetArr[0];

    //           const getCorrectName = (name) => {
    //             const result = name.replace(/\s/g, '');
    //             console.log("getCorrectName - previousName:", previousName);
    //             console.log("getCorrectName - formattedName:", result);
    //             return result;
    //           };

    //           const getCorrectPath = (path) => {
    //             const fullLenght = path.length;
    //             const lengthToRemove = previousName.length + startExt.length;
    //             const lengthToPreserve = fullLenght - lengthToRemove;
    //             const noFilenamePath = path.slice(0, lengthToPreserve);
    //             const result = noFilenamePath + formattedName + startExt;
    //             console.log("getCorrectPath - fullLenght:", fullLenght);
    //             console.log("getCorrectPath - lengthToRemove:", lengthToRemove);
    //             console.log("getCorrectPath - lengthToPreserve:", lengthToPreserve);
    //             console.log("getCorrectPath - noFilenamePath:", noFilenamePath);
    //             console.log("getCorrectPath - previousPath:", path);
    //             console.log("getCorrectPath - formattedPath:", result);
    //             return result;
    //           };

    //           const formattedName = await getCorrectName(previousName);
    //           const formattedEnterPath = await getCorrectPath(previousEnterPath);

    //           //process: creation of files with newly formatted name
    //           if (formattedName !== previousName) {
    //             console.log("This file needs to be renamed:", previousName);
    //             const buffer = await fs.readFileSync(previousEnterPath);
    //             console.log("buffer 2 bytelength:", buffer.byteLength);

    //             console.log("process: creation of files with newly formatted name");
    //             libreConvert.convert(buffer, targetExt, undefined, async (err, done) => {
    //               if (err) {
    //                 console.log(`\n\n ERROR: Pdf process - libreConvert.convert phase 1 - doc file: ${formattedEnterPath} \n\n`);
    //                 console.log('Error:', err);
    //                 rejectConvertedToDocxList(err);
    //                 return;
    //               } else {
    //                 try {
    //                   let finishedCreatingFile = false;
    //                   console.log("Starting deletion of file:", previousEnterPath);
    //                   await fs.unlinkSync(previousEnterPath);
    //                   console.log("Starting file creation - outputPath", formattedEnterPath);

    //                   fs.writeFileSync(formattedEnterPath, done);
    //                   finishedCreatingFile = await fs.readFileSync(formattedEnterPath);
    //                   resolveRenameFile(formattedEnterPath);
    //                   /*
    //                   //Force waiting                
    //                   let loopNum = 1;
    //                   (function forceWait() {
    //                     if (!finishedCreatingFile) {
    //                       console.log(`Loop number: ${loopNum} - File creation not finished for:", ${formattedEnterPath}`);
    //                       loopNum += 1;
    //                       setTimeout(forceWait, 1000);
    //                     } else {
    //                       console.log(`Loop number: ${loopNum} - File creation FINISHED for:", ${formattedEnterPath}`);
    //                       resolveRenameFile(true);
    //                     }
    //                   })();
    //                   */

    //                 } catch (err) {
    //                   console.log(`\n\n ERROR: renamePromise - libreConvert.convert phase 2 - doc file: ${formattedEnterPath} \n\n`);
    //                   console.log('Error:', err);
    //                   rejectRenameFile(err);
    //                 }
    //               }
    //             });
    //           } else {
    //             console.log("This file doesn't need to be renamed: ", previousName);
    //             resolveRenameFile(previousEnterPath);
    //           }
    //         }).then(async renamedFile => {
    //           //Promise 1 inside Promise 2 - end
    //           console.log("Promise 1 inside Promise 2 has ended - renamePromise returns:", renamedFile);
    //           return renamedFile;
    //         });














    //         //Promise 2 inside Promise 2 - start     
    //         const pdfToDocPromise = await new Promise(async (resolvePdfToDoc, rejectPdfToDoc) => {
    //           console.log("Promise 2 inside Promise 2 has started - ");
    //           console.log("process: conversion of pdf file to doc ");

    //           //libreconvert version
    //           const pdfEnterPath = renamePromise;
    //           const docOutputPath = pdfEnterPath.substring(0, pdfEnterPath.length - 4) + '.docx';
    //           console.log("Serving to pdf->doc converter this enterPath:", pdfEnterPath);
    //           console.log("Serving to pdf->doc converter this outputPath:", docOutputPath);
    //           const buffer = await fs.readFileSync(pdfEnterPath);
    //           console.log("buffer 3 bytelength:", buffer.byteLength);
    //           libreConvert.convert(buffer, '.docx', undefined, async (err, done) => {
    //             if (err) {
    //               console.log(`\n\n Failure converting pdf to doc for file: ${pdfEnterPath} \n\n`);
    //               console.log('Error:', err);
    //               rejectPdfToDoc(err);
    //             } else {
    //               console.log("successfully converted pdf to doc for file :", pdfEnterPath);
    //               //creation of doc file
    //               await fs.writeFileSync(docOutputPath, done); //done = BLOB
    //               //deletion of pdf file
    //               await fs.unlinkSync(pdfEnterPath);
    //               resolvePdfToDoc({ start: pdfEnterPath, docx: docOutputPath });
    //             }
    //           });


    //           /*
    //           //pdf2html version
    //           pdf2html.html(renamePromise, async (err, done) => {
    //             if (err) {
    //               console.log(`\n\n Error during extraction of pdf file content to html for file: ${renamePromise} \n\n`);
    //               console.log('Above Error is:', err);
    //               //Exception in thread "main" java.io.FileNotFoundException: /home/iridion/Desktop/Repos/Freelancer/project-privacy/public/archive/Giurisprudenza/Libri/MassimarioGarante2015-2016.pdf (No such file or directory)
    //               rejectPdfToHtml(false);
    //             } else {
    //               //done è l'html, non devo scriverci un file, ma conservare il dato
    //               console.log("the above file converted to html is:", done.slice(0, 1000));
    //               const descrObj = { start: renamePromise, html: done };
    //               resolvePdfToHtml(descrObj);
    //             }
    //           });
    //           */

    //         }).then(async descrObj => {
    //           //Promise 2 inside Promise 2 - end
    //           console.log("Promise 2 inside Promise 2 has ended");
    //           await pdfToDoc.push(descrObj);
    //           return "pdfToHtmlPromise has resolved";
    //         });

    //         const pdfToHtmlAdaptedToConsole = pdfToDoc.map(el => {
    //           return { path: el.start, firstLine: el.html ? el.html[0] : "el html was undefined" };
    //         });
    //         console.log("After exiting Promise 2 - 2; pdfToHtml:", pdfToHtmlAdaptedToConsole);














    //         resolveConvertedToDocxList(pdfToDoc);
    //       } else {
    //         console.log("Error - pdfFile or pdfFile.filename are undefined or null for this file: ", pdfFiles[x].fullpath);
    //         rejectConvertedToDocxList(false);
    //       }
    //     }).then(async descrObjToAdd => {
    //       await pdfToDoc.push(descrObjToAdd);
    //       //Outside Promise 2 - end        
    //       console.log("Outside Promise 2 has ended - conversionToHtml:", descrObjToAdd);
    //       return descrObjToAdd;
    //     });
    //   }
    //   //for ended
    //   console.log("for loop ended");



    // }
    //Process end: .pdf ---> .docx
    console.log(".pdf ---> .docx process ended");

  } catch (error) {
    console.log("GENERIC FAILURE - Error:", error);
  }


};