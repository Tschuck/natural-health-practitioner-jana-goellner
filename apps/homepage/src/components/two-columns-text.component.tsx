import { ReactNode } from 'react';

export interface TwoColumnsTextProps {
  left: ReactNode;
  right: ReactNode;
}

export function TwoColumnsText({ left, right }: TwoColumnsTextProps) {
  return (
    <section className="lg:grid grid-cols-2 gap-4 lg:gap-16">
      <div className="flex flex-col gap-8">{left}</div>
      <div className="flex flex-col gap-8">{right}</div>
    </section>
  );
}
