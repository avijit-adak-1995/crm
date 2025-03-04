import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const reportApi = createApi({
    reducerPath: 'reportApi',
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
    tagTypes: ['Report'],
    endpoints: (builder) => ({
        // amount owed entry start
        createAmountOwed: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        getAllAmountOwed: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        getAmountOwedById: builder.mutation<{}, any>({
            query: (data) => ({
                url: "registration",
                method: 'POST',
                body: data
            })
        }),
        updateAmountOwed: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),

        deleteAmountOwed: builder.mutation<{}, any>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            })
        }),
        // client budget entry start
        createClientBudget: builder.mutation<{}, any>({
            query: (data) => ({
                url: "clientBudget",
                method: 'POST',
                body: data
            })
        }),
        getAllClientBudget: builder.mutation<{}, any>({
            query: () => ({
                url: "clientBudget",
                method: "GET",
            })
        }),
        getClientBudgetById: builder.mutation<{}, any>({
            query: (id) => ({
                url:`clientBudget/details/${id}`,
                method: "GET"
            })
        }),
        updateClientBudget: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `clientBudget/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteClientBudget: builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `clientBudget/delete/${id}`,
                method: "DELETE",
            })
        }),
        

        // daily limits entry start
        createDailyLimits:builder.mutation<{}, any>({
            query: (data) => ({
                url: "dailyLimits",
                method: 'POST',
                body: data
            })
        }),
        getAllDailyLimits: builder.mutation<{}, any>({
            query: () => ({
                url: "dailyLimits",
                method: "GET",
            })
        }),
        getDailyLimitsById:builder.mutation<{}, any>({
            query: (id) => ({
                url:`dailyLimits/details/${id}`,
                method: "GET"
            })
        }),
        updateDailyLimits: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `dailyLimits/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteDailyLimits:builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `dailyLimits/delete/${id}`,
                method: "DELETE",
            })
        }),
        
        //  expense report entry start

        createExpenseReport:builder.mutation<{}, any>({
            query: (data) => ({
                url: "expenseReports",
                method: 'POST',
                body: data
            })
        }),
        getAllExpenseReports: builder.mutation<{}, any>({
            query: () => ({
                url: "expenseReports",
                method: "GET",
            })
        }),
        getExpenseReportById:builder.mutation<{}, any>({
            query: (id) => ({
                url:`expenseReports/details/${id}`,
                method: "GET"
            })
        }),
        updateExpenseReport: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `expenseReports/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteExpenseReport:builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `expenseReports/delete/${id}`,
                method: "DELETE",
            })
        }),

        // manual time edit report start

        createManualTimeEditReport:builder.mutation<{}, any>({
            query: (data) => ({
                url: "manualTimeEditReports",
                method: 'POST',
                body: data
            })
        }),
        getAllManualTimeEditReports: builder.mutation<{}, any>({
            query: () => ({
                url: "manualTimeEditReports",
                method: "GET",
            })
        }),
        getManualTimeEditReportById:builder.mutation<{}, any>({
            query: (id) => ({
                url:`manualTimeEditReports/details/${id}`,
                method: "GET"
            })
        }),
        updateManualTimeEditReport: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `manualTimeEditReports/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteManualTimeEditReport:builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `manualTimeEditReports/delete/${id}`,
                method: "DELETE",
            })
        }),
      
        // payment report entry start

        createPaymentReport:builder.mutation<{}, any>({
            query: (data) => ({
                url: "paymentReports",
                method: 'POST',
                body: data
            })
        }),
        getAllPaymentReports: builder.mutation<{}, any>({
            query: () => ({
                url: "paymentReports",
                method: "GET",
            })
        }),
        getPaymentReportById:builder.mutation<{}, any>({
            query: (id) => ({
                url:`paymentReports/details/${id}`,
                method: "GET"
            })
        }),
        updatePaymentReport: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `paymentReports/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deletePaymentReport:builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `paymentReports/delete/${id}`,
                method: "DELETE",
            })
        }),

        // project budget entry start

        createProjectBudget:builder.mutation<{}, any>({
            query: (data) => ({
                url: "projectBudgets",
                method: 'POST',
                body: data
            })
        }),
        getAllProjectBudgets: builder.mutation<{}, any>({
            query: () => ({
                url: "projectBudgets",
                method: "GET",
            })
        }),
        getProjectBudgetById:builder.mutation<{}, any>({
            query: (id) => ({
                url:`projectBudgets/details/${id}`,
                method: "GET"
            })
        }),
        updateProjectBudget: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `projectBudgets/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteProjectBudget:builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `projectBudgets/delete/${id}`,
                method: "DELETE",
            })
        }),

        // time activity report

        createTimeActivityReport:builder.mutation<{}, any>({
            query: (data) => ({
                url: "timeActivityReports",
                method: 'POST',
                body: data
            })
        }),
        getAllTimeActivityReports: builder.mutation<{}, any>({
            query: () => ({
                url: "timeActivityReports",
                method: "GET",
            })
        }),
        getTimeActivityReportById:builder.mutation<{}, any>({
            query: (id) => ({
                url:`timeActivityReports/details/${id}`,
                method: "GET"
            })
        }),
        updateTimeActivityReport: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `timeActivityReports/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteTimeActivityReport:builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `timeActivityReports/delete/${id}`,
                method: "DELETE",
            })
        }),

        // weekly entry start

        createWeeklyEntry:builder.mutation<{}, any>({
            query: (data) => ({
                url: "weekly",
                method: 'POST',
                body: data
            }) 
        }),
        getAllWeeklyEntries: builder.mutation<{}, any>({
            query: () => ({
                url: "weekly",
                method: "GET",
            })
        }),
        getWeeklyEntryById:builder.mutation<{}, any>({
            query: (id) => ({
                url:`weekly/details/${id}`,
                method: "GET"
            })
        }),
        updateWeeklyEntry: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `weekly/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteWeeklyEntry:builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `weekly/delete/${id}`,
                method: "DELETE",
            })
        }),

        // weekly limits entry start

        createWeeklyLimits:builder.mutation<{}, any>({
            query: (data) => ({
                url: "weeklyLimits",
                method: 'POST',
                body: data
            }) 
        }),
        getAllWeeklyLimits: builder.mutation<{}, any>({
            query: () => ({
                url: "weeklyLimits",
                method: "GET",
            })
        }),
        getWeeklyLimitsById:builder.mutation<{}, any>({
            query: (id) => ({
                url:`weeklyLimits/details/${id}`,
                method: "GET"
            })
        }),
        updateWeeklyLimits: builder.mutation<{}, any>({
            query: ({id, data}) => ({
                url: `weeklyLimits/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteWeeklyLimits:builder.mutation<{}, any>({
            query: ({id}) => ({
                url: `weeklyLimits/delete/${id}`,
                method: "DELETE",
            })
        }),

    })

})