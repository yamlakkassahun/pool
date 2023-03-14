/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../../app/store';
import { environment } from '../../../data/global';

// Define a service using a base URL and expected endpoints
export const addressApi = createApi({
    reducerPath: 'addressApi',
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
    tagTypes: ['address'],
    endpoints: (builder) => ({
        getAddresses: builder.query<any, void>({
            query: () => `/address`,
            providesTags: ['address']
        }),
        getAddress: builder.query<any, number>({
            query: (id) => `/address/${id}`,
            providesTags: ['address']
        }),
        addAddress: builder.mutation<any, {}>({
            query(body) {
                return {
                    url: `/address/addAddress`,
                    method: "POST",
                    body,
                };
            },
            // this will refresh the lists automatically.
            invalidatesTags: ["address"],
        }),
        updateAddress: builder.mutation<any, Partial<any>>({
            query(data) {
                const { _id, ...body } = data
                return {
                    url: `/address/updateAddress`,
                    method: 'PATCH',
                    body,
                }
            },
            invalidatesTags: ["address"],
        }),
        deleteAddress: builder.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `address/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["address"]
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetAddressQuery, useGetAddressesQuery, useDeleteAddressMutation, useAddAddressMutation
} = addressApi;
