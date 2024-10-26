import DocumentCard from '@pages/document/components/DocumentCard';

import { useParams } from 'react-router-dom';

const DocumentBySubjectPage = () => {
  const { subjectId } = useParams();

  return <DocumentCard subjectId={Number(subjectId)} />;
};

export default DocumentBySubjectPage;
