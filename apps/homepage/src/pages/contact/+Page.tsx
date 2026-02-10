import ContactFormular from '@/pages/contact/components/contact-formular.component';

import ContactImage from '@/assets/contact.jpg';
import { PageWrapper } from '@/components/page-wrapper';
import { TwoColumns } from '@/components/two-columns.component';

export default function ContactView() {
  return (
    <PageWrapper space="wide">
      <TwoColumns
        left={
          <div className="flex items-center justify-center h-full">
            <ContactFormular />
          </div>
        }
        right={
          <>
            <div
              className="w-full bg-center bg-cover rounded-t-full max-h-164 max-w-128"
              style={{ height: '80vh', backgroundImage: `url("${ContactImage}")` }}
            />
          </>
        }
      />
      <div className="flex items-center justify-center flex-col"></div>
    </PageWrapper>
  );
}
