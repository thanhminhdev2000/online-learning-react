import { ReactNode } from 'react';

export interface IOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

export interface CModalProps {
  open: boolean;
  onSubmit?: () => void;
  onClose: () => void;
  children?: ReactNode;
  content?: string;
  refetch?: () => void;
}

export type IPlainObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
