import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'



export const accountingApi = createApi({
    reducerPath: 'accountingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: dummyApis,
        prepareHeaders: (headers, { getState }: any) => {
            const token = JSON.parse(localStorage.getItem("userToken")!);
            if (token) {
                headers.set("authorization", token);
            }
            return headers;
        },
    }),
    tagTypes: ['Accounting'],
    endpoints: (builder) => ({
        // account expences start
        addAccountingExpense: builder.mutation<{}, any>({
            query: (data) => ({
                url: "accountingExpenses/add",
                method: 'POST',
                body: data
            })
        }),
        getAllAccountingExpenses: builder.query<{}, any>({
            query: () => ({
                url: "accountingExpenses",
                method: "GET",
            })
        }),
        getAccountingExpenseById: builder.query<{}, any>({
            query: (id) => ({
                url: `accountingExpenses/details/${id}`,
                method: "GET"
            })
        }),
        updateAccountingExpense: builder.mutation<{}, any>({
            query: ({ data, id }) => ({
                url: `accountingExpenses/update/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteAccountingExpense: builder.mutation<{}, any>({
            query: (id) => ({
                url: `accountingExpenses/delete/${id}`,
                method: "DELETE"
            })
        }),
        searchExpense: builder.query<{}, any>({
            query: () => ({
                url: "search/expense",
                method: "GET"
            })
        }),

        //    account invoice started
        addAccountInvoice: builder.mutation<{}, any>({
            query: (data) => ({
                url: "accountInvoices/add",
                method: "POST",
                body: data
            })
        }),
        getAllAccountInvoices: builder.query<{}, any>({
            query: () => ({
                url: "accountInvoices",
                method: "GET"
            })
        }),
        getAccountInvoiceById: builder.query<{}, any>({
            query: (id) => ({
                url: `accountInvoices/details/${id}`,
                method: "GET"
            })
        }),
        updateAccountInvoice: builder.mutation<{}, any>({
            query: ({ data, id }) => ({
                url: `accountInvoices/update/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteAccountInvoice: builder.mutation<{}, any>({
            query: (id) => ({
                url: `accountInvoices/delete/${id}`,
                method: "DELETE"
            })
        }),
        searchInvoices: builder.query<{}, any>({
            query: () => ({
                url: "search-Invoice",
                method: "GET"
            })
        }),

        //    Account Payment

        addAccountPayment: builder.mutation<{}, any>({
            query: (data) => ({
                url: "accountPayments/add",
                method: "POST",
                body:data
            })
        }),
        getAllAccountPayments: builder.query<{}, any>({
            query: () => ({
                url: "accountPayments",
                method: "GET"
            })
        }),
        getAccountPaymentById: builder.query<{}, any>({
            query: (id) => ({
                url: `accountPayments/details/${id}`,
                method: "GET"
            })
        }),
        updateAccountPayment: builder.mutation<{}, any>({
            query: ({data, id}) => ({
                url:`accountPayments/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteAccountPayment: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url:`accountPayments/delete/${id}`,
                method: "DELETE",
                body:data
            })
        }),
        searchPayments: builder.query<{}, any>({
            query: () => ({
                url: "search-accountPayments",
                method: "GET"
            })
        }),

        // account recuirring  expence
        addAccountRecurringExpense: builder.mutation<{}, any>({
            query: (data) => ({
                url: "accountRecurringExpenses/add",
                method: "POST",
                body:data
            })
        }),
        getAllAccountRecurringExpenses: builder.query<{}, any>({
            query: () => ({
                url: "accountRecurringExpenses",
                method: "GET"
            })
        }),
        getAccountRecurringExpenseById: builder.query<{}, any>({
            query: (id) => ({
                url:`accountRecurringExpenses/details/${id}`,
                method: "GET"
            })
        }),
        updateAccountRecurringExpense: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url:`accountRecurringExpenses/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteAccountRecurringExpense: builder.mutation<{}, any>({
            query: (id) => ({
                url:`accountRecurringExpenses/delete/${id}`,
                method: "DELETE"
            })
        }),


        // account estimate start


        addEstimated: builder.mutation<{}, any>({
            query: (data) => ({
                url: "estimated/add",
                method: "POST",
                body:data
            })
        }),
        getAllEstimated: builder.query<{}, any>({
            query: () => ({
                url: "estimated",
                method: "GET"
            })
        }),
        getEstimatedById: builder.query<{}, any>({
            query: (id) => ({
                url:`estimated/details/${id}`,
                method: "GET"
            })
        }),
        updateEstimated: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url:`estimated/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteEstimated: builder.mutation<{}, any>({
            query: (id) => ({
                url:`estimated/delete/${id}`,
                method: "DELETE"
            })
        }),

        //  estimate recieved

        addEstimateReceived: builder.mutation<{}, any>({
            query: (data) => ({
                url: "estimateReceived/add",
                method: "POST",
                body:data
            })
        }),
        getAllEstimateReceived: builder.query<{}, any>({
            query: () => ({
                url: "estimateReceived",
                method: "GET"
            })
        }),
        getEstimateReceivedById: builder.query<{}, any>({
            query: (id) => ({
                url:`estimateReceived/details/${id}`,
                method: "GET"
            })
        }),
        updateEstimateReceived: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url:`estimateReceived/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteEstimateReceived: builder.mutation<{}, any>({
            query: (id) => ({
                url:`estimateReceived/delete/${id}`,
                method: "DELETE"
            })
        }),
        searchReceivedEstimates: builder.query<{}, any>({
            query: () => ({
                url: "search/estimates-received",
                method: "GET"
            })
        }),
        // account income start
        addIncome: builder.mutation<{}, any>({
            query: () => ({
                url: "income/add",
                method: "POST"
            })
        }),
        getAllIncome: builder.query<{}, any>({
            query: () => ({
                url: "income",
                method: "GET"
            })
        }),
        getIncomeById: builder.query<{}, any>({
            query: (id) => ({
                url:`income/details/${id}`,
                method: "GET"
            })
        }),
        updateIncome: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url:`income/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteIncome: builder.mutation<{}, any>({
            query: (id) => ({
                url:`income/delete/${id}`,
                method: "DELETE"
            })
        }),
        searchIncomes: builder.query<{}, any>({
            query: () => ({
                url: "search-income",
                method: "GET"
            })
        }),


    })
})

export const {
    useAddAccountInvoiceMutation,
    useAddAccountRecurringExpenseMutation,
    useAddAccountPaymentMutation,
    useAddAccountingExpenseMutation,
    useAddEstimateReceivedMutation,
    useAddEstimatedMutation,
    useAddIncomeMutation,
    useDeleteAccountInvoiceMutation,
    useDeleteAccountPaymentMutation,
    useDeleteAccountRecurringExpenseMutation,
    useDeleteAccountingExpenseMutation,
    useDeleteEstimateReceivedMutation,
    useDeleteEstimatedMutation,
    useDeleteIncomeMutation,
    useGetAccountInvoiceByIdQuery,
    useGetAccountPaymentByIdQuery,
    useGetAccountRecurringExpenseByIdQuery,
    useGetAccountingExpenseByIdQuery,
    useGetAllAccountInvoicesQuery,
    useGetAllAccountPaymentsQuery,
    useGetAllAccountRecurringExpensesQuery,
    useGetAllAccountingExpensesQuery,
    useGetAllEstimateReceivedQuery,
    useGetAllEstimatedQuery,
    useGetAllIncomeQuery,
    useGetEstimateReceivedByIdQuery,
    useGetEstimatedByIdQuery,
    useGetIncomeByIdQuery,
    useSearchExpenseQuery,
    useSearchIncomesQuery,
    useSearchInvoicesQuery,
    useSearchPaymentsQuery,
    useSearchReceivedEstimatesQuery,
    useUpdateAccountInvoiceMutation,
    useUpdateAccountPaymentMutation,
    useUpdateAccountRecurringExpenseMutation,
    useUpdateAccountingExpenseMutation,
    useUpdateEstimateReceivedMutation,
    useUpdateEstimatedMutation,
    useUpdateIncomeMutation
}=accountingApi