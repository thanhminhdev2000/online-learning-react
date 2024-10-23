import { ReactNode } from 'react';

export interface IOptions {
  key: string;
  value: string;
}

export interface CModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export type IPlainObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
