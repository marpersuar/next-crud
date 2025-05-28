'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Checkbox from '@/components/Form/Checkbox';
import Date from '@/components/Form/Date';
import Password from '@/components/Form/Password';
import Radio from '@/components/Form/Radio';
import TextInput from '@/components/Form/TextInput';
import { UserSchemaFieldValues, userSchema } from '@/schemas/user';
import { User, UserGender } from '@/types/user';

interface UserFormProps {
  defaultValues?: User;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  onSubmit: SubmitHandler<UserSchemaFieldValues>;
}

export default function UserForm({ defaultValues, isLoading, isError, onSubmit }: UserFormProps) {
  const { control, handleSubmit } = useForm<UserSchemaFieldValues>({
    defaultValues,
    resolver: zodResolver(userSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <div className="grid grid-cols-2 gap-6">
        <div className="form-control w-full">
          <Controller
            control={control}
            name="givenName"
            render={({ field, fieldState: { error } }) => (
              <TextInput
                {...field}
                id="givenName"
                labelText="Nombre"
                className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
                pattern="^[a-zA-ZÀ-ÿñÑ]+([\s][a-zA-ZÀ-ÿñÑ]+)*$"
                minLength={2}
                maxLength={64}
                required
                error={error?.message}
              />
            )}
          />
        </div>
        <div className="form-control w-full">
          <Controller
            control={control}
            name="familyName"
            render={({ field, fieldState: { error } }) => (
              <TextInput
                {...field}
                id="familyName"
                labelText="Apellidos"
                className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
                pattern="^[a-zA-ZÀ-ÿñÑ]+([\s][a-zA-ZÀ-ÿñÑ]+)*$"
                minLength={2}
                maxLength={64}
                required
                error={error?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="form-control w-full">
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              id="email"
              labelText="Correo electrónico"
              className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              minLength={10}
              maxLength={128}
              required
              error={error?.message}
            />
          )}
        />
      </div>
      <div className="form-control w-full">
        <Controller
          control={control}
          name="emailVerified"
          render={({ field, fieldState: { error } }) => (
            <Checkbox
              {...field}
              id="emailVerified"
              labelText="Marcar el correo electrónico como verificado"
              className={`checkbox ${error ? 'input-error' : ''}`}
              defaultChecked={defaultValues?.emailVerified}
              error={error?.message}
            />
          )}
        />
      </div>
      <div className="form-control w-full">
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              id="phoneNumber"
              labelText="Número de teléfono"
              className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
              pattern="^\+[1-9][0-9]{0,24}$"
              minLength={9}
              maxLength={24}
              required
              error={error?.message}
            />
          )}
        />
      </div>
      <div className="form-control w-full">
        <Controller
          control={control}
          name="gender"
          render={({ field, fieldState: { error } }) => (
            <Radio
              {...field}
              id="gender"
              labelText="Género"
              className={`radio ${error ? 'input-error' : ''}`}
              options={[
                {
                  value: UserGender.MALE,
                  label: 'Masculino',
                },
                {
                  value: UserGender.FEMALE,
                  label: 'Femenino',
                },
              ]}
              defaultValue={defaultValues?.gender}
              error={error?.message}
            />
          )}
        />
      </div>
      <div className="form-control w-full">
        <Controller
          control={control}
          name="birthDate"
          render={({ field, fieldState: { error } }) => (
            <Date
              {...field}
              id="birthDate"
              labelText="Fecha de nacimiento"
              className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
              required
              error={error?.message}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="form-control w-full">
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <Password
                {...field}
                id="password"
                labelText="Contraseña"
                className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
                pattern="^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\\w]).{8,}$"
                minLength={8}
                maxLength={32}
                autoComplete="new-password"
                error={error?.message}
              />
            )}
          />
        </div>
        <div className="form-control w-full">
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field, fieldState: { error } }) => (
              <Password
                {...field}
                id="confirmPassword"
                labelText="Confirmar contraseña"
                className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
                minLength={8}
                maxLength={32}
                autoComplete="new-password"
                error={error?.message}
              />
            )}
          />
        </div>
      </div>
      {isError && <p className="text-error mt-6">Algo salió mal!</p>}
      <div className="mt-6 flex-wrap items-center justify-center">
        <div className="form-control w-full">
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading && <span className="loading loading-spinner" />} Salvar
          </button>
        </div>
      </div>
    </form>
  );
}
