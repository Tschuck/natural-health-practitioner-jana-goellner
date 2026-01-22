import { Button, ButtonType } from '@//components/button.component';
import { useState } from 'react';
import { Trans } from '@lingui/react/macro';

export function CookieDisclaimer() {
  // TODO: fix session storage
  // const [wasRead, setWasRead] = useState(sessionStorage.getItem('cookies-accepted') === 'true');
  const [wasRead] = useState(true);

  // function markAsRead() {
  //   setWasRead(true);
  //   sessionStorage.setItem('cookies-accepted', 'true');
  // }

  return (
    <div>
      {!wasRead && (
        <div className="fixed z-20">
          <div className="fixed p-3 text-justify text-white shadow-xl left-0 right-0 md:left-[20%] md:right-[20%] z-50 bg-hjg-light-green bottom-4">
            <small className="text-xs">
              <Trans id="data-security.cookie-disclaimer">
                Diese Website verwendet Cookies. Es werden nur technisch notwendige Cookies in Ihrem Browser
                gespeichert, da sie für das Funktionieren grundlegender Funktionalitäten der Website unerlässlich sind.
              </Trans>
            </small>

            <div className="flex justify-end gap-4 px-8 pt-2 text-xs">
              <Button
                className="text-white button primary hover:text-primary"
                link={`/data-security`}
                type={ButtonType.BORDER_GRAY}
              >
                <Trans>Mehr lesen</Trans>
              </Button>

              <Button onClick={markAsRead} type={ButtonType.SECONDARY}>
                <Trans>Ok</Trans>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
