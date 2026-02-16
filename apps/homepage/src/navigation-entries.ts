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
  imprint: { path: '/imprint', name: 'Impressum', hiddenInNav: true },
  dataSecurity: { path: '/data-security', name: 'Datenschutz', hiddenInNav: true },
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
