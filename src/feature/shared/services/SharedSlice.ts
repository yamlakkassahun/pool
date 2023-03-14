/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../../app/store';
import { environment } from '../../../data/global';

// Define a service using a base URL and expected endpoints
export const sharedApi = createApi({
    reducerPath: 'sharedApi',
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
    tagTypes: ['Shared'],
    endpoints: (builder) => ({
        getAllDeliveryPlans: builder.query<any, void>({
            query: () => `/deliveryPlan`,
            providesTags: ['Shared']
        }),
        getAllPaymentOptions: builder.query<any, void>({
            query: () => `/deliveryPlan`,
            providesTags: ['Shared']
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetAllDeliveryPlansQuery, useGetAllPaymentOptionsQuery
} = sharedApi;
