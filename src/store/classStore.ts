import { ClassDto, CourseDto, DocumentDto, LessonDto } from 'api-swagger/data-contracts';
import { create } from 'zustand';

interface ClassState {
  classId: number;
  subjectId: number;
  classes: ClassDto[];
  selectedDocument: DocumentDto;
  selectedCourse: CourseDto;
  selectedLesson: LessonDto;
  setClassId: (classId: number) => void;
  setSubjectId: (subjectId: number) => void;
  setClasses: (classes: ClassDto[]) => void;
  setSelectedDocument: (selectedDocument: DocumentDto) => void;
  setSelectedCourse: (selectedCourse: CourseDto) => void;
  setSelectedLesson: (selectedLesson: LessonDto) => void;
}

const useClassStore = create<ClassState>((set) => ({
  classId: 0,
  subjectId: 0,
  classes: [],
  selectedDocument: {} as DocumentDto,
  selectedCourse: {} as CourseDto,
  selectedLesson: {} as LessonDto,
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
  setSelectedLesson: (selectedLesson: LessonDto) => {
    set({ selectedLesson });
  },
}));

export default useClassStore;
