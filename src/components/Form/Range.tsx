import { forwardRef } from 'react';

interface RangeProps {
  id: string;
  name?: string;
  labelText?: string;
  className?: string;
  max?: number;
  min?: number;
  step?: number;
  defaultValue?: string | number;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Range = forwardRef(({ labelText, error, ...props }: RangeProps, ref: React.ForwardedRef<HTMLInputElement>) => (
  <>
    {labelText && (
      <label htmlFor={props.id} className="label">
        <span className="label-text cursor-pointer">{labelText}</span>
      </label>
    )}
    <input type="range" {...props} ref={ref} />
    {error && <p className="text-error">{error}</p>}
  </>
));

Range.displayName = 'Range';

export default Range;
