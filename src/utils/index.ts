import { REQUIRED } from "@common/message";

export const errorMsg = (fieldName: string, message: string = REQUIRED) => {
  return { message: `${fieldName} ${message}` };
};
