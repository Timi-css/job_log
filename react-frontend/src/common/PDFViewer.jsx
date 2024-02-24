import React from "react";
import { Document, Page } from "react-pdf";

function PDFViewer({resumePath}) {
        return (
                <Document file={resumePath}>
<Page pageNumber={1}/>
                </Document>
        )
}

export default PDFViewer