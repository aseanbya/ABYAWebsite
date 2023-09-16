import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { PageSubSection } from "../common/PageSubSection";

function PDFFlipBook() {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

export const ImpactReportSection = () => {
    return (
        <PageSubSection title={"Annual Impact Report"}>
            <div className="flex items-center justify-center">
                <PDFFlipBook />
            </div>
        </PageSubSection>
    );
};
