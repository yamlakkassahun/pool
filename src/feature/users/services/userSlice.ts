/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../../app/store';
import { environment } from '../../../data/global';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
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
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query<any, void>({
            query: () => `/account?populate=detail&filterBy=accountStatus,role&filterValue=Active,Customer`,
            providesTags: ['User']
        }),
        getUser: builder.query<any, number>({
            query: (id) => `/account/${id}`,
            providesTags: ['User']
        }),
        addUser: builder.mutation<any, {}>({
            query(body) {
                return {
                    url: `user`,
                    method: "POST",
                    body,
                };
            },
            // this will refresh the lists automatically.
            invalidatesTags: ["User"],
        }),
        updateUser: builder.mutation<any, Partial<any>>({
            query(data) {
                const { _id, ...body } = data
                return {
                    url: `User/${_id}`,
                    method: 'PATCH',
                    body,
                }
            },
            invalidatesTags: ["User"],
        }),
        deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `User/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["User"]
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetUserQuery, useGetUsersQuery, useDeleteUserMutation, useAddUserMutation
} = userApi;
