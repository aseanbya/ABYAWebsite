import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url,
).toString();

const options = {
    cMapUrl: "/cmaps/",
    standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};
const maxWidth = 700;
type PDFFile = string | File | null;

export default function AnnualImpactReport2022() {
    const [file, setFile] = useState<PDFFile>("/pdfs/report.pdf");
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState(1);
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();
    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;
        if (entry) { setContainerWidth(entry.contentRect.width); }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    function onDocumentLoadSuccess({ numPages: nextNumPages, }: PDFDocumentProxy): void { setNumPages(nextNumPages); }
    function changePage(offset: number) { setPageNumber((prevPageNumber) => prevPageNumber + offset); }
    function previousPage() { changePage(-1); }
    function nextPage() { changePage(1); }

    return (
        <div className="mx-2 flex flex-col items-center p-2">
            <div className="m-w-[calc(100%-2em)] h-fit w-full" ref={setContainerRef}>
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    options={options}
                    className="flex flex-col items-center"
                >
                    <Page pageNumber={pageNumber} width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth} className="m-2 shadow-md" />
                </Document>
            </div>

            <div className="mt-1 flex items-center justify-center gap-8">
                <h1 className="text-center text-lg font-semibold">Page {pageNumber || (numPages ? 1 : "--")} / {numPages ?? "--"}</h1>
                <div className="flex gap-2">
                    <button disabled={pageNumber <= 1} onClick={previousPage} className="btn">{"<"}</button>
                    <button disabled={numPages ? pageNumber >= numPages : false} onClick={nextPage} className="btn">{">"}</button>
                </div>
            </div>
        </div>
    );
}
