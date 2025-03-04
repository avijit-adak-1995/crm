import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const EmployeesApi = createApi({
    reducerPath: 'EmployeesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: dummyApis,
        prepareHeaders: (headers, { getState }: any) => {
            const token = JSON.parse(localStorage.getItem("userToken")!);
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Employees'],
    endpoints: (builder) => ({
        //  Employee appointment start
        addAppointment: builder.mutation<{}, any>({
            query: (data) => ({
                url: "appointments/add",
                method: 'POST',
                body: data
            })
        }),
        getAllAppointments: builder.query<{}, any>({
            query: () => ({
                url: "appointments",
                method: "GET"
                
            })
        }),
        getAppointmentById: builder.query<{}, any>({
            query: (id) => ({
                url: `appointments/details/${id}`,
                method: "GET"
            })
        }),
        updateAppointment: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `appointments/update/${id}`,
                method: "PUT",
                body: data
            })
        }),

        deleteAppointment: builder.mutation<{}, any>({
            query: (id) => ({
                url: `appointments/delete/${id}`,
                method: "DELETE",
               
            })
        }),

        cancelAppointment: builder.mutation<{}, any>({
            query: (id) => ({
                url: `appointments/${id}/cancel`,
                method: "PATCH",
               
            })
        }),

        // Employeement Aprovals start
        addApproval: builder.mutation<{}, any>({
            query: (data) => ({
                url: "approval/add",
                method: "POST",
                body: data
            })
        }),
        seeAllApprovals: builder.query<{}, any>({
            query: () => ({
                url: "approvals",
                method: "GET"
            })
        }),
        editApproval: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `approval/update/${id}`,
                method: "GET",
                body:data
            })
        }),
        deleteApproval: builder.mutation<{}, any>({
            query: (id) => ({
                url: `approval/delete/${id}`,
                method: "DELETE"
            })
        }),
        approvalDetails: builder.query<{}, any>({
            query: (id) => ({
                url: `approval/details/${id}`,
                method: "GET",
               
            })
        }),

        // Employeement Candidates start
        addCandidate: builder.mutation<{}, any>({
            query: (data) => ({
                url: "candidates/add",
                method: "POST",
                body: data
            })
        }),
        seeAllCandidatesData: builder.query<{}, any>({
            query: () => ({
                url: "candidates-all",
                method: "GET",
               
            })
        }),
        editCandidate: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `candidates/update/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteCandidate: builder.mutation<{}, any>({
            query: (id) => ({
                url: `candidates/delete/${id}`,
                method: "DELETE",
              
            })
        }),
        candidateDetails: builder.query<{}, any>({
            query: (id) => ({
                url: `candidates/details/${id}`,
                method: "GET",
                
            })
        }),
        // InvitationCandidate: builder.mutation<{}, any>({
        //     query: (data) => ({
        //         url: "login",
        //         method: "POST",
        //         body: data
        //     })
        // }),
        // updateCandidateStatus: builder.mutation<{}, any>({
        //     query: (data) => ({
        //         url: "login",
        //         method: "POST",
        //         body: data
        //     })
        // }),

        // Employeement employeemanagement

        addEmployeeManage: builder.mutation<{}, any>({
            query: (data) => ({
                url: "employeeManage/add",
                method: "POST",
                body: data
            })
        }),

        seeAllEmployeeManage: builder.query<{}, any>({
            query: () => ({
                url: "employeeManage",
                method: "GET",
            })
        }),

        editEmployeeManage: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `employeeManage/update/${id}`,
                method: "Put",
                body: data
            })
        }),

        deleteEmployeeManage: builder.mutation<{}, any>({
            query: (id) => ({
                url: `employeeManage/delete/${id}`,
                method: "DELETE"
            })
        }),

        employeeManageDetails: builder.query<{}, any>({
            query: (id) => ({
                url: `employeeManage/details/${id}`,
                method: "POST"
            })
        }),

        // Employee ManageLevel

        addManageLevel: builder.mutation<{}, any>({
            query: (data) => ({
                url: "manageLevels/add",
                method: "POST",
                body: data
            })
        }),
        seeAllManageLevels: builder.query<{}, any>({
            query: () => ({
                url: "manageLevels",
                method: "GET",
            })
        }),
        editManageLevel: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `manageLevels/update/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteManageLevel: builder.mutation<{}, any>({
            query: (id) => ({
                url: `manageLevels/delete/${id}`,
                method: "DELETE"
            })
        }),
        manageLevelDetails: builder.query<{}, any>({
            query: (id) => ({
                url: `manageLevels/details/${id}`,
                method: "GET"
            })
        }),

        // Employee Positions start
        addPosition: builder.mutation<{}, any>({
            query: (data) => ({
                url: "positions/add",
                method: "POST",
                body: data
            })
        }),
        seeAllPositions: builder.query<{}, any>({
            query: () => ({
                url: "positions",
                method: "GET"
            })
        }),
        editPosition: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `positions/update/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deletePosition: builder.mutation<{}, any>({
            query: (id) => ({
                url: `positions/delete/${id}`,
                method: "DELETE"
            })
        }),
        positionDetails: builder.query<{}, any>({
            query: (id) => ({
                url: `positions/details/${id}`,
                method: "GET"
            })
        }),

        // Employee recurring expence start
        addRecurringExpense: builder.mutation<{}, any>({
            query: (data) => ({
                url: "recurringExpenses/add",
                method: "POST",
                body: data
            })
        }),
        seeAllRecurringExpenses: builder.query<{}, any>({
            query: () => ({
                url: "recurringExpenses",
                method: "GET"
            })
        }),
        editRecurringExpense: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `recurringExpenses/update/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteRecurringExpense: builder.mutation<{}, any>({
            query: (id) => ({
                url: `recurringExpenses/delete/${id}`,
                method: "DELETE"
            })
        }),
        recurringExpenseDetails: builder.query<{}, any>({
            query: (id) => ({
                url: `recurringExpenses/details/${id}`,
                method: "GET"
            })
        }),
        // Employee time activity start
        addTimeActivity: builder.mutation<{}, any>({
            query: (data) => ({
                url: "timeActivities/add",
                method: "POST",
                body: data
            })
        }),
        getAllTimeActivities: builder.query<{}, any>({
            query: () => ({
                url: "timeActivities",
                method: "GET",
            })
        }),
        getTimeActivityById: builder.query<{}, any>({
            query: (id) => ({
                url: `timeActivities/details/${id}`,
                method: "GET"
            })
        }),
        updateTimeActivity: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `timeActivities/update/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteTimeActivity: builder.mutation<{}, any>({
            query: (id) => ({
                url: `timeActivities/delete/${id}`,
                method: "DELETE",
            })
        }),

        // Employee time off start
        addTimeOff: builder.mutation<{}, any>({
            query: (data) => ({
                url: "timeOff/add",
                method: "POST",
                body: data
            })
        }),
        addHoliday: builder.mutation<{}, any>({
            query: (data) => ({
                url: "add-holiday",
                method: "POST",
                body: data
            })
        }),
        getAllTimeOffRequests: builder.query<{}, any>({
            query: () => ({
                url: "timeOff",
                method: "GET"
            })
        }),
        getTimeOffRequestById: builder.query<{}, any>({
            query: ({id,data}) => ({
                url: `timeOff/details/${id}`,
                method: "GET",
                body: data
            })
        }),
        updateTimeOffRequest: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `timeOff/update/${id}`,
                method: "PUT",
                body: data
            })
        }),

        deleteTimeOffRequest: builder.mutation<{}, any>({
            query: (id) => ({
                url: `timeOff/delete/${id}`,
                method: "DELETE"
            })
        }),

        // Employee timesheet start
        addTimesheet: builder.mutation<{}, any>({
            query: (data) => ({
                url: "timesheets/add",
                method: "POST",
                body: data
            })
        }),
        getAllTimesheets: builder.query<{}, any>({
            query: () => ({
                url: "timesheets",
                method: "GET"
            })
        }),
        getTimesheetById: builder.query<{}, any>({
            query: (id) => ({
                url: `timesheets/details/${id}`,
                method: "GET"
            })
        }),
        updateTimesheet: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `timesheets/update/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteTimesheet: builder.mutation<{}, any>({
            query: (id) => ({
                url: `timesheets/delete/${id}`,
                method: "DELETE"
            })
        }),

        inviteEmployeeManage:builder.mutation<{}, any>({
            query: (data) => ({
                url: 'create-employeeInvite',
                method: "POST",
                body:data
            })
        }),
    })

})

export const {
    useInviteEmployeeManageMutation,
    useAddAppointmentMutation,
    useAddApprovalMutation,
    useAddCandidateMutation,
    useAddEmployeeManageMutation,
    useAddHolidayMutation,
    useAddManageLevelMutation,
    useAddPositionMutation,
    useAddRecurringExpenseMutation,
    useAddTimeActivityMutation,
    useAddTimeOffMutation,
    useAddTimesheetMutation,
    useApprovalDetailsQuery,
    useCancelAppointmentMutation,
    useCandidateDetailsQuery,
    useDeleteAppointmentMutation,
    useDeleteApprovalMutation,
    useDeleteCandidateMutation,
    useDeleteEmployeeManageMutation,
    useDeleteManageLevelMutation,
    useDeletePositionMutation,
    useDeleteRecurringExpenseMutation,
    useDeleteTimeActivityMutation,
    useDeleteTimeOffRequestMutation,
    useDeleteTimesheetMutation,
    useEditApprovalMutation,
    useEditCandidateMutation,
    useEditEmployeeManageMutation,
    useEditManageLevelMutation,
    useEditPositionMutation,
    useEditRecurringExpenseMutation,
    useEmployeeManageDetailsQuery,
    useGetAllAppointmentsQuery,
    useGetAllTimeActivitiesQuery,
    useGetAllTimeOffRequestsQuery,
    useGetAllTimesheetsQuery,
    useGetAppointmentByIdQuery,
    useGetTimeActivityByIdQuery,
    useGetTimeOffRequestByIdQuery,
    useGetTimesheetByIdQuery,
    useLazyApprovalDetailsQuery,
    useLazyCandidateDetailsQuery,
    useLazyEmployeeManageDetailsQuery,
    useLazyGetAllAppointmentsQuery,
    useLazyGetAllTimeActivitiesQuery,
    useLazyGetAllTimeOffRequestsQuery,
    useLazyGetAllTimesheetsQuery,
    useLazyGetAppointmentByIdQuery,
    useLazyGetTimeActivityByIdQuery,
    useLazyGetTimeOffRequestByIdQuery,
    useLazyGetTimesheetByIdQuery,
    useLazyManageLevelDetailsQuery,
    useLazyPositionDetailsQuery,
    useLazyRecurringExpenseDetailsQuery,
    useLazySeeAllApprovalsQuery,
    useLazySeeAllCandidatesDataQuery,
    useLazySeeAllEmployeeManageQuery,
    useLazySeeAllManageLevelsQuery,
    useLazySeeAllPositionsQuery,
    useLazySeeAllRecurringExpensesQuery,
    useManageLevelDetailsQuery,
    usePositionDetailsQuery,
    useRecurringExpenseDetailsQuery,
    useSeeAllApprovalsQuery,
    useSeeAllCandidatesDataQuery,
    useSeeAllEmployeeManageQuery,
    useSeeAllManageLevelsQuery,
    useSeeAllPositionsQuery,
    useSeeAllRecurringExpensesQuery,
    useUpdateAppointmentMutation,
    useUpdateTimeActivityMutation,
    useUpdateTimeOffRequestMutation,
    useUpdateTimesheetMutation

}=EmployeesApi