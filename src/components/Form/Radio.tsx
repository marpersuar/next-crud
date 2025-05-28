import React, { forwardRef } from 'react';

interface RadioProps {
  id: string;
  name?: string;
  labelText?: string;
  className?: string;
  options: { value: string | number; label: string }[];
  defaultValue?: string | number;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Radio = forwardRef(
  (
    { id, labelText, options, defaultValue, error, ...props }: RadioProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => (
    <>
      {labelText && (
        <label className="label">
          <span className="label-text cursor-pointer">{labelText}</span>
        </label>
      )}
      <div className="flex justify-start gap-2">
        {options.map((option, i) => (
          <label key={i} className="label flex gap-2">
            <input
              type="radio"
              value={option.value}
              defaultChecked={option.value === defaultValue}
              {...props}
              ref={ref}
            />
            <span className="label-text cursor-pointer">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-error">{error}</p>}
    </>
  ),
);

Radio.displayName = 'Radio';

export default Radio;
