import { ReactNode } from 'react';

export interface IOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
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
