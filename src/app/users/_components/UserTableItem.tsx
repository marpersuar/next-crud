'use client';

import Link from 'next/link';

import { formatDate } from '@/helpers/date';
import { User } from '@/types/user';

import DeleteUserModal from './DeleteUserModal';

interface UserTableItemProps {
  item: User;
}

export default function UserTableItem({ item }: UserTableItemProps) {
  return (
    <tr>
      <td>
        <Link href={`/users/${item.id}`} className="link">
          {item.givenName} {item.familyName}
        </Link>
      </td>
      <td>
        {
          {
            MALE: 'masculino',
            FEMALE: 'femenino',
          }[item.gender]
        }
      </td>
      <td>{item.email}</td>
      <td>
        {
          {
            VERIFIED: <div className="badge badge-success">verificado</div>,
            NOT_VERIFIED: <div className="badge badge-warning">no verificado</div>,
          }[item.status]
        }
      </td>
      <td>{item.createdAt ? formatDate(item.createdAt) : 'ninguna'}</td>
      <td>{item.updatedAt ? formatDate(item.updatedAt) : 'ninguna'}</td>
      <td className="flex align-items justify-end">
        <DeleteUserModal item={item} />
      </td>
    </tr>
  );
}
