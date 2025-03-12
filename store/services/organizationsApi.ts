import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dummyApis } from '@/utility/baseUrl'

export const organizationsApi = createApi({
    reducerPath: 'organizationsApi',
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
    tagTypes: ['Organizations'],
    endpoints: (builder) => ({
        // Organizations department start
        addDepartment: builder.mutation<{}, any>({
            query: (data) => ({
                url: "departments/add",
                method: 'POST',
                body: data
            })
        }),
        getAllDepartments: builder.query<{}, any>({
            query: () => ({
                url: "departments",
                method: "GET",
            })
        }),


        getDepartmentById: builder.query<{}, any>({
            query: (id) => ({
                url: `departments/details/${id}`,
                method: "GET"
            })
        }),
        updateDepartment: builder.mutation<{}, any>({
            query: ({ id, data }) => ({
                url: `departments/update/${id}`,
                method: "PUT",
                body: data
            })
        }),
        deleteDepartment: builder.mutation<{}, any>({
            query: (id) => ({
                url: `departments/delete/${id}`,
                method: "DELETE"
            })
        }),


        // employment type start
        addEmploymentType: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllEmploymentTypes: builder.query<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        getEmploymentTypeById: builder.query<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateEmploymentType: builder.query<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteEmploymentType: builder.query<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // equipment record start
        addEquipment: builder.mutation<{}, any>({
            query: (data) => ({
                url: "equipment/add",
                method: 'POST',
                body: data
            })
        }),

        getAllEquipment: builder.query<{}, any>({
            query: () => ({
                url: "equipment",
                method: "GET",
            })
        }),

        getEquipmentById: builder.mutation<{}, any>({
            query: (id) => ({
                url: `equipment/details/${id}`,
                method: "GET"
            })
        }),
        updateEquipment: builder.mutation<{}, any>({
            query: ({ id, data }) => ({
                url: `equipment/update/${id}`,
                method: "PUT",
                body: data
            })
        }),

        deleteEquipment: builder.mutation<{}, any>({
            query: (id) => ({
                url: `equipment/delete/${id}`,
                method: "DELETE"
            })
        }),

        // help center entry start

        addHelpCenterEntry: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllHelpCenterEntries: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getHelpCenterEntryById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateHelpCenterEntry: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteHelpCenterEntry: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // inventory item start

        addInventoryItem: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllInventoryItems: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getInventoryItemById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateInventoryItem: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteInventoryItem: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // organization management record

        addOrgManage: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllOrgManage: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getOrgManageById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateOrgManage: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteOrgManage: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // new project start

        addProject: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllProjects: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getProjectById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateProject: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteProject: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // recurring expense start


        addRecurringExpense: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllRecurringExpenses: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getRecurringExpenseById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateRecurringExpense: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteRecurringExpense: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // tag start

        addTag: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllTags: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getTagById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateTag: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteTag: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

        // new team start

        addTeam: builder.mutation<{}, any>({
            query: (data) => ({
                url: "teams/add",
                method: "POST",
                body:data
            })
        }),
        getAllTeams: builder.query<{}, any>({
            query: () => ({
                url: "teams",
                method: "GET"
            })
        }),
        getTeamById: builder.query<{}, any>({
            query: (id) => ({
                url: `teams/details/${id}`,
                method: "GET"
            })
        }),
        updateTeam: builder.mutation<{}, any>({
            query: ({id,data}) => ({
                url: `teams/update/${id}`,
                method: "PUT",
                body:data
            })
        }),
        deleteTeam: builder.mutation<{}, any>({
            query: (id) => ({
                url: `teams/delete/${id}`,
                method: "DELETE"
            })
        }),

        // vendor start

        addVendor: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getAllVendors: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        getVendorById: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        updateVendor: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),
        deleteVendor: builder.mutation<{}, any>({
            query: () => ({
                url: "",
                method: ""
            })
        }),

    })

})

export const {
    useAddDepartmentMutation,
    useAddTeamMutation,
    useGetAllDepartmentsQuery,
    useGetAllTeamsQuery,
    useGetAllEquipmentQuery,
    useAddEquipmentMutation,
    useGetEquipmentByIdMutation,
    useUpdateEquipmentMutation,
    useDeleteEquipmentMutation

}=organizationsApi;