import PDFJS from 'pdfjs-dist';
import JSZIP from 'jszip';
import { saveAs } from 'file-saver';

export const convertPdfToPng = (
  file,
  config = {
    outputType: 'callback',
    callback: () => { }
  }
) => {
  let fileReader = new FileReader();
  let images = [];
  let currentPage = 1;

  fileReader.onload = async e => {
    const uint8array = new Uint8Array(e.target.result);
    const pdf = await PDFJS.getDocument({ data: uint8array }).promise;

    await getPage();

    const getPage = async () => {
      const page = pdf.getPage(currentPage);
      const viewport = page.getViewport(1.5);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const renderContext = { canvasContext: ctx, viewport };
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      await page.render(renderContext).promise;
      canvas.toBlob(async blob => {
        const image = new File([blob], `page-${currentPage}.png`, {
          lastModified: new Date(),
          type: 'image/png'
        });
        images.push(image);
        if (currentPage < pdf.numPages) {
          currentPage++;
          await getPage();
        } else {
          switch (config.outputType) {
            case 'download':
              download();
              break;
            case 'callback':
            default:
              config.callback(images);
              break;
          }
        }
      });
    };

    const download = () => {
      if (images.length === 1) {
        return saveAs(images[0]);
      }
      const zip = new JSZIP();
      images.forEach(img => {
        zip.file(img.filename, img);
      });
      return zip.generateAsync({ type: 'blob' }).then(blob => {
        saveAs(blob, 'pdfToPng.zip');
      });
    };
  };

  fileReader.readAsArrayBuffer(file);
};