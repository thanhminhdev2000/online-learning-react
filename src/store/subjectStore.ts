import { ClassDto, DocumentDto } from '@apis/generated/data-contracts';
import { create } from 'zustand';

interface SubjectState {
  classId: number;
  subjectId: number;
  subjects: ClassDto[];
  selectedDocument: DocumentDto;
  setClassId: (classId: number) => void;
  setSubjectId: (subjectId: number) => void;
  setSubjects: (subjects: ClassDto[]) => void;
  setSelectedDocument: (selectedDocument: DocumentDto) => void;
}

const useSubjectStore = create<SubjectState>((set) => ({
  classId: 0,
  subjectId: 0,
  subjects: [],
  selectedDocument: {} as DocumentDto,
  setClassId: (classId: number) => {
    set({ classId });
  },
  setSubjectId: (subjectId: number) => {
    set({ subjectId });
  },
  setSubjects: (subjects: ClassDto[]) => {
    set({ subjects });
  },
  setSelectedDocument: (selectedDocument: DocumentDto) => {
    set({ selectedDocument });
  },
}));

export default useSubjectStore;
