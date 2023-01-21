import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        postJob: builder.mutation({
            query: data => ({
                method: "POST",
                url: "/job",
                body: data,
            }),
            invalidatesTags: ["Jobs"],
        }),
        applyJob: builder.mutation({
            query: data => ({
                method: "PATCH",
                url: "/apply",
                body: data,
            }),
            invalidatesTags: ["Apply"],
        }),
        question: builder.mutation({
            query: data => ({
                method: "PATCH",
                url: "/query",
                body: data,
            }),
            invalidatesTags: ["Job"],
        }),
        reply: builder.mutation({
            query: data => ({
                method: "PATCH",
                url: "/reply",
                body: data,
            }),
            invalidatesTags: ["Job"],
        }),
        getJobs: builder.query({
            query: () => ({
                url: "/jobs",
            }),
            providesTags: ["Jobs"],
        }),
        getSingleJob: builder.query({
            query: (id) => ({
                url: `/job/${id}`,
            }),
            providesTags: ["Job"],
        }),
        getAppliedJob: builder.query({
            query: (email) => ({
                url: `/applied-jobs/${email}`,
            }),
            providesTags: ["Apply"],
        }),
        deleteJob: builder.mutation({
            query: (id) => ({
                url: `/job/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Jobs"],
        }),
    }),
});

export const {usePostJobMutation, useApplyJobMutation, useQuestionMutation, useReplyMutation, useGetJobsQuery, useGetSingleJobQuery, useGetAppliedJobQuery, useDeleteJobMutation} = jobApi;