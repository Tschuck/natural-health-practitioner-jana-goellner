import { Input, InputWithLabel } from '@//components/input.component';
import { useForm } from 'react-hook-form';

import { useContactMutation } from '@/pages/contact/queries/post-contact.query';
import { ContactSchema } from '@/pages/contact/schemas/contact.dto';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { msg } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { toast } from 'sonner';
import { Button, ButtonType } from '@/components/button.component';
import { Link } from '@/components/link';
import { links } from '@/navigation-entries';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const contactResolver = classValidatorResolver(ContactSchema);

export default function ContactFormular() {
  const { mutateAsync: requestContact, isPending } = useContactMutation();

  const formRef = useForm({
    values: {
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    },
    resolver: contactResolver,
  });

  const onSubmit = formRef.handleSubmit(async (data) => {
    await requestContact(data);

    toast.success(msg`Kontaktinformationen wurden erfolgreich abgeschickt.`.message, {});
  });

  return (
    <>
      <form onSubmit={(e) => void onSubmit(e)} className="w-full max-w-xl space-y-5 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-hjg-dark">
          <Trans>Kontaktformular</Trans>
        </h2>

        <InputWithLabel formRef={formRef} name="name" label="Name *" />

        <InputWithLabel formRef={formRef} name="email" type="email" label="E-Mail *" />

        <InputWithLabel formRef={formRef} name="phone" type="tel" label="Telefon *" />

        <InputWithLabel formRef={formRef} name="message" element="textarea" label="Nachricht *" />

        <div className="flex items-center gap-2">
          <div className="p-2">
            <Input className="w-8" type="checkbox" name="consent" formRef={formRef} />
          </div>
          <p className="text-hjg-dark-green text-xs italic">
            <p>
              <Trans>Beim absenden dieses Formulars bestaetigen Sie die Datenschutzbestimmungen.</Trans>
            </p>

            <Link href={links.dataSecurity.path} className="text-hjg-dark-green text-xs italic flex mt-2 items-center">
              <Trans>Mehr erfahren</Trans>
              <ArrowRightIcon className="ml-1 w-3" />
            </Link>
          </p>
        </div>

        <Button type={ButtonType.ACTION} disabled={isPending} isLoading={isPending}>
          <Trans>Senden</Trans>
        </Button>
      </form>
    </>
  );
}
