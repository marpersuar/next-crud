'use client';

import { User } from '@/types/user';

import UserTableItem from './UserTableItem';

interface UserTableProps {
  items: User[];
}

export default function UserTable({ items }: UserTableProps) {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Género</th>
          <th>Correo electrónico</th>
          <th>Estado</th>
          <th>Creado</th>
          <th>Última actualización</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item, i) => <UserTableItem key={i} item={item} />)
        ) : (
          <tr>
            <td colSpan={7}>
              <span className="flex flex-col text-center">No hay más</span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
