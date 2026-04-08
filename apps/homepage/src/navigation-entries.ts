export const links = {
  startPage: { path: '/', name: 'Startseite' },
  aboutMe: { path: '/ueber-mich', name: 'Über mich' },
  treatments: { path: '/behandlungen', name: 'Behandlungen' },
  hormoneBalance: { path: '/behandlungen/hormon-balance', name: 'Hormonbalance' },
  psychosomatics: { path: '/behandlungen/psychosomatik', name: 'Psychosomatik' },
  acupuncture: { path: '/behandlungen/akupunktur', name: 'Akupunktur' },
  downloads: { path: '/downloads', name: 'Downloads' },
  faq: { path: '/faq', name: 'FAQ' },
  contact: { path: '/contact', name: 'Kontakt' },
  imprint: { path: '/impressum', name: 'Impressum', hiddenInNav: true },
  dataSecurity: { path: '/datenschutz', name: 'Datenschutz', hiddenInNav: true },
};

export const navigationEntries: { path: string; name: string; hiddenInNav?: boolean }[] = [
  links.startPage,
  links.treatments,
  links.aboutMe,
  links.downloads,
  links.faq,
  links.contact,
  links.imprint,
  links.dataSecurity,
];
