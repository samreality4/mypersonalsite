import React, {useState} from "react";
import { Document, pdfjs } from "react-pdf";

function Resume() {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

   const [pageState, setPageState] = useState({numPages: 1, pageNumber: 1}) 
   
    function onDocumentLoadSuccess ({numPages})  {
        setPageState({numPages});
    }

  return <div><Document 
  onLoadSuccess= {onDocumentLoadSuccess}
  onLoadError={console.error}
  file="/images/resume.pdf">
  </Document></div>
}

export default Resume;
