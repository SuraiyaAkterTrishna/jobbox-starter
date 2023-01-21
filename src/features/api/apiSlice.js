import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_PATH,
    }),
    tagTypes: ["Job","Jobs","Apply"],
    endpoints: builder => ({}),
});

export default apiSlice;