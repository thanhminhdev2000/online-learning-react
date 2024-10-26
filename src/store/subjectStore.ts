import { create } from 'zustand';

interface SubjectState {
  classId: number;
  subjectId: number;
  setClassId: (classId: number) => void;
  setSubjectId: (subjectId: number) => void;
}

const useSubjectStore = create<SubjectState>((set) => ({
  classId: 0,
  subjectId: 0,
  setClassId: (classId: number) => {
    set({ classId });
  },
  setSubjectId: (subjectId: number) => {
    set({ subjectId });
  },
}));

export default useSubjectStore;
