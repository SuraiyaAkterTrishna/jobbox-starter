import { getUser } from "../auth/authSlice";
import apiSlice from "./apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        showUsers: builder.query({
            query: () => ({
                url: "/users",
            }),
        }),
        register: builder.mutation({
            query: data => ({
                method: "POST",
                url: "/user",
                body: data,
            }),
            async onQueryStarted(data, {dispatch,queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    dispatch(getUser(data.email));
                } catch(error){
                    
                }
            }
        }),
    }),
});

export const {useRegisterMutation, useShowUsersQuery} = authApi;