import { REQUIRED } from '@common/message';
import { IPlainObject } from '@common/type';

export const errorMsg = (fieldName: string, message: string = REQUIRED) => {
  return { message: `${fieldName} ${message}` };
};

export const cleanObject = (obj: IPlainObject) => {
  const cleanedObj: IPlainObject = {};

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== '' && obj[key] !== undefined && obj[key] !== null && obj[key] !== '*') {
      cleanedObj[key] = obj[key];
    }
  });

  return cleanedObj;
};

export const convertSecondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export const convertSecondsToHours = (seconds: number): number => {
  const hours = seconds / 3600;
  const roundedHours = Math.ceil(hours * 2) / 2;
  return roundedHours;
};
