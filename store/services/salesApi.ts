import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const salesApi = createApi({
    reducerPath: 'salesApi',
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
    tagTypes: ['Sales'],
    endpoints: (builder) => ({
        // sales estimate start
        createSalesEstimate: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        getAllSalesEstimates: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        getSalesEstimateById: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        updateSalesEstimate: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        deleteSalesEstimate: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),

        // sales invoice start
        createSalesInvoice: builder.mutation<{}, any>({
            query: (data) => ({
                url: "salesInvoices",
                method: 'POST',
                body: data
            })
        }),
        getAllSalesInvoices: builder.mutation<{}, any>({
            query: () => ({
                url: "salesInvoices",
                method: "GET",
            })
        }),
        getSalesInvoiceById: builder.mutation<{}, any>({
            query: (id) => ({
                url:`salesInvoices/details/${id}`,
                method: "GET"
            })
        }),
        updateSalesInvoice: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `salesInvoices/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteSalesInvoice: builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `salesInvoices/delete/${id}`,
                method: "DELETE",
            })
        }),
        

        // sales payment start
        createSalesPayment:builder.mutation<{}, any>({
            query: (data) => ({
                url: "salesPayments",
                method: 'POST',
                body: data
            })
        }),
        getAllSalesPayments: builder.mutation<{}, any>({
            query: () => ({
                url: "salesPayments",
                method: "GET",
            })
        }),
        getSalesPaymentById:builder.mutation<{}, any>({
            query: (id) => ({
                url:`salesPayments/details/${id}`,
                method: "GET"
            })
        }),
        updateSalesPayment: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `salesPayments/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteSalesPayment: builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `salesPayments/delete/${id}`,
                method: "DELETE",
            })
        }),
      

        // pipeline start

        createPipeline: builder.mutation<{}, any>({
            query: (data) => ({
                url: "pipelines",
                method: 'POST',
                body: data
            })
        }),

        getAllPipelines: builder.mutation<{}, any>({
            query: () => ({
                url: "pipelines",
                method: "GET",
            })
        }),
        getPipelineById: builder.mutation<{}, any>({
            query: (id) => ({
                url:`pipelines/details/${id}`,
                method: "GET"
            })
        }),

        updatePipeline: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `pipelines/update/${id}`,
                method: "PUT",
                body:data
            })
        }),

        deletePipeline: builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `pipelines/delete/${id}`,
                method: "DELETE",
            })
        }),

        searchPipelines: builder.mutation<{}, any>({
            query: () => ({
                url: "search-pipelines",
                method: "GET",
            })
        }),

        // proposal start

        createProposal: builder.mutation<{}, any>({
            query: (data) => ({
                url: "proposals",
                method: 'POST',
                body: data
            })
        }),

        getAllProposals: builder.mutation<{}, any>({
            query: () => ({
                url: "proposals",
                method: "GET",
            })
        }),
        getProposalById: builder.mutation<{}, any>({
            query: (id) => ({
                url:`proposals/details/${id}`,
                method: "GET"
            })
        }),
        updateProposal: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `proposals/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteProposal: builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `proposals/delete/${id}`,
                method: "DELETE",
            })
        }),
        searchProposals: builder.mutation<{}, any>({
            query: () => ({
                url: "search-proposals",
                method: "GET",
            })
        }),
    })

})