import { forwardRef } from 'react';

interface DateProps {
  id: string;
  name?: string;
  labelText?: string;
  className?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string | number;
  value?: string | number;
  required?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Date = forwardRef(({ labelText, error, ...props }: DateProps, ref: React.ForwardedRef<HTMLInputElement>) => (
  <>
    {labelText && (
      <label htmlFor={props.id} className="label">
        <span className="label-text cursor-pointer">{labelText}</span>
      </label>
    )}
    <input type="date" {...props} ref={ref} />
    {error && <p className="text-error">{error}</p>}
  </>
));

Date.displayName = 'Date';

export default Date;
