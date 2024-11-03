import { Contact } from '@api-swagger/Contact';
import { ContactCreateDataDto, ContactCreateErrorDto, ContactDto } from '@api-swagger/data-contracts';
import httpClient from '@config/httpClient';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const contactApi = new Contact(httpClient);

export const useContact = (): UseMutationResult<ContactCreateDataDto, ContactCreateErrorDto, ContactDto, unknown> => {
  return useMutation({
    mutationFn: (payload: ContactDto) => {
      return contactApi.contactCreate(payload);
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(data) {
      toast.error(data.error);
    },
  });
};
