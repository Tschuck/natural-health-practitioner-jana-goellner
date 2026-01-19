import { BaseComponentProps } from '@/general/types/component-props.type';
import { classNames } from '@/general/utils/utils';
import { HTMLInputTypeAttribute } from 'react';
import { FieldValues, get as reactHookGet, Path, UseFormReturn } from 'react-hook-form';

export interface InputProps<T extends FieldValues> extends BaseComponentProps {
  formRef: UseFormReturn<T, unknown, T>;
  id?: string;
  name: Path<T>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  element?: 'input' | 'textarea';
  rows?: number;
}

export interface InputWithLabelProps<T extends FieldValues> extends InputProps<T> {
  label: string;
}

const inputClassNames = `
block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900
placeholder:text-gray-400
shadow-sm
transition-all duration-150

focus:hjg-dark-green
focus:ring-2 hjg-dark-green
focus:outline-none

disabled:bg-gray-100 disabled:text-gray-500
`;

export interface InputErrors<T extends FieldValues> extends BaseComponentProps {
  formRef: UseFormReturn<T, unknown, T>;
  name: Path<T>;
}

export function InputErrors<T extends FieldValues>({ formRef, name }: InputErrors<T>) {
  const error = reactHookGet(formRef.formState.errors, name as string) as Error;

  return <>{error && <span className="text-xs text-red-400 block">{error?.message?.toString()}</span>}</>;
}

export function Input<T extends FieldValues>(inputProps: InputProps<T>) {
  const { className, element = 'input', formRef, id, name, placeholder, type, rows } = inputProps;

  const inputAttributes = {
    type: type ?? 'text',
    placeholder,
    ...(name ? { name } : {}),
    ...(id ? { id } : {}),
  };

  const registeredInput = formRef.register(name, {
    valueAsNumber: type === 'number' || type === 'integer',
  });

  switch (element) {
    case 'input': {
      return <input {...registeredInput} {...inputAttributes} className={classNames(inputClassNames, className)} />;
    }
    case 'textarea': {
      return (
        <textarea
          {...registeredInput}
          {...inputAttributes}
          className={classNames(inputClassNames, className)}
          rows={rows}
        />
      );
    }
  }
}

export function InputWithLabel<T extends FieldValues>(inputProps: InputWithLabelProps<T>) {
  const { label, id, name, formRef } = inputProps;

  const htmlFor = id ?? name;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>

      <Input {...inputProps} />

      <InputErrors formRef={formRef} name={name} />
    </div>
  );
}
