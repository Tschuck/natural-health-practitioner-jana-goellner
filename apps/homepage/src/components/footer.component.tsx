import MainLogo from '@/assets/main-logo.svg';
import { Link } from '@/components/link';
import config from '@/config/config';
import { links } from '@/navigation-entries';
import { Trans } from '@lingui/react/macro';

export function Footer() {
  return (
    <div className="pt-12 pb-20 lg:pb-14 flex flex-col justify-center items-center gap-4 text-hjg-dark-green shadow-2xl">
      <img src={MainLogo} className="h-14" />

      <p className="text-xs">
        <Trans>Kasseler Straße 31, 99817 Eisenach</Trans>
      </p>
      <a className="text-xs" href={`tel:${config.phoneNumber}`}>
        <Trans>{config.phoneNumber}</Trans>
      </a>

      <div className="flex gap-8">
        <Link href={links.contact.path}>
          <Trans>{links.contact.name}</Trans>
        </Link>
        <Link href={links.imprint.path}>
          <Trans>{links.imprint.name}</Trans>
        </Link>
        <Link href={links.dataSecurity.path}>
          <Trans>{links.dataSecurity.name}</Trans>
        </Link>
      </div>
    </div>
  );
}
