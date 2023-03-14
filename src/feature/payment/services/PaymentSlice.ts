/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../../app/store';
import { environment } from '../../../data/global';

// Define a service using a base URL and expected endpoints
export const paymentApi = createApi({
    reducerPath: 'paymentApi',
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
    tagTypes: ['Payment'],
    endpoints: (builder) => ({
        getTransitions: builder.query<any, void>({
            query: () => `/account?populate=detail&filterBy=accountStatus,role&filterValue=Active,Customer`,
            providesTags: ['Payment']
        }),
        addPayment: builder.mutation<any, {}>({
            query(body) {
                return {
                    url: `payment`,
                    method: "POST",
                    body,
                };
            },
            // this will refresh the lists automatically.
            invalidatesTags: ['Payment'],
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetTransitionsQuery, useAddPaymentMutation
} = paymentApi;
