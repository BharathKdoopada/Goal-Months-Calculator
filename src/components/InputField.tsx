import { memo } from 'react';

export interface InputFieldProps {
  id: string;
  label: string;
  hint?: string;
  prefix?: string;
  defaultValue: number;
  min: number;
  step: number;
  onChange: (value: number) => void;
}

export const InputField = memo(function InputField({
  id,
  label,
  hint,
  prefix,
  defaultValue,
  min,
  step,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>

      {hint && (
        <span id={`${id}-hint`} className="text-[13px] text-muted leading-snug">
          {hint}
        </span>
      )}

      <div className="relative mt-1">
        {prefix && (
          <span
            className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-[16px] text-muted pointer-events-none"
            aria-hidden="true"
          >
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          defaultValue={defaultValue}
          min={min}
          step={step}
          aria-describedby={hint ? `${id}-hint` : undefined}
          onChange={(e) => onChange(Number(e.target.value))}
          className={[
            'w-full border border-border rounded-xl py-3 pr-4',
            'font-semibold text-lg text-ink bg-white',
            'transition-all duration-200 shadow-sm',
            'hover:border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none',
            prefix ? 'pl-11' : 'pl-4',
          ].join(' ')}
        />
      </div>
    </div>
  );
});
