import { ClassWithSubjectsDto, DocumentsResponseDto } from '@apis/generated/data-contracts';
import { create } from 'zustand';

interface SubjectState {
  classId: number;
  subjectId: number;
  subjects: ClassWithSubjectsDto[];
  selectedDocument: DocumentsResponseDto;
  setClassId: (classId: number) => void;
  setSubjectId: (subjectId: number) => void;
  setSubjects: (subjects: ClassWithSubjectsDto[]) => void;
  setSelectedDocument: (selectedDocument: DocumentsResponseDto) => void;
}

const useSubjectStore = create<SubjectState>((set) => ({
  classId: 0,
  subjectId: 0,
  subjects: [],
  selectedDocument: {} as DocumentsResponseDto,
  setClassId: (classId: number) => {
    set({ classId });
  },
  setSubjectId: (subjectId: number) => {
    set({ subjectId });
  },
  setSubjects: (subjects: ClassWithSubjectsDto[]) => {
    set({ subjects });
  },
  setSelectedDocument: (selectedDocument: DocumentsResponseDto) => {
    set({ selectedDocument });
  },
}));

export default useSubjectStore;
