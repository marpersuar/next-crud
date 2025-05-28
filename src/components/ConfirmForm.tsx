'use client';

import { Controller, useForm } from 'react-hook-form';

import TextInput from '@/components/Form/TextInput';

interface ConfirmFormProps {
  keywords: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  onSubmit: (values: any) => void;
  onCancel?: () => void;
}

export default function ConfirmForm({ keywords, isLoading, onSubmit, onCancel }: ConfirmFormProps) {
  const { control, handleSubmit } = useForm<Pick<ConfirmFormProps, 'keywords'>>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <Controller
        control={control}
        name="keywords"
        defaultValue=""
        rules={{ validate: (value) => value === keywords || 'Confirmación incorrecta' }}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            {...field}
            id="keywords"
            className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
            placeholder="Confirmar la eliminación"
            required
            error={error?.message}
          />
        )}
      />
      <div className="flex justify-end gap-2 pt-6">
        <button type="button" className="btn btn-ghost" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="btn btn-error">
          {isLoading && <span className="loading loading-spinner" />} Eliminar
        </button>
      </div>
    </form>
  );
}
