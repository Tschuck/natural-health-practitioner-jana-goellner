import { BaseComponentProps } from '@/types/component-props.type';
import { classNames } from '@/utils/utils';
import { Trans } from '@lingui/react/macro';

export interface LisComponentProps extends BaseComponentProps {
  entries: string[];
}

export function List({ className, entries }: LisComponentProps) {
  return (
    <ul className={classNames(className, 'ml-4 list-disc')}>
      {entries.map((entry) => (
        <li key={entry}>
          <Trans>{entry}</Trans>
        </li>
      ))}
    </ul>
  );
}
