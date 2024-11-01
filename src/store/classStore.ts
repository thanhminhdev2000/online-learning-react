import { ClassDto, CourseDto, DocumentDto } from '@apis/generated/data-contracts';
import { create } from 'zustand';

interface ClassState {
  classId: number;
  subjectId: number;
  classes: ClassDto[];
  selectedDocument: DocumentDto;
  selectedCourse: CourseDto;
  setClassId: (classId: number) => void;
  setSubjectId: (subjectId: number) => void;
  setClasses: (classes: ClassDto[]) => void;
  setSelectedDocument: (selectedDocument: DocumentDto) => void;
  setSelectedCourse: (selectedCourse: CourseDto) => void;
}

const useClassStore = create<ClassState>((set) => ({
  classId: 0,
  subjectId: 0,
  classes: [],
  selectedDocument: {} as DocumentDto,
  selectedCourse: {} as CourseDto,
  setClassId: (classId: number) => {
    set({ classId });
  },
  setSubjectId: (subjectId: number) => {
    set({ subjectId });
  },
  setClasses: (classes: ClassDto[]) => {
    set({ classes });
  },
  setSelectedDocument: (selectedDocument: DocumentDto) => {
    set({ selectedDocument });
  },
  setSelectedCourse: (selectedCourse: CourseDto) => {
    set({ selectedCourse });
  },
}));

export default useClassStore;
