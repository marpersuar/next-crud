import { forwardRef } from 'react';

interface SelectProps {
  id: string;
  name?: string;
  labelText?: string;
  className?: string;
  options: { value: string | number; label: string }[];
  defaultValue?: string | number;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  error?: string;
}

const Select = forwardRef(
  ({ labelText, options, error, ...props }: SelectProps, ref: React.ForwardedRef<HTMLSelectElement>) => (
    <>
      {labelText && (
        <label htmlFor={props.id} className="label">
          <span className="label-text cursor-pointer">{labelText}</span>
        </label>
      )}
      <select {...props} ref={ref}>
        {[{ value: '', label: 'Seleccionar' }, ...options].map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-error">{error}</p>}
    </>
  ),
);

Select.displayName = 'Select';

export default Select;
