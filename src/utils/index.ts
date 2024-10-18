export const errorMsg = (fieldName: string, message: string = 'là trường bắt buộc') => {
  return { message: `${fieldName} ${message}` };
};
