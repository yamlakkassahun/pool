import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../../app/store';
import { environment } from '../../../data/global';

// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${environment.pool}`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.accessToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        getRecentOrders: builder.query<any, void>({
            query: () => `/pool/myDeliveryRequests`,
            providesTags: ['Order']
        }),
        getDraftOrders: builder.query<any, void>({
            query: () => `/pool/myDeliveryRequests?isDraft=true`,
            providesTags: ['Order']
        }),
        addOrder: builder.mutation<object, {}>({
            query(body) {
                return {
                    url: `order`,
                    method: "POST",
                    body,
                };
            },
            // this will refresh the lists automatically.
            invalidatesTags: ['Order'],
        }),
        updateOrder: builder.mutation<any, Partial<any>>({
            query(data) {
                const { _id, ...body } = data
                return {
                    url: `order/${_id}`,
                    method: 'PATCH',
                    body,
                }
            },
            invalidatesTags: ['Order'],
        }),
        deleteOrder: builder.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `order/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Order']
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetRecentOrdersQuery, useGetDraftOrdersQuery, useDeleteOrderMutation, useAddOrderMutation
} = orderApi;
