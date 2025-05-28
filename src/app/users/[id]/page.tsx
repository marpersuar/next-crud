import { withSSRContext } from 'aws-amplify';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { cache } from 'react';

import { User } from '@/types/user';

import UpdateUserForm from './_components/UpdateUserForm';

const getUser = cache(async (id: string): Promise<User | null> => {
  const req = {
    headers: {
      cookie: headers().get('cookie'),
    },
  };

  const { Auth } = withSSRContext({ req });

  const res = await fetch(`${process.env.NEXT_PUBLIC_APIGATEWAY_REST_API_URL}/users/${id}`, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
    },
  });

  if (!res.ok) return null;

  return res.json();
});

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
  const user = await getUser(params.id);

  return {
    title: `CRUD en Nextjs | Usuario ${user?.id}`,
  };
};

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  if (!user) return notFound();

  return (
    <>
      <div className="grid grid-cols-1 mb-6">
        <div className="text-left">
          <h1 className="text-2xl">Usuario {user.id}</h1>
        </div>
      </div>
      <div className="card w-full p-6 bg-base-100 shadow-xl">
        <div className="text-xl">Información del usuario</div>
        <div className="divider" />
        <UpdateUserForm item={user} />
      </div>
    </>
  );
}
