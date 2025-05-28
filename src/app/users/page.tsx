import { withSSRContext } from 'aws-amplify';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

import Pagination from '@/components/Pagination';
import { MAX_PAGINATION_LIMIT } from '@/constants/pagination';
import { Criteria } from '@/types/criteria';
import { Pagination as Paging } from '@/types/pagination';
import { User } from '@/types/user';

import UserTable from './_components/UserTable';

export const metadata: Metadata = {
  title: 'CRUD en Nextjs | Usuarios',
};

async function searchUsers({ page, limit }: Partial<Criteria>): Promise<Paging<User>> {
  const req = {
    headers: {
      cookie: headers().get('cookie'),
    },
  };

  const { Auth } = withSSRContext({ req });

  const res = await fetch(`${process.env.NEXT_PUBLIC_APIGATEWAY_REST_API_URL}/users?page=${page}&limit=${limit}`, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
    },
  });

  return res.json();
}

export default async function UsersPage({ searchParams }: { searchParams?: Partial<Criteria> }) {
  const page = Number(searchParams?.page) || 1;

  const limit = Number(searchParams?.limit) || MAX_PAGINATION_LIMIT;

  const results = await searchUsers({ page, limit });

  return (
    <>
      <div className="grid grid-cols-1 mb-6">
        <div className="text-left">
          <h1 className="text-2xl">Usuarios</h1>
        </div>
      </div>
      <div className="card w-full p-6 bg-base-100 shadow-xl">
        <div className="text-xl">Total ({results.totalItems})</div>
        <div className="divider" />
        <div className="overflow-x-auto w-full">
          <UserTable items={results.items} />
        </div>
        <div className="flex justify-end mt-6">
          <Pagination
            path="/users"
            totalItems={results.totalItems}
            itemsPerPage={limit}
            siblingCount={1}
            currentPage={page}
          />
        </div>
      </div>
    </>
  );
}
