import { Input, InputWithLabel } from '@//components/input.component';
import { useForm } from 'react-hook-form';

import { useContactMutation } from '@/pages/contact/queries/post-contact.query';
import { ContactSchema } from '@/pages/contact/schemas/contact.dto';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Trans } from '@lingui/react/macro';
import { toast } from 'sonner';
import { Button, ButtonType } from '@/components/button.component';
import { Link } from '@/components/link';
import { links } from '@/navigation-entries';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { TextContent } from '@/components/text.component';
import { Header } from '@/components/header.component';

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

    toast.success('Kontaktinformationen wurden erfolgreich abgeschickt.', {});
    formRef.reset();
  });

  return (
    <>
      <form onSubmit={(e) => void onSubmit(e)} className="w-full space-y-5">
        <Header type="h4">Kontaktformular</Header>

        <TextContent className="text-xs">
          Nutzen Sie gerne das Kontaktformular, um mir eine persönliche Nachricht zukommen zu lassen. Gerne können Sie
          mich aber auch anrufen oder mir direkt eine E-Mail schreiben.
        </TextContent>

        <InputWithLabel formRef={formRef} name="name" label="Name *" />

        <InputWithLabel formRef={formRef} name="email" type="email" label="E-Mail *" />

        <InputWithLabel formRef={formRef} name="phone" type="tel" label="Telefon *" />

        <InputWithLabel formRef={formRef} name="message" element="textarea" label="Nachricht *" />

        <div className="flex items-center gap-2">
          <div className="p-2">
            <Input className="w-8" type="checkbox" name="consent" formRef={formRef} />
          </div>
          <div className="text-xs italic">
            <p>
              <Trans>Beim absenden dieses Formulars bestätigen Sie die Datenschutzbestimmungen.</Trans>
            </p>

            <Link href={links.dataSecurity.path} openInNewTab={true} className=" text-xs italic flex mt-2 items-center">
              <Trans>Mehr erfahren</Trans>
              <ArrowRightIcon className="ml-1 w-3" />
            </Link>
          </div>
        </div>

        <Button type={ButtonType.ACTION} disabled={isPending} isLoading={isPending}>
          <Trans>Senden</Trans>
        </Button>
      </form>
    </>
  );
}
