export const links = {
  startPage: { path: '/', name: 'Startseite' },
  aboutMe: { path: '/about-me', name: 'Über mich' },
  treatments: { path: '/treatments', name: 'Behandungen' },
  hormoneBalance: { path: '/treatments/hormone-balance', name: 'Hormonbalance' },
  psychosomatics: { path: '/treatments/psychosomatics', name: 'Psychosomatik' },
  acupuncture: { path: '/treatments/acupuncture', name: 'Akupunktur' },
  downloads: { path: '/downloads', name: 'Downloads' },
  faq: { path: '/faq', name: 'FAQ' },
  contact: { path: '/contact', name: 'Kontakt' },
  imprint: { path: '/imprint', name: 'Impressum' },
  dataSecurity: { path: '/data-security', name: 'Datenschutz' },
};

export const navigationEntries = [
  links.startPage,
  links.aboutMe,
  links.treatments,
  links.downloads,
  links.faq,
  links.contact,
];
