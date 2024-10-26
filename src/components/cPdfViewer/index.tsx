import { useState } from 'react';
import { Document, Page } from 'react-pdf';

const CPdfViewer = ({ fileUrl }: { fileUrl: string }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
        Previous
      </button>
      <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
        Next
      </button>
    </div>
  );
};

export default CPdfViewer;
