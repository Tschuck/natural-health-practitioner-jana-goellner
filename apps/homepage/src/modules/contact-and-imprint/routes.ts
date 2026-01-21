import { ContactView } from '@//modules/contact-and-imprint/views/contact.view';
import { DataSecurityView } from '@//modules/contact-and-imprint/views/data-security.view';
import { msg } from '@lingui/core/macro';

export const contactAndImprintRoutes = [
  {
    path: '/contact',
    Component: ContactView,
    handle: { name: msg`Kontakt`.message, hide: false },
  },
  {
    path: '/data-security',
    Component: DataSecurityView,
    handle: { name: msg`Datensicherheit`.message, hide: false },
  },
];
