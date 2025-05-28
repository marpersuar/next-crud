import { forwardRef } from 'react';

interface ToggleProps {
  id: string;
  name?: string;
  labelText?: string;
  className?: string;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Toggle = forwardRef(({ labelText, ...props }: ToggleProps, ref: React.ForwardedRef<HTMLInputElement>) => (
  <label className="label">
    <span className="label-text cursor-pointer">{labelText}</span>
    <input type="checkbox" {...props} ref={ref} />
  </label>
));

Toggle.displayName = 'Toggle';

export default Toggle;
