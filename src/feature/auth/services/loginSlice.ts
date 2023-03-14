/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../../app/store';
import { environment } from '../../../data/global';

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${environment.account}`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Login'],
  endpoints: (builder) => ({
    Login: builder.mutation({
        query(body) {
            console.log(body);
        return {
          url: `account/login`,
          method: 'POST',
          body,
        };
      },
      // this will refresh the lists automatically.
      invalidatesTags: ['Login'],
    }),
    Register: builder.mutation({
      query(body) {
        console.log(body);
        return {
          url: `/register`,
          method: 'POST',
          body,
        };
      },
      // this will refresh the lists automatically.
      invalidatesTags: ['Login'],
    }),
    getUserDetailsWithUserId: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ['Login'],
    }),
    getAllUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ['Login'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserDetailsWithUserIdQuery,
} = loginApi;
