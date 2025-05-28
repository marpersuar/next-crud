import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Auth } from 'aws-amplify';

import { Criteria } from '@/types/criteria';
import { Pagination } from '@/types/pagination';
import { Response } from '@/types/response';
import { User } from '@/types/user';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_APIGATEWAY_REST_API_URL}`,
    prepareHeaders: async (headers) => {
      headers.set('Authorization', `Bearer ${(await Auth.currentSession())?.getIdToken().getJwtToken()}`);

      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    searchUsers: builder.query<Pagination<User>, Partial<Criteria>>({
      query: ({ page, limit }) => ({
        url: '/users',
        params: {
          page,
          limit,
        },
      }),
      providesTags: (result) => (result?.items ? result.items.map(({ id }) => ({ type: 'Users', id })) : []),
    }),
    getUser: builder.query<User, User['id']>({
      query: (id) => `/users/${id}`,
      providesTags: ['Users'],
    }),
    saveUser: builder.mutation<Response, Omit<User, 'id'>>({
      query: (props) => ({
        url: '/users',
        method: 'POST',
        body: props,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation<Response, Partial<User>>({
      query: ({ id, ...props }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: props,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<Response, User['id']>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useSearchUsersQuery,
  useGetUserQuery,
  useSaveUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export default userApi;
