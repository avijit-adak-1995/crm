import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const contactApi = createApi({
    reducerPath: 'contactApi',
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
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        // contact clients start
        createClient: builder.mutation<{}, any>({
            query: (data) => ({
                url: "clients/add",
                method: 'POST',
                body: data
            })
        }),
        getAllClients: builder.query<{}, any>({
            query: () => ({
                url: "clients",
                method: "GET"

            })
        }),
        getClientById: builder.query<{}, any>({
            query: (id) => ({
                url: `clients/details/${id}`,
                method: "GET",

            })
        }),
        updateClient: builder.mutation<{}, any>({
            query: ({ id, data }) => ({
                url: `clients/update/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        deleteClient: builder.mutation<{}, any>({
            query: (id) => ({
                url: `clients/delete/${id}`,
                method: "DELETE"
            })
        }),

        // contact consumer start
        createConsumer: builder.mutation<{}, any>({
            query: (data) => ({
                url: "visitors/add",
                method: "POST",
                body: data
            })
        }),
        getAllConsumers: builder.query<{}, any>({
            query: () => ({
                url: "visitors",
                method: "GET"
            })
        }),
        getConsumerById: builder.query<{}, any>({
            query: (ID) => ({
                url: `visitors/details/${ID}`,
                method: "GET"
            })
        }),
        updateConsumer: builder.mutation<{}, any>({
            query: ({ id, data }) => ({
                url: `visitors/update/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        deleteConsumer: builder.mutation<{}, any>({
            query: (id) => ({
                url: `visitors/delete/${id}`,
                method: "DELETE"
            })
        }),

        // contact leads start
        createLead: builder.mutation<{}, any>({
            query: (data) => ({
                url: "consumers/add",
                method: "POST",
                body: data
            })
        }),
        getAllLeads: builder.query<{}, any>({
            query: () => ({
                url: "consumers",
                method: "GET"
            })
        }),
        getLeadById: builder.query<{}, any>({
            query: (id) => ({
                url: `consumers/details//${id}`,
                method: "GET"
            })
        }),
        updateLead: builder.mutation<{}, any>({
            query: ({ id, data }) => ({
                url: '',
                method: "",
                body: data
            })
        }),
        deleteLead: builder.mutation<{}, any>({
            query: (id) => ({
                url: "",
                method: ""
            })
        }),

        createVisitor: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: "",
                body: ""
            })
        }),
        getAllVisitors: builder.query<{}, any>({
            query: () => ({
                url: "",
                method: "",
                body: ""
            })
        }),
        getVisitorDetailsById: builder.query<{}, any>({
            query: () => ({
                url: "",
                method: "",
                body: ""
            })
        }),
        updateVisitor: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: "",
                body: ""
            })
        }),
        deleteVisitor: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: "",
                body: ""
            })
        }),
    })
})


const {

    useGetClientByIdQuery,
    useGetConsumerByIdQuery,
    useGetLeadByIdQuery,
    useCreateClientMutation,
    useCreateConsumerMutation,
    useCreateLeadMutation,
    useDeleteClientMutation,
    useDeleteConsumerMutation,
    useGetAllClientsQuery,
    useGetAllConsumersQuery,
    useGetAllLeadsQuery,
    useLazyGetAllClientsQuery,
    useLazyGetAllConsumersQuery,
    useLazyGetAllLeadsQuery,

    useLazyGetClientByIdQuery,
    useLazyGetConsumerByIdQuery,
    useLazyGetLeadByIdQuery,

    useUpdateClientMutation,
    useUpdateConsumerMutation,
    useUpdateLeadMutation,


} = contactApi