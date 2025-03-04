import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const jobsApi = createApi({
    reducerPath: 'jobsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: dummyApis,
        prepareHeaders: (headers, { getState }: any) => {
            const token = JSON.parse(localStorage.getItem("User")!).accessToken;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Jobs'],
    endpoints: (builder) => ({
        // browse start
        addBrowse: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        getAllBrowses: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        getBrowseById: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        updateBrowse: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),

        deleteBrowse: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        // jobs employee start
        addJobEmployee: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllJobEmployees: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getJobEmployeeById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateJobEmployee: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteJobEmployee: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        

        // jobs matching start
        addMatching:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllMatching: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getMatchingById:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateMatching: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteMatching:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        
      


    })

})