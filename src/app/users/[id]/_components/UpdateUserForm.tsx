'use client';

import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast/headless';

import { UserSchemaFieldValues } from '@/schemas/user';
import { useUpdateUserMutation } from '@/store/apis/user';
import { User } from '@/types/user';

import UserForm from '../../_components/UserForm';

interface UpdateUserFormProps {
  item: User;
}

export default function UpdateUserForm({ item }: UpdateUserFormProps) {
  const [updateUser, { isLoading, isSuccess, isError, data, error }] = useUpdateUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Usuario actualizado');
    }

    if (isError) {
      toast.error((error as any).data.message || 'Algo salió mal!');
    }
  }, [isSuccess, isError, data, error]);

  const onSubmit: SubmitHandler<UserSchemaFieldValues> = (fieldValues) => {
    updateUser(fieldValues);
  };

  return (
    <UserForm defaultValues={item} isLoading={isLoading} isSuccess={isSuccess} isError={isError} onSubmit={onSubmit} />
  );
}
