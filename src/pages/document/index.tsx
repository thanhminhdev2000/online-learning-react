import { Box } from '@mui/material';
import DocumentCard from '@pages/document/components/DocumentCard';
import DocumentUploadModal from '@pages/document/components/DocumentUploadModal';
import { useState } from 'react';

const DocumentPage = () => {
  const [openUploadDocumentModal, setOpenUploadDocumentModal] = useState(false);

  return (
    <Box>
      <DocumentCard onOpen={() => setOpenUploadDocumentModal(true)} />
      <DocumentUploadModal open={openUploadDocumentModal} onClose={() => setOpenUploadDocumentModal(false)} />
    </Box>
  );
};

export default DocumentPage;
