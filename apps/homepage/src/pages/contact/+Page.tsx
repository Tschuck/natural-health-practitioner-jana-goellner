import ContactFormular from '@/pages/contact/components/contact-formular.component';

import ContactImage from '@/assets/contact.jpg';
import { PageWrapper } from '@/components/page-wrapper';

export default function ContactView() {
  return (
    <PageWrapper className="overflow-hidden lg:grid grid-cols-2 p-8 lg:p-16 gap-16">
      <div>
        <ContactFormular />
      </div>
      <div className="flex items-center justify-center flex-col">
        {' '}
        <div
          className="w-full bg-center bg-cover rounded-t-full max-h-164 max-w-128"
          style={{ height: '80vh', backgroundImage: `url("${ContactImage}")` }}
        />
      </div>
    </PageWrapper>
  );
}
