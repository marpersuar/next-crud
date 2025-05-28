import { forwardRef } from 'react';

interface TextInputProps {
  id: string;
  name?: string;
  labelText?: string;
  className?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string | number;
  value?: string | number;
  readOnly?: boolean;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  required?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const TextInput = forwardRef(
  ({ labelText, error, ...props }: TextInputProps, ref: React.ForwardedRef<HTMLInputElement>) => (
    <>
      {labelText && (
        <label htmlFor={props.id} className="label">
          <span className="label-text cursor-pointer">{labelText}</span>
        </label>
      )}
      <input type="text" {...props} ref={ref} />
      {error && <p className="text-error">{error}</p>}
    </>
  ),
);

TextInput.displayName = 'TextInput';

export default TextInput;
