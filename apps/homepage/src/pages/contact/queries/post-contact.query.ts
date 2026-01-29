import config from '@/config/config';
import { ContactSchema } from '@/pages/contact/schemas/contact.dto';
import { msg } from '@lingui/core/macro';
import { useMutation } from '@tanstack/react-query';
import axios, { HttpStatusCode } from 'axios';
import { toast } from 'sonner';

export function useContactMutation() {
  return useMutation({
    mutationKey: ['todos'],
    mutationFn: async (contact: ContactSchema) => {
      try {
        const result = await axios.post(`${config.backendUrl}/contact`, contact, {
          headers: { 'Content-Type': 'application/json' },
          timeout: 5000, // optional
        });

        if (result.status !== (HttpStatusCode.Created as number)) {
          throw new Error(`Unknown status code: ${result.status}`);
        }

        return result;
      } catch (ex) {
        console.log(config.email);
        toast.error(
          msg`Es gab einen Fehler beim absenden des Formulars. Bitte versuchen Sie es erneut, oder wenden Sie sich direkt per E-Mail an mich: `
            .message + config.email
        );

        console.error(ex);
        throw ex;
      }
    },
  });
}
