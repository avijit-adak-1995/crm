import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
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
    tagTypes: ['Dashboard'],
    endpoints: (builder) => ({
        // dashboard account start
        getAllEmployeeFinancialData: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        getEmployeeFinancialData: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),

        // dashboard activity tracking start
        addKeyStrokes: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        createApplicationUsage: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        createWebsiteVisit: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        trackDocument: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        captureMedias: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        remoteDesktop:builder.mutation<{},any>({
            query:()=>({
                url:"",
                method:""
            })
        }),

        // dashbord ismonitoring start
        isMonitoring:builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        productivityAnalysis: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
      

        // dashboard project management start

        mostViewedProjects: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        workingProjects: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // dashboard team start

        statisticsTeams: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // dashboard send alert start

        sendEmailNotification: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

    })

})