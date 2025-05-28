import { forwardRef } from 'react';

interface TextAreaProps {
  id: string;
  name?: string;
  labelText?: string;
  className?: string;
  rows?: number;
  cols?: number;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string | number;
  value?: string | number;
  required?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  error?: string;
}

const TextArea = forwardRef(
  ({ labelText, error, ...props }: TextAreaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => (
    <>
      {labelText && (
        <label htmlFor={props.id} className="label">
          <span className="label-text cursor-pointer">{labelText}</span>
        </label>
      )}
      <textarea {...props} ref={ref} />
      {error && <p className="text-error">{error}</p>}
    </>
  ),
);

TextArea.displayName = 'TextArea';

export default TextArea;
