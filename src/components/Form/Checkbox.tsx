import { forwardRef } from 'react';

interface CheckboxProps {
  id: string;
  name?: string;
  labelText?: string;
  className?: string;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Checkbox = forwardRef(({ labelText, ...props }: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => (
  <label className="label flex justify-start gap-2">
    <input type="checkbox" {...props} ref={ref} />
    <span className="label-text cursor-pointer">{labelText}</span>
  </label>
));

Checkbox.displayName = 'Checkbox';

export default Checkbox;
