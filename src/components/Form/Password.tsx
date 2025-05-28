import { forwardRef } from 'react';

interface PasswordProps {
  id: string;
  name?: string;
  labelText?: string;
  className?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string | number;
  value?: string | number;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  required?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Password = forwardRef(
  ({ labelText, error, ...props }: PasswordProps, ref: React.ForwardedRef<HTMLInputElement>) => (
    <>
      {labelText && (
        <label htmlFor={props.id} className="label">
          <span className="label-text cursor-pointer">{labelText}</span>
        </label>
      )}
      <input type="password" {...props} ref={ref} />
      {error && <p className="text-error">{error}</p>}
    </>
  ),
);

Password.displayName = 'Password';

export default Password;
