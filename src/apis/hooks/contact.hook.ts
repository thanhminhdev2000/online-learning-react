import { Contact } from '@apis/generated/Contact';
import { ContactCreateDataDto, ContactCreateErrorDto, ContactDto } from '@apis/generated/data-contracts';
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
