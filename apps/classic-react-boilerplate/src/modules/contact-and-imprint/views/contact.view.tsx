import { InputWithLabel } from '@//components/input.component';
import { useForm } from 'react-hook-form';

import { ContactSchema } from '@//modules/contact-and-imprint/schemas/contact.dto';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Trans } from '@lingui/react/macro';

const contactResolver = classValidatorResolver(ContactSchema);

export function ContactView() {
  const formRef = useForm({
    values: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    resolver: contactResolver,
  });

  const onSubmit = formRef.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <div className="flex p-8 bg-hjg-light-green">
        <form
          onSubmit={(e) => void onSubmit(e)}
          className="w-full max-w-xl space-y-5 rounded-2xl p-6 shadow-md bg-hjg-whitesmoke"
        >
          <h2 className="text-2xl font-semibold text-hjg-dark">
            <Trans>Kontaktformular</Trans>
          </h2>

          <InputWithLabel formRef={formRef} name="name" label="Name *" placeholder="Ihr Name" />

          <InputWithLabel formRef={formRef} name="email" type="email" label="E-Mail *" placeholder="name@email.de" />

          <InputWithLabel formRef={formRef} name="phone" type="tel" label="Telefon *" placeholder="+49 123 456789" />

          <InputWithLabel
            formRef={formRef}
            name="message"
            element="textarea"
            label="Nachricht *"
            placeholder="Meine persoenliche Nachricht"
          />

          <button
            type="submit"
            className="
          w-full rounded-lg bg-hjg-dark-green px-4 py-2.5 text-sm font-medium text-white
          hover:bg-primary-hover
          transition
        "
          >
            Absenden
          </button>
        </form>
      </div>
    </>
  );
}
