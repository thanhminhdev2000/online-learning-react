import { REQUIRED } from '@common/message';
import { IPlainObject } from '@common/type';

export const errorMsg = (fieldName: string, message: string = REQUIRED) => {
  return { message: `${fieldName} ${message}` };
};

export const cleanObject = (obj: IPlainObject) => {
  const cleanedObj: IPlainObject = {};

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== '' && obj[key] !== '*') {
      cleanedObj[key] = obj[key];
    }
  });

  return cleanedObj;
};
