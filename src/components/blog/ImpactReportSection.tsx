import React, { useState, useEffect, useRef } from "react";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import samplePDF from "./sample.pdf";
import { PageSubSection } from "../common/PageSubSection";

const Page: React.FC<{ pageNumber: number }> = ({ pageNumber }) => {
    const pageRef = useRef(null);

    return (
        <div ref={pageRef}>
            <ReactPdfPage pageNumber={pageNumber} width={300} />
        </div>
    );
};

function PDFFlipBook() {
    return (
        <Document file={samplePDF}>
            <HTMLFlipBook width={500} height={500}>
                <Page pageNumber={1} />
                <Page pageNumber={2} />
                <Page pageNumber={3} />
            </HTMLFlipBook>
        </Document>
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
