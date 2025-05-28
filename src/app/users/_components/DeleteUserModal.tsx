'use client';

import TrashIcon from '@heroicons/react/24/outline/TrashIcon';

import ConfirmForm from '@/components/ConfirmForm';
import Modal from '@/components/Modal';
import useModal from '@/hooks/useModal';
import { useDeleteUserMutation } from '@/store/apis/user';
import { User } from '@/types/user';

interface DeleteUserModalProps {
  item: User;
}

export default function DeleteUserModal({ item }: DeleteUserModalProps) {
  const [isShowingModal, toggleModal] = useModal();

  const [deleteUser, { isLoading, isSuccess, isError }] = useDeleteUserMutation();

  const onSubmit = () => {
    deleteUser(item.id);
  };

  return (
    <>
      <button type="button" className="btn btn-square btn-ghost" onClick={toggleModal}>
        <TrashIcon className="h-6 w-6 text-error" />
      </button>
      <Modal isShowing={isShowingModal} toggle={toggleModal}>
        <h3 className="font-semibold text-2xl pb-6 text-left">Eliminar usuario</h3>
        <p className="py-4">
          Está a punto de eliminar a {`${item.givenName} ${item.familyName}`}. Para confirmar la eliminación, digite{' '}
          <b>eliminar de forma permanente</b> en la caja de texto.
        </p>
        <ConfirmForm
          keywords="eliminar de forma permanente"
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          onSubmit={onSubmit}
          onCancel={toggleModal}
        />
      </Modal>
    </>
  );
}
