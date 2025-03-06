import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
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
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        // Tasks  dashboard start
        addTaskDashboard: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        getAllTaskDashboardEntries: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        getTaskDashboardEntryById: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        updateTaskDashboardEntry: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        deleteTaskDashboardEntry: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        // team tasks start
        addTeamTask: builder.mutation<{}, any>({
            query: (data) => ({
                url: "team-tasks/add",
                method: "POST",
                body: data
            })
        }),
        getAllTeamTasks: builder.mutation<{}, any>({
            query: () => ({
                url: "team-tasks",
                method: "GET",
            })
        }),
        getTeamTaskById: builder.mutation<{}, any>({
            query: (id) => ({
                url:`team-tasks/details/${id}`,
                method: "GET"
            })
        }),
        updateTeamTask: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `team-tasks/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteTeamTask: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `team-tasks/delete/${id}`,
                method: "DELETE",
            })
        }),
    })

})

export const {
    useGetAllTeamTasksMutation,
    useAddTeamTaskMutation,
    useUpdateTeamTaskMutation,
    useDeleteTeamTaskMutation
} = tasksApi